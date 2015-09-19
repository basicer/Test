{
	"_id": "55fd55dd163ab1be054f1f78",
	"slug": "commands",
	"name": "Commands",
	"js": "var ArgumentError, Commands,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  __slice = [].slice,\n  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };\n\nArgumentError = require('lib/world/errors').ArgumentError;\n\nCommands = (function(_super) {\n  __extends(Commands, _super);\n\n  Commands.className = \"Commands\";\n\n  function Commands(config) {\n    var _ref, _ref1;\n    Commands.__super__.constructor.call(this, config);\n    this._commandableTypes = (_ref = this.commandableTypes) != null ? _ref : [];\n    this._commandableMethods = (_ref1 = this.commandableMethods) != null ? _ref1 : [];\n    delete this.commandableTypes;\n    delete this.commandableMethods;\n  }\n\n  Commands.prototype.attach = function(thang) {\n    Commands.__super__.attach.call(this, thang);\n    thang.commandableTypes = _.union(thang.commandableTypes || [], this._commandableTypes);\n    return thang.commandableMethods = _.union(thang.commandableMethods || [], this._commandableMethods);\n  };\n\n  Commands.prototype.command = function() {\n    var args, methodName, minion, _ref, _ref1;\n    minion = arguments[0], methodName = arguments[1], args = 3 <= arguments.length ? __slice.call(arguments, 2) : [];\n    if (!(minion != null ? minion.isThang : void 0)) {\n      throw new ArgumentError(\"\" + this.id + \" needs something to command.\", \"command\", \"minion\", \"unit\", minion);\n    }\n    if (minion.team !== this.team) {\n      throw new ArgumentError(\"\" + this.id + \" (team \" + this.team + \") can't command \" + minion.id + \" (team \" + minion.team + \").\", \"command\", \"minion\", \"unit\", minion);\n    }\n    if (((_ref = this.commandableTypes) != null ? _ref.length : void 0) && !(_ref1 = minion.type, __indexOf.call(this.commandableTypes, _ref1) >= 0)) {\n      throw new ArgumentError(\"\" + this.id + \" can't command type \" + minion.type + \" (only types: \" + this.commandableTypes + \").\", \"command\", \"minion\", \"unit\", minion);\n    }\n    if (!_.isString(methodName)) {\n      throw new ArgumentError(\"Call a method on \" + minion.id + \", like '\" + this.commandableMethods[0] + \"'.\", \"command\", \"methodName\", \"string\", methodName);\n    }\n    if (__indexOf.call(this.commandableMethods, methodName) < 0) {\n      throw new ArgumentError(\"\" + methodName + \" isn't one of the commands, like '\" + this.commandableMethods[0] + \"'.\", \"command\", \"methodName\", \"string\", methodName);\n    }\n    if (!minion[methodName]) {\n      throw new ArgumentError(\"\" + minion.id + \" has no \" + methodName + \" command.\", \"command\", \"methodName\", \"string\", methodName);\n    }\n    if (minion.dead) {\n      return;\n    }\n    if ((typeof minion.hasEffect === \"function\" ? minion.hasEffect('confuse') : void 0) || (typeof minion.hasEffect === \"function\" ? minion.hasEffect('fear') : void 0)) {\n      return;\n    }\n    minion.specificAttackTarget = minion.defendTarget = minion.castingCommandedSpellTarget = minion.hasCastCommandedSpell = null;\n    minion.commander = this;\n    return minion[methodName].apply(minion, args);\n  };\n\n  return Commands;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "5356f7c21bfa9bba14b5e038",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274",
		"55b1c5ded3cfb0d6161b3b28"
	],
	"__v": 0,
	"commitMessage": "Combining commandable methods and types from multiple items.",
	"index": true,
	"parent": "55ca40a19bc1892c835b013c",
	"codeLanguage": "coffeescript",
	"patches": [],
	"official": false,
	"configSchema": {
		"properties": {
			"commandableMethods": {
				"type": "array",
				"default": [
					"move",
					"attack"
				],
				"minItems": 1,
				"description": "Which methods should be callable on minions."
			},
			"commandableTypes": {
				"type": "array",
				"description": "Which types of minion should be commandable."
			}
		},
		"additionalProperties": false,
		"type": "object",
		"default": {
			"commandableMethods": [
				"move",
				"attack"
			],
			"commandableTypes": []
		}
	},
	"dependencies": [
		{
			"original": "524b7b747fc0f6d519000010",
			"majorVersion": 0
		}
	],
	"description": "This Component gives the Thang the ability to call certain methods on allied Thangs.",
	"system": "programming",
	"searchStrings": "commands c co com comm comma comman",
	"created": "2015-09-19T12:32:29.394Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 21,
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