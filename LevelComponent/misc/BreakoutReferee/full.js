{
	"_id": "567c451c517d8d443c3563e1",
	"searchStrings": "breakout referee b br bre brea break breako breakou breakout breakoutr breakoutre breakoutref breakoutrefe breakoutrefer",
	"index": true,
	"slug": "breakoutreferee",
	"name": "BreakoutReferee",
	"js": "var BreakoutReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nBreakoutReferee = (function(_super) {\n  var munchkinSpawnCooldown, munchkinsSpawnAfter;\n\n  __extends(BreakoutReferee, _super);\n\n  function BreakoutReferee() {\n    _ref = BreakoutReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  BreakoutReferee.className = 'BreakoutReferee';\n\n  munchkinsSpawnAfter = 3.3;\n\n  munchkinSpawnCooldown = 1.4;\n\n  BreakoutReferee.prototype.chooseAction = function() {\n    if (!this.didSetUp) {\n      this.setUp();\n    }\n    this.controlSoldier();\n    this.spawnMunchkin();\n    return this.checkFinalDoor();\n  };\n\n  BreakoutReferee.prototype.setUp = function() {\n    this.didSetUp = true;\n    this.door = this.world.getThangByID('Weak Door');\n    this.door2 = this.world.getThangByID('Door');\n    this.doorSpikes = this.world.getThangByID('Spike Walls');\n    this.spawnTime = 0;\n    this.buildTypes = ['ogre-munchkin-f', 'ogre-munchkin-m'];\n    this.endPhase = false;\n    this.impaled = false;\n    this.hurryUp = true;\n    this.halfway = false;\n    this.hero.oAttack = this.hero.attack;\n    return this.hero.attack = function(target) {\n      var attackTarget;\n      attackTarget = this.world.getThangByID(target);\n      if ((attackTarget != null) && this.action === \"say\") {\n        if (!this.attackCount) {\n          this.attackCount = 2;\n        } else {\n          this.attackCount++;\n        }\n        if (this.attackCount >= 2) {\n          this.world.setGoalState(\"weak-door-assault\", \"failure\");\n          console.log(JSON.stringify(this.world.goalManager.goalStates[\"weak-door-assault\"]));\n        }\n      }\n      return this.oAttack(target);\n    };\n  };\n\n  BreakoutReferee.prototype.controlSoldier = function() {\n    var enemy, soldier;\n    soldier = this.world.getThangByID('Heather');\n    if (!this.door.dead) {\n      soldier.say(\"Hello? Is someone there?\");\n    }\n    if (this.door.dead && (soldier.hasSaid == null)) {\n      soldier.say(\"Thank you! Let's get out of here!\");\n      soldier.hasSaid = true;\n    }\n    if (!this.door.dead) {\n      return;\n    }\n    enemy = soldier.getNearestEnemy();\n    if (soldier.pos.x < 37) {\n      soldier.setTargetPos({\n        x: 38,\n        y: 46\n      });\n      return soldier.setAction('move');\n    } else if (this.endPhase && soldier.pos.y > 40.5) {\n      soldier.setTarget(soldier.getNearestFriend());\n      return soldier.setAction('move');\n    } else if (enemy) {\n      if (this.hurryUp) {\n        soldier.say(\"I'll cover you while you break down that door!\");\n        this.hurryUp = false;\n      }\n      if (!this.halfway && this.door2.health <= this.door2.maxHealth / 2) {\n        soldier.say(\"The door is almost broken!\");\n        this.halfway = true;\n      }\n      soldier.setTarget(enemy);\n      return soldier.setAction('attack');\n    }\n  };\n\n  BreakoutReferee.prototype.spawnMunchkin = function() {\n    var buildType, m, munchkins, spawnPos;\n    if (!(this.world.age > munchkinsSpawnAfter)) {\n      return;\n    }\n    if (!(this.world.age > this.spawnTime + munchkinSpawnCooldown)) {\n      return;\n    }\n    if (this.endPhase && this.world.age > this.endPhase + 2) {\n      return;\n    }\n    munchkins = (function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        m = _ref1[_i];\n        if (m.type === 'munchkin' && !m.dead) {\n          _results.push(m);\n        }\n      }\n      return _results;\n    }).call(this);\n    if (munchkins.length > 5) {\n      return;\n    }\n    buildType = this.buildTypes[this.world.rand.rand(this.buildTypes.length)];\n    spawnPos = this.points.ogreSpawn;\n    this.buildXY(buildType, spawnPos.x, spawnPos.y);\n    this.performBuild();\n    return this.spawnTime = this.world.age;\n  };\n\n  BreakoutReferee.prototype.controlOgres = function(ogres) {\n    var ogre, target, _i, _len, _results;\n    _results = [];\n    for (_i = 0, _len = ogres.length; _i < _len; _i++) {\n      ogre = ogres[_i];\n      target = ogre.getNearestEnemy();\n      if (target && target.id !== 'Weak Door') {\n        ogre.setTarget(target);\n        _results.push(ogre.attack(target));\n      } else {\n        ogre.setTargetPos({\n          x: 38,\n          y: 46\n        });\n        _results.push(ogre.setAction('move'));\n      }\n    }\n    return _results;\n  };\n\n  BreakoutReferee.prototype.update = function() {\n    var door2;\n    if ((this.door != null) && this.door.dead) {\n      if (this.doorSpikes != null) {\n        this.doorSpikes.setExists(false);\n      }\n    }\n    door2 = this.world.getThangByID('Door');\n    if (door2.health <= 0 && this.hero.snapPoints) {\n      return this.hero.snapPoints.pop();\n    }\n  };\n\n  BreakoutReferee.prototype.checkFinalDoor = function() {\n    var door, ogre, ogres;\n    door = this.world.getThangByID('Door');\n    if (door.health > 0) {\n      return;\n    }\n    if (!this.endPhase) {\n      this.endPhase = this.world.age;\n    }\n    this.triggerGargoyle();\n    ogres = (function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        ogre = _ref1[_i];\n        if (ogre.type === 'munchkin' && !ogre.dead) {\n          _results.push(ogre);\n        }\n      }\n      return _results;\n    }).call(this);\n    if (!(ogres.length > 0)) {\n      return this.setGoalState('escape', 'success');\n    }\n  };\n\n  BreakoutReferee.prototype.triggerGargoyle = function() {\n    var gargoyle, soldier;\n    soldier = this.world.getThangByID('Heather');\n    if (!(soldier.pos.y < 41)) {\n      return;\n    }\n    gargoyle = this.world.getThangByID('Gargoyle');\n    gargoyle.impale({\n      x: 10,\n      y: 45\n    });\n    return this.impaled = true;\n  };\n\n  return BreakoutReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "54f0e1100d8f937805e17836",
	"watchers": [
		"54b1773a75e3055205e5a449",
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"description": "Custom Referee for Breakout",
	"dependencies": [
		{
			"original": "54977ce657e90bd1903dea72",
			"majorVersion": 0
		}
	],
	"commitMessage": "Don't modify snapPoints if hero doesn't move simply",
	"parent": "565f1ed8182781860589deaa",
	"created": "2015-12-24T19:18:52.987Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 16,
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