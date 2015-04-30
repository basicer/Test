{
	"_id": "553993df64a1488df00d9518",
	"slug": "stormingthetowersofarethreferee",
	"searchStrings": "storming the towers of areth referee s st sto stor storm stormi stormin storming stormingt stormingth stormingthe stormingthet stormingtheto stormingthetow stormingthetowe stormingthetower stormingthetowers stormingthetowerso stormingthetowersof stormingthetowersofa stormingthetowersofar stormingthetowersofare stormingthetowersofaret stormingthetowersofareth stormingthetowersofarethr stormingthetowersofarethre stormingthetowersofarethref stormingthetowersofarethrefe stormingthetowersofarethrefer",
	"name": "StormingTheTowersOfArethReferee",
	"js": "var StormingTheTowerOfArethReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nStormingTheTowerOfArethReferee = (function(_super) {\n  __extends(StormingTheTowerOfArethReferee, _super);\n\n  function StormingTheTowerOfArethReferee() {\n    _ref = StormingTheTowerOfArethReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  StormingTheTowerOfArethReferee.className = 'StormingTheTowerOfArethReferee';\n\n  StormingTheTowerOfArethReferee.prototype.chooseAction = function() {\n    var _base, _base1;\n    this.nerfUnits();\n    this.decrementTimers();\n    this.checkVictory();\n    this.fireCannon();\n    if (this.checkFireTrap('distraction', false) && !this.triggers.distraction) {\n      this.triggers.distraction = true;\n      this.distractionX.setExists(false);\n      this.distractionX = void 0;\n      return this.timers.distractionTimer = 1;\n    } else if (this.rectangles['distraction-retreat'].containsPoint(this.hero.pos) && this.distractionRetreatX && this.triggers.distraction) {\n      this.distractionRetreatX.setExists(false);\n      return this.distractionRetreatX = void 0;\n    } else if (this.timers.distractionTimer && this.timers.distractionTimer <= 0) {\n      if (typeof (_base = this.actors.mudwich).say === \"function\") {\n        _base.say(\"Ohhh! Shiny!\");\n      }\n      this.actors.mudwich.move({\n        x: 94,\n        y: 19\n      });\n      return this.timers.distractionTimer = void 0;\n    } else if (this.actors.mudwich.health <= 0 && !this.triggers['mudwich-dead']) {\n      this.actors.cannon.attackRange = 0;\n      this.timers.stormTroopsTimer = 1;\n      return this.triggers['mudwich-dead'] = true;\n    } else if (this.timers.stormTroopsTimer && this.timers.stormTroopsTimer <= 0) {\n      this.actors.captain.say(\"The cannon is disabled, CHARGE!!!\");\n      this.sendOgres();\n      this.restoreUnits();\n      this.tents1X = this.instabuild('x-mark-red', 60, 62);\n      this.tents2X = this.instabuild('x-mark-red', 90, 53);\n      return this.timers.stormTroopsTimer = void 0;\n    } else if (this.checkFireTrap('tents1', true) && this.checkFireTrap('tents2', true) && !this.triggers.sabotage) {\n      return this.triggers.sabotage = true;\n    } else if (this.retreat && !this.triggers['retreat-called']) {\n      this.timers.bombTimer = 6;\n      if (typeof (_base1 = this.actors.captain).say === \"function\") {\n        _base1.say(\"Fall back troops!\");\n      }\n      this.nerfOgres();\n      this.retreatHumans();\n      this.instabuild('x-mark-wood', -16, 39);\n      this.instabuild('x-mark-wood', 11, 28);\n      return this.triggers['retreat-called'] = true;\n    } else if (this.timers.bombTimer && this.timers.bombTimer <= 0) {\n      this.explodeFireTraps();\n      this.retreatOgres();\n      this.timers.bombTimer = void 0;\n      return this.triggers['complete'] = true;\n    }\n  };\n\n  StormingTheTowerOfArethReferee.prototype.setUpLevel = function() {\n    this.hero = this.world.getThangByID('Hero Placeholder');\n    this.actors = {\n      \"captain\": this.world.getThangByID('Captain Morgan'),\n      \"warlord\": this.world.getThangByID('Ogre Warlord'),\n      \"cannon\": this.world.getThangByID('Cannon'),\n      \"tower1\": this.world.getThangByID('Tower of Areth'),\n      \"tower2\": this.world.getThangByID('Tower of Areth II'),\n      \"mudwich\": this.world.getThangByID('Mudwich')\n    };\n    this.actors.cannon.isAttackable = this.actors.tower1.isAttackable = this.actors.tower2.isAttackable = false;\n    this.triggers = {\n      'distraction': false,\n      'mudwich-dead': false,\n      'sabotage': false,\n      'retreat-called': false,\n      'complete': false\n    };\n    this.timers = {\n      \"cannonTimer\": 2\n    };\n    this.cannonCoords = [\n      {\n        x: 27,\n        y: 31\n      }, {\n        x: 32,\n        y: 34\n      }\n    ];\n    this.distractionX = this.instabuild('x-mark-red', 94, 19);\n    this.distractionRetreatX = this.instabuild('x-mark-wood', 79, 6);\n    this.unitsRestored = false;\n    return this.nerfUnits();\n  };\n\n  StormingTheTowerOfArethReferee.prototype.decrementTimers = function() {\n    var name, timer, _ref1, _results;\n    _ref1 = this.timers;\n    _results = [];\n    for (name in _ref1) {\n      timer = _ref1[name];\n      _results.push(this.timers[name] -= this.world.dt);\n    }\n    return _results;\n  };\n\n  StormingTheTowerOfArethReferee.prototype.sendOgres = function() {\n    var t, unit, units, _i, _len, _results;\n    units = (function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.getSystem(\"Combat\").attackables;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.isAttackable && t.team === \"ogres\" && t !== this.hero && t !== this.actors.mudwich && (t.attack != null)) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this);\n    _results = [];\n    for (_i = 0, _len = units.length; _i < _len; _i++) {\n      unit = units[_i];\n      _results.push(unit.attack(this.actors.captain));\n    }\n    return _results;\n  };\n\n  StormingTheTowerOfArethReferee.prototype.retreatHumans = function() {\n    var t, unit, units, _i, _len, _results;\n    units = (function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.getSystem(\"Combat\").attackables;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.isAttackable && t.team === \"humans\" && t !== this.hero && t !== this.actors.mudwich && (t.move != null)) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this);\n    _results = [];\n    for (_i = 0, _len = units.length; _i < _len; _i++) {\n      unit = units[_i];\n      _results.push(unit.move({\n        x: -12,\n        y: 38\n      }));\n    }\n    return _results;\n  };\n\n  StormingTheTowerOfArethReferee.prototype.retreatOgres = function() {\n    var t, unit, units, _base, _i, _len, _results;\n    if (typeof (_base = this.actors.warlord).say === \"function\") {\n      _base.say(\"NOOOO! Our supplies!\");\n    }\n    units = (function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.getSystem(\"Combat\").attackables;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.isAttackable && t.team === \"ogres\" && t !== this.hero && t !== this.actors.mudwich && (t.move != null)) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this);\n    _results = [];\n    for (_i = 0, _len = units.length; _i < _len; _i++) {\n      unit = units[_i];\n      _results.push(unit.move({\n        x: 69,\n        y: 54\n      }));\n    }\n    return _results;\n  };\n\n  StormingTheTowerOfArethReferee.prototype.nerfUnits = function() {\n    var t, unit, units, _i, _len, _results;\n    if (!this.unitsRestored) {\n      units = (function() {\n        var _i, _len, _ref1, _results;\n        _ref1 = this.world.getSystem(\"Combat\").attackables;\n        _results = [];\n        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n          t = _ref1[_i];\n          if (t.isAttackable && t !== this.hero && t !== this.actors.mudwich && (t.setTarget != null)) {\n            _results.push(t);\n          }\n        }\n        return _results;\n      }).call(this);\n      _results = [];\n      for (_i = 0, _len = units.length; _i < _len; _i++) {\n        unit = units[_i];\n        unit.visualRange = 5;\n        unit.visualRangeSquared = unit.visualRange * unit.visualRange;\n        unit.setTarget(null);\n        _results.push(unit.setAction(\"idle\"));\n      }\n      return _results;\n    }\n  };\n\n  StormingTheTowerOfArethReferee.prototype.nerfOgres = function() {\n    var enemies, t, unit, _i, _len, _results;\n    enemies = (function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.getSystem(\"Combat\").attackables;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.isAttackable && t.team === \"ogres\" && t !== this.hero && t !== this.actors.mudwich && (t.setTarget != null)) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this);\n    _results = [];\n    for (_i = 0, _len = enemies.length; _i < _len; _i++) {\n      unit = enemies[_i];\n      if (typeof unit.say === \"function\") {\n        unit.say(\"???\");\n      }\n      unit.visualRange = 0;\n      unit.visualRangeSquared = unit.visualRange * unit.visualRange;\n      unit.setTarget(null);\n      _results.push(unit.setAction(\"idle\"));\n    }\n    return _results;\n  };\n\n  StormingTheTowerOfArethReferee.prototype.restoreUnits = function() {\n    var enemies, t, unit, _i, _len;\n    enemies = (function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.getSystem(\"Combat\").attackables;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.isAttackable && t !== this.hero && t !== this.actors.mudwich && t.visualRange) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this);\n    for (_i = 0, _len = enemies.length; _i < _len; _i++) {\n      unit = enemies[_i];\n      unit.visualRange = 90;\n      unit.visualRangeSquared = unit.visualRange * unit.visualRange;\n      if (unit.healthReplenishRate < 30) {\n        unit.healthReplenishRate = 150;\n      }\n    }\n    return this.unitsRestored = true;\n  };\n\n  StormingTheTowerOfArethReferee.prototype.fireCannon = function() {\n    var r;\n    if (this.timers.cannonTimer <= 0) {\n      if (this.actors.cannon.exists && this.actors.cannon.attackRange > 0) {\n        r = Math.round(this.world.rand.randf2(0, this.cannonCoords.length - 1));\n        this.actors.cannon.attackXY(this.cannonCoords[r].x, this.cannonCoords[r].y);\n        return this.timers.cannonTimer = 2;\n      }\n    }\n  };\n\n  StormingTheTowerOfArethReferee.prototype.explodeFireTraps = function() {\n    var barrel, barrels, blastRatio, d, firetraps, momentum, t, trap, v, _i, _j, _k, _len, _len1, _len2, _results;\n    firetraps = (function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.type === 'fire-trap' && t.exists && !t.exploded) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this);\n    for (_i = 0, _len = firetraps.length; _i < _len; _i++) {\n      trap = firetraps[_i];\n      trap.blastRadius = 20;\n      trap.dud = false;\n      trap.explode();\n    }\n    barrels = (function() {\n      var _j, _len1, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {\n        t = _ref1[_j];\n        if (t.spriteName === 'Barrel' && t.exists) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this);\n    _results = [];\n    for (_j = 0, _len1 = barrels.length; _j < _len1; _j++) {\n      barrel = barrels[_j];\n      if (!barrel.velocity) {\n        continue;\n      }\n      for (_k = 0, _len2 = firetraps.length; _k < _len2; _k++) {\n        trap = firetraps[_k];\n        v = Vector.subtract(barrel.pos, trap.pos, true);\n        v.z += trap.depth / 2 - 25;\n        d = v.magnitude(false);\n        if (!(d < 20)) {\n          continue;\n        }\n        blastRatio = (20 - d) / 20;\n        momentum = v.copy().normalize(true).multiply(blastRatio * 13000, true);\n        barrel.velocity.add(Vector.divide(momentum, barrel.mass, true), true);\n      }\n      _results.push(barrel.cancelCollisions());\n    }\n    return _results;\n  };\n\n  StormingTheTowerOfArethReferee.prototype.checkFireTrap = function(rectangle, makeDud) {\n    var firetraps, t, trap, _i, _len;\n    firetraps = (function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.type === 'fire-trap' && t.exists && !t.exploded) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this);\n    for (_i = 0, _len = firetraps.length; _i < _len; _i++) {\n      trap = firetraps[_i];\n      if (this.rectangles[String(rectangle)].containsPoint(trap.pos)) {\n        if (makeDud) {\n          trap.dud = true;\n        }\n        return true;\n      }\n    }\n    return false;\n  };\n\n  StormingTheTowerOfArethReferee.prototype.checkVictory = function() {\n    if (this.hero.health <= 0) {\n      return this.setGoalState('escape', 'failure');\n    } else if (this.triggers.complete && this.rectangles['rallypoint'].containsPoint(this.hero.pos)) {\n      return this.setGoalState('escape', 'success');\n    } else if (this.triggers.sabotage) {\n      return this.setGoalState('sabotage', 'success');\n    } else if (this.triggers.distraction) {\n      return this.setGoalState('distract', 'success');\n    } else if (this.world.age >= 60) {\n      if (!this.triggers.sabotage) {\n        return this.setGoalState('sabotage', 'failure');\n      }\n    }\n  };\n\n  return StormingTheTowerOfArethReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "54bc0b1fc599d2530504cd0a",
	"watchers": [
		"546d4b4fa06acfd60c5ea198",
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Since palisade now is attackable, we need to exclude it from nerfing/buffing/other exquisite control operations.",
	"index": true,
	"parent": "5539920764a1488df00d950e",
	"created": "2015-04-24T00:52:47.759Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 41,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "546d4b4fa06acfd60c5ea198"
		},
		{
			"access": "read",
			"target": "public"
		}
	]
}