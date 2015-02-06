{
	"_id": "54d418eead6c58f075fc7e61",
	"searchStrings": "thunderhooves referee t th thu thun thund thunde thunder thunderh thunderho thunderhoo thunderhoov thunderhoove thunderhooves thunderhoovesr thunderhoovesre thunderhoovesref thunderhoovesrefe thunderhoovesrefer",
	"index": true,
	"slug": "thunderhoovesreferee",
	"name": "ThunderhoovesReferee",
	"js": "var ThunderhoovesReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nThunderhoovesReferee = (function(_super) {\n  __extends(ThunderhoovesReferee, _super);\n\n  function ThunderhoovesReferee() {\n    _ref = ThunderhoovesReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  ThunderhoovesReferee.className = 'ThunderhoovesReferee';\n\n  ThunderhoovesReferee.prototype.chooseAction = function() {\n    if (!this.didSetUp) {\n      this.setUp();\n    }\n    this.spawnMinions();\n    this.controlMinions();\n    return this.checkVictory();\n  };\n\n  ThunderhoovesReferee.prototype.setUp = function() {\n    var hero, opts, p;\n    this.didSetUp = true;\n    p = {\n      H0: {\n        trigger: 14,\n        spawn: {\n          x: 18,\n          y: 54\n        },\n        camp: {\n          x: 18,\n          y: 30\n        }\n      },\n      L0: {\n        trigger: 15,\n        spawn: {\n          x: 18,\n          y: 8\n        },\n        camp: {\n          x: 18,\n          y: 30\n        }\n      },\n      L1: {\n        trigger: 34,\n        spawn: {\n          x: 40,\n          y: 8\n        },\n        camp: {\n          x: 40,\n          y: 30\n        }\n      },\n      H2: {\n        trigger: 54,\n        spawn: {\n          x: 60,\n          y: 54\n        },\n        camp: {\n          x: 60,\n          y: 30\n        }\n      },\n      L2: {\n        trigger: 55,\n        spawn: {\n          x: 60,\n          y: 8\n        },\n        camp: {\n          x: 60,\n          y: 30\n        }\n      }\n    };\n    opts = [[p.L0, p.L1, p.H2], [p.L0, p.L1, p.L2], [p.H0, p.L1, p.H2], [p.H0, p.L1, p.L2]];\n    this.waves = opts[this.world.rand.rand(opts.length)];\n    this.wave = 0;\n    this.oasis = {\n      x: 63,\n      y: 30\n    };\n    this.attackRange = 5;\n    hero = this.world.getThangByID('Hero Placeholder');\n    return this.speedFactor = hero.maxSpeed / 8;\n  };\n\n  ThunderhoovesReferee.prototype.spawnMinions = function() {\n    var hero, minion, wave;\n    if (this.wave >= this.waves.length) {\n      return;\n    }\n    wave = this.waves[this.wave];\n    hero = this.world.getThangByID('Hero Placeholder');\n    if (hero.pos.x > wave.trigger) {\n      this.buildXY('sand-yak', wave.spawn.x, wave.spawn.y);\n      minion = this.performBuild();\n      minion.maxSpeed *= this.speedFactor;\n      minion.currentSpeedRatio = .90;\n      minion.scaleFactor = 1.25 + 1.00 * this.world.rand.randf();\n      minion.reachedCamp = false;\n      minion.reachedOasis = false;\n      minion.attacking = false;\n      minion.campPoint = wave.camp;\n      minion.move(minion.campPoint);\n      return this.wave++;\n    }\n  };\n\n  ThunderhoovesReferee.prototype.controlMinions = function() {\n    var hero, minion, _i, _len, _ref1, _results;\n    hero = this.world.getThangByID('Hero Placeholder');\n    _ref1 = this.built;\n    _results = [];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      minion = _ref1[_i];\n      if (!minion.campPoint) {\n        continue;\n      }\n      if (minion.attacking || minion.distanceTo(hero.pos) < this.attackRange) {\n        minion.attack(hero);\n        minion.attacking = true;\n      }\n      if (!minion.reachedCamp) {\n        if (minion.distanceTo(minion.campPoint) < 3) {\n          _results.push(minion.reachedCamp = true);\n        } else {\n          _results.push(minion.move(minion.campPoint));\n        }\n      } else if (!minion.reachedOasis) {\n        if (minion.distanceTo(this.oasis) < 3) {\n          _results.push(minion.reachedOasis = true);\n        } else {\n          _results.push(minion.move(this.oasis));\n        }\n      } else {\n        _results.push(void 0);\n      }\n    }\n    return _results;\n  };\n\n  ThunderhoovesReferee.prototype.checkVictory = function() {\n    var d, minion, _i, _len, _ref1;\n    if (this.world.victory != null) {\n      return;\n    }\n    if (this.wave < this.waves.length) {\n      return;\n    }\n    if (this.world.getGoalState('get-to-oasis') !== 'success') {\n      return;\n    }\n    _ref1 = this.built;\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      minion = _ref1[_i];\n      if (!(minion.health > 0)) {\n        continue;\n      }\n      if (minion.attacking || minion.reachedCamp) {\n        this.checkingVictorySince = null;\n      }\n      if (minion.lastPos) {\n        d = minion.lastPos.distance(minion.pos);\n        minion.blocked || (minion.blocked = d < 0.2);\n      }\n      minion.lastPos = minion.pos.copy();\n      if (!minion.blocked) {\n        return;\n      }\n    }\n    if (this.checkingVictorySince == null) {\n      this.checkingVictorySince = this.world.age;\n    }\n    if (this.world.age > this.checkingVictorySince + 0.5) {\n      return this.world.endWorld(true, 0.1);\n    }\n  };\n\n  return ThunderhoovesReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "548c90200ffdc235e80ef0af",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 2,
	"description": "This Component makes the Thang spawn stuff for Thunderhooves.",
	"dependencies": [
		{
			"original": "52d9a6773cf02dcf26000dc4",
			"majorVersion": 0
		}
	],
	"commitMessage": "Fixed timing on victory conditions.",
	"parent": "548febaf3d6a8a45096d873d",
	"created": "2015-02-06T01:29:18.875Z",
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