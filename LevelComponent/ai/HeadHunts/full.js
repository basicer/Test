{
	"_id": "54fb9017cdd4ca19064776de",
	"searchStrings": "head hunts h he hea head headh headhu headhun",
	"index": true,
	"slug": "headhunts",
	"name": "HeadHunts",
	"js": "var HeadHunts, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nHeadHunts = (function(_super) {\n  __extends(HeadHunts, _super);\n\n  function HeadHunts() {\n    _ref = HeadHunts.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  HeadHunts.className = 'HeadHunts';\n\n  HeadHunts.prototype.chooseAction = function() {\n    var nearestEnemy, _ref1;\n    if (this.isProgrammable && (this.programmableMethods.chooseAction || this.programmableMethods.plan)) {\n      return;\n    }\n    if (this.targetPos || (this.target && this.target.team === this.team && !this.target.dead)) {\n      return;\n    }\n    if ((_ref1 = this.specificAttackTarget) != null ? _ref1.dead : void 0) {\n      this.specificAttackTarget = null;\n    }\n    if (!this.specificAttackTarget) {\n      nearestEnemy = this.getNearestEnemy();\n      if (nearestEnemy || (!this.target || this.target.team === this.team)) {\n        this.setTarget(nearestEnemy);\n      }\n    }\n    if (!this.target) {\n      this.doubleAttackState = null;\n      return;\n    }\n    if (this.distance(this.target, true) < this.bashRange) {\n      if (this.getCooldown('bash')) {\n        return this.follow(this.target);\n      } else {\n        return this.bash(this.target);\n      }\n    } else if (this.getCooldown('attack') && this.doubleAttackState === 'first') {\n      return this.performAttack();\n    } else if (this.getCooldown('attack')) {\n      return this.follow(this.target);\n    } else {\n      return this.attack(this.target);\n    }\n  };\n\n  HeadHunts.prototype.performAttack = function() {\n    if (!this.doubleAttackState) {\n      return this.doubleAttackState = 'first';\n    } else {\n      return this.doubleAttackState = null;\n    }\n  };\n\n  return HeadHunts;\n\n})(Component);\n",
	"system": "ai",
	"creator": "54b1773a75e3055205e5a449",
	"original": "54c979f7def3ad363ff998ae",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 1,
	"description": "This Component makes the Thang use its bash and double attack abilities like a good Ogre Headhunter should.",
	"dependencies": [
		{
			"original": "54678d42417c8b48a9811f2e",
			"majorVersion": 0
		},
		{
			"original": "524b7ba57fc0f6d519000016",
			"majorVersion": 0
		}
	],
	"commitMessage": "Don't follow dead teammates we were attacking for some reason (similar to AutoTargetsNearest)",
	"parent": "54c984f8def3ad363ff998dd",
	"patches": [],
	"created": "2015-03-07T23:56:07.155Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 6,
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