{
	"_id": "54f75343460a5f202c6827f9",
	"slug": "boulderwoodsreferee",
	"searchStrings": "boulder woods referee b bo bou boul bould boulde boulder boulderw boulderwo boulderwoo boulderwood boulderwoods boulderwoodsr boulderwoodsre boulderwoodsref boulderwoodsrefe boulderwoodsrefer",
	"name": "BoulderWoodsReferee",
	"js": "var BoulderWoodsReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nBoulderWoodsReferee = (function(_super) {\n  __extends(BoulderWoodsReferee, _super);\n\n  function BoulderWoodsReferee() {\n    _ref = BoulderWoodsReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  BoulderWoodsReferee.className = 'BoulderWoodsReferee';\n\n  BoulderWoodsReferee.prototype.chooseAction = function() {\n    return this.configure();\n  };\n\n  BoulderWoodsReferee.prototype.setUpLevel = function() {\n    this.hero = this.world.getThangByID('Hero Placeholder');\n    return this.boulderSets = [\n      [\n        {\n          x: 30.5,\n          y: 45\n        }, {\n          x: 29,\n          y: 36\n        }\n      ], [\n        {\n          x: 54,\n          y: 48\n        }, {\n          x: 50,\n          y: 36\n        }\n      ], [\n        {\n          x: 13,\n          y: 32\n        }, {\n          x: 14,\n          y: 39\n        }\n      ], [\n        {\n          x: 44,\n          y: 55\n        }, {\n          x: 41,\n          y: 37\n        }\n      ], [\n        {\n          x: 68,\n          y: 47\n        }, {\n          x: 69,\n          y: 39\n        }\n      ]\n    ];\n  };\n\n  BoulderWoodsReferee.prototype.configure = function() {\n    if (!!this.configured) {\n      return;\n    }\n    this.hero.findsPaths = false;\n    this.configureBoulders();\n    this.world.getSystem(\"AI\").onObstaclesChanged();\n    return this.configured = true;\n  };\n\n  BoulderWoodsReferee.prototype.configureBoulders = function() {\n    var r, set, _i, _len, _ref1, _results;\n    _ref1 = this.boulderSets;\n    _results = [];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      set = _ref1[_i];\n      r = Math.round(this.world.rand.randf2(0, set.length - 1));\n      _results.push(this.instabuild(\"rock-obstacle\", set[r].x, set[r].y));\n    }\n    return _results;\n  };\n\n  BoulderWoodsReferee.prototype.checkVictory = function() {\n    if (this.rectangles['goal'].containsPoint(this.hero.pos)) {\n      return this.setGoalState('end-marker', 'success');\n    }\n  };\n\n  return BoulderWoodsReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "54e788181b2a015305a64846",
	"watchers": [
		"546d4b4fa06acfd60c5ea198",
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Moved a couple more boulders.",
	"index": true,
	"parent": "54f7525f460a5f202c6827f6",
	"created": "2015-03-04T18:47:31.159Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 17,
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