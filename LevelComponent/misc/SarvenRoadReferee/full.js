{
	"_id": "54d2ac63951202ed8ee74227",
	"searchStrings": "sarven road referee s sa sar sarv sarve sarven sarvenr sarvenro sarvenroa sarvenroad sarvenroadr sarvenroadre sarvenroadref sarvenroadrefe sarvenroadrefer",
	"index": true,
	"slug": "sarvenroadreferee",
	"name": "SarvenRoadReferee",
	"js": "var SarvenRoadReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nSarvenRoadReferee = (function(_super) {\n  __extends(SarvenRoadReferee, _super);\n\n  function SarvenRoadReferee() {\n    _ref = SarvenRoadReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  SarvenRoadReferee.className = 'SarvenRoadReferee';\n\n  SarvenRoadReferee.prototype.chooseAction = function() {\n    if (!this.sarvenRoadSetUp) {\n      this.setUpSarvenRoad();\n    }\n    this.spawnMinions();\n    this.controlMinions();\n    return this.checkSarvenRoadVictory();\n  };\n\n  SarvenRoadReferee.prototype.setUpSarvenRoad = function() {\n    var opts, p;\n    this.sarvenRoadSetUp = true;\n    p = {\n      H0: {\n        trigger: {\n          x: 0,\n          y: 0\n        },\n        spawn: {\n          x: -1,\n          y: 23\n        },\n        camp: {\n          x: 10,\n          y: 19\n        }\n      },\n      L0: {\n        trigger: {\n          x: 0,\n          y: 0\n        },\n        spawn: {\n          x: 27,\n          y: 6\n        },\n        camp: {\n          x: 19,\n          y: 17\n        }\n      },\n      H1: {\n        trigger: {\n          x: 14,\n          y: 14\n        },\n        spawn: {\n          x: 0,\n          y: 39\n        },\n        camp: {\n          x: 21,\n          y: 34\n        }\n      },\n      L1: {\n        trigger: {\n          x: 12,\n          y: 12\n        },\n        spawn: {\n          x: 63,\n          y: 19\n        },\n        camp: {\n          x: 38,\n          y: 28\n        }\n      },\n      H2: {\n        trigger: {\n          x: 22,\n          y: 22\n        },\n        spawn: {\n          x: 15,\n          y: 58\n        },\n        camp: {\n          x: 37,\n          y: 47\n        }\n      },\n      L2: {\n        trigger: {\n          x: 28,\n          y: 28\n        },\n        spawn: {\n          x: 68,\n          y: 40\n        },\n        camp: {\n          x: 48,\n          y: 46\n        }\n      }\n    };\n    opts = [[p.H0, p.H1, p.L2, p.L2], [p.L0, p.L1, p.H2, p.H2], [p.H0, p.L1, p.H2, p.H2], [p.L0, p.H1, p.L2, p.H2]];\n    this.waves = opts[this.world.rand.rand(opts.length)];\n    return this.wave = 0;\n  };\n\n  SarvenRoadReferee.prototype.spawnMinions = function() {\n    var buildType, hero, minion, wave;\n    if (this.wave >= this.waves.length) {\n      return;\n    }\n    wave = this.waves[this.wave];\n    hero = this.world.getThangByID('Hero Placeholder');\n    if (hero.pos.x > wave.trigger.x && hero.pos.y > wave.trigger.y) {\n      buildType = this.world.rand.randf() < 0.5 ? 'ogre-scout-m' : 'ogre-scout-f';\n      this.buildXY(buildType, wave.spawn.x, wave.spawn.y);\n      minion = this.performBuild();\n      minion.reachedCamp = false;\n      minion.campPoint = wave.camp;\n      minion.move(minion.campPoint);\n      return this.wave++;\n    }\n  };\n\n  SarvenRoadReferee.prototype.controlMinions = function() {\n    var hero, minion, _i, _len, _ref1, _results;\n    hero = this.world.getThangByID('Hero Placeholder');\n    _ref1 = this.built;\n    _results = [];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      minion = _ref1[_i];\n      if (!minion.campPoint) {\n        continue;\n      }\n      if (minion.distanceTo(minion.campPoint) < 3) {\n        minion.move(minion.campPoint);\n      } else {\n        minion.reachedCamp = true;\n      }\n      if (minion.reachedCamp && minion.canSee(hero)) {\n        _results.push(minion.attack(hero));\n      } else {\n        _results.push(void 0);\n      }\n    }\n    return _results;\n  };\n\n  SarvenRoadReferee.prototype.checkSarvenRoadVictory = function() {\n    var t;\n    if (this.wave === this.waves.length && !((function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.built;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.health > 0) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this)).length) {\n      this.setGoalState('ogres-die', 'success');\n    }\n    if (this.world.victory != null) {\n      return;\n    }\n    if (this.getGoalState('get-to-oasis') !== 'success') {\n      return;\n    }\n    if (this.getGoalState('ogres-die') === 'success') {\n      return this.world.endWorld(true, 1);\n    }\n  };\n\n  return SarvenRoadReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "548c86420ffdc235e80ef04f",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "This Component makes the Thang referee Sarven Road.",
	"dependencies": [
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		}
	],
	"commitMessage": "You now have to defeat the ogres.",
	"parent": "54909522b30e9eb7027fe220",
	"created": "2015-02-04T23:33:55.195Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 5,
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