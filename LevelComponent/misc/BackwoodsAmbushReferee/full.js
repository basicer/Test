{
	"_id": "54d29917fc5dd535d307b105",
	"searchStrings": "backwoods ambush referee b ba bac back backw backwo backwoo backwood backwoods backwoodsa backwoodsam backwoodsamb backwoodsambu backwoodsambus backwoodsambush backwoodsambushr backwoodsambushre backwoodsambushref backwoodsambushrefe backwoodsambushrefer",
	"index": true,
	"slug": "backwoodsambushreferee",
	"name": "BackwoodsAmbushReferee",
	"js": "var BackwoodsAmbushReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nBackwoodsAmbushReferee = (function(_super) {\n  __extends(BackwoodsAmbushReferee, _super);\n\n  function BackwoodsAmbushReferee() {\n    _ref = BackwoodsAmbushReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  BackwoodsAmbushReferee.className = 'BackwoodsAmbushReferee';\n\n  BackwoodsAmbushReferee.prototype.setUpLevel = function() {\n    var spawned3, spawned4;\n    spawned3 = this.backwoodsAmbushMaybeSpawn('ogre3', .667);\n    spawned4 = this.backwoodsAmbushMaybeSpawn('ogre4', spawned3 ? .333 : 0.667);\n    return this.backwoodsAmbushMaybeSpawn('ogre5', spawned4 ? 0 : 1);\n  };\n\n  BackwoodsAmbushReferee.prototype.backwoodsAmbushMaybeSpawn = function(name, chance) {\n    var bt, p;\n    if (this.world.rand.randf() < chance) {\n      bt = ['ogre-munchkin-f', 'ogre-munchkin-m'][this.world.rand.rand(2)];\n      p = this.points[name];\n      this.instabuild(bt, p.x, p.y);\n      return true;\n    }\n    return false;\n  };\n\n  BackwoodsAmbushReferee.prototype.checkVictory = function() {\n    var ogresSurviving, t;\n    if (this.world.age < 1) {\n      return;\n    }\n    ogresSurviving = ((function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.team === 'ogres' && t.exists && t.health > 0) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this)).length;\n    if (!ogresSurviving) {\n      this.setGoalState('ogres-die', 'success');\n      return this.world.endWorld(true, 3);\n    }\n  };\n\n  return BackwoodsAmbushReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "54b46d5b773022500595c2c1",
	"watchers": [
		"5446cac8a887c47508b6f945",
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Fixed minimum end time problem.",
	"parent": "54b55e64bc6fbd40cc5aeb2e",
	"created": "2015-02-04T22:11:35.572Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 5,
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