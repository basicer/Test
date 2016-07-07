{ArgumentError} = require 'lib/world/errors'

class Backstabs extends Component
  @className: 'Backstabs'

  attach: (thang) ->
    backstabAction = name: 'backstab', cooldown: @cooldown, specificCooldown: @specificCooldown
    delete @cooldown
    delete @specificCooldown
    super thang
    thang.addActions backstabAction

  backstab: (target) ->
    unless target?
      throw new ArgumentError "Target is null. Is there always a target to backstab? (Use if?)", "backstab", "target", "object", target
    @setTarget target, 'backstab'
    return "done" unless @target  # If Naria's hide ability has nulled out our target while we were chasing, we are done.
    if @actions.move and @distance(@target, true) > @backstabRange
      @setAction 'move'
    else
      @setAction 'backstab'
    if @distance(@target, true) <= @backstabRange and @getCooldown('backstab') > 1
      "done"
    else if @backstabbedOnce or @target?.health <= 0
      @backstabbedOnce = false
      @setAction 'idle'
      "done"
    else
      "backstab"

  getBackstabMomentum: (targetPos) ->
    dir = targetPos.copy().subtract(@pos).normalize()
    dir.z = Math.sin Math.PI / 2
    dir.multiply @backstabMass, true
    dir

  update: ->
    return unless @action is 'backstab' and @target and @distance(@target, true) <= @backstabRange and @act()
    success = @pos.distanceSquared(@target.pos) < @pos.distanceSquared(Vector.add @target.pos, new Vector(1, 0).rotate(@target.rotation ? 0))
    damage = if success then @backstabDamage else @backstabDamage * 0.1
    @rotation = Vector.subtract(@target.pos, @pos).heading()  # Face target
    momentum = if success then @getBackstabMomentum(@target.pos) else null
    @target.takeDamage? damage, @, momentum
    @brake?()
    @unhide?() if @hidden
    @sayWithoutBlocking? if success then "Boom!" else "Err... hi?"
    @backstabbedOnce = true if @plan
