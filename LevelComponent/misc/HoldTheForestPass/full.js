{
	"_id": "573f9ec43e910f115e5e462f",
	"searchStrings": "hold the forest pass h ho hol hold holdt holdth holdthe holdthef holdthefo holdthefor holdthefore holdthefores holdtheforest holdtheforestp holdtheforestpa",
	"index": true,
	"slug": "holdtheforestpass",
	"name": "HoldTheForestPass",
	"js": "var HoldTheForestPass, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nHoldTheForestPass = (function(_super) {\n  __extends(HoldTheForestPass, _super);\n\n  function HoldTheForestPass() {\n    _ref = HoldTheForestPass.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  HoldTheForestPass.className = 'HoldTheForestPass';\n\n  HoldTheForestPass.prototype.chooseAction = function() {\n    return this.doChatter();\n  };\n\n  HoldTheForestPass.prototype.setUpLevel = function() {\n    return this.hero = this.world.getThangByID('Hero Placeholder');\n  };\n\n  HoldTheForestPass.prototype.doChatter = function() {\n    var now;\n    now = Math.round(this.world.age);\n    if (now === 2) {\n      this.hero.sayWithoutBlocking(\"Ogres! To Arms!\");\n    }\n    if (now === 7) {\n      this.hero.sayWithoutBlocking(\"More incoming!\");\n    }\n    if (now === 19) {\n      return this.hero.sayWithoutBlocking(\"One more wave! Hold them off!\");\n    }\n  };\n\n  return HoldTheForestPass;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "54b832bae60b1f54059c2326",
	"watchers": [
		"54b1773a75e3055205e5a449"
	],
	"__v": 0,
	"commitMessage": "Don't risk hero blocking when saying",
	"parent": "54bff818497cf8f00c78ddff",
	"created": "2016-05-20T23:33:24.667Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 5,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "54b1773a75e3055205e5a449"
		},
		{
			"access": "read",
			"target": "public"
		}
	]
}