{
	"_id": "538755f6cb18e70000712299",
	"index": true,
	"slug": "usesstring",
	"name": "UsesString",
	"js": "var UsesString, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nUsesString = (function(_super) {\n  __extends(UsesString, _super);\n\n  function UsesString() {\n    _ref = UsesString.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  UsesString.className = 'UsesString';\n\n  return UsesString;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "5310ef0a5193dafb3e1655bc",
	"__v": 0,
	"commitMessage": "",
	"parent": "538697dacb18e70000712234",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"official": false,
	"configSchema": {
		"properties": {
			"programmableStringProperties": {
				"default": [
					"fromCharCode",
					"fromCodePoint",
					"charAt",
					"charCodeAt",
					"codePointAt",
					"concat",
					"contains",
					"endsWith",
					"indexOf",
					"lastIndexOf",
					"localeCompare",
					"match",
					"repeat",
					"replace",
					"search",
					"slice",
					"split",
					"startsWith",
					"substr",
					"substring",
					"toLocaleLowerCase",
					"toLocaleUpperCase",
					"toLowerCase",
					"toString",
					"toUpperCase",
					"trim",
					"valueOf"
				],
				"items": {
					"type": "string",
					"enum": [
						"fromCharCode",
						"fromCodePoint",
						"link",
						"anchor",
						"big",
						"bold",
						"charAt",
						"charCodeAt",
						"codePointAt",
						"concat",
						"contains",
						"endsWith",
						"fixed",
						"fontcolor",
						"fontsize",
						"indexOf",
						"italics",
						"lastIndexOf",
						"localeCompare",
						"match",
						"repeat",
						"replace",
						"search",
						"slice",
						"small",
						"split",
						"startsWith",
						"strike",
						"sub",
						"substr",
						"substring",
						"sup",
						"toLocaleLowerCase",
						"toLocaleUpperCase",
						"toLowerCase",
						"toString",
						"toUpperCase",
						"trim",
						"valueOf"
					],
					"description": "Name of String functions/properties which should be documented for Programmable Methods"
				},
				"type": "array"
			}
		},
		"id": "__base__",
		"additionalProperties": false,
		"type": "object",
		"default": {
			"programmableStringProperties": [
				"fromCharCode",
				"fromCodePoint",
				"charAt",
				"charCodeAt",
				"codePointAt",
				"concat",
				"contains",
				"endsWith",
				"indexOf",
				"lastIndexOf",
				"localeCompare",
				"match",
				"repeat",
				"replace",
				"search",
				"slice",
				"split",
				"startsWith",
				"substr",
				"substring",
				"toLocaleLowerCase",
				"toLocaleUpperCase",
				"toLowerCase",
				"toString",
				"toUpperCase",
				"trim",
				"valueOf"
			]
		}
	},
	"dependencies": [],
	"description": "This Thang lists String properties in the spell palette.",
	"system": "programming",
	"codeLanguage": "coffeescript",
	"searchStrings": "uses string u us use uses usess usesst usesstr usesstri",
	"created": "2014-05-29T15:44:54.452Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 8,
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