{
	"_id": "57350e82dd3a12dd69e023d0",
	"creator": "512ef4805a67a8c507000001",
	"slug": "jumpsstraightup",
	"name": "JumpsStraightUp",
	"original": "524b1f54d768d916b5000001",
	"__v": 0,
	"js": "var JumpsStraightUp, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nJumpsStraightUp = (function(_super) {\n  __extends(JumpsStraightUp, _super);\n\n  function JumpsStraightUp() {\n    _ref = JumpsStraightUp.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  JumpsStraightUp.className = \"JumpsStraightUp\";\n\n  JumpsStraightUp.prototype.attach = function(thang) {\n    var _base, _base1;\n    this._jumpAction = {\n      name: 'jump',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    JumpsStraightUp.__super__.attach.call(this, thang);\n    thang.addActions(this._jumpAction);\n    thang.jumpTime = thang.calculateJumpTimeForHeight(this.jumpHeight);\n    if ((_base = thang.actions.jump).cooldown == null) {\n      _base.cooldown = thang.jumpTime / 4;\n    }\n    return (_base1 = thang.actions.jump).specificCooldown != null ? (_base1 = thang.actions.jump).specificCooldown : _base1.specificCooldown = thang.jumpTime;\n  };\n\n  JumpsStraightUp.prototype.jump = function() {\n    this.setAction('jump');\n    return this.block();\n  };\n\n  JumpsStraightUp.prototype.calculateJumpTimeForHeight = function(jumpHeight) {\n    if (jumpHeight == null) {\n      jumpHeight = this.jumpHeight;\n    }\n    return 2 * Math.sqrt(2 * jumpHeight / this.world.gravity);\n  };\n\n  JumpsStraightUp.prototype.updateJumpTime = function() {\n    var oldJumpTime;\n    oldJumpTime = this.jumpTime;\n    this.jumpTime = this.calculateJumpTimeForHeight(this.jumpHeight);\n    if (this.actions.jump.specificCooldown === oldJumpTime) {\n      this.actions.jump.specificCooldown = this.jumpTime;\n    }\n    if (this.actions.jump.cooldown === oldJumpTime / 4) {\n      return this.actions.jump.cooldown = this.jumpTime / 4;\n    }\n  };\n\n  JumpsStraightUp.prototype.update = function() {\n    if (this.action === 'jump' && this.isGrounded() && this.act()) {\n      this.unblock();\n      return this.velocity.z = this.world.gravity * this.jumpTime / 2;\n    }\n  };\n\n  return JumpsStraightUp;\n\n})(Component);\n",
	"commitMessage": "Refactor to new block/unblock style.",
	"parent": "5478c5663501e25117ba5b44",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"official": false,
	"configSchema": {
		"properties": {
			"cooldown": {
				"type": "number",
				"minimum": 0,
				"description": "Cooldown before this Thang can act again after jumping."
			},
			"jumpHeight": {
				"type": "number",
				"description": "How high the Thang jumps when it jumps, in meters.",
				"minimum": 0
			},
			"specificCooldown": {
				"type": "number",
				"description": "Cooldown before this Thang can jump again.",
				"minimum": 0
			}
		},
		"default": {
			"jumpHeight": 0,
			"cooldown": 0,
			"specificCooldown": 0
		},
		"id": "__base__",
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b7b8c7fc0f6d519000013",
			"majorVersion": 0
		},
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		}
	],
	"description": "This Thang can jump up in the air.",
	"system": "movement",
	"searchStrings": "jumps straight up j ju jum jump jumps jumpss jumpsst jumpsstr jumpsstra jumpsstrai jumpsstraig jumpsstraigh jumpsstraight",
	"created": "2016-05-12T23:15:14.318Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 45,
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