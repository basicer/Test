{
	"_id": "54edfec27d575d55c0e7ae6f",
	"slug": "kithgardbrawlreferee",
	"searchStrings": "kithgard brawl referee k ki kit kith kithg kithga kithgar kithgard kithgardb kithgardbr kithgardbra kithgardbraw kithgardbrawl kithgardbrawlr kithgardbrawlre kithgardbrawlref kithgardbrawlrefe kithgardbrawlrefer",
	"name": "KithgardBrawlReferee",
	"js": "var KithgardBrawlReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nKithgardBrawlReferee = (function(_super) {\n  __extends(KithgardBrawlReferee, _super);\n\n  function KithgardBrawlReferee() {\n    _ref = KithgardBrawlReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  KithgardBrawlReferee.className = 'KithgardBrawlReferee';\n\n  KithgardBrawlReferee.prototype.chooseAction = function() {\n    if (!this.didSetUp) {\n      this.setUp();\n    }\n    return this.spawnPotions();\n  };\n\n  KithgardBrawlReferee.prototype.setUp = function() {\n    this.didSetUp = true;\n    return this.hero = this.world.getThangByID('Hero Placeholder');\n  };\n\n  KithgardBrawlReferee.prototype.spawnPotions = function() {\n    var pos, potion;\n    potion = this.world.getThangByID('Health Potion Large');\n    if (potion) {\n      return;\n    }\n    if (this.hero.health > this.hero.maxHealth * 0.75) {\n      return;\n    }\n    if (Math.random() > 0.1) {\n      return;\n    }\n    pos = this.pickPointFromRegions([this.rectangles.middle]);\n    return this.instabuild('health-potion-large', pos.x, pos.y);\n  };\n\n  KithgardBrawlReferee.prototype.getRandom = function(min, max) {\n    return Math.floor(Math.random() * (max - min + 1)) + min;\n  };\n\n  return KithgardBrawlReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "54ed436b620aa55405623c1e",
	"watchers": [
		"54b1773a75e3055205e5a449",
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "Custom Referee for Kithgard Brawl",
	"codeLanguage": "coffeescript",
	"dependencies": [
		{
			"original": "54977ce657e90bd1903dea72",
			"majorVersion": 0
		}
	],
	"commitMessage": "No need for little semicolon, precious.",
	"index": true,
	"parent": "54ed54e5f7604e5105a6f793",
	"created": "2015-02-25T16:56:34.404Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 4,
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