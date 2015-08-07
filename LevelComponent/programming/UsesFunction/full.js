{
	"_id": "55c4050229ae768805f42d4f",
	"index": true,
	"slug": "usesfunction",
	"name": "UsesFunction",
	"codeLanguage": "coffeescript",
	"js": "var UsesFunction, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nUsesFunction = (function(_super) {\n  __extends(UsesFunction, _super);\n\n  function UsesFunction() {\n    _ref = UsesFunction.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  UsesFunction.className = \"UsesFunction\";\n\n  return UsesFunction;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "53ac57db190281670b9790f1",
	"watchers": [
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"official": false,
	"configSchema": {
		"additionalProperties": false,
		"type": "object",
		"properties": {
			"programmableFunctionProperties": {
				"type": [
					"array"
				],
				"default": [
					"argN",
					"functionBody",
					"function.arguments",
					"function.caller",
					"function.length",
					"function.name",
					"function.displayName",
					"function.prototype.constructor",
					"function.prototype.apply()",
					"function.prototype.bind()",
					"function.prototype.call()",
					"function.prototype.isGenerator()",
					"function.prototype.toSource()",
					"function.prototype.toString()"
				],
				"items": {
					"enum": [
						"argN",
						"functionBody",
						"function.arguments",
						"function.caller",
						"function.length",
						"function.name",
						"function.displayName",
						"function.prototype.constructor",
						"function.prototype.apply()",
						"function.prototype.bind()",
						"function.prototype.call()",
						"function.prototype.isGenerator()",
						"function.prototype.toSource()",
						"function.prototype.toString()"
					],
					"type": "string"
				}
			}
		},
		"default": {
			"programmableFunctionProperties": [
				"argN",
				"functionBody",
				"function.arguments",
				"function.caller",
				"function.length",
				"function.name",
				"function.displayName",
				"function.prototype.constructor",
				"function.prototype.apply()",
				"function.prototype.bind()",
				"function.prototype.call()",
				"function.prototype.isGenerator()",
				"function.prototype.toSource()",
				"function.prototype.toString()"
			]
		}
	},
	"dependencies": [],
	"description": "This Component holds Function property documentation for Programmable Thangs.",
	"system": "programming",
	"commitMessage": "Merged in josephmgonzalez's docs. Probably need to standardize naming of the properties, though.",
	"parent": "53ac5a3c190281670b9790f7",
	"searchStrings": "uses function u us use uses usesf usesfu usesfun usesfunc usesfunct usesfuncti",
	"patches": [],
	"created": "2015-08-07T01:08:18.310Z",
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