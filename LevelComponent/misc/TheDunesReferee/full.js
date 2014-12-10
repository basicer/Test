{
	"_id": "54879b97f7dcd4000054d898",
	"searchStrings": "the dunes referee t th the thed thedu thedun thedune thedunes thedunesr thedunesre thedunesref thedunesrefe thedunesrefer",
	"index": true,
	"slug": "thedunesreferee",
	"name": "TheDunesReferee",
	"js": "var TheDunesReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nTheDunesReferee = (function(_super) {\n  __extends(TheDunesReferee, _super);\n\n  function TheDunesReferee() {\n    _ref = TheDunesReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  TheDunesReferee.className = 'TheDunesReferee';\n\n  TheDunesReferee.prototype.chooseAction = function() {\n    if (!this.theDunesSetUp) {\n      this.setUpTheDunes();\n    }\n    this.spawnCoin();\n    this.spawnMinion();\n    this.controlMinions();\n    return this.checkTheDunesVictory();\n  };\n\n  TheDunesReferee.prototype.setUpTheDunes = function() {\n    var i, j, t, _i, _ref1;\n    this.theDunesSetUp = true;\n    this.coinBounds = {\n      x: 14,\n      y: 8,\n      width: 50,\n      height: 25\n    };\n    this.minionStart = {\n      x: 0,\n      y: 40\n    };\n    this.nextWaveTime = 1;\n    this.waveTimeMin = 5;\n    this.waveTimeMax = 7;\n    this.spawns = ['ogre-thrower', 'ogre-thrower', 'ogre-thrower', 'burl', 'sand-yak', 'sand-yak'];\n    for (i = _i = _ref1 = this.spawns.length - 1; _ref1 <= 1 ? _i <= 1 : _i >= 1; i = _ref1 <= 1 ? ++_i : --_i) {\n      j = Math.floor(this.world.rand.randf() * (i - 1));\n      t = this.spawns[j];\n      this.spawns[j] = this.spawns[i];\n      this.spawns[i] = t;\n    }\n    return this.spawns.push('ogre-m');\n  };\n\n  TheDunesReferee.prototype.spawnCoin = function() {\n    var buildType, built, maxYOfs, n, r, spawnChance, spawnChances, type, xOfs, _i, _len, _ref1;\n    if (this.world.rand.randf() > 2 * this.world.dt) {\n      return;\n    }\n    if (this.world.age > 30) {\n      return;\n    }\n    spawnChances = [[0, 'bronze-coin'], [65, 'silver-coin'], [85, 'gold-coin']];\n    r = this.world.rand.randf();\n    n = 100 * Math.pow(r, 20 / (this.world.age + 1));\n    for (_i = 0, _len = spawnChances.length; _i < _len; _i++) {\n      _ref1 = spawnChances[_i], spawnChance = _ref1[0], type = _ref1[1];\n      if (n >= spawnChance) {\n        buildType = type;\n      } else {\n        break;\n      }\n    }\n    this.build(buildType);\n    built = this.performBuild();\n    xOfs = this.world.rand.randf() * this.coinBounds.width;\n    if (xOfs < this.coinBounds.width / 2) {\n      maxYOfs = xOfs;\n    } else {\n      maxYOfs = this.coinBounds.width - xOfs;\n    }\n    built.pos.x = this.coinBounds.x + xOfs;\n    built.pos.y = this.coinBounds.y + this.world.rand.randf() * maxYOfs;\n    built.addTrackedProperties(['pos', 'Vector']);\n    return built.keepTrackedProperty('pos');\n  };\n\n  TheDunesReferee.prototype.spawnMinion = function() {\n    var buildType, thang;\n    if (this.world.age < this.nextWaveTime) {\n      return;\n    }\n    if (this.spawns.length === 0) {\n      return;\n    }\n    this.nextWaveTime = this.world.age + (this.waveTimeMin + this.world.rand.randf() * (this.waveTimeMax - this.waveTimeMin));\n    buildType = this.spawns.shift();\n    this.buildXY(buildType, this.minionStart.x, this.minionStart.y + 4 * (0.5 - this.world.rand.randf()));\n    thang = this.performBuild();\n    thang.move({\n      x: thang.pos.x + 100,\n      y: thang.pos.y\n    });\n    if (thang.type === 'sand-yak') {\n      thang.currentSpeedRatio = 0.25 + 0.5 * this.world.rand.randf();\n      thang.scaleFactor = 0.25 + 1.5 * this.world.rand.randf();\n      return thang.keepTrackedProperty('scaleFactor');\n    }\n  };\n\n  TheDunesReferee.prototype.controlMinions = function() {\n    var hero, minion, _i, _len, _ref1, _results;\n    hero = this.world.getThangByID('Hero Placeholder');\n    _ref1 = this.built;\n    _results = [];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      minion = _ref1[_i];\n      if (minion.team) {\n        if (minion.pos.x > 82) {\n          _results.push(minion.setExists(false));\n        } else if (hero.dead) {\n          _results.push(minion.move({\n            x: this.minionStart.x + 100,\n            y: this.minionStart.y\n          }));\n        } else if (minion.team === 'ogres' && minion.canSee(hero) || minion.hadSeenHero) {\n          minion.hadSeenHero = true;\n          if (minion.type === 'thrower' && minion.pos.x < 32) {\n            _results.push(minion.move({\n              x: 32,\n              y: minion.pos.y\n            }));\n          } else {\n            minion.attack(hero);\n            _results.push(minion.specificAttackTarget = hero);\n          }\n        } else {\n          _results.push(void 0);\n        }\n      }\n    }\n    return _results;\n  };\n\n  TheDunesReferee.prototype.checkTheDunesVictory = function() {\n    var coinsLeft, ogresSurviving, t;\n    if (this.victoryChecked) {\n      return;\n    }\n    if (this.world.age < 30) {\n      return;\n    }\n    ogresSurviving = ((function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.team === 'ogres' && t.exists && t.health > 0) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this)).length;\n    coinsLeft = this.world.getSystem('Inventory').collectables.length;\n    if ((!coinsLeft && !ogresSurviving) || this.world.age > 59) {\n      this.victoryChecked = true;\n      if (!coinsLeft) {\n        this.setGoalState('collect-coins', 'success');\n      }\n      if (!ogresSurviving) {\n        this.setGoalState('ogres-die', 'success');\n      }\n      return this.world.endWorld(true, 1);\n    }\n  };\n\n  return TheDunesReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "5480b77d1bf0b10000711c5b",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Switched to a triangle shape for coin area to help with enemy line of sight problems.",
	"parent": "54866a9bea5cbfb906cd190a",
	"description": "This Component makes the Thang spawn stuff for The Dunes.",
	"dependencies": [
		{
			"original": "52d9a6773cf02dcf26000dc4",
			"majorVersion": 0
		}
	],
	"created": "2014-12-10T01:02:15.201Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 8,
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