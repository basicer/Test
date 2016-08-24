class HasEvents extends Component
  @className: "HasEvents"
  hasChangedCurrentEvents: false
  constructor: (options) ->
    super options
    @currentEvents = []
    @eventHandlers = {}
    @eventQueue = []
    @eventThreadAetherStack = []

  attach: (thang) ->
    super thang
    thang.addTrackedProperties ['currentEvents', 'array']

  addCurrentEvent: (event) ->
    # "currentEvents" are just strings, like 'take-damage'. That's a legacy API for sending some visualizable stuff to the Surface and triggering some scripts and goals.
    # Most of the events we care about *inside* the game engine are actual real event objects, with on/trigger/off and event handlers the player will write.
    @currentEvents.push event
    @keepTrackedProperty 'currentEvents'

  on: (eventType, handler) ->
    # TODO: handle undefined/null, function
    @eventHandlers[eventType] ?= []
    handler.triggerOneTimeOnly  = true if eventType is "spawn"
    handler.timesTriggered = 0
    @eventHandlers[eventType].push(handler)
    if eventType is "spawn" and @didTriggerSpawnEvent
      @trigger "spawn"


  trigger: (eventType, eventData={}) ->
    # TODO: handle undefined/null, function
    @didTriggerSpawnEvent = true if eventType is "spawn"
    return unless handlers = @eventHandlers[eventType]
    for handler in handlers
      eventData.type = eventType
      eventData.target = @
      continue if handler.triggerOneTimeOnly and handler.timesTriggered >= 1
      handler.timesTriggered += 1
      @eventQueue.push data: eventData, handler: handler

  off: (eventType, handler=null) ->
    # TODO: handle undefined/null, function
    return unless handlers = @eventHandlers[eventType]
    if handler
      @eventHandlers[eventType] = (h for h in handlers when h isnt handler)
    else
      @eventHandlers[eventType] = []

  # once: # do callback once then remove it
  
  findEventAether: ->
    # TODO: fix the jank. This maybe not work unless we are setting @commander, which we just decided wouldn't be a good idea for pets.
    return @world.userCodeMap['Hero Placeholder']?.plan unless @commander?.id? and @commander.id isnt 'Hero Placeholder'
    return @world.userCodeMap['Hero Placeholder 1']?.plan if @commander.id is 'Hero Placeholder 1'
    return null  # Some other commander?
  
  update: ->
    # TODO: at some point, if we made this happen after the plans() chooseAction, it would update the line-by-line highlighting in the editor.
    while @eventQueue?.length
      event = @eventQueue.shift()
      if event.handler.inspect?
        aether = @findEventAether()
        return unless aether
        @eventThreadAetherStack.unshift aether.createThread(event.handler)(event.data)
      else
        # handler is just a native function so we'll invoke it
        event.handler(event.data)
    @processNextEventThread()
    
  processNextEventThread: ->
    return unless @eventThreadAetherStack.length
    try
      {value, done} = @eventThreadAetherStack[0].next()
    catch error
      programmableThang = if @commander?.id is 'Hero Placeholder 1' then @commander else @world.getThangByID 'Hero Placeholder'
      if programmableThang
        programmableThang.handleProgrammingError error, 'plan'
      [value, done] = [null, true]
    if done
      @eventThreadAetherStack.shift()
      return @processNextEventThread()
    @eventThreadAetherStack[0]
