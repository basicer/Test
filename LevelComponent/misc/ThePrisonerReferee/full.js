{
	"_id": "54d51ef2579cb054055de785",
	"searchStrings": "the prisoner referee t th the thep thepr thepri thepris thepriso theprison theprisone theprisoner theprisonerr theprisonerre theprisonerref theprisonerrefe theprisonerrefer",
	"index": true,
	"slug": "theprisonerreferee",
	"name": "ThePrisonerReferee",
	"js": "var ThePrisonerReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nThePrisonerReferee = (function(_super) {\n  __extends(ThePrisonerReferee, _super);\n\n  function ThePrisonerReferee() {\n    _ref = ThePrisonerReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  ThePrisonerReferee.className = 'ThePrisonerReferee';\n\n  ThePrisonerReferee.prototype.chooseAction = function() {\n    if (!this.didSetUp) {\n      this.setUp();\n    }\n    return this.controlArcher();\n  };\n\n  ThePrisonerReferee.prototype.setUp = function() {\n    this.didSetUp = true;\n    return this.door = this.world.getThangByID('Weak Door');\n  };\n\n  ThePrisonerReferee.prototype.controlArcher = function() {\n    var archer, enemy;\n    if (!this.door.dead) {\n      return;\n    }\n    archer = this.world.getThangByID('Patrick');\n    enemy = archer.getNearestEnemy();\n    if (enemy) {\n      archer.setTarget(enemy);\n      return archer.setAction('attack');\n    } else {\n      archer.setTarget(archer.getNearestFriend());\n      return archer.setAction('move');\n    }\n  };\n\n  return ThePrisonerReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "54b1773a75e3055205e5a449",
	"original": "54d4fc3ef72c815405f91e73",
	"watchers": [
		"54b1773a75e3055205e5a449",
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "Custom Referee for The Prisoner",
	"codeLanguage": "coffeescript",
	"dependencies": [
		{
			"original": "54977ce657e90bd1903dea72",
			"majorVersion": 0
		}
	],
	"commitMessage": "archer behavior",
	"parent": "54d4fe6a38c90658058a12f5",
	"created": "2015-02-06T20:07:14.421Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 2,
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