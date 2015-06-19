{
	"_id": "558452204bed1b6c2a2caab3",
	"searchStrings": "casts fireball c ca cas cast casts castsf castsfi castsfir castsfire castsfireb castsfireba",
	"index": true,
	"slug": "castsfireball",
	"name": "CastsFireball",
	"js": "var CastsFireball,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCastsFireball = (function(_super) {\n  __extends(CastsFireball, _super);\n\n  CastsFireball.className = 'CastsFireball';\n\n  function CastsFireball(config) {\n    CastsFireball.__super__.constructor.call(this, config);\n    this._fireballSpell = {\n      name: 'fireball',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      range: this.range,\n      damage: this.damage,\n      mass: this.mass,\n      radius: this.radius\n    };\n    delete this.mass;\n    delete this.damage;\n    delete this.cooldown;\n    delete this.specificCooldown;\n    delete this.range;\n  }\n\n  CastsFireball.prototype.attach = function(thang) {\n    var _ref, _ref1, _ref2;\n    this.fireballThangType = ((_ref = this.requiredThangTypes) != null ? _ref : [])[0];\n    thang.requiredThangTypes = ((_ref2 = thang.requiredThangTypes) != null ? _ref2 : []).concat((_ref1 = this.requiredThangTypes) != null ? _ref1 : []);\n    if (this.fireballThangType) {\n      thang.componentsForThangType(this.fireballThangType);\n    }\n    delete this.requiredThangTypes;\n    CastsFireball.__super__.attach.call(this, thang);\n    return thang.addSpell(this._fireballSpell);\n  };\n\n  CastsFireball.prototype['perform_fireball'] = function() {\n    var _base;\n    if (!this.fireballMissileComponents) {\n      this.configureFireballMissile();\n    }\n    if (!this.fireballMissileComponents) {\n      return;\n    }\n    if (this.hidden) {\n      if (typeof this.unhide === \"function\") {\n        this.unhide();\n      }\n    }\n    this.lastFireballShot = this.spawn(this.fireballMissileSpriteName, this.fireballMissileComponents);\n    if (typeof (_base = this.lastFireballShot).launch === \"function\") {\n      _base.launch(this, 'fireball');\n    }\n    this.lastFireballShot.addTrackedProperties(['scaleFactor', 'number'], ['scaleFactorX', 'number'], ['scaleFactorY', 'number']);\n    this.lastFireballShot.scaleFactor = 2.5;\n    this.lastFireballShot.keepTrackedProperty('scaleFactor');\n    this.lastFireballShot.friendlyFire = true;\n    this.lastFireballShot.mass = this.spells.fireball.mass;\n    this.lastFireballShot.blastRadius = this.spells.fireball.radius;\n    if (typeof this.brake === \"function\") {\n      this.brake();\n    }\n    return this.lastFireballShot;\n  };\n\n  CastsFireball.prototype.performFireballAttack = function(target, damageRatio, momentum) {\n    if (damageRatio == null) {\n      damageRatio = 1;\n    }\n    if (momentum == null) {\n      momentum = null;\n    }\n    return typeof target.takeDamage === \"function\" ? target.takeDamage(this.spells.fireball.damage * damageRatio, this, momentum) : void 0;\n  };\n\n  CastsFireball.prototype.configureFireballMissile = function() {\n    var allied, _ref, _ref1, _ref2;\n    if (this.fireballThangType) {\n      this.fireballMissileComponents = _.cloneDeep(this.componentsForThangType(this.fireballThangType));\n      this.fireballMissileSpriteName = (_ref = (_ref1 = _.find(this.world.thangTypes, {\n        original: this.fireballThangType\n      })) != null ? _ref1.name : void 0) != null ? _ref : this.fireballThangType;\n    }\n    if ((_ref2 = this.fireballMissileComponents) != null ? _ref2.length : void 0) {\n      if (allied = _.find(this.fireballMissileComponents, function(c) {\n        return c[1].team;\n      })) {\n        return allied[1].team = this.team;\n      }\n    } else {\n      return console.log(this.id, \"CastsFireball problem: couldn't find missile to shoot for type\", this.fireballThangType);\n    }\n  };\n\n  return CastsFireball;\n\n})(Component);\n",
	"system": "magic",
	"creator": "512ef4805a67a8c507000001",
	"original": "5462e0763839c6e02811d1b4",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Cancels hide and invisibility.",
	"parent": "55398c6464a1488df00d950c",
	"description": "This Component gives the Thang a fireball spell.",
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
			"damage": {
				"type": "number",
				"description": "Damage to target.",
				"minimum": 0
			},
			"mass": {
				"type": "number",
				"format": "kilograms",
				"description": "How much explosive force to apply to thangs hit at the center of the fireball."
			},
			"radius": {
				"type": "number",
				"format": "meters",
				"description": "Radius of the splash damage.",
				"minimum": 0
			},
			"range": {
				"type": "number",
				"minimum": 0,
				"format": "meters"
			},
			"requiredThangTypes": {
				"type": "array",
				"description": "Contains a single element: the ThangType to use as a template for this Thang's fireballs.",
				"items": {
					"description": "The ThangType to use as a template for this Thang's fireballs.",
					"type": "string",
					"format": "thang-type"
				}
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
			"range": 50,
			"cooldown": 0.75,
			"specificCooldown": 10,
			"radius": 15,
			"damage": 150,
			"requiredThangTypes": [
				"531a6a2f1ddc910545d5e944"
			],
			"mass": 2000
		}
	},
	"patches": [],
	"created": "2015-06-19T17:32:16.994Z",
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