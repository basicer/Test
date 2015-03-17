{
	"_id": "550785bf2f62577c05980ceb",
	"searchStrings": "mountain mercenaries referee m mo mou moun mount mounta mountai mountain mountainm mountainme mountainmer mountainmerc mountainmerce mountainmercen mountainmercena mountainmercenar mountainmercenari mountainmercenarie mountainmercenaries mountainmercenariesr mountainmercenariesre mountainmercenariesref mountainmercenariesrefe mountainmercenariesrefer",
	"index": true,
	"slug": "mountainmercenariesreferee",
	"name": "MountainMercenariesReferee",
	"js": "var MountainMercenariesReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nMountainMercenariesReferee = (function(_super) {\n  __extends(MountainMercenariesReferee, _super);\n\n  function MountainMercenariesReferee() {\n    _ref = MountainMercenariesReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  MountainMercenariesReferee.className = 'MountainMercenariesReferee';\n\n  MountainMercenariesReferee.prototype.setUpLevel = function() {\n    this.victoryTime = 60;\n    return this.victoryOgres = false;\n  };\n\n  MountainMercenariesReferee.prototype.checkVictory = function() {\n    var livingOgres, t;\n    if (this.victoryOgres) {\n      return;\n    }\n    if (!(this.world.age > this.victoryTime)) {\n      return;\n    }\n    livingOgres = (function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.team === 'ogres' && t.health > 0) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this);\n    if (livingOgres.length === 0) {\n      this.victoryOgres = true;\n      this.setGoalState('ogres-die', 'success');\n      return this.world.endWorld(true, 3);\n    }\n  };\n\n  return MountainMercenariesReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "5446cac8a887c47508b6f945",
	"original": "550761eade6a9f800581db15",
	"watchers": [
		"5446cac8a887c47508b6f945",
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"commitMessage": "wip: goals, wave tuning, debugging",
	"parent": "5507620cb0877c7a055f0b57",
	"created": "2015-03-17T01:39:11.460Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 2,
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