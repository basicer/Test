{
	"_id": "55f04f5008dd4cc550f9358f",
	"searchStrings": "the mighty sand yak referee t th the them themi themig themigh themight themighty themightys themightysa themightysan themightysand themightysandy themightysandya themightysandyak themightysandyakr themightysandyakre themightysandyakref themightysandyakrefe themightysandyakrefer",
	"index": true,
	"slug": "themightysandyakreferee",
	"name": "TheMightySandYakReferee",
	"js": "var TheMightySandYakReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nTheMightySandYakReferee = (function(_super) {\n  __extends(TheMightySandYakReferee, _super);\n\n  function TheMightySandYakReferee() {\n    _ref = TheMightySandYakReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  TheMightySandYakReferee.className = 'TheMightySandYakReferee';\n\n  TheMightySandYakReferee.prototype.chooseAction = function() {\n    if (!this.theMightySandYakSetUp) {\n      this.setUpTheMightySandYak();\n    }\n    this.spawnMinion();\n    this.controlMinions();\n    this.checkDodges();\n    this.checkTheMightySandYakVictory();\n    return this.preventSlide();\n  };\n\n  TheMightySandYakReferee.prototype.setUpTheMightySandYak = function() {\n    var hero;\n    this.theMightySandYakSetUp = true;\n    this.bottomY = 0;\n    this.topY = 60;\n    this.spawnTime = this.world.age + 1;\n    this.dodgeDistance = 10;\n    this.attackDistance = 5;\n    this.yakDodgeGoal = 4;\n    this.yakDodgeTotal = 0;\n    this.yaksDispatchedByX = {};\n    return hero = this.world.getThangByID('Hero Placeholder');\n  };\n\n  TheMightySandYakReferee.prototype.spawnMinion = function() {\n    var hero, thang, yakPos, _ref1;\n    if (this.world.age < this.waveTime) {\n      return;\n    }\n    this.waveTime = this.world.age + (3.5 + 1.0 * this.world.rand.randf());\n    hero = this.world.getThangByID('Hero Placeholder');\n    if (((_ref1 = this.yaksDispatchedByX[Math.round(hero.pos.x)]) != null ? _ref1.health : void 0) > 0) {\n      return;\n    }\n    yakPos = {\n      x: hero.pos.x,\n      y: (this.world.rand.randf() < 0.5 ? this.bottomY - 3 : this.topY + 3)\n    };\n    this.buildXY('sand-yak', yakPos.x, yakPos.y);\n    thang = this.performBuild();\n    thang.move({\n      x: yakPos.x,\n      y: (yakPos.y < 30 ? this.topY + 10 : this.bottomY - 10)\n    });\n    thang.currentSpeedRatio = 0.25 + 0.30 * this.world.rand.randf();\n    thang.scaleFactor = 1.00 + 1.25 * this.world.rand.randf();\n    thang.keepTrackedProperty('scaleFactor');\n    thang.heroEncountered = false;\n    thang.heroDodged = false;\n    return this.yaksDispatchedByX[Math.round(hero.pos.x)] = thang;\n  };\n\n  TheMightySandYakReferee.prototype.controlMinions = function() {\n    var hero, minion, _i, _len, _ref1, _results;\n    hero = this.world.getThangByID('Hero Placeholder');\n    _ref1 = this.built;\n    _results = [];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      minion = _ref1[_i];\n      if (minion.team) {\n        if (!minion.heroEncountered && (minion.pos.y > this.topY + 5 || minion.pos.y < this.bottomY - 5)) {\n          _results.push(minion.setExists(false));\n        } else if ((minion.distanceTo(hero) < this.attackDistance) || minion.hadAttackedHero) {\n          minion.attack(hero);\n          minion.hadAttackedHero = true;\n          _results.push(minion.specificAttackTarget = hero);\n        } else {\n          _results.push(void 0);\n        }\n      }\n    }\n    return _results;\n  };\n\n  TheMightySandYakReferee.prototype.checkDodges = function() {\n    var hero, mdist, minion, _i, _len, _ref1, _results;\n    hero = this.world.getThangByID('Hero Placeholder');\n    _ref1 = this.built;\n    _results = [];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      minion = _ref1[_i];\n      if (!minion.team) {\n        continue;\n      }\n      mdist = minion.distanceTo(hero);\n      if (!minion.heroEncountered) {\n        if (mdist < this.dodgeDistance) {\n          minion.heroEncountered = true;\n          console.log('encounter ' + minion + ' ' + mdist);\n        }\n      }\n      if (minion.heroEncountered && !minion.heroDodged) {\n        if (mdist > this.dodgeDistance && !minion.hadAttackedHero) {\n          minion.heroDodged = true;\n          console.log('dodge ' + minion + ' ' + mdist);\n          _results.push(this.yakDodgeTotal++);\n        } else {\n          _results.push(void 0);\n        }\n      } else {\n        _results.push(void 0);\n      }\n    }\n    return _results;\n  };\n\n  TheMightySandYakReferee.prototype.checkTheMightySandYakVictory = function() {\n    var hero, t, yaksAttacking;\n    if (this.victoryChecked) {\n      return;\n    }\n    hero = this.world.getThangByID('Hero Placeholder');\n    yaksAttacking = ((function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.built;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.exists && t.health > 0 && t.hadAttackedHero) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this)).length;\n    if (this.yakDodgeTotal >= this.yakDodgeGoal && !yaksAttacking) {\n      this.victoryChecked = true;\n      this.setGoalState('dodge-yaks', 'success');\n      return this.world.endWorld(true, 1);\n    }\n  };\n\n  TheMightySandYakReferee.prototype.preventSlide = function() {\n    var hero;\n    hero = this.world.getThangByID('Hero Placeholder');\n    if (hero.action === 'idle') {\n      return hero.brake();\n    }\n  };\n\n  return TheMightySandYakReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "5480ba0c1bf0b10000711c61",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "This Component makes the Thang spawn yaks. Mighty yaks. In the sand.",
	"dependencies": [
		{
			"original": "52d9a6773cf02dcf26000dc4",
			"majorVersion": 0
		}
	],
	"commitMessage": "Making hero brake when idle so that fast heroes don't slide into the edge.",
	"parent": "54b96af325bb74a745812dc2",
	"created": "2015-09-09T15:25:04.632Z",
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