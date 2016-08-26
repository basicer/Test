{
	"_id": "57c086daebcf472500b4bdbe",
	"index": true,
	"slug": "castspoisoncloud",
	"name": "CastsPoisonCloud",
	"js": "var ArgumentError, CastsPoisonCloud,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nArgumentError = require('lib/world/errors').ArgumentError;\n\nCastsPoisonCloud = (function(_super) {\n  __extends(CastsPoisonCloud, _super);\n\n  CastsPoisonCloud.className = \"CastsPoisonCloud\";\n\n  function CastsPoisonCloud(config) {\n    CastsPoisonCloud.__super__.constructor.call(this, config);\n    this._poisonCloudSpell = {\n      name: 'poison-cloud',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      range: this.range,\n      damage: this.damage,\n      duration: this.duration,\n      repeatsEvery: this.repeatsEvery,\n      radius: this.radius\n    };\n    this.poisonCloudRadiusSquared = Math.pow(this._poisonCloudSpell.radius, 2);\n    delete this.cooldown;\n    delete this.specificCooldown;\n    delete this.range;\n    delete this.radius;\n    delete this.repeatsEvery;\n    delete this.damage;\n    delete this.duration;\n  }\n\n  CastsPoisonCloud.prototype.attach = function(thang) {\n    CastsPoisonCloud.__super__.attach.call(this, thang);\n    return thang.addSpell(this._poisonCloudSpell);\n  };\n\n  CastsPoisonCloud.prototype.castPoisonCloud = function(target) {\n    return this.cast('poison-cloud', target);\n  };\n\n  CastsPoisonCloud.prototype[\"perform_poison-cloud\"] = function() {\n    var affected, args, c, e, effect, t, target, _i, _len;\n    if (this.hidden) {\n      if (typeof this.unhide === \"function\") {\n        this.unhide();\n      }\n    }\n    target = this.target.pos || this.target;\n    affected = (function() {\n      var _i, _len, _ref, _results;\n      _ref = this.getEnemies();\n      _results = [];\n      for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n        c = _ref[_i];\n        if (c.hasEffects && target.distance(c.pos) < this.spells['poison-cloud'].radius) {\n          _results.push(c);\n        }\n      }\n      return _results;\n    }).call(this);\n    effect = {\n      name: 'poison',\n      duration: this.spells['poison-cloud'].duration,\n      targetProperty: 'health',\n      repeatsEvery: this.spells['poison-cloud'].repeatsEvery,\n      addend: -this.spells['poison-cloud'].damage\n    };\n    for (_i = 0, _len = affected.length; _i < _len; _i++) {\n      t = affected[_i];\n      t.effects = (function() {\n        var _j, _len1, _ref, _results;\n        _ref = t.effects;\n        _results = [];\n        for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {\n          e = _ref[_j];\n          if (e.name !== 'poison') {\n            _results.push(e);\n          }\n        }\n        return _results;\n      })();\n      t.addEffect(effect);\n    }\n    args = [parseFloat(target.x.toFixed(2)), parseFloat(target.y.toFixed(2)), parseFloat(this.spells['poison-cloud'].radius.toFixed(2)), '#BA55D3'];\n    return this.addCurrentEvent(\"aoe-\" + (JSON.stringify(args)));\n  };\n\n  CastsPoisonCloud.prototype[\"getTarget_poison-cloud\"] = function() {\n    var distanceSquared, nearest, nearestDistanceSquared, thang, thangs, _i, _len;\n    if (!(thangs = typeof this.getEnemies === \"function\" ? this.getEnemies() : void 0)) {\n      return null;\n    }\n    nearest = null;\n    nearestDistanceSquared = Infinity;\n    for (_i = 0, _len = thangs.length; _i < _len; _i++) {\n      thang = thangs[_i];\n      if (!this.canCast('poison-cloud', thang)) {\n        continue;\n      }\n      distanceSquared = this.distanceSquared(thang);\n      if (distanceSquared < nearestDistanceSquared) {\n        nearestDistanceSquared = distanceSquared;\n        nearest = thang;\n      }\n    }\n    return nearest;\n  };\n\n  return CastsPoisonCloud;\n\n})(Component);\n",
	"creator": "5794e3cfaff3762500cf5806",
	"original": "531a85485aed7b00007e6069",
	"__v": 0,
	"commitMessage": "Diplomat submission for lang hu: 1 change(s).",
	"parent": "577a05cd30e8452400a03ee6",
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
			"repeatsEvery": {
				"type": "number",
				"minimum": 0,
				"format": "seconds"
			},
			"radius": {
				"type": "number",
				"format": "meters",
				"minimum": 0
			},
			"duration": {
				"type": "number",
				"minimum": 0,
				"format": "seconds"
			},
			"damage": {
				"type": "number",
				"minimum": 0
			}
		},
		"additionalProperties": false,
		"type": "object",
		"default": {
			"range": 30,
			"cooldown": 0.75,
			"specificCooldown": 10,
			"radius": 10,
			"repeatsEvery": 1,
			"duration": 5,
			"damage": 30
		}
	},
	"dependencies": [
		{
			"original": "52f13c37528baa731827408d",
			"majorVersion": 0
		}
	],
	"description": "This Component gives the Thang a poison cloud spell.",
	"system": "magic",
	"searchStrings": "casts poison cloud c ca cas cast casts castsp castspo castspoi castspois castspoiso castspoison castspoisonc castspoisoncl castspoisonclo",
	"i18nCoverage": [
		"-",
		"de-DE",
		"fr",
		"ru",
		"zh-HANS",
		"es-ES",
		"sk",
		"pt-BR",
		"sv",
		"uk",
		"pl",
		"it",
		"nl-NL",
		"el",
		"es-419",
		"sr",
		"bg",
		"hu"
	],
	"created": "2016-08-26T18:13:46.307Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 48,
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