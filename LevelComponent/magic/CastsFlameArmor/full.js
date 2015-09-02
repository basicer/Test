{
	"_id": "55e717cc0aa77f8505671978",
	"searchStrings": "casts flame armor c ca cas cast casts castsf castsfl castsfla castsflam castsflame castsflamea castsflamear castsflamearm",
	"index": true,
	"slug": "castsflamearmor",
	"name": "CastsFlameArmor",
	"js": "var CastsFlameArmor,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCastsFlameArmor = (function(_super) {\n  __extends(CastsFlameArmor, _super);\n\n  CastsFlameArmor.className = 'CastsFlameArmor';\n\n  function CastsFlameArmor(config) {\n    CastsFlameArmor.__super__.constructor.call(this, config);\n    this._flameArmorSpell = {\n      name: 'flame-armor',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      range: this.range,\n      damage: this.damage,\n      duration: this.duration,\n      healthFactor: this.healthFactor\n    };\n    delete this.duration;\n    delete this.damage;\n    delete this.healthFactor;\n    delete this.cooldown;\n    delete this.specificCooldown;\n    delete this.range;\n  }\n\n  CastsFlameArmor.prototype.attach = function(thang) {\n    CastsFlameArmor.__super__.attach.call(this, thang);\n    return thang.addSpell(this._flameArmorSpell);\n  };\n\n  CastsFlameArmor.prototype['perform_flame-armor'] = function() {\n    var e, effect, effects, _i, _len, _results;\n    this.target.effects = (function() {\n      var _i, _len, _ref, _results;\n      _ref = this.target.effects;\n      _results = [];\n      for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n        e = _ref[_i];\n        if (e.name !== 'flame-armor') {\n          _results.push(e);\n        }\n      }\n      return _results;\n    }).call(this);\n    effects = [\n      {\n        name: 'flame-armor',\n        duration: this.spells['flame-armor'].duration,\n        reverts: true,\n        factor: this.spells['flame-armor'].healthFactor,\n        targetProperty: 'maxHealth'\n      }, {\n        name: 'flame-armor',\n        duration: this.spells['flame-armor'].duration,\n        revertsProportionally: true,\n        factor: this.spells['flame-armor'].healthFactor,\n        targetProperty: 'health'\n      }, {\n        name: 'flame-armor',\n        duration: this.spells['flame-armor'].duration,\n        reverts: true,\n        addend: this.spells['flame-armor'].damage,\n        targetProperty: 'damageReflection'\n      }\n    ];\n    _results = [];\n    for (_i = 0, _len = effects.length; _i < _len; _i++) {\n      effect = effects[_i];\n      _results.push(this.target.addEffect(effect, this));\n    }\n    return _results;\n  };\n\n  return CastsFlameArmor;\n\n})(Component);\n",
	"system": "magic",
	"creator": "548e1d2d24446d3d050281ed",
	"original": "5462e0d93839c6e02811d1bc",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Edited code-examples to refer to \"this\" instead of \"this.findNearestEnemy()\"",
	"parent": "55c28c593767fd3435eb44a0",
	"description": "This Component gives the Thang a flame armor spell.",
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
			"damage": {
				"type": "number",
				"description": "Damage caused to melee enemies that attack target.",
				"additionalProperties": true
			},
			"duration": {
				"type": "number",
				"format": "seconds"
			},
			"health": {
				"type": "number",
				"description": "Health added to target."
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
			"cooldown": 0.5,
			"specificCooldown": 5,
			"duration": 10,
			"damage": 30,
			"healthFactor": 1.4
		}
	},
	"patches": [],
	"created": "2015-09-02T15:37:48.963Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 8,
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