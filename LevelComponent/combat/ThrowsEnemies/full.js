{
	"_id": "558452244bed1b6c2a2caac3",
	"index": true,
	"slug": "throwsenemies",
	"name": "ThrowsEnemies",
	"js": "var ArgumentError, ThrowsEnemies, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nArgumentError = require('lib/world/errors').ArgumentError;\n\nThrowsEnemies = (function(_super) {\n  __extends(ThrowsEnemies, _super);\n\n  function ThrowsEnemies() {\n    _ref = ThrowsEnemies.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  ThrowsEnemies.className = \"Throws\";\n\n  ThrowsEnemies.prototype.attach = function(thang) {\n    var throwAction;\n    throwAction = {\n      name: 'throw',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    ThrowsEnemies.__super__.attach.call(this, thang);\n    return thang.addActions(throwAction);\n  };\n\n  ThrowsEnemies.prototype[\"throw\"] = function(target, toPos) {\n    if (typeof target === 'undefined' || ((target == null) && this.hasEnemies())) {\n      throw new ArgumentError(\"\" + this.id + \" needs something to throw.\", \"throw\", \"target\", \"object\", target);\n    }\n    if ((toPos != null) && ((toPos.x == null) || (toPos.y == null))) {\n      throw new ArgumentError(\"\" + this.id + \" should throw toward which {x, y} position?\", \"throw\", \"toPos\", \"object\", target);\n    }\n    if (!target) {\n      this.setAction('idle');\n      this.setTarget(null);\n      return;\n    }\n    this.setTarget(target, 'throw');\n    this.throwToTargetPos = toPos ? new Vector(toPos.x, toPos.y) : null;\n    if (this.distance(target, true) > this.throwRange) {\n      this.currentSpeedRatio = 1;\n      return this.setAction('move');\n    }\n    return this.setAction('throw');\n  };\n\n  ThrowsEnemies.prototype.canThrow = function() {\n    var distance, _ref1;\n    if (!(this.canAct() && ((_ref1 = this.target) != null ? _ref1.isMovable : void 0))) {\n      return false;\n    }\n    distance = this.distance(this.target, true);\n    return distance - 0.5 <= this.throwRange;\n  };\n\n  ThrowsEnemies.prototype.getThrowMomentum = function(target, targetPos) {\n    var dir;\n    if (this.throwToTargetPos) {\n      dir = this.throwToTargetPos.copy().subtract(this.target.pos).normalize();\n    } else {\n      dir = this.pos.copy().subtract(target.pos).normalize();\n    }\n    dir.z = this.throwZAngle ? Math.sin(this.throwZAngle) : 0;\n    dir.multiply(this.throwMass, true);\n    return dir;\n  };\n\n  ThrowsEnemies.prototype.performThrow = function(target) {\n    var dir, momentum;\n    if (this.hidden) {\n      if (typeof this.unhide === \"function\") {\n        this.unhide();\n      }\n    }\n    momentum = this.getThrowMomentum(target, target.pos);\n    target.velocity.multiply(0, true);\n    target.velocity.add(Vector.divide(momentum, target.mass, true), true);\n    target.pos.z += this.pos.z;\n    if (this.throwToTargetPos) {\n      dir = this.throwToTargetPos.copy().subtract(target.pos).normalize();\n    } else {\n      dir = this.pos.copy().subtract(target.pos).normalize();\n    }\n    dir.multiply(2 + (Math.max(this.width, this.height) * Math.sqrt(2) / 2));\n    target.pos = this.pos.copy().add(dir, true);\n    if (target.health != null) {\n      target.health -= this.throwDamage;\n    }\n    if (target.hasEffects) {\n      return target.addEffect({\n        name: 'confuse',\n        duration: 1.5,\n        reverts: true,\n        factor: 0.01,\n        targetProperty: 'actionTimeFactor'\n      });\n    }\n  };\n\n  return ThrowsEnemies;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "531a6be3c23f0c5a7f0d7eb7",
	"__v": 0,
	"commitMessage": "Cancels hide and invisibility.",
	"parent": "54627b48f44055a4b5e73535",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"patches": [],
	"official": false,
	"configSchema": {
		"properties": {
			"cooldown": {
				"type": "number",
				"description": "How many seconds each throw takes.",
				"default": 1,
				"minimum": 0,
				"format": "seconds"
			},
			"specificCooldown": {
				"type": "number",
				"description": "How many seconds before this specific throw can be done again, if longer than normal cooldown.",
				"minimum": 0,
				"format": "seconds"
			},
			"throwDamage": {
				"type": "number",
				"description": "The damage done to the enemy that is thrown"
			},
			"throwMass": {
				"type": "number",
				"description": "How much mass to impart to the momentum of the throw.",
				"format": "kilograms",
				"default": 5000
			},
			"throwRange": {
				"type": "number",
				"description": "How many meters this throw can reach.",
				"minimum": 0,
				"exclusiveMinimum": true,
				"default": 3,
				"format": "meters"
			},
			"throwZAngle": {
				"type": "number",
				"description": "What angle from horizontal to apply the throwMass momentum at.",
				"format": "radians",
				"default": 0.785
			}
		},
		"default": {
			"cooldown": 1,
			"throwRange": 3,
			"specificCooldown": 2,
			"throwMass": 500,
			"throwZAngle": 0.785,
			"throwDamage": 10
		},
		"id": "__base__",
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		},
		{
			"original": "524b7b8c7fc0f6d519000013",
			"majorVersion": 0
		},
		{
			"original": "524b7b7c7fc0f6d519000011",
			"majorVersion": 0
		},
		{
			"original": "524b75ad7fc0f6d519000001",
			"majorVersion": 0
		}
	],
	"description": "This Component gives the Thang a \"throw\" action.",
	"system": "combat",
	"searchStrings": "throws enemies t th thr thro throw throws throwse throwsen throwsene throwsenem throwsenemi",
	"created": "2015-06-19T17:32:20.122Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 17,
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