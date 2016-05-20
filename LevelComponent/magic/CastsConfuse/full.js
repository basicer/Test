{
	"_id": "573fa0ac3e910f115e5e4641",
	"searchStrings": "casts confuse c ca cas cast casts castsc castsco castscon castsconf castsconfu",
	"index": true,
	"slug": "castsconfuse",
	"name": "CastsConfuse",
	"js": "var CastsConfuse,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCastsConfuse = (function(_super) {\n  __extends(CastsConfuse, _super);\n\n  CastsConfuse.className = 'CastsConfuse';\n\n  function CastsConfuse(config) {\n    CastsConfuse.__super__.constructor.call(this, config);\n    this._confuseSpell = {\n      name: 'confuse',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      range: this.range,\n      duration: this.duration\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    delete this.range;\n    delete this.duration;\n  }\n\n  CastsConfuse.prototype.attach = function(thang) {\n    CastsConfuse.__super__.attach.call(this, thang);\n    return thang.addSpell(this._confuseSpell);\n  };\n\n  CastsConfuse.prototype.perform_confuse = function() {\n    var e, effect, effects, onRevert, target, _base, _i, _len;\n    target = this.target;\n    onRevert = function() {\n      target.setTarget(null);\n      target.setAction('idle');\n      target.movedOncePos = null;\n      target.castOnceTarget = null;\n      return typeof target.clearAttack === \"function\" ? target.clearAttack() : void 0;\n    };\n    this.target.effects = (function() {\n      var _i, _len, _ref, _results;\n      _ref = this.target.effects;\n      _results = [];\n      for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n        e = _ref[_i];\n        if (e.name !== 'confuse') {\n          _results.push(e);\n        }\n      }\n      return _results;\n    }).call(this);\n    effects = [\n      {\n        name: 'confuse',\n        duration: this.spells.confuse.duration,\n        reverts: true,\n        setTo: this.confusedChooseAction,\n        targetProperty: 'chooseAction',\n        onRevert: onRevert\n      }, {\n        name: 'confuse',\n        duration: this.spells.confuse.duration,\n        reverts: true,\n        setTo: null,\n        targetProperty: 'targetPos'\n      }\n    ];\n    for (_i = 0, _len = effects.length; _i < _len; _i++) {\n      effect = effects[_i];\n      this.target.addEffect(effect, this);\n    }\n    return typeof (_base = this.target).endCurrentPlan === \"function\" ? _base.endCurrentPlan() : void 0;\n  };\n\n  CastsConfuse.prototype.confusedChooseAction = function() {\n    var nearestCombatant;\n    if (typeof this.sayWithoutBlocking === \"function\") {\n      this.sayWithoutBlocking('Wha...?');\n    }\n    nearestCombatant = this.getNearestCombatant();\n    if (this.attack && nearestCombatant && this.distance(nearestCombatant) < 5) {\n      return this.attack(nearestCombatant);\n    } else if (this.move) {\n      if (this.confusedDirection == null) {\n        this.confusedDirection = new Vector(1000, 0).rotate(this.world.rand.randf() * Math.PI * 2);\n      }\n      return this.move(this.confusedDirection);\n    }\n  };\n\n  return CastsConfuse;\n\n})(Component);\n",
	"system": "magic",
	"creator": "512ef4805a67a8c507000001",
	"original": "5462e03f3839c6e02811d1ae",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "sayWithoutBlocking",
	"parent": "566474b95aa3858ad42047eb",
	"description": "This Component gives the Thang a confuse spell.",
	"codeLanguage": "coffeescript",
	"dependencies": [
		{
			"original": "52f13c37528baa731827408d",
			"majorVersion": 0
		}
	],
	"configSchema": {
		"properties": {
			"cooldown": {
				"type": "number",
				"minimum": 0,
				"format": "seconds"
			},
			"range": {
				"type": "number",
				"minimum": 0,
				"format": "meters"
			},
			"specificCooldown": {
				"type": "number",
				"minimum": 0,
				"format": "seconds"
			},
			"duration": {
				"type": "number",
				"minimum": 0,
				"format": "seconds"
			}
		},
		"additionalProperties": false,
		"type": "object",
		"default": {
			"range": 25,
			"cooldown": 0.75,
			"specificCooldown": 10,
			"duration": 5
		}
	},
	"patches": [],
	"created": "2016-05-20T23:41:32.779Z",
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