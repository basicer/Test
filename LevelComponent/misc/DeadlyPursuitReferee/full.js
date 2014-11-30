{
	"_id": "547ba7a144079500003ec577",
	"searchStrings": "deadly pursuit referee d de dea dead deadl deadly deadlyp deadlypu deadlypur deadlypurs deadlypursu deadlypursui deadlypursuit deadlypursuitr deadlypursuitre deadlypursuitref deadlypursuitrefe deadlypursuitrefer",
	"index": true,
	"slug": "deadlypursuitreferee",
	"name": "DeadlyPursuitReferee",
	"js": "var DeadlyPursuitReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nDeadlyPursuitReferee = (function(_super) {\n  __extends(DeadlyPursuitReferee, _super);\n\n  function DeadlyPursuitReferee() {\n    _ref = DeadlyPursuitReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  DeadlyPursuitReferee.className = 'DeadlyPursuitReferee';\n\n  DeadlyPursuitReferee.prototype.chooseAction = function() {\n    var t;\n    if (!this.deadlyPursuitSetUp) {\n      this.setUpDeadlyPursuit();\n    }\n    this.spawnCoin();\n    t = this.world.age;\n    this.spawnOgre();\n    this.controlMinions();\n    return this.checkDeadlyPursuitVictory();\n  };\n\n  DeadlyPursuitReferee.prototype.setUpDeadlyPursuit = function() {\n    this.deadlyPursuitSetUp = true;\n    this.spawnLocations = [\n      {\n        x: 26,\n        y: 0\n      }, {\n        x: 36,\n        y: 135\n      }, {\n        x: 41,\n        y: 0\n      }, {\n        x: 52,\n        y: 135\n      }, {\n        x: 56,\n        y: 0\n      }, {\n        x: 67,\n        y: 135\n      }, {\n        x: 72,\n        y: 0\n      }, {\n        x: 83,\n        y: 135\n      }, {\n        x: 88,\n        y: 0\n      }, {\n        x: 99,\n        y: 135\n      }, {\n        x: 105,\n        y: 0\n      }, {\n        x: 115,\n        y: 135\n      }, {\n        x: 123,\n        y: 0\n      }\n    ];\n    return this.delayedSpawns = [];\n  };\n\n  DeadlyPursuitReferee.prototype.spawnCoin = function() {\n    var buildType, built, n, r, spawnChance, spawnChances, type, _i, _len, _ref1, _ref2;\n    if (this.world.rand.randf() < 0.5) {\n      return;\n    }\n    if (((_ref1 = this.built) != null ? _ref1.length : void 0) && this.built[this.built.length - 1].pos.x > 154) {\n      return;\n    }\n    spawnChances = [[0, 'bronze-coin'], [65, 'silver-coin'], [85, 'gold-coin']];\n    r = this.world.rand.randf();\n    n = 100 * Math.pow(r, 20 / (this.world.age + 1));\n    for (_i = 0, _len = spawnChances.length; _i < _len; _i++) {\n      _ref2 = spawnChances[_i], spawnChance = _ref2[0], type = _ref2[1];\n      if (n >= spawnChance) {\n        buildType = type;\n      } else {\n        break;\n      }\n    }\n    this.build(buildType);\n    built = this.performBuild();\n    built.pos.x = Math.min(155, 21 + this.world.frames.length / 2 + (-0.5 + this.world.rand.randf()) * 2);\n    built.pos.y = 66 + 8 * Math.sin(this.world.frames.length * Math.PI / 30) + (-0.5 + this.world.rand.randf()) * 2;\n    built.addTrackedProperties(['pos', 'Vector']);\n    return built.keepTrackedProperty('pos');\n  };\n\n  DeadlyPursuitReferee.prototype.spawnOgre = function() {\n    var buildType, hero, i, n, nOgres, spawn, spawnChance, spawnChances, spawnDelay, spawnLocation, thang, type, _i, _j, _k, _len, _len1, _ref1, _ref2, _results;\n    hero = this.world.getThangByID('Hero Placeholder');\n    _ref1 = this.delayedSpawns;\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      spawn = _ref1[_i];\n      if (!(!spawn.spawned)) {\n        continue;\n      }\n      spawn.delay -= this.world.dt;\n      if (spawn.delay <= 0) {\n        spawn.spawned = true;\n        this.buildXY(spawn.buildType, spawn.pos.x, spawn.pos.y);\n        thang = this.performBuild();\n        thang.attack(hero);\n      }\n    }\n    spawnLocation = this.spawnLocations[0];\n    if (!(spawnLocation && hero.pos.x > spawnLocation.x + 20)) {\n      return;\n    }\n    this.spawnLocations.shift();\n    if (this.spawnLocations.length < 12 && this.world.rand.randf() < 0.5) {\n      return;\n    }\n    this.spawnLocations.shift();\n    nOgres = 1 + this.world.rand.rand(3);\n    _results = [];\n    for (i = _j = 0; 0 <= nOgres ? _j < nOgres : _j > nOgres; i = 0 <= nOgres ? ++_j : --_j) {\n      spawnChances = [[0, 'ogre-thrower'], [50, 'ogre-m'], [75, 'ogre-shaman']];\n      n = this.world.rand.rand(100);\n      for (_k = 0, _len1 = spawnChances.length; _k < _len1; _k++) {\n        _ref2 = spawnChances[_k], spawnChance = _ref2[0], type = _ref2[1];\n        if (n >= spawnChance) {\n          buildType = type;\n        } else {\n          break;\n        }\n      }\n      if (i === 0) {\n        buildType = 'ogre-m';\n      }\n      if (i === 2 && buildType === 'ogre-m') {\n        buildType = 'ogre-shaman';\n      }\n      spawnDelay = {\n        'ogre-thrower': 5.25,\n        'ogre-m': 0,\n        'ogre-shaman': 5\n      }[buildType];\n      if (spawnDelay) {\n        _results.push(this.delayedSpawns.push({\n          buildType: buildType,\n          pos: spawnLocation,\n          delay: spawnDelay\n        }));\n      } else {\n        this.buildXY(buildType, spawnLocation.x, spawnLocation.y);\n        _results.push(thang = this.performBuild());\n      }\n    }\n    return _results;\n  };\n\n  DeadlyPursuitReferee.prototype.controlMinions = function() {\n    var hero, ogre, _i, _len, _ref1, _results;\n    hero = this.world.getThangByID('Hero Placeholder');\n    _ref1 = this.built;\n    _results = [];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      ogre = _ref1[_i];\n      if (ogre.health > 0) {\n        if (ogre.pos.y < 55) {\n          _results.push(ogre.move({\n            x: ogre.pos.x,\n            y: 58\n          }));\n        } else if (ogre.pos.y > 78) {\n          _results.push(ogre.move({\n            x: ogre.pos.x,\n            y: 75\n          }));\n        } else {\n          _results.push(ogre.attack(hero));\n        }\n      }\n    }\n    return _results;\n  };\n\n  DeadlyPursuitReferee.prototype.checkDeadlyPursuitVictory = function() {\n    var coinsLeft, ogresSurviving, t;\n    if (this.victoryChecked) {\n      return;\n    }\n    if (this.world.age < 20) {\n      return;\n    }\n    ogresSurviving = ((function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.team === 'ogres' && t.health > 0) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this)).length;\n    coinsLeft = this.world.getSystem('Inventory').collectables.length;\n    if ((!coinsLeft && !ogresSurviving) || this.world.age > 119) {\n      this.victoryChecked = true;\n      if (!coinsLeft) {\n        this.setGoalState('collect-coins', 'success');\n      }\n      if (!ogresSurviving) {\n        this.setGoalState('ogres-die', 'success');\n      }\n      return this.world.endWorld(true, 1);\n    }\n  };\n\n  return DeadlyPursuitReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "5469015b37600b40e0e09c2c",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "This Component makes the Thang spawn coins and ogres for the Deadly Pursuit level.",
	"dependencies": [
		{
			"original": "52d9a6773cf02dcf26000dc4",
			"majorVersion": 0
		}
	],
	"commitMessage": "Made it easier by not letting ranged units attack until the get to the main corridor.",
	"parent": "5472779210ce28b807436aac",
	"created": "2014-11-30T23:26:25.464Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 7,
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