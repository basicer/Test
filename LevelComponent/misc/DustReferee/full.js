{
	"_id": "54a2079c7627639f8fbcb066",
	"searchStrings": "dust referee d du dus dust dustr dustre dustref dustrefe dustrefer",
	"index": true,
	"slug": "dustreferee",
	"name": "DustReferee",
	"js": "var DustReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nDustReferee = (function(_super) {\n  __extends(DustReferee, _super);\n\n  function DustReferee() {\n    _ref = DustReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  DustReferee.className = 'DustReferee';\n\n  DustReferee.prototype.controlHumans = function() {\n    var thang, _i, _j, _len, _len1, _ref1, _ref2, _results, _results1;\n    if (this.killedEnough) {\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        thang = _ref1[_i];\n        if (thang.team === 'humans' && thang.type === 'archer' && thang.action === 'move' && thang.targetPos) {\n          if (thang.distanceSquared(thang.targetPos) < 1) {\n            thang.setTargetPos(null);\n            _results.push(thang.setAction('idle'));\n          } else {\n            _results.push(void 0);\n          }\n        }\n      }\n      return _results;\n    } else if (this.world.getGoalState('ogres-die') === 'success') {\n      this.killedEnough = true;\n      _ref2 = this.world.thangs;\n      _results1 = [];\n      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {\n        thang = _ref2[_j];\n        if (!(thang.team === 'humans' && thang.type === 'archer')) {\n          continue;\n        }\n        thang.setExists(true);\n        thang.pos.x += 10;\n        _results1.push(thang.move({\n          x: thang.pos.x - 10,\n          y: thang.pos.y\n        }));\n      }\n      return _results1;\n    }\n  };\n\n  return DustReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "54a1f0547627639f8fbcb05f",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "This Component makes the Thang o'ermaster the Dust level.",
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
	"commitMessage": "Fixed archer movement cancellation check.",
	"parent": "54a203447627639f8fbcb064",
	"created": "2014-12-30T02:02:04.800Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 3,
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