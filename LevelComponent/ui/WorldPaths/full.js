{
	"_id": "538755f9cb18e700007122c7",
	"creator": "512ef4805a67a8c507000001",
	"slug": "worldpaths",
	"name": "WorldPaths",
	"original": "524b7b1a7fc0f6d519000007",
	"__v": 0,
	"js": "var WorldPaths, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nWorldPaths = (function(_super) {\n  __extends(WorldPaths, _super);\n\n  function WorldPaths() {\n    _ref = WorldPaths.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  WorldPaths.className = \"WorldPaths\";\n\n  WorldPaths.prototype.showPaths = 'paused';\n\n  WorldPaths.prototype.attach = function(thang) {\n    return thang.world.showPaths = this.showPaths;\n  };\n\n  return WorldPaths;\n\n})(Component);\n",
	"commitMessage": "",
	"parent": "538697ddcb18e70000712265",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"official": false,
	"configSchema": {
		"properties": {
			"showPaths": {
				"type": "string",
				"enum": [
					"never",
					"paused",
					"selected",
					"always"
				],
				"description": "When to show past/future paths for Thangs in the World."
			}
		},
		"default": {
			"showPaths": "paused"
		},
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [],
	"description": "This Component is deprecated; use the UI System config instead.",
	"system": "ui",
	"codeLanguage": "coffeescript",
	"searchStrings": "world paths w wo wor worl world worldp worldpa worldpat",
	"created": "2014-05-29T15:44:57.739Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 34,
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