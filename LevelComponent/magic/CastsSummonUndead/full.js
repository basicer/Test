{
	"_id": "577a0b4135ea2e24003533f7",
	"searchStrings": "casts summon undead c ca cas cast casts castss castssu castssum castssumm castssummo castssummon castssummonu castssummonun castssummonund castssummonunde",
	"index": true,
	"slug": "castssummonundead",
	"name": "CastsSummonUndead",
	"js": "var CastsSummonUndead,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCastsSummonUndead = (function(_super) {\n  __extends(CastsSummonUndead, _super);\n\n  CastsSummonUndead.className = 'CastsSummonUndead';\n\n  function CastsSummonUndead(config) {\n    CastsSummonUndead.__super__.constructor.call(this, config);\n    this._summonUndeadSpell = {\n      name: 'summon-undead',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      duration: this.duration,\n      count: this.count\n    };\n    delete this.count;\n    delete this.duration;\n    delete this.cooldown;\n    delete this.specificCooldown;\n  }\n\n  CastsSummonUndead.prototype.attach = function(thang) {\n    var _ref, _ref1, _ref2;\n    this.skeletonThangType = ((_ref = this.requiredThangTypes) != null ? _ref : [])[0];\n    thang.requiredThangTypes = ((_ref2 = thang.requiredThangTypes) != null ? _ref2 : []).concat((_ref1 = this.requiredThangTypes) != null ? _ref1 : []);\n    if (this.skeletonThangType) {\n      thang.componentsForThangType(this.skeletonThangType);\n    }\n    delete this.requiredThangTypes;\n    CastsSummonUndead.__super__.attach.call(this, thang);\n    return thang.addSpell(this._summonUndeadSpell);\n  };\n\n  CastsSummonUndead.prototype['getTarget_summon-undead'] = function() {\n    return this.getNearestEnemy();\n  };\n\n  CastsSummonUndead.prototype['perform_summon-undead'] = function() {\n    var angle, distance, i, placementAttempts, skeleton, targetPos, z, _i, _ref, _results;\n    if (!this.skeletonComponents) {\n      this.configureSkeleton();\n    }\n    if (!this.skeletonComponents) {\n      throw new ArgumentError(\"There was a problem loading the Skeleton Thang Components.\");\n    }\n    _results = [];\n    for (i = _i = 0, _ref = this.spells['summon-undead'].count; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {\n      skeleton = this.spawn(this.skeletonSpriteName, this.skeletonComponents);\n      skeleton.keepTrackedProperty('pos');\n      if (this.aiSystem == null) {\n        this.aiSystem = this.world.getSystem(\"AI\");\n      }\n      angle = this.world.rand.randf() * 2 * Math.PI;\n      distance = this.world.rand.randf2(4, 8);\n      placementAttempts = 8;\n      while (placementAttempts--) {\n        targetPos = new Vector(this.pos.x + distance * Math.cos(angle), this.pos.y + distance * Math.sin(angle));\n        if (this.aiSystem.isPathClear(this.pos, targetPos, this, true)) {\n          break;\n        }\n        angle += Math.PI / 4;\n        distance *= 0.8;\n      }\n      z = skeleton.pos.z;\n      skeleton.pos = targetPos;\n      skeleton.pos.z = z + 1;\n      skeleton.velocity = new Vector(8, 0, 2).rotate(angle);\n      _results.push(typeof this.brake === \"function\" ? this.brake() : void 0);\n    }\n    return _results;\n  };\n\n  CastsSummonUndead.prototype.configureSkeleton = function() {\n    var allied, _ref, _ref1, _ref2;\n    if (this.skeletonThangType) {\n      this.skeletonComponents = _.cloneDeep(this.componentsForThangType(this.skeletonThangType));\n      this.skeletonSpriteName = (_ref = (_ref1 = _.find(this.world.thangTypes, {\n        original: this.skeletonThangType\n      })) != null ? _ref1.name : void 0) != null ? _ref : this.skeletonThangType;\n      if ((_ref2 = this.skeletonComponents) != null ? _ref2.length : void 0) {\n        if (allied = _.find(this.skeletonComponents, function(c) {\n          return c[1].team;\n        })) {\n          return allied[1].team = this.team;\n        }\n      } else {\n        return console.log(this.id, \"CastsSummonUndead problem: couldn't find Skeleton to summon for type\", this.skeletonThangType);\n      }\n    } else {\n      return console.log(\"Couldn't find skeletonThangType!\");\n    }\n  };\n\n  return CastsSummonUndead;\n\n})(Component);\n",
	"system": "magic",
	"creator": "57261bee23fccb2f009093c1",
	"original": "5462e0d13839c6e02811d1bb",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Diplomat submission for lang bg: 1 change(s).",
	"parent": "570697fdf4aa2f2a00fe1d6d",
	"description": "This Component gives the Thang a summon undead spell.",
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
			"count": {
				"type": "number",
				"description": "Number of undead spawned.",
				"minimum": 1
			},
			"requiredThangTypes": {
				"type": "array",
				"description": "Contains a single element: the ThangType to use as a template for this Thang's skeletons.",
				"additionalProperties": true,
				"items": {
					"description": "The ThangType to use as a template for this Thang's skeleton.",
					"format": "thang-type",
					"type": "string"
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
			"cooldown": 0.75,
			"specificCooldown": 7.5,
			"count": 2,
			"requiredThangTypes": [
				"54c83b8ae2829db30d0310e0"
			]
		}
	},
	"i18nCoverage": [
		"-",
		"de-DE",
		"fr",
		"ru",
		"zh-HANS",
		"sk",
		"pt-BR",
		"uk",
		"pl",
		"es-419",
		"tr",
		"it",
		"el",
		"nl-NL",
		"sr",
		"sv",
		"bg"
	],
	"patches": [],
	"created": "2016-07-04T07:07:45.226Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 27,
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