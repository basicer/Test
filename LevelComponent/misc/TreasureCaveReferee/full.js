{
	"_id": "55035485ec31df9c691ab621",
	"slug": "treasurecavereferee",
	"searchStrings": "treasure cave referee t tr tre trea treas treasu treasur treasure treasurec treasureca treasurecav treasurecave treasurecaver treasurecavere treasurecaveref treasurecaverefe treasurecaverefer",
	"name": "TreasureCaveReferee",
	"js": "var TreasureCaveReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nTreasureCaveReferee = (function(_super) {\n  __extends(TreasureCaveReferee, _super);\n\n  function TreasureCaveReferee() {\n    _ref = TreasureCaveReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  TreasureCaveReferee.className = 'TreasureCaveReferee';\n\n  TreasureCaveReferee.prototype.chooseAction = function() {\n    var t, _base, _base1;\n    this.decrementTimers();\n    this.checkVictory();\n    if (!this.triggers.ogreDead && this.ogre.health <= 0) {\n      console.log('Ogre dead, spawning Coins');\n      this.triggers.ogreDead = true;\n      this.spawnCoinsFromOgre();\n      this.yeti.move(this.positions.yetiHome);\n      console.log('Spawned coins');\n    }\n    if (!this.yeti.dead && this.yeti.canSee(this.hero)) {\n      this.yeti.attack(this.hero);\n    }\n    if (this.yeti.dead && !this.triggers.yetiAway) {\n      this.triggers.yetiAway = true;\n    }\n    if (this.checkFireTrap('distraction') && !this.triggers.distraction) {\n      this.triggers.distraction = true;\n      this.distractionMark.setExists(false);\n      this.distractionMark = void 0;\n      this.timers.bombTimer = 5;\n      this.hideMark = this.instabuildMark(this.positions.hide);\n      this.caveMark = this.instabuildMark(this.positions.cave);\n    }\n    if (this.rectangles['hide'].containsPoint(this.hero.pos) && this.hideMark && this.triggers.distraction) {\n      this.hideMark.setExists(false);\n      this.hideMark = void 0;\n    }\n    if (this.timers.bombTimer && this.timers.bombTimer <= 0) {\n      this.timers.bombTimer = void 0;\n      this.triggers.yetiAway = true;\n      this.explodeFireTraps();\n      this.timers.distractedTimer = 30;\n      if (!this.yeti.dead) {\n        if (typeof (_base = this.yeti).say === \"function\") {\n          _base.say('Huh?');\n        }\n        this.yeti.move(this.positions.distraction);\n      }\n    }\n    if (this.timers.distractedTimer && this.timers.distractedTimer <= 0) {\n      this.timers.distractedTimer = void 0;\n      if (!this.yeti.dead) {\n        if (typeof (_base1 = this.yeti).say === \"function\") {\n          _base1.say('Hmpf');\n        }\n        this.yeti.move(this.positions.yetiHome);\n      }\n    }\n    if (!this.triggers.goldCollected && this.hero.gold >= this.goldGoal && !((function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.built;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.value && t.exists) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this)).length && this.world.age > 1) {\n      this.triggers.goldCollected = true;\n      if (this.caveMark) {\n        this.caveMark.setExists(false);\n      }\n      this.caveMark = void 0;\n      return this.campMark = this.instabuildMark(this.positions.camp);\n    }\n  };\n\n  TreasureCaveReferee.prototype.setUpLevel = function() {\n    var ally;\n    this.hero = this.world.getThangByID('Hero Placeholder');\n    this.yeti = this.world.getThangByID('Yeti');\n    this.ogre = this.world.getThangByID('Ogre');\n    ally = this.world.getThangByID('Natalie');\n    ally.isAttackable = false;\n    ally = this.world.getThangByID('Harold');\n    ally.isAttackable = false;\n    ally = this.world.getThangByID('Douglas');\n    ally.isAttackable = false;\n    this.triggers = {\n      'ogreDead': false,\n      'distraction': false,\n      'yetiAway': false,\n      'goldCollected': false,\n      'escaped': false\n    };\n    this.positions = {\n      'distraction': {\n        x: 64,\n        y: 44\n      },\n      'hide': {\n        x: 44,\n        y: 8\n      },\n      'cave': {\n        x: 16,\n        y: 32\n      },\n      'camp': {\n        x: 68,\n        y: 12\n      },\n      'yetiHome': {\n        x: 28,\n        y: 28\n      }\n    };\n    this.distractionMark = this.instabuildMark(this.positions.distraction);\n    this.goldGoal = 20;\n    this.timers = {\n      'deerTimer': 1\n    };\n    return console.log('Set up complete');\n  };\n\n  TreasureCaveReferee.prototype.decrementTimers = function() {\n    var name, timer, _ref1, _results;\n    _ref1 = this.timers;\n    _results = [];\n    for (name in _ref1) {\n      timer = _ref1[name];\n      _results.push(this.timers[name] -= this.world.dt);\n    }\n    return _results;\n  };\n\n  TreasureCaveReferee.prototype.instabuildMark = function(pos) {\n    return this.instabuild('x-mark-white', pos.x, pos.y);\n  };\n\n  TreasureCaveReferee.prototype.checkFireTrap = function() {\n    var firetraps, t, trap, _i, _len;\n    firetraps = (function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.type === 'fire-trap' && t.exists && !t.exploded) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this);\n    for (_i = 0, _len = firetraps.length; _i < _len; _i++) {\n      trap = firetraps[_i];\n      if (this.rectangles['distraction'].containsPoint(trap.pos)) {\n        trap.dud = true;\n        return true;\n      }\n    }\n    return false;\n  };\n\n  TreasureCaveReferee.prototype.explodeFireTraps = function() {\n    var firetraps, t, trap, _i, _len, _results;\n    firetraps = (function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.type === 'fire-trap' && t.exists && !t.exploded) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this);\n    _results = [];\n    for (_i = 0, _len = firetraps.length; _i < _len; _i++) {\n      trap = firetraps[_i];\n      trap.blastRadius = 20;\n      trap.dud = false;\n      _results.push(trap.explode());\n    }\n    return _results;\n  };\n\n  TreasureCaveReferee.prototype.spawnCoinsFromOgre = function() {\n    var x, y;\n    x = this.ogre.pos.x;\n    y = this.ogre.pos.y;\n    this.instabuild('gem', x + this.world.rand.randf2(-4, 4), y + this.world.rand.randf2(-4, 4));\n    this.instabuild('gold-coin', x + this.world.rand.randf2(-4, 4), y + this.world.rand.randf2(-4, 4));\n    this.instabuild('gold-coin', x + this.world.rand.randf2(-4, 4), y + this.world.rand.randf2(-4, 4));\n    this.instabuild('gold-coin', x + this.world.rand.randf2(-4, 4), y + this.world.rand.randf2(-4, 4));\n    this.instabuild('silver-coin', x + this.world.rand.randf2(-4, 4), y + this.world.rand.randf2(-4, 4));\n    this.instabuild('silver-coin', x + this.world.rand.randf2(-4, 4), y + this.world.rand.randf2(-4, 4));\n    this.instabuild('bronze-coin', x + this.world.rand.randf2(-4, 4), y + this.world.rand.randf2(-4, 4));\n    return this.instabuild('bronze-coin', x + this.world.rand.randf2(-4, 4), y + this.world.rand.randf2(-4, 4));\n  };\n\n  TreasureCaveReferee.prototype.checkVictory = function() {\n    if (this.hero.health <= 0) {\n      return this.setGoalState('escape', 'failure');\n    } else {\n      if (this.triggers.goldCollected && this.rectangles['camp'].containsPoint(this.hero.pos)) {\n        this.setGoalState('escape', 'success');\n      }\n      if (this.triggers.goldCollected) {\n        this.setGoalState('treasure', 'success');\n      }\n      if (this.triggers.yetiAway || this.yeti.dead) {\n        return this.setGoalState('distract', 'success');\n      }\n    }\n  };\n\n  return TreasureCaveReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "54e9faf9f54ef5794f354f45",
	"watchers": [
		"548e1d2d24446d3d050281ed"
	],
	"__v": 0,
	"description": "This Component makes the Thang o'ermaster the Treasure Cave level.",
	"dependencies": [
		{
			"original": "54977ce657e90bd1903dea72",
			"majorVersion": 0
		}
	],
	"commitMessage": "Further fixed killing yeti while in camp.",
	"parent": "55035417ec31df9c691ab61d",
	"index": true,
	"created": "2015-03-13T21:20:05.731Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 20,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "548e1d2d24446d3d050281ed"
		},
		{
			"access": "read",
			"target": "public"
		}
	]
}