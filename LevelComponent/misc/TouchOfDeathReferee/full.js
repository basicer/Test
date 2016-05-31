{
	"_id": "574de7ef2f39f92500d8818d",
	"searchStrings": "touch of death referee t to tou touc touch toucho touchof touchofd touchofde touchofdea touchofdeat touchofdeath touchofdeathr touchofdeathre touchofdeathref touchofdeathrefe touchofdeathrefer",
	"index": true,
	"slug": "touchofdeathreferee",
	"name": "TouchOfDeathReferee",
	"js": "var TouchOfDeathReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nTouchOfDeathReferee = (function(_super) {\n  __extends(TouchOfDeathReferee, _super);\n\n  function TouchOfDeathReferee() {\n    _ref = TouchOfDeathReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  TouchOfDeathReferee.className = 'TouchOfDeathReferee';\n\n  TouchOfDeathReferee.prototype.chooseAction = function() {\n    var angle, buildType, built, hero, livingOgre, shouldHaveSpawned;\n    if (!this.didSetup) {\n      this.setup();\n    }\n    shouldHaveSpawned = Math.floor(this.world.age / 8);\n    shouldHaveSpawned *= 3;\n    hero = this.world.getThangByID('Hero Placeholder');\n    livingOgre = hero.getEnemies()[0];\n    if (shouldHaveSpawned > this.built.length && this.world.age < 30) {\n      buildType = this.world.rand.randf() < 0.5 ? 'ogre-munchkin-m' : 'ogre-munchkin-f';\n      this.build(buildType);\n      built = this.performBuild();\n      angle = this.world.rand.randf() * Math.PI * 2;\n      if (livingOgre) {\n        built.pos.x = livingOgre.pos.x + (-0.5 + this.world.rand.randf()) * 2;\n        built.pos.y = livingOgre.pos.y + (-0.5 + this.world.rand.randf()) * 2;\n      } else {\n        built.pos.x = Math.max(8, Math.min(72, hero.pos.x + 30 * Math.cos(angle)));\n        built.pos.y = Math.max(7, Math.min(68, hero.pos.y + 30 * Math.sin(angle)));\n      }\n      return built.hasMoved = true;\n    }\n  };\n\n  TouchOfDeathReferee.prototype.setup = function() {\n    var p, _i, _len, _ref1, _results;\n    this.didSetup = true;\n    _ref1 = this.world.thangs;\n    _results = [];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      p = _ref1[_i];\n      if (p.type === \"palisade\") {\n        _results.push(p.isAttackable = false);\n      }\n    }\n    return _results;\n  };\n\n  return TouchOfDeathReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "54b1773a75e3055205e5a449",
	"original": "5470ca81eb739dbc9d2402f0",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "This Component makes the Thang spawn munchkins for the Touch of Death level.",
	"dependencies": [
		{
			"original": "52d9a6773cf02dcf26000dc4",
			"majorVersion": 0
		}
	],
	"commitMessage": "Make palisades not attackable",
	"parent": "5470cf1eeb739dbc9d2402f9",
	"created": "2016-05-31T19:37:19.223Z",
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