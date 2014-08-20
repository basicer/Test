{
	"_id": "53f431e07e090d0000fc155a",
	"slug": "flocking",
	"name": "Flocking",
	"codeLanguage": "coffeescript",
	"js": "var Flocking, Vector, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nVector = require('lib/world/vector');\n\nFlocking = (function(_super) {\n  __extends(Flocking, _super);\n\n  function Flocking() {\n    _ref = Flocking.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Flocking.className = 'Flocking';\n\n  Flocking.prototype.flocks = true;\n\n  Flocking.prototype.chooseAction = function() {\n    var targ, velocityVec;\n    velocityVec = this.centerOfMass().add(this.dontBump().add(this.avgVelocity().add(this.boundaries().add(this.avoidOutsiders().add(this.desire()))))).normalize().multiply(this.maxSpeed);\n    targ = this.pos.copy();\n    this.setTargetPos(targ.add(velocityVec));\n    return this.setAction('move');\n  };\n\n  Flocking.prototype.centerOfMass = function() {\n    var allFlockers, center, thang, _i, _len;\n    center = new Vector(0, 0);\n    allFlockers = (function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.allAllies;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        thang = _ref1[_i];\n        if (thang.flocks) {\n          _results.push(thang);\n        }\n      }\n      return _results;\n    }).call(this);\n    for (_i = 0, _len = allFlockers.length; _i < _len; _i++) {\n      thang = allFlockers[_i];\n      center.add(thang.pos);\n    }\n    center.divide(allFlockers.length);\n    return center.subtract(this.pos).multiply(this.centerOfMassWeight);\n  };\n\n  Flocking.prototype.dontBump = function() {\n    var allFlockers, bump, thang, _i, _len;\n    bump = new Vector(0, 0);\n    allFlockers = (function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.allAllies;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        thang = _ref1[_i];\n        if (thang.flocks) {\n          _results.push(thang);\n        }\n      }\n      return _results;\n    }).call(this);\n    for (_i = 0, _len = allFlockers.length; _i < _len; _i++) {\n      thang = allFlockers[_i];\n      if (thang !== this && this.distanceSquared(thang) < 4 * Math.max(this.width, this.height)) {\n        bump.add(this.pos.copy().subtract(thang.pos).normalize());\n      }\n    }\n    return bump;\n  };\n\n  Flocking.prototype.avgVelocity = function() {\n    var allFlockers, flockVel, thang, _i, _len;\n    flockVel = new Vector(0, 0);\n    allFlockers = (function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.allAllies;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        thang = _ref1[_i];\n        if (thang.flocks) {\n          _results.push(thang);\n        }\n      }\n      return _results;\n    }).call(this);\n    for (_i = 0, _len = allFlockers.length; _i < _len; _i++) {\n      thang = allFlockers[_i];\n      flockVel.add(thang.velocity);\n    }\n    flockVel.divide(this.allAllies.length);\n    return flockVel.multiply(this.commonHeadingWeight);\n  };\n\n  Flocking.prototype.avoidOutsiders = function() {\n    var runaway, thang, _i, _len, _ref1;\n    runaway = new Vector(0, 0);\n    _ref1 = this.allianceSystem.allAlliedThangs;\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      thang = _ref1[_i];\n      if (thang !== this && thang.superteam !== this.superteam && this.distance(thang) < this.avoidDistance) {\n        runaway.add(this.pos.copy().subtract(thang.pos).normalize().multiply((this.avoidDistance - this.distance(thang)) / this.avoidDistance));\n      }\n    }\n    return runaway;\n  };\n\n  Flocking.prototype.boundaries = function() {\n    var b;\n    b = new Vector(0, 0);\n    if (this.pos.x < this.flockBounds.xMin) {\n      b.x = (this.flockBounds.xMin - this.pos.x) / 2;\n    }\n    if (this.pos.x > this.flockBounds.xMax) {\n      b.x = (this.flockBounds.xMax - this.pos.x) / 2;\n    }\n    if (this.pos.y < this.flockBounds.yMin) {\n      b.y = (this.flockBounds.yMin - this.pos.y) / 2;\n    }\n    if (this.pos.y > this.flockBounds.yMax) {\n      b.y = (this.flockBounds.yMax - this.pos.y) / 2;\n    }\n    return b;\n  };\n\n  Flocking.prototype.desire = function() {\n    var d, dp, _i, _len, _ref1, _ref2;\n    d = new Vector(0, 0);\n    _ref2 = (_ref1 = this.desirePoints) != null ? _ref1 : [];\n    for (_i = 0, _len = _ref2.length; _i < _len; _i++) {\n      dp = _ref2[_i];\n      if (this.pos.distance(dp) < this.desireDistance) {\n        d.add(new Vector(dp.x, dp.y).subtract(this.pos).normalize().multiply((this.desireDistance - this.pos.distance(dp)) / (30 * this.desireDistance)));\n      }\n    }\n    return d;\n  };\n\n  return Flocking;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "53c02e9c65fb663505187e7a",
	"watchers": [
		"5310e4e562b398ee3ca23325"
	],
	"__v": 0,
	"commitMessage": "Fixes for flocking only flocking flockers",
	"parent": "53f430f59ca49ad96d60b9c2",
	"index": true,
	"official": false,
	"configSchema": {
		"properties": {
			"flockBounds": {
				"type": "object",
				"additionalProperties": false,
				"required": [
					"xMax",
					"xMin",
					"yMax",
					"yMin"
				],
				"properties": {
					"xMax": {
						"type": "number",
						"additionalProperties": false,
						"default": 100
					},
					"xMin": {
						"type": "number",
						"additionalProperties": false,
						"default": 0
					},
					"yMax": {
						"type": "number",
						"additionalProperties": false,
						"default": 100
					},
					"yMin": {
						"type": "number",
						"additionalProperties": false,
						"default": 0
					}
				}
			},
			"centerOfMassWeight": {
				"type": "number",
				"additionalProperties": false,
				"default": 0.05,
				"description": "How much weight is given to steering towards the flock's center of mass"
			},
			"commonHeadingWeight": {
				"type": "number",
				"additionalProperties": false,
				"default": 0.125,
				"description": "How much weight is given to steering to match average heading of flock"
			},
			"avoidDistance": {
				"type": "number",
				"additionalProperties": false,
				"default": 15,
				"description": "How far to stay away from outsiders"
			},
			"desirePoints": {
				"type": "array",
				"description": "Array of {x, y} points that the flock wants to go towards.",
				"items": {
					"type": "object",
					"additionalProperties": false,
					"description": "An {x, y} position in meters from the left and bottom edges of the map",
					"properties": {
						"x": {
							"type": "number"
						},
						"y": {
							"type": "number"
						}
					},
					"format": "point2d"
				}
			},
			"desireDistance": {
				"type": "number",
				"additionalProperties": false,
				"default": 30,
				"description": "Max distance a desire point can be and still attract the flock"
			}
		},
		"default": {
			"desirePoints": [],
			"flockBounds": {
				"xMax": 100,
				"xMin": 0,
				"yMax": 100,
				"yMin": 0
			},
			"centerOfMassWeight": 0.05,
			"commonHeadingWeight": 0.125,
			"avoidDistance": 15,
			"desireDistance": 30
		},
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b7b747fc0f6d519000010",
			"majorVersion": 0
		},
		{
			"original": "524b7b8c7fc0f6d519000013",
			"majorVersion": 0
		},
		{
			"original": "524b75ad7fc0f6d519000001",
			"majorVersion": 0
		},
		{
			"original": "524b7b7c7fc0f6d519000011",
			"majorVersion": 0
		},
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		}
	],
	"description": "This Thang can exhibit flocking behaviors",
	"system": "misc",
	"searchStrings": "flocking f fl flo floc flock flocki",
	"created": "2014-08-20T05:28:00.087Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 113,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "5310e4e562b398ee3ca23325"
		},
		{
			"access": "read",
			"target": "public"
		}
	]
}