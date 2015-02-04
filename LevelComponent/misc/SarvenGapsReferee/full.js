{
	"_id": "54d2afe3413bc1b3a1609d84",
	"searchStrings": "sarven gaps referee s sa sar sarv sarve sarven sarveng sarvenga sarvengap sarvengaps sarvengapsr sarvengapsre sarvengapsref sarvengapsrefe sarvengapsrefer",
	"index": true,
	"slug": "sarvengapsreferee",
	"name": "SarvenGapsReferee",
	"js": "var SarvenGapsReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nSarvenGapsReferee = (function(_super) {\n  __extends(SarvenGapsReferee, _super);\n\n  function SarvenGapsReferee() {\n    _ref = SarvenGapsReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  SarvenGapsReferee.className = 'SarvenGapsReferee';\n\n  SarvenGapsReferee.prototype.chooseAction = function() {\n    if (!this.sarvenGapsSetUp) {\n      this.setUp();\n    }\n    this.spawnMinions();\n    this.controlMinions();\n    return this.checkVictory();\n  };\n\n  SarvenGapsReferee.prototype.setUp = function() {\n    this.sarvenGapsSetUp = true;\n    this.waves = [\n      {\n        trigger: 99,\n        spawn: {\n          x: 46,\n          y: 51\n        },\n        camp: {\n          x: 14,\n          y: 51\n        }\n      }, {\n        trigger: 43,\n        spawn: {\n          x: 46,\n          y: 31\n        },\n        camp: {\n          x: 14,\n          y: 31\n        }\n      }, {\n        trigger: 24,\n        spawn: {\n          x: 46,\n          y: 11\n        },\n        camp: {\n          x: 14,\n          y: 11\n        }\n      }\n    ];\n    this.wave = 0;\n    this.waveMin = 2;\n    return this.waveMax = 4;\n  };\n\n  SarvenGapsReferee.prototype.spawnMinions = function() {\n    var angle, hero, i, minion, sx, sy, wave, waveSize, _i, _results;\n    if (this.wave >= this.waves.length) {\n      return;\n    }\n    hero = this.world.getThangByID('Hero Placeholder');\n    wave = this.waves[this.wave];\n    if (hero.pos.y > wave.trigger) {\n      return;\n    }\n    this.wave++;\n    waveSize = this.waveMin + Math.floor(this.world.rand.randf() * (this.waveMax - this.waveMin));\n    _results = [];\n    for (i = _i = 0; 0 <= waveSize ? _i < waveSize : _i > waveSize; i = 0 <= waveSize ? ++_i : --_i) {\n      angle = this.world.rand.randf() * Math.PI * 2;\n      sx = wave.spawn.x + i * 2;\n      sy = wave.spawn.y;\n      console.log(this.wave + ', ' + i + '/' + waveSize + ': ' + sx + ',' + sy);\n      this.build('ogre-m');\n      minion = this.performBuild();\n      minion.pos.x = sx;\n      minion.pos.y = sy;\n      minion.campPoint = wave.camp;\n      _results.push(minion.move(minion.campPoint));\n    }\n    return _results;\n  };\n\n  SarvenGapsReferee.prototype.controlMinions = function() {\n    var hero, minion, _i, _len, _ref1, _results;\n    hero = this.world.getThangByID('Hero Placeholder');\n    _ref1 = this.built;\n    _results = [];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      minion = _ref1[_i];\n      if (minion.campPoint) {\n        if (minion.canSee(hero)) {\n          _results.push(minion.attack(hero));\n        } else {\n          _results.push(minion.move(minion.campPoint));\n        }\n      }\n    }\n    return _results;\n  };\n\n  SarvenGapsReferee.prototype.checkVictory = function() {\n    var minion, _i, _len, _ref1, _ref2;\n    if (this.victoryChecked) {\n      return;\n    }\n    if (this.wave < this.waves.length) {\n      return;\n    }\n    if (this.world.getGoalState('get-to-oasis') !== 'success') {\n      return;\n    }\n    _ref1 = this.built;\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      minion = _ref1[_i];\n      if (!(minion.health > 0)) {\n        continue;\n      }\n      if (minion.pos.x < 18) {\n        this.checkingVictorySince = null;\n      }\n      if (!((18 < (_ref2 = minion.pos.x) && _ref2 < 30))) {\n        return;\n      }\n      minion.blocked || (minion.blocked = minion.velocity.x > -1 && Math.abs(minion.velocity.y) < 1);\n      if (!minion.blocked) {\n        return;\n      }\n    }\n    if (this.checkingVictorySince == null) {\n      this.checkingVictorySince = this.world.age;\n    }\n    if (this.world.age > this.checkingVictorySince + 0.5) {\n      return this.world.endWorld(true, 0.1);\n    }\n  };\n\n  return SarvenGapsReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "548c8f860ffdc235e80ef0aa",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Smarter about when to end the level due to blocked Thangs.",
	"parent": "5490fdb931677ca82d7725bc",
	"created": "2015-02-04T23:48:51.054Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 4,
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