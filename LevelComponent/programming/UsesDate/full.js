{
	"_id": "55247a143ae8915631e959de",
	"index": true,
	"slug": "usesdate",
	"name": "UsesDate",
	"codeLanguage": "coffeescript",
	"js": "var UsesDate, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nUsesDate = (function(_super) {\n  __extends(UsesDate, _super);\n\n  function UsesDate() {\n    _ref = UsesDate.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  UsesDate.className = \"UsesDate\";\n\n  return UsesDate;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "53ac5755190281670b9790f0",
	"watchers": [
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"official": false,
	"configSchema": {
		"additionalProperties": false,
		"type": "object",
		"properties": {
			"programmableDateProperties": {
				"type": [
					"array"
				],
				"default": [
					"now",
					"parse",
					"etc"
				],
				"items": {
					"type": "string",
					"enum": [
						"now",
						"parse",
						"etc"
					],
					"description": "Names of Date functions/properties which should be documented for Programmable methods"
				}
			}
		},
		"default": {
			"programmableDateProperties": [
				"now",
				"parse",
				"etc"
			]
		}
	},
	"dependencies": [],
	"description": "This Component holds the Date documentation for Programmable Thangs.",
	"system": "programming",
	"commitMessage": "UsesDate property docs done thanks to Admsugar",
	"parent": "53ac5a3c190281670b9790f6",
	"patches": [],
	"searchStrings": "uses date u us use uses usesd usesda",
	"created": "2015-04-08T00:45:08.145Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 2,
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