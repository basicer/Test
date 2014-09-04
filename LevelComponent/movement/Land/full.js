{
	"_id": "5408e3b9f9f1d400002fc843",
	"creator": "512ef4805a67a8c507000001",
	"slug": "land",
	"name": "Land",
	"original": "524b7aff7fc0f6d519000006",
	"__v": 0,
	"js": "var Land, Vector, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nVector = require('lib/world/vector');\n\nLand = (function(_super) {\n  __extends(Land, _super);\n\n  function Land() {\n    _ref = Land.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Land.className = \"Land\";\n\n  Land.prototype.isLand = true;\n\n  Land.prototype.shape = \"sheet\";\n\n  Land.prototype.attach = function(thang) {\n    Land.__super__.attach.call(this, thang);\n    if (!((thang.pos.x != null) || (thang.pos.y != null))) {\n      thang.pos = new Vector(thang.width / 2, thang.height / 2);\n    }\n    return thang.pos.z = 0;\n  };\n\n  return Land;\n\n})(Component);\n",
	"commitMessage": "Fixed defaults.",
	"parent": "53ffeccc3ff8ae0000457b94",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"official": false,
	"configSchema": {
		"properties": {
			"friction": {
				"type": "number",
				"description": "Coefficients of friction or drag used for traction force; 0.7 =~ shoe on floor.",
				"minimum": 0,
				"default": 0.7
			},
			"groundDensity": {
				"type": "number",
				"description": "kg / m^3. For lands like swamps with their own ground drag. Water is 1000.",
				"minimum": 0,
				"default": 0
			},
			"airDensity": {
				"type": "number",
				"description": "kg / m^3. For drag of air on ground and air units.",
				"minimum": 0,
				"default": 1.225
			}
		},
		"id": "__base__",
		"default": {
			"friction": 0.7,
			"groundDensity": 0,
			"airDensity": 1.225
		},
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b4150ff92f1f4f8000024",
			"majorVersion": 0
		},
		{
			"original": "524b75ad7fc0f6d519000001",
			"majorVersion": 0
		}
	],
	"description": "This Thang is a Land upon which other Thangs can locomote.",
	"system": "movement",
	"searchStrings": "land l la",
	"created": "2014-09-04T22:12:09.661Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 37,
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