{
	"_id": "577bfc7711d8592400dc99f9",
	"creator": "577bf658a021372000c93958",
	"slug": "acts",
	"name": "Acts",
	"original": "524b85837fc0f6d519000020",
	"__v": 1,
	"js": "var Acts, ArgumentError, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  __slice = [].slice,\n  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };\n\nArgumentError = require('lib/world/errors').ArgumentError;\n\nActs = (function(_super) {\n  __extends(Acts, _super);\n\n  function Acts() {\n    _ref = Acts.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Acts.className = 'Acts';\n\n  Acts.prototype.acts = true;\n\n  Acts.prototype.actionActivated = false;\n\n  Acts.prototype.action = 'idle';\n\n  Acts.prototype.attach = function(thang) {\n    Acts.__super__.attach.call(this, thang);\n    thang.actionHeats = {\n      all: 0\n    };\n    thang.actionTimeFactor = 1;\n    thang.addActions({\n      name: 'idle',\n      cooldown: 0\n    });\n    if (!thang.action) {\n      thang.setAction('idle');\n    }\n    return thang.addTrackedProperties(['action', 'string'], ['actionActivated', 'boolean']);\n  };\n\n  Acts.prototype.chooseAction = function() {};\n\n  Acts.prototype.setAction = function(action) {\n    var actionRange, actionRanges, aether, fakeError, message, problem, statementRange, _i, _len;\n    if (typeof action === 'undefined') {\n      throw new ArgumentError(\"You need an action to perform.\", \"setAction\", \"action\", \"string\", action);\n    }\n    if (action == null) {\n      action = 'idle';\n    }\n    if (!_.isString(action)) {\n      throw new ArgumentError(\"You need a string action; one of [\" + (_.keys(this.actions).join(', ')) + \"]\", \"setAction\", \"action\", \"string\", action);\n    }\n    if (!(action in this.actions)) {\n      throw new ArgumentError(\"You don't have action \\\"\" + action + \"\\\", only [\" + (_.keys(this.actions).join(', ')) + \"]\", \"setAction\", \"action\", \"string\", action);\n    }\n    if (this.dead) {\n      action = 'die';\n    }\n    if (action !== this.action) {\n      this.keepTrackedProperty('action');\n      this.action = action;\n    }\n    if (this.isProgrammable && (this.actionsChosenThisCall != null) && (aether = this.getAetherForMethod('chooseAction'))) {\n      statementRange = aether.lastStatementRange;\n      if (++this.actionsChosenThisCall === 1) {\n        this.firstActionStatementRange = statementRange;\n      } else if (this.actionsChosenThisCall < 20) {\n        if (this.actionsChosenThisCall === 2) {\n          actionRanges = [this.firstActionStatementRange, statementRange];\n        } else {\n          actionRanges = [statementRange];\n        }\n        for (_i = 0, _len = actionRanges.length; _i < _len; _i++) {\n          actionRange = actionRanges[_i];\n          message = \"Only the last action set in chooseAction() will be applied.\";\n          fakeError = {\n            name: \"OverwroteAction\",\n            message: message,\n            toString: function() {\n              return message;\n            }\n          };\n          problem = aether.createUserCodeProblem({\n            type: 'runtime',\n            level: 'info',\n            error: fakeError,\n            range: actionRange\n          });\n          this.addAetherProblemForMethod(problem, 'chooseAction');\n        }\n      }\n    }\n    return this.action;\n  };\n\n  Acts.prototype.addActions = function() {\n    var action, actions, _i, _len, _results;\n    actions = 1 <= arguments.length ? __slice.call(arguments, 0) : [];\n    if (this.actions == null) {\n      this.actions = {};\n    }\n    _results = [];\n    for (_i = 0, _len = actions.length; _i < _len; _i++) {\n      action = actions[_i];\n      _results.push(this.actions[action.name] = action);\n    }\n    return _results;\n  };\n\n  Acts.prototype.act = function(force) {\n    var action;\n    if (force == null) {\n      force = false;\n    }\n    if ((this.actionHeats.all > 0 || this.actionHeats[this.action] > 0) && !force) {\n      return false;\n    }\n    action = this.actions[this.action];\n    if (!this.actionActivated && this.action !== 'idle' && (action.cooldown || this.action !== this.previousAction)) {\n      this.actionActivated = true;\n      this.keepTrackedProperty('actionActivated');\n    }\n    if (action.cooldown) {\n      this.actionHeats.all = action.cooldown;\n    }\n    if (action.specificCooldown) {\n      this.actionHeats[this.action] = action.specificCooldown;\n    }\n    this.previousAction = this.action;\n    return true;\n  };\n\n  Acts.prototype.canAct = function(action) {\n    if (action == null) {\n      action = null;\n    }\n    if (this.actionHeats.all) {\n      return false;\n    }\n    if (action && this.actionHeats[this.action]) {\n      return false;\n    }\n    return true;\n  };\n\n  Acts.prototype.getActionName = function() {\n    var _ref1;\n    return (_ref1 = this.action) != null ? _ref1 : \"idle\";\n  };\n\n  Acts.prototype.getCooldown = function(action) {\n    var _ref1, _ref2, _ref3;\n    if ((_ref1 = this.spellHeats) != null ? _ref1[action] : void 0) {\n      return Math.max((_ref2 = this.spellHeats[action]) != null ? _ref2 : 0, this.actionHeats.all);\n    }\n    if (this.actionHeats[action]) {\n      return Math.max((_ref3 = this.actionHeats[action]) != null ? _ref3 : 0, this.actionHeats.all);\n    }\n    return 0;\n  };\n\n  Acts.prototype.findCooldown = function(action) {\n    if (!_.isString(action)) {\n      throw new ArgumentError(\"findCooldown needs a string action; one of [\" + (_.keys(this.actions).join(', ')) + \"]\", \"findCooldown\", \"action\", \"string\", action);\n    }\n    if (!(action in this.actions)) {\n      throw new ArgumentError(\"You don't have action \\\"\" + action + \"\\\", only [\" + (_.keys(this.actions).join(', ')) + \"]\", \"findCooldown\", \"action\", \"string\", action);\n    }\n    return this.getCooldown(action);\n  };\n\n  Acts.prototype.isReady = function(action) {\n    var actionKeys, closestScore, matchScore, message, otherAction, spellKeys, _i, _len, _ref1, _ref2;\n    actionKeys = _.keys(this.actions);\n    if (this.spells && (spellKeys = _.keys(this.spells))) {\n      actionKeys = actionKeys.concat(spellKeys);\n    }\n    if (!_.isString(action)) {\n      throw new ArgumentError(\"isReady takes a string action; one of [\" + (actionKeys.join(', ')) + \"]\", \"isReady\", \"action\", \"string\", action);\n    }\n    if (__indexOf.call(actionKeys, action) < 0) {\n      _ref1 = [0, ''], closestScore = _ref1[0], message = _ref1[1];\n      for (_i = 0, _len = actionKeys.length; _i < _len; _i++) {\n        otherAction = actionKeys[_i];\n        matchScore = otherAction.score(action, 0.8);\n        if (matchScore > closestScore) {\n          _ref2 = [matchScore, \"The action is \\\"\" + otherAction + \"\\\", not \\\"\" + action + \"\\\".\"], closestScore = _ref2[0], message = _ref2[1];\n        }\n      }\n      if (closestScore >= 0.5) {\n        throw new ArgumentError(message, \"isReady\", \"action\", \"string\", action);\n      }\n      return false;\n    }\n    return !this.getCooldown(action);\n  };\n\n  return Acts;\n\n})(Component);\n",
	"commitMessage": "Diplomat submission for lang th: 4 change(s).",
	"parent": "5768ed92d8a3e7290042e6ac",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274",
		"556f1a2c7fa7f5c73795ec74"
	],
	"codeLanguage": "coffeescript",
	"patches": [
		"579f62072c39c529005f7fef"
	],
	"official": false,
	"configSchema": {
		"id": "__base__",
		"properties": {
			"resetsToIdle": {
				"type": "boolean",
				"description": "Whether this Thang resets action to 'idle' each time before chooseAction is called.",
				"default": false
			}
		},
		"default": {
			"resetsToIdle": false
		},
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b4150ff92f1f4f8000024",
			"majorVersion": 0
		}
	],
	"description": "This Thang can take actions (like 'move' and 'attack').",
	"system": "action",
	"searchStrings": "acts a ac",
	"i18nCoverage": [
		"-",
		"pt-BR",
		"ca",
		"ru",
		"es-ES",
		"nl-NL",
		"ja",
		"it",
		"sv",
		"da",
		"fr",
		"uk",
		"id",
		"sk",
		"lt",
		"de-DE",
		"pl",
		"he",
		"hu",
		"zh-HANS",
		"tr",
		"ro",
		"ko",
		"el",
		"bg",
		"sr",
		"cs",
		"ar",
		"es-419",
		"fi",
		"th"
	],
	"created": "2016-07-05T18:29:11.112Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 148,
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