{
	"_id": "54ff5515a23351bb037da63c",
	"slug": "mine",
	"name": "Mine",
	"js": "var MAX_COOLDOWN, Mine,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };\n\nMAX_COOLDOWN = require('lib/world/systems/action').MAX_COOLDOWN;\n\nMine = (function(_super) {\n  __extends(Mine, _super);\n\n  Mine.className = \"Mine\";\n\n  Mine.prototype.isHazard = true;\n\n  function Mine(config) {\n    Mine.__super__.constructor.call(this, config);\n  }\n\n  Mine.prototype.attach = function(thang) {\n    Mine.__super__.attach.call(this, thang);\n    return thang.addActions({\n      name: 'die',\n      cooldown: MAX_COOLDOWN\n    });\n  };\n\n  Mine.prototype.chooseAction = function() {\n    if (this.explodeTimer != null) {\n      this.explodeTimer -= this.world.dt;\n    }\n    if (!this.exploded && !this.dud && this.triggered()) {\n      return this.explode();\n    } else if ((this.explodeTimer != null) && this.explodeTimer <= 0 && !this.exploded) {\n      return this.explode();\n    }\n  };\n\n  Mine.prototype.triggered = function() {\n    var combat, d2, inInitialTriggerRange, inTriggerRange, justPlaced, thang, _i, _len, _ref, _ref1, _ref2, _ref3;\n    combat = this.world.getSystem(\"Combat\");\n    justPlaced = this.initialTriggerersInRange == null;\n    if (this.initialTriggerersInRange == null) {\n      this.initialTriggerersInRange = {};\n    }\n    if (this.spawnTime == null) {\n      this.spawnTime = this.world.age;\n    }\n    _ref = combat.attackables;\n    for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n      thang = _ref[_i];\n      if (this.team && !this.friendlyFire && thang.team === this.team) {\n        continue;\n      }\n      d2 = this.distanceSquared(thang);\n      inTriggerRange = d2 < Math.pow(this.attackRange, 2);\n      inInitialTriggerRange = d2 < Math.pow(this.attackRange * 2, 2);\n      if ((thang.isGrounded() || thang.pos.z + ((_ref1 = (_ref2 = thang.velocity) != null ? _ref2.z : void 0) != null ? _ref1 : 0) * this.world.dt <= thang.depth / 2) && inInitialTriggerRange) {\n        if (justPlaced) {\n          this.initialTriggerersInRange[thang.id] = thang;\n        } else if (inTriggerRange && (this.world.age - this.spawnTime) > 2 && !(__indexOf.call((_ref3 = thang.built) != null ? _ref3 : [], this) >= 0)) {\n          return true;\n        } else if (inTriggerRange && !this.initialTriggerersInRange[thang.id]) {\n          return true;\n        }\n      } else if (this.initialTriggerersInRange[thang.id]) {\n        this.initialTriggerersInRange[thang.id] = false;\n      }\n    }\n    return false;\n  };\n\n  Mine.prototype.explode = function() {\n    var blastRatio, combat, d, momentum, thang, trap, v, _i, _j, _len, _len1, _ref, _ref1;\n    combat = this.world.getSystem(\"Combat\");\n    _ref = combat.attackables.concat(combat.corpses);\n    for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n      thang = _ref[_i];\n      if (this.team && !this.friendlyFire && thang.team === this.team) {\n        continue;\n      }\n      v = Vector.subtract(thang.pos, this.pos, true);\n      v.z += this.depth / 2;\n      d = v.magnitude(false);\n      if (!(d < this.blastRadius)) {\n        continue;\n      }\n      blastRatio = Math.min(1, (this.blastRadius - d + this.attackRange) / this.blastRadius);\n      momentum = v.copy().normalize(true).multiply(blastRatio * this.mass, true);\n      if (typeof thang.maintainsElevation === \"function\" ? thang.maintainsElevation() : void 0) {\n        momentum.z = 0;\n      }\n      this.performAttack(thang, blastRatio, momentum);\n    }\n    this.addCurrentEvent('hit');\n    this.velocity.multiply(0);\n    this.exploded = true;\n    if (this.chainReacts) {\n      _ref1 = this.getFireTraps();\n      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {\n        trap = _ref1[_j];\n        trap.explodeTimer = 0.25 * this.distance(trap) / this.blastRadius;\n      }\n    }\n    this.setAction('die');\n    return this.act();\n  };\n\n  Mine.prototype.getFireTraps = function() {\n    var _this = this;\n    return _.filter(this.world.thangs, function(thang) {\n      return thang.type === 'fire-trap' && thang !== _this && _this.distanceSquared(thang) <= _this.blastRadius * _this.blastRadius && !thang.exploded && !thang.explodeTimer;\n    });\n  };\n\n  return Mine;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "538679d17d99a73905616ecd",
	"watchers": [
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"commitMessage": "isHazard: true",
	"parent": "54b9d28d6ead565105a03f81",
	"patches": [],
	"index": true,
	"codeLanguage": "coffeescript",
	"official": false,
	"configSchema": {
		"id": "__base__",
		"default": {
			"blastRadius": 15,
			"friendlyFire": true,
			"dud": false,
			"chainReacts": false
		},
		"properties": {
			"blastRadius": {
				"type": "number",
				"additionalProperties": false,
				"exclusiveMinimum": true,
				"format": "meters",
				"minimum": 0,
				"description": "The radius of the blast explosion, in meters."
			},
			"chainReacts": {
				"type": "boolean",
				"default": false,
				"description": "Whether the mine will chain react and detonate other mines around that also have chainReacts set to true"
			},
			"dud": {
				"type": "boolean",
				"default": false,
				"description": "Whether the mine is a dud or not.(Duds do not explode)"
			},
			"friendlyFire": {
				"type": "boolean",
				"description": "Whether the explosion hurts/affects allied Thangs.",
				"default": true
			}
		},
		"additionalProperties": true,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		},
		{
			"original": "524b7b857fc0f6d519000012",
			"majorVersion": 0
		},
		{
			"original": "524b7b8c7fc0f6d519000013",
			"majorVersion": 0
		},
		{
			"original": "524b7ba57fc0f6d519000016",
			"majorVersion": 0
		},
		{
			"original": "524b3e3fff92f1f4f800000d",
			"majorVersion": 0
		}
	],
	"description": "This Component makes the Thang explode when another Thang touches it on the ground.",
	"system": "combat",
	"searchStrings": "mine m mi",
	"created": "2015-03-10T20:33:25.492Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 21,
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