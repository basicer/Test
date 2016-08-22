{ArgumentError} = require 'lib/world/errors'

class GameReferee extends Component
  @className: 'GameReferee'
  isGameReferee: true

  initialize: ->
    #console.log 'We have methods', (_.keys @).join('\n')
    # Temporary janky solution to default Hero Placeholder Components we don't want: delete them!
    for propertyToIgnore in [
      'pos'
      'rotation'
      'width'
      'height'
      'shape'
      'depth'
      'volume'
      'dragArea'
      'hasRotated'
      'rectangle'
      'ellipse'
      'getShape'
      'isGrounded'
      'isAirborne'
      'contains'
      'distance'
      'distanceSquared'
      'distanceTo'
      'distanceToValidateReturn'
      'getNearest'
      'findNearest'
      'intersects'
      'team'
      'superteam'
      'significantProperty'
      'getFriends'
      'findFriends'
      'hasFriends'
      'getCombatants'
      'findCombatants'
      'findCorpses'
      'getEnemies'
      'findEnemies'
      'hasEnemies'
      'getEnemyMissiles'
      'findEnemyMissiles'
      'getFriendlyMissiles'
      'findFriendlyMissiles'
      'getNearestFriend'
      'findNearestFriend'
      'getNearestEnemy'
      'findNearestEnemy'
      'getNearestEnemyValidateReturn'
      'getNearestCombatant'
      'findNearestCombatant'
      'allianceSystem'
      'allies'
      'allAllies'
    ]
      delete @[propertyToIgnore]

    @spawnAliases =
      "munchkin": ["munchkin-m","munchkin-f"]
      "soldier": ["soldier-m", "soldier-f"]
      "archer": ["archer-f", "archer-m"]
      "forest": ["tree-stand-1","tree-stand-2","tree-stand-3","tree-stand-4","tree-stand-5","tree-stand-6"]

    @validSpawnTypes = _.union(@buildTypes, _.keys(@spawnAliases))

    @actionHelpers = {}
    
    @goals = []
    @goalsCompleted = 0
    @numSpawns = 0

  ##### Helpers #####

  reverseAlias: (str) ->
    return str if @spawnAliases[str]
    for key of @spawnAliases
      return key if @spawnAliases[key].indexOf(str) > -1
    str
  
  gameBuild: (toBuild, x, y) ->
    # Provide build() in non-plannable, old levels. It doesn't work with plan.
    toBuild = @buildables[toBuild]
    #@actions.build.cooldown = toBuild.buildCooldown
    #@setAction 'build'
    @toBuild = toBuild
    @targetPos = null
    @setTargetPos new Vector(x, y)
    @toBuild  # Return what we are trying to build.

  ##### Shareable Game APIs #####

  #debug: (str) ->
    #console.log str

  spawnXY: (type, x, y) ->
    if @numSpawns > @maxSpawnables
      throw new Error("Maximum spawns (#{@maxSpawnables}) exceeded.")
    if typeof type is 'undefined'
      throw new ArgumentError "You need something to spawn.", "spawnXY", "type", "string", type
    unless type and type in @validSpawnTypes
      throw new ArgumentError "You need a string to spawn; one of [\"#{@validSpawnTypes.join('\", \"')}\"]", "spawnXY", "type", "string", type
    if not _.isNumber x
      throw new ArgumentError "Spawn the #{type} at an (x, y) coordinate.", "spawnXY", "x", "number", x
    if not _.isNumber y
      throw new ArgumentError "Spawn the #{type} at an (x, y) coordinate.", "spawnXY", "y", "number", y

    # Resolve aliases
    if aliases = @spawnAliases[type]
      type = aliases[@world.rand.rand aliases.length]

    #return @spawnHeroXY(x, y) if type is 'hero'

    # Build the thang
    @gameBuild type, x, y
    
    thang = @performBuild()
    return unless thang
    @numSpawns += 1

    unless type is "player"
      thang.gameEntity = true
      thang.commander = @
      @attachActionHelpers([thang])
      thang.trigger? "spawn"
    thang

  spawnHeroXY: (x, y) ->
    # TODO: Add 3rd argument for spawning specific hero types, default to "captain"
    if @world.player
      throw new Error("You can only spawn one hero")

    player = @spawnXY "player", x, y
    player.isPlayer = true
    @world.player = player
    player.on("click", @defaultPlayerClickHandler)
    player

  setActionFor: (thangOrType, event, fn) ->
    if typeof(thangOrType) is "string"
      # TODO: check for valid types?
      @actionHelpers[thangOrType] ?= {}
      @actionHelpers[thangOrType][event] ?= []
      @actionHelpers[thangOrType][event].push(fn) unless @actionHelpers[thangOrType][event].indexOf(fn) > -1
      units = (u for u in @world.thangs when u.type is thangOrType)
      @attachActionHelpers units

    else if typeof(thangOrType) is 'object'
      thangOrType.on?(event, fn)

  attachActionHelpers: (units) ->
    return unless units?.length
    for unit in units
      t = @reverseAlias unit.type
      if events = @actionHelpers?[t]
          for event in _.keys(events)
            unit.on(event, fn) for fn in events[event]


  addMoveGoalXY: (x, y) ->
    if not _.isNumber x
      throw new ArgumentError "Set the goal at an (x, y) coordinate.", "addMoveGoalXY", "x", "number", x
    if not _.isNumber y
      throw new ArgumentError "Set the goal at an (x, y) coordinate.", "addMoveGoalXY", "y", "number", y

    mark = @spawnXY('x-mark-red', x, y)
    @setGoal("move", { pos: Vector(x,y), mark: mark } )

  addDefeatGoal: ->
    @addGoal("defeat", { team: "ogres" })

  addSurviveGoal: ->
    @addGoal("survive")
    
  addCollectGoal: ->
    @addGoal("collect", { types: ['Gem', 'Chest of Gems'] })
  
  setBehavior: (target, behaviorString) ->
    unless target.type in ["munchkin", "soldier"]
      throw new Error "Only units can have behaviors. Did you mean to use any of : " + ["munchkin", "soldier"]
    unless behaviorString in ["attackNearest"]
      throw new Error "Unknown behavior string: " + behaviorString + ". Did you mean to use any of: " + ["attackNearest"]
    switch behaviorString
      when "attackNearest"
        target.commander = null
    
  # TODO: remove this after fixing levels to use addGoal()
  setGoal: (goalType, config={}) ->
    @addGoal(goalType, config)
    
  addGoal: (goalType, config={}) ->
    # TODO: Type and Config check
    goal = type: goalType, success: false, config: config
    @goals.push goal

  ##### Input Handling #####

  defaultPlayerClickHandler: (event) ->
    #console.log _.keys(event)
    player = event.target
    if event.type is 'click'
      target = event.target.world.getThangByID event.thangID
      if target and target.team isnt player.team and target.health > 0
        player.attack? target
      else
        world = event.target.world
        nearby = (u for u in world.thangs when not u.isPlayer and u.team isnt world.player.team and u.isAttackable and u.health > 0 and u.pos.distanceSquared(event.pos) <= 2.25)
        if nearby.length > 0
          console.log "NEAR CLICK ATTACK!!"
          player.attack? nearby[0]
        else
          player.move event.pos


  ##### Game Logic #####
  update: ->
    for thang in @world.thangs when thang.trigger?
      thang.trigger "update"
    @checkGoals() if @goals.length
  
  checkGoals: ->
    return if @goals.length is 0
    for goal in @goals
      continue if goal.success
      @goalHandler(goal)
    if @goalsCompleted == @goals.length
      @setGoalState 'win-game', 'success'

  goalHandler: (goal) ->
    switch goal.type
      when 'move'
        if @world.player?.distanceSquared(goal.config.pos) < 1
          goal.config.mark?.setExists false if goal.config.mark
          goal.success = true
          @goalsCompleted++
      when 'time'
        if @world.age >= goal.config
          goal.success = true
          @goalsCompleted++
      when 'survive', 'live'
        if @world.player?.health <= 0
          @setGoalState 'win-game', 'failure'
        if @goalsCompleted is (@goals.length - 1)
          goal.success = true
          @goalsCompleted++
      when 'defeat'
        team = if goal.config?.team then goal.config.team else "ogres"
        defeatables = (thang for thang in @world.thangs when thang.team is team and thang.exists).length
        undefeated = (thang for thang in @world.thangs when thang.team is team and thang.health > 0 and thang.exists and thang.isAttackable).length
        if defeatables > 0 and undefeated is 0
          goal.success = true
          @goalsCompleted += 1
      when 'collect', 'collect-gems'
        # TODO: use types from goal.config.types
        if (thang for thang in @world.thangs when thang.spriteName in ['Gem', 'Chest of Gems']).length > 0 and (thang for thang in @world.thangs when thang.spriteName in ['Gem', 'Chest of Gems'] and thang.exists).length is 0
          goal.success = true
          @goalsCompleted += 1