{
	"_id": "576c1d2f01d8dd2e00941d5a",
	"searchStrings": "drop the flag referee d dr dro drop dropt dropth dropthe dropthef dropthefl dropthefla droptheflag droptheflagr droptheflagre droptheflagref droptheflagrefe droptheflagrefer",
	"index": true,
	"slug": "droptheflagreferee",
	"name": "DropTheFlagReferee",
	"js": "var DropTheFlagReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nDropTheFlagReferee = (function(_super) {\n  __extends(DropTheFlagReferee, _super);\n\n  function DropTheFlagReferee() {\n    _ref = DropTheFlagReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  DropTheFlagReferee.className = 'DropTheFlagReferee';\n\n  DropTheFlagReferee.prototype.chooseAction = function() {\n    var t;\n    t = this.world.age;\n    if (!this.dropTheFlagSetUp) {\n      this.setUpDropTheFlag();\n    }\n    if ((this.world.age + 6) / 2 > (this.built.length / 2) && t < 32) {\n      this.spawnCoin();\n    }\n    if (this.lastSpawnTime == null) {\n      this.lastSpawnTime = -2.5;\n    }\n    if (t < 36 && t - this.lastSpawnTime > 9) {\n      this.spawnOgre();\n    }\n    return this.checkDropTheFlagVictory();\n  };\n\n  DropTheFlagReferee.prototype.setUpDropTheFlag = function() {\n    this.index = 0;\n    this.dropTheFlagSetUp = true;\n    this.spawnLocationMap = {\n      bottom: {\n        x: 94,\n        y: 15\n      },\n      middle: {\n        x: 94,\n        y: 34\n      },\n      top: {\n        x: 94,\n        y: 53\n      }\n    };\n    return this.spawnLocations = _.values(this.spawnLocationMap);\n  };\n\n  DropTheFlagReferee.prototype.spawnCoin = function() {\n    var buildType, built, n, r, spawnChance, spawnChances, type, _i, _len, _ref1;\n    spawnChances = [[0, 'bronze-coin'], [65, 'silver-coin'], [85, 'gold-coin']];\n    r = this.world.rand.randf();\n    n = 100 * Math.pow(r, 20 / (this.world.age + 1));\n    for (_i = 0, _len = spawnChances.length; _i < _len; _i++) {\n      _ref1 = spawnChances[_i], spawnChance = _ref1[0], type = _ref1[1];\n      if (n >= spawnChance) {\n        buildType = type;\n      } else {\n        break;\n      }\n    }\n    this.build(buildType);\n    built = this.performBuild();\n    built.pos.x = 13 + this.world.rand.randf() * 11;\n    built.pos.y = 17 + this.world.rand.randf() * 33;\n    built.addTrackedProperties(['pos', 'Vector']);\n    return built.keepTrackedProperty('pos');\n  };\n\n  DropTheFlagReferee.prototype.spawnOgre = function() {\n    var index, pos, thang;\n    index = this.world.rand.rand(this.spawnLocations.length);\n    while ((this.lastIndex != null) && index === this.lastIndex) {\n      index = this.world.rand.rand(this.spawnLocations.length);\n    }\n    this.lastIndex = index;\n    pos = this.spawnLocations[this.index++ % this.spawnLocations.length];\n    this.buildXY('ogre-m', pos.x, pos.y);\n    thang = this.performBuild();\n    thang.attack(this.world.getThangByID('Hero Placeholder'));\n    return this.lastSpawnTime = this.world.age;\n  };\n\n  DropTheFlagReferee.prototype.checkDropTheFlagVictory = function() {\n    var coinsLeft, ogresSurviving, t;\n    if (this.victoryChecked) {\n      return;\n    }\n    ogresSurviving = ((function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.team === 'ogres' && t.health > 0) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this)).length;\n    coinsLeft = this.world.getSystem('Inventory').collectables.length;\n    if ((!coinsLeft && !ogresSurviving) || this.world.age > 54) {\n      this.victoryChecked = true;\n      if (!coinsLeft) {\n        this.setGoalState('collect-coins', 'success');\n      }\n      if (!ogresSurviving) {\n        this.setGoalState('ogres-die', 'success');\n      }\n      return this.world.endWorld(true, 1);\n    }\n  };\n\n  return DropTheFlagReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "537d01f484c54c6e05c05989",
	"original": "5468ec6637600b40e0e09c06",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "This Component makes the Thang spawn coins and ogres for Drop the Flag.",
	"dependencies": [
		{
			"original": "52d9a6773cf02dcf26000dc4",
			"majorVersion": 0
		}
	],
	"commitMessage": "Lanes will never spawn two ogres in a row, increased the time between waves",
	"parent": "547276d710ce28b807436aaa",
	"created": "2016-06-23T17:32:31.982Z",
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