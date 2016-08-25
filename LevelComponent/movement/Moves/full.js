{
	"_id": "57bf219147a9da4c00520b83",
	"slug": "moves",
	"creator": "54b1773a75e3055205e5a449",
	"name": "Moves",
	"original": "524b7b8c7fc0f6d519000013",
	"__v": 0,
	"js": "var AIR_DENSITY, ArgumentError, Moves, STANDARD_FRICTION, Vector, WATER_DENSITY, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\n_ref = require('lib/world/systems/movement'), STANDARD_FRICTION = _ref.STANDARD_FRICTION, AIR_DENSITY = _ref.AIR_DENSITY, WATER_DENSITY = _ref.WATER_DENSITY;\n\nVector = require('lib/world/vector');\n\nArgumentError = require('lib/world/errors').ArgumentError;\n\nMoves = (function(_super) {\n  __extends(Moves, _super);\n\n  Moves.className = 'Moves';\n\n  Moves.prototype.isMovable = true;\n\n  Moves.prototype.hasMoved = false;\n\n  function Moves(config) {\n    Moves.__super__.constructor.call(this, config);\n    this.pathRefreshCounter = 0;\n    this.moveThreshold = 0.1;\n    this._moveCooldown = this.cooldown;\n    delete this.cooldown;\n  }\n\n  Moves.prototype.attach = function(thang) {\n    var _ref1, _ref2, _ref3;\n    Moves.__super__.attach.call(this, thang);\n    thang.velocity = new Vector(((_ref1 = this.velocity) != null ? _ref1.x : void 0) || 0, ((_ref2 = this.velocity) != null ? _ref2.y : void 0) || 0, ((_ref3 = this.velocity) != null ? _ref3.z : void 0) || 0);\n    thang.addTrackedProperties([\"pos\", \"Vector\"], ['velocity', \"Vector\"]);\n    if (thang.acts && thang.maxAcceleration > 0) {\n      thang.addActions({\n        name: 'move',\n        cooldown: this._moveCooldown\n      });\n    }\n    return thang.aiSystem = thang.world.getSystem(\"AI\");\n  };\n\n  Moves.prototype.manageFrustration = function(dist) {\n    var recentDist, _ref1;\n    (this.recentDistances != null ? this.recentDistances : this.recentDistances = []).push(dist);\n    if (this.recentDistances.length === Math.round(this.world.frameRate)) {\n      recentDist = this.recentDistances.shift();\n      if (Math.abs(recentDist - dist) > 2) {\n        if (((_ref1 = this.currentlySaying) != null ? _ref1.message : void 0) === \"I can't get there.\") {\n          if (typeof this.say === \"function\") {\n            this.say(\"\");\n          }\n        }\n        return this.movingSince = this.world.age;\n      }\n    }\n  };\n\n  Moves.prototype.endMultiFrameMove = function() {\n    this.multiFrameMove = false;\n    if (typeof this.unblock === \"function\") {\n      this.unblock();\n    }\n    this.setTargetPos(null);\n    this.movingSince = null;\n    this.recentDistances = [];\n    return this.setAction('idle');\n  };\n\n  Moves.prototype.update = function() {\n    var dist, idleTime;\n    if (!(this.multiFrameMove && this.action === 'move')) {\n      return;\n    }\n    dist = this.distance(this.getTargetPos());\n    this.manageFrustration(dist);\n    idleTime = this.world.age - this.movingSince;\n    if (dist < this.moveThreshold) {\n      return this.endMultiFrameMove();\n    } else if (idleTime > 1.5 + 2) {\n      return this.endMultiFrameMove();\n    } else if (Math.abs(idleTime - 2) <= this.world.dt) {\n      return typeof this.sayWithoutBlocking === \"function\" ? this.sayWithoutBlocking(\"I can't get there.\") : void 0;\n    }\n  };\n\n  Moves.prototype.move = function(pos) {\n    if (pos == null) {\n      throw new ArgumentError(\"Target an {x: number, y: number} position.\", \"move\", \"pos\", \"object\", pos);\n    }\n    this.intent = void 0;\n    this.setTargetPos(pos, 'move');\n    this.setAction('move');\n    if (this.commander == null) {\n      return typeof this.block === \"function\" ? this.block() : void 0;\n    }\n  };\n\n  Moves.prototype.moveXY = function(x, y, z) {\n    var k, _i, _len, _ref1;\n    if ((x == null) || (y == null)) {\n      throw new ArgumentError(\"moveXY requires 2 numbers as arguments, x and y.\", \"moveXY\", \"_excess\", \"number\", x);\n    }\n    _ref1 = [[\"x\", x], [\"y\", y], [\"z\", z]];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      k = _ref1[_i];\n      if (!((_.isNumber(k[1]) && !_.isNaN(k[1]) && k[1] !== Infinity) || (k[0] === \"z\" && (k[1] == null)))) {\n        throw new ArgumentError(\"moveXY requires 2 numbers as arguments. \" + k[0] + \" is \" + k[1] + \" which is type \\'\" + (typeof k[1]) + \"\\', not \\'number\\'.\", \"moveXY\", k[0], \"number\", k[1], 2);\n      }\n    }\n    this.intent = void 0;\n    this.setTargetPos({\n      x: x,\n      y: y,\n      z: z\n    }, 'moveXY');\n    this.setAction('move');\n    this.movingSince = this.world.age;\n    this.multiFrameMove = true;\n    if (!((this.commander != null) && !this.actionsShouldBlock)) {\n      return typeof this.block === \"function\" ? this.block() : void 0;\n    }\n  };\n\n  Moves.prototype.follow = function(target) {\n    if (typeof target === 'undefined') {\n      throw new ArgumentError(\"\" + this.id + \" needs something to follow.\", \"follow\", \"target\", \"unit\", target);\n    }\n    this.setTarget(target, \"follow\");\n    return this.setAction('move');\n  };\n\n  Moves.prototype.locomote = function() {\n    var checkPastPoint, correctiveVelocity, distance, dt, nearnessThreshold, shouldShift, straightCourse, targetPos, targetSpeed, targetVelocity, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8;\n    if (this.isAirborne() && this.locomotionType !== \"flying\") {\n      return new Vector(0, 0, 0);\n    }\n    dt = ((_ref1 = this.actions) != null ? (_ref2 = _ref1.move) != null ? _ref2.cooldown : void 0 : void 0) || this.world.dt;\n    targetPos = this.getTargetPos();\n    if (!targetPos) {\n      targetPos = new Vector(20, 0).rotate(this.rotation).add(this.pos);\n    } else if (this.findsPaths && ((_ref3 = this.aiSystem) != null ? _ref3.findsPaths : void 0)) {\n      if (this.lastTarget && (!this.lastTarget.equals(targetPos))) {\n        this.path = null;\n      }\n      if (this.pathRefreshCounter++ % 20 === 0) {\n        this.path = null;\n      }\n      if (this.path == null) {\n        this.path = this.aiSystem.findPath(this.pos, targetPos, Math.max(this.width, this.height) / 2);\n      }\n      this.lastTarget = targetPos.copy();\n      checkPastPoint = true;\n      while (((_ref4 = this.path) != null ? _ref4.length : void 0) && this.pos.distance(this.path[0]) < 0.05 * dt / this.world.dt) {\n        checkPastPoint = false;\n        this.path.shift();\n        this.shiftPastRight = this.path.length && this.path[0].x - this.pos.x > 1;\n        this.shiftPastLeft = this.path.length && this.path[0].x - this.pos.x < -1;\n        this.shiftPastTop = this.path.length && this.path[0].y - this.pos.y > 1;\n        this.shiftPastBottom = this.path.length && this.path[0].y - this.pos.y < -1;\n      }\n      if (checkPastPoint && ((_ref5 = this.path) != null ? _ref5.length : void 0)) {\n        shouldShift = true;\n        if (this.shiftPastRight && this.path[0].x > this.pos.x) {\n          shouldShift = false;\n        }\n        if (this.shiftPastLeft && this.path[0].x < this.pos.x) {\n          shouldShift = false;\n        }\n        if (this.shiftPastTop && this.path[0].y > this.pos.y) {\n          shouldShift = false;\n        }\n        if (this.shiftPastBottom && this.path[0].y < this.pos.y) {\n          shouldShift = false;\n        }\n        if (shouldShift) {\n          this.path.shift();\n        }\n      }\n      if (((_ref6 = this.path) != null ? _ref6[0] : void 0) != null) {\n        targetPos = this.path[0];\n      }\n    }\n    nearnessThreshold = 0;\n    if (this.team && ((_ref7 = this.target) != null ? _ref7.team : void 0) === this.team && targetPos.equals(this.target.pos) && ((this.intent == null) || this.intent === 'move')) {\n      nearnessThreshold = 5;\n    }\n    straightCourse = Vector.subtract(targetPos, this.pos);\n    straightCourse.limit(Math.max(0, straightCourse.magnitude() - nearnessThreshold));\n    distance = straightCourse.magnitude();\n    targetSpeed = this.maxSpeed * ((_ref8 = this.currentSpeedRatio) != null ? _ref8 : 1);\n    targetVelocity = straightCourse.copy().normalize().multiply(targetSpeed).limit(distance / this.world.dt);\n    correctiveVelocity = Vector.subtract(targetVelocity, this.velocity).limit(this.maxAcceleration / this.world.dt);\n    if (distance > 0.5) {\n      this.rotation = straightCourse.heading();\n      this.hasRotated = true;\n    }\n    this.locomotiveForce = Vector.multiply(correctiveVelocity, this.mass / dt);\n    return this.locomotiveForce;\n  };\n\n  Moves.prototype.maintainsElevation = function() {\n    var _ref1;\n    return this.locomotionType === \"flying\" && ((_ref1 = this.actions) != null ? _ref1.move : void 0) && !this.dead;\n  };\n\n  Moves.prototype.brake = function() {\n    if (!(this.isGrounded() || this.maintainsElevation())) {\n      return;\n    }\n    if (this.world.getSystem(\"Movement\").frictionAt(this.pos, 1) === 0 && this.isGrounded()) {\n      return;\n    }\n    return this.velocity.limit(Math.max(0, this.velocity.magnitude() - this.maxAcceleration / this.world.dt));\n  };\n\n  Moves.prototype.calculateDrag = function(density, velocity) {\n    var drag, speed;\n    if (density == null) {\n      density = null;\n    }\n    if (velocity == null) {\n      velocity = null;\n    }\n    if (density == null) {\n      density = this.locomotionType === \"swimming\" ? WATER_DENSITY : AIR_DENSITY;\n    }\n    if (velocity == null) {\n      velocity = this.velocity;\n    }\n    speed = velocity.magnitude();\n    if (this.dragArea == null) {\n      console.log(\"No drag area for\", this.id, \"-- is Physical Component attached?\");\n    }\n    return drag = Vector.multiply(velocity, -0.5 * density * speed * this.dragCoefficient * this.dragArea);\n  };\n\n  Moves.prototype.calculateRollingResistance = function(density, friction, velocity) {\n    var actualHeading, fRR, headingDifference, intendedHeading, rollingResistance;\n    if (density == null) {\n      density = null;\n    }\n    if (friction == null) {\n      friction = null;\n    }\n    if (velocity == null) {\n      velocity = null;\n    }\n    if (!this.isGrounded() || this.velocity.z > 0) {\n      return new Vector();\n    }\n    if (density == null) {\n      density = this.locomotionType === \"swimming\" ? WATER_DENSITY : AIR_DENSITY;\n    }\n    if (friction == null) {\n      friction = STANDARD_FRICTION;\n    }\n    if (velocity == null) {\n      velocity = this.velocity;\n    }\n    rollingResistance = this.rollingResistance;\n    if (this.locomotionType === \"swimming\" && density < 100) {\n      rollingResistance += 0.5;\n    }\n    if (this.health < 0) {\n      rollingResistance = 0.4 + 2 * this.rollingResistance;\n    }\n    if (this.locomotionType === \"rolling\") {\n      actualHeading = velocity.heading();\n      if (actualHeading < 0) {\n        actualHeading += 2 * Math.PI;\n      }\n      intendedHeading = this.rotation < 0 ? this.rotation + 2 * Math.PI : this.rotation;\n      headingDifference = (intendedHeading - actualHeading) % (2 * Math.PI);\n      rollingResistance += Math.abs(headingDifference / (Math.PI / 2)) * (1 - rollingResistance);\n    }\n    if (!rollingResistance) {\n      return new Vector();\n    }\n    rollingResistance *= friction;\n    if (this.rollingResistanceCalculatedOnce && this.action !== \"move\") {\n      rollingResistance *= 5;\n    }\n    this.rollingResistanceCalculatedOnce = true;\n    return fRR = velocity.copy().normalize().multiply(-this.world.gravity * this.mass * rollingResistance);\n  };\n\n  return Moves;\n\n})(Component);\n",
	"commitMessage": "Check if unit should block during moveXY even with a commander (like pets)",
	"parent": "57b23daa9ba5fc1f00d36204",
	"patches": [
		"57453d1a88cab62500d9c466",
		"5745d8b303594b1f00f9ddd0",
		"575058f84fc1622e007b4c72",
		"575059585f51bc25002a13e0",
		"577275d577c7d62600e1b983",
		"577a189ffd900f7b00316d0d",
		"577a1a1b35ea2e24003553bb",
		"577a1a73a889601f0000739f",
		"577a1a9935ea2e2400355614",
		"5783b1cac7ce4a260096cce8",
		"57b78adbb750622e0064c6b0"
	],
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"official": false,
	"configSchema": {
		"properties": {
			"locomotionType": {
				"type": "string",
				"description": "How this Thang propels itself.",
				"enum": [
					"running",
					"rolling",
					"flying",
					"swimming"
				],
				"default": "running"
			},
			"maxSpeed": {
				"type": "number",
				"description": "Max self-propelled speed in m/s.",
				"default": 3.6,
				"format": "speed"
			},
			"maxAcceleration": {
				"type": "number",
				"description": "Max acceleration/decceleration in m/s^2 that this Thang will use to try to achieve its maxSpeed, or 0 if it doesn't self-propel.",
				"default": 100,
				"format": "acceleration"
			},
			"dragCoefficient": {
				"type": "number",
				"description": "Usually between 0.001 and 2.1. http://en.wikipedia.org/wiki/Drag_coefficient",
				"default": 1
			},
			"rollingResistance": {
				"type": "number",
				"description": "F = Crr * N -- http://en.wikipedia.org/wiki/Rolling_resistance; we'll use this for all units which slow internally, including (inaccurately) runners, but not missiles.",
				"default": 0.3
			},
			"currentSpeedRatio": {
				"type": "number",
				"description": "Initial 0-1 ratio of normal speed to max speed.",
				"minimum": 0,
				"maximum": 1,
				"default": 1
			},
			"cooldown": {
				"type": "number",
				"format": "seconds",
				"minimum": 0,
				"description": "How long each movement takes. 0 for max responsiveness, higher for faster simulation performance.",
				"default": 0
			},
			"velocity": {
				"type": "object",
				"additionalProperties": false,
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
				"description": "Initial velocity the Thang will have.",
				"required": [
					"x",
					"y",
					"z"
				]
			}
		},
		"default": {
			"locomotionType": "running",
			"maxSpeed": 3.6,
			"maxAcceleration": 100,
			"dragCoefficient": 1,
			"rollingResistance": 0.3,
			"currentSpeedRatio": 1,
			"cooldown": 0
		},
		"id": "__base__",
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b75ad7fc0f6d519000001",
			"majorVersion": 0
		},
		{
			"original": "524b7b857fc0f6d519000012",
			"majorVersion": 0
		},
		{
			"original": "524b4150ff92f1f4f8000024",
			"majorVersion": 0
		},
		{
			"original": "524b7b7c7fc0f6d519000011",
			"majorVersion": 0
		}
	],
	"description": "This Thang can move (either by running, rolling, flying, or swimming).",
	"system": "movement",
	"searchStrings": "moves m mo mov",
	"i18nCoverage": [
		"-",
		"de-DE",
		"ru",
		"fr",
		"zh-HANS",
		"sk",
		"pl",
		"uk"
	],
	"index": true,
	"created": "2016-08-25T16:49:21.051Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 186,
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