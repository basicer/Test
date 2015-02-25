{
	"_id": "54ed47f87d575d55c0e7ae42",
	"searchStrings": "minesweeper referee m mi min mine mines minesw mineswe mineswee minesweep minesweepe minesweeper minesweeperr minesweeperre minesweeperref minesweeperrefe minesweeperrefer",
	"index": true,
	"slug": "minesweeperreferee",
	"name": "MinesweeperReferee",
	"js": "var MinesweeperReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };\n\nMinesweeperReferee = (function(_super) {\n  __extends(MinesweeperReferee, _super);\n\n  function MinesweeperReferee() {\n    _ref = MinesweeperReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  MinesweeperReferee.className = 'MinesweeperReferee';\n\n  MinesweeperReferee.prototype.chooseAction = function() {\n    var peasant, trap, _i, _j, _len, _len1, _ref1, _ref2;\n    if (!this.didSetUp) {\n      this.setUp();\n    }\n    _ref1 = this.peasants;\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      peasant = _ref1[_i];\n      this.controlPeasant(peasant);\n    }\n    _ref2 = this.traps;\n    for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {\n      trap = _ref2[_j];\n      this.controlTrap(trap);\n    }\n    return this.controlHealer();\n  };\n\n  MinesweeperReferee.prototype.setUp = function() {\n    var peasant, t, _i, _len, _ref1;\n    this.didSetUp = true;\n    this.hero = this.world.getThangByID('Hero Placeholder');\n    this.healer = this.world.getThangByID('Doctor Beak');\n    this.healer.healQueue = [];\n    this.healer.cowardDistance = this.hero.pos.x - this.healer.pos.x;\n    this.peasants = (function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.type === 'peasant') {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this);\n    _ref1 = this.peasants;\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      peasant = _ref1[_i];\n      peasant.cowardDistance = this.hero.pos.x - peasant.pos.x;\n    }\n    return this.spawnTraps();\n  };\n\n  MinesweeperReferee.prototype.spawnTraps = function() {\n    var coin, lastX, lastY, maxY, minY, trap, tries, x, y, _results;\n    this.traps = [];\n    x = 24;\n    lastX = 22;\n    lastY = 35;\n    minY = 28;\n    maxY = 42;\n    _results = [];\n    while (x < 58) {\n      if (this.world.rand.randf() < 0.35) {\n        y = 0;\n        tries = 0;\n        while (!((Math.max(minY, lastY - (x - lastX)) < y && y < Math.min(maxY, lastY + (x - lastX))))) {\n          y = minY + this.world.rand.randf() * (maxY - minY);\n          ++tries;\n          if (++tries > 100) {\n            y = lastY;\n            break;\n          }\n        }\n        this.buildXY('fire-trap', x, y);\n        lastX = x;\n        lastY = y;\n        trap = this.performBuild();\n        trap.attackRange = 0;\n        trap.attackDamage = Math.max(trap.attackDamage, this.hero.maxHealth / 3);\n        trap.collisionCategory = 'none';\n        this.traps.push(trap);\n        this.buildXY('gold-coin', x, y);\n        coin = this.performBuild();\n        trap.coin = coin;\n        trap.chainReacts = false;\n        _results.push(x += 4);\n      } else {\n        _results.push(x += 1);\n      }\n    }\n    return _results;\n  };\n\n  MinesweeperReferee.prototype.controlPeasant = function(peasant) {\n    if (peasant.health <= 0) {\n      return;\n    }\n    if (this.hero.health > 0) {\n      return peasant.move({\n        x: Math.max(peasant.pos.x, this.hero.pos.x - peasant.cowardDistance),\n        y: peasant.pos.y\n      });\n    } else {\n      return peasant.move({\n        x: 64,\n        y: peasant.pos.y\n      });\n    }\n  };\n\n  MinesweeperReferee.prototype.controlTrap = function(trap) {\n    var hasMove, peasant, _i, _len, _ref1, _results;\n    if (!trap.exists) {\n      return;\n    }\n    if (!trap.coin.exists) {\n      hasMove = __indexOf.call(this.hero.programmableProperties, 'move') >= 0;\n      trap.attackRange = hasMove ? 4 : 2;\n      trap.mass = 500;\n      if (this.hero.maxSpeed > 8) {\n        trap.mass = 1;\n      }\n    }\n    _ref1 = this.peasants;\n    _results = [];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      peasant = _ref1[_i];\n      if (trap.distance(peasant) < 4) {\n        trap.attackRange = 4;\n        _results.push(trap.mass = 2000);\n      } else {\n        _results.push(void 0);\n      }\n    }\n    return _results;\n  };\n\n  MinesweeperReferee.prototype.controlHealer = function() {\n    var target;\n    if (this.healer.canCast('heal') && this.healer.healQueue.length > 0) {\n      target = this.healer.healQueue[0];\n      if (target) {\n        if (target.health < target.maxHealth) {\n          this.healer.cast('heal', target);\n          this.healer.say('Healed!');\n        }\n        return this.healer.healQueue.shift();\n      }\n    } else if (this.healer.healQueue.length === 0) {\n      return this.healer.move({\n        x: Math.max(this.healer.pos.x, this.hero.pos.x - this.healer.cowardDistance),\n        y: this.healer.pos.y\n      });\n    }\n  };\n\n  MinesweeperReferee.prototype.checkVictory = function() {\n    if (this.victoryChecked) {\n\n    }\n  };\n\n  return MinesweeperReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "5490cba5623b972aa26b25a5",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Fixed explosion knockback and timing now that players are reacting more quickly by giving up on using knockback for fast heroes.",
	"parent": "54baaed0ecb43555059ef86b",
	"created": "2015-02-25T03:56:40.444Z",
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