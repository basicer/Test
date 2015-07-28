{
	"_id": "55b6e6564e9c6e8605570f1d",
	"searchStrings": "bear trap b be bea bear beart beartr",
	"index": true,
	"slug": "beartrap",
	"name": "BearTrap",
	"js": "var BearTrap,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nBearTrap = (function(_super) {\n  __extends(BearTrap, _super);\n\n  BearTrap.className = 'BearTrap';\n\n  BearTrap.prototype.isHazard = true;\n\n  function BearTrap(config) {\n    BearTrap.__super__.constructor.call(this, config);\n  }\n\n  BearTrap.prototype.attach = function(thang) {\n    BearTrap.__super__.attach.call(this, thang);\n    return thang.armed = true;\n  };\n\n  BearTrap.prototype.update = function() {\n    if (this.triggered() && this.rootTimer > 0) {\n      this.rootTarget(this.triggeredBy);\n      return this.rootTimer -= this.world.dt;\n    }\n  };\n\n  BearTrap.prototype.wasTriggeredBy = function(thang) {\n    if (!this.triggered() && !this.immuneToRoot(thang && !this.dud)) {\n      return this.activateTrap(thang);\n    }\n  };\n\n  BearTrap.prototype.triggered = function() {\n    if (this.armed) {\n      return false;\n    }\n    return true;\n  };\n\n  BearTrap.prototype.immuneToRoot = function(thang) {\n    var immune;\n    immune = false;\n    if (thang === this.builtBy) {\n      immune = true;\n    }\n    if (thang.lastRootTime && this.world.age - thang.lastRootTime < this.rootImmunityDuration) {\n      immune = true;\n    }\n    return immune;\n  };\n\n  BearTrap.prototype.activateTrap = function(thang) {\n    this.armed = false;\n    this.rootTimer = this.rootDuration;\n    this.triggeredBy = thang;\n    this.rootTarget(thang);\n    this.setAction('attack');\n    this.setTarget(thang);\n    this.act();\n    return this.performAttack(thang);\n  };\n\n  BearTrap.prototype.rootTarget = function(target) {\n    var rootPos;\n    if (!target) {\n      return;\n    }\n    rootPos = this.pos.copy();\n    rootPos.z = target.pos.z;\n    target.pos = rootPos;\n    return target.lastRootTime = this.world.age;\n  };\n\n  return BearTrap;\n\n})(Component);\n",
	"system": "combat",
	"creator": "531c8c3ccf439d790a23af04",
	"original": "54db5c7c02dbbc5305569ac8",
	"watchers": [
		"54b1773a75e3055205e5a449",
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "A trap that roots and damages.",
	"codeLanguage": "coffeescript",
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
			"original": "524b7ba57fc0f6d519000016",
			"majorVersion": 0
		},
		{
			"original": "524b3e3fff92f1f4f800000d",
			"majorVersion": 0
		}
	],
	"commitMessage": "Oops, last \"fix\" may all traps duds!",
	"parent": "55b6e0532be65f850505034c",
	"configSchema": {
		"properties": {
			"dud": {
				"description": "Whether the trap will trigger or not.",
				"default": false,
				"type": "boolean"
			},
			"rootDuration": {
				"type": "number",
				"default": 5,
				"description": "Duration in seconds of the root effect."
			},
			"rootImmunityDuration": {
				"type": "number",
				"description": "Time in seconds the target is immune from further root effects after escaping the trap",
				"default": 10,
				"additionalProperties": true
			}
		},
		"default": {
			"rootDuration": 5,
			"rootImmunityDuration": 10
		}
	},
	"created": "2015-07-28T02:17:58.173Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 14,
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