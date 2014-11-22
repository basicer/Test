{
	"_id": "547028ff60f6cc37613152cf",
	"searchStrings": "swift dagger referee s sw swi swif swift swiftd swiftda swiftdag swiftdagg swiftdagge swiftdagger swiftdaggerr swiftdaggerre swiftdaggerref swiftdaggerrefe swiftdaggerrefer",
	"index": true,
	"slug": "swiftdaggerreferee",
	"name": "SwiftDaggerReferee",
	"js": "var SwiftDaggerReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nSwiftDaggerReferee = (function(_super) {\n  __extends(SwiftDaggerReferee, _super);\n\n  function SwiftDaggerReferee() {\n    _ref = SwiftDaggerReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  SwiftDaggerReferee.className = 'SwiftDaggerReferee';\n\n  SwiftDaggerReferee.prototype.chooseAction = function() {\n    var angle, buildType, built, hero, shouldHaveSpawned;\n    shouldHaveSpawned = (this.world.age - 1.4) / 1.8;\n    hero = this.world.getThangByID('Hero Placeholder');\n    if (shouldHaveSpawned > this.built.length && this.world.age < 30) {\n      buildType = this.world.rand.randf() < 0.5 ? 'ogre-munchkin-m' : 'ogre-munchkin-f';\n      this.build(buildType);\n      built = this.performBuild();\n      angle = this.world.rand.randf() * Math.PI * 2;\n      built.pos.x = Math.max(8, Math.min(72, hero.pos.x + 30 * Math.cos(angle)));\n      built.pos.y = Math.max(7, Math.min(68, hero.pos.y + 30 * Math.sin(angle)));\n      return built.hasMoved = true;\n    }\n  };\n\n  return SwiftDaggerReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "5470202660f6cc37613152a4",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "This Component makes the Thang spawn munchkins for the Swift Dagger level.",
	"dependencies": [
		{
			"original": "52d9a6773cf02dcf26000dc4",
			"majorVersion": 0
		}
	],
	"commitMessage": "Pretty playable.",
	"parent": "5470250560f6cc37613152ba",
	"created": "2014-11-22T06:11:11.313Z",
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