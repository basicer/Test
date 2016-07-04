{
	"_id": "577a0423e96b2e6a00560391",
	"index": true,
	"slug": "castsgrow",
	"name": "CastsGrow",
	"js": "var ArgumentError, CastsGrow,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nArgumentError = require('lib/world/errors').ArgumentError;\n\nCastsGrow = (function(_super) {\n  __extends(CastsGrow, _super);\n\n  CastsGrow.className = 'CastsGrow';\n\n  function CastsGrow(config) {\n    CastsGrow.__super__.constructor.call(this, config);\n    this._growSpell = {\n      name: 'grow',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      range: this.range,\n      duration: this.duration,\n      speedFactor: this.speedFactor,\n      healthFactor: this.healthFactor\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    delete this.range;\n    delete this.duration;\n    delete this.healthFactor;\n    delete this.speedFactor;\n  }\n\n  CastsGrow.prototype.attach = function(thang) {\n    CastsGrow.__super__.attach.call(this, thang);\n    return thang.addSpell(this._growSpell);\n  };\n\n  CastsGrow.prototype.castGrow = function(target) {\n    return this.cast('grow', target);\n  };\n\n  CastsGrow.prototype.perform_grow = function() {\n    var e, effect, effects, scaleFactor, _i, _len, _results;\n    this.target.effects = (function() {\n      var _i, _len, _ref, _results;\n      _ref = this.target.effects;\n      _results = [];\n      for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n        e = _ref[_i];\n        if (e.name !== 'grow') {\n          _results.push(e);\n        }\n      }\n      return _results;\n    }).call(this);\n    scaleFactor = this.spells.grow.healthFactor * 1.5 / 2;\n    effects = [\n      {\n        name: 'grow',\n        duration: this.spells.grow.duration,\n        reverts: true,\n        factor: this.spells.grow.speedFactor,\n        targetProperty: 'maxSpeed'\n      }, {\n        name: 'grow',\n        duration: this.spells.grow.duration,\n        reverts: true,\n        factor: scaleFactor,\n        targetProperty: 'scaleFactor'\n      }, {\n        name: 'grow',\n        duration: this.spells.grow.duration,\n        reverts: true,\n        factor: scaleFactor * scaleFactor,\n        targetProperty: 'mass'\n      }, {\n        name: 'grow',\n        duration: this.spells.grow.duration,\n        reverts: true,\n        factor: this.spells.grow.healthFactor,\n        targetProperty: 'maxHealth'\n      }, {\n        name: 'grow',\n        duration: this.spells.grow.duration,\n        reverts: true,\n        factor: this.spells.grow.healthFactor,\n        targetProperty: 'healthReplenishRate'\n      }, {\n        name: 'grow',\n        duration: this.spells.grow.duration,\n        revertsProportionally: true,\n        factor: this.spells.grow.healthFactor,\n        targetProperty: 'health'\n      }\n    ];\n    _results = [];\n    for (_i = 0, _len = effects.length; _i < _len; _i++) {\n      effect = effects[_i];\n      _results.push(this.target.addEffect(effect, this));\n    }\n    return _results;\n  };\n\n  CastsGrow.prototype.getTarget_grow = function() {\n    var distanceSquared, nearest, nearestDistanceSquared, rangeSquared, thang, thangs, _i, _len;\n    if (!(thangs = typeof this.getFriends === \"function\" ? this.getFriends() : void 0)) {\n      return null;\n    }\n    nearest = null;\n    nearestDistanceSquared = Infinity;\n    rangeSquared = this.spells.grow.range * this.spells.grow.range;\n    for (_i = 0, _len = thangs.length; _i < _len; _i++) {\n      thang = thangs[_i];\n      if (!(thang.health < thang.maxHealth && this.canSee(thang) && this.canCast('grow', thang))) {\n        continue;\n      }\n      distanceSquared = this.distanceSquared(thang);\n      if (distanceSquared < nearestDistanceSquared && distanceSquared <= rangeSquared) {\n        nearestDistanceSquared = distanceSquared;\n        nearest = thang;\n      }\n    }\n    return nearest;\n  };\n\n  return CastsGrow;\n\n})(Component);\n",
	"creator": "57261bee23fccb2f009093c1",
	"original": "53177bd6a508f6e7b3463fee",
	"__v": 0,
	"commitMessage": "Diplomat submission for lang bg: 1 change(s).",
	"parent": "56faa8d920b19920007e4cc9",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"patches": [],
	"official": false,
	"configSchema": {
		"properties": {
			"cooldown": {
				"type": "number",
				"minimum": 0,
				"format": "seconds"
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
			},
			"speedFactor": {
				"type": "number",
				"minimum": 0
			},
			"healthFactor": {
				"type": "number",
				"minimum": 1
			},
			"duration": {
				"type": "number",
				"minimum": 0,
				"additionalProperties": false,
				"format": "seconds"
			}
		},
		"additionalProperties": false,
		"type": "object",
		"default": {
			"range": 30,
			"cooldown": 0.75,
			"specificCooldown": 3.7,
			"speedFactor": 0.5,
			"healthFactor": 2,
			"duration": 5
		}
	},
	"dependencies": [
		{
			"original": "524b7b747fc0f6d519000010",
			"majorVersion": 0
		},
		{
			"original": "52f13c37528baa731827408d",
			"majorVersion": 0
		}
	],
	"description": "This Component gives the Thang a grow spell.",
	"system": "magic",
	"searchStrings": "casts grow c ca cas cast casts castsg castsgr",
	"i18nCoverage": [
		"-",
		"de-DE",
		"fr",
		"ru",
		"es-ES",
		"nb",
		"zh-HANS",
		"sk",
		"es-419",
		"pt-BR",
		"sv",
		"uk",
		"pl",
		"it",
		"nl-NL",
		"el",
		"hu",
		"id",
		"sr",
		"da",
		"bg"
	],
	"created": "2016-07-04T06:37:23.090Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 49,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "5162fab9c92b4c751e000274"
		},
		{
			"access": "read",
			"target": "public"
		}
	]
}