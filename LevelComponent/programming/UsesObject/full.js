{
	"_id": "538755f6cb18e70000712298",
	"index": true,
	"slug": "usesobject",
	"name": "UsesObject",
	"js": "var UsesObject, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nUsesObject = (function(_super) {\n  __extends(UsesObject, _super);\n\n  function UsesObject() {\n    _ref = UsesObject.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  UsesObject.className = \"UsesObject\";\n\n  return UsesObject;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "53121850f4374900009119a6",
	"__v": 0,
	"commitMessage": "",
	"parent": "538697dacb18e70000712237",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"official": false,
	"configSchema": {
		"properties": {
			"programmableObjectProperties": {
				"type": [
					"array"
				],
				"items": {
					"type": [
						"string"
					],
					"enum": [
						"create",
						"defineProperty",
						"defineProperties",
						"freeze",
						"getOwnPropertyDescriptor",
						"getOwnPropertyNames",
						"getPrototypeOf",
						"is",
						"isExtensible",
						"isFrozen",
						"isSealed",
						"keys",
						"preventExtensions",
						"seal",
						"setPrototypeOf"
					],
					"description": "Name of Object Methods/Properties which should be documented for Programmable methods."
				},
				"default": [
					"create",
					"defineProperty",
					"defineProperties",
					"freeze",
					"getOwnPropertyDescriptor",
					"getOwnPropertyNames",
					"getPrototypeOf",
					"is",
					"isExtensible",
					"isFrozen",
					"isSealed",
					"keys",
					"preventExtensions",
					"seal",
					"setPrototypeOf"
				]
			}
		},
		"additionalProperties": false,
		"type": "object",
		"default": {
			"programmableObjectProperties": [
				"create",
				"defineProperty",
				"defineProperties",
				"freeze",
				"getOwnPropertyDescriptor",
				"getOwnPropertyNames",
				"getPrototypeOf",
				"is",
				"isExtensible",
				"isFrozen",
				"isSealed",
				"keys",
				"preventExtensions",
				"seal",
				"setPrototypeOf"
			]
		}
	},
	"dependencies": [],
	"description": "This Component shows the Object functions in the spell palette.",
	"system": "programming",
	"codeLanguage": "coffeescript",
	"searchStrings": "uses object u us use uses useso usesob usesobj usesobje",
	"created": "2014-05-29T15:44:54.445Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 4,
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