{
	"_id": "538755f9cb18e700007122c6",
	"creator": "512ef4805a67a8c507000001",
	"slug": "tinted",
	"name": "Tinted",
	"js": "var Tinted, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nTinted = (function(_super) {\n  __extends(Tinted, _super);\n\n  function Tinted() {\n    _ref = Tinted.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Tinted.className = \"Tinted\";\n\n  return Tinted;\n\n})(Component);\n",
	"original": "524cbf973ea855e0ab0000e7",
	"__v": 0,
	"commitMessage": "",
	"parent": "538697ddcb18e70000712264",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"official": false,
	"configSchema": {
		"properties": {
			"tints": {
				"type": "array",
				"items": {
					"type": "object",
					"additionalProperties": false,
					"properties": {
						"name": {
							"type": "string"
						},
						"hueMin": {
							"type": "integer",
							"minimum": 0,
							"maximum": 360
						},
						"hueMax": {
							"type": "integer",
							"minimum": 0,
							"maximum": 360
						},
						"saturationMin": {
							"type": "integer",
							"minimum": 0,
							"maximum": 100
						},
						"saturationMax": {
							"type": "integer",
							"minimum": 0,
							"maximum": 100
						},
						"lightnessMin": {
							"type": "integer",
							"minimum": 0,
							"maximum": 100
						},
						"lightnessMax": {
							"type": "integer",
							"minimum": 0,
							"maximum": 100
						}
					},
					"required": [
						"name",
						"hueMin",
						"hueMax",
						"saturationMin",
						"saturationMax",
						"lightnessMin",
						"lightnessMax"
					],
					"default": {
						"name": "team",
						"hueMin": 180,
						"hueMax": 180,
						"saturationMin": 50,
						"saturationMax": 50,
						"lightnessMin": 50,
						"lightnessMax": 50
					}
				}
			}
		},
		"additionalProperties": false,
		"type": "object",
		"default": {
			"tints": []
		}
	},
	"dependencies": [],
	"description": "This Thang can be tinted. (Not working yet.)",
	"system": "ui",
	"codeLanguage": "coffeescript",
	"searchStrings": "tinted t ti tin tint",
	"created": "2014-05-29T15:44:57.658Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 22,
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