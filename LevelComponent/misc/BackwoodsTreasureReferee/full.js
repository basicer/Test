{
	"_id": "54b7e8698060404c09d306fa",
	"searchStrings": "backwoods treasure referee b ba bac back backw backwo backwoo backwood backwoods backwoodst backwoodstr backwoodstre backwoodstrea backwoodstreas backwoodstreasu backwoodstreasur backwoodstreasure backwoodstreasurer backwoodstreasurere backwoodstreasureref backwoodstreasurerefe backwoodstreasurerefer",
	"index": true,
	"slug": "backwoodstreasurereferee",
	"name": "BackwoodsTreasureReferee",
	"js": "var BackwoodsTreasureReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nBackwoodsTreasureReferee = (function(_super) {\n  __extends(BackwoodsTreasureReferee, _super);\n\n  function BackwoodsTreasureReferee() {\n    _ref = BackwoodsTreasureReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  BackwoodsTreasureReferee.className = 'BackwoodsTreasureReferee';\n\n  BackwoodsTreasureReferee.prototype.chooseAction = function() {\n    if (this.rectangles['bottom_room'].containsPoint(this.hero.pos)) {\n      if (!this.events.bottom_room_spawned) {\n        this.events.bottom_room_spawned = this.world.age;\n        this.events.bottom_gold = this.startGold;\n        this.spawnEvent('bottom_room');\n      }\n    }\n    if (this.rectangles['top_room'].containsPoint(this.hero.pos)) {\n      if (!this.events.top_room_spawned) {\n        this.events.top_room_spawned = this.world.age;\n        this.events.top_gold = this.startGold;\n        this.spawnEvent('top_room');\n      }\n    }\n    if (this.rectangles['left_room'].containsPoint(this.hero.pos)) {\n      if (!this.events.left_room_spawned) {\n        this.events.left_room_spawned = this.world.age;\n        this.events.left_gold = this.startGold;\n        this.spawnEvent('left_room');\n      }\n    }\n    return this.spawnEventCoins();\n  };\n\n  BackwoodsTreasureReferee.prototype.setUpLevel = function() {\n    this.hero = this.world.getThangByID('Hero Placeholder');\n    this.events = {\n      'bottom_room_spawned': false,\n      'top_room_spawned': false,\n      'left_room_spawned': false,\n      'bottom_gold': 0,\n      'top_gold': 0,\n      'left_gold': 0\n    };\n    this.lastCoinSpawn = this.world.age;\n    this.coinCooldown = 1.00;\n    this.startGold = 20;\n    this.maxGold = 70;\n    return this.coinValues = {\n      'bronze-coin': 1,\n      'silver-coin': 2,\n      'gold-coin': 3\n    };\n  };\n\n  BackwoodsTreasureReferee.prototype.spawnEvent = function(event) {\n    return this.spawnEventWaves(event);\n  };\n\n  BackwoodsTreasureReferee.prototype.spawnEventWaves = function(event) {\n    if (event === 'bottom_room') {\n      this.spawnWaveNamed('all_munchkins_baseline');\n      this.spawnWaveNamed('all_munchkins');\n    }\n    if (event === 'top_room') {\n      this.spawnWaveNamed('all_ogres_baseline');\n      this.spawnWaveNamed('all_ogres');\n    }\n    if (event === 'left_room') {\n      this.spawnWaveNamed('all_throwers_baseline');\n      return this.spawnWaveNamed('all_throwers');\n    }\n  };\n\n  BackwoodsTreasureReferee.prototype.spawnEventCoins = function() {\n    var buildType, buildp, event;\n    buildType = this.pickCoinType();\n    if (this.rectangles['bottom_room'].containsPoint(this.hero.pos)) {\n      event = 'bottom_room';\n    }\n    if (this.rectangles['top_room'].containsPoint(this.hero.pos)) {\n      event = 'top_room';\n    }\n    if (this.rectangles['left_room'].containsPoint(this.hero.pos)) {\n      event = 'left_room';\n    }\n    if (event) {\n      if (this.world.age - this.lastCoinSpawn >= this.coinCooldown) {\n        if (event === 'bottom_room') {\n          if (this.events.bottom_gold > this.maxGold) {\n            return;\n          }\n          buildp = this.pickPointFromRegions([this.rectangles['bottom_spawn']]);\n          this.events.bottom_gold += this.coinValues[buildType];\n        } else if (event === 'top_room') {\n          if (this.events.top_gold > this.maxGold) {\n            return;\n          }\n          buildp = this.pickPointFromRegions([this.rectangles['top_spawn1'], this.rectangles['top_spawn2'], this.rectangles['top_spawn3']]);\n          this.events.top_gold += this.coinValues[buildType];\n        } else if (event === 'left_room') {\n          if (this.events.left_gold > this.maxGold) {\n            return;\n          }\n          buildp = this.pickPointFromRegions([this.rectangles['left_spawn1'], this.rectangles['left_spawn2'], this.rectangles['left_spawn3']]);\n          this.events.left_gold += this.coinValues[buildType];\n        }\n        if (buildp) {\n          this.instabuild(buildType, buildp.x, buildp.y);\n          return this.lastCoinSpawn = this.world.age;\n        }\n      }\n    }\n  };\n\n  BackwoodsTreasureReferee.prototype.pickCoinType = function() {\n    var r;\n    r = this.world.rand.randf();\n    if (r < .65) {\n      return 'bronze-coin';\n    } else if (r < .85) {\n      return 'silver-coin';\n    } else {\n      return 'gold-coin';\n    }\n  };\n\n  BackwoodsTreasureReferee.prototype.checkVictory = function() {\n    if (this.hero.gold >= 100) {\n      return this.setGoalState('collect-gold', 'success');\n    }\n  };\n\n  return BackwoodsTreasureReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "546d4b4fa06acfd60c5ea198",
	"original": "54b0bbda1afd5b6ee0f79be8",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "This Component makes the Thang o'ermaster the Backwoods Treasure challenge.",
	"dependencies": [
		{
			"original": "54977ce657e90bd1903dea72",
			"majorVersion": 0
		}
	],
	"commitMessage": "Removed final remaining traces of the old level",
	"parent": "54b6da5220b5bace7a38d2e8",
	"created": "2015-01-15T16:18:49.260Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 27,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "546d4b4fa06acfd60c5ea198"
		},
		{
			"access": "read",
			"target": "public"
		}
	]
}