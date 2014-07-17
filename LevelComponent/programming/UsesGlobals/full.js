{
	"_id": "53c85c99ebba77000033a68a",
	"index": true,
	"slug": "usesglobals",
	"name": "UsesGlobals",
	"codeLanguage": "coffeescript",
	"js": "var UsesGlobals, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nUsesGlobals = (function(_super) {\n  __extends(UsesGlobals, _super);\n\n  function UsesGlobals() {\n    _ref = UsesGlobals.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  UsesGlobals.className = \"UsesGlobals\";\n\n  return UsesGlobals;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "53ac4edb190281670b9790e7",
	"watchers": [
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"commitMessage": "Accepted Nemoy's Python globals documentation patch.",
	"parent": "53ac54ad190281670b9790eb",
	"patches": [],
	"official": false,
	"configSchema": {
		"properties": {
			"programmableGlobalProperties": {
				"type": [
					"array"
				],
				"default": [
					"isFinite",
					"isNaN",
					"parseFloat",
					"parseInt",
					"decodeURI",
					"decodeURIComponent",
					"encodeURI",
					"encodeURIComponent",
					"escape",
					"unescape",
					"Infinity",
					"NaN",
					"undefined",
					"null",
					"Boolean",
					"Error",
					"arguments"
				],
				"items": {
					"type": "string",
					"enum": [
						"isFinite",
						"isNaN",
						"parseFloat",
						"parseInt",
						"decodeURI",
						"decodeURIComponent",
						"encodeURI",
						"encodeURIComponent",
						"escape",
						"unescape",
						"Infinity",
						"NaN",
						"undefined",
						"null",
						"Boolean",
						"Error",
						"arguments"
					],
					"description": "Name of Array functions/properties which should be documented for Programmable methods"
				}
			}
		},
		"additionalProperties": false,
		"type": "object",
		"default": {
			"programmableGlobalProperties": [
				"isFinite",
				"isNaN",
				"parseFloat",
				"parseInt",
				"decodeURI",
				"decodeURIComponent",
				"encodeURI",
				"encodeURIComponent",
				"escape",
				"unescape",
				"Infinity",
				"NaN",
				"undefined",
				"null",
				"Boolean",
				"Error",
				"arguments"
			]
		}
	},
	"dependencies": [],
	"description": "This Component exists just to hold documentation for various JS global objects.",
	"system": "programming",
	"created": "2014-07-17T23:30:33.414Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 3,
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