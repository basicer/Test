{
	"_id": "53c70f3b587cd615bf404880",
	"slug": "patrolsandattacks",
	"creator": "512ef4805a67a8c507000001",
	"name": "PatrolsAndAttacks",
	"js": "var PatrolsAndAttacks,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nPatrolsAndAttacks = (function(_super) {\n  __extends(PatrolsAndAttacks, _super);\n\n  PatrolsAndAttacks.className = \"PatrolsAndAttacks\";\n\n  function PatrolsAndAttacks(config) {\n    PatrolsAndAttacks.__super__.constructor.call(this, config);\n    if (this.patrolChaseRange == null) {\n      this.patrolChaseRange = 20;\n    }\n  }\n\n  PatrolsAndAttacks.prototype.chooseAction = function() {\n    var distance, enemy, _ref;\n    enemy = this.getNearestEnemy();\n    distance = enemy ? this.distance(enemy, true) : 9001;\n    if (((_ref = this.target) != null ? _ref.health : void 0) > 0 && distance > this.patrolChaseRange) {\n      return this.action;\n    }\n    if (distance < this.attackRange) {\n      return this.attack(enemy);\n    } else if (distance < this.patrolChaseRange) {\n      this.currentSpeedRatio = 1;\n      return this.follow(enemy);\n    } else {\n      return this.patrol(this.patrolPoints);\n    }\n  };\n\n  return PatrolsAndAttacks;\n\n})(Component);\n",
	"original": "524d939e3ea855e0ab00023b",
	"__v": 0,
	"commitMessage": "attackRange based on edges, not centers.",
	"parent": "538755f4cb18e70000712284",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"official": false,
	"configSchema": {
		"properties": {
			"patrolPoints": {
				"type": "array",
				"description": "Array of {x, y} points to cycle between.",
				"items": {
					"type": "object",
					"additionalProperties": false,
					"description": "An {x, y} position in meters from the left and bottom edges of the map.",
					"properties": {
						"x": {
							"type": "number"
						},
						"y": {
							"type": "number"
						}
					},
					"format": "point2d"
				}
			},
			"patrolChaseRange": {
				"type": "number",
				"description": "How far away an enemy can be before this Thang will not chase it.",
				"minimum": 0,
				"format": "meters"
			}
		},
		"default": {
			"patrolPoints": [],
			"patrolChaseRange": 20
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
			"original": "524cbad73ea855e0ab000014",
			"majorVersion": 0
		}
	],
	"description": "This Thang patrols among its patrol points and attacks enemies who come too close.",
	"system": "ai",
	"created": "2014-07-16T23:48:11.122Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 19,
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