{
	"_id": "561695150b6ee3e717e03c3e",
	"slug": "arrow",
	"creator": "512ef4805a67a8c507000001",
	"name": "Arrow",
	"js": "var Arrow, MAX_COOLDOWN, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nMAX_COOLDOWN = require('lib/world/systems/action').MAX_COOLDOWN;\n\nArrow = (function(_super) {\n  __extends(Arrow, _super);\n\n  function Arrow() {\n    _ref = Arrow.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Arrow.className = \"Arrow\";\n\n  Arrow.prototype.attach = function(thang) {\n    Arrow.__super__.attach.call(this, thang);\n    if (thang.acts) {\n      return thang.addActions({\n        name: 'die',\n        cooldown: MAX_COOLDOWN\n      });\n    }\n  };\n\n  Arrow.prototype.launch = function(shooter, launchType) {\n    var distance, _ref1, _ref2;\n    if (launchType == null) {\n      launchType = 'attack';\n    }\n    this.launchType = launchType;\n    this.velocity.x = this.targetPos.x - this.pos.x;\n    this.velocity.y = this.targetPos.y - this.pos.y;\n    if (this.leadsShots && ((_ref1 = this.shooter.target) != null ? (_ref2 = _ref1.velocity) != null ? _ref2.magnitude() : void 0 : void 0) > 0 && this.distance(this.shooter.target.pos) <= this.shooter[this.launchType + 'Range']) {\n      this.calculatedAttackDistance = distance = this.velocity.magnitude();\n    } else {\n      this.calculatedAttackDistance = distance = Math.min(this.velocity.magnitude(), this.shooter[this.launchType + 'Range']);\n    }\n    if (this.maximizesArc && distance > this.targetPos.z - this.pos.z) {\n      this.calculateArcVelocity(distance);\n    } else {\n      this.calculateStraightVelocity(distance);\n    }\n    this.rotation = this.velocity.heading() % (2 * Math.PI);\n    this.hasRotated = true;\n    return this.velocity.z += this.world.dt * this.world.gravity / 2;\n  };\n\n  Arrow.prototype.calculateStraightVelocity = function(distance) {\n    var targetZ, time, _ref1;\n    if (((this.pos.z * this.velocity.magnitude()) / (this.pos.z - this.targetPos.z)) > this.calculatedAttackDistance) {\n      targetZ = 0;\n    } else if (this.launchType === 'attack' && this.team && ((_ref1 = this.shooter.target) != null ? _ref1.team : void 0) === this.team) {\n      targetZ = 0;\n    } else {\n      targetZ = this.targetPos.z;\n    }\n    this.velocity.normalize().multiply(this.maxSpeed);\n    time = distance / this.maxSpeed;\n    this.velocity.z = (targetZ - this.pos.z) / time;\n    return this.velocity.z += this.world.gravity * Math.min(time, this.calculatedAttackDistance / this.maxSpeed) / 2;\n  };\n\n  Arrow.prototype.calculateArcVelocity = function(distance) {\n    var angle, desiredSpeed;\n    angle = Math.PI / 4;\n    desiredSpeed = distance * Math.sqrt(this.world.gravity / (distance - this.targetPos.z + this.pos.z));\n    this.velocity.normalize().multiply(desiredSpeed * Math.cos(angle));\n    return this.velocity.z = desiredSpeed * Math.sin(angle);\n  };\n\n  Arrow.prototype.beginContact = function(thang) {\n    var damageRatio, hitMeat, willDie, _ref1;\n    if (!this.exists) {\n      return;\n    }\n    hitMeat = thang.exists && thang.isAttackable && !this.velocity.isZero(true);\n    if (hitMeat) {\n      damageRatio = Math.min(1, this.velocity.magnitude(true) / this.maxSpeed);\n      if (this.launchType === 'attack') {\n        this.shooter.performAttackOriginal(thang, damageRatio);\n      } else if (this.launchType === 'throw') {\n        this.shooter.performThrownAttack(thang, damageRatio);\n      }\n    }\n    willDie = hitMeat || this.diesOnHit;\n    if (willDie) {\n      this.velocity.multiply(0, true);\n      this.collidedWith = thang;\n      this.fixedRotation = true;\n      this.addCurrentEvent('hit');\n      if ((_ref1 = this.actions) != null ? _ref1.die : void 0) {\n        return this.setAction('die');\n      } else {\n        return this.lifespan != null ? this.lifespan : this.lifespan = Math.min(this.lifespan, this.world.dt);\n      }\n    } else {\n      this.bounced = true;\n      return this.velocity.z += (this.velocity.magnitude() / 4) * (1 - 2 * this.world.rand.randf());\n    }\n  };\n\n  Arrow.prototype.update = function() {\n    var hitGround, hitMeat, justDied;\n    justDied = !this.dead && this.action === 'die';\n    hitGround = this.isGrounded() && !this.velocity.isZero(true);\n    hitMeat = this.collidedWith != null;\n    if (justDied || (this.diesOnHit && hitGround)) {\n      this.setAction('die');\n      this.act(true);\n      this.cancelCollisions();\n      this.addCurrentEvent('die');\n      this.dead = true;\n      this.updateRegistration();\n      if (this.lifespan == null) {\n        this.lifespan = Math.min(this.lifespan, 1.0);\n      }\n      return this.velocity.multiply(0, true);\n    } else if (hitMeat) {\n      this.setExists(false);\n      this.cancelCollisions();\n      return this.destroyBody();\n    } else if (hitGround) {\n      if (this.acts) {\n        this.setAction('die');\n        this.act(true);\n      }\n      this.velocity.multiply(0, true);\n      this.body.SetAngularVelocity(0);\n      this.cancelCollisions();\n      return this.lifespan != null ? this.lifespan : this.lifespan = Math.min(this.lifespan, 1.0);\n    }\n  };\n\n  return Arrow;\n\n})(Component);\n",
	"original": "524cca0e3ea855e0ab000143",
	"__v": 0,
	"commitMessage": "Nerf sploit of shooting arrows at friends that then go on to fly across the level and hit enemies.",
	"parent": "5462a4c1f44055a4b5e735e4",
	"patches": [],
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274",
		"54addef0dd64db5405531eba"
	],
	"codeLanguage": "coffeescript",
	"official": false,
	"configSchema": {
		"properties": {
			"diesOnHit": {
				"type": "boolean",
				"description": "Whether this missile dies when it hits something instead of bouncing."
			},
			"maximizesArc": {
				"type": "boolean",
				"description": "Whether to try to use a 45-degree angle to hit the target, if possible. Leads to much slower missiles."
			}
		},
		"id": "__base__",
		"additionalProperties": false,
		"type": "object",
		"default": {
			"diesOnHit": false,
			"maximizesArc": false
		}
	},
	"dependencies": [
		{
			"original": "524cc2593ea855e0ab000142",
			"majorVersion": 0
		},
		{
			"original": "524b7b857fc0f6d519000012",
			"majorVersion": 0
		},
		{
			"original": "524b7b8c7fc0f6d519000013",
			"majorVersion": 0
		},
		{
			"original": "524cbca43ea855e0ab000090",
			"majorVersion": 0
		}
	],
	"description": "This Thang flies like an arrow.",
	"system": "combat",
	"searchStrings": "arrow a ar arr",
	"index": true,
	"created": "2015-10-08T16:08:53.164Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 40,
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