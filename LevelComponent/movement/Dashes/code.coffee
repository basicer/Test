Vector = require 'lib/world/vector'
{ArgumentError} = require 'lib/world/errors'

class Dashes extends Component
  @className: 'Dashes'
  @hasDashed = false
  attach: (thang) ->
    dashAction = name: 'dash', cooldown: @cooldown, specificCooldown: @specificCooldown
    
    delete @cooldown
    delete @specificCooldown
    
    super thang
    thang.addActions dashAction
    
  dash: (target) ->
    unless target?
      throw new ArgumentError "You need to dash towards a target, or in a direction!"
    if (target.isVector) or (_.isPlainObject(target) and (target.x? and target.y?))
        @setTargetPos target
      else if target.pos?
        @setTarget target, 'dash'
      else
        # TODO: Argument errors
    @setAction 'dash'
    return @block()
    
  performDash: () ->
    dashSpeed = @maxSpeed * @dashSpeedMultiplier
    
    dashVector = x:@getTargetPos().x - @pos.x, y:@getTargetPos().y - @pos.y
    dashMagnitude = Math.sqrt (dashVector.x * dashVector.x + dashVector.y * dashVector.y)
    dashVector = x:dashVector.x / dashMagnitude, y:dashVector.y / dashMagnitude
    dashVector = x:dashVector.x * dashSpeed, y: dashVector.y * dashSpeed
    
    @velocity.x = dashVector.x
    @velocity.y = dashVector.y
    
    if @turnToDirection
      @rotation = @velocity.heading()
      @hasRotated = true
    
    @sayWithoutBlocking? "Dash!"
    @setAction 'idle'
    @hasDashed = true
    
  update: ->
    return unless @action is 'dash' and @act()
    @unblock()
    @performDash()
    
    
    
    