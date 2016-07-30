{
	"_id": "579c0c5353b4b61f00ebfbe4",
	"searchStrings": "resets cooldowns r re res rese reset resets resetsc resetsco resetscoo resetscool resetscoold resetscooldo resetscooldow",
	"index": true,
	"slug": "resetscooldowns",
	"name": "ResetsCooldowns",
	"js": "var ArgumentError, ResetsCooldowns, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };\n\nArgumentError = require('lib/world/errors').ArgumentError;\n\nResetsCooldowns = (function(_super) {\n  __extends(ResetsCooldowns, _super);\n\n  function ResetsCooldowns() {\n    _ref = ResetsCooldowns.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  ResetsCooldowns.className = 'ResetsCooldowns';\n\n  ResetsCooldowns.prototype.attach = function(thang) {\n    var resetCooldownAction;\n    resetCooldownAction = {\n      name: 'reset-cooldown',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    ResetsCooldowns.__super__.attach.call(this, thang);\n    return thang.addActions(resetCooldownAction);\n  };\n\n  ResetsCooldowns.prototype.resetCooldown = function(action) {\n    var actionKeys, spellKeys;\n    actionKeys = _.keys(this.actions);\n    if (this.spells && (spellKeys = _.keys(this.spells))) {\n      actionKeys = actionKeys.concat(spellKeys);\n    }\n    if (!_.isString(action)) {\n      throw new ArgumentError(\"resetCooldown takes a string action; one of [\" + (actionKeys.join(', ')) + \"]\", \"resetCooldown\", \"action\", \"string\", action);\n    }\n    if (__indexOf.call(actionKeys, action) < 0) {\n      throw new ArgumentError(\"You don't have action \\\"\" + action + \"\\\", only [\" + (actionKeys.join(', ')) + \"]\", \"resetCooldown\", \"action\", \"string\", action);\n    }\n    this.setAction('reset-cooldown');\n    this.actionToReset = action;\n    if (this.getCooldown('reset-cooldown') > 1) {\n      return \"done\";\n    } else if (this.resetCooldownOnce) {\n      this.resetCooldownOnce = false;\n      this.setAction('idle');\n      return \"done\";\n    } else {\n      return \"reset-cooldown\";\n    }\n  };\n\n  ResetsCooldowns.prototype.update = function() {\n    var _ref1;\n    if (!(this.action === 'reset-cooldown' && this.act())) {\n      return;\n    }\n    if (this.actionHeats[this.actionToReset]) {\n      this.actionHeats[this.actionToReset] = 0;\n    }\n    if ((_ref1 = this.spellHeats) != null ? _ref1[this.actionToReset] : void 0) {\n      this.spellHeats[this.actionToReset] = 0;\n    }\n    if (this.plan) {\n      return this.resetCooldownOnce = true;\n    }\n  };\n\n  return ResetsCooldowns;\n\n})(Component);\n",
	"system": "action",
	"creator": "579bf3a663fd7f2000491aa1",
	"original": "5466dd15417c8b48a9811e99",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "This Component lets the Thang reset its action cooldowns.",
	"dependencies": [
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		}
	],
	"configSchema": {
		"properties": {
			"cooldown": {
				"type": "number",
				"minimum": 0,
				"format": "seconds"
			},
			"specificCooldown": {
				"type": "number",
				"minimum": 0,
				"format": "seconds"
			}
		},
		"additionalProperties": false,
		"type": "object",
		"default": {
			"cooldown": 0.25,
			"specificCooldown": 20
		}
	},
	"i18nCoverage": [
		"-",
		"gl",
		"fr",
		"nb",
		"de-DE",
		"ru",
		"zh-HANS",
		"sk",
		"it",
		"uk",
		"pt-BR",
		"es-419",
		"el",
		"nl-NL",
		"da",
		"es-ES"
	],
	"commitMessage": "Diplomat submission for lang es-ES: 2 change(s).",
	"parent": "56faa0d63d3c032500043c88",
	"patches": [],
	"created": "2016-07-30T02:09:23.994Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 20,
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