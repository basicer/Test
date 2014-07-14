{
	"_id": "53c43b927a51f4b406dce9d8",
	"slug": "expires",
	"creator": "512ef4805a67a8c507000001",
	"name": "Expires",
	"js": "var Expires, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nExpires = (function(_super) {\n  __extends(Expires, _super);\n\n  function Expires() {\n    _ref = Expires.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Expires.className = \"Expires\";\n\n  Expires.prototype.update = function() {\n    this.lifespan -= this.world.dt;\n    if (this.lifespan <= 0) {\n      return this.setExists(false);\n    }\n  };\n\n  return Expires;\n\n})(Component);\n",
	"original": "524cbca43ea855e0ab000090",
	"__v": 0,
	"commitMessage": "",
	"parent": "538755f4cb18e70000712288",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"official": false,
	"configSchema": {
		"properties": {
			"lifespan": {
				"type": "number",
				"description": "How many seconds this Thang will exist.",
				"exclusiveMinimum": true,
				"minimum": 0,
				"format": "seconds"
			}
		},
		"additionalProperties": false,
		"type": "object",
		"default": {
			"lifespan": 0
		}
	},
	"dependencies": [
		{
			"original": "524b4150ff92f1f4f8000024",
			"majorVersion": 0
		}
	],
	"description": "This Thang ceases to exist after a certain period of time.",
	"system": "existence",
	"searchStrings": "expires e ex exp expi expir",
	"created": "2014-07-14T20:20:34.308Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 27,
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