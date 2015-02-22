{
	"_id": "54ea0d80f54ef5794f354f85",
	"searchStrings": "woodland cleaver referee w wo woo wood woodl woodla woodlan woodland woodlandc woodlandcl woodlandcle woodlandclea woodlandcleav woodlandcleave woodlandcleaver woodlandcleaverr woodlandcleaverre woodlandcleaverref woodlandcleaverrefe woodlandcleaverrefer",
	"index": true,
	"slug": "woodlandcleaverreferee",
	"name": "WoodlandCleaverReferee",
	"js": "var WoodlandCleaverReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nWoodlandCleaverReferee = (function(_super) {\n  __extends(WoodlandCleaverReferee, _super);\n\n  function WoodlandCleaverReferee() {\n    _ref = WoodlandCleaverReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  WoodlandCleaverReferee.className = 'WoodlandCleaverReferee';\n\n  WoodlandCleaverReferee.prototype.chooseAction = function() {\n    var buildType, built, shouldHaveSpawned, wave;\n    shouldHaveSpawned = this.world.age * 0.85;\n    wave = Math.floor(this.world.age / 9.9);\n    shouldHaveSpawned += 5.1 * wave;\n    if (shouldHaveSpawned > this.built.length && this.world.age < 21) {\n      buildType = this.world.rand.randf() < 0.5 ? 'ogre-munchkin-m' : 'ogre-munchkin-f';\n      this.build(buildType);\n      built = this.performBuild();\n      built.pos.x = 8 + this.world.rand.randf() * 36;\n      built.pos.y = 8 + this.world.rand.randf() * 30;\n      while (built.distance(this.world.getThangByID('Hero Placeholder')) < 5) {\n        built.pos.x = 8 + this.world.rand.randf() * 36;\n        built.pos.y = 8 + this.world.rand.randf() * 30;\n      }\n      return built.hasMoved = true;\n    }\n  };\n\n  return WoodlandCleaverReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "545e9f6de7f60fd6c55760a8",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "This Component makes the Thang spawn ogres for the Woodland Cleaver level.",
	"dependencies": [
		{
			"original": "52d9a6773cf02dcf26000dc4",
			"majorVersion": 0
		}
	],
	"commitMessage": "Ever so slightly easier.",
	"parent": "54ea0ce4f54ef5794f354f81",
	"created": "2015-02-22T17:10:24.622Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 7,
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