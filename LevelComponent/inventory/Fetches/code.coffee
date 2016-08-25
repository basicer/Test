{ArgumentError} = require 'lib/world/errors'

class Fetches extends Component
  @className: 'Fetches'

  attach: (thang) ->
    super thang
    thang.inventorySystem = thang.world.getSystem("Inventory")

  fetch: (item) ->
    unless item
      throw new ArgumentError "You must specify an item to fetch.", "fetch", "item", "object", item

    unless item.isCarryable
      @sayWithoutBlocking? "I can't carry that!"
      return

    unless @peekItem()
      @pickUpItem item

  update: ->
    return unless @commander
    return if @intent is 'pickUpItem' or @intent is 'dropItem'
    if @peekItem() and @commander
      @dropItem x: @commander.pos?.x, y: @commander.pos?.y

  # Pets don't collect, so they need this version of findNearestItem.
  # Only find items they can carry.
  getCarryableItems: ->
    if arguments[0]?
      throw new ArgumentError "", "getItems", "", "", arguments[0]
    return [] unless @canSee
    items = (item for item in @inventorySystem.collectables when @canSee(item) and item isnt @ and item.isCarryable)
    items

  findNearestItem: ->
    if arguments[0]?
      throw new ArgumentError "", "findNearestItem", "", "", arguments[0]
    items = @getCarryableItems()
    return null unless items.length
    @getNearest items
    