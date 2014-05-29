{
	"_id": "538755f4cb18e7000071227e",
	"creator": "512ef4805a67a8c507000001",
	"slug": "followsnearest",
	"name": "FollowsNearest",
	"original": "52437c851d9e25b8dc000008",
	"__v": 0,
	"js": "var FollowsNearest, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nFollowsNearest = (function(_super) {\n  __extends(FollowsNearest, _super);\n\n  function FollowsNearest() {\n    _ref = FollowsNearest.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  FollowsNearest.className = \"FollowsNearest\";\n\n  FollowsNearest.prototype.chooseAction = function() {\n    if (this.targetPos) {\n      return;\n    }\n    this.setTarget(this.getNearest());\n    if (this.target && this.action === 'idle' && this.actions.move) {\n      return this.setAction('move');\n    }\n  };\n\n  return FollowsNearest;\n\n})(Component);\n",
	"commitMessage": "",
	"parent": "538697d8cb18e7000071221e",
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
			"original": "524b7b8c7fc0f6d519000013",
			"majorVersion": 0
		},
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		},
		{
			"original": "524b457bff92f1f4f8000031",
			"majorVersion": 0
		}
	],
	"description": "This Thang follows the nearest other Thang.",
	"system": "ai",
	"codeLanguage": "coffeescript",
	"searchStrings": "follows nearest f fo fol foll follo follow follows followsn followsne followsnea followsnear followsneare",
	"created": "2014-05-29T15:44:52.051Z",
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