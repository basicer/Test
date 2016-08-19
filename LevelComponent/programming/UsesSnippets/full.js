{
	"_id": "57b790058651862000f1e0bd",
	"creator": "57b784cc8cbf7d24004c1254",
	"slug": "usessnippets",
	"name": "UsesSnippets",
	"js": "var UsesSnippets, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nUsesSnippets = (function(_super) {\n  __extends(UsesSnippets, _super);\n\n  function UsesSnippets() {\n    _ref = UsesSnippets.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  UsesSnippets.className = 'UsesSnippets';\n\n  return UsesSnippets;\n\n})(Component);\n",
	"original": "524c81cab8bb087aaf000069",
	"__v": 0,
	"commitMessage": "Diplomat submission for lang es-419: 3 change(s).",
	"parent": "5799456553c500290068a1c7",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"patches": [
		"575e8ca89722c21f00da0b8b",
		"575e8d6bcb02ef270079c473",
		"576a502d6f000f3500b7e216",
		"576a5bc30888791f0086c771",
		"576a5ea14accb72500fae7b8",
		"5785f0be2437842400f2bb48",
		"5785f0e0c82f483500f9d339",
		"579213b3aff3762500cc7ced",
		"579c0a3c53b4b61f00ebfa64",
		"57ac841c4cf9972400730532",
		"57ac89db67fcb74b00feb2bc",
		"57ac8b40634ffa1f003bc82d",
		"57aca5cf414d4f35004d3e25",
		"57aca7b6634ffa1f003c07f1"
	],
	"official": false,
	"configSchema": {
		"properties": {
			"programmableSnippets": {
				"type": "array",
				"items": {
					"type": "string",
					"enum": [
						"if/else",
						"for-loop",
						"while-loop",
						"for-in-loop",
						"objects",
						"arrays",
						"functions",
						"list comprehensions",
						"loop",
						"else",
						"break",
						"continue",
						"while-true loop"
					],
					"description": "Names of code snippets which should be documented for Programmable methods (if/else, for-loop, while-loop, etc.)."
				},
				"default": [
					"if/else",
					"for-loop",
					"while-loop",
					"for-in-loop",
					"objects",
					"arrays",
					"functions",
					"list comprehensions",
					"loop",
					"else",
					"break",
					"continue",
					"while-true loop"
				]
			}
		},
		"additionalProperties": false,
		"type": "object",
		"default": {
			"programmableSnippets": [
				"if/else",
				"for-loop",
				"while-loop",
				"for-in-loop",
				"objects",
				"arrays",
				"functions",
				"list comprehensions",
				"loop",
				"else",
				"break",
				"continue",
				"while-true loop"
			]
		}
	},
	"dependencies": [],
	"description": "This Thang shows code snippets in the spell palette.",
	"system": "programming",
	"searchStrings": "uses snippets u us use uses usess usessn usessni usessnip usessnipp usessnippe",
	"i18nCoverage": [
		"-"
	],
	"created": "2016-08-19T23:02:29.473Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 114,
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