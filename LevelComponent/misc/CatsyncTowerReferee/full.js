{
	"_id": "54de78d7e7b94b5305761627",
	"searchStrings": "catsync tower referee c ca cat cats catsy catsyn catsync catsynct catsyncto catsynctow catsynctowe catsynctower catsynctowerr catsynctowerre catsynctowerref catsynctowerrefe catsynctowerrefer",
	"index": true,
	"slug": "catsynctowerreferee",
	"name": "CatsyncTowerReferee",
	"js": "var CatsyncTowerReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCatsyncTowerReferee = (function(_super) {\n  __extends(CatsyncTowerReferee, _super);\n\n  function CatsyncTowerReferee() {\n    _ref = CatsyncTowerReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  CatsyncTowerReferee.className = 'CatsyncTowerReferee';\n\n  CatsyncTowerReferee.prototype.chooseAction = function() {\n    var grif;\n    grif = this.world.getThangByID('Grif');\n    grif.setTargetPos({\n      x: 8,\n      y: 16\n    });\n    grif.setAction('move');\n    return grif.act();\n  };\n\n  return CatsyncTowerReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "54b1773a75e3055205e5a449",
	"original": "54dc2bdc55d6ed5205be80ea",
	"watchers": [
		"54b1773a75e3055205e5a449",
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "Catsync's test referee.",
	"codeLanguage": "coffeescript",
	"dependencies": [
		{
			"original": "54977ce657e90bd1903dea72",
			"majorVersion": 0
		}
	],
	"commitMessage": "",
	"parent": "54de74a09978465805ea7bf4",
	"created": "2015-02-13T22:21:11.370Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 7,
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