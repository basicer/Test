{
	"_id": "543422b0a4cc5c900efa47f0",
	"creator": "512ef4805a67a8c507000001",
	"slug": "goal",
	"name": "Goal",
	"original": "524b7b327fc0f6d51900000a",
	"__v": 0,
	"js": "var Goal, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nGoal = (function(_super) {\n  __extends(Goal, _super);\n\n  function Goal() {\n    _ref = Goal.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Goal.className = \"Goal\";\n\n  Goal.prototype.update = function() {\n    var thang, _i, _len, _ref1, _results;\n    _ref1 = this.world.thangs;\n    _results = [];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      thang = _ref1[_i];\n      if (thang.acts && thang.exists && !thang.isLand && thang !== this && this.contains(thang)) {\n        _results.push(this.publishNote(\"thang-touched-goal\", {\n          actor: thang,\n          touched: this\n        }));\n      }\n    }\n    return _results;\n  };\n\n  return Goal;\n\n})(Component);\n",
	"commitMessage": "No change.",
	"parent": "538755f4cb18e70000712286",
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
			"original": "524b4150ff92f1f4f8000024",
			"majorVersion": 0
		},
		{
			"original": "524b75ad7fc0f6d519000001",
			"majorVersion": 0
		}
	],
	"description": "This Thang will send a 'thang-touched-goal' event whenever something touches it.",
	"system": "misc",
	"codeLanguage": "coffeescript",
	"searchStrings": "goal g go",
	"created": "2014-10-07T17:28:16.221Z",
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