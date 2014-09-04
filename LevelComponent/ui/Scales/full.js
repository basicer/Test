{
	"_id": "5408e3b8f9f1d400002fc7fb",
	"index": true,
	"slug": "scales",
	"name": "Scales",
	"js": "var Scales,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nScales = (function(_super) {\n  __extends(Scales, _super);\n\n  Scales.className = \"Scales\";\n\n  Scales.prototype.scaleFactor = 1;\n\n  function Scales(config) {\n    Scales.__super__.constructor.call(this, config);\n    this.scaleFactor = config.scaleFactor;\n    if (!this.scaleFactorX) {\n      this.scaleFactorX = null;\n    }\n    if (!this.scaleFactorY) {\n      this.scaleFactorY = null;\n    }\n  }\n\n  Scales.prototype.attach = function(thang) {\n    Scales.__super__.attach.call(this, thang);\n    thang.addTrackedProperties([\"scaleFactor\", \"number\"]);\n    thang.addTrackedProperties([\"scaleFactorX\", \"number\"]);\n    return thang.addTrackedProperties([\"scaleFactorY\", \"number\"]);\n  };\n\n  return Scales;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "52a399b98537a70000000003",
	"__v": 0,
	"commitMessage": "Fixed defaults.",
	"parent": "53ffeccc3ff8ae0000457b95",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"official": false,
	"configSchema": {
		"properties": {
			"scaleFactor": {
				"type": "number",
				"description": "Multiply the initial visual size of the Thang by this much."
			},
			"scaleFactorX": {
				"type": "number",
				"description": "Multiply the initial visual width of the Thang by this much."
			},
			"scaleFactorY": {
				"type": "number",
				"description": "Multiply the initial visual height of the Thang by this much."
			}
		},
		"id": "__base__",
		"default": {
			"scaleFactor": 1,
			"scaleFactorX": 0,
			"scaleFactorY": 0
		},
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b75ad7fc0f6d519000001",
			"majorVersion": 0
		}
	],
	"description": "This Component allows the Thang to change its visual scale.",
	"system": "ui",
	"searchStrings": "scales s sc sca scal",
	"created": "2014-09-04T22:12:08.217Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 7,
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