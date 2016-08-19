{
	"_id": "57b785d572ded920007ec3ce",
	"searchStrings": "uses jquery u us use uses usesj usesjq usesjqu usesjque",
	"index": true,
	"slug": "usesjquery",
	"name": "UsesJQuery",
	"js": "var UsesJQuery, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nUsesJQuery = (function(_super) {\n  __extends(UsesJQuery, _super);\n\n  function UsesJQuery() {\n    _ref = UsesJQuery.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  UsesJQuery.className = 'UsesJQuery';\n\n  return UsesJQuery;\n\n})(Component);\n",
	"system": "programming",
	"creator": "537d01f484c54c6e05c05989",
	"original": "57ae3f1c8a0d832000de8ba7",
	"watchers": [
		"56c1826bddf178210007cfc5",
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"configSchema": {
		"default": {
			"programmableJQueryProperties": [
				"$",
				"$(this)",
				"css",
				"on",
				"hide",
				"show",
				"addClass",
				"removeClass",
				"siblings",
				"toggleClass"
			],
			"programmableEventsProperties": [
				"click",
				"mousemove"
			]
		},
		"additionalProperties": false,
		"properties": {
			"programmableEventsProperties": {
				"items": {
					"type": "string",
					"enum": [
						"click",
						"mousemove"
					],
					"description": "Name of jQuery events to be documented."
				},
				"type": "array"
			},
			"programmableJQueryProperties": {
				"items": {
					"type": "string",
					"enum": [
						"$",
						"$(this)",
						"css",
						"on",
						"hide",
						"show",
						"addClass",
						"removeClass",
						"siblings",
						"toggleClass"
					],
					"description": "Name of jQuery functions which should be documented"
				},
				"type": "array"
			}
		},
		"type": "object"
	},
	"commitMessage": "Fix toggleClass",
	"parent": "57b76a6f9e3cd32400371b44",
	"description": "This component indicates the Thang does web scripting.",
	"codeLanguage": "coffeescript",
	"dependencies": [
		{
			"original": "578839116f4312bdbd5e7fbf",
			"majorVersion": 0
		}
	],
	"created": "2016-08-19T22:19:01.022Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 13,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "56c1826bddf178210007cfc5"
		},
		{
			"access": "read",
			"target": "public"
		}
	]
}