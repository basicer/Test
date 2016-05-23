{
	"_id": "57437ee1f2770320c70fb499",
	"searchStrings": "casts dispel c ca cas cast casts castsd castsdi castsdis castsdisp",
	"index": true,
	"slug": "castsdispel",
	"name": "CastsDispel",
	"js": "var CastsDispel, effectValues,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\neffectValues = {\n  'shrink': -1,\n  'slow': -2,\n  'confuse': -1,\n  'fear': -2,\n  'disintegrate': -3,\n  'poison-cloud': -2,\n  'root': -1,\n  'antigravity': -2,\n  'earthskin': 1,\n  'flame-armor': 2,\n  'haste': 2,\n  'invisibility': 2,\n  'raise-dead': 2,\n  'regen': 1,\n  'power-up': 2,\n  'power-up-2': 3,\n  'warcry': 1\n};\n\nCastsDispel = (function(_super) {\n  __extends(CastsDispel, _super);\n\n  CastsDispel.className = 'CastsDispel';\n\n  function CastsDispel(config) {\n    CastsDispel.__super__.constructor.call(this, config);\n    this._dispelSpell = {\n      name: 'dispel',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      range: this.range\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    delete this.range;\n  }\n\n  CastsDispel.prototype.attach = function(thang) {\n    CastsDispel.__super__.attach.call(this, thang);\n    thang.addSpell(this._dispelSpell);\n    return thang.existenceSystem != null ? thang.existenceSystem : thang.existenceSystem = thang.world.getSystem(\"Existence\");\n  };\n\n  CastsDispel.prototype.perform_dispel = function() {\n    var effect, targetEffects, _i, _j, _len, _len1, _ref, _results;\n    _ref = this.target.effects;\n    for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n      effect = _ref[_i];\n      this.target.undoEffectProportionally(effect);\n    }\n    this.target.effects = [];\n    targetEffects = [\n      {\n        name: 'dispel',\n        duration: 0.5,\n        reverts: false,\n        addend: 0,\n        targetProperty: 'health',\n        repeatsEvery: 0.5\n      }\n    ];\n    _results = [];\n    for (_j = 0, _len1 = targetEffects.length; _j < _len1; _j++) {\n      effect = targetEffects[_j];\n      _results.push(this.target.addEffect(effect));\n    }\n    return _results;\n  };\n\n  CastsDispel.prototype.getTarget_dispel = function() {\n    var bestTarget, bestTargetEffectValue, effect, effectValue, enemies, friends, power, rangeSquared, thang, thangs, valence, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;\n    bestTarget = null;\n    bestTargetEffectValue = Infinity;\n    friends = ((_ref = typeof this.getFriends === \"function\" ? this.getFriends() : void 0) != null ? _ref : []).concat([this]);\n    enemies = (_ref1 = typeof this.getEnemies === \"function\" ? this.getEnemies() : void 0) != null ? _ref1 : [];\n    rangeSquared = this.spells.dispel.range * this.spells.dispel.range;\n    _ref2 = [[1, friends], [-1, enemies]];\n    for (_i = 0, _len = _ref2.length; _i < _len; _i++) {\n      _ref3 = _ref2[_i], valence = _ref3[0], thangs = _ref3[1];\n      for (_j = 0, _len1 = thangs.length; _j < _len1; _j++) {\n        thang = thangs[_j];\n        if (!(this.distanceSquared(thang) <= rangeSquared)) {\n          continue;\n        }\n        effectValue = 0;\n        _ref5 = (_ref4 = thang.effects) != null ? _ref4 : [];\n        for (_k = 0, _len2 = _ref5.length; _k < _len2; _k++) {\n          effect = _ref5[_k];\n          effectValue += effectValues[effect.name] || 0;\n        }\n        power = this.existenceSystem.buildTypePower[thang.type] || thang.maxHealth || 1;\n        if (/Hero Placeholder/.test(thang.id)) {\n          power = 9001;\n        }\n        effectValue *= Math.sqrt(power) * thang.health / thang.maxHealth;\n        effectValue *= valence;\n        if (effectValue < bestTargetEffectValue) {\n          bestTargetEffectValue = effectValue;\n          bestTarget = thang;\n        }\n      }\n    }\n    if (bestTargetEffectValue < -1) {\n      return bestTarget;\n    } else {\n      return null;\n    }\n  };\n\n  return CastsDispel;\n\n})(Component);\n",
	"system": "magic",
	"creator": "512ef4805a67a8c507000001",
	"original": "5462e0e03839c6e02811d1bd",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 2,
	"commitMessage": "i18n patch(es)",
	"parent": "56faa5653d3c032500043f3d",
	"description": "This Component gives the Thang a dispel spell.",
	"codeLanguage": "coffeescript",
	"dependencies": [
		{
			"original": "52f13c37528baa731827408d",
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
			"range": 40,
			"cooldown": 0.4,
			"specificCooldown": 2
		}
	},
	"patches": [
		"577a021b30e8452400a03b06",
		"577a02607806f96100b7dcc0"
	],
	"i18nCoverage": [
		"-",
		"pt-BR",
		"sk",
		"ru",
		"es-ES",
		"nl-NL",
		"sv",
		"fr",
		"it",
		"de-DE",
		"uk",
		"pl",
		"zh-HANS",
		"ja",
		"hu",
		"el",
		"sr",
		"ro",
		"cs",
		"bg",
		"es-419",
		"da"
	],
	"created": "2016-05-23T22:06:25.065Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 33,
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