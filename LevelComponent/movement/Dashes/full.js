{
	"_id": "5746273dc7d95525007bfc3a",
	"slug": "dashes",
	"searchStrings": "dashes d da das dash",
	"name": "Dashes",
	"js": "var ArgumentError, Dashes, Vector, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nVector = require('lib/world/vector');\n\nArgumentError = require('lib/world/errors').ArgumentError;\n\nDashes = (function(_super) {\n  __extends(Dashes, _super);\n\n  function Dashes() {\n    _ref = Dashes.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Dashes.className = 'Dashes';\n\n  Dashes.hasDashed = false;\n\n  Dashes.prototype.attach = function(thang) {\n    var dashAction;\n    dashAction = {\n      name: 'dash',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    Dashes.__super__.attach.call(this, thang);\n    return thang.addActions(dashAction);\n  };\n\n  Dashes.prototype.dash = function(target) {\n    if (target == null) {\n      throw new ArgumentError(\"You need to dash towards a target, or in a direction!\");\n    }\n    if (target.isVector || (_.isPlainObject(target) && ((target.x != null) && (target.y != null)))) {\n      this.setTargetPos(target);\n    } else if (target.pos != null) {\n      this.setTarget(target, 'dash');\n    } else {\n\n    }\n    this.setAction('dash');\n    return this.block();\n  };\n\n  Dashes.prototype.performDash = function() {\n    var dashMagnitude, dashSpeed, dashVector;\n    dashSpeed = this.maxSpeed * this.dashSpeedMultiplier;\n    dashVector = {\n      x: this.getTargetPos().x - this.pos.x,\n      y: this.getTargetPos().y - this.pos.y\n    };\n    dashMagnitude = Math.sqrt(dashVector.x * dashVector.x + dashVector.y * dashVector.y);\n    dashVector = {\n      x: dashVector.x / dashMagnitude,\n      y: dashVector.y / dashMagnitude\n    };\n    dashVector = {\n      x: dashVector.x * dashSpeed,\n      y: dashVector.y * dashSpeed\n    };\n    this.velocity.x = dashVector.x;\n    this.velocity.y = dashVector.y;\n    if (this.turnToDirection) {\n      this.rotation = this.velocity.heading();\n      this.hasRotated = true;\n    }\n    if (typeof this.sayWithoutBlocking === \"function\") {\n      this.sayWithoutBlocking(\"Dash!\");\n    }\n    this.setAction('idle');\n    return this.hasDashed = true;\n  };\n\n  Dashes.prototype.update = function() {\n    if (!(this.action === 'dash' && this.act())) {\n      return;\n    }\n    this.unblock();\n    return this.performDash();\n  };\n\n  return Dashes;\n\n})(Component);\n",
	"system": "movement",
	"creator": "537d01f484c54c6e05c05989",
	"original": "551a237c5cd6bae409520d2e",
	"watchers": [
		"537d01f484c54c6e05c05989"
	],
	"__v": 0,
	"commitMessage": "Promisifies",
	"index": true,
	"parent": "573fa0ad3e910f115e5e4642",
	"description": "This Component gives the Thang the ability to Dash.",
	"dependencies": [
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		},
		{
			"original": "524b7b8c7fc0f6d519000013",
			"majorVersion": 0
		}
	],
	"configSchema": {
		"default": {
			"dashSpeedMultiplier": 1.25,
			"turnToDirection": false,
			"cooldown": 0.25,
			"specificCooldown": 10
		},
		"properties": {
			"dashSpeedMultiplier": {
				"type": "number",
				"minimum": 0
			},
			"turnToDirection": {
				"type": "boolean"
			},
			"cooldown": {
				"format": "seconds",
				"minimum": 0,
				"type": "number"
			},
			"specificCooldown": {
				"format": "seconds",
				"minimum": 0,
				"type": "number"
			}
		}
	},
	"created": "2016-05-25T22:29:17.201Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 14,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "537d01f484c54c6e05c05989"
		},
		{
			"access": "read",
			"target": "public"
		}
	]
}