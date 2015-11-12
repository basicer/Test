{
	"_id": "5644c0af457ffaae3e431fa0",
	"searchStrings": "grows flowers g gr gro grow grows growsf growsfl growsflo growsflow growsflowe",
	"index": true,
	"slug": "growsflowers",
	"name": "GrowsFlowers",
	"js": "var ArgumentError, GrowsFlowers, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };\n\nArgumentError = require('lib/world/errors').ArgumentError;\n\nGrowsFlowers = (function(_super) {\n  __extends(GrowsFlowers, _super);\n\n  function GrowsFlowers() {\n    _ref = GrowsFlowers.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  GrowsFlowers.className = 'GrowsFlowers';\n\n  GrowsFlowers.prototype.attach = function(thang) {\n    var flowerType, _i, _len, _ref1, _ref2, _ref3;\n    GrowsFlowers.__super__.attach.call(this, thang);\n    thang.lastFlowerTime = -1;\n    thang.flowerDistance = this.flowerDistance;\n    thang.flowerCooldown = this.flowerCooldown;\n    thang.doBuildFlowers = true;\n    thang.growFlowerColor = \"random\";\n    thang.flowerColorNames = [\"pink\", \"red\", \"blue\", \"purple\", \"yellow\", \"white\", \"random\"];\n    thang.flowerTypeMap = {\n      'Flower 1': '54e951c8f54ef5794f354ed1',\n      'Flower 2': '54e9525ff54ef5794f354ed5',\n      'Flower 3': '54e95293f54ef5794f354ed9',\n      'Flower 4': '54e952b7f54ef5794f354edd',\n      'Flower 5': '54e952daf54ef5794f354ee1',\n      'Flower 6': '54e95308f54ef5794f354ee5',\n      'Flower 7': '54e9532ff54ef5794f354ee9',\n      'Flower 8': '54e9534ef54ef5794f354eed'\n    };\n    thang.colorBuildTypes = {\n      \"pink\": [\"Flower 1\"],\n      \"red\": [\"Flower 2\", \"Flower 5\"],\n      \"blue\": [\"Flower 3\", \"Flower 8\"],\n      \"purple\": [\"Flower 4\"],\n      \"yellow\": [\"Flower 6\"],\n      \"white\": [\"Flower 7\"],\n      \"random\": [\"Flower 1\", \"Flower 2\", \"Flower 3\", \"Flower 4\", \"Flower 5\", \"Flower 6\", \"Flower 7\", \"Flower 8\"]\n    };\n    thang.requiredThangTypes = ((_ref2 = thang.requiredThangTypes) != null ? _ref2 : []).concat((_ref1 = this.requiredThangTypes) != null ? _ref1 : []);\n    _ref3 = thang.requiredThangTypes;\n    for (_i = 0, _len = _ref3.length; _i < _len; _i++) {\n      flowerType = _ref3[_i];\n      thang.componentsForThangType(flowerType);\n    }\n    return delete this.requiredThangTypes;\n  };\n\n  GrowsFlowers.prototype.update = function() {\n    if (!this.doBuildFlowers) {\n      return;\n    }\n    if (this.lastFlowerPos == null) {\n      this.lastFlowerPos = this.pos.copy();\n    }\n    if (!(this.world.age > this.lastFlowerTime + this.flowerCooldown)) {\n      return;\n    }\n    if (this.distance(this.lastFlowerPos) > this.flowerDistance) {\n      return this.buildFlower();\n    }\n  };\n\n  GrowsFlowers.prototype.buildFlower = function() {\n    var buildType, buildTypes, flower, flowerComponents, flowerSpriteName, flowerZ, rand, _ref1;\n    buildTypes = this.colorBuildTypes[this.growFlowerColor];\n    rand = this.world.rand.rand(buildTypes.length);\n    buildType = buildTypes[rand];\n    _ref1 = this.configureFlower(buildType), flowerSpriteName = _ref1.flowerSpriteName, flowerComponents = _ref1.flowerComponents;\n    if (!flowerComponents) {\n      throw new ArgumentError(\"There was a problem loading the flower Thang Components for \" + buildType + \".\");\n    }\n    flower = this.spawn(flowerSpriteName, flowerComponents);\n    flowerZ = flower.pos.z;\n    flower.pos = this.pos.copy();\n    flower.pos.z = flowerZ;\n    flower.addTrackedProperties(['pos', 'Vector']);\n    flower.keepTrackedProperty('pos');\n    this.lastFlowerTime = this.world.age;\n    return this.lastFlowerPos = this.pos.copy();\n  };\n\n  GrowsFlowers.prototype.toggleFlowers = function(grow) {\n    if (!_.isBoolean(grow) && typeof grow !== 'undefined') {\n      throw new ArgumentError(\"toggleFlowers argument should be empty or boolean.\", \"toggleFlowers\", \"grow\", \"boolean\", grow);\n    }\n    if (typeof grow === 'undefined') {\n      return this.doBuildFlowers = !this.doBuildFlowers;\n    } else {\n      return this.doBuildFlowers = grow;\n    }\n  };\n\n  GrowsFlowers.prototype.startFlowers = function() {\n    return this.toggleFlowers(true);\n  };\n\n  GrowsFlowers.prototype.stopFlowers = function() {\n    return this.toggleFlowers(false);\n  };\n\n  GrowsFlowers.prototype.setFlowerColor = function(color) {\n    if (__indexOf.call(this.flowerColorNames, color) < 0) {\n      throw new ArgumentError(\"Requires a color; one of [\\\"\" + (this.flowerColorNames.join('\\\", \\\"')) + \"\\\"]\", \"flowerColor\", \"color\", \"string\", color);\n    }\n    return this.growFlowerColor = color;\n  };\n\n  GrowsFlowers.prototype.configureFlower = function(flowerThangType) {\n    var cached, flowerComponents, flowerSpriteName, _ref1, _ref2;\n    if (!flowerThangType) {\n      return console.log(\"What flower type?\");\n    }\n    if (this.flowerComponentsCache == null) {\n      this.flowerComponentsCache = {};\n    }\n    if (cached = this.flowerComponentsCache[flowerThangType]) {\n      return cached;\n    }\n    flowerComponents = _.cloneDeep(this.componentsForThangType(this.flowerTypeMap[flowerThangType]));\n    flowerSpriteName = (_ref1 = (_ref2 = _.find(this.world.thangTypes, {\n      original: flowerThangType\n    })) != null ? _ref2.name : void 0) != null ? _ref1 : flowerThangType;\n    return this.flowerComponentsCache[flowerThangType] = {\n      flowerComponents: flowerComponents,\n      flowerSpriteName: flowerSpriteName\n    };\n  };\n\n  return GrowsFlowers;\n\n})(Component);\n",
	"system": "existence",
	"creator": "512ef4805a67a8c507000001",
	"original": "552322ea0676ecb7d5c8931d",
	"watchers": [
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"description": "This Component makes the Thang grow flowers behind it when it moves.",
	"dependencies": [
		{
			"original": "524cbdc03ea855e0ab0000bb",
			"majorVersion": 0
		}
	],
	"commitMessage": "Add some snippets/argument examples for other languages.",
	"parent": "560531f37a11f08905701203",
	"configSchema": {
		"properties": {
			"flowerCooldown": {
				"type": "number",
				"description": "Minimum time between flowers.",
				"default": 0
			},
			"flowerDistance": {
				"type": "number",
				"description": "Minimum distance between flowers.",
				"default": 0.2,
				"additionalProperties": false
			},
			"requiredThangTypes": {
				"type": "array",
				"description": "The flower types this Thang grows.",
				"items": {
					"type": "string",
					"format": "thang-type"
				}
			}
		},
		"default": {
			"flowerCooldown": 0,
			"flowerDistance": 0.2,
			"requiredThangTypes": [
				"54e951c8f54ef5794f354ed1",
				"54e9525ff54ef5794f354ed5",
				"54e95293f54ef5794f354ed9",
				"54e952b7f54ef5794f354edd",
				"54e952daf54ef5794f354ee1",
				"54e95308f54ef5794f354ee5",
				"54e9532ff54ef5794f354ee9",
				"54e9534ef54ef5794f354eed"
			]
		}
	},
	"created": "2015-11-12T16:39:11.860Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 18,
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