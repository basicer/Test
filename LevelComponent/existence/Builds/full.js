{
	"_id": "579cab9163fd7f200049923f",
	"slug": "builds",
	"name": "Builds",
	"js": "var ArgumentError, Builds,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };\n\nArgumentError = require('lib/world/errors').ArgumentError;\n\nBuilds = (function(_super) {\n  __extends(Builds, _super);\n\n  Builds.className = 'Builds';\n\n  function Builds(config) {\n    var _ref;\n    Builds.__super__.constructor.call(this, config);\n    this.unitNames = this.buildTypes = [];\n    this.built = [];\n    this._buildables = (_ref = this.buildables) != null ? _ref : {};\n    delete this.buildables;\n  }\n\n  Builds.prototype.attach = function(thang) {\n    var buildType, buildable, _ref, _results;\n    Builds.__super__.attach.call(this, thang);\n    if (thang.acts) {\n      thang.addActions({\n        name: 'build'\n      });\n    }\n    thang.addTrackedProperties(['built', 'array']);\n    thang.inventorySystem = thang.world.getSystem(\"Inventory\");\n    _ref = this._buildables;\n    _results = [];\n    for (buildType in _ref) {\n      buildable = _ref[buildType];\n      _results.push(thang.addBuildable(buildType, buildable));\n    }\n    return _results;\n  };\n\n  Builds.prototype.addBuildable = function(buildType, buildable) {\n    var oldBuildable;\n    if (this.buildables == null) {\n      this.buildables = {};\n    }\n    oldBuildable = this.buildables[buildType];\n    if (oldBuildable && ((oldBuildable.goldCost || 0) < (buildable.goldCost || 0))) {\n      return;\n    }\n    if (oldBuildable && ((oldBuildable.goldCost || 0) === (buildable.goldCost || 0) && oldBuildable.buildCooldown <= buildable.buildCooldown)) {\n      return;\n    }\n    this.buildables[buildType] = buildable;\n    buildable.type = buildType;\n    if (__indexOf.call(this.buildTypes, buildType) < 0) {\n      return this.buildTypes.push(buildType);\n    }\n  };\n\n  Builds.prototype.build = function(toBuild) {\n    if (typeof toBuild === 'undefined') {\n      throw new ArgumentError(\"You need something to build.\", \"build\", \"toBuild\", \"object\", toBuild);\n    }\n    if (__indexOf.call(this.unitNames, toBuild) < 0) {\n      throw new ArgumentError(\"You need a string to build; one of [\\\"\" + (this.buildTypes.join('\\\", \\\"')) + \"\\\"]\", \"build\", \"toBuild\", \"object\", toBuild);\n    }\n    toBuild = this.buildables[toBuild];\n    this.actions.build.cooldown = toBuild.buildCooldown;\n    this.setAction('build');\n    this.toBuild = toBuild;\n    this.targetPos = null;\n    return this.toBuild;\n  };\n\n  Builds.prototype.buildXY = function(toBuild, x, y) {\n    if (!_.isNumber(x)) {\n      throw new ArgumentError(\"Build the \" + toBuild + \" at an (x, y) coordinate.\", \"buildXY\", \"x\", \"number\", x);\n    }\n    if (!_.isNumber(y)) {\n      throw new ArgumentError(\"Build the \" + toBuild + \" at an (x, y) coordinate.\", \"buildXY\", \"y\", \"number\", y);\n    }\n    if (x == null) {\n      return;\n    }\n    this.build(toBuild);\n    this.intent = \"build\";\n    this.setTargetPos(new Vector(x, y), 'buildXY');\n    if (this.actions.move && this.distance(this.targetPos, true) > this.buildRange) {\n      this.setAction('move');\n    } else {\n      this.setAction('build');\n    }\n    return typeof this.block === \"function\" ? this.block() : void 0;\n  };\n\n  Builds.prototype.summon = function(toBuild) {\n    var angle, placementAttempts, result, targetPos;\n    if (this.aiSystem == null) {\n      this.aiSystem = this.world.getSystem(\"AI\");\n    }\n    angle = this.world.rand.randf() * 2 * Math.PI;\n    placementAttempts = 8;\n    while (placementAttempts--) {\n      targetPos = new Vector(this.pos.x + 3 * Math.cos(angle), this.pos.y + 3 * Math.sin(angle));\n      if (this.aiSystem.isPathClear(this.pos, targetPos, this, true)) {\n        break;\n      }\n      angle += Math.PI / 4;\n    }\n    result = this.buildXY(toBuild, targetPos.x, targetPos.y);\n    this.toSummon = this.toBuild;\n    if (this.targetPos) {\n      if (this.pos.z > this.depth / 2) {\n        this.targetPos.z += this.pos.z - this.depth / 2;\n      }\n    }\n    return result;\n  };\n\n  Builds.prototype.costOf = function(toBuild) {\n    if (typeof toBuild === 'undefined') {\n      throw new ArgumentError(\"Check the cost of what?.\", \"costOf\", \"toBuild\", \"object\", toBuild);\n    }\n    if (__indexOf.call(this.unitNames, toBuild) < 0) {\n      throw new ArgumentError(\"You need a string to check the cost of; one of [\\\"\" + (this.buildTypes.join('\\\", \\\"')) + \"\\\"]\", \"costOf\", \"toBuild\", \"object\", toBuild);\n    }\n    return this.buildables[toBuild].goldCost || 0;\n  };\n\n  Builds.prototype.repair = function(target) {\n    return console.log('todo: implement Builds repair, or make a new Component');\n  };\n\n  Builds.prototype.update = function() {\n    if (!(this.intent === 'build' && this.toBuild)) {\n      return;\n    }\n    if (this.toBuild.goldCost && this.inventorySystem.goldForTeam(this.team) < this.toBuild.goldCost) {\n      return;\n    }\n    if (this.action === 'build' && this.act()) {\n      return this.performBuild();\n    } else {\n      if (this.action === 'move' && this.distance(this.targetPos, true) <= this.buildRange) {\n        return this.setAction('build');\n      }\n    }\n  };\n\n  Builds.prototype.performBuild = function(poolName) {\n    var buildPos, components, nextID, spriteName, thang, toBuildThang, toBuildThangType, _ref, _ref1;\n    if (poolName == null) {\n      poolName = void 0;\n    }\n    if (this.toBuild.thangTemplate && (toBuildThang = this.world.getThangByID(this.toBuild.thangTemplate))) {\n      spriteName = toBuildThang.spriteName;\n      components = _.cloneDeep(toBuildThang.components);\n    } else if (toBuildThangType = this.toBuild.thangType) {\n      spriteName = (_ref = _.find(this.world.thangTypes, {\n        original: toBuildThangType\n      })) != null ? _ref.name : void 0;\n      components = _.cloneDeep(this.componentsForThangType(toBuildThangType));\n    }\n    if (!(spriteName && components)) {\n      console.log(this.id, 'Builds problem: couldn\\'t find thang to build for thangTemplate', this.toBuild.thangTemplate, 'or thangType', this.toBuild.thangType);\n      return;\n    }\n    this.inventorySystem.subtractGoldForTeam(this.team, this.toBuild.goldCost);\n    nextID = (_ref1 = this.toBuild.ids) != null ? _ref1.shift() : void 0;\n    thang = this.spawn(spriteName, components, nextID, poolName);\n    buildPos = this.targetPos || this.pos;\n    if (this.targetPos || this.toBuild.offset) {\n      if (this.toBuild.offset) {\n        buildPos = Vector.add(buildPos, this.toBuild.offset, true);\n      } else {\n        buildPos = buildPos.copy();\n        buildPos.z = thang.pos.z;\n      }\n      thang.pos = buildPos;\n      if (thang.move) {\n        thang.hasMoved = true;\n      } else {\n        thang.addTrackedProperties(['pos', 'Vector']);\n        thang.keepTrackedProperty('pos');\n      }\n    }\n    thang.setExists(true);\n    thang.buildIndex = this.built.length;\n    thang.builtBy = this;\n    if (this.toSummon === this.toBuild) {\n      thang.commander = this;\n    }\n    if (typeof thang.addCurrentEvent === \"function\") {\n      thang.addCurrentEvent('built');\n    }\n    this.built.push(thang);\n    this.keepTrackedProperty('built');\n    thang.addTrackedProperties(['buildIndex', 'number']);\n    thang.keepTrackedProperty('buildIndex');\n    if (typeof this.brake === \"function\") {\n      this.brake();\n    }\n    if (typeof this.announceAction === \"function\") {\n      this.announceAction(\"build \\\"\" + this.toBuild.type + \"\\\"\");\n    }\n    this.toBuild = null;\n    this.toSummon = null;\n    this.targetPos = null;\n    if (this.plan) {\n      this.justBuilt = thang;\n    }\n    this.actionActivating = true;\n    if (typeof this.unblock === \"function\") {\n      this.unblock();\n    }\n    this.intent = void 0;\n    return thang;\n  };\n\n  return Builds;\n\n})(Component);\n",
	"creator": "579a8e5957c475240034f5bb",
	"original": "52d9a6773cf02dcf26000dc4",
	"__v": 0,
	"commitMessage": "Diplomat submission for lang tr: 5 change(s).",
	"parent": "57647ecf8514f82f00540429",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"patches": [],
	"codeLanguage": "coffeescript",
	"official": false,
	"configSchema": {
		"properties": {
			"buildRange": {
				"type": "number",
				"format": "meters"
			},
			"buildables": {
				"type": "object",
				"additionalProperties": {
					"type": "object",
					"additionalProperties": false,
					"properties": {
						"thangTemplate": {
							"type": "string",
							"description": "The ID of a Thang to use as a template for what this can build.",
							"format": "thang"
						},
						"buildCooldown": {
							"type": "number",
							"description": "Time in seconds to build this unit"
						},
						"goldCost": {
							"type": "integer",
							"description": "How much gold this Thang costs to build.",
							"minimum": 0
						},
						"ids": {
							"type": "array",
							"description": "IDs to use, in order, for the built Thangs.",
							"items": {
								"type": "string"
							},
							"uniqueItems": true
						},
						"offset": {
							"type": "object",
							"description": "The offset by which the thang is created in relation with the Builder. Should spawn at template location if not specified.",
							"properties": {
								"x": {
									"type": "number",
									"additionalProperties": false
								},
								"y": {
									"type": "number",
									"additionalProperties": false
								},
								"z": {
									"type": "number",
									"additionalProperties": false
								}
							},
							"required": [
								"x",
								"y",
								"z"
							]
						},
						"thangType": {
							"type": "string",
							"format": "thang-type",
							"description": "The ThangType to use as a template for what this can build."
						}
					},
					"required": [
						"thangType",
						"buildCooldown"
					]
				}
			}
		},
		"id": "__base__",
		"additionalProperties": false,
		"type": "object",
		"default": {
			"buildRange": 5
		}
	},
	"dependencies": [
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		},
		{
			"original": "524cbdc03ea855e0ab0000bb",
			"majorVersion": 0
		},
		{
			"original": "524b7b7c7fc0f6d519000011",
			"majorVersion": 0
		}
	],
	"description": "This Component makes the Thang build other Thangs.",
	"system": "existence",
	"searchStrings": "builds b bu bui buil",
	"i18nCoverage": [
		"-",
		"tr",
		"es-ES",
		"fr",
		"ru",
		"zh-HANS",
		"sv",
		"de-DE",
		"hu",
		"zh-HANT",
		"pt-BR",
		"sk",
		"nl-NL",
		"fi",
		"pl",
		"cs",
		"it",
		"ja",
		"uk",
		"da",
		"he",
		"ro",
		"id",
		"lt",
		"el",
		"bg",
		"ca",
		"es-419",
		"sr"
	],
	"index": true,
	"created": "2016-07-30T13:28:49.898Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 156,
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