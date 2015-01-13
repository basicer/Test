{
	"_id": "54b4640246ee43d14f219146",
	"slug": "shinegetterreferee",
	"searchStrings": "shine getter referee s sh shi shin shine shineg shinege shineget shinegett shinegette shinegetter shinegetterr shinegetterre shinegetterref shinegetterrefe shinegetterrefer",
	"name": "ShineGetterReferee",
	"js": "var ShineGetterReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nShineGetterReferee = (function(_super) {\n  __extends(ShineGetterReferee, _super);\n\n  function ShineGetterReferee() {\n    _ref = ShineGetterReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  ShineGetterReferee.className = 'ShineGetterReferee';\n\n  ShineGetterReferee.prototype.chooseAction = function() {\n    return this.shineGetterSpawnCoins();\n  };\n\n  ShineGetterReferee.prototype.setUpLevel = function() {\n    var a, ctypes, hp, i, n, p, r, t, x, y, _i, _results;\n    this.targetGold = 100;\n    this.respawnDistance = 6;\n    ctypes = ['bronze-coin', 'silver-coin', 'bronze-coin', 'bronze-coin', 'bronze-coin', 'silver-coin', 'bronze-coin', 'bronze-coin', 'silver-coin', 'gold-coin', 'gold-coin', 'gold-coin'];\n    n = this.world.rand.rand(ctypes.length);\n    ctypes = ctypes.slice(n, ctypes.length).concat(ctypes.slice(0, n));\n    console.log('' + n + ': ' + ctypes.length);\n    hp = this.hero.pos;\n    r = 12;\n    this.coinSpawns = [];\n    _results = [];\n    for (i = _i = 0; _i < 12; i = ++_i) {\n      a = (2 * Math.PI) / 12 * i;\n      x = hp.x + r * Math.cos(a);\n      y = hp.y + r * Math.sin(a);\n      p = new Vector(x, y);\n      t = ctypes[i];\n      _results.push(this.coinSpawns.push({\n        'id': i,\n        'pos': p,\n        'type': t,\n        'coin': null\n      }));\n    }\n    return _results;\n  };\n\n  ShineGetterReferee.prototype.shineGetterSpawnCoins = function() {\n    var c, _i, _len, _ref1, _results;\n    _ref1 = this.coinSpawns;\n    _results = [];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      c = _ref1[_i];\n      if (!c.coin) {\n        if (this.hero.distanceTo(c.pos) > this.respawnDistance) {\n          c.coin = this.shineGetterSpawnCoin(c);\n        }\n      }\n      if (c.coin && !c.coin.exists) {\n        _results.push(c.coin = null);\n      } else {\n        _results.push(void 0);\n      }\n    }\n    return _results;\n  };\n\n  ShineGetterReferee.prototype.shineGetterSpawnCoin = function(cinfo) {\n    var coin;\n    coin = this.instabuild(cinfo.type, cinfo.pos.x, cinfo.pos.y);\n    return coin;\n  };\n\n  ShineGetterReferee.prototype.checkVictory = function() {\n    if (this.world.getSystem('Inventory').teamGold.humans.gold >= this.targetGold) {\n      this.setGoalState('collect-gold', 'success');\n      return this.world.endWorld(true, 1);\n    }\n  };\n\n  return ShineGetterReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "54b41d4e1dddc45605cee49c",
	"watchers": [
		"5446cac8a887c47508b6f945",
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Fixed up and simplified code, since setUpLevel and checkVictory can be automatically called by generic Referee.",
	"index": true,
	"parent": "54b45b4da052ca540530bb95",
	"created": "2015-01-13T00:17:06.764Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 5,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "5446cac8a887c47508b6f945"
		},
		{
			"access": "read",
			"target": "public"
		}
	]
}