{
	"_id": "562969158c3297a65d5daaf6",
	"index": true,
	"slug": "usesjson",
	"name": "UsesJSON",
	"codeLanguage": "coffeescript",
	"js": "var UsesJSON, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nUsesJSON = (function(_super) {\n  __extends(UsesJSON, _super);\n\n  function UsesJSON() {\n    _ref = UsesJSON.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  UsesJSON.className = \"UsesJSON\";\n\n  return UsesJSON;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "53ac58d5190281670b9790f2",
	"watchers": [
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"official": false,
	"configSchema": {
		"additionalProperties": false,
		"type": "object",
		"properties": {
			"programmableJSONProperties": {
				"type": [
					"array"
				],
				"default": [
					"parse",
					"stringify"
				],
				"items": {
					"type": "string",
					"enum": [
						"parse",
						"stringify"
					],
					"description": "Names of JSON functions/properties which should be documented for Programmable methods"
				}
			}
		},
		"default": {
			"programmableJSONProperties": [
				"parse",
				"stringify"
			]
		}
	},
	"dependencies": [],
	"description": "This Component holds the JSON documentation for programmable Thangs.",
	"system": "programming",
	"commitMessage": "Accepted Peter Fitzgibbons's docs patch.",
	"parent": "53ac5a3c190281670b9790f8",
	"patches": [],
	"searchStrings": "uses json u us use uses usesj usesjs",
	"created": "2015-10-22T22:54:13.638Z",
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