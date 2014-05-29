{
	"_id": "538755f3cb18e7000071227b",
	"creator": "512ef4805a67a8c507000001",
	"slug": "attacksself",
	"name": "AttacksSelf",
	"original": "52437b061d9e25b8dc000004",
	"__v": 0,
	"js": "var AttacksSelf, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nAttacksSelf = (function(_super) {\n  __extends(AttacksSelf, _super);\n\n  function AttacksSelf() {\n    _ref = AttacksSelf.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  AttacksSelf.className = \"AttacksSelf\";\n\n  AttacksSelf.prototype.chooseAction = function() {\n    return this.attack(this);\n  };\n\n  return AttacksSelf;\n\n})(Component);\n",
	"commitMessage": "",
	"parent": "538697d7cb18e70000712218",
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
			"original": "524b7ba57fc0f6d519000016",
			"majorVersion": 0
		},
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		}
	],
	"description": "This Component makes the Thang attack itself.",
	"system": "ai",
	"codeLanguage": "coffeescript",
	"searchStrings": "attacks self a at att atta attac attack attacks attackss attacksse",
	"created": "2014-05-29T15:44:51.224Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 41,
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