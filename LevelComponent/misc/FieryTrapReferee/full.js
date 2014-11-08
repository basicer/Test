{
	"_id": "545e9670e7f60fd6c557609e",
	"searchStrings": "fiery trap referee f fi fie fier fiery fieryt fierytr fierytra fierytrap fierytrapr fierytrapre fierytrapref fierytraprefe fierytraprefer",
	"index": true,
	"slug": "fierytrapreferee",
	"name": "FieryTrapReferee",
	"js": "var FieryTrapReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nFieryTrapReferee = (function(_super) {\n  __extends(FieryTrapReferee, _super);\n\n  function FieryTrapReferee() {\n    _ref = FieryTrapReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  FieryTrapReferee.className = 'FieryTrapReferee';\n\n  FieryTrapReferee.prototype.chooseAction = function() {\n    var t;\n    if (!this.fieryTrapSetUp) {\n      this.setUpFieryTrap();\n    }\n    t = this.world.age;\n    if (this.lastSpawnTime == null) {\n      this.lastSpawnTime = -2.5;\n    }\n    if (t < 39 && ((t - this.lastSpawnTime > 3.5) || ((t - this.lastSpawnTime > 3.0) && this.heroIsNearCheckpoint()))) {\n      this.spawnSomething();\n    }\n    return this.checkFieryTrapVictory();\n  };\n\n  FieryTrapReferee.prototype.setUpFieryTrap = function() {\n    this.fieryTrapSetUp = true;\n    this.spawnLocationMap = {\n      left: {\n        x: 0,\n        y: 34\n      },\n      right: {\n        x: 80,\n        y: 34\n      }\n    };\n    this.spawnLocations = _.values(this.spawnLocationMap);\n    if (this.world.rand.randf() < 0.5) {\n      this.spawnLocations.reverse();\n    }\n    this.checkpoint = {\n      x: 40,\n      y: 34\n    };\n    this.leftPeasant = this.world.getThangByID('Brandy');\n    return this.rightPeasant = this.world.getThangByID('Paps');\n  };\n\n  FieryTrapReferee.prototype.spawnSomething = function() {\n    var buildType, buildTypes, pos, thang, _ref1, _ref2, _ref3;\n    buildTypes = ['ogre-munchkin-m', 'ogre-munchkin-f'];\n    buildType = buildTypes[this.world.rand.rand(buildTypes.length)];\n    if ((_ref1 = this.built.length) === 0 || _ref1 === 1 || _ref1 === 2 || _ref1 === 3) {\n      pos = this.spawnLocations[Math.floor(this.built.length / 2) % this.spawnLocations.length];\n    } else if ((_ref2 = this.built.length) === 7 || _ref2 === 8 || _ref2 === 9) {\n      pos = this.spawnLocations[0];\n    } else if ((_ref3 = this.built.length) === 10 || _ref3 === 11) {\n      pos = this.spawnLocations[1];\n    } else {\n      pos = this.spawnLocations[this.world.rand.rand(this.spawnLocations.length)];\n    }\n    this.buildXY(buildType, pos.x, pos.y);\n    thang = this.performBuild();\n    if (thang.pos.x < 40) {\n      thang.attack(this.leftPeasant);\n    } else {\n      thang.attack(this.rightPeasant);\n    }\n    console.log('Built', buildType, thang.id, 'at', thang.pos, 'at time', this.world.age);\n    return this.lastSpawnTime = this.world.age;\n  };\n\n  FieryTrapReferee.prototype.heroIsNearCheckpoint = function() {\n    var hero;\n    hero = this.world.getThangByID('Hero Placeholder');\n    return hero.distance(this.checkpoint) < 6;\n  };\n\n  FieryTrapReferee.prototype.checkFieryTrapVictory = function() {\n    var humansSurviving, ogresSurviving, t;\n    humansSurviving = !((function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.team === 'humans' && t.health <= 0) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this)).length;\n    ogresSurviving = !((function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.team === 'ogres' && t.health <= 0) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this)).length;\n    if (!humansSurviving) {\n      this.setGoalState('humans-survive', 'failure');\n      if (ogresSurviving) {\n        this.setGoalState('ogres-die', 'failure');\n      }\n      return this.world.endWorld(true, 3);\n    } else if (this.world.age > 44) {\n      this.setGoalState('humans-survive', 'success');\n      if (!ogresSurviving) {\n        this.setGoalState('ogres-die', 'success');\n      }\n      return this.world.endWorld(true, 1);\n    }\n  };\n\n  return FieryTrapReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "5459567931a75d00006ba39b",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Adjusted randomization to be impossible to luckily win at.",
	"parent": "54596aa3f5648eca05d63c68",
	"description": "This Component makes the Thang randomly spawn attacking ogres in the A Fiery Trap level.",
	"codeLanguage": "coffeescript",
	"dependencies": [
		{
			"original": "52d9a6773cf02dcf26000dc4",
			"majorVersion": 0
		},
		{
			"original": "524b457bff92f1f4f8000031",
			"majorVersion": 0
		}
	],
	"created": "2014-11-08T22:17:20.291Z",
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