class Container extends Component
  @className: 'Container'
  attach: (thang) ->
    pickUpAction = name: 'pickUpItem', cooldown: 0, specificCooldown: 0
    dropAction = name: 'dropItem', cooldown: 0, specificCooldown: 0
    super thang
    thang.containerStack = []
    thang.addActions pickUpAction
    thang.addActions dropAction

  update: ->
    return unless @exists
    return unless (@intent is "pickUpItem" or @intent is "dropItem") and @distance(@getTargetPos()) <= 5.01 and @act()
    if @intent is "pickUpItem"
      @doPickUpItem()
    else if @intent is "dropItem"
      @doDropItem()
    @unblock?()
    @intent = undefined
    @setTarget null
    @setAction 'idle'

  pickUpItem: (object) ->
    unless object?
      # TODO: Argument error
      return
    # TODO: Check if object is a unit
    @setTarget object
    @intent = "pickUpItem"
    if @distance(object) >= 5
      @setTarget object
      @setAction "move"
    else
      @setAction "pickUpItem"
    return @block?()
  
  dropItem: (object) ->
    unless @peekItem()?
      @sayWithoutBlocking "I don't have an item to drop!"
      return
    @intent = "dropItem"
    # Object is a container
    if object? and object.pushItem? and object.popItem?
      @setTarget object
    else if object? and object.pos?
      @setTarget object
    # Object has x/y coords
    else if object? and typeof object.x is 'number' and typeof object.y is 'number'
      @setTargetPos {x:object.x, y:object.y}
    # Just dump it at our feet
    else
      @setTargetPos @pos
    if @distance(@getTargetPos()) >= 5
      @setAction 'move'
    return @block?()

  doPickUpItem: ->
    # Hit the stack limit.
    if @containerStack.length >= @stackSize
      @sayWithoutBlocking "I can't carry any more items!"
      return
    # Target is a container
    if @target.pushItem? and @target.popItem?
      item = @target.popItem()
      @pushItem item
    # Target is an item
    else if @target.setParent? and @target.removeParent?
      # Target doesn't have a parent, so we can grab it.
      unless @target.parent?
        @pushItem @target
      # Target has a parent, so we cannot.
      else
        # TODO: Evaluate if we want users to add/remove items from containers arbitrarily?
        # Some containers are stacks, and cannot be done that way?
        # Seems arbitrary...
        @sayWithoutBlocking "That item is already in a container!"
    # Target is not a container, or an item
    else
      @sayWithoutBlocking "I don't think that is an item, or a container!"

  doDropItem: ->
    @brake?()
    if @target?
      if @target.pushItem? and @target.popItem?
        item = @popItem()
        @target.pushItem(item)
      else
        item = @popItem()
        item.pos.x = @getTargetPos().x
        item.pos.y = @getTargetPos().y
    else
      item = @popItem()
      item.pos.x = @getTargetPos().x
      item.pos.y = @getTargetPos().y

  pushItem: (object) ->
    if object.setParent? and object.removeParent?
      zPos = @height * (@scaleFactorY || 1)
      for item in @containerStack
        zPos += (item.scaleFactorY || 1) * item.height * 3
      zPos += (object.scaleFactorY || 1) * object.height
      @containerStack.push(object)
      object.anchorHeight = zPos
      object.setParent(@)
      return object
    else
      return null

  popItem: () ->
    item = @containerStack[@containerStack.length - 1]
    item.removeParent()
    item.pos.z = 0
    item.anchorHeight = null
    @containerStack.pop()
    return item

  peekItem: () ->
    item = @containerStack[@containerStack.length - 1]
    return item

  viewStack: () ->
    stack = []
    for item in @containerStack
      stack.push item
    return stack
