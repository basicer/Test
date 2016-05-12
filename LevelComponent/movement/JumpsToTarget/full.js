{
	"_id": "57350e82dd3a12dd69e023cf",
	"slug": "jumpstotarget",
	"searchStrings": "jumps to target j ju jum jump jumps jumpst jumpsto jumpstot jumpstota jumpstotar jumpstotarg",
	"name": "JumpsToTarget",
	"js": "var ArgumentError, JumpsToTarget, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nArgumentError = require('lib/world/errors').ArgumentError;\n\nJumpsToTarget = (function(_super) {\n  __extends(JumpsToTarget, _super);\n\n  function JumpsToTarget() {\n    _ref = JumpsToTarget.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  JumpsToTarget.className = \"JumpsToTarget\";\n\n  JumpsToTarget.prototype.jumpSpeedFactor = 1;\n\n  JumpsToTarget.prototype.update = function() {\n    var jumpDistance, jumpSpeed, jumpTime, jumpVector, targetPos;\n    if (this.action === 'jump' && this.isGrounded() && this.actionActivated && (targetPos = this.getTargetPos())) {\n      jumpSpeed = this.maxSpeed * this.jumpSpeedFactor;\n      jumpVector = Vector.subtract(targetPos, this.pos);\n      jumpDistance = jumpVector.magnitude();\n      jumpTime = Math.max(this.world.dt, Math.min(this.jumpTime, jumpDistance / jumpSpeed));\n      this.velocity.z = this.world.gravity * jumpTime / 2;\n      jumpVector.normalize().multiply(jumpSpeed);\n      this.velocity.x = jumpVector.x;\n      this.velocity.y = jumpVector.y;\n      this.rotation = this.velocity.heading();\n      return this.hasRotated = true;\n    }\n  };\n\n  JumpsToTarget.prototype.jumpTo = function(target) {\n    if (typeof target === 'undefined') {\n      throw new ArgumentError(\"You need somewhere to jumpTo.\", \"jumpTo\", \"target\", \"object\", target);\n    }\n    if (target != null ? target.pos : void 0) {\n      this.setTarget(target, 'jumpTo');\n    } else {\n      this.setTargetPos(target, 'jumpTo');\n    }\n    return this.jump();\n  };\n\n  return JumpsToTarget;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "5275392d69abdcb12401441e",
	"__v": 0,
	"commitMessage": "Refactor to new block/unblock style.",
	"parent": "571df63889cbc035006fb104",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"patches": [],
	"official": false,
	"configSchema": {
		"id": "__base__",
		"properties": {
			"jumpSpeedFactor": {
				"type": "number",
				"description": "How much faster this Thang travels when it jumps at a target, max.",
				"default": 1
			}
		},
		"additionalProperties": false,
		"type": "object",
		"default": {
			"jumpSpeedFactor": 1
		}
	},
	"dependencies": [
		{
			"original": "524b1f54d768d916b5000001",
			"majorVersion": 0
		},
		{
			"original": "524b7b7c7fc0f6d519000011",
			"majorVersion": 0
		}
	],
	"description": "This Component lets the Thang jump towards its target or targetPos.",
	"system": "movement",
	"i18nCoverage": [
		"-",
		"nb",
		"de-DE",
		"fr",
		"zh-HANS",
		"ru",
		"sk",
		"es-ES",
		"es-419",
		"it",
		"cs",
		"ja",
		"uk",
		"pt-BR",
		"pl",
		"ro",
		"zh-HANT",
		"el",
		"nl-NL",
		"da",
		"hu"
	],
	"index": true,
	"created": "2016-05-12T23:15:14.311Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 61,
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