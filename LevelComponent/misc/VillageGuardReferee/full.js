{
	"_id": "55bbd734a08007a5795ab638",
	"searchStrings": "village guard referee v vi vil vill villa villag village villageg villagegu villagegua villageguar villageguard villageguardr villageguardre villageguardref villageguardrefe villageguardrefer",
	"index": true,
	"slug": "villageguardreferee",
	"name": "VillageGuardReferee",
	"js": "var VillageGuardReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nVillageGuardReferee = (function(_super) {\n  __extends(VillageGuardReferee, _super);\n\n  function VillageGuardReferee() {\n    _ref = VillageGuardReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  VillageGuardReferee.className = 'VillageGuardReferee';\n\n  VillageGuardReferee.prototype.chooseAction = function() {\n    var heroSpeedFactor, t;\n    if (!this.villageSetUp) {\n      this.setUpVillage();\n    }\n    t = this.world.age;\n    if (this.lastSpawnTime == null) {\n      this.lastSpawnTime = -2.5;\n    }\n    heroSpeedFactor = this.world.getThangByID('Hero Placeholder').maxSpeed / 6;\n    if (t < 25 && ((t - this.lastSpawnTime > (1 + 5 / heroSpeedFactor)) || ((t - this.lastSpawnTime > 2) && this.heroIsNearCheckpoint()))) {\n      this.spawnSomething();\n    }\n    return this.checkVillageVictory();\n  };\n\n  VillageGuardReferee.prototype.setUpVillage = function() {\n    this.villageSetUp = true;\n    this.spawnLocationMap = {\n      left: {\n        x: 13,\n        y: 34\n      },\n      right: {\n        x: 82,\n        y: 31\n      }\n    };\n    this.spawnLocations = _.values(this.spawnLocationMap);\n    this.checkpointLocationMap = {\n      left: {\n        x: 35,\n        y: 34\n      },\n      right: {\n        x: 60,\n        y: 31\n      }\n    };\n    return this.checkpointLocations = _.values(this.checkpointLocationMap);\n  };\n\n  VillageGuardReferee.prototype.spawnSomething = function() {\n    var buildType, buildTypes, enemy, pos, thang, _ref1, _ref2;\n    buildTypes = ['ogre-munchkin-f', 'ogre-munchkin-m', 'peasant-m', 'peasant-f'];\n    buildType = buildTypes[this.world.rand.rand(buildTypes.length)];\n    if ((_ref1 = this.built.length) === 0 || _ref1 === 4) {\n      buildType = 'ogre-munchkin-f';\n    } else if ((_ref2 = this.built.length) === 1 || _ref2 === 5) {\n      buildType = 'ogre-munchkin-m';\n    } else if (this.built.length === 2) {\n      buildType = 'peasant-m';\n    } else if (this.built.length === 3) {\n      buildType = 'peasant-f';\n    }\n    pos = this.spawnLocations[this.built.length % this.spawnLocations.length];\n    this.buildXY(buildType, pos.x, pos.y);\n    thang = this.performBuild();\n    if (/peasant/.test(buildType)) {\n      thang.setTargetPos({\n        x: 35 + 9 * this.world.rand.randf(),\n        y: 38 + 8 * this.world.rand.randf()\n      });\n      thang.setAction('move');\n    } else if (enemy = thang.getNearestEnemy()) {\n      thang.attack(enemy);\n    }\n    console.log('Built', buildType, thang.id, 'at', thang.pos, 'at time', this.world.age);\n    return this.lastSpawnTime = this.world.age;\n  };\n\n  VillageGuardReferee.prototype.heroIsNearCheckpoint = function() {\n    var checkpoint, hero;\n    hero = this.world.getThangByID('Hero Placeholder');\n    checkpoint = this.checkpointLocations[this.built.length % this.checkpointLocations.length];\n    return hero.distance(checkpoint) < 6;\n  };\n\n  VillageGuardReferee.prototype.checkVillageVictory = function() {\n    var humansSurviving, ogresSurviving, t;\n    humansSurviving = !((function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.team === 'humans' && t.health <= 0) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this)).length;\n    ogresSurviving = ((function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.team === 'ogres' && t.health > 0) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this)).length > 1;\n    if (!humansSurviving) {\n      this.setGoalState('humans-survive', 'failure');\n      if (ogresSurviving) {\n        this.setGoalState('ogres-die', 'failure');\n      }\n      return this.world.endWorld(true, 3);\n    } else if (this.world.age > 29) {\n      this.setGoalState('humans-survive', 'success');\n      if (!ogresSurviving) {\n        this.setGoalState('ogres-die', 'success');\n      }\n      return this.world.endWorld(true, 1);\n    }\n  };\n\n  return VillageGuardReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "546e93a1a4b7840000ee92de",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Fixed a case for if we spawn a munchkin and all the humans it should be able to see are dead.",
	"parent": "54adb90b3a75199f0d4cbab8",
	"description": "This Component makes the Thang spawn munchkins for the Village Guard level.",
	"dependencies": [
		{
			"original": "52d9a6773cf02dcf26000dc4",
			"majorVersion": 0
		}
	],
	"created": "2015-07-31T20:14:44.103Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 6,
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