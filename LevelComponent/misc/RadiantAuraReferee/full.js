{
	"_id": "54da9db3fd2d71d1d2ca2fe6",
	"searchStrings": "radiant aura referee r ra rad radi radia radian radiant radianta radiantau radiantaur radiantaura radiantaurar radiantaurare radiantauraref radiantaurarefe radiantaurarefer",
	"index": true,
	"slug": "radiantaurareferee",
	"name": "RadiantAuraReferee",
	"js": "var RadiantAuraReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nRadiantAuraReferee = (function(_super) {\n  __extends(RadiantAuraReferee, _super);\n\n  function RadiantAuraReferee() {\n    _ref = RadiantAuraReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  RadiantAuraReferee.className = 'RadiantAuraReferee';\n\n  RadiantAuraReferee.prototype.chooseAction = function() {\n    if (!this.didSetUp) {\n      this.setUp();\n    }\n    this.checkCollections();\n    return this.controlSkeletons();\n  };\n\n  RadiantAuraReferee.prototype.setUp = function() {\n    this.didSetUp = true;\n    this.hero = this.world.getThangByID('Hero Placeholder');\n    this.hero.gemsCollected = 0;\n    return this.hero.showAura = false;\n  };\n\n  RadiantAuraReferee.prototype.checkCollections = function() {\n    if (this.hero.gemsCollected < this.hero.collectedThangIDs.length) {\n      this.hero.gemsCollected = this.hero.collectedThangIDs.length;\n      return this.gemWasCollected(_.last(this.hero.collectedThangIDs));\n    }\n  };\n\n  RadiantAuraReferee.prototype.gemWasCollected = function(gemID) {\n    var gem;\n    gem = this.world.getThangByID(gemID);\n    return typeof gem.wasCollectedBy === \"function\" ? gem.wasCollectedBy(this.hero) : void 0;\n  };\n\n  RadiantAuraReferee.prototype.controlSkeletons = function() {\n    var enemy, pos, skeleton, _i, _len, _ref1, _results;\n    _ref1 = this.world.thangs;\n    _results = [];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      skeleton = _ref1[_i];\n      if (!(skeleton.spriteName === \"Skeleton\")) {\n        continue;\n      }\n      enemy = skeleton.getNearestEnemy();\n      if (enemy) {\n        if (enemy.hasActiveLightstone) {\n          pos = skeleton.pos.copy();\n          pos.y -= 1;\n          skeleton.setTargetPos(pos);\n          _results.push(skeleton.setAction('move'));\n        } else {\n          skeleton.setTarget(enemy);\n          _results.push(skeleton.attack(enemy));\n        }\n      } else {\n        if (!skeleton.target) {\n          _results.push(skeleton.setAction('idle'));\n        } else {\n          _results.push(void 0);\n        }\n      }\n    }\n    return _results;\n  };\n\n  RadiantAuraReferee.prototype.checkVictory = function() {\n    var skeleton, _i, _len, _ref1;\n    if (this.getGoalState('escape') !== 'success') {\n      return;\n    }\n    _ref1 = this.world.thangs;\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      skeleton = _ref1[_i];\n      if (skeleton.spriteName === \"Skeleton\") {\n        if (skeleton.health > 0 && skeleton.target === this.hero) {\n          return;\n        }\n      }\n    }\n    return this.world.endWorld(true, 0.2);\n  };\n\n  return RadiantAuraReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "54d24d895a16db190f79ec4a",
	"watchers": [
		"54b1773a75e3055205e5a449",
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "Custom Referee for Radiant Aura",
	"dependencies": [
		{
			"original": "54977ce657e90bd1903dea72",
			"majorVersion": 0
		}
	],
	"commitMessage": "Changed world end conditions to end very quickly if skeletons haven't been aggro'd, but wait until they die (or you die) if aggro'd.",
	"parent": "54d97aaeb5f5b753050fe21f",
	"created": "2015-02-11T00:09:23.985Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 12,
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