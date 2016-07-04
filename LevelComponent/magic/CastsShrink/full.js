{
	"_id": "577a09237ca6da5800795c40",
	"slug": "castsshrink",
	"name": "CastsShrink",
	"js": "var ArgumentError, CastsShrink,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nArgumentError = require('lib/world/errors').ArgumentError;\n\nCastsShrink = (function(_super) {\n  __extends(CastsShrink, _super);\n\n  CastsShrink.className = 'CastsShrink';\n\n  function CastsShrink(config) {\n    CastsShrink.__super__.constructor.call(this, config);\n    this._shrinkSpell = {\n      name: 'shrink',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      range: this.range,\n      duration: this.duration,\n      speedFactor: this.speedFactor,\n      healthFactor: this.healthFactor\n    };\n    delete this.duration;\n    delete this.healthFactor;\n    delete this.shrinkFactor;\n    delete this.cooldown;\n    delete this.specificCooldown;\n    delete this.range;\n  }\n\n  CastsShrink.prototype.attach = function(thang) {\n    CastsShrink.__super__.attach.call(this, thang);\n    return thang.addSpell(this._shrinkSpell);\n  };\n\n  CastsShrink.prototype.castShrink = function(target) {\n    return this.cast('shrink', target);\n  };\n\n  CastsShrink.prototype.perform_shrink = function() {\n    var e, effect, effects, _i, _len, _results;\n    this.target.effects = (function() {\n      var _i, _len, _ref, _results;\n      _ref = this.target.effects;\n      _results = [];\n      for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n        e = _ref[_i];\n        if (e.name !== 'shrink') {\n          _results.push(e);\n        }\n      }\n      return _results;\n    }).call(this);\n    effects = [\n      {\n        name: 'shrink',\n        duration: this.spells.shrink.duration,\n        reverts: true,\n        factor: this.spells.shrink.speedFactor,\n        targetProperty: 'maxSpeed'\n      }, {\n        name: 'shrink',\n        duration: this.spells.shrink.duration,\n        reverts: true,\n        factor: 0.66,\n        targetProperty: 'scaleFactor'\n      }, {\n        name: 'shrink',\n        duration: this.spells.shrink.duration,\n        reverts: true,\n        factor: 0.66 * 0.66,\n        targetProperty: 'mass'\n      }, {\n        name: 'shrink',\n        duration: this.spells.shrink.duration,\n        reverts: true,\n        factor: this.spells.shrink.healthFactor,\n        targetProperty: 'maxHealth'\n      }, {\n        name: 'shrink',\n        duration: this.spells.shrink.duration,\n        reverts: true,\n        factor: this.spells.shrink.healthFactor,\n        targetProperty: 'healthReplenishRate'\n      }, {\n        name: 'shrink',\n        duration: this.spells.shrink.duration,\n        revertsProportionally: true,\n        factor: this.spells.shrink.healthFactor,\n        targetProperty: 'health'\n      }\n    ];\n    if (this.target.team === this.team && this.world.getThangByID('Human Base') && this.world.getThangByID('S Arrow Tower')) {\n      effects.shift();\n      if (typeof this.say === \"function\") {\n        this.say('oh noes, team shrink speed nerfed!');\n      }\n    }\n    _results = [];\n    for (_i = 0, _len = effects.length; _i < _len; _i++) {\n      effect = effects[_i];\n      _results.push(this.target.addEffect(effect, this));\n    }\n    return _results;\n  };\n\n  CastsShrink.prototype.getTarget_shrink = function() {\n    var distanceSquared, nearest, nearestDistanceSquared, rangeSquared, thang, thangs, _i, _len;\n    if (!(thangs = typeof this.getEnemies === \"function\" ? this.getEnemies() : void 0)) {\n      return null;\n    }\n    nearest = null;\n    nearestDistanceSquared = Infinity;\n    rangeSquared = this.spells.shrink.range * this.spells.shrink.range;\n    for (_i = 0, _len = thangs.length; _i < _len; _i++) {\n      thang = thangs[_i];\n      if (!(thang.health < thang.maxHealth && this.canCast('shrink', thang))) {\n        continue;\n      }\n      distanceSquared = this.distanceSquared(thang);\n      if (distanceSquared < nearestDistanceSquared && distanceSquared <= rangeSquared) {\n        nearestDistanceSquared = distanceSquared;\n        nearest = thang;\n      }\n    }\n    return nearest;\n  };\n\n  return CastsShrink;\n\n})(Component);\n",
	"creator": "57261bee23fccb2f009093c1",
	"original": "52f04f40d2e7516fec000001",
	"__v": 0,
	"commitMessage": "Diplomat submission for lang bg: 1 change(s).",
	"index": true,
	"parent": "57437ee0f2770320c70fb496",
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
				"minimum": 0,
				"type": "number"
			},
			"healthFactor": {
				"type": "number",
				"minimum": 0,
				"maximum": 1
			},
			"duration": {
				"type": "number",
				"minimum": 0,
				"format": "seconds"
			}
		},
		"additionalProperties": false,
		"type": "object",
		"default": {
			"range": 30,
			"cooldown": 0.75,
			"specificCooldown": 7.5,
			"speedFactor": 2,
			"healthFactor": 0.5,
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
	"description": "This Component gives the Thang a shrink spell.",
	"system": "magic",
	"searchStrings": "casts shrink c ca cas cast casts castss castssh castsshr castsshri",
	"i18nCoverage": [
		"-",
		"de-DE",
		"fr",
		"ru",
		"zh-HANS",
		"sk",
		"pt-BR",
		"uk",
		"sv",
		"es-ES",
		"pl",
		"tr",
		"it",
		"el",
		"nl-NL",
		"es-419",
		"sr",
		"bg"
	],
	"created": "2016-07-04T06:58:43.596Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 59,
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