{
	"_id": "549a3a98a88ecca974d501fb",
	"searchStrings": "yakstraction referee y ya yak yaks yakst yakstr yakstra yakstrac yakstract yakstracti yakstractio yakstraction yakstractionr yakstractionre yakstractionref yakstractionrefe yakstractionrefer",
	"index": true,
	"slug": "yakstractionreferee",
	"name": "YakstractionReferee",
	"js": "var YakstractionReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nYakstractionReferee = (function(_super) {\n  __extends(YakstractionReferee, _super);\n\n  function YakstractionReferee() {\n    _ref = YakstractionReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  YakstractionReferee.className = 'YakstractionReferee';\n\n  YakstractionReferee.prototype.controlNeutral = function(thangs) {\n    var human, yak, _i, _len, _ref1, _ref2, _results;\n    if (this.surviving.humans.length) {\n      _results = [];\n      for (_i = 0, _len = thangs.length; _i < _len; _i++) {\n        yak = thangs[_i];\n        if (!yak.exists) {\n          continue;\n        }\n        yak.maxSpeed = 5;\n        yak.currentSpeedRatio = 1;\n        if (((_ref1 = yak.target) != null ? _ref1.type : void 0) === 'decoy') {\n          yak.decoyTarget = yak.target;\n          yak.waypoints = null;\n          console.log(this.world.age, 'no more waypoints for', yak.id);\n        }\n        human = yak.findNearest(this.surviving.humans);\n        if (yak.distance(human) < 5) {\n          console.log(this.world.age, 'telling yak to attack', human.id, 'at d', yak.distance(human));\n          yak.waypoints = null;\n          yak.attack(human);\n        } else if (((_ref2 = yak.decoyTarget) != null ? _ref2.health : void 0) > 0) {\n          yak.attack(yak.decoyTarget);\n        }\n        if (!this.rectangles.yakExistenceArea.containsPoint(yak.pos)) {\n          _results.push(yak.setExists(false));\n        } else {\n          _results.push(void 0);\n        }\n      }\n      return _results;\n    }\n  };\n\n  return YakstractionReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "549a31baa88ecca974d501f5",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "This Component makes the Thang o'ermaster the Yakstraction level..",
	"dependencies": [
		{
			"original": "54977ce657e90bd1903dea72",
			"majorVersion": 0
		},
		{
			"original": "52d9a6773cf02dcf26000dc4",
			"majorVersion": 0
		}
	],
	"commitMessage": "Yak control is in.",
	"parent": "549a351ca88ecca974d501f7",
	"created": "2014-12-24T04:01:28.081Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 2,
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