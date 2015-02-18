class Lightstone extends Component
  @className: 'Lightstone'

  constructor: (config) ->
    super config

  attach: (thang) ->
    super thang
    thang.isCollectable = true
    thang.maintainsElevation = () -> true
    thang.pickedUpBy = null
    thang.lightstoneDuration = @lightstoneDuration
    thang.lightstoneTimer = 0

  chooseAction: ->
    @checkLightstoneTimer()
    @floatGem() if @pickedUpBy
    
  # TODO: Right now this is called by the Referee, need to figure out a better way
  wasCollectedBy: (thang) ->
    # expire old lightstone, if it exists
    thang.hasActiveLightstone?.expireLightstone()
    thang.hasActiveLightstone = @
    # Swap aura to the hero
    @showAura = false
    thang.showAura = true
    # configure this lightstone as picked up
    @pickedUpBy = thang
    @isCollectable = false
    @lightstoneTimer = @lightstoneDuration
    # Undo the setExists false from being collected
    @setExists true

  expireLightstone: ->
    return if @pickedUpBy == null
    @pickedUpBy.hasActiveLightstone = null
    @lightstoneTimer = 0
    @setExists false
    @pickedUpBy.showAura = false
    @pickedUpBy = null

  checkLightstoneTimer: ->
    if @lightstoneTimer > 0
      @lightstoneTimer -= @world.dt
    else
      @expireLightstone()
    
  floatGem: ->
    return unless @pickedUpBy
    @hasMoved = true
    @pos.x = @pickedUpBy.pos.x
    @pos.y = @pickedUpBy.pos.y
    @pos.z = 8
    