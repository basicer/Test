{
	"_id": "573fa0ac3e910f115e5e4640",
	"index": true,
	"slug": "devours",
	"name": "Devours",
	"codeLanguage": "coffeescript",
	"js": "var ArgumentError, Devours, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nArgumentError = require('lib/world/errors').ArgumentError;\n\nDevours = (function(_super) {\n  __extends(Devours, _super);\n\n  function Devours() {\n    _ref = Devours.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Devours.className = 'Devours';\n\n  Devours.prototype.attach = function(thang) {\n    var devourAction;\n    devourAction = {\n      name: 'devour',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    Devours.__super__.attach.call(this, thang);\n    thang.addActions(devourAction);\n    thang.devouredCount = 0;\n    return thang.addTrackedProperties(['devouredCount', 'number']);\n  };\n\n  Devours.prototype.devour = function(target) {\n    var _ref1;\n    if (target == null) {\n      throw new ArgumentError(\"Target is null. Is there always a target to devour?\", \"devour\", \"target\", \"object\", target);\n    }\n    this.setTarget(target, 'devour');\n    if (!this.target) {\n      return \"done\";\n    }\n    if (this.actions.move && this.distance(this.target, true) > this.devourRange) {\n      this.setAction('move');\n    } else {\n      this.setAction('devour');\n    }\n    if (this.devouredOnce || ((_ref1 = this.target) != null ? _ref1.health : void 0) <= 0) {\n      this.devouredOnce = false;\n      this.setAction('idle');\n      return \"done\";\n    } else {\n      return \"devour\";\n    }\n  };\n\n  Devours.prototype.update = function() {\n    var success, _base;\n    if (!(this.action === 'devour' && this.target && this.distance(this.target, true) <= this.devourRange && this.act())) {\n      return;\n    }\n    success = this.target.health <= this.devourDamage;\n    if (success && (this.health != null)) {\n      this.health = Math.min(this.health + this.target.health, this.maxHealth);\n    }\n    this.rotation = Vector.subtract(this.target.pos, this.pos).heading();\n    if (typeof (_base = this.target).takeDamage === \"function\") {\n      _base.takeDamage(this.devourDamage, this);\n    }\n    if (this.hidden) {\n      if (typeof this.unhide === \"function\") {\n        this.unhide();\n      }\n    }\n    if (typeof this.brake === \"function\") {\n      this.brake();\n    }\n    if (typeof this.sayWithoutBlocking === \"function\") {\n      this.sayWithoutBlocking(success ? \"<GULP>\" : \"<CHOMP>\");\n    }\n    ++this.devouredCount;\n    this.keepTrackedProperty('devouredCount');\n    if (this.plan) {\n      return this.devouredOnce = true;\n    }\n  };\n\n  return Devours;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "53cb185c03039b0439ee7506",
	"watchers": [
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"commitMessage": "sayWithoutBlocking",
	"parent": "55fcaef2ac824684059f0109",
	"official": false,
	"configSchema": {
		"properties": {
			"cooldown": {
				"type": "number",
				"description": "How many seconds each devour takes.",
				"default": 0.5,
				"minimum": 0,
				"format": "seconds"
			},
			"devourDamage": {
				"type": "number",
				"default": 200,
				"description": "How much damage a devour does. If the target has less health, the devourer will gain its remaining health, om nom nom."
			},
			"devourRange": {
				"type": "number",
				"default": 3,
				"format": "meters",
				"minimum": 0,
				"exclusiveMinimum": true,
				"description": "How far away the Thang needs to be to devour a target, in meters."
			},
			"specificCooldown": {
				"type": "number",
				"description": "How many seconds before this specific devour can be done again, if longer than normal cooldown.",
				"minimum": 0,
				"format": "seconds"
			}
		},
		"default": {
			"cooldown": 0.5,
			"specificCooldown": 5,
			"devourDamage": 200,
			"devourRange": 3
		},
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b85837fc0f6d519000020",
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
	"description": "This Component gives the Thang a devour ability.",
	"system": "combat",
	"searchStrings": "devours d de dev devo devou",
	"patches": [],
	"created": "2016-05-20T23:41:32.474Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 10,
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