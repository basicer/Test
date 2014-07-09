{
	"_id": "53bd6b1c307ca58a91257a25",
	"creator": "512ef4805a67a8c507000001",
	"slug": "worldexpires",
	"name": "WorldExpires",
	"original": "524b7b2c7fc0f6d519000009",
	"__v": 0,
	"js": "var WorldExpires, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nWorldExpires = (function(_super) {\n  __extends(WorldExpires, _super);\n\n  function WorldExpires() {\n    _ref = WorldExpires.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  WorldExpires.className = \"WorldExpires\";\n\n  WorldExpires.prototype.attach = function(thang) {\n    thang.world.totalFrames = thang.world.maxTotalFrames = this.lifespan * thang.world.frameRate;\n    return thang.world.lifespan = this.lifespan;\n  };\n\n  return WorldExpires;\n\n})(Component);\n",
	"commitMessage": "Accepted Gosnat's deprecation patch.",
	"parent": "538755f4cb18e70000712285",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"patches": [],
	"codeLanguage": "coffeescript",
	"official": false,
	"configSchema": {
		"properties": {
			"lifespan": {
				"type": "number",
				"description": "How many seconds this level will run, max, before ending in defeat.",
				"minimum": 0,
				"exclusiveMinimum": true
			}
		},
		"default": {
			"lifespan": 30
		},
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [],
	"description": "This Component attaches to the Interface instead of a concrete Thang and controls how long the World simulation will run for. Deprecated: use the Existence System instead",
	"system": "existence",
	"searchStrings": "world expires w wo wor worl world worlde worldex worldexp worldexpi worldexpir",
	"created": "2014-07-09T16:17:32.839Z",
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