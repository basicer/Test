{
	"_id": "574da6e2b1c74d2400e540f2",
	"searchStrings": "defense of plainswood referee d de def defe defen defens defense defenseo defenseof defenseofp defenseofpl defenseofpla defenseofplai defenseofplain defenseofplains defenseofplainsw defenseofplainswo defenseofplainswoo defenseofplainswood defenseofplainswoodr defenseofplainswoodre defenseofplainswoodref defenseofplainswoodrefe defenseofplainswoodrefer",
	"index": true,
	"slug": "defenseofplainswoodreferee",
	"name": "DefenseOfPlainswoodReferee",
	"js": "var DefenseOfPlainswoodReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nDefenseOfPlainswoodReferee = (function(_super) {\n  __extends(DefenseOfPlainswoodReferee, _super);\n\n  function DefenseOfPlainswoodReferee() {\n    _ref = DefenseOfPlainswoodReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  DefenseOfPlainswoodReferee.className = 'DefenseOfPlainswoodReferee';\n\n  DefenseOfPlainswoodReferee.prototype.chooseAction = function() {\n    var f1, f2, o1, o1Stopped, o2, o2Stopped, won;\n    if (this.world.age < 10) {\n      return;\n    }\n    if (this.victoryChecked) {\n      return;\n    }\n    o1 = this.world.getThangByID('Grumus');\n    o2 = this.world.getThangByID('Dronck');\n    o1Stopped = o1.dead || o1.pos.y > 50;\n    o2Stopped = o2.dead || o2.pos.y < 24;\n    f1 = this.world.getThangByID('Fence Wall');\n    f2 = this.world.getThangByID('Fence Wall 1');\n    won = o1.dead && o2.dead;\n    won || (won = o1Stopped && o2Stopped && f1 && f2);\n    won || (won = o1.dead && o2Stopped && f1);\n    won || (won = o2.dead && o1Stopped && f1);\n    won || (won = this.world.age > 15 && o1Stopped && o2Stopped);\n    if (won) {\n      this.world.endWorld(true, 1);\n      return this.victoryChecked = true;\n    }\n  };\n\n  return DefenseOfPlainswoodReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "54b1773a75e3055205e5a449",
	"original": "545af5e84e66c9636ba7e704",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "This Component makes the Thang end the world early in Defense of Plainswood if the ogres are blocked or killed.",
	"dependencies": [
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		}
	],
	"commitMessage": "Don't check for victory before 10 seconds. 9 seconds allowed success by building two fences at the top X.",
	"parent": "547236f9f9f4900000a02244",
	"created": "2016-05-31T14:59:46.921Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 3,
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