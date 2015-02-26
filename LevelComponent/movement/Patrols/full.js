{
	"_id": "54ef7cc1042da88305574c8e",
	"creator": "54b1773a75e3055205e5a449",
	"slug": "patrols",
	"name": "Patrols",
	"js": "var Patrols,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nPatrols = (function(_super) {\n  __extends(Patrols, _super);\n\n  Patrols.className = 'Patrols';\n\n  function Patrols(config) {\n    Patrols.__super__.constructor.call(this, config);\n    if (this.patrolSpeedRatio == null) {\n      this.patrolSpeedRatio = 0.25;\n    }\n  }\n\n  Patrols.prototype.chooseAction = function() {\n    if (!this.shouldPatrol) {\n      return;\n    }\n    if (this.patrolPoints.length === 0) {\n      return;\n    }\n    if (this.dead) {\n      return;\n    }\n    if (!(this.target && !this.target.dead)) {\n      return this.patrol(this.patrolPoints);\n    }\n  };\n\n  Patrols.prototype.patrol = function(patrolPoints) {\n    var d;\n    this.patrolPoints = patrolPoints;\n    if (this.patrolIndex == null) {\n      this.patrolIndex = 0;\n    }\n    if (this.patrolIndex >= this.patrolPoints.length) {\n      return;\n    }\n    d = this.pos.distance(this.patrolPoints[this.patrolIndex]);\n    if (d < this.moveThreshold) {\n      this.patrolIndex = (this.patrolIndex + 1) % this.patrolPoints.length;\n    }\n    this.currentSpeedRatio = this.patrolSpeedRatio;\n    return this.move(this.patrolPoints[this.patrolIndex]);\n  };\n\n  return Patrols;\n\n})(Component);\n",
	"original": "524cbad73ea855e0ab000014",
	"__v": 0,
	"commitMessage": "Added properties and logic so this component can operate independently",
	"parent": "53c0961866ee04aec7118198",
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
			"patrolPoints": {
				"type": "array",
				"description": "Array of {x, y} points to cycle between.",
				"items": {
					"description": "Am {x, y} position",
					"properties": {
						"x": {
							"type": "number"
						},
						"y": {
							"type": "number"
						}
					},
					"format": "point2d",
					"additionalProperties": true
				},
				"additionalProperties": true
			},
			"patrolSpeedRatio": {
				"type": "number",
				"minimum": 0,
				"maximum": 1,
				"description": "0-1 ratio of patrol speed to max speed."
			},
			"shouldPatrol": {
				"type": "boolean",
				"description": "Should the thang patrol",
				"default": false
			}
		},
		"default": {
			"patrolSpeedRatio": 0.25,
			"patrolPoints": [],
			"shouldPatrol": false
		},
		"id": "__base__",
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
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		}
	],
	"description": "This Thang can walk between a set of patrol points.",
	"system": "movement",
	"searchStrings": "patrols p pa pat patr patro",
	"created": "2015-02-26T20:06:25.299Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 30,
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