{
	"_id": "538755f4cb18e70000712282",
	"creator": "512ef4805a67a8c507000001",
	"slug": "jumpsforeverandever",
	"name": "JumpsForeverAndEver",
	"original": "52437b981d9e25b8dc000007",
	"__v": 0,
	"js": "var JumpsForeverAndEver, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nJumpsForeverAndEver = (function(_super) {\n  __extends(JumpsForeverAndEver, _super);\n\n  function JumpsForeverAndEver() {\n    _ref = JumpsForeverAndEver.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  JumpsForeverAndEver.className = \"JumpsForeverAndEver\";\n\n  JumpsForeverAndEver.prototype.chooseAction = function() {\n    if (this.canAct('jump')) {\n      return this.setAction('jump');\n    }\n  };\n\n  return JumpsForeverAndEver;\n\n})(Component);\n",
	"commitMessage": "",
	"parent": "538697d8cb18e7000071221d",
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
			"original": "524b1f54d768d916b5000001",
			"majorVersion": 0
		},
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		}
	],
	"description": "This Thang just keeps jumping, up and down, forever.",
	"system": "ai",
	"codeLanguage": "coffeescript",
	"searchStrings": "jumps forever and ever j ju jum jump jumps jumpsf jumpsfo jumpsfor jumpsfore jumpsforev jumpsforeve jumpsforever jumpsforevera jumpsforeveran jumpsforeverand jumpsforeverande jumpsforeverandev",
	"created": "2014-05-29T15:44:52.057Z",
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