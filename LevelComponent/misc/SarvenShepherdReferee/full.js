{
	"_id": "54ad8712f207ea6245dbf2b4",
	"searchStrings": "sarven shepherd referee s sa sar sarv sarve sarven sarvens sarvensh sarvenshe sarvenshep sarvensheph sarvenshephe sarvenshepher sarvenshepherd sarvenshepherdr sarvenshepherdre sarvenshepherdref sarvenshepherdrefe sarvenshepherdrefer",
	"index": true,
	"slug": "sarvenshepherdreferee",
	"name": "SarvenShepherdReferee",
	"js": "var SarvenShepherdReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nSarvenShepherdReferee = (function(_super) {\n  __extends(SarvenShepherdReferee, _super);\n\n  function SarvenShepherdReferee() {\n    _ref = SarvenShepherdReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  SarvenShepherdReferee.className = 'SarvenShepherdReferee';\n\n  SarvenShepherdReferee.prototype.controlNeutral = function(yaks) {\n    var yak, _i, _len, _ref1, _results;\n    _results = [];\n    for (_i = 0, _len = yaks.length; _i < _len; _i++) {\n      yak = yaks[_i];\n      if (yak.exists) {\n        if (((_ref1 = yak.waypoints) != null ? _ref1.length : void 0) === 0) {\n          _results.push(yak.exists = false);\n        } else if (yak.currentSpeedRatio > .15) {\n          _results.push(yak.currentSpeedRatio = .15);\n        } else {\n          _results.push(void 0);\n        }\n      }\n    }\n    return _results;\n  };\n\n  SarvenShepherdReferee.prototype.checkVictory = function() {\n    var livingOgres, t;\n    if (this.victoryOgres) {\n      return;\n    }\n    if (!(this.world.age > 31)) {\n      return;\n    }\n    livingOgres = (function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.team === 'ogres' && t.health > 0) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this);\n    if (livingOgres.length === 0) {\n      this.victoryOgres = true;\n      this.setGoalState('ogres-die', 'success');\n      return this.world.endWorld(true, 1);\n    }\n  };\n\n  return SarvenShepherdReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "54ac3703e1247d3f05c98c56",
	"watchers": [
		"5446cac8a887c47508b6f945",
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "World ends earlier after last wave dies.",
	"parent": "54ad8683f207ea6245dbf2b1",
	"created": "2015-01-07T19:20:50.923Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 3,
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