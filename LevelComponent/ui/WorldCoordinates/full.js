{
	"_id": "538755f9cb18e700007122c4",
	"creator": "512ef4805a67a8c507000001",
	"slug": "worldcoordinates",
	"name": "WorldCoordinates",
	"original": "524b7b227fc0f6d519000008",
	"__v": 0,
	"js": "var WorldPaths, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nWorldPaths = (function(_super) {\n  __extends(WorldPaths, _super);\n\n  function WorldPaths() {\n    _ref = WorldPaths.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  WorldPaths.className = \"WorldCoordinates\";\n\n  WorldPaths.prototype.showCoordinates = true;\n\n  WorldPaths.prototype.showGrid = false;\n\n  WorldPaths.prototype.attach = function(thang) {\n    thang.world.showCoordinates = this.showCoordinates;\n    return thang.world.showGrid = this.showGrid;\n  };\n\n  return WorldPaths;\n\n})(Component);\n",
	"commitMessage": "",
	"parent": "538697ddcb18e70000712262",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"official": false,
	"configSchema": {
		"properties": {
			"showCoordinates": {
				"type": "boolean",
				"description": "Whether to show the coordinates on mouse hover."
			},
			"showGrid": {
				"type": "boolean",
				"description": "Whether to show the grid. (When? Not implemented yet.)"
			}
		},
		"default": {
			"showCoordinates": true,
			"showGrid": false
		},
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [],
	"description": "This Component is deprecated; use the UI System config instead.",
	"system": "ui",
	"codeLanguage": "coffeescript",
	"searchStrings": "world coordinates w wo wor worl world worldc worldco worldcoo worldcoor worldcoord worldcoordi worldcoordin worldcoordina worldcoordinat",
	"created": "2014-05-29T15:44:57.484Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 33,
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