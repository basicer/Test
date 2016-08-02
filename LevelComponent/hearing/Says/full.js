{
	"_id": "57a06b29f380c444007fbbe9",
	"slug": "says",
	"creator": "577fa93a06c3d62900b17b3a",
	"name": "Says",
	"original": "524b7b9f7fc0f6d519000015",
	"__v": 0,
	"js": "var ArgumentError, Says,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nArgumentError = require('lib/world/errors').ArgumentError;\n\nSays = (function(_super) {\n  __extends(Says, _super);\n\n  Says.className = 'Says';\n\n  function Says(config) {\n    Says.__super__.constructor.call(this, config);\n    this.voiceRangeSquared = this.voiceRange * this.voiceRange;\n    if (this.cooldown) {\n      this._sayAction = {\n        name: 'say',\n        cooldown: this.cooldown\n      };\n    }\n  }\n\n  Says.prototype.attach = function(thang) {\n    Says.__super__.attach.call(this, thang);\n    if (thang.acts && this._sayAction) {\n      thang.addActions(this._sayAction);\n    }\n    return thang.addTrackedProperties([\"sayMessage\", \"string\"], [\"sayStartTime\", \"number\"]);\n  };\n\n  Says.prototype.say = function(message, data, _excess) {\n    var _ref, _ref1;\n    if (message == null) {\n      throw new ArgumentError(\"Say what?\", \"say\", \"message\", \"string\", message);\n    }\n    if ((data != null) && !_.isObject(data)) {\n      throw new ArgumentError(\"data should be an object, like {target: enemy, action: 'attack'}\", \"say\", \"data\", \"object\", data);\n    }\n    if (_excess != null) {\n      throw new ArgumentError('', 'say', \"_excess\", \"\", \"\", 1);\n    }\n    return this.sayWithDuration((_ref = (_ref1 = this.actions.say) != null ? _ref1.cooldown : void 0) != null ? _ref : 3.0, message, data != null ? data : {});\n  };\n\n  Says.prototype.sayWithoutBlocking = function(message, duration) {\n    var _ref, _ref1;\n    if (duration == null) {\n      duration = (_ref = (_ref1 = this.actions.say) != null ? _ref1.cooldown : void 0) != null ? _ref : 3.0;\n    }\n    this.preventSayBlocking = true;\n    this.sayWithDuration(duration, message);\n    return this.preventSayBlocking = false;\n  };\n\n  Says.prototype.sayWithDuration = function(duration, message, data) {\n    var messagesAreSimilar, sayStartTime;\n    if ((message == null) || message === \"\") {\n      return this.clearSpeech();\n    } else if (_.isEqual(message, [])) {\n      message = \"[]\";\n    } else if (_.isEqual(message, {})) {\n      message = \"{}\";\n    } else {\n      message = '' + message;\n    }\n    if (this.actions.say && !this.preventSayBlocking) {\n      this.setAction(\"say\");\n    }\n    if (this.sayMessage === message && this.sayData === data) {\n      this.sayRemainingAge = duration;\n    } else {\n      messagesAreSimilar = false;\n      if (this.sayMessage) {\n        if (this.sayMessage.split(' ')[0] === message.split(' ')[0]) {\n          messagesAreSimilar = true;\n        } else if (string_score.score(message, this.sayMessage, 0.5) > 0.25) {\n          messagesAreSimilar = true;\n        }\n      }\n      sayStartTime = messagesAreSimilar ? this.sayStartTime : this.world.age;\n      this.clearSpeech();\n      this.sayMessage = message;\n      this.sayData = data;\n      this.sayStartTime = sayStartTime;\n      this.sayDuration = duration;\n      this.sayRemainingAge = duration;\n      this.sayStartPos = this.pos.copy();\n      this.keepTrackedProperty('sayMessage');\n      this.keepTrackedProperty('sayStartTime');\n    }\n    if (this.actions.say && !this.preventSayBlocking) {\n      if (typeof this.brake === \"function\") {\n        this.brake();\n      }\n      return typeof this.block === \"function\" ? this.block() : void 0;\n    }\n  };\n\n  Says.prototype.clearSpeech = function() {\n    this.sayHeardBy = {};\n    return this.sayMessage = this.sayData = this.sayStartTime = this.sayRemainingAge = this.sayDuration = this.sayStartPos = null;\n  };\n\n  Says.prototype.update = function() {\n    if (!(this.action === 'say' && this.world.age - this.sayStartTime >= this.actions.say.cooldown - this.world.dt)) {\n      return;\n    }\n    this.clearSpeech();\n    this.setAction('idle');\n    return typeof this.unblock === \"function\" ? this.unblock() : void 0;\n  };\n\n  return Says;\n\n})(Component);\n",
	"commitMessage": "Diplomat submission for lang vi: 1 change(s).",
	"parent": "57647ecf7bb21e33001ef919",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"patches": [],
	"index": true,
	"codeLanguage": "coffeescript",
	"official": false,
	"configSchema": {
		"properties": {
			"cooldown": {
				"type": "number",
				"description": "How many seconds each say takes. If 0, then saying is not a blocking action.",
				"minimum": 0,
				"format": "seconds",
				"default": 0
			},
			"silent": {
				"type": "boolean",
				"description": "Whether to ignore say() messages from this Thang when playing audio.",
				"default": false
			},
			"voiceRange": {
				"type": "number",
				"description": "How far this Thang can speak, in meters.",
				"minimum": 0,
				"default": 20,
				"format": "meters"
			},
			"labelStyle": {
				"description": "The type of speech bubble used when saying something",
				"additionalProperties": false,
				"type": "string",
				"enum": [
					"say",
					"dialogue"
				],
				"default": "say"
			}
		},
		"default": {
			"voiceRange": 20,
			"cooldown": 0,
			"silent": false,
			"labelStyle": "say"
		},
		"id": "__base__",
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b75ad7fc0f6d519000001",
			"majorVersion": 0
		},
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		}
	],
	"description": "This Thang can talk.",
	"system": "hearing",
	"searchStrings": "says s sa",
	"i18nCoverage": [
		"-",
		"cs",
		"ru",
		"zh-HANS",
		"gl",
		"fr",
		"de-DE",
		"nb",
		"lt",
		"ar",
		"zh-HANT",
		"es-ES",
		"es-419",
		"pt-BR",
		"sk",
		"hu",
		"it",
		"pl",
		"ja",
		"nl-NL",
		"uk",
		"sv",
		"ro",
		"da",
		"el",
		"sr",
		"fi",
		"vi"
	],
	"created": "2016-08-02T09:43:05.955Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 89,
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