{
	"_id": "563b7af649d2698505c250df",
	"searchStrings": "thornbush farm referee t th tho thor thorn thornb thornbu thornbus thornbush thornbushf thornbushfa thornbushfar thornbushfarm thornbushfarmr thornbushfarmre thornbushfarmref thornbushfarmrefe thornbushfarmrefer",
	"index": true,
	"slug": "thornbushfarmreferee",
	"name": "ThornbushFarmReferee",
	"js": "var ThornbushFarmReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nThornbushFarmReferee = (function(_super) {\n  __extends(ThornbushFarmReferee, _super);\n\n  function ThornbushFarmReferee() {\n    _ref = ThornbushFarmReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  ThornbushFarmReferee.className = 'ThornbushFarmReferee';\n\n  ThornbushFarmReferee.prototype.chooseAction = function() {\n    var t;\n    if (!this.thornbushSetUp) {\n      this.setUpThornbush();\n    }\n    t = this.world.age;\n    if (this.lastSpawnTime == null) {\n      this.lastSpawnTime = -2.5;\n    }\n    if (t < 39 && ((t - this.lastSpawnTime > 6) || ((t - this.lastSpawnTime > 2.5) && this.heroIsNearCheckpoint()))) {\n      this.spawnSomething();\n    }\n    return this.checkThornbushVictory();\n  };\n\n  ThornbushFarmReferee.prototype.setUpThornbush = function() {\n    var hero;\n    this.thornbushSetUp = true;\n    this.spawnLocationMap = {\n      top: {\n        x: 43,\n        y: 70\n      },\n      left: {\n        x: 3,\n        y: 34\n      },\n      bottom: {\n        x: 43,\n        y: -1\n      }\n    };\n    this.spawnLocations = _.values(this.spawnLocationMap);\n    this.checkpointLocationMap = {\n      top: {\n        x: 43,\n        y: 50\n      },\n      left: {\n        x: 25,\n        y: 34\n      },\n      bottom: {\n        x: 43,\n        y: 20\n      }\n    };\n    this.checkpointLocations = _.values(this.checkpointLocationMap);\n    hero = this.world.getThangByID('Hero Placeholder');\n    return hero.maxSpeed = 8;\n  };\n\n  ThornbushFarmReferee.prototype.spawnSomething = function() {\n    var buildType, buildTypes, pos, thang, _ref1;\n    buildTypes = ['ogre-m', 'ogre-m', 'peasant-m', 'peasant-f'];\n    buildType = buildTypes[this.world.rand.rand(buildTypes.length)];\n    if ((_ref1 = this.built.length) === 0 || _ref1 === 1 || _ref1 === 2) {\n      buildType = 'ogre-m';\n    } else if (this.built.length === 3) {\n      buildType = 'peasant-m';\n    } else if (this.built.length === 5) {\n      buildType = 'peasant-f';\n    }\n    pos = this.spawnLocations[this.built.length % this.spawnLocations.length];\n    this.buildXY(buildType, pos.x, pos.y);\n    thang = this.performBuild();\n    if (/peasant/.test(buildType)) {\n      thang.setTargetPos({\n        x: 47 + 6 * this.world.rand.randf(),\n        y: 30 + 5 * this.world.rand.randf()\n      });\n      thang.setAction('move');\n    } else {\n      thang.attack(thang.getNearestEnemy());\n    }\n    console.log('Built', buildType, thang.id, 'at', thang.pos, 'at time', this.world.age);\n    return this.lastSpawnTime = this.world.age;\n  };\n\n  ThornbushFarmReferee.prototype.heroIsNearCheckpoint = function() {\n    var checkpoint, hero;\n    hero = this.world.getThangByID('Hero Placeholder');\n    checkpoint = this.checkpointLocations[this.built.length % this.checkpointLocations.length];\n    return hero.distance(checkpoint) < 6;\n  };\n\n  ThornbushFarmReferee.prototype.checkThornbushVictory = function() {\n    var humansSurviving, ogresSurviving, t;\n    humansSurviving = !((function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.team === 'humans' && t.health <= 0) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this)).length;\n    ogresSurviving = ((function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.team === 'ogres' && t.health > 0) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this)).length;\n    if (!humansSurviving) {\n      this.setGoalState('humans-survive', 'failure');\n      if (ogresSurviving) {\n        this.setGoalState('ogres-die', 'failure');\n      }\n      return this.world.endWorld(true, 3);\n    } else if (this.world.age > 44) {\n      this.setGoalState('humans-survive', 'success');\n      if (!ogresSurviving) {\n        this.setGoalState('ogres-die', 'success');\n      }\n      return this.world.endWorld(true, 1);\n    }\n  };\n\n  return ThornbushFarmReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "54b1773a75e3055205e5a449",
	"original": "544acf157dbe4a8027d920dc",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "This Component handles the custom logic for the Thornbush Farm level.",
	"dependencies": [
		{
			"original": "52d9a6773cf02dcf26000dc4",
			"majorVersion": 0
		}
	],
	"commitMessage": "fix speed related bug",
	"parent": "5468f34f37600b40e0e09c0b",
	"created": "2015-11-05T15:51:18.237Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 9,
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