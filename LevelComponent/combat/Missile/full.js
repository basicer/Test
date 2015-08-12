{
	"_id": "55cb7b449bc1892c835b01a0",
	"creator": "512ef4805a67a8c507000001",
	"slug": "missile",
	"name": "Missile",
	"js": "var Missile, Vector, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nVector = require('lib/world/vector');\n\nMissile = (function(_super) {\n  __extends(Missile, _super);\n\n  function Missile() {\n    _ref = Missile.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Missile.className = \"Missile\";\n\n  Missile.prototype.isMissile = true;\n\n  Missile.prototype.attach = function(thang) {\n    Missile.__super__.attach.call(this, thang);\n    if (thang.world.age === 0 && !/Portal/.test(thang.id)) {\n      return thang.setExists(false);\n    }\n  };\n\n  Missile.prototype.findInterception = function(from, to, targetVelocity, speed, useZ) {\n    var a, b, c, d, diff, t, t0, t1, _ref1;\n    diff = Vector.subtract(to, from);\n    a = targetVelocity.dot(targetVelocity) - speed * speed;\n    b = 2 * targetVelocity.dot(diff);\n    c = diff.dot(diff);\n    d = b * b - 4 * a * c;\n    t = 0;\n    if (!(d < 0 || a === 0)) {\n      t0 = (-b - Math.sqrt(d)) / (2 * a);\n      t1 = (-b + Math.sqrt(d)) / (2 * a);\n      t = t0 < 0 ? t1 : (t1 < 0 ? t0 : Math.min(t0, t1));\n    }\n    if (t <= 0) {\n      t = (_ref1 = this.lifespan) != null ? _ref1 : 3;\n    }\n    return {\n      pos: Vector.add(to, Vector.multiply(targetVelocity, t, useZ), useZ),\n      time: t\n    };\n  };\n\n  Missile.prototype.launch = function(shooter, launchType) {\n    var interception, targetPos, _base, _ref1, _ref2;\n    if (launchType == null) {\n      launchType = 'attack';\n    }\n    this.launchType = launchType;\n    this.setExists(true);\n    this.shooter = shooter;\n    this.pos = Vector.add(this.shooter.pos, {\n      x: 0,\n      y: 0,\n      z: this.pos.z\n    }, true);\n    this.pos.z = Math.min(this.pos.z, this.depth / 2 + 1);\n    targetPos = this.shooter.getTargetPos().copy();\n    if (this.shootsAtGround) {\n      targetPos.z = 0;\n    }\n    if (this.leadsShots && ((_ref1 = this.shooter.target) != null ? (_ref2 = _ref1.velocity) != null ? _ref2.magnitude() : void 0 : void 0) > 0) {\n      if (this.flightTime) {\n        targetPos.add(Vector.multiply(this.shooter.target.velocity, this.flightTime, !this.shootsAtGround));\n      } else {\n        interception = this.findInterception(this.pos, targetPos, this.shooter.target.velocity, this.maxSpeed, !this.shootsAtGround);\n        targetPos = interception.pos;\n        this.flightTime = interception.time;\n      }\n      if (!(this.shootsAtGround || (typeof (_base = this.shooter.target).maintainsElevation === \"function\" ? _base.maintainsElevation() : void 0))) {\n        targetPos.z = Math.max((this.shooter.target.depth ? this.shooter.target.depth / 2 : 0), targetPos.z - this.world.gravity * this.flightTime * this.flightTime / 2);\n      }\n    }\n    this.setTargetPos(targetPos);\n    return typeof this.addCurrentEvent === \"function\" ? this.addCurrentEvent('launch') : void 0;\n  };\n\n  return Missile;\n\n})(Component);\n",
	"original": "524cc2593ea855e0ab000142",
	"__v": 0,
	"commitMessage": "Workaround for non-existent portal missiles.",
	"parent": "5539656664a1488df00d94bf",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"official": false,
	"configSchema": {
		"properties": {
			"leadsShots": {
				"type": "boolean",
				"description": "Whether the missile aims at where its target is going, as opposed to where it is.",
				"default": true
			},
			"shootsAtGround": {
				"type": "boolean",
				"description": "Whether the missile aims at the ground under its target or at the z-center of its target.",
				"default": false
			}
		},
		"default": {
			"leadsShots": true,
			"shootsAtGround": false
		},
		"id": "__base__",
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b3e3fff92f1f4f800000d",
			"majorVersion": 0
		},
		{
			"original": "524b4150ff92f1f4f8000024",
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
			"original": "524b7b747fc0f6d519000010",
			"majorVersion": 0
		}
	],
	"description": "This Thang flies as a missile.",
	"system": "combat",
	"searchStrings": "missile m mi mis miss missi",
	"created": "2015-08-12T16:58:44.555Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 38,
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