{
	"_id": "5408e3b8f9f1d400002fc7f8",
	"index": true,
	"slug": "bobs",
	"name": "Bobs",
	"js": "var Bobs, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nBobs = (function(_super) {\n  __extends(Bobs, _super);\n\n  function Bobs() {\n    _ref = Bobs.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Bobs.className = \"Bobs\";\n\n  return Bobs;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "52c8db98a87ed54d100004d7",
	"__v": 0,
	"commitMessage": "Fixed defaults.",
	"parent": "538755f5cb18e7000071228e",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"official": false,
	"configSchema": {
		"default": {
			"bobHeight": 0.5,
			"bobTime": 1
		},
		"properties": {
			"bobHeight": {
				"type": "number",
				"description": "How high the Thang bobs, in meters.",
				"default": 0.5,
				"format": "meters"
			},
			"bobTime": {
				"type": "number",
				"description": "The Thang's bob interval, in seconds.",
				"format": "seconds",
				"default": 1
			}
		},
		"id": "__base__",
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b75ad7fc0f6d519000001",
			"majorVersion": 0
		}
	],
	"description": "This Component makes the Thang bob up and down (display-only).",
	"system": "display",
	"codeLanguage": "coffeescript",
	"searchStrings": "bobs b bo",
	"created": "2014-09-04T22:12:08.163Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 9,
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