class Stomps extends Component
  @className: "Stomps"

  constructor: (config) ->
    super config
    @stompRadius ?= 15
    @stompMass ?= 3000
    @stompDamage ?= 15
    @stompZAngle ?= 1
  
  attach: (thang) ->
    stompAction = name: 'stomp', cooldown: @cooldown, specificCooldown: @specificCooldown
    delete @cooldown
    delete @specificCooldown
    super thang
    thang.addActions stompAction

  stomp: ->
    @setAction 'stomp'
    if @stompedOnce
      @stompedOnce = false
      @setAction 'idle'
      "done"
    else
      "stomp"

  getStompMomentum: (targetPos) ->
    dir = targetPos.copy().subtract(@pos).normalize()
    dir.z = if @stompZAngle then Math.sin @stompZAngle else 0
    dir.multiply @stompMass, true
    dir

  performStomp: () ->
    for target in @getEnemies()
      continue unless target.velocity and (d = @distance target) < @stompRadius
      momentum = @getStompMomentum target.pos
      pct = (1 - (d / @stompRadius))
      if target.isGrounded?()
        target.velocity.z = Math.max target.velocity.z, 0
      target.velocity.add Vector.multiply(momentum, pct / target.mass, true), true
      target.health -= 200+@stompDamage * pct
      target.pos.z += @pos.z
      if target.hasEffects
        target.addEffect {name: 'confuse', duration: 3, reverts: true, factor: 0.01, targetProperty: 'actionTimeFactor'}
    args = [parseFloat(@pos.x.toFixed(2)),parseFloat(@pos.y.toFixed(2)),parseFloat(@stompRadius.toFixed(2)),'#8FBC8F']
    @addCurrentEvent "aoe-#{JSON.stringify(args)}"
    @unhide?() if @hidden
    @stompedOnce = true if @plan

  update: ->
    return unless @action is 'stomp' and @isGrounded()
    if @stomping
      @performStomp()
      @stomping = false
    else if @action is 'stomp' and @isGrounded() and @act()
      @velocity.z = @world.gravity * (@actions.stomp.cooldown - @world.dt) / 2
      @stomping = true
