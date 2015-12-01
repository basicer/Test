{
	"_id": "565dbf80b1b6aee203eb9c57",
	"index": true,
	"slug": "trackstime",
	"name": "TracksTime",
	"js": "var TracksTime, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nTracksTime = (function(_super) {\n  __extends(TracksTime, _super);\n\n  function TracksTime() {\n    _ref = TracksTime.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  TracksTime.className = 'TracksTime';\n\n  TracksTime.prototype.now = function() {\n    return this.world.age;\n  };\n\n  return TracksTime;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "52fe70f15cd2082e2422be16",
	"__v": 0,
	"commitMessage": "Capturing return values in snippets.",
	"parent": "56030fe360537b870537cdb0",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"patches": [],
	"official": false,
	"configSchema": {
		"id": "__base__",
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [],
	"description": "This Component gives the Thang a now() method to track world.age.",
	"system": "existence",
	"searchStrings": "tracks time t tr tra trac track tracks trackst tracksti",
	"created": "2015-12-01T15:40:48.466Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 12,
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