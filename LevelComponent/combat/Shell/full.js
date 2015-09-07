{
	"_id": "55eda8a0336d15360f5b6829",
	"slug": "shell",
	"creator": "512ef4805a67a8c507000001",
	"name": "Shell",
	"js": "var MAX_COOLDOWN, Shell, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nMAX_COOLDOWN = require('lib/world/systems/action').MAX_COOLDOWN;\n\nShell = (function(_super) {\n  __extends(Shell, _super);\n\n  function Shell() {\n    _ref = Shell.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Shell.className = \"Shell\";\n\n  Shell.prototype.attach = function(thang) {\n    Shell.__super__.attach.call(this, thang);\n    return thang.addActions({\n      name: 'die',\n      cooldown: MAX_COOLDOWN\n    });\n  };\n\n  Shell.prototype.launch = function(shooter, launchType) {\n    var trajectory;\n    if (launchType == null) {\n      launchType = 'attack';\n    }\n    trajectory = Vector.subtract(this.targetPos, this.pos, true).limit(this.shooter[launchType + 'Range']);\n    trajectory.z += this.depth / 2;\n    this.targetPos = Vector.add(this.pos, trajectory, true);\n    this.flightTime = Math.ceil(this.flightTime / this.world.dt) * this.world.dt + this.world.dt * 2;\n    this.velocity = Vector.divide(trajectory, this.flightTime, true);\n    return this.velocity.z += this.world.gravity * this.flightTime / 2;\n  };\n\n  Shell.prototype.chooseAction = function() {\n    if (this.isGrounded() && !this.exploded) {\n      return this.explode();\n    }\n  };\n\n  Shell.prototype.explode = function() {\n    var blastRatio, combat, d, dWithZ, damageRatio, enemyPos, momentum, thang, v, _i, _len, _ref1;\n    combat = this.world.getSystem(\"Combat\");\n    _ref1 = combat.attackables.concat(combat.corpses);\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      thang = _ref1[_i];\n      if (this.team && !this.friendlyFire && thang.team === this.team) {\n        continue;\n      }\n      enemyPos = thang.pos.copy();\n      enemyPos.z -= thang.depth / 2;\n      v = Vector.subtract(enemyPos, this.pos, true);\n      d = v.magnitude(false);\n      dWithZ = v.magnitude(true);\n      if (!(d < this.blastRadius)) {\n        continue;\n      }\n      damageRatio = (this.blastRadius - d) / this.blastRadius;\n      blastRatio = (this.blastRadius - dWithZ) / this.blastRadius;\n      momentum = v.copy().normalize(true).multiply(blastRatio * this.mass, true);\n      if (typeof thang.maintainsElevation === \"function\" ? thang.maintainsElevation() : void 0) {\n        momentum.z = 0;\n      }\n      if (this.stunDuration) {\n        if (typeof thang.addEffect === \"function\") {\n          thang.addEffect({\n            name: 'paralyze',\n            duration: this.stunDuration * blastRatio,\n            reverts: true,\n            factor: 0.01,\n            targetProperty: 'actionTimeFactor'\n          });\n        }\n      }\n      if (this.launchType === 'attack') {\n        this.shooter.performAttackOriginal(thang, damageRatio, momentum);\n      } else if (this.launchType === 'throw') {\n        this.shooter.performThrownAttack(thang, damageRatio, momentum);\n      } else if (this.launchType === 'fireball') {\n        this.shooter.performFireballAttack(thang, damageRatio, momentum);\n      }\n    }\n    this.addCurrentEvent('hit');\n    this.velocity.multiply(0);\n    this.exploded = true;\n    this.setAction('die');\n    return this.act();\n  };\n\n  return Shell;\n\n})(Component);\n",
	"original": "524ccbe13ea855e0ab000173",
	"__v": 0,
	"commitMessage": "Fixed throwing shells.",
	"parent": "553e5ac79bdea5d00f1fd8d7",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"official": false,
	"configSchema": {
		"properties": {
			"blastRadius": {
				"type": "number",
				"description": "The radius of the blast explosion, in meters.",
				"minimum": 0,
				"exclusiveMinimum": true,
				"format": "meters"
			},
			"flightTime": {
				"type": "number",
				"description": "How long the Shell takes to land, in seconds.",
				"minimum": 0,
				"exclusiveMinimum": true,
				"format": "seconds"
			},
			"friendlyFire": {
				"type": "boolean",
				"default": true,
				"description": "Whether the explosion hurts/affects allied Thangs."
			},
			"stunDuration": {
				"type": "number",
				"format": "seconds",
				"minimum": 0,
				"description": "Duration of stun effect for targets caught at center of blast."
			}
		},
		"default": {
			"flightTime": 3.4,
			"blastRadius": 15,
			"friendlyFire": true,
			"stunDuration": 0
		},
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524cc2593ea855e0ab000142",
			"majorVersion": 0
		},
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		},
		{
			"original": "524b7b857fc0f6d519000012",
			"majorVersion": 0
		},
		{
			"original": "524b7b8c7fc0f6d519000013",
			"majorVersion": 0
		}
	],
	"description": "This Thang is a lobbed projectile which explodes.",
	"system": "combat",
	"codeLanguage": "coffeescript",
	"searchStrings": "shell s sh she",
	"created": "2015-09-07T15:09:20.714Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 36,
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