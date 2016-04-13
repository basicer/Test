{
	"_id": "570e0abdd32e512400ab4d78",
	"slug": "physical",
	"creator": "570e01fe53f0292e00c26e4f",
	"name": "Physical",
	"original": "524b75ad7fc0f6d519000001",
	"__v": 0,
	"js": "var ArgumentError, Ellipse, Physical, Rectangle, Vector,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nVector = require('lib/world/vector');\n\nRectangle = require('lib/world/rectangle');\n\nEllipse = require('lib/world/ellipse');\n\nArgumentError = require('lib/world/errors').ArgumentError;\n\nPhysical = (function(_super) {\n  __extends(Physical, _super);\n\n  Physical.className = 'Physical';\n\n  Physical.prototype.hasRotated = false;\n\n  function Physical(config) {\n    var _ref, _ref1, _ref2, _ref3;\n    Physical.__super__.constructor.call(this, config);\n    this.depth || (this.depth = this._calculateDepth());\n    if (!((_ref = this.pos) != null ? _ref.isVector : void 0)) {\n      this.pos = new Vector(((_ref1 = this.pos) != null ? _ref1.x : void 0) || 0, ((_ref2 = this.pos) != null ? _ref2.y : void 0) || 0, ((_ref3 = this.pos) != null ? _ref3.z : void 0) || this.depth / 2);\n    }\n    this.volume = this._calculateVolume();\n    this.dragArea = this._calculateDragArea();\n  }\n\n  Physical.prototype.attach = function(thang) {\n    Physical.__super__.attach.call(this, thang);\n    return thang.addTrackedProperties(['rotation', 'number']);\n  };\n\n  Physical.prototype.rectangle = function() {\n    return new Rectangle(this.pos.x, this.pos.y, this.width, this.height, this.rotation);\n  };\n\n  Physical.prototype.ellipse = function() {\n    return new Ellipse(this.pos.x, this.pos.y, this.width, this.height, this.rotation);\n  };\n\n  Physical.prototype.getShape = function() {\n    if (this.shape === 'ellipsoid' || this.shape === 'disc') {\n      return this.ellipse();\n    } else {\n      return this.rectangle();\n    }\n  };\n\n  Physical.prototype.isGrounded = function() {\n    return this.pos.z <= this.depth / 2;\n  };\n\n  Physical.prototype.isAirborne = function() {\n    return this.pos.z > this.depth / 2;\n  };\n\n  Physical.prototype.contains = function(thang) {\n    return this.getShape().containsPoint(thang.pos);\n  };\n\n  Physical.prototype.distance = function(thang, fromEdges) {\n    if (fromEdges == null) {\n      fromEdges = false;\n    }\n    if (!(thang && (thang.isVector || thang.isThang || (!_.isNaN(thang.x + thang.y))))) {\n      console.log('distance from', this.id, 'to', thang != null ? thang.id : void 0, 'did not work: isVector', thang != null ? thang.isVector : void 0, 'isThang', thang != null ? thang.isThang : void 0, 'x', thang != null ? thang.x : void 0, 'y', thang != null ? thang.y : void 0, 'keys', _.keys(thang));\n      throw new ArgumentError(\"Find the distance to a target unit.\", \"distance\", \"target\", \"object\", thang);\n    }\n    return Math.sqrt(this.distanceSquared(thang, fromEdges));\n  };\n\n  Physical.prototype.distanceSquared = function(thang, fromEdges) {\n    var otherShape, shape;\n    if (fromEdges == null) {\n      fromEdges = false;\n    }\n    if (fromEdges) {\n      shape = this.getShape();\n      if (!thang.pos) {\n        return shape.distanceSquaredToPoint(thang);\n      }\n      otherShape = thang.getShape();\n      return shape.distanceSquaredToShape(otherShape);\n    } else {\n      if (thang.pos) {\n        return this.pos.distanceSquared(thang.pos);\n      }\n      return this.pos.distanceSquared(thang);\n    }\n  };\n\n  Physical.prototype.distanceTo = function(thang) {\n    var targetThang;\n    if (thang && _.isString(thang)) {\n      thang = this.world.getThangByID(thang);\n    } else if (thang && !thang.isThang && _.isString(thang.id) && (targetThang = this.world.getThangByID(thang.id))) {\n      thang = targetThang;\n    }\n    if (thang == null) {\n      throw new ArgumentError(\"distanceTo target is null. Does the target exist? (Use if?)\", \"distanceTo\", \"target\", \"object\", thang);\n    }\n    if (!(thang.isVector || thang.isThang || (!_.isNaN(thang.x + thang.y)))) {\n      throw new ArgumentError(\"Find the distance to a target unit.\", \"distanceTo\", \"target\", \"object\", thang);\n    }\n    return this.distance(thang);\n  };\n\n  Physical.prototype.distanceToValidateReturn = function(ret) {\n    if (!_.isNumber(ret)) {\n      throw new ArgumentError('', \"distanceTo\", \"return\", \"number\", ret);\n    }\n  };\n\n  Physical.prototype.getNearest = function(thangs) {\n    var distanceSquared, nearestDistanceSquared, nearestThang, thang, _i, _len;\n    nearestThang = null;\n    nearestDistanceSquared = Number.MAX_VALUE;\n    for (_i = 0, _len = thangs.length; _i < _len; _i++) {\n      thang = thangs[_i];\n      distanceSquared = this.distanceSquared(thang);\n      if (distanceSquared < nearestDistanceSquared) {\n        nearestThang = thang;\n        nearestDistanceSquared = distanceSquared;\n      }\n    }\n    return nearestThang;\n  };\n\n  Physical.prototype.findNearest = function(thangs) {\n    if (!thangs) {\n      throw new ArgumentError('Pass an array of units to findNearest.', \"findNearest\", \"units\", \"array\", arguments[0]);\n    }\n    return this.getNearest(thangs);\n  };\n\n  Physical.prototype.intersects = function(thang, t1) {\n    var s1, s2, t2, _ref, _ref1;\n    if (t1 == null) {\n      t1 = null;\n    }\n    if (t1 == null) {\n      t1 = this;\n    }\n    t2 = thang;\n    if (t1.contains(t2)) {\n      return true;\n    }\n    s1 = (_ref = typeof t1.getShape === \"function\" ? t1.getShape() : void 0) != null ? _ref : t1;\n    s2 = (_ref1 = typeof t2.getShape === \"function\" ? t2.getShape() : void 0) != null ? _ref1 : s2;\n    return s1.intersectsShape(s2);\n  };\n\n  Physical.prototype._calculateDepth = function() {\n    switch (this.shape) {\n      case \"box\":\n      case \"ellipsoid\":\n        return this.height;\n      case \"sheet\":\n      case \"disc\":\n        return this.height / 20;\n    }\n  };\n\n  Physical.prototype._calculateVolume = function() {\n    switch (this.shape) {\n      case \"box\":\n      case \"sheet\":\n        return this.width * this.height * this.depth;\n      case \"ellipsoid\":\n      case \"disc\":\n        return 4 / 3 * Math.PI * this.width * this.height * this.depth;\n    }\n  };\n\n  Physical.prototype._calculateDragArea = function() {\n    switch (this.shape) {\n      case \"box\":\n      case \"sheet\":\n        return this.height * this.depth;\n      case \"ellipsoid\":\n      case \"disc\":\n        return Math.PI / 4 * this.height * this.depth;\n    }\n  };\n\n  return Physical;\n\n})(Component);\n",
	"commitMessage": "Diplomat submission for lang sr: 1 change(s).",
	"parent": "56fa946372a11d3600fb72f5",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"patches": [],
	"official": false,
	"configSchema": {
		"default": {
			"pos": {
				"x": 0,
				"y": 0,
				"z": 0.5
			},
			"width": 1,
			"height": 1,
			"shape": "ellipsoid",
			"depth": 1,
			"rotation": "0"
		},
		"properties": {
			"pos": {
				"type": "object",
				"description": "An {x, y} position in meters from left and bottom edges of the map.",
				"required": [
					"x",
					"y"
				],
				"format": "point3d",
				"properties": {
					"x": {
						"type": "number",
						"default": 0
					},
					"y": {
						"type": "number",
						"default": 0
					},
					"z": {
						"type": "number",
						"default": 0
					}
				},
				"additionalProperties": false,
				"default": {
					"x": 0,
					"y": 0,
					"z": 0
				}
			},
			"width": {
				"type": "number",
				"description": "How wide (x distance) this Thang is in meters.",
				"minimum": 0,
				"exclusiveMinimum": true,
				"default": 1,
				"format": "meters"
			},
			"height": {
				"type": "number",
				"description": "How tall (y distance) this Thang is in meters.",
				"minimum": 0,
				"exclusiveMinimum": true,
				"default": 1,
				"format": "meters"
			},
			"depth": {
				"description": "How tall (z distance) this Thang is in meters.",
				"type": "number",
				"minimum": 0,
				"exclusiveMinimum": true,
				"format": "meters",
				"default": 1
			},
			"rotation": {
				"description": "Rotation in radians (0 = facing right, PI/2 = facing up).",
				"type": "number",
				"default": 0,
				"format": "radians"
			},
			"shape": {
				"type": "string",
				"description": "A physical shape to use for physics and size calculations.",
				"default": "box",
				"enum": [
					"box",
					"sheet",
					"ellipsoid",
					"disc"
				]
			}
		},
		"id": "__base__",
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [],
	"description": "This Thang has physical presence (position, size, shape).",
	"system": "physics",
	"searchStrings": "physical p ph phy phys physi physic",
	"i18nCoverage": [
		"-",
		"tr",
		"ru",
		"gl",
		"fr",
		"nb",
		"de-DE",
		"es-ES",
		"pt-BR",
		"zh-HANS",
		"sk",
		"es-419",
		"it",
		"uk",
		"sv",
		"pl",
		"hu",
		"lt",
		"zh-HANT",
		"nl-NL",
		"el",
		"da"
	],
	"index": true,
	"created": "2016-04-13T09:00:45.648Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 115,
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