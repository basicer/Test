{
	"_id": "573fa0ab3e910f115e5e463a",
	"index": true,
	"slug": "terrifies",
	"name": "Terrifies",
	"js": "var Terrifies,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nTerrifies = (function(_super) {\n  __extends(Terrifies, _super);\n\n  Terrifies.className = \"Terrifies\";\n\n  function Terrifies(config) {\n    Terrifies.__super__.constructor.call(this, config);\n    this.terrifyRangeSquared = this.terrifyRange * this.terrifyRange;\n  }\n\n  Terrifies.prototype.attach = function(thang) {\n    var terrifyAction;\n    terrifyAction = {\n      name: 'terrify',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    Terrifies.__super__.attach.call(this, thang);\n    return thang.addActions(terrifyAction);\n  };\n\n  Terrifies.prototype.terrify = function(terrifyWords) {\n    this.terrifyWords = terrifyWords;\n    return this.setAction('terrify');\n  };\n\n  Terrifies.prototype.fearedChooseAction = function() {\n    var num, randomNum;\n    if (!this.fearedDirection) {\n      this.fearedDirection = new Vector(1000, 0);\n      randomNum = this.world.rand.randf();\n      num = randomNum * Math.PI * 2;\n      this.fearedDirection.rotate(num);\n    }\n    return this.move(this.fearedDirection);\n  };\n\n  Terrifies.prototype.update = function() {\n    var args, e, effect, effects, enemy, _i, _j, _len, _len1, _ref;\n    if (!(this.action === 'terrify' && this.act())) {\n      return;\n    }\n    if (this.hidden) {\n      if (typeof this.unhide === \"function\") {\n        this.unhide();\n      }\n    }\n    if (typeof this.addCurrentEvent === \"function\") {\n      this.addCurrentEvent('terrify');\n    }\n    if (typeof this.sayWithoutBlocking === \"function\") {\n      this.sayWithoutBlocking(this.terrifyWords || \"You will be exterminated!\");\n    }\n    _ref = this.getEnemies();\n    for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n      enemy = _ref[_i];\n      if (!(enemy.hasEffects && this.distanceSquared(enemy) <= this.terrifyRangeSquared)) {\n        continue;\n      }\n      enemy.effects = (function() {\n        var _j, _len1, _ref1, _results;\n        _ref1 = enemy.effects;\n        _results = [];\n        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {\n          e = _ref1[_j];\n          if (e.name !== 'terrify') {\n            _results.push(e);\n          }\n        }\n        return _results;\n      })();\n      effects = [\n        {\n          name: 'fear',\n          duration: this.terrifyDuration,\n          reverts: true,\n          setTo: this.fearedChooseAction,\n          targetProperty: 'chooseAction'\n        }, {\n          name: 'fear',\n          duration: this.terrifyDuration,\n          reverts: true,\n          setTo: null,\n          targetProperty: 'targetPos'\n        }\n      ];\n      for (_j = 0, _len1 = effects.length; _j < _len1; _j++) {\n        effect = effects[_j];\n        enemy.addEffect(effect, this);\n      }\n    }\n    args = [parseFloat(this.pos.x.toFixed(2)), parseFloat(this.pos.y.toFixed(2)), parseFloat(this.terrifyRange.toFixed(2)), '#800000'];\n    return this.addCurrentEvent(\"aoe-\" + (JSON.stringify(args)));\n  };\n\n  return Terrifies;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "531a6abfab84f08e92be6ff7",
	"__v": 0,
	"commitMessage": "sayWithoutBlocking",
	"parent": "558452234bed1b6c2a2caac2",
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
				"minimum": 0,
				"description": "Cooldown before this Thang can act again after terrifying.",
				"format": "seconds"
			},
			"specificCooldown": {
				"type": "number",
				"description": "Cooldown before this Thang can terrify again.",
				"minimum": 0,
				"default": "30",
				"format": "seconds"
			},
			"terrifyDuration": {
				"type": "number",
				"description": "How long the enemies remain feared, in seconds.",
				"format": "seconds",
				"default": 3
			},
			"terrifyRange": {
				"type": "number",
				"default": 20,
				"description": "How far the terrifying howl reaches, in meters.",
				"format": "meters"
			}
		},
		"id": "__base__",
		"additionalProperties": false,
		"type": "object",
		"default": {
			"cooldown": 0,
			"specificCooldown": 30,
			"terrifyDuration": 3,
			"terrifyRange": 20
		}
	},
	"dependencies": [],
	"description": "This Component gives the Thang a terrify ability.",
	"system": "combat",
	"searchStrings": "terrifies t te ter terr terri terrif terrifi",
	"created": "2016-05-20T23:41:31.705Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 16,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "5162fab9c92b4c751e000274"
		},
		{
			"access": "read",
			"target": "public"
		}
	]
}