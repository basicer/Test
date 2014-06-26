{
	"_id": "53ac5a3c190281670b9790f4",
	"index": true,
	"slug": "usesregexp",
	"name": "UsesRegExp",
	"codeLanguage": "coffeescript",
	"js": "var UsesRegExp, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nUsesRegExp = (function(_super) {\n  __extends(UsesRegExp, _super);\n\n  function UsesRegExp() {\n    _ref = UsesRegExp.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  UsesRegExp.className = \"UsesRegExp\";\n\n  return UsesRegExp;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "53ac54f5190281670b9790ec",
	"watchers": [
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"commitMessage": "Added some more documentation stubs.",
	"parent": "53ac55fb190281670b9790ee",
	"official": false,
	"configSchema": {
		"properties": {
			"programmableRegExpProperties": {
				"type": [
					"array"
				],
				"default": [
					"global",
					"ignoreCase",
					"etc"
				],
				"items": {
					"type": "string",
					"enum": [
						"global",
						"ignoreCase",
						"etc"
					],
					"description": "Names of RegExp functions/properties which should be documented for Programmable methods"
				}
			}
		},
		"additionalProperties": false,
		"type": "object",
		"default": {
			"programmableRegExpProperties": [
				"global",
				"ignoreCase",
				"etc"
			]
		}
	},
	"dependencies": [],
	"description": "This Component holds RegExp property documentation.",
	"system": "programming",
	"created": "2014-06-26T17:37:00.403Z",
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