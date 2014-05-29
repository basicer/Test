{
	"_id": "538755f3cb18e7000071227a",
	"creator": "512ef4805a67a8c507000001",
	"slug": "runsincircles",
	"name": "RunsInCircles",
	"original": "52438245ef76c3dcf5000004",
	"__v": 0,
	"js": "var RunsInCircles, Vector, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nVector = require('lib/world/vector');\n\nRunsInCircles = (function(_super) {\n  __extends(RunsInCircles, _super);\n\n  function RunsInCircles() {\n    _ref = RunsInCircles.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  RunsInCircles.className = \"RunsInCircles\";\n\n  RunsInCircles.prototype.chooseAction = function() {\n    this.setTargetPos(Vector.add(this.self.pos, {\n      x: 10 * Math.cos(this.world.age),\n      y: 10 * Math.sin(this.world.age)\n    }));\n    return this.setAction('move');\n  };\n\n  return RunsInCircles;\n\n})(Component);\n",
	"commitMessage": "",
	"parent": "538697d7cb18e7000071221a",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"official": false,
	"configSchema": {
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b7b8c7fc0f6d519000013",
			"majorVersion": 0
		},
		{
			"original": "524b7b7c7fc0f6d519000011",
			"majorVersion": 0
		},
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		}
	],
	"description": "This Thang runs in circles.",
	"system": "ai",
	"codeLanguage": "coffeescript",
	"searchStrings": "runs in circles r ru run runs runsi runsin runsinc runsinci runsincir runsincirc runsincircl",
	"created": "2014-05-29T15:44:51.223Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 39,
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