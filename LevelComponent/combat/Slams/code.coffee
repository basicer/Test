{ArgumentError} = require 'lib/world/errors'

class Slams extends Component
  @className: 'Slams'
  attach: (thang) ->
    @slamRange = 10
    @impulseRange = 20
    slamAction = name: 'slam', cooldown: 1, specificCooldown: 10
    super thang
    thang.addActions slamAction
    
  slam: (target) ->
    unless target?
      throw new ArgumentError "Target is null. Is there always a target to slam? (Use if?)", "slam", "target", "object", target
    
    @setTarget target
    return 'done' unless @target
    
    if @actions.move and @distanceTo(@target, false) > @slamRange
      @setAction 'move'
    else
      @setAction 'slam'
    
    if @distanceTo(@target, false) <= @slamRange and @getCooldown('slam') > 1
      "done"
    else if @slammedOnce or @target?.health <= 0
      @slammedOnce = false
      @setAction 'idle'
      "done"
    else
      "slam"
      
  getSlamMomentum: (targetPos) ->
    dir = targetPos.copy().subtract(@pos).normalize()
    dir.z = Math.sin Math.PI / 8
    dir.multiply @bashMass, true
    dir
    
  getSecondaryMomentum: (targetPos, targetPos2) ->
    # TODO: Optimize this. Currently doing several vector algorithms repeatbly instead of in a row.
    
    a = targetPos2.copy().subtract(@pos)
    b = targetPos.copy().subtract(@pos)
    # Dot product check.
    # Negative value means the target2 is behind the user's position.
    # Value over the magnitude of the distance to the enemy means they are past the enemy.
      # However, to give it a nice shape, we add an extra circular radius check (using the impulse range) so enemies around the target also get pushed.
    vDot = a.dot(b.copy().normalize(), true);
    if vDot < 0 or (vDot > b.magnitude() and targetPos.distance(targetPos2) > @impulseRange)
      return
    # Vector rejection (perpendicular vector from b to a)
    vRej = a.copy().subtract(a.copy().projectOnto(b.copy().normalize(), false));
    # If the scalar size of the rejection is greater than the radius of our impulse, ignore.
    if vRej.magnitude() > @impulseRange
      return
    # Normalize to direction
    dir = vRej.copy().normalize()
    # Set the standard flight angle
    dir.z = Math.sin Math.PI / 8
    # Multiply the bashMass by the inverse magnitude of the vRej, with the radius of our impulse being the maximum range to hit with Slam.
    dir.multiply (@bashMass * (1 - vRej.magnitude() / @impulseRange)), true
    dir
    
  update: (target) ->
    return unless @action is 'slam' and @target and @distanceTo(@target, false) <= @slamRange and @act()
    @sayWithoutBlocking? "Slam!"
    @rotation = Vector.subtract(@target.pos, @pos).heading()
    @target.takeDamage? @bashDamage, @, @getSlamMomentum(@target.pos)
    for enemy in @findEnemies() when enemy isnt @target
      tMom = @getSecondaryMomentum(@target.pos, enemy.pos)
      if tMom?
        enemy.takeDamage? @bashDamage, @, tMom
    @brake?()
    @unhide?() if @hidden
    @slammedOnce = true if @plan
    
  ###
  bash: (target) ->
    unless target?
      throw new ArgumentError "Target is null. Is there always a target to bash? (Use if?)", "bash", "target", "object", target
      
    @setTarget target, 'bash'
    return "done" unless @target  # If Naria's hide ability has nulled out our target while we were chasing, we are done.

    if @actions.move and @distance(@target, true) > @bashRange
      @setAction 'move'
    else
      @setAction 'bash'
    if @distance(@target, true) <= @bashRange and @getCooldown('bash') > 1  # TODO: test only doing this after one frame, so that we don't infinitely loop?
      "done"
    else if @bashedOnce or @target?.health <= 0
      @bashedOnce = false
      @setAction 'idle'
      "done"
    else
      "bash"

  getBashMomentum: (targetPos) ->
    dir = targetPos.copy().subtract(@pos).normalize()
    dir.z = Math.sin Math.PI / 8
    dir.multiply @bashMass, true
    dir

  update: ->
    return unless @action is 'bash' and @target and @distance(@target, true) <= @bashRange and @act()
    @say? 'Bash!'
    @rotation = Vector.subtract(@target.pos, @pos).heading()  # Face target
    momentum = @getBashMomentum(@target.pos)
    @target.takeDamage? @bashDamage, @, momentum
    @brake?()
    @unhide?() if @hidden
    @bashedOnce = true if @plan
  ###
  