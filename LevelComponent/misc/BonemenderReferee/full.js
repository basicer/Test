{
	"_id": "54755448dac1d040056320a8",
	"searchStrings": "bonemender referee b bo bon bone bonem boneme bonemen bonemend bonemende bonemender bonemenderr bonemenderre bonemenderref bonemenderrefe bonemenderrefer",
	"index": true,
	"slug": "bonemenderreferee",
	"name": "BonemenderReferee",
	"js": "var BonemenderReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nBonemenderReferee = (function(_super) {\n  __extends(BonemenderReferee, _super);\n\n  function BonemenderReferee() {\n    _ref = BonemenderReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  BonemenderReferee.className = 'BonemenderReferee';\n\n  BonemenderReferee.prototype.chooseAction = function() {\n    var soldierID, t, wave, _i, _len, _ref1;\n    if (!this.bonemenderSetUp) {\n      this.setUpBonemender();\n    }\n    t = this.world.age;\n    wave = this.waves[0];\n    if (wave && t >= wave.time) {\n      this.spawnWave(wave);\n      this.waves.shift();\n    }\n    _ref1 = ['Bernard', 'Chandra'];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      soldierID = _ref1[_i];\n      this.controlSoldier(this.world.getThangByID(soldierID));\n    }\n    return this.checkBonemenderVictory();\n  };\n\n  BonemenderReferee.prototype.setUpBonemender = function() {\n    this.bonemenderSetUp = true;\n    this.spawnLocationMap = {\n      top: {\n        x: 43,\n        y: 58\n      },\n      left: {\n        x: 3,\n        y: 34\n      },\n      bottom: {\n        x: 43,\n        y: 12\n      }\n    };\n    this.spawnLocations = _.values(this.spawnLocationMap);\n    this.checkpointLocationMap = {\n      top: {\n        x: 43,\n        y: 48\n      },\n      left: {\n        x: 43,\n        y: 35\n      },\n      bottom: {\n        x: 43,\n        y: 22\n      }\n    };\n    this.checkpointLocations = _.values(this.checkpointLocationMap);\n    return this.waves = [\n      {\n        time: 0,\n        location: 'top',\n        ogres: ['MT']\n      }, {\n        time: 10,\n        location: 'bottom',\n        ogres: ['MMT']\n      }, {\n        time: 20,\n        location: 'left',\n        ogres: ['MM']\n      }, {\n        time: 30,\n        location: 'top',\n        ogres: ['TT', 'MMT']\n      }, {\n        time: 40,\n        location: 'bottom',\n        ogres: ['MMMM', 'MMT']\n      }, {\n        time: 50,\n        location: 'top',\n        ogres: ['O']\n      }\n    ];\n  };\n\n  BonemenderReferee.prototype.spawnWave = function(wave) {\n    var buildType, buildTypeChoices, buildTypes, checkpointPos, choices, key, ogreKeys, spawnPos, thang, _i, _len, _results;\n    ogreKeys = wave.ogres[this.world.rand.rand(wave.ogres.length)];\n    buildTypeChoices = (function() {\n      var _i, _len, _results;\n      _results = [];\n      for (_i = 0, _len = ogreKeys.length; _i < _len; _i++) {\n        key = ogreKeys[_i];\n        _results.push({\n          M: ['ogre-munchkin-f', 'ogre-munchkin-m'],\n          T: ['ogre-thrower'],\n          O: ['ogre-m']\n        }[key]);\n      }\n      return _results;\n    })();\n    buildTypes = (function() {\n      var _i, _len, _results;\n      _results = [];\n      for (_i = 0, _len = buildTypeChoices.length; _i < _len; _i++) {\n        choices = buildTypeChoices[_i];\n        _results.push(choices[this.world.rand.rand(choices.length)]);\n      }\n      return _results;\n    }).call(this);\n    _results = [];\n    for (_i = 0, _len = buildTypes.length; _i < _len; _i++) {\n      buildType = buildTypes[_i];\n      spawnPos = this.spawnLocationMap[wave.location];\n      checkpointPos = this.checkpointLocationMap[wave.location];\n      this.buildXY(buildType, spawnPos.x + 3 * (-0.5 + this.world.rand.randf()), spawnPos.y + 1.5 * (-0.5 + this.world.rand.randf()));\n      thang = this.performBuild();\n      _results.push(thang.attack(thang.getNearestEnemy()));\n    }\n    return _results;\n  };\n\n  BonemenderReferee.prototype.controlSoldier = function(soldier) {\n    var bigOgre, checkpointPos, enemies, hero, otherSoldier, _ref1,\n      _this = this;\n    hero = this.world.getThangByID('Hero Placeholder');\n    checkpointPos = {\n      Bernard: this.checkpointLocationMap.top,\n      Chandra: this.checkpointLocationMap.bottom\n    }[soldier.id];\n    enemies = soldier.getEnemies();\n    bigOgre = _.find(this.world.thangs, function(thang) {\n      return thang.type === 'ogre' && thang.exists && !thang.dead;\n    });\n    if (bigOgre) {\n      otherSoldier = this.world.getThangByID({\n        Bernard: 'Chandra',\n        Chandra: 'Bernard'\n      }[soldier.id]);\n      if (soldier.distance(otherSoldier) > 4) {\n        soldier.move(otherSoldier.pos);\n        if (soldier.distance(bigOgre) < otherSoldier.distance(bigOgre)) {\n          return soldier.say(\"Backup!\");\n        } else if ((28 < (_ref1 = soldier.distance(bigOgre)) && _ref1 < 30)) {\n          return soldier.say(\"Hold on!\");\n        }\n      } else {\n        if (soldier.id === 'Chandra' && soldier.distance(bigOgre) > 5) {\n          soldier.say(\"Stop him!\");\n        }\n        return soldier.attack(bigOgre);\n      }\n    } else if (enemies.length) {\n      return soldier.attack(soldier.getNearestEnemy());\n    } else if (soldier.hasEffect('regen') || soldier.health > 150) {\n      if (soldier.hasEffect('regen') && (!soldier.targetPos || soldier.targetPos.distance(checkpointPos) > 1)) {\n        soldier.say(\"Thanks!\");\n      }\n      return soldier.move(checkpointPos);\n    } else if (soldier.distance(hero) > 10) {\n      soldier.say(\"I need regeneration!\");\n      return soldier.move(hero.pos);\n    } else {\n      soldier.say(\"I need regeneration!\");\n      soldier.setTargetPos(null);\n      return soldier.setAction('idle');\n    }\n  };\n\n  BonemenderReferee.prototype.checkBonemenderVictory = function() {\n    var humansSurviving, ogresSurviving, t;\n    humansSurviving = !((function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.team === 'humans' && t.health <= 0) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this)).length;\n    ogresSurviving = ((function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.team === 'ogres' && t.health > 0) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this)).length;\n    if (!humansSurviving) {\n      this.setGoalState('humans-survive', 'failure');\n      if (ogresSurviving) {\n        this.setGoalState('ogres-die', 'failure');\n      }\n      return this.world.endWorld(true, 3);\n    } else if (this.world.age > 59) {\n      this.setGoalState('humans-survive', 'success');\n      if (!ogresSurviving) {\n        this.setGoalState('ogres-die', 'success');\n      }\n      return this.world.endWorld(true, 1);\n    }\n  };\n\n  return BonemenderReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "5446cac8a887c47508b6f945",
	"original": "5470d355eb739dbc9d240330",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "This Component makes the Thang spawn ogres and control soldiers for the Bonemender level.",
	"dependencies": [
		{
			"original": "52d9a6773cf02dcf26000dc4",
			"majorVersion": 0
		}
	],
	"commitMessage": "Nudge checkpoints.",
	"parent": "5472d408e143d091056294a4",
	"created": "2014-11-26T04:17:12.584Z",
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