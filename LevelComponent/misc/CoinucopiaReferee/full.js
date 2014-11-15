{
	"_id": "5467d5b2d8f7feec1b6c79d6",
	"searchStrings": "coinucopia referee c co coi coin coinu coinuc coinuco coinucop coinucopi coinucopia coinucopiar coinucopiare coinucopiaref coinucopiarefe coinucopiarefer",
	"index": true,
	"slug": "coinucopiareferee",
	"name": "CoinucopiaReferee",
	"js": "var CoinucopiaReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCoinucopiaReferee = (function(_super) {\n  __extends(CoinucopiaReferee, _super);\n\n  function CoinucopiaReferee() {\n    _ref = CoinucopiaReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  CoinucopiaReferee.className = 'CoinucopiaReferee';\n\n  CoinucopiaReferee.prototype.chooseAction = function() {\n    var buildType, built, n, r, spawnChance, spawnChances, type, _i, _len, _ref1;\n    if ((this.world.age + 6) / 3 > (this.built.length / 2)) {\n      spawnChances = [[0, 'bronze'], [65, 'silver'], [85, 'gold']];\n      r = this.world.rand.randf();\n      n = 100 * Math.pow(r, 20 / (this.world.age + 1));\n      for (_i = 0, _len = spawnChances.length; _i < _len; _i++) {\n        _ref1 = spawnChances[_i], spawnChance = _ref1[0], type = _ref1[1];\n        if (n >= spawnChance) {\n          buildType = type;\n        } else {\n          break;\n        }\n      }\n      this.build(buildType);\n      built = this.performBuild();\n      if (this.built.length === 1) {\n        built.pos.x = 66;\n        built.pos.y = 46;\n      } else if (this.built.length === 2) {\n        built.pos.x = 43;\n        built.pos.y = 53;\n      } else {\n        built.pos.x = 21 + this.world.rand.randf() * 50;\n        built.pos.y = 21 + this.world.rand.randf() * 42;\n      }\n      built.addTrackedProperties(['pos', 'Vector']);\n      built.keepTrackedProperty('pos');\n    }\n    if (this.world.getSystem('Inventory').teamGold.humans.gold >= 20) {\n      this.setGoalState('collect-gold', 'success');\n    }\n    if (false) {\n      if (this.built[0].exists && !this.addedFirstFlag) {\n        this.addFlag('green', this.built[0].pos);\n        return this.addedFirstFlag = true;\n      } else if (!this.built[0].exists && this.built[1].exists && this.addedFirstFlag && !this.addedSecondFlag) {\n        this.addFlag('green', this.built[1].pos);\n        return this.addedSecondFlag = true;\n      }\n    }\n  };\n\n  return CoinucopiaReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "545bb3e91e649a4495f887e2",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Stopping automatically placing flags for the player for now.",
	"parent": "545c220dd3ae193f12bcf3d6",
	"description": "This Component makes the Thang handle coin spawning for the Coinucopia level.",
	"codeLanguage": "coffeescript",
	"dependencies": [
		{
			"original": "52d9a6773cf02dcf26000dc4",
			"majorVersion": 0
		}
	],
	"created": "2014-11-15T22:37:38.951Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 5,
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