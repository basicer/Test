{
	"_id": "57437ee2f2770320c70fb4a1",
	"slug": "usesvector",
	"name": "UsesVector",
	"js": "var UsesVector, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nUsesVector = (function(_super) {\n  __extends(UsesVector, _super);\n\n  function UsesVector() {\n    _ref = UsesVector.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  UsesVector.className = 'UsesVector';\n\n  return UsesVector;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "5300f353a0d7500000734d2a",
	"__v": 0,
	"commitMessage": "Anter's argument renaming patch",
	"parent": "53c324a9eb9b12af2e50c338",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"official": false,
	"configSchema": {
		"properties": {
			"programmableVectorProperties": {
				"type": "array",
				"items": {
					"type": "string",
					"enum": [
						"x",
						"y",
						"z",
						"magnitude",
						"heading",
						"distance",
						"dot",
						"equals",
						"copy",
						"add",
						"subtract",
						"multiply",
						"divide",
						"limit",
						"normalize",
						"rotate"
					],
					"description": "Names of Vector functions/properties which should be documented for Programmable methods."
				},
				"default": [
					"x",
					"y",
					"z",
					"magnitude",
					"distance",
					"heading",
					"dot",
					"equals",
					"copy",
					"add",
					"subtract",
					"divide",
					"multiply",
					"limit",
					"normalize",
					"rotate"
				]
			}
		},
		"id": "__base__",
		"additionalProperties": false,
		"type": "object",
		"default": {
			"programmableVectorProperties": [
				"x",
				"y",
				"z",
				"magnitude",
				"distance",
				"heading",
				"dot",
				"equals",
				"copy",
				"add",
				"subtract",
				"divide",
				"multiply",
				"limit",
				"normalize",
				"rotate"
			]
		}
	},
	"dependencies": [],
	"description": "This Component gives the Thang access to properties from the Vector class.",
	"system": "programming",
	"searchStrings": "uses vector u us use uses usesv usesve usesvec usesvect",
	"patches": [],
	"created": "2016-05-23T22:06:26.400Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 15,
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