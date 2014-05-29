{
	"_id": "538755f5cb18e70000712289",
	"index": true,
	"slug": "talkstoself",
	"name": "TalksToSelf",
	"js": "var TalksToSelf, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nTalksToSelf = (function(_super) {\n  __extends(TalksToSelf, _super);\n\n  function TalksToSelf() {\n    _ref = TalksToSelf.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  TalksToSelf.className = \"TalksToSelf\";\n\n  TalksToSelf.prototype.chooseAction = function() {\n    var s;\n    s = this.action;\n    if (this.target) {\n      s += \" \" + this.target.id;\n    } else if (this.targetPos) {\n      s += \" \" + this.targetPos.toString();\n    }\n    return this.say(s);\n  };\n\n  return TalksToSelf;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "5250bf6d9851b83f4b00000a",
	"__v": 0,
	"commitMessage": "",
	"parent": "538697d9cb18e70000712227",
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
			"original": "524b7b9f7fc0f6d519000015",
			"majorVersion": 0
		},
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		}
	],
	"description": "This Component makes the Thang talk to itself.",
	"system": "ai",
	"codeLanguage": "coffeescript",
	"searchStrings": "talks to self t ta tal talk talks talkst talksto talkstos talkstose",
	"created": "2014-05-29T15:44:53.047Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 5,
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