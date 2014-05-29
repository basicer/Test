{
	"_id": "538755f9cb18e700007122c3",
	"creator": "512ef4805a67a8c507000001",
	"slug": "team",
	"name": "Team",
	"js": "var Team,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nTeam = (function(_super) {\n  __extends(Team, _super);\n\n  Team.className = \"Allied\";\n\n  function Team(config) {\n    Team.__super__.constructor.call(this, config);\n    if (this.superteam == null) {\n      this.superteam = this.team;\n    }\n  }\n\n  Team.prototype.attach = function(thang) {};\n\n  return Team;\n\n})(Component);\n",
	"original": "524cc15e3ea855e0ab000114",
	"__v": 0,
	"commitMessage": "",
	"parent": "538697ddcb18e70000712261",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"official": false,
	"configSchema": {
		"properties": {
			"team": {
				"type": "string",
				"description": "Which team this Team Thang represents."
			},
			"superteam": {
				"type": "string",
				"description": "Which superteam this Team Thang represents (or defaults to team)."
			},
			"playable": {
				"type": "boolean",
				"description": "Whether this team is playable by Wizards."
			}
		},
		"default": {
			"team": "humans",
			"playable": true,
			"superteam": ""
		},
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [],
	"description": "This Component is deprecated; use the Alliance System config instead.",
	"system": "alliance",
	"codeLanguage": "coffeescript",
	"searchStrings": "team t te",
	"created": "2014-05-29T15:44:57.473Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 21,
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