{
	"_id": "55afda03c1add015471b9a49",
	"searchStrings": "rains r ra rai",
	"index": true,
	"slug": "rains",
	"name": "Rains",
	"js": "var Rains, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nRains = (function(_super) {\n  __extends(Rains, _super);\n\n  function Rains() {\n    _ref = Rains.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Rains.className = 'Rains';\n\n  Rains.prototype.chooseAction = function() {\n    this.brake = function() {};\n    if (!this.rainCount || this.rainCount > this.built.length) {\n      return this.summon(this.buildTypes[this.world.rand.rand(this.buildTypes.length)]);\n    }\n  };\n\n  Rains.prototype.update = function() {\n    var clearForward, clearSideways, couldMove, d, forward, rain, sideways, speed, v, _i, _len, _ref1;\n    _ref1 = this.built;\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      rain = _ref1[_i];\n      if (rain.exists) {\n        if (rain.raining && rain.pos.z > rain.depth / 2) {\n          if (this.world.getSystem(\"Movement\").hasGravitationalAnomalies) {\n            rain.velocity.z -= this.world.getSystem(\"Movement\").gravityAt(rain.pos) * this.world.dt;\n          } else {\n            rain.velocity.z -= 9.8 * this.world.dt;\n          }\n          rain.pos.add(Vector.multiply(rain.velocity, this.world.dt));\n          rain.pos.z = Math.max(0, rain.depth / 2);\n          if (rain.wasCollectable && rain.pos.z < rain.depth / 2 + 1) {\n            rain.isCollectable = true;\n            rain.wasCollectable = false;\n            rain.updateRegistration();\n          }\n        } else {\n          couldMove = rain.velocity != null;\n          rain.velocity = new Vector(this.world.rand.randfRange(0, 5), this.world.rand.randfRange(0, 5), this.world.rand.randfRange(2, 4));\n          if (!couldMove) {\n            rain.addTrackedProperties(['pos', 'Vector']);\n            rain.keepTrackedProperty('pos');\n            rain.raining = true;\n            if (rain.isCollectable) {\n              rain.wasCollectable = true;\n              rain.isCollectable = false;\n              rain.updateRegistration();\n            }\n          }\n        }\n      }\n    }\n    if (this.bouncesWhileRaining && (!this.rainCount || this.built.length < this.rainCount)) {\n      if (this.aiSystem == null) {\n        this.aiSystem = this.world.getSystem(\"AI\");\n      }\n      v = this.velocity.copy();\n      speed = v.magnitude();\n      d = speed * 2 * this.world.dt;\n      forward = new Vector(d, 0);\n      sideways = new Vector(0, d);\n      if (v.x < 0) {\n        forward.multiply(-1);\n      }\n      if (v.y < 0) {\n        sideways.multiply(-1);\n      }\n      clearForward = this.aiSystem.isPathClear(this.pos, this.pos.copy().add(forward), this, true);\n      clearSideways = this.aiSystem.isPathClear(this.pos, this.pos.copy().add(sideways), this, true);\n      if (!clearForward) {\n        this.velocity.x *= -1;\n      }\n      if (!clearSideways) {\n        return this.velocity.y *= -1;\n      }\n    }\n  };\n\n  return Rains;\n\n})(Component);\n",
	"system": "existence",
	"creator": "512ef4805a67a8c507000001",
	"original": "550b4d568a7d3c197a824d66",
	"watchers": [
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"description": "This Component makes the Thang rain down other Thangs (like a Gold Cloud raining Gold Coins).",
	"dependencies": [
		{
			"original": "52d9a6773cf02dcf26000dc4",
			"majorVersion": 0
		}
	],
	"commitMessage": "Fixed gravity checks",
	"parent": "5539656664a1488df00d94c1",
	"configSchema": {
		"properties": {
			"rainCount": {
				"type": "integer",
				"description": "Number of Thangs to rain, if set."
			},
			"bouncesWhileRaining": {
				"type": "boolean",
				"description": "Whether this Thang bounces off of obstacles while raining (so as to keep raining in bounds)."
			}
		},
		"default": {
			"rainCount": 0,
			"bouncesWhileRaining": true
		}
	},
	"created": "2015-07-22T17:59:31.093Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 6,
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