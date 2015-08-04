{
	"_id": "55c134f2c87e47c60604f995",
	"searchStrings": "scampers s sc sca scam scamp scampe",
	"index": true,
	"slug": "scampers",
	"name": "Scampers",
	"js": "var Scampers, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nScampers = (function(_super) {\n  __extends(Scampers, _super);\n\n  function Scampers() {\n    _ref = Scampers.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Scampers.className = 'Scampers';\n\n  Scampers.prototype.chooseAction = function() {\n    if (this.world.age === 0) {\n      this.idleUntil = this.world.age + this.world.rand.randf() * 5;\n    }\n    if (this.targetPos && (this.velocity.magnitude() < 2 || (this.collisionCategory !== 'none' && this.distance(this.targetPos) < 2))) {\n      this.stopScampering();\n    }\n    if (this.targetPos) {\n      return;\n    }\n    if (this.idleUntil && this.world.age < this.idleUntil) {\n      return;\n    }\n    if (this.idleUntil) {\n      if (this.scamper()) {\n        return this.idleUntil = null;\n      }\n    } else {\n      this.stopScampering();\n      return this.idleUntil = this.world.age + this.world.rand.randf() * 10;\n    }\n  };\n\n  Scampers.prototype.scamper = function() {\n    var angle, distance, grid, maxDistance;\n    angle = this.world.rand.randf() * 2 * Math.PI;\n    if (this.aiSystem == null) {\n      this.aiSystem = this.world.getSystem(\"AI\");\n    }\n    grid = this.aiSystem.getNavGrid();\n    distance = 1;\n    maxDistance = 20 + this.world.rand.randf() * 20;\n    while (!(distance > maxDistance || grid.contents(this.pos.x + Math.cos(angle) * distance, this.pos.y + Math.sin(angle) * distance).length)) {\n      distance += 0.5;\n    }\n    if (distance > 1) {\n      this.move(new Vector(this.pos.x + Math.cos(angle) * distance, this.pos.y + Math.sin(angle) * distance));\n      return true;\n    }\n    return false;\n  };\n\n  Scampers.prototype.stopScampering = function() {\n    this.setTargetPos(null);\n    this.setAction('idle');\n    return typeof this.brake === \"function\" ? this.brake() : void 0;\n  };\n\n  return Scampers;\n\n})(Component);\n",
	"system": "ai",
	"creator": "512ef4805a67a8c507000001",
	"original": "55c124f3c87e47c60604f978",
	"watchers": [
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"description": "This Component makes the Thang alternate between idling and scampering in a random direction.",
	"dependencies": [
		{
			"original": "524b7b8c7fc0f6d519000013",
			"majorVersion": 0
		}
	],
	"commitMessage": "Scampers can now deal with scamperers who don't collide with walls, like bats.",
	"parent": "55c1308dc87e47c60604f981",
	"created": "2015-08-04T21:56:02.353Z",
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