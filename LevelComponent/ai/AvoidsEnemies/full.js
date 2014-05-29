{
	"_id": "538755f4cb18e70000712281",
	"creator": "512ef4805a67a8c507000001",
	"slug": "avoidsenemies",
	"name": "AvoidsEnemies",
	"js": "var AvoidsEnemies,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nAvoidsEnemies = (function(_super) {\n  __extends(AvoidsEnemies, _super);\n\n  AvoidsEnemies.className = \"AvoidsEnemies\";\n\n  function AvoidsEnemies(config) {\n    AvoidsEnemies.__super__.constructor.call(this, config);\n    if (this.skirtDistance == null) {\n      this.skirtDistance = 12;\n    }\n  }\n\n  AvoidsEnemies.prototype.update = function() {\n    var avoidanceEffort, closer, enemy, left, right, toEnemy;\n    enemy = this.getNearestEnemy();\n    if ((enemy == null) || this.distance(enemy) > this.skirtDistance) {\n      return this.setTarget(this.mainTarget);\n    } else {\n      toEnemy = Vector.subtract(enemy.pos, this.pos);\n      avoidanceEffort = 1 - (toEnemy.magnitude() / this.skirtDistance);\n      left = Vector.add(this.pos, toEnemy.copy().rotate(3 * Math.PI / 4).multiply(avoidanceEffort));\n      right = Vector.add(this.pos, toEnemy.copy().rotate(-3 * Math.PI / 4).multiply(avoidanceEffort));\n      closer = left.distance(this.mainTarget) < right.distance(this.mainTarget) ? left : right;\n      return this.setTargetPos(closer);\n    }\n  };\n\n  return AvoidsEnemies;\n\n})(Component);\n",
	"original": "524d942d3ea855e0ab00023e",
	"__v": 0,
	"commitMessage": "",
	"parent": "538697d8cb18e70000712220",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"official": false,
	"configSchema": {
		"properties": {
			"mainTarget": {
				"type": "object",
				"description": "The Thang or {x, y} targetPos this Thang is ultimately targeting."
			},
			"skirtDistance": {
				"type": "number",
				"description": "How far away an enemy can be before this Thang will not start to avoid it.",
				"minimum": 0
			}
		},
		"default": {
			"skirtDistance": 12
		},
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b7b8c7fc0f6d519000013",
			"majorVersion": 0
		},
		{
			"original": "524b7b7c7fc0f6d519000011",
			"majorVersion": 0
		},
		{
			"original": "524b7b747fc0f6d519000010",
			"majorVersion": 0
		},
		{
			"original": "524b457bff92f1f4f8000031",
			"majorVersion": 0
		}
	],
	"description": "This Thang tries to reach its target while avoiding enemies in the way.",
	"system": "ai",
	"codeLanguage": "coffeescript",
	"searchStrings": "avoids enemies a av avo avoi avoid avoids avoidse avoidsen avoidsene avoidsenem avoidsenemi",
	"created": "2014-05-29T15:44:52.056Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 14,
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