{
	"_id": "55efa79dcc35cc27109ef92c",
	"searchStrings": "treasure grove referee t tr tre trea treas treasu treasur treasure treasureg treasuregr treasuregro treasuregrov treasuregrove treasuregrover treasuregrovere treasuregroveref treasuregroverefe treasuregroverefer",
	"index": true,
	"slug": "treasuregrovereferee",
	"name": "TreasureGroveReferee",
	"js": "var TreasureGroveReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nTreasureGroveReferee = (function(_super) {\n  __extends(TreasureGroveReferee, _super);\n\n  function TreasureGroveReferee() {\n    _ref = TreasureGroveReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  TreasureGroveReferee.className = 'TreasureGroveReferee';\n\n  TreasureGroveReferee.prototype.chooseAction = function() {\n    var buildType, built, effect, hero, heroID, n, oldGold, r, spawnChance, spawnChances, type, _i, _j, _k, _l, _len, _len1, _len2, _len3, _ref1, _ref2, _ref3, _ref4;\n    if ((this.world.age + 6) > (this.built.length / 2)) {\n      spawnChances = [[0, 'bronze'], [65, 'silver'], [85, 'gold']];\n      r = this.world.rand.randf();\n      n = 100 * Math.pow(r, 45 / (this.world.age + 1));\n      for (_i = 0, _len = spawnChances.length; _i < _len; _i++) {\n        _ref1 = spawnChances[_i], spawnChance = _ref1[0], type = _ref1[1];\n        if (n >= spawnChance) {\n          buildType = type;\n        } else {\n          break;\n        }\n      }\n      this.build(buildType);\n      built = this.performBuild();\n      built.pos.x = 10 + this.world.rand.randf() * 62;\n      built.pos.y = 10 + this.world.rand.randf() * 46;\n      built.addTrackedProperties(['pos', 'Vector']);\n      built.keepTrackedProperty('pos');\n    }\n    if (this.reviveTimeouts == null) {\n      this.reviveTimeouts = {};\n    }\n    _ref2 = _.keys(this.reviveTimeouts);\n    for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {\n      heroID = _ref2[_j];\n      this.reviveTimeouts[heroID] -= this.world.dt;\n      if (this.reviveTimeouts[heroID] <= 0) {\n        hero = this.world.getThangByID(heroID);\n        _ref3 = hero.effects;\n        for (_k = 0, _len2 = _ref3.length; _k < _len2; _k++) {\n          effect = _ref3[_k];\n          if (effect.name === 'undead') {\n            effect.timeSinceStart = 9001;\n          }\n        }\n        hero.updateEffects();\n        hero.revive();\n        hero.health = hero.maxHealth;\n        hero.pos.x = 10 + this.world.rand.randf() * 62;\n        hero.pos.y = 10 + this.world.rand.randf() * 46;\n        hero.pos.z = 60;\n        hero.velocity.z = -30;\n        delete this.reviveTimeouts[heroID];\n      }\n    }\n    _ref4 = ['Hero Placeholder', 'Hero Placeholder 1'];\n    for (_l = 0, _len3 = _ref4.length; _l < _len3; _l++) {\n      heroID = _ref4[_l];\n      hero = this.world.getThangByID(heroID);\n      if (hero.sayMessage === \"You'll never defeat me!\" && !hero.nerfed) {\n        hero.nerfed = true;\n        hero.health = hero.maxHealth = hero.maxHealth / 4;\n        hero.maxSpeed *= 0.75;\n      }\n      if ((hero.health <= 0 || hero.hasEffect('undead')) && !this.reviveTimeouts[heroID]) {\n        this.reviveTimeouts[heroID] = 5;\n        oldGold = this.world.getSystem('Inventory').goldForTeam(hero.team);\n        this.world.getSystem('Inventory').subtractGoldForTeam(hero.team, Math.floor(oldGold / 3));\n      }\n    }\n    if (!this.winnerPicked) {\n      if (this.world.getSystem('Inventory').teamGold.ogres.gold >= 100) {\n        this.setGoalState('ogre-gold', 'success');\n        return this.winnerPicked = true;\n      } else if (this.world.getSystem('Inventory').teamGold.humans.gold >= 100) {\n        this.setGoalState('human-gold', 'success');\n        return this.winnerPicked = true;\n      }\n    }\n  };\n\n  return TreasureGroveReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "54696cc637600b40e0e09c5f",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "This Component makes the Thang spawn coins for the Treasure Grove level.",
	"dependencies": [
		{
			"original": "52d9a6773cf02dcf26000dc4",
			"majorVersion": 0
		}
	],
	"commitMessage": "Heroes revive properly even if they have been raised from the dead by their enemies.",
	"parent": "5476284b53b13a2c8f4c46b5",
	"created": "2015-09-09T03:29:33.020Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 8,
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