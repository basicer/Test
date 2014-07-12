{
	"_id": "53c0961866ee04aec7118196",
	"creator": "512ef4805a67a8c507000001",
	"slug": "attacksnearby",
	"name": "AttacksNearby",
	"original": "524b7b4b7fc0f6d51900000c",
	"__v": 0,
	"js": "var AttacksNearby,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  __slice = [].slice;\n\nAttacksNearby = (function(_super) {\n  __extends(AttacksNearby, _super);\n\n  AttacksNearby.className = \"AttacksNearby\";\n\n  function AttacksNearby(config) {\n    AttacksNearby.__super__.constructor.call(this, config);\n    if (this.attackNearbyEnemyRange == null) {\n      this.attackNearbyEnemyRange = this.attackRange * 3;\n    }\n  }\n\n  AttacksNearby.prototype.bustDownDoor = function() {\n    var args;\n    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];\n    return this.attackNearbyEnemy.apply(this, args);\n  };\n\n  AttacksNearby.prototype.attackNearbyEnemy = function() {\n    var canMove, distance, enemy, frustratedMessage, idleTime, killed, lastAttackTarget, _ref, _ref1;\n    if (arguments[0] != null) {\n      throw new ArgumentError(\"\", \"attackNearby\", \"\", \"\", arguments[0]);\n    }\n    if (this.attackingNearbyEnemySince == null) {\n      this.attackingNearbyEnemySince = this.world.age;\n    }\n    lastAttackTarget = ((_ref = this.target) != null ? _ref.health : void 0) != null ? this.target : null;\n    killed = (lastAttackTarget != null ? lastAttackTarget.health : void 0) <= 0;\n    if (killed) {\n      this.setTarget(null);\n      return \"done\";\n    }\n    frustratedMessage = \"No nearby enemies...\";\n    enemy = this.getNearestEnemy();\n    distance = enemy ? this.distance(enemy) : 9001;\n    canMove = distance < this.attackNearbyEnemyRange;\n    if (canMove) {\n      if (((_ref1 = this.currentlySaying) != null ? _ref1.message : void 0) === frustratedMessage) {\n        this.say(null);\n      }\n      this.attackingNearbyEnemySince = this.world.age;\n      if (this.canAttack()) {\n        this.attack(enemy);\n      } else {\n        this.follow(enemy);\n      }\n      return this.action;\n    }\n    idleTime = this.world.age - this.attackingNearbyEnemySince;\n    if (idleTime > 3 + this.attackNearbyEnemyWaitTime) {\n      return \"done\";\n    } else if (Math.abs(idleTime - this.attackNearbyEnemyWaitTime) <= this.world.dt) {\n      this.say(frustratedMessage);\n    }\n    return this.action;\n  };\n\n  return AttacksNearby;\n\n})(Component);\n",
	"commitMessage": "Accepted Python snippets patch.",
	"parent": "538755f6cb18e70000712291",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"patches": [],
	"official": false,
	"configSchema": {
		"properties": {
			"attackNearbyEnemyWaitTime": {
				"type": "number",
				"description": "How long to wait for a nearby enemy to show up before declaring there are no nearby enemies.",
				"minimum": 0,
				"default": 3
			},
			"attackNearbyEnemyRange": {
				"type": "number",
				"description": "How far away an enemy can be before we will not chase and attack it as a nearby enemy, or 3X attackRange.",
				"minimum": 0
			}
		},
		"default": {
			"attackNearbyEnemyWaitTime": 3,
			"attackNearbyEnemyRange": 0
		},
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b7ba57fc0f6d519000016",
			"majorVersion": 0
		},
		{
			"original": "524b7b747fc0f6d519000010",
			"majorVersion": 0
		}
	],
	"description": "This Thang has an attackNearbyEnemy method.",
	"system": "combat",
	"searchStrings": "attacks nearby a at att atta attac attack attacks attacksn attacksne attacksnea attacksnear",
	"created": "2014-07-12T01:57:44.290Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 37,
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