{
	"_id": "57be313814bddd200020fcdc",
	"creator": "537d01f484c54c6e05c05989",
	"slug": "hasevents",
	"name": "HasEvents",
	"original": "524b3e3fff92f1f4f800000d",
	"__v": 0,
	"js": "var HasEvents,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nHasEvents = (function(_super) {\n  __extends(HasEvents, _super);\n\n  HasEvents.className = \"HasEvents\";\n\n  HasEvents.prototype.hasChangedCurrentEvents = false;\n\n  function HasEvents(options) {\n    HasEvents.__super__.constructor.call(this, options);\n    this.currentEvents = [];\n    this.eventHandlers = {};\n    this.eventQueue = [];\n    this.eventThreadAetherStack = [];\n  }\n\n  HasEvents.prototype.attach = function(thang) {\n    HasEvents.__super__.attach.call(this, thang);\n    return thang.addTrackedProperties(['currentEvents', 'array']);\n  };\n\n  HasEvents.prototype.addCurrentEvent = function(event) {\n    this.currentEvents.push(event);\n    return this.keepTrackedProperty('currentEvents');\n  };\n\n  HasEvents.prototype.on = function(eventType, handler) {\n    var _base;\n    if ((_base = this.eventHandlers)[eventType] == null) {\n      _base[eventType] = [];\n    }\n    if (eventType === \"spawn\") {\n      handler.triggerOneTimeOnly = true;\n    }\n    handler.timesTriggered = 0;\n    this.eventHandlers[eventType].push(handler);\n    if (eventType === \"spawn\" && this.didTriggerSpawnEvent) {\n      return this.trigger(\"spawn\");\n    }\n  };\n\n  HasEvents.prototype.trigger = function(eventType, eventData) {\n    var handler, handlers, _i, _len, _results;\n    if (eventData == null) {\n      eventData = {};\n    }\n    if (eventType === \"spawn\") {\n      this.didTriggerSpawnEvent = true;\n    }\n    if (!(handlers = this.eventHandlers[eventType])) {\n      return;\n    }\n    _results = [];\n    for (_i = 0, _len = handlers.length; _i < _len; _i++) {\n      handler = handlers[_i];\n      eventData.type = eventType;\n      eventData.target = this;\n      if (handler.triggerOneTimeOnly && handler.timesTriggered >= 1) {\n        continue;\n      }\n      handler.timesTriggered += 1;\n      _results.push(this.eventQueue.push({\n        data: eventData,\n        handler: handler\n      }));\n    }\n    return _results;\n  };\n\n  HasEvents.prototype.off = function(eventType, handler) {\n    var h, handlers;\n    if (handler == null) {\n      handler = null;\n    }\n    if (!(handlers = this.eventHandlers[eventType])) {\n      return;\n    }\n    if (handler) {\n      return this.eventHandlers[eventType] = (function() {\n        var _i, _len, _results;\n        _results = [];\n        for (_i = 0, _len = handlers.length; _i < _len; _i++) {\n          h = handlers[_i];\n          if (h !== handler) {\n            _results.push(h);\n          }\n        }\n        return _results;\n      })();\n    } else {\n      return this.eventHandlers[eventType] = [];\n    }\n  };\n\n  HasEvents.prototype.findEventAether = function() {\n    var _ref, _ref1, _ref2;\n    if (!((((_ref = this.commander) != null ? _ref.id : void 0) != null) && this.commander.id !== 'Hero Placeholder')) {\n      return (_ref1 = this.world.userCodeMap['Hero Placeholder']) != null ? _ref1.plan : void 0;\n    }\n    if (this.commander.id === 'Hero Placeholder 1') {\n      return (_ref2 = this.world.userCodeMap['Hero Placeholder 1']) != null ? _ref2.plan : void 0;\n    }\n    return null;\n  };\n\n  HasEvents.prototype.update = function() {\n    var aether, event, _ref;\n    while ((_ref = this.eventQueue) != null ? _ref.length : void 0) {\n      event = this.eventQueue.shift();\n      if (event.handler.inspect != null) {\n        aether = this.findEventAether();\n        if (!aether) {\n          return;\n        }\n        this.eventThreadAetherStack.unshift(aether.createThread(event.handler)(event.data));\n      } else {\n        event.handler(event.data);\n      }\n    }\n    return this.processNextEventThread();\n  };\n\n  HasEvents.prototype.processNextEventThread = function() {\n    var done, error, programmableThang, value, _ref, _ref1, _ref2;\n    if (!this.eventThreadAetherStack.length) {\n      return;\n    }\n    try {\n      _ref = this.eventThreadAetherStack[0].next(), value = _ref.value, done = _ref.done;\n    } catch (_error) {\n      error = _error;\n      programmableThang = ((_ref1 = this.commander) != null ? _ref1.id : void 0) === 'Hero Placeholder 1' ? this.commander : this.world.getThangByID('Hero Placeholder');\n      if (programmableThang) {\n        programmableThang.handleProgrammingError(error, 'plan');\n      }\n      _ref2 = [null, true], value = _ref2[0], done = _ref2[1];\n    }\n    if (done) {\n      this.eventThreadAetherStack.shift();\n      return this.processNextEventThread();\n    }\n    return this.eventThreadAetherStack[0];\n  };\n\n  return HasEvents;\n\n})(Component);\n",
	"commitMessage": "Add some TODOs",
	"parent": "57be22e3d5d93f6670e86765",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"official": false,
	"configSchema": {
		"id": "__base__",
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [],
	"description": "This Thang tracks events that happen to it on each frame, like 'take-damage'.",
	"system": "event",
	"codeLanguage": "coffeescript",
	"searchStrings": "has events h ha has hase hasev haseve haseven",
	"created": "2016-08-24T23:43:52.434Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 52,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "512ef4805a67a8c507000001"
		},
		{
			"access": "read",
			"target": "public"
		}
	]
}