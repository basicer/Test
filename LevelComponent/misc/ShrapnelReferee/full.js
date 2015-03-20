{
	"_id": "550c3c353dde01335e3c142f",
	"searchStrings": "shrapnel referee s sh shr shra shrap shrapn shrapne shrapnel shrapnelr shrapnelre shrapnelref shrapnelrefe shrapnelrefer",
	"index": true,
	"slug": "shrapnelreferee",
	"name": "ShrapnelReferee",
	"js": "var ShrapnelReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nShrapnelReferee = (function(_super) {\n  __extends(ShrapnelReferee, _super);\n\n  function ShrapnelReferee() {\n    _ref = ShrapnelReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  ShrapnelReferee.className = 'ShrapnelReferee';\n\n  ShrapnelReferee.prototype.chooseAction = function() {\n    if (!this.levelInit) {\n      this.initLevel();\n    }\n    this.wave = Math.floor(this.world.age / this.waveDelay);\n    if (this.wave !== this.oldWave) {\n      this.offset = 0;\n      this.waveAngle = this.world.rand.randf();\n      this.bodyCount += 2;\n      if (this.world.age > 10) {\n        this.bodyCount++;\n      }\n    }\n    this.oldWave = this.wave;\n    if (this.bodyCount > this.built.length && this.world.age < 30) {\n      this.spawnWave();\n      this.offset++;\n      if (this.offset > 1) {\n        return this.offset = -1;\n      }\n    }\n  };\n\n  ShrapnelReferee.prototype.initLevel = function() {\n    this.levelInit = true;\n    this.spawnRange = 30;\n    this.waveSpread = .015;\n    this.waveDelay = 5.2;\n    this.waveAngle = this.world.rand.randf();\n    this.wave = 0;\n    this.oldWave = 0;\n    return this.bodyCount = 0;\n  };\n\n  ShrapnelReferee.prototype.spawnWave = function() {\n    var angle, buildType, built, hero;\n    hero = this.world.getThangByID('Hero Placeholder');\n    buildType = this.world.rand.randf() < 0.5 ? 'ogre-munchkin-m' : 'ogre-munchkin-f';\n    this.build(buildType);\n    built = this.performBuild();\n    angle = (this.waveAngle + this.offset * this.waveSpread) * Math.PI * 2;\n    built.pos.x = Math.max(9, Math.min(72, hero.pos.x + this.spawnRange * Math.cos(angle)));\n    built.pos.y = Math.max(8, Math.min(68, hero.pos.y + this.spawnRange * Math.sin(angle)));\n    built.hasMoved = true;\n    return built.attack(hero);\n  };\n\n  return ShrapnelReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "54702a6360f6cc37613152d3",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "This Component makes the Thang spawn munchkins for the Shrapnel level.",
	"dependencies": [
		{
			"original": "52d9a6773cf02dcf26000dc4",
			"majorVersion": 0
		}
	],
	"commitMessage": "Fixed Shrapnel munchkin velocity prediction problem.",
	"parent": "547c8dbb79e6e33e052a666e",
	"patches": [],
	"created": "2015-03-20T15:26:45.109Z",
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