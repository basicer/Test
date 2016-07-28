{
	"_id": "5799ffcd95bc792000d69efb",
	"slug": "castsraisedead",
	"name": "CastsRaiseDead",
	"codeLanguage": "coffeescript",
	"js": "var CastsRaiseDead,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCastsRaiseDead = (function(_super) {\n  __extends(CastsRaiseDead, _super);\n\n  CastsRaiseDead.className = 'CastsRaiseDead';\n\n  function CastsRaiseDead(config) {\n    CastsRaiseDead.__super__.constructor.call(this, config);\n    this._raiseDeadSpell = {\n      name: 'raise-dead',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      radius: this.radius,\n      duration: this.duration,\n      power: this.power\n    };\n    delete this.radius;\n    delete this.duration;\n    delete this.cooldown;\n    delete this.specificCooldown;\n    delete this.power;\n  }\n\n  CastsRaiseDead.prototype.attach = function(thang) {\n    CastsRaiseDead.__super__.attach.call(this, thang);\n    return thang.addSpell(this._raiseDeadSpell);\n  };\n\n  CastsRaiseDead.prototype.castRaiseDead = function() {\n    return this.cast('raise-dead', this);\n  };\n\n  CastsRaiseDead.prototype['getTarget_raise-dead'] = function() {\n    var corpses,\n      _this = this;\n    corpses = _.filter(this.world.getSystem('Combat').corpses, function(corpse) {\n      return corpse.hasEffects && _this.distance(corpse) < _this.spells['raise-dead'].radius;\n    });\n    if (corpses.length > 1) {\n      return this;\n    }\n    return null;\n  };\n\n  CastsRaiseDead.prototype['perform_raise-dead'] = function() {\n    var args, bodies, body, corpse, corpses, power, type, _fn, _i, _len,\n      _this = this;\n    corpses = _.filter(this.world.getSystem('Combat').corpses, function(corpse) {\n      return corpse.hasEffects && _this.distance(corpse) < _this.spells['raise-dead'].radius;\n    });\n    if (corpses.length > 1) {\n      corpses = this.world.rand.shuffle(corpses);\n    }\n    bodies = [];\n    body = 0;\n    power = 0;\n    while (bodies.length < corpses.length && power < this.spells['raise-dead'].power) {\n      corpse = corpses[body];\n      type = _.string.slugify(corpse.spriteName);\n      power += this.world.getSystem('Existence').buildTypePower[type] || 25;\n      bodies.push(corpse);\n      ++body;\n    }\n    _fn = function(corpse) {\n      var effect, effects, _j, _len1;\n      if (corpse) {\n        corpse.originalDie = corpse.die;\n        effects = [\n          {\n            name: 'undead',\n            duration: _this.spells['raise-dead'].duration - _this.world.dt,\n            reverts: true,\n            factor: 1.1,\n            targetProperty: 'scaleFactor',\n            onRevert: function() {\n              return corpse.die();\n            }\n          }, {\n            name: 'undead',\n            duration: _this.spells['raise-dead'].duration,\n            reverts: true,\n            setTo: false,\n            targetProperty: 'dead'\n          }, {\n            name: 'undead',\n            duration: _this.spells['raise-dead'].duration,\n            reverts: true,\n            setTo: _this.raisedChooseAction,\n            targetProperty: 'chooseAction'\n          }, {\n            name: 'undead',\n            duration: _this.spells['raise-dead'].duration,\n            reverts: true,\n            setTo: _this.raisedDie,\n            targetProperty: 'die'\n          }, {\n            name: 'undead',\n            duration: _this.spells['raise-dead'].duration,\n            reverts: true,\n            setTo: corpse.maxHealth / 2,\n            targetProperty: 'health'\n          }, {\n            name: 'undead',\n            duration: _this.spells['raise-dead'].duration,\n            reverts: true,\n            factor: 0.5,\n            targetProperty: 'maxSpeed'\n          }, {\n            name: 'undead',\n            duration: _this.spells['raise-dead'].duration,\n            reverts: true,\n            setTo: _this.team,\n            targetProperty: 'team'\n          }, {\n            name: 'undead',\n            duration: _this.spells['raise-dead'].duration,\n            reverts: true,\n            setTo: _this.superteam,\n            targetProperty: 'superteam'\n          }\n        ];\n        for (_j = 0, _len1 = effects.length; _j < _len1; _j++) {\n          effect = effects[_j];\n          corpse.addEffect(effect, _this);\n        }\n        corpse.revive();\n        corpse.setAction('idle');\n        return corpse.setTarget(null);\n      }\n    };\n    for (_i = 0, _len = bodies.length; _i < _len; _i++) {\n      corpse = bodies[_i];\n      _fn(corpse);\n    }\n    args = [parseFloat(this.pos.x.toFixed(2)), parseFloat(this.pos.y.toFixed(2)), parseFloat(this.spells['raise-dead'].radius.toFixed(2)), '#000000'];\n    return this.addCurrentEvent(\"aoe-\" + (JSON.stringify(args)));\n  };\n\n  CastsRaiseDead.prototype.raisedChooseAction = function() {\n    var enemies, nearestCombatant, t;\n    if (!(this.health > 0)) {\n      return;\n    }\n    if (!(this.canSee && this.getNearest && this.distance)) {\n      return;\n    }\n    if (typeof this.sayWithoutBlocking === \"function\") {\n      this.sayWithoutBlocking('Oooo');\n    }\n    enemies = (function() {\n      var _i, _len, _ref, _results;\n      _ref = this.world.getSystem('Combat').attackables;\n      _results = [];\n      for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n        t = _ref[_i];\n        if (t.exists && t.team !== this.team && !t.dead && this.canSee(t)) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this);\n    nearestCombatant = this.getNearest(enemies);\n    if (nearestCombatant) {\n      if (this.attack && this.distance(nearestCombatant) < this.attackRange) {\n        return this.attack(nearestCombatant);\n      } else if (this.move) {\n        return this.move(nearestCombatant.pos);\n      }\n    }\n  };\n\n  CastsRaiseDead.prototype.raisedDie = function() {\n    var effect, _i, _len, _ref;\n    if (this.dead) {\n      return;\n    }\n    this.dead = true;\n    _ref = this.effects;\n    for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n      effect = _ref[_i];\n      if (effect.name === 'undead') {\n        effect.timeSinceStart = 9001;\n      }\n    }\n    this.updateEffects();\n    this.setTarget(null);\n    this.setAction('idle');\n    return this.originalDie();\n  };\n\n  return CastsRaiseDead;\n\n})(Component);\n",
	"creator": "5790b3eea6956624001431f9",
	"original": "53cb089703039b0439ee74ff",
	"watchers": [
		"512ef4805a67a8c507000001"
	],
	"__v": 2,
	"commitMessage": "Diplomat submission for lang hu: 1 change(s).",
	"parent": "577a068f35ea2e2400352cb0",
	"official": false,
	"configSchema": {
		"properties": {
			"cooldown": {
				"type": "number",
				"minimum": 0,
				"format": "seconds",
				"default": 0.5
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
				"default": 100,
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
			"radius": 20,
			"power": 100
		}
	},
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
	"description": "This Component gives the Thang a raise-dead spell.",
	"system": "magic",
	"searchStrings": "casts raise dead c ca cas cast casts castsr castsra castsrai castsrais castsraise castsraised castsraisede",
	"i18nCoverage": [
		"-",
		"de-DE",
		"fr",
		"ru",
		"zh-HANS",
		"sk",
		"es-419",
		"pt-BR",
		"sv",
		"uk",
		"pl",
		"it",
		"el",
		"nl-BE",
		"nl-NL",
		"sr",
		"bg",
		"hu"
	],
	"patches": [
		"579a004c843ad12000e60292",
		"579a09a5843ad12000e6138c"
	],
	"index": true,
	"created": "2016-07-28T12:51:25.494Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 46,
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