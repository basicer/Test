{
	"_id": "53c56fef1de550d218f5ca4d",
	"index": true,
	"slug": "usesarray",
	"name": "UsesArray",
	"js": "var UsesArray, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nUsesArray = (function(_super) {\n  __extends(UsesArray, _super);\n\n  function UsesArray() {\n    _ref = UsesArray.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  UsesArray.className = \"UsesArray\";\n\n  return UsesArray;\n\n})(Component);\n",
	"creator": "5162fab9c92b4c751e000274",
	"original": "5310eda75193dafb3e1655ba",
	"__v": 0,
	"commitMessage": "Accepted patch.",
	"parent": "538755facb18e700007122cf",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"patches": [],
	"official": false,
	"configSchema": {
		"properties": {
			"programmableArrayProperties": {
				"type": [
					"array"
				],
				"default": [
					"isArray",
					"concat",
					"entries",
					"every",
					"filter",
					"find",
					"findIndex",
					"forEach",
					"indexOf",
					"join",
					"keys",
					"lastIndexOf",
					"map",
					"pop",
					"push",
					"reduce",
					"reduceRight",
					"reverse",
					"shift",
					"slice",
					"some",
					"sort",
					"splice",
					"toLocaleString",
					"toString",
					"unshift"
				],
				"items": {
					"type": "string",
					"enum": [
						"isArray",
						"concat",
						"entries",
						"every",
						"filter",
						"find",
						"findIndex",
						"forEach",
						"indexOf",
						"join",
						"keys",
						"lastIndexOf",
						"map",
						"pop",
						"push",
						"reduce",
						"reduceRight",
						"reverse",
						"shift",
						"slice",
						"some",
						"sort",
						"splice",
						"toLocaleString",
						"toString",
						"unshift"
					],
					"description": "Name of Array functions/properties which should be documented for Programmable methods"
				}
			}
		},
		"additionalProperties": false,
		"type": "object",
		"default": {
			"programmableArrayProperties": [
				"isArray",
				"concat",
				"entries",
				"every",
				"filter",
				"find",
				"findIndex",
				"forEach",
				"indexOf",
				"join",
				"keys",
				"lastIndexOf",
				"map",
				"pop",
				"push",
				"reduce",
				"reduceRight",
				"reverse",
				"shift",
				"slice",
				"some",
				"sort",
				"splice",
				"toLocaleString",
				"toString",
				"unshift"
			]
		}
	},
	"dependencies": [],
	"description": "This Thang shows Array functions in the spell palette.",
	"system": "programming",
	"searchStrings": "uses array u us use uses usesa usesar usesarr",
	"created": "2014-07-15T18:16:15.135Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 10,
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