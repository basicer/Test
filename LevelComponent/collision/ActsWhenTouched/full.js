{
	"_id": "5580904ab43ce0b15a91b267",
	"index": true,
	"slug": "actswhentouched",
	"name": "ActsWhenTouched",
	"codeLanguage": "coffeescript",
	"js": "var ActsWhenTouched, MAX_COOLDOWN, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nMAX_COOLDOWN = require('lib/world/systems/action');\n\nActsWhenTouched = (function(_super) {\n  __extends(ActsWhenTouched, _super);\n\n  function ActsWhenTouched() {\n    _ref = ActsWhenTouched.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  ActsWhenTouched.className = 'ActsWhenTouched';\n\n  ActsWhenTouched.prototype.attach = function(thang) {\n    ActsWhenTouched.__super__.attach.call(this, thang);\n    thang.addActions({\n      name: this.touchAction,\n      cooldown: MAX_COOLDOWN\n    });\n    thang.touchRangeSquared = thang.touchRange * thang.touchRange;\n    return thang.lastTouched = {};\n  };\n\n  ActsWhenTouched.prototype.chooseAction = function() {\n    var thang, _i, _len, _ref1;\n    if (this.extantColliders == null) {\n      this.extantColliders = this.world.getSystem('Collision').extantColliders;\n    }\n    _ref1 = this.extantColliders;\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      thang = _ref1[_i];\n      if (!(thang.collisionCategory !== 'none' && thang.isMovable && thang !== this && this.distanceSquared(thang) < this.touchRangeSquared && this.shouldInteractWith(thang))) {\n        continue;\n      }\n      this.setAction(this.touchAction);\n      this.touchedBy = thang;\n      this.lastTouched[thang.id] = this.world.age;\n      this.act();\n      if (this.action === 'open') {\n        this.cancelCollisions();\n      }\n      break;\n    }\n    return null;\n  };\n\n  ActsWhenTouched.prototype.shouldInteractWith = function(thang) {\n    var ok;\n    ok = true;\n    if (this.groundOnly && !(typeof thang.isGrounded === \"function\" ? thang.isGrounded() : void 0)) {\n      ok = false;\n    }\n    if (this.lastTouched[thang.id] && this.world.age - this.lastTouched[thang.id] < 3) {\n      ok = false;\n    }\n    return ok;\n  };\n\n  return ActsWhenTouched;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "53f4e6604808fa0000ed3012",
	"watchers": [
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"commitMessage": "Fixed ice door collision.",
	"parent": "54dd7b4c30297c41041dab17",
	"official": false,
	"configSchema": {
		"properties": {
			"touchAction": {
				"type": "string",
				"description": "Which action to perform when touched."
			},
			"touchRange": {
				"type": "number",
				"minimum": 0,
				"description": "How far away the center of a Thang can be from the center of this Thang before it will fall.",
				"default": 5
			},
			"groundOnly": {
				"type": "boolean",
				"default": false,
				"description": "Interact only with grounded thangs."
			}
		},
		"additionalProperties": false,
		"type": "object",
		"default": {
			"touchRange": 5,
			"touchAction": "fall",
			"groundOnly": false
		}
	},
	"dependencies": [
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		},
		{
			"original": "524b75ad7fc0f6d519000001",
			"majorVersion": 0
		}
	],
	"description": "This Component makes the Thang trigger an action when another Thang comes close enough, for visual effects.",
	"system": "collision",
	"searchStrings": "acts when touched a ac act acts actsw actswh actswhe actswhen actswhent actswhento actswhentou actswhentouc actswhentouch",
	"created": "2015-06-16T21:08:26.593Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 7,
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