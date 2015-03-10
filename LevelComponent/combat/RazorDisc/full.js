{
	"_id": "54ff1bdea23351bb037da62a",
	"index": true,
	"slug": "razordisc",
	"name": "RazorDisc",
	"codeLanguage": "coffeescript",
	"js": "var MAX_COOLDOWN, RazorDisc, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nMAX_COOLDOWN = require('lib/world/systems/action').MAX_COOLDOWN;\n\nRazorDisc = (function(_super) {\n  __extends(RazorDisc, _super);\n\n  function RazorDisc() {\n    _ref = RazorDisc.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  RazorDisc.className = 'RazorDisc';\n\n  RazorDisc.prototype.attach = function(thang) {\n    RazorDisc.__super__.attach.call(this, thang);\n    if (thang.acts) {\n      return thang.addActions({\n        name: 'die',\n        cooldown: MAX_COOLDOWN\n      });\n    }\n  };\n\n  RazorDisc.prototype.launch = function(shooter) {\n    this.velocity.x = this.targetPos.x - this.pos.x;\n    this.velocity.y = this.targetPos.y - this.pos.y;\n    this.velocity.z = 0;\n    return this.velocity.normalize().multiply(this.maxSpeed);\n  };\n\n  RazorDisc.prototype.maintainsElevation = function() {\n    return true;\n  };\n\n  RazorDisc.prototype.beginContact = function(thang) {\n    var hitMeat, _ref1;\n    if (!this.exists) {\n      return;\n    }\n    hitMeat = thang.exists && thang.isAttackable && !this.velocity.isZero(true);\n    if (hitMeat) {\n      if (this.launchType === 'attack') {\n        this.shooter.performAttackOriginal(thang, 1);\n      } else if (this.launchType === 'throw') {\n        this.shooter.performThrownAttack(thang, 1);\n      }\n      this.velocity.multiply(0, true);\n      this.collidedWith = thang;\n      this.addCurrentEvent('hit');\n      if ((_ref1 = this.actions) != null ? _ref1.die : void 0) {\n        return this.setAction('die');\n      } else {\n        return this.lifespan != null ? this.lifespan : this.lifespan = Math.min(this.lifespan, this.world.dt);\n      }\n    } else {\n      return this.bounced = true;\n    }\n  };\n\n  RazorDisc.prototype.update = function() {\n    var hitMeat, justDied;\n    justDied = !this.dead && this.action === 'die';\n    hitMeat = this.collidedWith != null;\n    if (justDied) {\n      this.setAction('die');\n      this.act(true);\n      this.cancelCollisions();\n      this.addCurrentEvent('die');\n      this.dead = true;\n      this.updateRegistration();\n      if (this.lifespan == null) {\n        this.lifespan = Math.min(this.lifespan, this.world.dt);\n      }\n      return this.velocity.multiply(0, true);\n    } else if (hitMeat) {\n      this.setExists(false);\n      this.cancelCollisions();\n      return this.destroyBody();\n    }\n  };\n\n  return RazorDisc;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "53c9a86febba77000033aea7",
	"watchers": [
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"commitMessage": "Using throw attack instead of primary attack when hit, if thrown instead of attacked.",
	"parent": "53c9b1e5ebba77000033aeab",
	"official": false,
	"configSchema": {
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524cc2593ea855e0ab000142",
			"majorVersion": 0
		}
	],
	"description": "This Component makes a Missile Thang float like a floaty disc that bounces off of obstacles until it bites into flesh.",
	"system": "combat",
	"searchStrings": "razor disc r ra raz razo razor razord razordi",
	"created": "2015-03-10T16:29:18.325Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 3,
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