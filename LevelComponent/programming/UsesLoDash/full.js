{
	"_id": "53ac5dd023798d3605a8860d",
	"index": true,
	"slug": "useslodash",
	"name": "UsesLoDash",
	"codeLanguage": "coffeescript",
	"js": "var UsesLoDash, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nUsesLoDash = (function(_super) {\n  __extends(UsesLoDash, _super);\n\n  function UsesLoDash() {\n    _ref = UsesLoDash.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  UsesLoDash.className = \"UsesLoDash\";\n\n  return UsesLoDash;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "53ac5d579eff34370591d949",
	"watchers": [
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"official": false,
	"configSchema": {
		"additionalProperties": false,
		"type": "object",
		"properties": {
			"programmableLoDashProperties": {
				"type": [
					"array"
				],
				"default": [
					"filter",
					"without",
					"etc"
				],
				"items": {
					"type": "string",
					"enum": [
						"filter",
						"without",
						"etc"
					],
					"description": "Names of Lo-Dash functions/properties which should be documented for Programmable methods"
				}
			}
		},
		"default": {
			"programmableLoDashProperties": [
				"filter",
				"without",
				"etc"
			]
		}
	},
	"dependencies": [],
	"description": "This Component holds Lo-Dash property documentation.",
	"system": "programming",
	"commitMessage": "Added Lo-Dash docs stub.",
	"parent": "53ac5d579eff34370591d949",
	"searchStrings": "uses lo dash u us use uses usesl useslo useslod usesloda",
	"created": "2014-06-26T17:52:16.620Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 1,
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