class Carryable extends Component
  @className: 'Carryable'
  isCarryable: true

  attach: (thang) ->
    super thang
    unless thang.move
      thang.addTrackedProperties ['pos', 'Vector']
      thang.keepTrackedProperty 'pos'

  update: ->
    if @parent?
      @pos.x = @parent.pos.x
      @pos.y = @parent.pos.y
      @pos.z = @anchorHeight + @parent.pos.z - @parent.height/2
      @velocity?.z = 0

  setParent: (parent) ->
    @parent = parent

  removeParent: ->
    @parent = null
