{
	"_id": "579a0144843ad12000e603bf",
	"index": true,
	"slug": "castsregen",
	"name": "CastsRegen",
	"js": "var ArgumentError, CastsRegen,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nArgumentError = require('lib/world/errors').ArgumentError;\n\nCastsRegen = (function(_super) {\n  __extends(CastsRegen, _super);\n\n  CastsRegen.className = 'CastsRegen';\n\n  function CastsRegen(config) {\n    CastsRegen.__super__.constructor.call(this, config);\n    this._regenSpell = {\n      name: 'regen',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      range: this.range,\n      repeatsEvery: this.repeatsEvery,\n      duration: this.duration,\n      health: this.health\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    delete this.range;\n    delete this.health;\n    delete this.duration;\n    delete this.repeatsEvery;\n  }\n\n  CastsRegen.prototype.attach = function(thang) {\n    CastsRegen.__super__.attach.call(this, thang);\n    return thang.addSpell(this._regenSpell);\n  };\n\n  CastsRegen.prototype.castRegen = function(target) {\n    return this.cast('regen', target);\n  };\n\n  CastsRegen.prototype.perform_regen = function() {\n    var e, effect, effects, _i, _len, _results;\n    this.target.effects = (function() {\n      var _i, _len, _ref, _results;\n      _ref = this.target.effects;\n      _results = [];\n      for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n        e = _ref[_i];\n        if (e.name !== 'regen') {\n          _results.push(e);\n        }\n      }\n      return _results;\n    }).call(this);\n    effects = [\n      {\n        name: 'regen',\n        duration: this.spells.regen.duration,\n        targetProperty: 'health',\n        repeatsEvery: this.spells.regen.repeatsEvery,\n        addend: this.spells.regen.health\n      }\n    ];\n    _results = [];\n    for (_i = 0, _len = effects.length; _i < _len; _i++) {\n      effect = effects[_i];\n      _results.push(this.target.addEffect(effect, this));\n    }\n    return _results;\n  };\n\n  CastsRegen.prototype.getTarget_regen = function() {\n    var damage, mostDamage, mostDamaged, thang, thangs, _i, _len;\n    if (!(thangs = typeof this.getFriends === \"function\" ? this.getFriends() : void 0)) {\n      return null;\n    }\n    thangs = thangs.concat([this]);\n    mostDamaged = null;\n    mostDamage = 0;\n    for (_i = 0, _len = thangs.length; _i < _len; _i++) {\n      thang = thangs[_i];\n      if (!thang.health) {\n        continue;\n      }\n      damage = thang.maxHealth - thang.health;\n      if (damage > mostDamage) {\n        mostDamage = damage;\n        mostDamaged = thang;\n      }\n    }\n    return mostDamaged;\n  };\n\n  return CastsRegen;\n\n})(Component);\n",
	"creator": "5790b3eea6956624001431f9",
	"original": "531759cdc269d400000543c8",
	"__v": 0,
	"commitMessage": "Diplomat submission for lang hu: 1 change(s).",
	"parent": "577a070bba80731f00d035f8",
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
			"health": {
				"type": "number",
				"description": "How many hp are gained for each repetition.",
				"minimum": 0
			},
			"repeatsEvery": {
				"type": "number",
				"minimum": 0,
				"description": "The frequency with which health is added.",
				"format": "seconds"
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
			"repeatsEvery": 0.2,
			"health": 2.4,
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
	"description": "This Component allows the Thang to cast regeneration on allies.",
	"system": "magic",
	"searchStrings": "casts regen c ca cas cast casts castsr castsre castsreg",
	"i18nCoverage": [
		"-",
		"de-DE",
		"fr",
		"ru",
		"zh-HANS",
		"sk",
		"es-419",
		"pt-BR",
		"sv",
		"uk",
		"pl",
		"it",
		"el",
		"nl-NL",
		"sr",
		"bg",
		"hu"
	],
	"created": "2016-07-28T12:57:40.721Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 39,
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