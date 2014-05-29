{
	"_id": "538755f4cb18e70000712287",
	"creator": "512ef4805a67a8c507000001",
	"slug": "jumpstoomuch",
	"name": "JumpsTooMuch",
	"js": "var JumpsTooMuch, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nJumpsTooMuch = (function(_super) {\n  __extends(JumpsTooMuch, _super);\n\n  function JumpsTooMuch() {\n    _ref = JumpsTooMuch.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  JumpsTooMuch.className = \"JumpsTooMuch\";\n\n  JumpsTooMuch.prototype.chooseAction = function() {\n    if (this.canAct('jump') && this.world.rand.randf() < 0.05) {\n      return this.setAction('jump');\n    }\n  };\n\n  return JumpsTooMuch;\n\n})(Component);\n",
	"original": "524d93f13ea855e0ab00023c",
	"__v": 0,
	"commitMessage": "",
	"parent": "538697d8cb18e70000712223",
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
	"description": "This Thang jumps too much.",
	"system": "ai",
	"codeLanguage": "coffeescript",
	"searchStrings": "jumps too much j ju jum jump jumps jumpst jumpsto jumpstoo jumpstoom jumpstoomu",
	"created": "2014-05-29T15:44:52.888Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 14,
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