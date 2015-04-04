{
	"_id": "551ff89b688fa73505ab6103",
	"searchStrings": "casts goldstorm c ca cas cast casts castsg castsgo castsgol castsgold castsgolds castsgoldst castsgoldsto",
	"index": true,
	"slug": "castsgoldstorm",
	"name": "CastsGoldstorm",
	"js": "var CastsGoldstorm,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCastsGoldstorm = (function(_super) {\n  __extends(CastsGoldstorm, _super);\n\n  CastsGoldstorm.className = 'CastsGoldstorm';\n\n  function CastsGoldstorm(config) {\n    CastsGoldstorm.__super__.constructor.call(this, config);\n    this._goldstormSpell = {\n      name: 'goldstorm',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      amount: this.amount\n    };\n    delete this.amount;\n    delete this.cooldown;\n    delete this.specificCooldown;\n  }\n\n  CastsGoldstorm.prototype.attach = function(thang) {\n    var _ref, _ref1, _ref2;\n    this.goldCloudThangType = ((_ref = this.requiredThangTypes) != null ? _ref : [])[0];\n    thang.requiredThangTypes = ((_ref2 = thang.requiredThangTypes) != null ? _ref2 : []).concat((_ref1 = this.requiredThangTypes) != null ? _ref1 : []);\n    if (this.goldCloudThangType) {\n      thang.componentsForThangType(this.goldCloudThangType);\n    }\n    delete this.requiredThangTypes;\n    CastsGoldstorm.__super__.attach.call(this, thang);\n    return thang.addSpell(this._goldstormSpell);\n  };\n\n  CastsGoldstorm.prototype.perform_goldstorm = function() {\n    var angle, distance, placementAttempts, targetPos, z, _ref;\n    if (!this.goldCloudComponents) {\n      this.configureGoldCloud();\n    }\n    if (!this.goldCloudComponents) {\n      return;\n    }\n    this.lastGoldCloudSpawned = this.spawn(this.goldCloudSpriteName, this.goldCloudComponents);\n    if ((_ref = this.lastGoldCloudSpawned) != null) {\n      _ref.rainCount = Math.ceil(this.spells.goldstorm.amount / 3);\n    }\n    if (this.aiSystem == null) {\n      this.aiSystem = this.world.getSystem(\"AI\");\n    }\n    angle = this.world.rand.randf() * 2 * Math.PI;\n    distance = this.world.rand.randf2(4, 8);\n    placementAttempts = 8;\n    while (placementAttempts--) {\n      targetPos = new Vector(this.pos.x + distance * Math.cos(angle), this.pos.y + distance * Math.sin(angle));\n      if (this.aiSystem.isPathClear(this.pos, targetPos, this, true)) {\n        break;\n      }\n      angle += Math.PI / 4;\n      distance *= 0.8;\n    }\n    z = this.lastGoldCloudSpawned.pos.z;\n    this.lastGoldCloudSpawned.pos = targetPos;\n    this.lastGoldCloudSpawned.pos.z = z;\n    this.lastGoldCloudSpawned.velocity = new Vector(1, 0, 0).rotate(angle).multiply(this.lastGoldCloudSpawned.velocity.magnitude());\n    if (typeof this.brake === \"function\") {\n      this.brake();\n    }\n    return this.lastGoldCloudSpawned;\n  };\n\n  CastsGoldstorm.prototype.configureGoldCloud = function() {\n    var allied, _ref, _ref1, _ref2;\n    if (this.goldCloudThangType) {\n      this.goldCloudComponents = _.cloneDeep(this.componentsForThangType(this.goldCloudThangType));\n      this.goldCloudSpriteName = (_ref = (_ref1 = _.find(this.world.thangTypes, {\n        original: this.goldCloudThangType\n      })) != null ? _ref1.name : void 0) != null ? _ref : this.goldCloudThangType;\n    }\n    if ((_ref2 = this.goldCloudComponents) != null ? _ref2.length : void 0) {\n      if (allied = _.find(this.goldCloudComponents, function(c) {\n        return c[1].team;\n      })) {\n        return allied[1].team = this.team;\n      }\n    } else {\n      return console.log(this.id, \"CastsGoldstorm problem: couldn't find cloud to spawn for type\", this.goldCloudThangType);\n    }\n  };\n\n  return CastsGoldstorm;\n\n})(Component);\n",
	"system": "magic",
	"creator": "531c8c3ccf439d790a23af04",
	"original": "5462e07d3839c6e02811d1b5",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "",
	"parent": "5515feb8df39e356c4fe7c91",
	"description": "This Component gives the Thang a goldstorm spell.",
	"codeLanguage": "coffeescript",
	"dependencies": [
		{
			"original": "52f13c37528baa731827408d",
			"majorVersion": 0
		}
	],
	"configSchema": {
		"properties": {
			"amount": {
				"type": "number",
				"description": "Total value of coins spawned."
			},
			"cooldown": {
				"type": "number",
				"minimum": 0,
				"format": "seconds"
			},
			"specificCooldown": {
				"type": "number",
				"minimum": 0,
				"format": "seconds"
			},
			"requiredThangTypes": {
				"type": "array",
				"description": "Contains a single element: the ThangType to use as a template for this Thang's force bolts.",
				"additionalProperties": true,
				"items": {
					"description": "The ThangType to use as a template for this Thang's gold cloud.",
					"format": "thang-type",
					"type": "string"
				}
			}
		},
		"additionalProperties": false,
		"type": "object",
		"default": {
			"cooldown": 0.75,
			"specificCooldown": 15,
			"amount": 105,
			"requiredThangTypes": [
				"550b4b9d8a7d3c197a824d5e"
			]
		}
	},
	"patches": [],
	"created": "2015-04-04T14:43:39.721Z",
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