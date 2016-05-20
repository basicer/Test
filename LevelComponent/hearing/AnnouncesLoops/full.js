{
	"_id": "573fa0ab3e910f115e5e4638",
	"searchStrings": "announces loops a an ann anno annou announ announc announce announces announcesl announceslo announcesloo",
	"index": true,
	"slug": "announcesloops",
	"name": "AnnouncesLoops",
	"js": "var AnnouncesLoops, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nAnnouncesLoops = (function(_super) {\n  __extends(AnnouncesLoops, _super);\n\n  function AnnouncesLoops() {\n    _ref = AnnouncesLoops.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  AnnouncesLoops.className = 'AnnouncesLoops';\n\n  AnnouncesLoops.prototype.onAetherYield = function(yieldValue) {\n    var times;\n    if (yieldValue !== 'simple loop') {\n      return;\n    }\n    if (this.simpleLoopCount == null) {\n      this.simpleLoopCount = 0;\n    }\n    ++this.simpleLoopCount;\n    times = this.simpleLoopCount > 1 ? 'times' : 'time';\n    return this.sayWithoutBlocking(\"Repeating loop, \" + this.simpleLoopCount + \" \" + times);\n  };\n\n  return AnnouncesLoops;\n\n})(Component);\n",
	"system": "hearing",
	"creator": "512ef4805a67a8c507000001",
	"original": "54543c13d351b630bfcd2564",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "This Component makes the Thang announce when it's repeating a simple loop.",
	"dependencies": [
		{
			"original": "524b7b9f7fc0f6d519000015",
			"majorVersion": 0
		}
	],
	"commitMessage": "sayWithoutBlocking",
	"parent": "5454f97ad351b630bfcd25c3",
	"created": "2016-05-20T23:41:31.581Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 5,
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