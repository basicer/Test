{
	"_id": "552810cfa93c9a35fb567ed5",
	"searchStrings": "hack and dash referee h ha hac hack hacka hackan hackand hackandd hackandda hackanddas hackanddash hackanddashr hackanddashre hackanddashref hackanddashrefe hackanddashrefer",
	"index": true,
	"slug": "hackanddashreferee",
	"name": "HackAndDashReferee",
	"js": "var HackAndDashReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nHackAndDashReferee = (function(_super) {\n  __extends(HackAndDashReferee, _super);\n\n  function HackAndDashReferee() {\n    _ref = HackAndDashReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  HackAndDashReferee.className = 'HackAndDashReferee';\n\n  HackAndDashReferee.prototype.chooseAction = function() {\n    if (!this.didSetUp) {\n      this.setUp();\n    }\n    this.controlBoulder();\n    if (this.potionState !== 'drank') {\n      this.checkPotion();\n    }\n    return this.yeti.patrol(this.patrolPoints);\n  };\n\n  HackAndDashReferee.prototype.setUp = function() {\n    this.didSetUp = true;\n    this.boulder = this.world.getThangByID('Dungeon Sprite');\n    this.boulder.maintainsElevation = function() {\n      return true;\n    };\n    this.boulderTargets = [\n      {\n        x: 86,\n        y: 112\n      }, {\n        x: 86,\n        y: 74\n      }, {\n        x: 122,\n        y: 74\n      }, {\n        x: 122,\n        y: 38\n      }, {\n        x: 158,\n        y: 38\n      }, {\n        x: 158,\n        y: 14\n      }\n    ];\n    this.hero = this.world.getThangByID('Hero Placeholder');\n    this.boulder.maxSpeed = this.hero.maxSpeed + 5;\n    this.chest = this.world.getThangByID('Chest');\n    this.potionState = 'chest';\n    this.potion = this.world.getThangByID('Speed Potion');\n    this.yeti = this.world.getThangByID('Fluffy');\n    this.yeti.hidden = true;\n    return this.patrolPoints = [\n      {\n        x: 18.5,\n        y: 24\n      }, {\n        x: 26,\n        y: 24\n      }\n    ];\n  };\n\n  HackAndDashReferee.prototype.boulderActive = function() {\n    if (this.hero.pos.x > 54) {\n      return true;\n    }\n    return false;\n  };\n\n  HackAndDashReferee.prototype.controlBoulder = function() {\n    this.boulder.setExists(true);\n    if (!this.boulderActive()) {\n      return;\n    }\n    if (!this.boulder.targetPos || this.boulderShouldChangeTarget()) {\n      if (this.boulderTargets.length) {\n        this.boulder.setTargetPos(this.boulderTargets[0]);\n        this.boulderTargets.shift();\n      }\n    }\n    this.boulder.velocity.x = this.boulder.targetPos.x - this.boulder.pos.x;\n    this.boulder.velocity.y = this.boulder.targetPos.y - this.boulder.pos.y;\n    this.boulder.velocity.z = 0;\n    this.boulder.velocity.normalize().multiply(this.boulder.maxSpeed);\n    if (this.hero.distanceTo(this.boulder) < 2) {\n      return this.boulderHitHero();\n    }\n  };\n\n  HackAndDashReferee.prototype.boulderShouldChangeTarget = function() {\n    if (Math.abs(this.boulder.velocity.x) > 2 && this.boulder.pos.x >= this.boulder.targetPos.x) {\n      return true;\n    }\n    if (Math.abs(this.boulder.velocity.y) > 2 && this.boulder.pos.y <= this.boulder.targetPos.y) {\n      return true;\n    }\n    return false;\n  };\n\n  HackAndDashReferee.prototype.boulderHitHero = function() {\n    if (!this.hero.dead) {\n      return this.hero.takeDamage(9000);\n    }\n  };\n\n  HackAndDashReferee.prototype.checkPotion = function() {\n    if (this.potionState === 'chest' && this.chest.dead) {\n      this.spawnPotion();\n    }\n    if (this.potionState === 'spawned' && !this.potion.exists) {\n      return this.drinkPotion();\n    }\n  };\n\n  HackAndDashReferee.prototype.spawnPotion = function() {\n    this.potion.setExists(true);\n    return this.potionState = 'spawned';\n  };\n\n  HackAndDashReferee.prototype.drinkPotion = function() {\n    this.hero.maxSpeed += 4;\n    this.potionState = 'drank';\n    return console.log('POTION drank');\n  };\n\n  return HackAndDashReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "54e8e4677578d754057f8598",
	"watchers": [
		"54b1773a75e3055205e5a449",
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Renamed hidden yeti to Fluffy.",
	"parent": "54ece45485c8c65205afbdfd",
	"description": "Custom Referee for Hack and Dash",
	"codeLanguage": "coffeescript",
	"dependencies": [
		{
			"original": "54977ce657e90bd1903dea72",
			"majorVersion": 0
		}
	],
	"created": "2015-04-10T18:05:03.801Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 9,
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