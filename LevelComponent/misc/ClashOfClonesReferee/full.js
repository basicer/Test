{
	"_id": "54f62d1a39781b81058fc5fc",
	"slug": "clashofclonesreferee",
	"searchStrings": "clash of clones referee c cl cla clas clash clasho clashof clashofc clashofcl clashofclo clashofclon clashofclone clashofclones clashofclonesr clashofclonesre clashofclonesref clashofclonesrefe clashofclonesrefer",
	"name": "ClashOfClonesReferee",
	"js": "var ClashOfClonesReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nClashOfClonesReferee = (function(_super) {\n  var checkVictoryAfter;\n\n  __extends(ClashOfClonesReferee, _super);\n\n  function ClashOfClonesReferee() {\n    _ref = ClashOfClonesReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  ClashOfClonesReferee.className = 'ClashOfClonesReferee';\n\n  checkVictoryAfter = 30;\n\n  ClashOfClonesReferee.prototype.chooseAction = function() {\n    if (!this.didSetUp) {\n      this.setUp();\n    }\n    return this.checkVictory();\n  };\n\n  ClashOfClonesReferee.prototype.setUp = function() {\n    var yak, _i, _len, _ref1;\n    this.didSetUp = true;\n    this.clone = this.world.getThangByID('Hero Placeholder 1');\n    this.thoktar = this.world.getThangByID('Thoktar');\n    _ref1 = this.world.thangs;\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      yak = _ref1[_i];\n      if (yak.type === 'sand-yak') {\n        yak.startsPeaceful = true;\n      }\n    }\n    return this.thoktar.isAttackable = false;\n  };\n\n  ClashOfClonesReferee.prototype.checkVictory = function() {\n    var ogresSurviving, t;\n    if (!(this.world.age > checkVictoryAfter)) {\n      return;\n    }\n    if (this.checkedVictoryAt) {\n      if (this.world.age > this.checkedVictoryAt + 2.5) {\n        this.thoktar.move({\n          x: this.thoktar.pos.x + 50,\n          y: this.thoktar.pos.y\n        });\n      }\n      return;\n    }\n    if (this.checkedVictory) {\n      return;\n    }\n    ogresSurviving = ((function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.team === 'ogres' && t.id !== 'Thoktar' && t.health > 0) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this)).length;\n    if (!ogresSurviving) {\n      this.setGoalState('ogres-die', 'success');\n      this.world.endWorld(true, 4);\n      this.checkedVictoryAt = this.world.age;\n      return this.thoktar.say(\"I'll be back!\");\n    }\n  };\n\n  return ClashOfClonesReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "54b1773a75e3055205e5a449",
	"original": "54ee35b2d52aa552052385c7",
	"watchers": [
		"54b1773a75e3055205e5a449",
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"description": "Custom Referee for Clash of Clones",
	"codeLanguage": "coffeescript",
	"dependencies": [
		{
			"original": "54977ce657e90bd1903dea72",
			"majorVersion": 0
		}
	],
	"commitMessage": "Yaks start peaceful",
	"index": true,
	"parent": "54f623e510ad1e8105d4e67a",
	"created": "2015-03-03T21:52:26.726Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 9,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "54b1773a75e3055205e5a449"
		},
		{
			"access": "read",
			"target": "public"
		}
	]
}