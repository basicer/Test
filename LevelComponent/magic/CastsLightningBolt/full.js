{
	"_id": "558452224bed1b6c2a2caab9",
	"searchStrings": "casts lightning bolt c ca cas cast casts castsl castsli castslig castsligh castslight castslightn castslightni castslightnin castslightning castslightningb castslightningbo",
	"index": true,
	"slug": "castslightningbolt",
	"name": "CastsLightningBolt",
	"js": "var CastsLightningBolt,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCastsLightningBolt = (function(_super) {\n  __extends(CastsLightningBolt, _super);\n\n  CastsLightningBolt.className = 'CastsLightningBolt';\n\n  function CastsLightningBolt(config) {\n    CastsLightningBolt.__super__.constructor.call(this, config);\n    this._lightningBoltSpell = {\n      name: 'lightning-bolt',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      damage: this.damage,\n      splashRange: this.splashRange,\n      splashFactor: this.splashFactor\n    };\n    delete this.damage;\n    delete this.cooldown;\n    delete this.specificCooldown;\n    delete this.splashFactor;\n    delete this.splashRange;\n  }\n\n  CastsLightningBolt.prototype.attach = function(thang) {\n    var _ref, _ref1, _ref2;\n    this.lightningBoltThangType = ((_ref = this.requiredThangTypes) != null ? _ref : [])[0];\n    thang.requiredThangTypes = ((_ref2 = thang.requiredThangTypes) != null ? _ref2 : []).concat((_ref1 = this.requiredThangTypes) != null ? _ref1 : []);\n    if (this.lightningBoltThangType) {\n      thang.componentsForThangType(this.lightningBoltThangType);\n    }\n    delete this.requiredThangTypes;\n    CastsLightningBolt.__super__.attach.call(this, thang);\n    return thang.addSpell(this._lightningBoltSpell);\n  };\n\n  CastsLightningBolt.prototype['perform_lightning-bolt'] = function() {\n    var affected, baseDamage, c, damage, e, _i, _len;\n    baseDamage = this.spells['lightning-bolt'].damage;\n    affected = (function() {\n      var _i, _len, _ref, _results;\n      _ref = this.world.getSystem('Combat').attackables;\n      _results = [];\n      for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n        c = _ref[_i];\n        if (this.target.distance(c.pos) < this.spells['lightning-bolt'].splashRange && c.team !== this.team) {\n          _results.push(c);\n        }\n      }\n      return _results;\n    }).call(this);\n    for (_i = 0, _len = affected.length; _i < _len; _i++) {\n      e = affected[_i];\n      damage = baseDamage * (e === this.target ? 1 : this.spells['lightning-bolt'].splashFactor);\n      if (typeof e.takeDamage === \"function\") {\n        e.takeDamage(damage, this);\n      }\n    }\n    if (!this.lightningBoltMissileComponents) {\n      this.configureLightningBoltMissile();\n    }\n    if (!this.lightningBoltMissileComponents) {\n      return;\n    }\n    if (this.hidden) {\n      if (typeof this.unhide === \"function\") {\n        this.unhide();\n      }\n    }\n    this.lastLightningBoltShot = this.spawn(this.lightningBoltMissileSpriteName, this.lightningBoltMissileComponents);\n    this.lastLightningBoltShot.pos = this.target.pos.copy();\n    this.lastLightningBoltShot.pos.z += this.lastLightningBoltShot.depth / 2;\n    this.lastLightningBoltShot.addTrackedProperties(['pos', 'Vector']);\n    this.lastLightningBoltShot.keepTrackedProperty('pos');\n    return this.lastLightningBoltShot;\n  };\n\n  CastsLightningBolt.prototype.configureLightningBoltMissile = function() {\n    var allied, _ref, _ref1, _ref2;\n    if (this.lightningBoltThangType) {\n      this.lightningBoltMissileComponents = _.cloneDeep(this.componentsForThangType(this.lightningBoltThangType));\n      this.lightningBoltMissileSpriteName = (_ref = (_ref1 = _.find(this.world.thangTypes, {\n        original: this.lightningBoltThangType\n      })) != null ? _ref1.name : void 0) != null ? _ref : this.lightningBoltThangType;\n    }\n    if ((_ref2 = this.lightningBoltMissileComponents) != null ? _ref2.length : void 0) {\n      if (allied = _.find(this.lightningBoltMissileComponents, function(c) {\n        return c[1].team;\n      })) {\n        return allied[1].team = this.team;\n      }\n    } else {\n      return console.log(this.id, \"CastsLightningBolt problem: couldn't find missile to shoot for type\", this.lightningBoltThangType);\n    }\n  };\n\n  return CastsLightningBolt;\n\n})(Component);\n",
	"system": "magic",
	"creator": "512ef4805a67a8c507000001",
	"original": "5462e0583839c6e02811d1b1",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Cancels hide and invisibility.",
	"parent": "553978c864a1488df00d94dd",
	"description": "This Component gives the Thang a lightning bolt spell.",
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
				"type": "number"
			},
			"requiredThangTypes": {
				"type": "array",
				"additionalProperties": true,
				"description": "Contains a single element: the ThangType to use as a template for this Thang's lightning Bolts.",
				"items": {
					"description": "The ThangType to use as a template for this Thang's bolts.",
					"type": "string",
					"format": "thang-type"
				}
			},
			"specificCooldown": {
				"type": "number",
				"minimum": 0,
				"format": "seconds"
			},
			"splashFactor": {
				"type": "number",
				"maximum": 1
			},
			"splashRange": {
				"type": "number",
				"minimum": 0,
				"format": "meters"
			}
		},
		"additionalProperties": false,
		"type": "object",
		"default": {
			"cooldown": 0.75,
			"specificCooldown": 12.5,
			"damage": 300,
			"requiredThangTypes": [
				"529ec2cec423d4e83b000011"
			],
			"splashFactor": 0.1,
			"splashRange": 6
		}
	},
	"patches": [],
	"created": "2015-06-19T17:32:18.292Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 11,
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