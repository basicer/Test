{
	"_id": "54b56f79bc6fbd40cc5aeb69",
	"creator": "512ef4805a67a8c507000001",
	"slug": "runsaway",
	"name": "RunsAway",
	"original": "52437e74ef76c3dcf5000003",
	"__v": 0,
	"js": "var RunsAway, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nRunsAway = (function(_super) {\n  __extends(RunsAway, _super);\n\n  function RunsAway() {\n    _ref = RunsAway.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  RunsAway.className = \"RunsAway\";\n\n  RunsAway.prototype.chooseAction = function() {\n    var enemy;\n    enemy = this.getNearestEnemy();\n    if (!enemy) {\n      return this.setAction('idle');\n    }\n    this.setTargetPos(Vector.add(this.pos, Vector.subtract(this.pos, enemy.pos).normalize().multiply(9001)));\n    return this.setAction('move');\n  };\n\n  return RunsAway;\n\n})(Component);\n",
	"commitMessage": "Guess we never tried to run this one before.",
	"parent": "538755f9cb18e700007122c1",
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
			"original": "524b7b7c7fc0f6d519000011",
			"majorVersion": 0
		},
		{
			"original": "524b7b747fc0f6d519000010",
			"majorVersion": 0
		}
	],
	"description": "This Thang runs away.",
	"system": "ai",
	"codeLanguage": "coffeescript",
	"searchStrings": "runs away r ru run runs runsa runsaw",
	"created": "2015-01-13T19:18:17.779Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 40,
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