{
	"_id": "558af394d962fe1d0b155d52",
	"searchStrings": "force bolt f fo for forc force forceb forcebo",
	"index": true,
	"slug": "forcebolt",
	"name": "ForceBolt",
	"js": "var ForceBolt, MAX_COOLDOWN, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };\n\nMAX_COOLDOWN = require('lib/world/systems/action').MAX_COOLDOWN;\n\nForceBolt = (function(_super) {\n  __extends(ForceBolt, _super);\n\n  function ForceBolt() {\n    _ref = ForceBolt.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  ForceBolt.className = 'ForceBolt';\n\n  ForceBolt.prototype.attach = function(thang) {\n    ForceBolt.__super__.attach.call(this, thang);\n    if (thang.acts) {\n      return thang.addActions({\n        name: 'die',\n        cooldown: MAX_COOLDOWN\n      });\n    }\n  };\n\n  ForceBolt.prototype.launch = function(shooter, launchType) {\n    var _ref1, _ref2, _ref3, _ref4;\n    this.launchType = launchType;\n    this.velocity.x = this.targetPos.x - this.pos.x;\n    this.velocity.y = this.targetPos.y - this.pos.y;\n    this.velocity.z = this.targetPos.z - this.pos.z;\n    if (this.velocity.x === 0 && this.velocity.y === 0) {\n      this.velocity = new Vector(1, 0, 0);\n    }\n    this.velocity.normalize().multiply(this.maxSpeed);\n    this.calculatedAttackDistance = (_ref1 = (_ref2 = this.shooter[this.launchType + 'Range']) != null ? _ref2 : (_ref3 = this.shooter.spells) != null ? (_ref4 = _ref3[_.string.underscored(this.launchType).replace(/_/g, '-')]) != null ? _ref4.range : void 0 : void 0) != null ? _ref1 : this.velocity.magnitude();\n    this.rotation = this.velocity.heading() % (2 * Math.PI);\n    this.thangsHit = [];\n    this.hasRotated = true;\n    this.launchPos = this.pos.copy();\n    if (this.spriteName === 'Plasma Ball') {\n      return this.pos.add(this.velocity.copy().limit(this.shooter.width / 2 + this.width / 2));\n    }\n  };\n\n  ForceBolt.prototype.beginContact = function(thang) {\n    var hitMeat, _ref1;\n    if (!this.exists) {\n      return;\n    }\n    hitMeat = thang.exists && thang.isAttackable && !(_ref1 = thang.id, __indexOf.call(this.thangsHit, _ref1) >= 0) && thang !== this.shooter;\n    if (this.thangsHit.length && !this.penetratesTargets) {\n      hitMeat = false;\n    }\n    if (hitMeat) {\n      this.thangsHit.push(thang.id);\n      if (this.launchType === 'forceBolt') {\n        return this.shooter.performForceBoltAttack(thang);\n      } else if (this.launchType === 'magicMissile') {\n        return this.shooter.performMagicMissileAttack(thang);\n      } else if (this.shooter.performAttackOriginal) {\n        return this.shooter.performAttackOriginal(thang, 1);\n      } else {\n        return console.log('ForceBolt', this.id, 'used for launchType', this.launchType, '???');\n      }\n    } else {\n      return null;\n    }\n  };\n\n  ForceBolt.prototype.update = function() {\n    var _ref1;\n    if ((!this.shootsForever && this.launchPos.distance(this.pos) > this.calculatedAttackDistance + 10 - this.thangsHit.length) || (!this.penetratesTargets && this.thangsHit.length) || this.velocity.magnitude() < 1 || this.velocity.magnitude() > 1.2 * this.maxSpeed) {\n      this.setAction('die');\n      this.act(true);\n      this.cancelCollisions();\n      this.addCurrentEvent('die');\n      this.dead = true;\n      this.updateRegistration();\n      this.lifespan = Math.min((_ref1 = this.lifespan) != null ? _ref1 : 1.0, 1.0);\n      return this.velocity.multiply(0, true);\n    }\n  };\n\n  ForceBolt.prototype.maintainsElevation = function() {\n    return true;\n  };\n\n  return ForceBolt;\n\n})(Component);\n",
	"system": "combat",
	"creator": "512ef4805a67a8c507000001",
	"original": "54678106417c8b48a9811efe",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "This Component flies like a force bolt (a fast magic projectile that optionally penetrates targets and always goes to its max range).",
	"dependencies": [
		{
			"original": "524cc2593ea855e0ab000142",
			"majorVersion": 0
		}
	],
	"commitMessage": "Hack to make robot walkers not hit themselves or push themselves by shooting their own missiles.",
	"parent": "558a1d344bed1b6c2a2cabb9",
	"configSchema": {
		"properties": {
			"penetratesTargets": {
				"type": "boolean"
			},
			"shootsForever": {
				"type": "boolean",
				"description": "Whether the missile just keeps going or obeys the intended attack range."
			}
		},
		"default": {
			"penetratesTargets": true,
			"shootsForever": false
		}
	},
	"created": "2015-06-24T18:14:44.731Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 9,
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