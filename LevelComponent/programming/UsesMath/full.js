{
	"_id": "53c3ec1c84ca76000062333d",
	"creator": "512ef4805a67a8c507000001",
	"slug": "usesmath",
	"name": "UsesMath",
	"js": "var UsesMath, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nUsesMath = (function(_super) {\n  __extends(UsesMath, _super);\n\n  function UsesMath() {\n    _ref = UsesMath.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  UsesMath.className = 'UsesMath';\n\n  return UsesMath;\n\n})(Component);\n",
	"original": "524c81fcb8bb087aaf00006a",
	"__v": 0,
	"commitMessage": "Accepted Nemoy's test snippets patches.",
	"parent": "538755f6cb18e70000712295",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"patches": [],
	"official": false,
	"configSchema": {
		"properties": {
			"programmableMathProperties": {
				"type": "array",
				"items": {
					"type": "string",
					"enum": [
						"pow",
						"sqrt",
						"sin",
						"cos",
						"tan",
						"atan2",
						"PI",
						"random",
						"abs",
						"floor",
						"ceil",
						"round",
						"min",
						"max",
						"E",
						"LN10",
						"LN2",
						"LOG10E",
						"LOG2E",
						"SQRT1_2",
						"SQRT2",
						"acos",
						"acosh",
						"asin",
						"asinh",
						"atan",
						"atanh",
						"cbrt",
						"cosh",
						"exp",
						"expm1",
						"fround",
						"hypot",
						"imul",
						"log",
						"log10",
						"log1p",
						"log2",
						"sign",
						"sinh",
						"tanh",
						"trunc"
					],
					"description": "Names of Math functions/properties which should be documented for Programmable methods."
				},
				"default": [
					"pow",
					"sqrt",
					"sin",
					"cos",
					"tan",
					"atan2",
					"PI",
					"random",
					"abs",
					"floor",
					"ceil",
					"round",
					"min",
					"max"
				]
			}
		},
		"id": "__base__",
		"additionalProperties": false,
		"type": "object",
		"default": {
			"programmableMathProperties": [
				"pow",
				"sqrt",
				"sin",
				"cos",
				"tan",
				"atan2",
				"PI",
				"random",
				"abs",
				"floor",
				"ceil",
				"round",
				"min",
				"max"
			]
		}
	},
	"dependencies": [],
	"description": "This Thang shows Math functions in the spell palette.",
	"system": "programming",
	"created": "2014-07-14T14:41:32.147Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 39,
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