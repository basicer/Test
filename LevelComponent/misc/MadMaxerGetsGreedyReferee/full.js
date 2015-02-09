{
	"_id": "54d93a2f279fed5205a015cc",
	"searchStrings": "mad maxer gets greedy referee m ma mad madm madma madmax madmaxe madmaxer madmaxerg madmaxerge madmaxerget madmaxergets madmaxergetsg madmaxergetsgr madmaxergetsgre madmaxergetsgree madmaxergetsgreed madmaxergetsgreedy madmaxergetsgreedyr madmaxergetsgreedyre madmaxergetsgreedyref madmaxergetsgreedyrefe madmaxergetsgreedyrefer",
	"index": true,
	"slug": "madmaxergetsgreedyreferee",
	"name": "MadMaxerGetsGreedyReferee",
	"js": "var MadMaxerGetsGreedyReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nMadMaxerGetsGreedyReferee = (function(_super) {\n  __extends(MadMaxerGetsGreedyReferee, _super);\n\n  function MadMaxerGetsGreedyReferee() {\n    _ref = MadMaxerGetsGreedyReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  MadMaxerGetsGreedyReferee.className = 'MadMaxerGetsGreedyReferee';\n\n  MadMaxerGetsGreedyReferee.prototype.chooseAction = function() {\n    this.spawnCoins();\n    return this.despawnCoins();\n  };\n\n  MadMaxerGetsGreedyReferee.prototype.setUpLevel = function() {\n    this.victoryChecked = false;\n    this.endTime = 25;\n    this.spawnTime = this.world.age + 1;\n    this.despawnDelay = 5;\n    this.spawnDelay = 1;\n    this.ctypes = ['bronze-coin', 'bronze-coin', 'bronze-coin', 'silver-coin', 'silver-coin'];\n    this.cloneTargetCoin = null;\n    this.playerCoins = [];\n    return this.cloneCoins = [];\n  };\n\n  MadMaxerGetsGreedyReferee.prototype.spawnCoins = function() {\n    var ct, _i, _len, _ref1;\n    if (!this.ctypes) {\n      return;\n    }\n    if (this.world.age > this.endTime) {\n      return;\n    }\n    if (this.world.age < this.spawnTime) {\n      return;\n    }\n    this.despawnTime = this.world.age + this.calcDespawnDelay();\n    this.spawnTime = this.world.age + this.calcDespawnDelay() + this.spawnDelay;\n    while (this.playerCoins.length > 0) {\n      this.playerCoins.pop();\n    }\n    while (this.cloneCoins.length > 0) {\n      this.cloneCoins.pop();\n    }\n    _ref1 = this.ctypes;\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      ct = _ref1[_i];\n      this.spawnMirror(ct, this.pickPointFromRegions([this.rectangles.playerField]));\n    }\n    this.spawnMirror('gold-coin', this.pickPointFromRegions([this.rectangles.goldTop]));\n    return this.spawnMirror('gold-coin', this.pickPointFromRegions([this.rectangles.goldBottom]));\n  };\n\n  MadMaxerGetsGreedyReferee.prototype.spawnMirror = function(ct, pp) {\n    var ccoin, cfMaxX, cp, pcoin, pfMinX;\n    pfMinX = this.rectangles.playerField.vertices()[0].x;\n    cfMaxX = this.rectangles.cloneField.vertices()[2].x;\n    cp = new Vector(cfMaxX - (pp.x - pfMinX), pp.y);\n    pcoin = this.instabuild(ct, pp.x, pp.y);\n    this.playerCoins.push(pcoin);\n    ccoin = this.instabuild(ct, cp.x, cp.y);\n    return this.cloneCoins.push(ccoin);\n  };\n\n  MadMaxerGetsGreedyReferee.prototype.despawnCoins = function() {\n    var c, _i, _j, _len, _len1, _ref1, _ref2;\n    if (this.world.age > this.endTime) {\n      return;\n    }\n    if (this.world.age < this.despawnTime) {\n      return;\n    }\n    _ref1 = this.playerCoins;\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      c = _ref1[_i];\n      if (c.exists) {\n        c.setExists(false);\n      }\n    }\n    _ref2 = this.cloneCoins;\n    for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {\n      c = _ref2[_j];\n      if (c.exists) {\n        c.setExists(false);\n      }\n    }\n    while (this.playerCoins.length > 0) {\n      this.playerCoins.pop();\n    }\n    while (this.cloneCoins.length > 0) {\n      this.cloneCoins.pop();\n    }\n    this.spawnTime = this.world.age + this.spawnDelay;\n    return this.despawnTime = this.world.age + this.spawnDelay + this.calcDespawnDelay();\n  };\n\n  MadMaxerGetsGreedyReferee.prototype.checkVictory = function() {\n    var c, cloneGold, playerGold;\n    if (this.victoryChecked) {\n      return;\n    }\n    if (this.world.age < this.endTime) {\n      return;\n    }\n    if (((function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.built;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        c = _ref1[_i];\n        if (c.exists && this.endsWith(c.type, 'coin')) {\n          _results.push(c);\n        }\n      }\n      return _results;\n    }).call(this)).length > 0) {\n      return;\n    }\n    playerGold = this.world.getSystem('Inventory').teamGold.humans.gold;\n    cloneGold = this.world.getSystem('Inventory').teamGold.ogres.gold;\n    if (playerGold > cloneGold) {\n      this.setGoalState('collect-coins', 'success');\n    } else {\n      this.setGoalState('collect-coins', 'failure');\n    }\n    this.victoryChecked = true;\n    return this.world.endWorld(true, 1);\n  };\n\n  MadMaxerGetsGreedyReferee.prototype.calcDespawnDelay = function() {\n    return this.despawnDelay * (8.0 / this.hero.maxSpeed);\n  };\n\n  MadMaxerGetsGreedyReferee.prototype.endsWith = function(s, t) {\n    return s.indexOf(t, s.length - t.length) !== -1;\n  };\n\n  return MadMaxerGetsGreedyReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "5446cac8a887c47508b6f945",
	"original": "54d2e13e164fba5605816905",
	"watchers": [
		"5446cac8a887c47508b6f945",
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Space out golds to make it harder for the clone.",
	"parent": "54d92c053fed3a5205bfbd65",
	"created": "2015-02-09T22:52:31.069Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 4,
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