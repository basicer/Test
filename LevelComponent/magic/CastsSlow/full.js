{
	"_id": "577a098bba80731f00d039eb",
	"index": true,
	"slug": "castsslow",
	"name": "CastsSlow",
	"js": "var CastsSlow,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCastsSlow = (function(_super) {\n  __extends(CastsSlow, _super);\n\n  CastsSlow.className = 'CastsSlow';\n\n  function CastsSlow(config) {\n    CastsSlow.__super__.constructor.call(this, config);\n    this._slowSpell = {\n      name: 'slow',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      range: this.range,\n      duration: this.duration,\n      factor: this.factor\n    };\n    delete this.duration;\n    delete this.factor;\n    delete this.cooldown;\n    delete this.specificCooldown;\n    delete this.range;\n  }\n\n  CastsSlow.prototype.attach = function(thang) {\n    CastsSlow.__super__.attach.call(this, thang);\n    return thang.addSpell(this._slowSpell);\n  };\n\n  CastsSlow.prototype.castSlow = function(target) {\n    return this.cast('slow', target);\n  };\n\n  CastsSlow.prototype.perform_slow = function() {\n    var e, effect, effects, _i, _len, _results;\n    this.target.effects = (function() {\n      var _i, _len, _ref, _results;\n      _ref = this.target.effects;\n      _results = [];\n      for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n        e = _ref[_i];\n        if (e.name !== 'slow') {\n          _results.push(e);\n        }\n      }\n      return _results;\n    }).call(this);\n    effects = [\n      {\n        name: 'slow',\n        duration: this.spells.slow.duration,\n        reverts: true,\n        setTo: true,\n        targetProperty: 'isSlowed'\n      }, {\n        name: 'slow',\n        duration: this.spells.slow.duration,\n        reverts: true,\n        factor: this.spells.slow.factor,\n        targetProperty: 'maxSpeed'\n      }, {\n        name: 'slow',\n        duration: this.spells.slow.duration,\n        reverts: true,\n        factor: this.spells.slow.factor,\n        targetProperty: 'actionTimeFactor'\n      }\n    ];\n    _results = [];\n    for (_i = 0, _len = effects.length; _i < _len; _i++) {\n      effect = effects[_i];\n      _results.push(this.target.addEffect(effect, this));\n    }\n    return _results;\n  };\n\n  CastsSlow.prototype[\"getTarget_slow\"] = function() {\n    var distanceSquared, nearest, nearestDistanceSquared, rangeSquared, thang, thangs, _i, _len;\n    if (!(thangs = typeof this.getEnemies === \"function\" ? this.getEnemies() : void 0)) {\n      return null;\n    }\n    nearest = null;\n    nearestDistanceSquared = Infinity;\n    rangeSquared = this.spells.slow.range * this.spells.slow.range;\n    for (_i = 0, _len = thangs.length; _i < _len; _i++) {\n      thang = thangs[_i];\n      if (!this.canCast('slow', thang)) {\n        continue;\n      }\n      distanceSquared = this.distanceSquared(thang);\n      if (distanceSquared < nearestDistanceSquared && distanceSquared <= rangeSquared) {\n        nearestDistanceSquared = distanceSquared;\n        nearest = thang;\n      }\n    }\n    return nearest;\n  };\n\n  return CastsSlow;\n\n})(Component);\n",
	"creator": "57261bee23fccb2f009093c1",
	"original": "52f28d5d72b077d191b67a46",
	"__v": 0,
	"commitMessage": "Diplomat submission for lang bg: 1 change(s).",
	"parent": "57437ee0f2770320c70fb495",
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
			"duration": {
				"type": "number",
				"minimum": 0,
				"format": "seconds"
			},
			"factor": {
				"type": "number",
				"minimum": 0
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
			"range": 30,
			"cooldown": 0.75,
			"specificCooldown": 10,
			"duration": 5,
			"factor": 0.5
		}
	},
	"dependencies": [
		{
			"original": "52f13c37528baa731827408d",
			"majorVersion": 0
		}
	],
	"description": "This Component gives the Thang a slow spell.",
	"system": "magic",
	"searchStrings": "casts slow c ca cas cast casts castss castssl",
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
		"it",
		"pl",
		"el",
		"nl-NL",
		"es-419",
		"sr",
		"bg"
	],
	"created": "2016-07-04T07:00:27.999Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 47,
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