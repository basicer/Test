class RadiantAuraReferee extends Component
  @className: 'RadiantAuraReferee'
  chooseAction: ->
    @setUp() unless @didSetUp
    @checkCollections()
    @controlSkeletons()
    
  setUp: ->
    @didSetUp = true
    @hero = @world.getThangByID 'Hero Placeholder'
    @hero.gemsCollected = 0
    @hero.showAura = false

  # Did the hero collect a gem? Need a beter way to figure this out
  checkCollections: ->
    if @hero.gemsCollected < @hero.collectedThangIDs.length
      @hero.gemsCollected = @hero.collectedThangIDs.length
      @gemWasCollected _.last(@hero.collectedThangIDs)
      
  # Stuff to do when a gem is collected
  gemWasCollected: (gemID) ->
    gem = @world.getThangByID gemID
    gem.wasCollectedBy? @hero

  # Skeletons attack, idle, or flee
  controlSkeletons: ->
    for skeleton in @world.thangs when skeleton.spriteName is "Skeleton"
      enemy = skeleton.getNearestEnemy()
      if enemy 
        if enemy.hasActiveLightstone
          pos = skeleton.pos.copy()
          pos.y -= 1
          skeleton.setTargetPos pos
          skeleton.setAction 'move'
        else 
          skeleton.setTarget enemy
          skeleton.attack(enemy)
      else
        skeleton.setAction 'idle' unless skeleton.target
        
  checkVictory: ->
    return unless @getGoalState('escape') is 'success'
    for skeleton in @world.thangs when skeleton.spriteName is "Skeleton"
      return if skeleton.health > 0 and skeleton.target is @hero
    @world.endWorld true, 0.2
