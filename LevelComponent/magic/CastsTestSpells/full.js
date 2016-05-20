{
	"_id": "573fa0ac3e910f115e5e463f",
	"searchStrings": "casts test spells c ca cas cast casts castst castste caststes caststest caststests caststestsp caststestspe caststestspel",
	"index": true,
	"slug": "caststestspells",
	"name": "CastsTestSpells",
	"js": "var CastsTestSpells,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCastsTestSpells = (function(_super) {\n  __extends(CastsTestSpells, _super);\n\n  CastsTestSpells.className = 'CastsTestSpells';\n\n  function CastsTestSpells(config) {\n    CastsTestSpells.__super__.constructor.call(this, config);\n    this._raiseDeadSpell = {\n      name: 'raise-dead',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      radius: this.radius,\n      count: this.count,\n      duration: this.duration,\n      power: this.power\n    };\n    delete this.radius;\n    delete this.count;\n    delete this.duration;\n    delete this.cooldown;\n    delete this.specificCooldown;\n    delete this.power;\n  }\n\n  CastsTestSpells.prototype.attach = function(thang) {\n    CastsTestSpells.__super__.attach.call(this, thang);\n    return thang.addSpell(this._raiseDeadSpell);\n  };\n\n  CastsTestSpells.prototype.castRaiseDead = function() {\n    return this.cast('raise-dead', this);\n  };\n\n  CastsTestSpells.prototype['perform_raise-dead'] = function() {\n    var args, corpse, corpses, _fn, _i, _len,\n      _this = this;\n    corpses = _.filter(this.world.getSystem('Combat').corpses, function(corpse) {\n      return corpse.hasEffects && _this.distance(corpse) < _this.spells['raise-dead'].radius;\n    });\n    corpses = this.world.rand.shuffle(corpses).slice(0, this.spells['raise-dead'].count);\n    _fn = function(corpse) {\n      var effect, effects, _j, _len1;\n      if (corpse) {\n        corpse.originalDie = corpse.die;\n        effects = [\n          {\n            name: 'confuse',\n            duration: _this.spells['raise-dead'].duration - _this.world.dt,\n            reverts: true,\n            factor: 1.1,\n            targetProperty: 'scaleFactor',\n            onRevert: function() {\n              return corpse.die();\n            }\n          }, {\n            name: 'confuse',\n            duration: _this.spells['raise-dead'].duration,\n            reverts: true,\n            setTo: false,\n            targetProperty: 'dead'\n          }, {\n            name: 'confuse',\n            duration: _this.spells['raise-dead'].duration,\n            reverts: true,\n            setTo: _this.raisedChooseAction,\n            targetProperty: 'chooseAction'\n          }, {\n            name: 'confuse',\n            duration: _this.spells['raise-dead'].duration,\n            reverts: true,\n            setTo: _this.raisedDie,\n            targetProperty: 'die'\n          }, {\n            name: 'confuse',\n            duration: _this.spells['raise-dead'].duration,\n            reverts: true,\n            setTo: corpse.maxHealth / 2,\n            targetProperty: 'health'\n          }, {\n            name: 'confuse',\n            duration: _this.spells['raise-dead'].duration,\n            reverts: true,\n            factor: 0.5,\n            targetProperty: 'maxSpeed'\n          }, {\n            name: 'confuse',\n            duration: _this.spells['raise-dead'].duration,\n            reverts: true,\n            setTo: _this.team,\n            targetProperty: 'team'\n          }, {\n            name: 'confuse',\n            duration: _this.spells['raise-dead'].duration,\n            reverts: true,\n            setTo: _this.superteam,\n            targetProperty: 'superteam'\n          }\n        ];\n        for (_j = 0, _len1 = effects.length; _j < _len1; _j++) {\n          effect = effects[_j];\n          corpse.addEffect(effect, _this);\n        }\n        corpse.revive();\n        corpse.setAction('idle');\n        return corpse.setTarget(null);\n      }\n    };\n    for (_i = 0, _len = corpses.length; _i < _len; _i++) {\n      corpse = corpses[_i];\n      _fn(corpse);\n    }\n    args = [parseFloat(this.pos.x.toFixed(2)), parseFloat(this.pos.y.toFixed(2)), parseFloat(this.spells['raise-dead'].radius.toFixed(2)), '#000000'];\n    return this.addCurrentEvent(\"aoe-\" + (JSON.stringify(args)));\n  };\n\n  CastsTestSpells.prototype.raisedChooseAction = function() {\n    var enemies, nearestCombatant, t;\n    if (!(this.health > 0)) {\n      return;\n    }\n    if (typeof this.sayWithoutBlocking === \"function\") {\n      this.sayWithoutBlocking('Oooo');\n    }\n    enemies = (function() {\n      var _i, _len, _ref, _results;\n      _ref = this.world.getSystem('Combat').attackables;\n      _results = [];\n      for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n        t = _ref[_i];\n        if (t.exists && t.team !== this.team && !t.dead && this.canSee(t)) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this);\n    nearestCombatant = this.getNearest(enemies);\n    if (nearestCombatant) {\n      if (this.attack && this.distance(nearestCombatant) < this.attackRange) {\n        return this.attack(nearestCombatant);\n      } else if (this.move) {\n        return this.move(nearestCombatant.pos);\n      }\n    }\n  };\n\n  CastsTestSpells.prototype.raisedDie = function() {\n    var effect, _i, _len, _ref;\n    if (this.dead) {\n      return;\n    }\n    this.dead = true;\n    _ref = this.effects;\n    for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n      effect = _ref[_i];\n      if (effect.name === 'confuse') {\n        effect.timeSinceStart = 9001;\n      }\n    }\n    this.updateEffects();\n    this.setTarget(null);\n    this.setAction('idle');\n    return this.originalDie();\n  };\n\n  return CastsTestSpells;\n\n})(Component);\n",
	"system": "magic",
	"creator": "512ef4805a67a8c507000001",
	"original": "54fa43663becd3f91d3206c9",
	"watchers": [
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"description": "This Component is just for developing new spells, which will then get moved to their proper Components when ready.",
	"codeLanguage": "coffeescript",
	"dependencies": [
		{
			"original": "52f13c37528baa731827408d",
			"majorVersion": 0
		},
		{
			"original": "524b3e3fff92f1f4f800000d",
			"majorVersion": 0
		}
	],
	"configSchema": {
		"properties": {
			"cooldown": {
				"type": "number",
				"minimum": 0,
				"format": "seconds",
				"default": 0.5
			},
			"count": {
				"type": "number",
				"minimum": 0,
				"exclusiveMinimum": true,
				"description": "How many corpses are raised, max.",
				"default": 1
			},
			"duration": {
				"type": "number",
				"minimum": 0,
				"format": "seconds"
			},
			"power": {
				"type": "number",
				"description": "Minimum total power of raised corpses.",
				"additionalProperties": false,
				"default": 1,
				"minimum": 0,
				"exclusiveMinimum": true
			},
			"radius": {
				"type": "number",
				"description": "How far the dead can be raised around the caster, in meters.",
				"default": 20,
				"additionalProperties": false,
				"minimum": 0,
				"format": "meters"
			},
			"specificCooldown": {
				"type": "number",
				"minimum": 0,
				"format": "seconds"
			}
		},
		"additionalProperties": false,
		"type": "object",
		"default": {
			"cooldown": 0.5,
			"specificCooldown": 10,
			"duration": 10,
			"count": 1,
			"radius": 20,
			"power": 5
		}
	},
	"commitMessage": "sayWithoutBlocking",
	"parent": "55fc3923b9c84c860537e0b7",
	"created": "2016-05-20T23:41:32.461Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 3,
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