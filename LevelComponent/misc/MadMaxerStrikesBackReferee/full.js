{
	"_id": "54d957db16311052055046e4",
	"searchStrings": "mad maxer strikes back referee m ma mad madm madma madmax madmaxe madmaxer madmaxers madmaxerst madmaxerstr madmaxerstri madmaxerstrik madmaxerstrike madmaxerstrikes madmaxerstrikesb madmaxerstrikesba madmaxerstrikesbac madmaxerstrikesback madmaxerstrikesbackr madmaxerstrikesbackre madmaxerstrikesbackref madmaxerstrikesbackrefe madmaxerstrikesbackrefer",
	"index": true,
	"slug": "madmaxerstrikesbackreferee",
	"name": "MadMaxerStrikesBackReferee",
	"js": "var MadMaxerStrikesBackReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nMadMaxerStrikesBackReferee = (function(_super) {\n  __extends(MadMaxerStrikesBackReferee, _super);\n\n  function MadMaxerStrikesBackReferee() {\n    _ref = MadMaxerStrikesBackReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  MadMaxerStrikesBackReferee.className = 'MadMaxerStrikesBackReferee';\n\n  MadMaxerStrikesBackReferee.prototype.chooseAction = function() {\n    return this.spawnRing();\n  };\n\n  MadMaxerStrikesBackReferee.prototype.setUpLevel = function() {\n    this.wave = 0;\n    this.spawnTime = 0;\n    this.spawnCenter = new Vector(this.hero.pos.x, this.hero.pos.y);\n    this.spawnRadius = 10;\n    return this.victoryOgres = false;\n  };\n\n  MadMaxerStrikesBackReferee.prototype.spawnRing = function() {\n    var a, aoffset, delta, i, n, r, sf, x, y, _i;\n    if (this.world.age > 25) {\n      return;\n    }\n    if (this.world.age < this.spawnTime) {\n      return;\n    }\n    this.spawnTime = this.world.age + 10;\n    n = 3 + this.wave;\n    delta = new Vector(this.hero.pos.x - this.spawnCenter.x, this.hero.pos.y - this.spawnCenter.y);\n    aoffset = Math.atan2(delta.y, delta.x);\n    sf = (this.hero.maxHealth + Math.pow(this.hero.maxSpeed, 3)) / 1200;\n    if (this.hero.attackRange > this.spawnRadius) {\n      sf = this.hero.maxHealth / 360;\n    }\n    this.minDamage = 0.5 * sf;\n    this.maxDamage = 2.0 * sf;\n    for (i = _i = 0; 0 <= n ? _i < n : _i > n; i = 0 <= n ? ++_i : --_i) {\n      r = this.spawnRadius * (1.0 + (.05 * i));\n      a = (2 * Math.PI) / n * i + aoffset;\n      x = this.spawnCenter.x + r * Math.cos(a);\n      y = this.spawnCenter.y + r * Math.sin(a);\n      this.spawnOne(i / n, x, y);\n    }\n    return ++this.wave;\n  };\n\n  MadMaxerStrikesBackReferee.prototype.spawnOne = function(t, x, y) {\n    var mob;\n    mob = this.instabuild('ogre-thrower', x, y);\n    mob.scaleFactor = this.map(t, 1, 0, 0.7, 1.4);\n    mob.attackDamage *= this.map(t, 0, 1, this.minDamage, this.maxDamage);\n    mob.maxHealth *= this.map(t, 1, 0, 0.5, 1.0);\n    mob.health = mob.maxHealth;\n    mob.addTrackedProperties(['attackDamage', 'number'], ['maxHealth', 'number']);\n    mob.keepTrackedProperty('scaleFactor');\n    mob.keepTrackedProperty('attackDamage');\n    return mob.keepTrackedProperty('maxHealth');\n  };\n\n  MadMaxerStrikesBackReferee.prototype.map = function(t, imin, imax, omin, omax) {\n    if (imax === imin) {\n      return omin;\n    }\n    return omin + omax * ((t - imin) / (imax - imin));\n  };\n\n  MadMaxerStrikesBackReferee.prototype.checkVictory = function() {\n    var livingOgres, t;\n    if (this.victoryOgres) {\n      return;\n    }\n    if (!(this.world.age > 25)) {\n      return;\n    }\n    livingOgres = (function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.team === 'ogres' && t.health > 0) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this);\n    if (livingOgres.length === 0) {\n      this.victoryOgres = true;\n      this.setGoalState('ogres-die-for-real', 'success');\n      return this.world.endWorld(true, 1);\n    }\n  };\n\n  return MadMaxerStrikesBackReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "5446cac8a887c47508b6f945",
	"original": "54bf260377d3005005c25ffd",
	"watchers": [
		"5446cac8a887c47508b6f945",
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Rebalance to take hero health and speed into account.",
	"parent": "54bfd889497cf8f00c78ddc4",
	"created": "2015-02-10T00:59:07.485Z",
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