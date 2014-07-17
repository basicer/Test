{
	"_id": "53c71962587cd615bf404917",
	"index": true,
	"slug": "defends",
	"name": "Defends",
	"js": "var ArgumentError, Defends, Vector, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nArgumentError = require('lib/world/errors').ArgumentError;\n\nVector = require('lib/world/vector');\n\nDefends = (function(_super) {\n  __extends(Defends, _super);\n\n  function Defends() {\n    _ref = Defends.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Defends.className = \"Defends\";\n\n  Defends.prototype.attach = function(thang) {\n    Defends.__super__.attach.call(this, thang);\n    if (_.isString(thang.defendTarget)) {\n      return thang.defendTarget = thang.world.getThangByID(thang.defendTarget);\n    }\n  };\n\n  Defends.prototype.chooseAction = function() {\n    var nearestEnemy, targetPos, _ref1, _ref2, _ref3;\n    if (!(this.defendTarget || this.defendTargetPos)) {\n      return;\n    }\n    if ((_ref1 = this.defendTarget) != null ? _ref1.dead : void 0) {\n      return this.defendTarget = null;\n    }\n    this.choosingDefendAction = true;\n    nearestEnemy = this.getNearestEnemy();\n    targetPos = (_ref2 = (_ref3 = this.defendTarget) != null ? _ref3.pos : void 0) != null ? _ref2 : this.defendTargetPos;\n    if (this.defendPosOffset && this.defendTargetPos) {\n      targetPos = Vector.add(targetPos, this.defendPosOffset);\n    }\n    if (nearestEnemy && targetPos && nearestEnemy.distance(targetPos, true) > this.attackRange + 3) {\n      nearestEnemy = null;\n    }\n    if (nearestEnemy) {\n      this.chaseAndAttack(nearestEnemy);\n    } else if (targetPos && this.distance(targetPos) > 3) {\n      if (this.defendTarget) {\n        this.follow(this.defendTarget);\n      } else {\n        this.move(targetPos);\n      }\n    } else {\n      this.setAction('idle');\n      this.setTarget(null);\n    }\n    return this.choosingDefendAction = false;\n  };\n\n  Defends.prototype.defend = function(target) {\n    if (!(target && target.isThang)) {\n      return this.defendPos(this.pos);\n    }\n    this.defendTarget = target;\n    return this.defendTargetPos = null;\n  };\n\n  Defends.prototype.defendPos = function(targetPos) {\n    var k, _i, _len, _ref1;\n    if (targetPos == null) {\n      targetPos = this.pos;\n    }\n    _ref1 = [\"x\", \"y\", \"z\"];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      k = _ref1[_i];\n      if (!((_.isNumber(targetPos[k]) && !_.isNaN(targetPos[k]) && targetPos[k] !== Infinity) || (k === \"z\" && (targetPos[k] == null)))) {\n        throw new ArgumentError(\"Target an {x: number, y: number} position.\", \"defendPos\", \"pos.\" + k, \"number\", targetPos[k]);\n      }\n    }\n    this.defendTargetPos = new Vector(targetPos.x, targetPos.y);\n    return this.defendTarget = null;\n  };\n\n  Defends.prototype.stopDefending = function() {\n    return this.defendTarget = this.defendTargetPos = null;\n  };\n\n  Defends.prototype.setAction = function(action) {\n    if (!this.choosingDefendAction) {\n      return this.stopDefending();\n    }\n  };\n\n  return Defends;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "531a25c6177e5d5b3263daf2",
	"__v": 0,
	"commitMessage": "Attack range change.",
	"parent": "53c095dd66ee04aec7118195",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"patches": [],
	"official": false,
	"configSchema": {
		"id": "__base__",
		"properties": {
			"defendPosOffset": {
				"type": "object",
				"additionalProperties": false,
				"format": "point2d",
				"properties": {
					"x": {
						"type": "number",
						"format": "meters"
					},
					"y": {
						"type": "number",
						"format": "meters"
					}
				}
			}
		},
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b7b7c7fc0f6d519000011",
			"majorVersion": 0
		},
		{
			"original": "524b7b8c7fc0f6d519000013",
			"majorVersion": 0
		},
		{
			"original": "524b7ba57fc0f6d519000016",
			"majorVersion": 0
		}
	],
	"description": "This Component makes the Thang defend a target position or Thang.",
	"system": "ai",
	"searchStrings": "defends d de def defe defen",
	"created": "2014-07-17T00:31:30.543Z",
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