{
	"_id": "579a05df843ad12000e60bd7",
	"searchStrings": "casts sacrifice c ca cas cast casts castss castssa castssac castssacr castssacri castssacrif castssacrifi",
	"name": "CastsSacrifice",
	"js": "var CastsSacrifice,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCastsSacrifice = (function(_super) {\n  __extends(CastsSacrifice, _super);\n\n  CastsSacrifice.className = 'CastsSacrifice';\n\n  function CastsSacrifice(config) {\n    CastsSacrifice.__super__.constructor.call(this, config);\n    this._sacrificeSpell = {\n      name: 'sacrifice',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      range: this.range,\n      efficiency: this.efficiency\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    delete this.range;\n  }\n\n  CastsSacrifice.prototype.attach = function(thang) {\n    CastsSacrifice.__super__.attach.call(this, thang);\n    return thang.addSpell(this._sacrificeSpell);\n  };\n\n  CastsSacrifice.prototype.sacrifice = function(target, sacrificeRecipient) {\n    this.target = target;\n    this.sacrificeRecipient = sacrificeRecipient;\n    return perform_sacrifice();\n  };\n\n  CastsSacrifice.prototype.castSacrifice = function(target, sacrificeRecipient) {\n    this.sacrificeRecipient = null;\n    return this.cast('sacrifice', target, sacrificeRecipient);\n  };\n\n  CastsSacrifice.prototype.getAddend = function(target, sacrificeRecipient, property) {\n    if (property === 'scale') {\n      return target.mass * this.spells.sacrifice.efficiency / sacrificeRecipient.mass + 1;\n    }\n    if (property === 'health') {\n      return target[property] * this.spells.sacrifice.efficiency;\n    }\n    if (property === 'attackDamage') {\n      return target.attackDamage / target.actions.attack.cooldown * sacrificeRecipient.actions.attack.cooldown * this.spells.sacrifice.efficiency * target.health / target.maxHealth;\n    }\n    return target[property] * this.spells.sacrifice.efficiency * target.health / target.maxHealth;\n  };\n\n  CastsSacrifice.prototype.perform_sacrifice = function() {\n    var effect, effects, scaling, _base, _i, _j, _len, _len1, _ref, _ref1, _ref2;\n    if (this.target.team !== this.team) {\n      return;\n    }\n    if (!this.target.health > 0) {\n      return;\n    }\n    if ((_ref = this.target.type) === 'arrow-tower' || _ref === 'artillery' || _ref === 'robot-walker' || _ref === 'palisade' || _ref === 'robobomb' || _ref === 'catapult' || _ref === 'beam-tower') {\n      return;\n    }\n    if (this.sacrificeRecipient == null) {\n      this.sacrificeRecipient = ((_ref1 = this.castArguments) != null ? _ref1[0] : void 0) || this;\n    }\n    _ref2 = this.target.effects;\n    for (_i = 0, _len = _ref2.length; _i < _len; _i++) {\n      effect = _ref2[_i];\n      effect.timeSinceStart = 9001;\n    }\n    this.target.updateEffects();\n    scaling = Math.min(2, this.getAddend(this.target, this.sacrificeRecipient, 'scale'));\n    effects = [\n      {\n        name: 'sacrifice',\n        duration: 9001,\n        reverts: false,\n        addend: this.getAddend(this.target, this.sacrificeRecipient, 'attackDamage'),\n        targetProperty: 'attackDamage'\n      }, {\n        name: 'sacrifice',\n        duration: 9001,\n        reverts: false,\n        addend: this.getAddend(this.target, this.sacrificeRecipient, 'health'),\n        targetProperty: 'health'\n      }, {\n        name: 'sacrifice',\n        duration: 9001,\n        reverts: false,\n        addend: this.getAddend(this.target, this.sacrificeRecipient, 'maxHealth'),\n        targetProperty: 'maxHealth'\n      }, {\n        name: 'sacrifice',\n        duration: 9001,\n        reverts: false,\n        factor: 1 / Math.sqrt(Math.sqrt(scaling)),\n        targetProperty: 'maxSpeed'\n      }, {\n        name: 'sacrifice',\n        duration: 9001,\n        reverts: false,\n        factor: scaling,\n        targetProperty: 'mass'\n      }, {\n        name: 'sacrifice',\n        duration: 9001,\n        reverts: false,\n        factor: Math.sqrt(Math.sqrt(scaling)),\n        targetProperty: 'scaleFactor'\n      }, {\n        name: 'power-up-2',\n        duration: 0.5,\n        reverts: true,\n        setTo: true,\n        targetProperty: 'beingSacrificed'\n      }\n    ];\n    if (!this.sacrificeRecipient.dead) {\n      for (_j = 0, _len1 = effects.length; _j < _len1; _j++) {\n        effect = effects[_j];\n        if (typeof (_base = this.sacrificeRecipient).addEffect === \"function\") {\n          _base.addEffect(effect, this);\n        }\n      }\n    }\n    this.target.addEffect({\n      name: 'curse',\n      duration: 0.5,\n      reverts: true,\n      setTo: true,\n      targetProperty: 'beingSacrificed'\n    });\n    this.target.health = 0;\n    this.target.keepTrackedProperty('health');\n    this.target.die();\n    return this.sacrificeRecipient = null;\n  };\n\n  return CastsSacrifice;\n\n})(Component);\n",
	"system": "magic",
	"creator": "5790b3eea6956624001431f9",
	"original": "55f4387d09e9dd3a05692f81",
	"watchers": [
		"531c8c3ccf439d790a23af04"
	],
	"__v": 0,
	"description": "This gives the thang the ability to cast a sacrifice spell.",
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
				"format": "seconds"
			},
			"range": {
				"type": "number",
				"description": "The distance the spell can be cast over.  Both victim and recipient must be within range.",
				"format": "meters",
				"minimum": 0
			},
			"specificCooldown": {
				"type": "number",
				"format": "seconds"
			},
			"efficiency": {
				"type": "number",
				"maximum": 1,
				"minimum": 0,
				"description": "How much of the health and damage are transferred?"
			}
		},
		"default": {
			"range": 20,
			"cooldown": 0.25,
			"specificCooldown": 2,
			"efficiency": 0.9
		}
	},
	"commitMessage": "Diplomat submission for lang hu: 1 change(s).",
	"parent": "577a07ace96b2e6a00560692",
	"i18nCoverage": [
		"-",
		"ru",
		"fr",
		"pt-BR",
		"de-DE",
		"it",
		"es-ES",
		"el",
		"zh-HANS",
		"sk",
		"nl-NL",
		"es-419",
		"sr",
		"sv",
		"pl",
		"bg",
		"hu"
	],
	"slug": "castssacrifice",
	"index": true,
	"patches": [],
	"created": "2016-07-28T13:17:19.659Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 48,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "531c8c3ccf439d790a23af04"
		},
		{
			"access": "read",
			"target": "public"
		}
	]
}