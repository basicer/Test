{
	"_id": "55d5e6c7036fba7232314da2",
	"searchStrings": "sarven sentry referee s sa sar sarv sarve sarven sarvens sarvense sarvensen sarvensent sarvensentr sarvensentry sarvensentryr sarvensentryre sarvensentryref sarvensentryrefe sarvensentryrefer",
	"index": true,
	"slug": "sarvensentryreferee",
	"name": "SarvenSentryReferee",
	"js": "var SarvenSentryReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nSarvenSentryReferee = (function(_super) {\n  __extends(SarvenSentryReferee, _super);\n\n  function SarvenSentryReferee() {\n    _ref = SarvenSentryReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  SarvenSentryReferee.className = 'SarvenSentryReferee';\n\n  SarvenSentryReferee.prototype.chooseAction = function() {\n    if (!this.didSetUp) {\n      this.setUp();\n    }\n    this.scoutWarning();\n    this.spawnMinions();\n    this.controlMinions();\n    return this.checkVictory();\n  };\n\n  SarvenSentryReferee.prototype.setUp = function() {\n    var bt, i, j, t, xMarker, y, _i, _j, _ref1, _ref2;\n    this.didSetUp = true;\n    this.victoryOgres = false;\n    this.victoryHumans = false;\n    this.victoryYaks = false;\n    this.warnings = {\n      'ogre-m': ['Ogre coming! Black, trap!', 'Yikes! Ogre here! Black, trap.', 'Ogre! Heads up. Black–trap!'],\n      'sand-yak': ['Sand Yak coming! Green, fence.', 'Sand Yak. Green–fence!', 'Here, Sand Yak! Green for fence.']\n    };\n    bt = ['ogre-m', 'ogre-m', 'ogre-m', 'ogre-m', 'sand-yak', 'sand-yak', 'sand-yak', 'sand-yak'];\n    for (i = _i = _ref1 = bt.length - 1; _ref1 <= 1 ? _i <= 1 : _i >= 1; i = _ref1 <= 1 ? ++_i : --_i) {\n      j = this.world.rand.rand(i - 1);\n      t = bt[j];\n      bt[j] = bt[i];\n      bt[i] = t;\n    }\n    this.waves = [\n      {\n        scout: 'Mira',\n        spawn: {\n          x: 62,\n          y: 70\n        },\n        camp: {\n          x: 53,\n          y: 58\n        },\n        type: bt[0],\n        warned: false\n      }, {\n        scout: 'Quinn',\n        spawn: {\n          x: 80,\n          y: 38\n        },\n        camp: {\n          x: 70,\n          y: 38\n        },\n        type: bt[1],\n        warned: false\n      }, {\n        scout: 'Simon',\n        spawn: {\n          x: 80,\n          y: 8\n        },\n        camp: {\n          x: 59,\n          y: 12\n        },\n        type: bt[2],\n        warned: false\n      }, {\n        scout: 'Omar',\n        spawn: {\n          x: 42,\n          y: -3\n        },\n        camp: {\n          x: 33,\n          y: 13\n        },\n        type: bt[3],\n        warned: false\n      }, {\n        scout: 'Fidsdale',\n        spawn: {\n          x: 1,\n          y: 18\n        },\n        camp: {\n          x: 20,\n          y: 29\n        },\n        type: bt[4],\n        warned: false\n      }, {\n        scout: 'Slyvos',\n        spawn: {\n          x: 0,\n          y: 50\n        },\n        camp: {\n          x: 20,\n          y: 49\n        },\n        type: bt[5],\n        warned: false\n      }, {\n        scout: 'Rowan',\n        spawn: {\n          x: 28,\n          y: 71\n        },\n        camp: {\n          x: 31,\n          y: 55\n        },\n        type: bt[6],\n        warned: false\n      }\n    ];\n    for (i = _j = _ref2 = this.waves.length - 1; _ref2 <= 1 ? _j <= 1 : _j >= 1; i = _ref2 <= 1 ? ++_j : --_j) {\n      j = this.world.rand.rand(i - 1);\n      t = this.waves[j];\n      this.waves[j] = this.waves[i];\n      this.waves[i] = t;\n      xMarker = this.world.getThangByID(this.waves[j].scout + ' X');\n      xMarker.addTrackedProperties(['bobHeight', 'number']);\n      xMarker.keepTrackedProperty('bobHeight');\n    }\n    this.waveDelay = 10;\n    this.waveWarningDelay = 10;\n    this.waveTime = this.waveWarningDelay + 1;\n    this.totalWaves = this.waves.length;\n    return this.totalYaks = ((function() {\n      var _k, _len, _ref3, _results;\n      _ref3 = bt.slice(0, 7);\n      _results = [];\n      for (_k = 0, _len = _ref3.length; _k < _len; _k++) {\n        y = _ref3[_k];\n        if (y === 'sand-yak') {\n          _results.push(y);\n        }\n      }\n      return _results;\n    })()).length;\n  };\n\n  SarvenSentryReferee.prototype.scoutWarning = function() {\n    var scout, warnings;\n    if (this.waves.length === 0) {\n      return;\n    }\n    if (this.waves[0].warned) {\n      return;\n    }\n    if (this.world.age < this.waveTime - this.waveWarningDelay) {\n      return;\n    }\n    this.waves[0].warned = true;\n    scout = this.world.getThangByID(this.waves[0].scout);\n    warnings = this.warnings[this.waves[0].type];\n    scout.say(warnings[this.world.rand.rand(warnings.length)]);\n    return this.world.getThangByID(scout.id + ' X').bobHeight = 1;\n  };\n\n  SarvenSentryReferee.prototype.spawnMinions = function() {\n    var minion, wave;\n    if (this.waves.length === 0) {\n      return;\n    }\n    if (this.world.age < this.waveTime) {\n      return;\n    }\n    wave = this.waves[0];\n    this.waves.shift();\n    this.waveTime = this.world.age + this.waveDelay;\n    this.build(wave.type);\n    minion = this.performBuild();\n    minion.pos.x = wave.spawn.x;\n    minion.pos.y = wave.spawn.y;\n    minion.campPoint = wave.camp;\n    minion.move(minion.campPoint);\n    return this.world.getThangByID(wave.scout + ' X').bobHeight = 0;\n  };\n\n  SarvenSentryReferee.prototype.controlMinions = function() {\n    var enemy, hero, minion, shouldAttack, _i, _len, _ref1, _results;\n    hero = this.world.getThangByID('Hero Placeholder');\n    _ref1 = this.built;\n    _results = [];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      minion = _ref1[_i];\n      if (!minion.campPoint) {\n        continue;\n      }\n      enemy = minion.findNearestEnemy();\n      shouldAttack = enemy && minion.canSee(enemy) && minion.hitCampPoint;\n      if (shouldAttack) {\n        _results.push(minion.attack(enemy));\n      } else {\n        if (minion.distanceTo(minion.campPoint) > 3) {\n          _results.push(minion.move(minion.campPoint));\n        } else {\n          _results.push(minion.hitCampPoint = true);\n        }\n      }\n    }\n    return _results;\n  };\n\n  SarvenSentryReferee.prototype.checkVictory = function() {\n    var distanceToFence, fence, fences, humansSurviving, ogresSurviving, t, yak, yaks, yaksFenced, _i, _j, _len, _len1;\n    if (!(this.world.age > this.waveDelay * this.totalWaves)) {\n      return;\n    }\n    if (this.waves.length !== 0) {\n      return;\n    }\n    if (this.victoryOgres && this.victoryHumans && this.victoryYaks) {\n      return;\n    }\n    ogresSurviving = ((function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.team === 'ogres' && t.health > 0) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this)).length;\n    if (ogresSurviving === 0 && !this.victoryOgres) {\n      console.log(this.world.age, 'victory ogres');\n      this.setGoalState('ogres-die', 'success');\n      this.victoryOgres = true;\n    }\n    humansSurviving = ((function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.team === 'humans' && t.health > 0) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this)).length;\n    if (humansSurviving >= 8 && !this.victoryHumans) {\n      console.log(this.world.age, 'victory humans');\n      this.victoryHumans = true;\n    }\n    yaks = (function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.type === 'sand-yak') {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this);\n    fences = (function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.spriteName === 'Fence Wall') {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this);\n    yaksFenced = 0;\n    for (_i = 0, _len = yaks.length; _i < _len; _i++) {\n      yak = yaks[_i];\n      distanceToFence = Infinity;\n      for (_j = 0, _len1 = fences.length; _j < _len1; _j++) {\n        fence = fences[_j];\n        distanceToFence = Math.min(distanceToFence, yak.distance(fence));\n      }\n      if (yak.dead || distanceToFence < 8) {\n        ++yaksFenced;\n      }\n    }\n    if (yaksFenced >= this.totalYaks && !this.victoryYaks) {\n      console.log(this.world.age, 'victory yaks');\n      this.setGoalState('yaks-fenced', 'success');\n      this.victoryYaks = true;\n    }\n    if (this.victoryOgres && this.victoryHumans && this.victoryYaks) {\n      return this.world.endWorld(true, 1);\n    }\n  };\n\n  return SarvenSentryReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "548cf1050ffdc235e80ef0ce",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "This Component makes the Thang referee the Sarven Sentry level.",
	"dependencies": [
		{
			"original": "52d9a6773cf02dcf26000dc4",
			"majorVersion": 0
		}
	],
	"commitMessage": "Minions that can't see something to attack shouldn't crash it, they'll probably see something in a moment.",
	"parent": "55c38443633ee6021f0cc2b5",
	"created": "2015-08-20T14:40:07.104Z",
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