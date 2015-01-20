{
	"_id": "54beb98e2850d3ce188e4d2e",
	"searchStrings": "mad maxer referee m ma mad madm madma madmax madmaxe madmaxer madmaxerr madmaxerre madmaxerref madmaxerrefe madmaxerrefer",
	"index": true,
	"slug": "madmaxerreferee",
	"name": "MadMaxerReferee",
	"js": "var MadMaxerReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nMadMaxerReferee = (function(_super) {\n  __extends(MadMaxerReferee, _super);\n\n  function MadMaxerReferee() {\n    _ref = MadMaxerReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  MadMaxerReferee.className = 'MadMaxerReferee';\n\n  MadMaxerReferee.prototype.setUpWaves = function() {\n    var f, munchf, rangef, wave, _i, _len, _ref1, _results;\n    f = Math.max(1, this.hero.maxHealth / 7);\n    munchf = f * f * f;\n    rangef = f * f;\n    _ref1 = this.waves;\n    _results = [];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      wave = _ref1[_i];\n      if (/escort$/.test(wave.name)) {\n        _results.push(wave.scaledPower *= munchf);\n      } else if (wave.scaledPower < 200) {\n        _results.push(wave.scaledPower *= rangef);\n      } else {\n        _results.push(void 0);\n      }\n    }\n    return _results;\n  };\n\n  return MadMaxerReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "5446cac8a887c47508b6f945",
	"original": "54bd6dad2542125305f1ca55",
	"watchers": [
		"5446cac8a887c47508b6f945",
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Scale wave power by hero class",
	"parent": "54bea013e59db8506a04926f",
	"created": "2015-01-20T20:24:46.403Z",
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