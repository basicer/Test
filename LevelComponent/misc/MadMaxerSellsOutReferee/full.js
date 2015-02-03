{
	"_id": "54d11b0a576083c50b6cffa7",
	"searchStrings": "mad maxer sells out referee m ma mad madm madma madmax madmaxe madmaxer madmaxers madmaxerse madmaxersel madmaxersell madmaxersells madmaxersellso madmaxersellsou madmaxersellsout madmaxersellsoutr madmaxersellsoutre madmaxersellsoutref madmaxersellsoutrefe madmaxersellsoutrefer",
	"index": true,
	"slug": "madmaxersellsoutreferee",
	"name": "MadMaxerSellsOutReferee",
	"js": "var MadMaxerSellsOutReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nMadMaxerSellsOutReferee = (function(_super) {\n  __extends(MadMaxerSellsOutReferee, _super);\n\n  function MadMaxerSellsOutReferee() {\n    _ref = MadMaxerSellsOutReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  MadMaxerSellsOutReferee.className = 'MadMaxerSellsOutReferee';\n\n  MadMaxerSellsOutReferee.prototype.chooseAction = function() {\n    this.spawnRing();\n    return this.killRing();\n  };\n\n  MadMaxerSellsOutReferee.prototype.setUpLevel = function() {\n    var a, hp, i, nc, p, r, x, y, _i, _results;\n    this.targetGold = 100;\n    this.victoryChecked = false;\n    this.waves = 0;\n    this.baseMaxSpeed = 8;\n    this.runDeadline = 6;\n    this.spawnDelay = 6;\n    this.ctypes = ['bronze-coin', 'bronze-coin', 'gold-coin', 'gold-coin', 'bronze-coin', 'gold-coin'];\n    nc = this.ctypes.length;\n    hp = this.points.spawnCenter;\n    r = 12;\n    this.coinSpawns = [];\n    _results = [];\n    for (i = _i = 0; 0 <= nc ? _i < nc : _i > nc; i = 0 <= nc ? ++_i : --_i) {\n      a = (2 * Math.PI) / nc * i;\n      x = hp.x + r * Math.cos(a);\n      y = hp.y + r * Math.sin(a);\n      p = new Vector(x, y);\n      _results.push(this.coinSpawns.push(p));\n    }\n    return _results;\n  };\n\n  MadMaxerSellsOutReferee.prototype.spawnRing = function() {\n    var coin, i, p, spawners, t, type, _i, _j, _k, _ref1, _ref2, _ref3;\n    if (this.ctypes === null) {\n      return;\n    }\n    if (this.world.age > 30) {\n      return;\n    }\n    if (this.world.age < this.spawnTime) {\n      return;\n    }\n    this.killTime = this.world.age + this.runDeadline * (this.baseMaxSpeed / this.hero.maxSpeed);\n    this.spawnTime = this.killTime + this.spawnDelay;\n    spawners = [];\n    for (i = _i = 0, _ref1 = this.coinSpawns.length; 0 <= _ref1 ? _i < _ref1 : _i > _ref1; i = 0 <= _ref1 ? ++_i : --_i) {\n      spawners.push({\n        'type': null,\n        'point': this.coinSpawns[i],\n        'dist': this.hero.distanceTo(this.coinSpawns[i])\n      });\n    }\n    spawners.sort(function(a, b) {\n      if (a.dist >= b.dist) {\n        return -1;\n      } else {\n        return 1;\n      }\n    });\n    t = spawners.splice(5, 1)[0];\n    spawners.splice(1, 0, t);\n    t = spawners.splice(5, 1)[0];\n    spawners.splice(3, 0, t);\n    t = spawners.splice(5, 1)[0];\n    spawners.splice(4, 0, t);\n    for (i = _j = 0, _ref2 = spawners.length; 0 <= _ref2 ? _j < _ref2 : _j > _ref2; i = 0 <= _ref2 ? ++_j : --_j) {\n      spawners[i].type = this.ctypes[i];\n    }\n    for (i = _k = 0, _ref3 = spawners.length; 0 <= _ref3 ? _k < _ref3 : _k > _ref3; i = 0 <= _ref3 ? ++_k : --_k) {\n      type = spawners[i].type;\n      p = spawners[i].point;\n      coin = this.instabuild(type, p.x, p.y);\n    }\n    return ++this.waves;\n  };\n\n  MadMaxerSellsOutReferee.prototype.killRing = function() {\n    var coin, _i, _len, _ref1, _results;\n    if (this.ctypes === null) {\n      return;\n    }\n    if (this.world.age < this.killTime) {\n      return;\n    }\n    this.spawnTime = this.world.age + this.spawnDelay;\n    this.killTime = this.spawnTime + this.runDeadline;\n    _ref1 = this.built;\n    _results = [];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      coin = _ref1[_i];\n      if (coin.exists && coin.type === 'coin') {\n        _results.push(coin.setExists(false));\n      }\n    }\n    return _results;\n  };\n\n  MadMaxerSellsOutReferee.prototype.endsWith = function(s, t) {\n    return s.indexOf(t, s.length - t.length) !== -1;\n  };\n\n  MadMaxerSellsOutReferee.prototype.checkVictory = function() {\n    var c, goldCoins, totalGoal;\n    if (this.victoryChecked) {\n      return;\n    }\n    if (this.world.age < 30) {\n      return;\n    }\n    goldCoins = (function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.built;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        c = _ref1[_i];\n        if (c.exists && c.type === 'coin' && c.value === 3) {\n          _results.push(c);\n        }\n      }\n      return _results;\n    }).call(this);\n    if (goldCoins.length > 0) {\n      return;\n    }\n    totalGoal = this.waves * 9;\n    if (this.world.getSystem('Inventory').teamGold.humans.gold >= totalGoal) {\n      this.victoryChecked = true;\n      this.setGoalState('get-coins', 'success');\n      return this.world.endWorld(true, 1);\n    } else {\n      this.victoryChecked = true;\n      this.setGoalState('get-coins', 'failure');\n      return this.world.endWorld(true, 1);\n    }\n  };\n\n  return MadMaxerSellsOutReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "5446cac8a887c47508b6f945",
	"original": "54c687d6e5b5d8d8128a2602",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "This Component makes the Thang o'ermaster the Mad Maxer Sells Out level.",
	"dependencies": [
		{
			"original": "54977ce657e90bd1903dea72",
			"majorVersion": 0
		}
	],
	"commitMessage": "Check hero speed during run, not just at level start (when not all gear bonuses have been applied)",
	"parent": "54d01e4158e272500509be64",
	"created": "2015-02-03T19:01:30.280Z",
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