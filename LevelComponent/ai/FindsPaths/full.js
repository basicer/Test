{
	"_id": "5759ece9e1c8022e39179447",
	"index": true,
	"slug": "findspaths",
	"name": "FindsPaths",
	"js": "var ArgumentError, FindsPaths, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nArgumentError = require('lib/world/errors').ArgumentError;\n\nFindsPaths = (function(_super) {\n  __extends(FindsPaths, _super);\n\n  function FindsPaths() {\n    _ref = FindsPaths.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  FindsPaths.className = 'FindsPaths';\n\n  FindsPaths.prototype.findsPaths = true;\n\n  FindsPaths.prototype.getNavGrid = function() {\n    if (this.aiSystem == null) {\n      this.aiSystem = this.world.getSystem(\"AI\");\n    }\n    return this.aiSystem.getNavGrid();\n  };\n\n  FindsPaths.prototype.isPathClear = function(start, end, targetThang) {\n    var arg, argName, k, _i, _j, _len, _len1, _ref1, _ref2, _ref3;\n    _ref1 = [['start', start], ['end', end]];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      _ref2 = _ref1[_i], argName = _ref2[0], arg = _ref2[1];\n      if (!arg) {\n        throw new ArgumentError(\"Pass an {x: number, y: number} object for the \" + argName + \" position.\", \"isPathClear\", argName, \"object\", arg);\n      }\n      if (arg.pos) {\n        arg = arg.pos;\n      }\n      _ref3 = [\"x\", \"y\", \"z\"];\n      for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {\n        k = _ref3[_j];\n        if (!((_.isNumber(arg[k]) && !_.isNaN(arg[k]) && arg[k] !== Infinity) || (k === \"z\" && (arg[k] == null)))) {\n          throw new ArgumentError(\"Pass an {x: number, y: number} object for the \" + argName + \" position.\", \"isPathClear\", argName, \"object\", arg);\n        }\n      }\n    }\n    if (end.isThang && !targetThang) {\n      targetThang = end;\n    }\n    if (start.pos) {\n      start = start.pos;\n    }\n    if (end.pos) {\n      end = end.pos;\n    }\n    if (this.aiSystem == null) {\n      this.aiSystem = this.world.getSystem(\"AI\");\n    }\n    return this.aiSystem.isPathClear(start, end, targetThang, false);\n  };\n\n  return FindsPaths;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "52872b0ead92b98561000002",
	"__v": 0,
	"commitMessage": "Fix that horrible ReferenceError while trying to throw an ArgumentError",
	"parent": "54ff6059a23351bb037da658",
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
	"dependencies": [
		{
			"original": "524b7b8c7fc0f6d519000013",
			"majorVersion": 0
		}
	],
	"description": "This Component lets the Thang use pathfinding when it moves, and gives it access to the AI System's pathfinding data structures.",
	"system": "ai",
	"searchStrings": "finds paths f fi fin find finds findsp findspa findspat",
	"created": "2016-06-09T22:25:45.540Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 18,
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