{
	"_id": "5539685164a1488df00d94c2",
	"searchStrings": "casts teleport c ca cas cast casts castst castste caststel caststele caststelep caststelepo",
	"index": true,
	"slug": "caststeleport",
	"name": "CastsTeleport",
	"js": "var CastsTeleport,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCastsTeleport = (function(_super) {\n  __extends(CastsTeleport, _super);\n\n  CastsTeleport.className = 'CastsTeleport';\n\n  function CastsTeleport(config) {\n    CastsTeleport.__super__.constructor.call(this, config);\n    this._teleportSpell = {\n      name: 'teleport',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      range: this.range\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    delete this.range;\n  }\n\n  CastsTeleport.prototype.attach = function(thang) {\n    CastsTeleport.__super__.attach.call(this, thang);\n    return thang.addSpell(this._teleportSpell);\n  };\n\n  CastsTeleport.prototype.castTeleport = function(target) {\n    return this.cast('teleport', target, 'castTeleport');\n  };\n\n  CastsTeleport.prototype.perform_teleport = function() {\n    var distance, pos;\n    pos = this.targetPos || this.target.pos || this.target;\n    while (!this.isPathClear(this.pos, pos)) {\n      distance = pos.distance(this.pos);\n      if (!(distance > 2)) {\n        return;\n      }\n      pos = pos.copy().subtract(this.pos).limit(distance - 1);\n    }\n    this.pos.x = pos.x;\n    this.pos.y = pos.y;\n    this.pos.z = Math.max(pos.z, this.depth / 2);\n    this.pos.z = Math.min(pos.z, this.spells.teleport.range);\n    return this.hasMoved = true;\n  };\n\n  return CastsTeleport;\n\n})(Component);\n",
	"system": "magic",
	"creator": "512ef4805a67a8c507000001",
	"original": "5462e0f73839c6e02811d1be",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Can't teleport to places outside of line of sight.",
	"parent": "55393a39052e9ffacab7a03f",
	"description": "This Component gives the Thang a teleport spell.",
	"codeLanguage": "coffeescript",
	"dependencies": [
		{
			"original": "52f13c37528baa731827408d",
			"majorVersion": 0
		}
	],
	"configSchema": {
		"properties": {
			"cooldown": {
				"type": "number",
				"minimum": 0,
				"format": "seconds"
			},
			"range": {
				"type": "number",
				"minimum": 0,
				"format": "meters"
			},
			"specificCooldown": {
				"type": "number",
				"minimum": 0,
				"format": "seconds"
			}
		},
		"additionalProperties": false,
		"type": "object",
		"default": {
			"range": 50,
			"cooldown": 0.25,
			"specificCooldown": 10
		}
	},
	"patches": [],
	"created": "2015-04-23T21:46:57.014Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 7,
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