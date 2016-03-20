{
	"_id": "56ee89eeaaa01e7b00ebd9e1",
	"index": true,
	"slug": "stomps",
	"name": "Stomps",
	"js": "var Stomps,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nStomps = (function(_super) {\n  __extends(Stomps, _super);\n\n  Stomps.className = \"Stomps\";\n\n  function Stomps(config) {\n    Stomps.__super__.constructor.call(this, config);\n    if (this.stompRadius == null) {\n      this.stompRadius = 15;\n    }\n    if (this.stompMass == null) {\n      this.stompMass = 3000;\n    }\n    if (this.stompDamage == null) {\n      this.stompDamage = 15;\n    }\n    if (this.stompZAngle == null) {\n      this.stompZAngle = 1;\n    }\n  }\n\n  Stomps.prototype.attach = function(thang) {\n    var stompAction;\n    stompAction = {\n      name: 'stomp',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    Stomps.__super__.attach.call(this, thang);\n    return thang.addActions(stompAction);\n  };\n\n  Stomps.prototype.stomp = function() {\n    this.setAction('stomp');\n    if (this.stompedOnce) {\n      this.stompedOnce = false;\n      this.setAction('idle');\n      return \"done\";\n    } else {\n      return \"stomp\";\n    }\n  };\n\n  Stomps.prototype.getStompMomentum = function(targetPos) {\n    var dir;\n    dir = targetPos.copy().subtract(this.pos).normalize();\n    dir.z = this.stompZAngle ? Math.sin(this.stompZAngle) : 0;\n    dir.multiply(this.stompMass, true);\n    return dir;\n  };\n\n  Stomps.prototype.performStomp = function() {\n    var args, d, momentum, pct, target, _i, _len, _ref;\n    _ref = this.getEnemies();\n    for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n      target = _ref[_i];\n      if (!(target.velocity && (d = this.distance(target)) < this.stompRadius)) {\n        continue;\n      }\n      momentum = this.getStompMomentum(target.pos);\n      pct = 1 - (d / this.stompRadius);\n      if (typeof target.isGrounded === \"function\" ? target.isGrounded() : void 0) {\n        target.velocity.z = Math.max(target.velocity.z, 0);\n      }\n      target.velocity.add(Vector.multiply(momentum, pct / target.mass, true), true);\n      target.health -= 200 + this.stompDamage * pct;\n      target.pos.z += this.pos.z;\n      if (target.hasEffects) {\n        target.addEffect({\n          name: 'confuse',\n          duration: 3,\n          reverts: true,\n          factor: 0.01,\n          targetProperty: 'actionTimeFactor'\n        });\n      }\n    }\n    args = [parseFloat(this.pos.x.toFixed(2)), parseFloat(this.pos.y.toFixed(2)), parseFloat(this.stompRadius.toFixed(2)), '#8FBC8F'];\n    this.addCurrentEvent(\"aoe-\" + (JSON.stringify(args)));\n    if (this.hidden) {\n      if (typeof this.unhide === \"function\") {\n        this.unhide();\n      }\n    }\n    if (this.plan) {\n      return this.stompedOnce = true;\n    }\n  };\n\n  Stomps.prototype.update = function() {\n    if (!(this.action === 'stomp' && this.isGrounded())) {\n      return;\n    }\n    if (this.stomping) {\n      this.performStomp();\n      return this.stomping = false;\n    } else if (this.action === 'stomp' && this.isGrounded() && this.act()) {\n      this.velocity.z = this.world.gravity * (this.actions.stomp.cooldown - this.world.dt) / 2;\n      return this.stomping = true;\n    }\n  };\n\n  return Stomps;\n\n})(Component);\n",
	"creator": "531c8c3ccf439d790a23af04",
	"original": "531a7f9d253ea9e79b474443",
	"__v": 0,
	"commitMessage": "",
	"parent": "55edb46b336d15360f5b685a",
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
				"description": "How many seconds each stomp takes.",
				"default": 2,
				"minimum": 0,
				"format": "seconds"
			},
			"specificCooldown": {
				"type": "number",
				"description": "How many seconds before this specific stomp can be done again, if longer than normal cooldown.",
				"minimum": 0,
				"format": "seconds"
			},
			"stompDamage": {
				"type": "number",
				"description": "How much damage stomp does at the center point, proportional to the distance from that centerpoint.",
				"minimum": 0,
				"exclusiveMinimum": true,
				"default": 15
			},
			"stompMass": {
				"type": "number",
				"description": "How much mass to impart to the momentum of the stomp.",
				"format": "kilograms",
				"default": 3000
			},
			"stompRadius": {
				"type": "number",
				"description": "How many meters this stomp can reach.",
				"minimum": 0,
				"exclusiveMinimum": true,
				"default": 15,
				"format": "meters"
			},
			"stompZAngle": {
				"type": "number",
				"description": "What angle from horizontal to apply the stompMass momentum at.",
				"format": "radians"
			}
		},
		"default": {
			"cooldown": 2,
			"specificCooldown": 15,
			"stompRadius": 15,
			"stompMass": 5000,
			"stompZAngle": 1,
			"stompDamage": 15
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
			"original": "524b75ad7fc0f6d519000001",
			"majorVersion": 0
		},
		{
			"original": "524b7b8c7fc0f6d519000013",
			"majorVersion": 0
		}
	],
	"description": "This Component gives the Thang a powerful AoE stomp action.",
	"system": "combat",
	"searchStrings": "stomps s st sto stom",
	"created": "2016-03-20T11:30:54.581Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 14,
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