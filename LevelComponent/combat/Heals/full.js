{
	"_id": "57b6fee27a14ff35003a219e",
	"searchStrings": "heals h he hea",
	"index": true,
	"slug": "heals",
	"name": "Heals",
	"js": "var ArgumentError, Heals, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nArgumentError = require('lib/world/errors').ArgumentError;\n\nHeals = (function(_super) {\n  __extends(Heals, _super);\n\n  function Heals() {\n    _ref = Heals.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Heals.className = 'Heals';\n\n  Heals.prototype.attach = function(thang) {\n    var healAction;\n    healAction = {\n      name: 'heal',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown\n    };\n    this.healRange = this.range;\n    delete this.cooldown;\n    delete this.specificCooldown;\n    delete this.range;\n    Heals.__super__.attach.call(this, thang);\n    return thang.addActions(healAction);\n  };\n\n  Heals.prototype.heal = function(target) {\n    if (this.isAttackable) {\n      if (target == null) {\n        target = this;\n      }\n    }\n    if (target == null) {\n      throw new ArgumentError(\"heal target is null.\", \"heal\", \"target\", \"object\", target);\n    }\n    if (!target.isAttackable) {\n      throw new ArgumentError(\"Pass a unit with health to heal.\", \"heal\", \"target\", \"object\", target);\n    }\n    this.setTarget(target, 'heal');\n    this.intent = 'heal';\n    if (!this.target) {\n      return;\n    }\n    if (this.distance(this.target, true) > this.healRange) {\n      this.setAction('move');\n    } else {\n      this.setAction('heal');\n    }\n    return typeof this.block === \"function\" ? this.block() : void 0;\n  };\n\n  Heals.prototype.update = function() {\n    var e;\n    if (this.intent !== 'heal') {\n      return;\n    }\n    if (this.distance(this.target, true) > this.healRange) {\n      return this.setAction('move');\n    }\n    this.setAction('heal');\n    if (!this.act()) {\n      return;\n    }\n    if (typeof this.unblock === \"function\") {\n      this.unblock();\n    }\n    this.intent = void 0;\n    this.target.health = Math.min(this.target.maxHealth, this.target.health + this.healAmount);\n    if (this.target.effects) {\n      this.target.effects = (function() {\n        var _i, _len, _ref1, _results;\n        _ref1 = this.target.effects;\n        _results = [];\n        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n          e = _ref1[_i];\n          if (e.name !== 'heal') {\n            _results.push(e);\n          }\n        }\n        return _results;\n      }).call(this);\n      this.target.addEffect({\n        name: 'heal',\n        duration: 0.5,\n        reverts: true,\n        setTo: true,\n        targetProperty: 'beingHealed'\n      });\n    }\n    return this.setTarget(null);\n  };\n\n  return Heals;\n\n})(Component);\n",
	"system": "combat",
	"creator": "57b6f564a07dae2e0067f690",
	"original": "5466d12d417c8b48a9811e42",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "This Component lets the Thang heal (like the heal spell, but not magic).",
	"codeLanguage": "coffeescript",
	"dependencies": [
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		},
		{
			"original": "524b7b7c7fc0f6d519000011",
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
			"healAmount": {
				"type": "number"
			},
			"range": {
				"type": "number",
				"minimum": 0,
				"format": "meters"
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
			"range": 10,
			"cooldown": 0.75,
			"specificCooldown": 10,
			"healAmount": 200
		}
	},
	"i18nCoverage": [
		"-",
		"gl",
		"fr",
		"nb",
		"de-DE",
		"it",
		"zh-HANT",
		"es-ES",
		"pt-BR",
		"zh-HANS",
		"ru",
		"sk",
		"es-419",
		"cs",
		"pl",
		"uk",
		"ro",
		"nl-NL",
		"da",
		"el",
		"sv",
		"ja",
		"hu",
		"sr",
		"fi",
		"tr"
	],
	"commitMessage": "Diplomat submission for lang zh-HANT: 1 change(s).",
	"parent": "579cad029872641f007ecdce",
	"patches": [],
	"created": "2016-08-19T12:43:14.373Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 40,
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