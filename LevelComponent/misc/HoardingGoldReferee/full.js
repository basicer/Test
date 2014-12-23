{
	"_id": "5499b670a88ecca974d501ca",
	"searchStrings": "hoarding gold referee h ho hoa hoar hoard hoardi hoardin hoarding hoardingg hoardinggo hoardinggol hoardinggold hoardinggoldr hoardinggoldre hoardinggoldref hoardinggoldrefe hoardinggoldrefer",
	"index": true,
	"slug": "hoardinggoldreferee",
	"name": "HoardingGoldReferee",
	"js": "var HoardingGoldReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nHoardingGoldReferee = (function(_super) {\n  __extends(HoardingGoldReferee, _super);\n\n  function HoardingGoldReferee() {\n    _ref = HoardingGoldReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  HoardingGoldReferee.className = 'HoardingGoldReferee';\n\n  HoardingGoldReferee.prototype.spawnCoins = function() {\n    var angle, buildType, coin, coinsToSpawn, pacmanBody, pacmanMouth, targetPos, _results;\n    coinsToSpawn = 30;\n    pacmanMouth = Math.PI / 3;\n    pacmanBody = 2 * Math.PI - pacmanMouth;\n    _results = [];\n    while (this.built.length < coinsToSpawn) {\n      buildType = this.pickBuildType(this.coinSpawn.spawnChances);\n      angle = pacmanMouth / 2 + pacmanBody * this.built.length / coinsToSpawn;\n      targetPos = {\n        x: this.rectangles.coins.x + this.rectangles.coins.width / 2 * Math.cos(angle),\n        y: this.rectangles.coins.y + this.rectangles.coins.height / 2 * Math.sin(angle)\n      };\n      _results.push(coin = this.instabuild(buildType, targetPos.x, targetPos.y));\n    }\n    return _results;\n  };\n\n  HoardingGoldReferee.prototype.checkVictory = function() {\n    var gold;\n    gold = this.hero.gold;\n    if (gold >= 25) {\n      this.world.setGoalState('collect-enough', 'success');\n    }\n    if (gold >= 30) {\n      return this.world.setGoalState('not-too-much', 'failure');\n    }\n  };\n\n  return HoardingGoldReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "54989bbf8e52573b10d3bce0",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "This Component makes the Thang spawn a ring of coins for the Hoarding Gold level.",
	"dependencies": [
		{
			"original": "54977ce657e90bd1903dea72",
			"majorVersion": 0
		},
		{
			"original": "52d9a6773cf02dcf26000dc4",
			"majorVersion": 0
		}
	],
	"commitMessage": "Playable draft.",
	"parent": "54989e278e52573b10d3bce1",
	"created": "2014-12-23T18:37:36.837Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 2,
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