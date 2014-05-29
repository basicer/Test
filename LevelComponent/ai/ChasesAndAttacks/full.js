{
	"_id": "538755f8cb18e700007122ae",
	"creator": "512ef4805a67a8c507000001",
	"slug": "chasesandattacks",
	"name": "ChasesAndAttacks",
	"original": "524b7b687fc0f6d51900000f",
	"__v": 0,
	"js": "var ChasesAndAttacks, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nChasesAndAttacks = (function(_super) {\n  __extends(ChasesAndAttacks, _super);\n\n  function ChasesAndAttacks() {\n    _ref = ChasesAndAttacks.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  ChasesAndAttacks.className = \"ChasesAndAttacks\";\n\n  ChasesAndAttacks.prototype.chooseAction = function() {\n    if (!(this.target && this.target.team !== this.team)) {\n      return;\n    }\n    return this.chaseAndAttack(this.target);\n  };\n\n  return ChasesAndAttacks;\n\n})(Component);\n",
	"commitMessage": "",
	"parent": "538697dbcb18e7000071224c",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"official": false,
	"configSchema": {
		"id": "__base__",
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b75ad7fc0f6d519000001",
			"majorVersion": 0
		},
		{
			"original": "524b4150ff92f1f4f8000024",
			"majorVersion": 0
		},
		{
			"original": "524b7ba57fc0f6d519000016",
			"majorVersion": 0
		},
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
		}
	],
	"description": "This Thang chases and attacks its target.",
	"system": "ai",
	"codeLanguage": "coffeescript",
	"searchStrings": "chases and attacks c ch cha chas chase chases chasesa chasesan chasesand chasesanda chasesandat chasesandatt chasesandatta chasesandattac",
	"created": "2014-05-29T15:44:56.058Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 33,
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