{
	"_id": "54430607c37d4c0faed60312",
	"searchStrings": "teleports t te tel tele telep telepo telepor",
	"index": true,
	"slug": "teleports",
	"name": "Teleports",
	"js": "var ArgumentError, Teleports, Vector,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nVector = require('lib/world/vector');\n\nArgumentError = require('lib/world/errors').ArgumentError;\n\nTeleports = (function(_super) {\n  __extends(Teleports, _super);\n\n  Teleports.className = \"Teleports\";\n\n  function Teleports(config) {\n    Teleports.__super__.constructor.call(this, config);\n    if (this.cooldown) {\n      this._teleportAction = {\n        name: 'teleport',\n        cooldown: this.cooldown\n      };\n    }\n    delete this.cooldown;\n  }\n\n  Teleports.prototype.attach = function(thang) {\n    Teleports.__super__.attach.call(this, thang);\n    if (thang.acts && this._teleportAction) {\n      thang.addActions(this._teleportAction);\n    }\n    if (thang.teleportsInitially) {\n      return thang.teleportRandom();\n    }\n  };\n\n  Teleports.prototype.teleportRandom = function() {\n    var x, y;\n    if (!this.teleportBoundary) {\n      return console.log(\"Couldn't teleport randomly, no teleportBoundary!\");\n    }\n    x = this.world.rand.randf() * (this.teleportBoundary.x2 - this.teleportBoundary.x) + this.teleportBoundary.x;\n    y = this.world.rand.randf() * (this.teleportBoundary.y2 - this.teleportBoundary.y) + this.teleportBoundary.y;\n    return this.teleportXY(x, y);\n  };\n\n  Teleports.prototype.teleportXY = function(x, y, z) {\n    this.setTargetXY(x, y, z != null ? z : this.pos.z, 'teleportXY');\n    return this.setTeleport();\n  };\n\n  Teleports.prototype.teleport = function(pos) {\n    this.setTargetPos(pos, 'teleport');\n    return this.setTeleport();\n  };\n\n  Teleports.prototype.setTeleport = function() {\n    if (this.acts) {\n      this.setAction(\"teleport\");\n      if (this.targetPos && this.distance(this.targetPos) < 1) {\n        return \"done\";\n      } else {\n        return \"teleport\";\n      }\n    } else {\n      this.pos = this.targetPos;\n      this.targetPos = null;\n      return this.hasMoved = true;\n    }\n  };\n\n  Teleports.prototype.update = function() {\n    if (this.action === 'teleport' && this.targetPos && this.act()) {\n      this.pos = this.targetPos;\n      this.targetPos = null;\n      this.hasMoved = true;\n      return this.setAction('idle');\n    }\n  };\n\n  return Teleports;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "532f09710e6ac653d7371293",
	"__v": 0,
	"commitMessage": "Random teleport should obey random seeding.",
	"parent": "53a21671a104da00000a85a6",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"patches": [],
	"codeLanguage": "coffeescript",
	"official": false,
	"configSchema": {
		"properties": {
			"teleportBoundary": {
				"type": "object",
				"additionalProperties": false,
				"properties": {
					"x": {
						"type": "number",
						"title": "x1",
						"description": "The first X coordinate.",
						"default": 15,
						"format": "meters"
					},
					"y": {
						"type": "number",
						"title": "y1",
						"description": "The first Y coordinate.",
						"default": 15,
						"format": "meters"
					},
					"x2": {
						"type": "number",
						"title": "x2",
						"description": "The second X coordinate.",
						"default": 30,
						"format": "meters"
					},
					"y2": {
						"type": "number",
						"title": "y2",
						"description": "The second Y coordinate.",
						"default": 30,
						"format": "meters"
					}
				},
				"required": [
					"x",
					"y",
					"x2",
					"y2"
				]
			},
			"cooldown": {
				"type": "number",
				"format": "seconds",
				"minimum": 0,
				"description": "Cooldown in seconds that the teleport will take. Requires action.Acts for teleportation to take time.",
				"default": 0.75
			},
			"teleportsInitially": {
				"type": "boolean",
				"default": false,
				"description": "Whether this Thang teleports once initially when it spawns (to randomize its location within teleportBoundary)."
			}
		},
		"id": "__base__",
		"additionalProperties": false,
		"type": "object",
		"default": {
			"teleportBoundary": {
				"x": 15,
				"y": 15,
				"x2": 30,
				"y2": 30
			},
			"cooldown": 0.75,
			"teleportsInitially": false
		}
	},
	"dependencies": [
		{
			"original": "524b75ad7fc0f6d519000001",
			"majorVersion": 0
		},
		{
			"original": "524b7b7c7fc0f6d519000011",
			"majorVersion": 0
		},
		{
			"original": "524b7b8c7fc0f6d519000013",
			"majorVersion": 0
		}
	],
	"description": "This Component makes the Thang able to teleport.",
	"system": "movement",
	"created": "2014-10-19T00:29:59.158Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 13,
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