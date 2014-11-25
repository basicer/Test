{
	"_id": "547502971024b93f0c128158",
	"searchStrings": "peasant protection referee p pe pea peas peasa peasan peasant peasantp peasantpr peasantpro peasantprot peasantprote peasantprotec peasantprotect peasantprotecti peasantprotectio peasantprotection peasantprotectionr peasantprotectionre peasantprotectionref peasantprotectionrefe peasantprotectionrefer",
	"index": true,
	"slug": "peasantprotectionreferee",
	"name": "PeasantProtectionReferee",
	"js": "var PeasantProtectionReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nPeasantProtectionReferee = (function(_super) {\n  __extends(PeasantProtectionReferee, _super);\n\n  function PeasantProtectionReferee() {\n    _ref = PeasantProtectionReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  PeasantProtectionReferee.className = 'PeasantProtectionReferee';\n\n  PeasantProtectionReferee.prototype.chooseAction = function() {\n    var ogre, t, _i, _len, _ref1;\n    if (!this.peasantProtectionSetUp) {\n      this.setUpPeasantProtection();\n    }\n    t = this.world.age;\n    if (this.lastSpawnTime == null) {\n      this.lastSpawnTime = -2.5;\n    }\n    if (t < 39 && ((t - this.lastSpawnTime > 1.8) || ((t - this.lastSpawnTime > 1.1) && !this.heroIsNearCheckpoint()))) {\n      this.spawnSomething();\n    }\n    _ref1 = this.built;\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      ogre = _ref1[_i];\n      if (ogre.health > 0) {\n        ogre.attack(this.peasant);\n      }\n    }\n    if (t > 40) {\n      return this.checkPeasantProtectionVictory();\n    }\n  };\n\n  PeasantProtectionReferee.prototype.setUpPeasantProtection = function() {\n    this.peasantProtectionSetUp = true;\n    this.spawnLocationMap = {\n      left: {\n        x: 6,\n        y: 36\n      },\n      right: {\n        x: 74,\n        y: 36\n      }\n    };\n    this.spawnLocations = _.values(this.spawnLocationMap);\n    if (this.world.rand.randf() < 0.5) {\n      this.spawnLocations.reverse();\n    }\n    this.checkpoint = {\n      x: 40,\n      y: 36\n    };\n    return this.peasant = this.world.getThangByID('Victor');\n  };\n\n  PeasantProtectionReferee.prototype.spawnSomething = function() {\n    var buildType, buildTypes, pos, thang, _ref1, _ref2, _ref3;\n    buildTypes = ['ogre-munchkin-m', 'ogre-munchkin-f'];\n    buildType = buildTypes[this.world.rand.rand(buildTypes.length)];\n    if ((_ref1 = this.built.length) === 0 || _ref1 === 1 || _ref1 === 2 || _ref1 === 3) {\n      pos = this.spawnLocations[Math.floor(this.built.length / 2) % this.spawnLocations.length];\n    } else if ((_ref2 = this.built.length) === 7 || _ref2 === 8 || _ref2 === 9) {\n      pos = this.spawnLocations[0];\n    } else if ((_ref3 = this.built.length) === 10 || _ref3 === 11) {\n      pos = this.spawnLocations[1];\n    } else {\n      pos = this.spawnLocations[this.world.rand.rand(this.spawnLocations.length)];\n    }\n    this.buildXY(buildType, pos.x, pos.y);\n    thang = this.performBuild();\n    thang.attack(this.peasant);\n    thang.specificAttackTarget = this.peasant;\n    return this.lastSpawnTime = this.world.age;\n  };\n\n  PeasantProtectionReferee.prototype.heroIsNearCheckpoint = function() {\n    var hero;\n    hero = this.world.getThangByID('Hero Placeholder');\n    return hero.distance(this.checkpoint) < 10;\n  };\n\n  PeasantProtectionReferee.prototype.checkPeasantProtectionVictory = function() {\n    var humansSurviving, ogresSurviving, t;\n    if (this.victoryChecked) {\n      return;\n    }\n    humansSurviving = !((function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.team === 'humans' && t.health <= 0) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this)).length;\n    ogresSurviving = !((function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.team === 'ogres' && t.health <= 0) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this)).length;\n    if (!humansSurviving) {\n      this.setGoalState('humans-survive', 'failure');\n      if (ogresSurviving) {\n        this.setGoalState('ogres-die', 'failure');\n      }\n      this.world.endWorld(true, 3);\n      return this.victoryChecked = true;\n    } else if (this.world.age > 44) {\n      this.setGoalState('humans-survive', 'success');\n      if (!ogresSurviving) {\n        this.setGoalState('ogres-die', 'success');\n      }\n      this.world.endWorld(true, 1);\n      return this.victoryChecked = true;\n    }\n  };\n\n  return PeasantProtectionReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "51538fdb812dd9af02000001",
	"original": "545ec9a1e7f60fd6c55760ef",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "This Component makes the Thang spawn ogres in the Peasant Protection level.",
	"dependencies": [
		{
			"original": "52d9a6773cf02dcf26000dc4",
			"majorVersion": 0
		}
	],
	"commitMessage": "adjusting the spawner timing and munchking y coordinate randomization (removing rando)",
	"parent": "547500ec1024b93f0c128156",
	"created": "2014-11-25T22:28:39.146Z",
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