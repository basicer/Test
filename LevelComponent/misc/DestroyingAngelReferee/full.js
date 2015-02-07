{
	"_id": "54d68d0b2f89c55405f22380",
	"slug": "destroyingangelreferee",
	"searchStrings": "destroying angel referee d de des dest destr destro destroy destroyi destroyin destroying destroyinga destroyingan destroyingang destroyingange destroyingangel destroyingangelr destroyingangelre destroyingangelref destroyingangelrefe destroyingangelrefer",
	"name": "DestroyingAngelReferee",
	"js": "var PowerBoostDietReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nPowerBoostDietReferee = (function(_super) {\n  __extends(PowerBoostDietReferee, _super);\n\n  function PowerBoostDietReferee() {\n    _ref = PowerBoostDietReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  PowerBoostDietReferee.className = 'PowerBoostDietReferee';\n\n  PowerBoostDietReferee.prototype.chooseAction = function() {\n    var _base;\n    this.configure();\n    this.decrementTimers();\n    this.checkVictory();\n    this.checkMushroom();\n    if (this.keeper.target === this.hero && !this.hero.hasEffect(\"grow\")) {\n      return typeof (_base = this.keeper).say === \"function\" ? _base.say(\"Ha ha, puny weakling... You don't stand a chance!\") : void 0;\n    }\n  };\n\n  PowerBoostDietReferee.prototype.setUpLevel = function() {\n    this.hero = this.world.getThangByID('Hero Placeholder');\n    this.cave = this.world.getThangByID('Cave Referee');\n    this.keeper = this.world.getThangByID('Dungeon Keeper');\n    this.events = {\n      'powerboost': false\n    };\n    return this.timers = {\n      \"powerBoostTimer\": 0\n    };\n  };\n\n  PowerBoostDietReferee.prototype.configure = function() {\n    if (!!this.configured) {\n      return;\n    }\n    this.originalStats = {\n      'maxHealth': this.hero.maxHealth,\n      'attackDamage': this.hero.attackDamage\n    };\n    return this.configured = true;\n  };\n\n  PowerBoostDietReferee.prototype.decrementTimers = function() {\n    var name, timer, _ref1, _results;\n    _ref1 = this.timers;\n    _results = [];\n    for (name in _ref1) {\n      timer = _ref1[name];\n      _results.push(this.timers[name] -= this.world.dt);\n    }\n    return _results;\n  };\n\n  PowerBoostDietReferee.prototype.checkMushroom = function() {\n    var mushroom, t;\n    mushroom = (function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.spriteName === 'Mushroom' && t.exists) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this);\n    if (mushroom.length < 1) {\n      return this.activatePowerBoost();\n    }\n  };\n\n  PowerBoostDietReferee.prototype.activatePowerBoost = function() {\n    if (!!this.events.powerboost) {\n      return;\n    }\n    this.events.powerboost = true;\n    this.setGoalState('boost', 'success');\n    this.castCustomGrow();\n    this.hero.maxHealth += 50;\n    this.hero.health = this.hero.maxHealth;\n    this.hero.attackDamage *= 4;\n    this.hero.addTrackedProperties(['health', 'number']);\n    this.hero.keepTrackedProperty('health');\n    this.hero.addTrackedProperties(['attackDamage', 'number']);\n    this.hero.keepTrackedProperty('attackDamage');\n    return this.timers.powerBoostTimer = 1;\n  };\n\n  PowerBoostDietReferee.prototype.castCustomGrow = function() {\n    this.spells[\"grow\"].duration = 500;\n    this.spells[\"grow\"].speedFactor = 3;\n    this.cast(\"grow\", this.hero);\n    this[\"perform_grow\"]();\n    this.cave.setTarget(null);\n    return this.cave.setAction(\"idle\");\n  };\n\n  PowerBoostDietReferee.prototype.checkVictory = function() {\n    if (this.hero.health <= 0) {\n      return this.setGoalState('defeat', 'failure');\n    } else if (this.keeper.health <= 0) {\n      return this.setGoalState('defeat', 'success');\n    } else if (this.hero.gold >= 30) {\n      return this.setGoalState('treasure', 'success');\n    }\n  };\n\n  return PowerBoostDietReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "546d4b4fa06acfd60c5ea198",
	"original": "54c712a0f94c815405cd9895",
	"watchers": [
		"546d4b4fa06acfd60c5ea198",
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 1,
	"commitMessage": "Minor code cleanup, removed un-used method. Added code comments",
	"index": true,
	"parent": "54c83e8ee2829db30d0310e1",
	"description": "This Component makes the Thang o'ermaster the Destroying Angel level.",
	"dependencies": [
		{
			"original": "54977ce657e90bd1903dea72",
			"majorVersion": 0
		}
	],
	"patches": [],
	"created": "2015-02-07T22:09:15.599Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 18,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "546d4b4fa06acfd60c5ea198"
		},
		{
			"access": "read",
			"target": "public"
		}
	]
}