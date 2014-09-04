{
	"_id": "5408e3b9f9f1d400002fc842",
	"index": true,
	"slug": "invisible",
	"name": "Invisible",
	"js": "var Invisible, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nInvisible = (function(_super) {\n  __extends(Invisible, _super);\n\n  function Invisible() {\n    _ref = Invisible.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Invisible.className = \"Invisible\";\n\n  Invisible.prototype.attach = function(thang) {\n    Invisible.__super__.attach.call(this, thang);\n    return thang.addTrackedProperties([\"alpha\", \"number\"]);\n  };\n\n  return Invisible;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "52bdf7f58c4289607b00002f",
	"__v": 1,
	"commitMessage": "Fixed defaults.",
	"parent": "538755f5cb18e7000071228b",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"official": false,
	"configSchema": {
		"properties": {
			"alpha": {
				"type": "number",
				"description": "The alpha level of the Thang (0 for fully invisible, 1 for fully visible).",
				"default": 0
			}
		},
		"default": {
			"alpha": 0
		},
		"id": "__base__",
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [],
	"description": "This Component makes the Thang invisible: it shows up in the editor but not the level.",
	"system": "display",
	"codeLanguage": "coffeescript",
	"searchStrings": "invisible i in inv invi invis invisi invisib",
	"patches": [],
	"created": "2014-09-04T22:12:09.583Z",
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