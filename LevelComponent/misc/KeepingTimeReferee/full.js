{
	"_id": "55355a56bd143844748cd4cb",
	"searchStrings": "keeping time referee k ke kee keep keepi keepin keeping keepingt keepingti keepingtim keepingtime keepingtimer keepingtimere keepingtimeref keepingtimerefe keepingtimerefer",
	"index": true,
	"slug": "keepingtimereferee",
	"name": "KeepingTimeReferee",
	"js": "var KeepingTimeReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nKeepingTimeReferee = (function(_super) {\n  __extends(KeepingTimeReferee, _super);\n\n  function KeepingTimeReferee() {\n    _ref = KeepingTimeReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  KeepingTimeReferee.className = 'KeepingTimeReferee';\n\n  KeepingTimeReferee.prototype.chooseAction = function() {\n    this.controlRanger();\n    return this.clearDeadPalisades();\n  };\n\n  KeepingTimeReferee.prototype.setUpLevel = function() {\n    var t;\n    this.victoryCoins = false;\n    this.victoryOgres = false;\n    this.victorySurvive = true;\n    this.coinTime = 10;\n    this.raidTime = 30;\n    this.naria = this.world.getThangByID('Naria');\n    this.naria.didAnnounceStart = false;\n    this.naria.didAnnounceCoins = false;\n    this.naria.didAnnounceRaid = false;\n    return this.palisades = (function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.type === 'palisade') {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this);\n  };\n\n  KeepingTimeReferee.prototype.controlRanger = function() {\n    var gold, nSoldiers, thang, troops, _i, _len, _ref1, _results;\n    if (!this.naria.didAnnounceStart) {\n      this.naria.didAnnounceStart = true;\n      this.naria.say('We\\'re under attack!');\n    }\n    if (this.world.age > this.coinTime && !this.naria.didAnnounceCoins) {\n      this.naria.didAnnounceCoins = true;\n      this.naria.say('Grab some coins so we can hire troops!');\n    }\n    if ((28 < (_ref1 = this.world.age) && _ref1 < 30)) {\n      this.naria.move({\n        x: this.naria.pos.x + 10,\n        y: this.naria.pos.y\n      });\n    }\n    if (this.world.age > this.raidTime && !this.naria.didAnnounceRaid) {\n      this.naria.didAnnounceRaid = true;\n      gold = Math.floor(this.hero.gold);\n      nSoldiers = Math.min(16, Math.floor(gold / 20));\n      this.naria.move;\n      this.naria.say(gold + ' gold buys ' + nSoldiers + ' soldiers. Everyone, attack!');\n      troops = (function() {\n        var _i, _len, _ref2, _results;\n        _ref2 = this.world.thangs;\n        _results = [];\n        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {\n          thang = _ref2[_i];\n          if (thang.appearanceDelay && thang.team === 'humans') {\n            _results.push(thang);\n          }\n        }\n        return _results;\n      }).call(this);\n      troops = this.world.rand.shuffle(troops);\n      _results = [];\n      for (_i = 0, _len = troops.length; _i < _len; _i++) {\n        thang = troops[_i];\n        if (--nSoldiers < 0) {\n          thang.exists = false;\n          _results.push(thang.appearanceDelay = 9001);\n        } else {\n          _results.push(void 0);\n        }\n      }\n      return _results;\n    }\n  };\n\n  KeepingTimeReferee.prototype.clearDeadPalisades = function() {\n    var t, _i, _len, _ref1, _results;\n    _ref1 = this.palisades;\n    _results = [];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      t = _ref1[_i];\n      if (t.dead) {\n        _results.push(t.setExists(false));\n      }\n    }\n    return _results;\n  };\n\n  KeepingTimeReferee.prototype.checkVictory = function() {\n    var hero, livingOgres, o;\n    hero = this.world.getThangByID('Hero Placeholder');\n    if (this.naria.health <= 0 || hero.health <= 0) {\n      this.victorySurvive = false;\n    }\n    if (!(this.world.age > this.coinTime)) {\n      return;\n    }\n    if (hero.gold > 0 && !this.victoryCoins) {\n      this.victoryCoins = true;\n      this.setGoalState('collect-coins', 'success');\n    }\n    if (!(this.world.age > this.raidTime)) {\n      return;\n    }\n    livingOgres = (function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        o = _ref1[_i];\n        if (o.team === 'ogres' && o.health > 0) {\n          _results.push(o);\n        }\n      }\n      return _results;\n    }).call(this);\n    if (livingOgres.length === 0 && !this.victoryOgres) {\n      this.victoryOgres = true;\n      this.setGoalState('ogres-die', 'success');\n    }\n    if (this.victorySurvive && this.victoryCoins && this.victoryOgres) {\n      return this.world.endWorld(true, 1);\n    }\n  };\n\n  return KeepingTimeReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "548cf1d70ffdc235e80ef0d3",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Rounded amount of gold Naria calls out.",
	"parent": "549a1325a88ecca974d501f3",
	"description": "This Component makes the Thang o'ermaser the Keeping Time level.",
	"dependencies": [
		{
			"original": "52d9a6773cf02dcf26000dc4",
			"majorVersion": 0
		},
		{
			"original": "54977ce657e90bd1903dea72",
			"majorVersion": 0
		}
	],
	"created": "2015-04-20T19:58:14.410Z",
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