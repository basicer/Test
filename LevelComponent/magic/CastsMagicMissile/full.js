{
	"_id": "577a058b35ea2e2400352b4b",
	"searchStrings": "casts magic missile c ca cas cast casts castsm castsma castsmag castsmagi castsmagic castsmagicm castsmagicmi castsmagicmis castsmagicmiss castsmagicmissi",
	"index": true,
	"slug": "castsmagicmissile",
	"name": "CastsMagicMissile",
	"js": "var CastsMagicMissile, Vector,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nVector = require('lib/world/vector');\n\nCastsMagicMissile = (function(_super) {\n  __extends(CastsMagicMissile, _super);\n\n  CastsMagicMissile.className = 'CastsMagicMissile';\n\n  CastsMagicMissile.prototype.magicMissileCount = 5;\n\n  function CastsMagicMissile(config) {\n    CastsMagicMissile.__super__.constructor.call(this, config);\n    this._magicMissileSpell = {\n      name: 'magic-missile',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      range: this.range,\n      damage: this.damage,\n      mass: this.mass\n    };\n    delete this.damage;\n    delete this.mass;\n    delete this.cooldown;\n    delete this.specificCooldown;\n    delete this.range;\n  }\n\n  CastsMagicMissile.prototype.attach = function(thang) {\n    var _ref, _ref1, _ref2;\n    this.magicMissileThangType = ((_ref = this.requiredThangTypes) != null ? _ref : [])[0];\n    thang.requiredThangTypes = ((_ref2 = thang.requiredThangTypes) != null ? _ref2 : []).concat((_ref1 = this.requiredThangTypes) != null ? _ref1 : []);\n    if (this.magicMissileThangType) {\n      thang.componentsForThangType(this.magicMissileThangType);\n    }\n    delete this.requiredThangTypes;\n    CastsMagicMissile.__super__.attach.call(this, thang);\n    return thang.addSpell(this._magicMissileSpell);\n  };\n\n  CastsMagicMissile.prototype['perform_magic-missile'] = function() {\n    var i, _base, _i, _ref;\n    if (!this.magicMissileMissileComponents) {\n      this.configureMagicMissileMissile();\n    }\n    if (!this.magicMissileMissileComponents) {\n      return;\n    }\n    if (this.hidden) {\n      if (typeof this.unhide === \"function\") {\n        this.unhide();\n      }\n    }\n    this.originalPos = this.pos;\n    for (i = _i = 0, _ref = this.magicMissileCount; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {\n      this.pos = Vector.add(this.originalPos, {\n        x: -3 + this.world.rand.randf() * 6,\n        y: -3 + this.world.rand.randf() * 6\n      });\n      this.lastMagicMissileShot = this.spawn(this.magicMissileMissileSpriteName, this.magicMissileMissileComponents);\n      if (typeof (_base = this.lastMagicMissileShot).launch === \"function\") {\n        _base.launch(this, 'magicMissile');\n      }\n    }\n    this.pos = this.originalPos;\n    if (typeof this.brake === \"function\") {\n      this.brake();\n    }\n    return this.lastMagicMissileShot;\n  };\n\n  CastsMagicMissile.prototype.performMagicMissileAttack = function(target, damageRatio, momentum) {\n    var _ref;\n    if (damageRatio == null) {\n      damageRatio = 1;\n    }\n    if (momentum == null) {\n      momentum = null;\n    }\n    if (momentum == null) {\n      momentum = this.getMagicMissileMomentum((_ref = target.pos) != null ? _ref : target);\n    }\n    return typeof target.takeDamage === \"function\" ? target.takeDamage(this.spells['magic-missile'].damage * damageRatio / this.magicMissileCount, this, momentum) : void 0;\n  };\n\n  CastsMagicMissile.prototype.getMagicMissileMomentum = function(targetPos) {\n    var dir;\n    if (!this.spells['magic-missile'].mass) {\n      return null;\n    }\n    dir = targetPos.copy().subtract(this.pos).normalize();\n    dir.z = Math.sin(Math.PI / 8);\n    return dir.normalize().multiply(this.spells['magic-missile'].mass / this.magicMissileCount, true);\n  };\n\n  CastsMagicMissile.prototype.configureMagicMissileMissile = function() {\n    var allied, _ref, _ref1, _ref2;\n    if (this.magicMissileThangType) {\n      this.magicMissileMissileComponents = _.cloneDeep(this.componentsForThangType(this.magicMissileThangType));\n      this.magicMissileMissileSpriteName = (_ref = (_ref1 = _.find(this.world.thangTypes, {\n        original: this.magicMissileThangType\n      })) != null ? _ref1.name : void 0) != null ? _ref : this.magicMissileThangType;\n    }\n    if ((_ref2 = this.magicMissileMissileComponents) != null ? _ref2.length : void 0) {\n      if (allied = _.find(this.magicMissileMissileComponents, function(c) {\n        return c[1].team;\n      })) {\n        return allied[1].team = this.team;\n      }\n    } else {\n      return console.log(this.id, \"CastsMagicMissile problem: couldn't find missile to shoot for type\", this.magicMissileThangType);\n    }\n  };\n\n  return CastsMagicMissile;\n\n})(Component);\n",
	"system": "magic",
	"creator": "57261bee23fccb2f009093c1",
	"original": "5462e0503839c6e02811d1b0",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Diplomat submission for lang bg: 1 change(s).",
	"parent": "576e98da1a6afc24007a85cb",
	"description": "This Component gives the Thang a magic missile spell.",
	"codeLanguage": "coffeescript",
	"dependencies": [
		{
			"original": "52f13c37528baa731827408d",
			"majorVersion": 0
		},
		{
			"original": "524cbdc03ea855e0ab0000bb",
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
			"requiredThangTypes": {
				"type": "array",
				"description": "Contains a single element: the ThangType to use as a template for this Thang's magic missiles.",
				"additionalProperties": true,
				"items": {
					"description": "The ThangType to use as a template for this Thang's missiles.",
					"format": "thang-type",
					"type": "string"
				}
			},
			"specificCooldown": {
				"type": "number",
				"minimum": 0,
				"format": "seconds"
			},
			"mass": {
				"type": "number",
				"format": "kilograms"
			},
			"damage": {
				"type": "number"
			}
		},
		"additionalProperties": false,
		"type": "object",
		"default": {
			"range": 30,
			"cooldown": 0.75,
			"specificCooldown": 7.5,
			"requiredThangTypes": [
				"5467807c417c8b48a9811efd"
			],
			"mass": 100,
			"damage": 40
		}
	},
	"i18nCoverage": [
		"-",
		"de-DE",
		"fr",
		"ru",
		"zh-HANS",
		"es-419",
		"sk",
		"pt-BR",
		"sv",
		"uk",
		"pl",
		"it",
		"nl-NL",
		"el",
		"sr",
		"da",
		"hu",
		"bg"
	],
	"patches": [],
	"created": "2016-07-04T06:43:23.097Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 30,
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