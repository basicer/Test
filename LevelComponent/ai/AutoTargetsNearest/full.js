{
	"_id": "57b20ec956814d2500ba08da",
	"creator": "537d01f484c54c6e05c05989",
	"slug": "autotargetsnearest",
	"name": "AutoTargetsNearest",
	"original": "524b517fff92f1f4f8000046",
	"__v": 0,
	"js": "var AutoTargetsNearest, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nAutoTargetsNearest = (function(_super) {\n  __extends(AutoTargetsNearest, _super);\n\n  function AutoTargetsNearest() {\n    _ref = AutoTargetsNearest.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  AutoTargetsNearest.className = \"AutoTargetsNearest\";\n\n  AutoTargetsNearest.prototype.chooseAction = function() {\n    var d, distanceSquared, e, enemies, nearestEnemy, _i, _len, _ref1;\n    if (this.commander && !this.commander.dead && !(this.specificAttackTarget || this.defendTarget || this.castingCommandedSpellTarget)) {\n      return;\n    }\n    if (this.startsPeaceful && !this.hasAttacked) {\n      return;\n    }\n    if (this.isProgrammable && (this.programmableMethods.chooseAction || this.programmableMethods.plan)) {\n      return;\n    }\n    if (this.targetPos && !this.defendTarget && !this.castingCommandedSpellTarget) {\n      return;\n    }\n    if (this.target && this.action === 'cast' && !this.castingCommandedSpellTarget) {\n      return;\n    }\n    if (this.gameEntity) {\n      return;\n    }\n    if (this.defendTarget || this.defendTargetPos) {\n      if (!this.commander) {\n        return;\n      }\n      if (this.commander.dead) {\n        this.defendTarget = null;\n      }\n      if (this.defendTarget) {\n        return this.defend(this.defendTarget);\n      }\n    }\n    if ((_ref1 = this.specificAttackTarget) != null ? _ref1.dead : void 0) {\n      this.specificAttackTarget = null;\n      this.setAction('idle');\n      if (typeof this.brake === \"function\") {\n        this.brake();\n      }\n      if (this.commander && !this.commander.dead) {\n        return;\n      }\n    }\n    if (this.castingCommandedSpellTarget) {\n      if (this.hasCastCommandedSpell) {\n        this.castingCommandedSpellTarget = null;\n        this.hasCastCommandedSpell = null;\n        this.setAction('idle');\n        if (typeof this.brake === \"function\") {\n          this.brake();\n        }\n      } else {\n        this.cast(this.spell.name, this.castingCommandedSpellTarget);\n      }\n      return;\n    }\n    if (!this.specificAttackTarget) {\n      nearestEnemy = this.getNearestEnemy();\n      if (nearestEnemy && nearestEnemy.startsPeaceful && !(nearestEnemy.target && nearestEnemy.target.team === this.team)) {\n        enemies = this.getEnemies();\n        distanceSquared = Number.MAX_VALUE;\n        nearestEnemy = null;\n        for (_i = 0, _len = enemies.length; _i < _len; _i++) {\n          e = enemies[_i];\n          if (e.startsPeaceful && !(e.target && e.target.team === this.team)) {\n            continue;\n          }\n          d = this.distanceSquared(e);\n          if (d < distanceSquared) {\n            nearestEnemy = e;\n            distanceSquared = d;\n          }\n        }\n      }\n      if (nearestEnemy || (!this.target || this.target.team === this.team)) {\n        this.setTarget(nearestEnemy);\n      }\n    }\n    if (this.target) {\n      if (this.actions.bash && this.isReady('bash')) {\n        return this.bash(this.target);\n      } else if (this.actions.attack) {\n        return this.attack(this.target);\n      }\n    }\n  };\n\n  return AutoTargetsNearest;\n\n})(Component);\n",
	"commitMessage": "Promisfy cast",
	"parent": "57647ed00f52412400b23b0f",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274",
		"55ca75a0bd99578a058d5474"
	],
	"codeLanguage": "coffeescript",
	"official": false,
	"configSchema": {
		"additionalProperties": false,
		"type": "object",
		"properties": {
			"startsPeaceful": {
				"type": "boolean",
				"description": "Whether this Thang actually doesn't autoTargetNearest until something else has caused it to start attacking."
			}
		},
		"default": {
			"startsPeaceful": false
		}
	},
	"dependencies": [
		{
			"original": "524b4150ff92f1f4f8000024",
			"majorVersion": 0
		},
		{
			"original": "524b75ad7fc0f6d519000001",
			"majorVersion": 0
		},
		{
			"original": "524b457bff92f1f4f8000031",
			"majorVersion": 0
		},
		{
			"original": "524b7b747fc0f6d519000010",
			"majorVersion": 0
		},
		{
			"original": "524b7b7c7fc0f6d519000011",
			"majorVersion": 0
		}
	],
	"description": "This Thang targets the nearest enemy.",
	"system": "ai",
	"searchStrings": "auto targets nearest a au aut auto autot autota autotar autotarg autotarge autotarget autotargets autotargetsn autotargetsne autotargetsnea autotargetsnear autotargetsneare",
	"patches": [],
	"created": "2016-08-15T18:49:45.826Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 55,
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