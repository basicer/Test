{
	"_id": "538755f4cb18e70000712280",
	"creator": "512ef4805a67a8c507000001",
	"slug": "followsnearestenemy",
	"name": "FollowsNearestEnemy",
	"original": "52437d53ef76c3dcf5000001",
	"__v": 0,
	"js": "var FollowsNearestEnemy, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nFollowsNearestEnemy = (function(_super) {\n  __extends(FollowsNearestEnemy, _super);\n\n  function FollowsNearestEnemy() {\n    _ref = FollowsNearestEnemy.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  FollowsNearestEnemy.className = \"FollowsNearestEnemy\";\n\n  FollowsNearestEnemy.prototype.chooseAction = function() {\n    if (this.targetPos || (this.target && this.target.team === this.team)) {\n      return;\n    }\n    this.setTarget(this.getNearestEnemy());\n    if (this.target && this.action === 'idle' && this.actions.move) {\n      return this.setAction('move');\n    }\n  };\n\n  return FollowsNearestEnemy;\n\n})(Component);\n",
	"commitMessage": "",
	"parent": "538697d8cb18e7000071221c",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"official": false,
	"configSchema": {
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b7b747fc0f6d519000010",
			"majorVersion": 0
		},
		{
			"original": "524b7b8c7fc0f6d519000013",
			"majorVersion": 0
		},
		{
			"original": "524b7b7c7fc0f6d519000011",
			"majorVersion": 0
		},
		{
			"original": "524b457bff92f1f4f8000031",
			"majorVersion": 0
		}
	],
	"description": "This Thang follows the nearest enemy.",
	"system": "ai",
	"codeLanguage": "coffeescript",
	"searchStrings": "follows nearest enemy f fo fol foll follo follow follows followsn followsne followsnea followsnear followsneare followsneares followsnearest followsneareste followsnearesten followsnearestene",
	"created": "2014-05-29T15:44:52.055Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 39,
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