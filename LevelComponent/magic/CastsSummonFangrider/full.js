{
	"_id": "55392d9448fe54ea22e11ea8",
	"searchStrings": "casts summon fangrider c ca cas cast casts castss castssu castssum castssumm castssummo castssummon castssummonf castssummonfa castssummonfan castssummonfang castssummonfangr castssummonfangri castssummonfangrid",
	"index": true,
	"slug": "castssummonfangrider",
	"name": "CastsSummonFangrider",
	"js": "var CastsSummonFangrider,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCastsSummonFangrider = (function(_super) {\n  __extends(CastsSummonFangrider, _super);\n\n  CastsSummonFangrider.className = 'CastsSummonFangrider';\n\n  function CastsSummonFangrider(config) {\n    CastsSummonFangrider.__super__.constructor.call(this, config);\n    this._summonFangriderSpell = {\n      name: 'summon-fangrider',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      duration: this.duration,\n      count: this.count\n    };\n    delete this.count;\n    delete this.duration;\n    delete this.cooldown;\n    delete this.specificCooldown;\n  }\n\n  CastsSummonFangrider.prototype.attach = function(thang) {\n    var _ref, _ref1, _ref2;\n    this.fangriderThangType = ((_ref = this.requiredThangTypes) != null ? _ref : [])[0];\n    thang.requiredThangTypes = ((_ref2 = thang.requiredThangTypes) != null ? _ref2 : []).concat((_ref1 = this.requiredThangTypes) != null ? _ref1 : []);\n    if (this.fangriderThangType) {\n      thang.componentsForThangType(this.fangriderThangType);\n    }\n    delete this.requiredThangTypes;\n    CastsSummonFangrider.__super__.attach.call(this, thang);\n    return thang.addSpell(this._summonFangriderSpell);\n  };\n\n  CastsSummonFangrider.prototype['getTarget_summon-fangrider'] = function() {\n    return this.getNearestEnemy();\n  };\n\n  CastsSummonFangrider.prototype['perform_summon-fangrider'] = function() {\n    var angle, distance, fangrider, i, placementAttempts, targetPos, z, _i, _ref, _results;\n    if (!this.fangriderComponents) {\n      this.configureFangrider();\n    }\n    if (!this.fangriderComponents) {\n      throw new ArgumentError(\"There was a problem loading the Fangrider Thang Components.\");\n    }\n    _results = [];\n    for (i = _i = 0, _ref = this.spells['summon-fangrider'].count; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {\n      fangrider = this.spawn(this.fangriderSpriteName, this.fangriderComponents);\n      fangrider.keepTrackedProperty('pos');\n      if (this.aiSystem == null) {\n        this.aiSystem = this.world.getSystem(\"AI\");\n      }\n      angle = this.world.rand.randf() * 2 * Math.PI;\n      distance = this.world.rand.randf2(4, 8);\n      placementAttempts = 8;\n      while (placementAttempts--) {\n        targetPos = new Vector(this.pos.x + distance * Math.cos(angle), this.pos.y + distance * Math.sin(angle));\n        if (this.aiSystem.isPathClear(this.pos, targetPos, this, true)) {\n          break;\n        }\n        angle += Math.PI / 4;\n        distance *= 0.8;\n      }\n      z = fangrider.pos.z;\n      fangrider.pos = targetPos;\n      fangrider.pos.z = z;\n      _results.push(typeof this.brake === \"function\" ? this.brake() : void 0);\n    }\n    return _results;\n  };\n\n  CastsSummonFangrider.prototype.configureFangrider = function() {\n    var allied, _ref, _ref1, _ref2;\n    if (this.fangriderThangType) {\n      this.fangriderComponents = _.cloneDeep(this.componentsForThangType(this.fangriderThangType));\n      this.fangriderSpriteName = (_ref = (_ref1 = _.find(this.world.thangTypes, {\n        original: this.fangriderThangType\n      })) != null ? _ref1.name : void 0) != null ? _ref : this.fangriderThangType;\n      if ((_ref2 = this.fangriderComponents) != null ? _ref2.length : void 0) {\n        if (allied = _.find(this.fangriderComponents, function(c) {\n          return c[1].team;\n        })) {\n          return allied[1].team = this.team;\n        }\n      } else {\n        return console.log(this.id, \"CastsSummonFangrider problem: couldn't find fangrider to summon for type\", this.fangriderThangType);\n      }\n    } else {\n      return console.log(\"Couldn't find fangriderThangType!\");\n    }\n  };\n\n  return CastsSummonFangrider;\n\n})(Component);\n",
	"system": "magic",
	"creator": "512ef4805a67a8c507000001",
	"original": "5539294248fe54ea22e11e94",
	"watchers": [
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"description": "This Component makes the Thang summon fangriders.",
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
				"description": "Number of fangriders spawned.",
				"minimum": 1
			},
			"requiredThangTypes": {
				"type": "array",
				"description": "Contains a single element: the ThangType to use as a template for this Thang's fangriders.",
				"additionalProperties": true,
				"items": {
					"description": "The ThangType to use as a template for this Thang's fangrider.",
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
			"cooldown": 0.5,
			"specificCooldown": 7.5,
			"count": 1,
			"requiredThangTypes": [
				"529e5f0c6febb9ca7e00000c"
			]
		}
	},
	"commitMessage": "Added docs.",
	"parent": "55392af048fe54ea22e11e95",
	"created": "2015-04-23T17:36:20.523Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 2,
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