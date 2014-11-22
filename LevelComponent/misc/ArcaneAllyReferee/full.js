{
	"_id": "5470c99deb739dbc9d2402df",
	"searchStrings": "arcane ally referee a ar arc arca arcan arcane arcanea arcaneal arcaneall arcaneally arcaneallyr arcaneallyre arcaneallyref arcaneallyrefe arcaneallyrefer",
	"index": true,
	"slug": "arcaneallyreferee",
	"name": "ArcaneAllyReferee",
	"js": "var ArcaneAllyReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nArcaneAllyReferee = (function(_super) {\n  __extends(ArcaneAllyReferee, _super);\n\n  function ArcaneAllyReferee() {\n    _ref = ArcaneAllyReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  ArcaneAllyReferee.className = 'ArcaneAllyReferee';\n\n  ArcaneAllyReferee.prototype.chooseAction = function() {\n    var angle, buildType, built, hero, shouldHaveSpawned;\n    shouldHaveSpawned = (this.world.age - 6) / 6;\n    if (this.world.age > 12) {\n      shouldHaveSpawned += (this.world.age - 12) / 12;\n    }\n    hero = this.world.getThangByID('Hero Placeholder');\n    if (shouldHaveSpawned > this.built.length && this.world.age < 30) {\n      buildType = 'ogre-m';\n      this.build(buildType);\n      built = this.performBuild();\n      angle = this.world.rand.randf() * Math.PI * 2;\n      built.pos.x = Math.max(8, Math.min(47, hero.pos.x + 10 * Math.cos(angle)));\n      built.pos.y = Math.max(7, Math.min(39, hero.pos.y + 10 * Math.sin(angle)));\n      return built.hasMoved = true;\n    }\n  };\n\n  return ArcaneAllyReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "5470bbf6eb739dbc9d2402cd",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "This Component makes the Thang spawn baddies for the Arcane Ally level.",
	"dependencies": [
		{
			"original": "52d9a6773cf02dcf26000dc4",
			"majorVersion": 0
		}
	],
	"commitMessage": "Playable (if the hero has at least ~312 health...).",
	"parent": "5470c07eeb739dbc9d2402d8",
	"created": "2014-11-22T17:36:29.458Z",
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