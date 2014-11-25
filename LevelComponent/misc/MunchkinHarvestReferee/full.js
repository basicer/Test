{
	"_id": "54750a911024b93f0c128161",
	"searchStrings": "munchkin harvest referee m mu mun munc munch munchk munchki munchkin munchkinh munchkinha munchkinhar munchkinharv munchkinharve munchkinharves munchkinharvest munchkinharvestr munchkinharvestre munchkinharvestref munchkinharvestrefe munchkinharvestrefer",
	"index": true,
	"slug": "munchkinharvestreferee",
	"name": "MunchkinHarvestReferee",
	"js": "var MunchkinHarvestReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nMunchkinHarvestReferee = (function(_super) {\n  __extends(MunchkinHarvestReferee, _super);\n\n  function MunchkinHarvestReferee() {\n    _ref = MunchkinHarvestReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  MunchkinHarvestReferee.className = 'MunchkinHarvestReferee';\n\n  MunchkinHarvestReferee.prototype.chooseAction = function() {\n    var angle, buildType, built, hero, inWave, shouldHaveSpawned, wave;\n    shouldHaveSpawned = this.world.age * 1.05;\n    if (this.world.age > 30) {\n      shouldHaveSpawned += (this.world.age - 30) * 0.5;\n    }\n    wave = Math.floor((this.world.age + 0.25) / 10.1);\n    shouldHaveSpawned += 6 * wave;\n    hero = this.world.getThangByID('Hero Placeholder');\n    if (shouldHaveSpawned > this.built.length && this.world.age < 60) {\n      buildType = this.world.rand.randf() < 0.5 ? 'ogre-munchkin-m' : 'ogre-munchkin-f';\n      this.build(buildType);\n      built = this.performBuild();\n      inWave = hero.findEnemies().length > 3;\n      if (inWave) {\n        angle = this.world.rand.randf() * Math.PI * 2;\n        built.pos.x = Math.max(8, Math.min(47, hero.pos.x + 10 * Math.cos(angle)));\n        built.pos.y = Math.max(7, Math.min(39, hero.pos.y + 10 * Math.sin(angle)));\n      } else {\n        built.pos.x = 8 + this.world.rand.randf() * 39;\n        built.pos.y = 7 + this.world.rand.randf() * 32;\n      }\n      return built.hasMoved = true;\n    }\n  };\n\n  return MunchkinHarvestReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "51538fdb812dd9af02000001",
	"original": "5470004660f6cc376131525f",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "This Component makes the Thang spawn munchkins for the Munchkin Harvest level.",
	"dependencies": [
		{
			"original": "52d9a6773cf02dcf26000dc4",
			"majorVersion": 0
		}
	],
	"commitMessage": "",
	"parent": "547012c060f6cc3761315291",
	"created": "2014-11-25T23:02:41.016Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 4,
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