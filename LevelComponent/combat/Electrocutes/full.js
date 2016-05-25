{
	"_id": "57461f9da1b1092500a141da",
	"slug": "electrocutes",
	"searchStrings": "electrocutes e el ele elec elect electr electro electroc electrocu electrocut",
	"name": "Electrocutes",
	"js": "var ArgumentError, Electrocutes, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nArgumentError = require('lib/world/errors').ArgumentError;\n\nElectrocutes = (function(_super) {\n  __extends(Electrocutes, _super);\n\n  function Electrocutes() {\n    _ref = Electrocutes.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Electrocutes.className = 'Electrocutes';\n\n  Electrocutes.prototype.attach = function(thang) {\n    var electrocuteAction;\n    electrocuteAction = {\n      name: 'electrocute',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    Electrocutes.__super__.attach.call(this, thang);\n    return thang.addActions(electrocuteAction);\n  };\n\n  Electrocutes.prototype.electrocute = function(target) {\n    if (target == null) {\n      throw new ArgumentError(\"Target is null. Is there always a target to electrocute? (Use if?)\", \"electrocute\", \"target\", \"object\", target);\n    }\n    this.intent = 'electrocute';\n    this.setTarget(target, 'electrocute');\n    if (this.distance(this.target, true) > this.electrocuteRange && this.move) {\n      this.setAction('move');\n    } else {\n      this.setAction('electrocute');\n    }\n    return this.block();\n  };\n\n  Electrocutes.prototype.performElectrocute = function(target) {\n    var e, effect, effects, markName, _i, _len;\n    if (typeof this.sayWithoutBlocking === \"function\") {\n      this.sayWithoutBlocking('Zap!');\n    }\n    markName = 'electrocute';\n    this.target.effects = (function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.target.effects;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        e = _ref1[_i];\n        if (e.name !== markName) {\n          _results.push(e);\n        }\n      }\n      return _results;\n    }).call(this);\n    effects = [\n      {\n        name: markName,\n        duration: this.electrocuteDuration,\n        reverts: true,\n        factor: this.electrocuteFactor,\n        targetProperty: 'maxSpeed'\n      }, {\n        name: markName,\n        duration: this.electrocuteDuration,\n        reverts: true,\n        factor: this.electrocuteFactor,\n        targetProperty: 'actionTimeFactor'\n      }\n    ];\n    for (_i = 0, _len = effects.length; _i < _len; _i++) {\n      effect = effects[_i];\n      this.target.addEffect(effect, this);\n    }\n    if (this.plan) {\n      this.electrocuteComplete = true;\n    }\n    if (this.hidden) {\n      return typeof this.unhide === \"function\" ? this.unhide() : void 0;\n    }\n  };\n\n  Electrocutes.prototype.update = function() {\n    if (!(this.intent === 'electrocute' && this.isGrounded())) {\n      return;\n    }\n    if (this.action === 'move' && ((this.target != null) || (this.targetPos != null))) {\n      if (this.distance(this.getTargetPos()) < this.electrocuteRange) {\n        this.setAction('electrocute');\n      }\n    }\n    if (!(this.action === 'electrocute' && this.act())) {\n      return;\n    }\n    this.performElectrocute();\n    if (this.getTargetPos()) {\n      this.rotation = Vector.subtract(this.getTargetPos(), this.pos).heading();\n    }\n    this.unblock();\n    this.intent = void 0;\n    this.setTarget(null);\n    return this.setAction('idle');\n  };\n\n  Electrocutes.prototype.canElectrocute = function(target) {\n    var targetThang;\n    if (_.isString(target)) {\n      target = this.world.getThangByID(target);\n    }\n    if (target && !target.isThang && _.isString(target.id) && (targetThang = this.world.getThangByID(target.id))) {\n      target = targetThang;\n    }\n    if (!(target != null ? target.isThang : void 0)) {\n      throw new ArgumentError(\"Target must be a unit.\", \"canCast\", \"target\", \"unit\", target);\n    }\n    if (!target.hasEffects) {\n      return false;\n    }\n    return true;\n  };\n\n  return Electrocutes;\n\n})(Component);\n",
	"system": "combat",
	"creator": "537d01f484c54c6e05c05989",
	"original": "54a5cba632e0e8b3d4d04c69",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "This Component makes the Thang perform an electrocute attack.",
	"commitMessage": "Promisifies",
	"parent": "573fa0ac3e910f115e5e463e",
	"patches": [],
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
	"configSchema": {
		"default": {
			"cooldown": 0.75,
			"specificCooldown": 10,
			"electrocuteDuration": 9,
			"electrocuteFactor": 0.6,
			"electrocuteRange": 32
		},
		"properties": {
			"cooldown": {
				"minimum": 0,
				"type": "number",
				"format": "seconds"
			},
			"electrocuteDuration": {
				"minimum": 0,
				"type": "number",
				"format": "seconds"
			},
			"electrocuteFactor": {
				"minimum": 0,
				"type": "number"
			},
			"electrocuteRange": {
				"type": "number",
				"format": "meters",
				"minimum": 0
			},
			"specificCooldown": {
				"minimum": 0,
				"type": "number",
				"format": "seconds"
			}
		}
	},
	"index": true,
	"codeLanguage": "coffeescript",
	"created": "2016-05-25T21:56:45.528Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 18,
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