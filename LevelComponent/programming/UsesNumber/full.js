{
	"_id": "55c405036a6974870542eb79",
	"index": true,
	"slug": "usesnumber",
	"name": "UsesNumber",
	"codeLanguage": "coffeescript",
	"js": "var UsesNumber, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nUsesNumber = (function(_super) {\n  __extends(UsesNumber, _super);\n\n  function UsesNumber() {\n    _ref = UsesNumber.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  UsesNumber.className = \"UsesNumber\";\n\n  return UsesNumber;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "53ac5613190281670b9790ef",
	"watchers": [
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"official": false,
	"configSchema": {
		"additionalProperties": false,
		"properties": {
			"programmableNumberProperties": {
				"type": [
					"array"
				],
				"default": [
					"value",
					"Number.EPSILON",
					"Number.MAX_SAFE_INTEGER",
					"Number.MAX_VALUE",
					"Number.MIN_SAFE_INTEGER",
					"Number.MIN_VALUE",
					"Number.NaN",
					"Number.NEGATIVE_INFINITY",
					"Number.POSITIVE_INFINITY",
					"Number.prototype",
					"Number.isNaN()",
					"Number.isFinite()",
					"Number.isInteger()",
					"Number.isSafeInteger()",
					"Number.parseFloat()",
					"Number.parseInt()",
					"Number.prototype.toExponential()",
					"Number.prototype.toFixed()",
					"Number.prototype.toLocaleString()",
					"Number.prototype.toPrecision()",
					"Number.prototype.toSource()",
					"Number.prototype.toString()",
					"Number.prototype.valueOf()"
				],
				"items": {
					"type": "string",
					"enum": [
						"value",
						"Number.EPSILON",
						"Number.MAX_SAFE_INTEGER",
						"Number.MAX_VALUE",
						"Number.MIN_SAFE_INTEGER",
						"Number.MIN_VALUE",
						"Number.NaN",
						"Number.NEGATIVE_INFINITY",
						"Number.POSITIVE_INFINITY",
						"Number.prototype",
						"Number.isNaN()",
						"Number.isFinite()",
						"Number.isInteger()",
						"Number.isSafeInteger()",
						"Number.parseFloat()",
						"Number.parseInt()",
						"Number.prototype.toExponential()",
						"Number.prototype.toFixed()",
						"Number.prototype.toLocaleString()",
						"Number.prototype.toPrecision()",
						"Number.prototype.toSource()",
						"Number.prototype.toString()",
						"Number.prototype.valueOf()"
					],
					"description": "Names of Number functions/properties which should be documented for Programmable methods"
				}
			}
		},
		"default": {
			"programmableNumberProperties": [
				"value",
				"Number.EPSILON",
				"Number.MAX_SAFE_INTEGER",
				"Number.MAX_VALUE",
				"Number.MIN_SAFE_INTEGER",
				"Number.MIN_VALUE",
				"Number.NaN",
				"Number.NEGATIVE_INFINITY",
				"Number.POSITIVE_INFINITY",
				"Number.prototype",
				"Number.isNaN()",
				"Number.isFinite()",
				"Number.isInteger()",
				"Number.isSafeInteger()",
				"Number.parseFloat()",
				"Number.parseInt()",
				"Number.prototype.toExponential()",
				"Number.prototype.toFixed()",
				"Number.prototype.toLocaleString()",
				"Number.prototype.toPrecision()",
				"Number.prototype.toSource()",
				"Number.prototype.toString()",
				"Number.prototype.valueOf()"
			]
		},
		"type": "object"
	},
	"dependencies": [],
	"description": "This Component holds documentation for the Number builtin.",
	"system": "programming",
	"commitMessage": "Merged in josephmgonzalez's docs. Probably need to standardize naming of the properties, though.",
	"parent": "53ac5a3c190281670b9790f5",
	"searchStrings": "uses number u us use uses usesn usesnu usesnum usesnumb",
	"patches": [],
	"created": "2015-08-07T01:08:19.277Z",
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