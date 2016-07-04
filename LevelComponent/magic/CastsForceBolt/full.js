{
	"_id": "577a038335ea2e2400352939",
	"slug": "castsforcebolt",
	"searchStrings": "casts force bolt c ca cas cast casts castsf castsfo castsfor castsforc castsforce castsforceb castsforcebo",
	"name": "CastsForceBolt",
	"js": "var CastsForceBolt,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCastsForceBolt = (function(_super) {\n  __extends(CastsForceBolt, _super);\n\n  CastsForceBolt.className = 'CastsForceBolt';\n\n  function CastsForceBolt(config) {\n    CastsForceBolt.__super__.constructor.call(this, config);\n    this._forceBoltSpell = {\n      name: 'force-bolt',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      range: this.range,\n      damage: this.damage,\n      mass: this.mass\n    };\n    delete this.mass;\n    delete this.damage;\n    delete this.cooldown;\n    delete this.specificCooldown;\n    delete this.range;\n  }\n\n  CastsForceBolt.prototype.attach = function(thang) {\n    var _ref, _ref1, _ref2;\n    this.forceBoltThangType = ((_ref = this.requiredThangTypes) != null ? _ref : [])[0];\n    thang.requiredThangTypes = ((_ref2 = thang.requiredThangTypes) != null ? _ref2 : []).concat((_ref1 = this.requiredThangTypes) != null ? _ref1 : []);\n    if (this.forceBoltThangType) {\n      thang.componentsForThangType(this.forceBoltThangType);\n    }\n    delete this.requiredThangTypes;\n    CastsForceBolt.__super__.attach.call(this, thang);\n    return thang.addSpell(this._forceBoltSpell);\n  };\n\n  CastsForceBolt.prototype['perform_force-bolt'] = function() {\n    var _base;\n    if (!this.forceBoltMissileComponents) {\n      this.configureForceBoltMissile();\n    }\n    if (!this.forceBoltMissileComponents) {\n      return;\n    }\n    if (this.hidden) {\n      if (typeof this.unhide === \"function\") {\n        this.unhide();\n      }\n    }\n    this.lastForceBoltShot = this.spawn(this.forceBoltMissileSpriteName, this.forceBoltMissileComponents);\n    if (typeof (_base = this.lastForceBoltShot).launch === \"function\") {\n      _base.launch(this, 'forceBolt');\n    }\n    if (typeof this.brake === \"function\") {\n      this.brake();\n    }\n    return this.lastForceBoltShot;\n  };\n\n  CastsForceBolt.prototype.performForceBoltAttack = function(target, damageRatio, momentum) {\n    var _ref;\n    if (damageRatio == null) {\n      damageRatio = 1;\n    }\n    if (momentum == null) {\n      momentum = null;\n    }\n    if (momentum == null) {\n      momentum = this.getForceBoltMomentum((_ref = target.pos) != null ? _ref : target);\n    }\n    return typeof target.takeDamage === \"function\" ? target.takeDamage(this.spells['force-bolt'].damage * damageRatio, this, momentum) : void 0;\n  };\n\n  CastsForceBolt.prototype.getForceBoltMomentum = function(targetPos) {\n    var dir;\n    if (!this.spells['force-bolt'].mass) {\n      return null;\n    }\n    dir = targetPos.copy().subtract(this.pos).normalize();\n    dir.z = Math.sin(Math.PI / 8);\n    return dir.normalize().multiply(this.spells['force-bolt'].mass, true);\n  };\n\n  CastsForceBolt.prototype.configureForceBoltMissile = function() {\n    var allied, _ref, _ref1, _ref2;\n    if (this.forceBoltThangType) {\n      this.forceBoltMissileComponents = _.cloneDeep(this.componentsForThangType(this.forceBoltThangType));\n      this.forceBoltMissileSpriteName = (_ref = (_ref1 = _.find(this.world.thangTypes, {\n        original: this.forceBoltThangType\n      })) != null ? _ref1.name : void 0) != null ? _ref : this.forceBoltThangType;\n    }\n    if ((_ref2 = this.forceBoltMissileComponents) != null ? _ref2.length : void 0) {\n      if (allied = _.find(this.forceBoltMissileComponents, function(c) {\n        return c[1].team;\n      })) {\n        return allied[1].team = this.team;\n      }\n    } else {\n      return console.log(this.id, \"CastsForceBolt problem: couldn't find missile to shoot for type\", this.forceBoltThangType);\n    }\n  };\n\n  return CastsForceBolt;\n\n})(Component);\n",
	"system": "magic",
	"creator": "57261bee23fccb2f009093c1",
	"original": "5462e0243839c6e02811d1ac",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Diplomat submission for lang bg: 1 change(s).",
	"parent": "56faa7dc3d3c0325000440b3",
	"description": "This Component gives the Thang a force bolt spell.",
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
				"description": "Contains a single element: the ThangType to use as a template for this Thang's force bolts.",
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
		"es-ES",
		"nb",
		"zh-HANS",
		"sk",
		"pt-BR",
		"sv",
		"uk",
		"pl",
		"it",
		"nl-NL",
		"el",
		"hu",
		"id",
		"es-419",
		"sr",
		"da",
		"bg"
	],
	"patches": [],
	"index": true,
	"created": "2016-07-04T06:34:43.933Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 36,
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