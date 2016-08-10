{
	"_id": "57ab15e4d699c636003280bc",
	"slug": "targets",
	"creator": "57ab1540e5636725008bcd7e",
	"name": "Targets",
	"original": "524b7b7c7fc0f6d519000011",
	"__v": 0,
	"js": "var ArgumentError, Targets, Vector, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nArgumentError = require('lib/world/errors').ArgumentError;\n\nVector = require('lib/world/vector');\n\nTargets = (function(_super) {\n  __extends(Targets, _super);\n\n  function Targets() {\n    _ref = Targets.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Targets.className = 'Targets';\n\n  Targets.prototype.target = null;\n\n  Targets.prototype.targetPos = null;\n\n  Targets.prototype.attach = function(thang) {\n    Targets.__super__.attach.call(this, thang);\n    if (thang._allTargets == null) {\n      thang._allTargets = [];\n    }\n    thang.addTrackedProperties([\"targetPos\", \"Vector\"]);\n    thang.addTrackedProperties([\"target\", \"Thang\"]);\n    return thang.addTrackedFinalProperties(\"allTargets\");\n  };\n\n  Targets.prototype.setTarget = function(target, methodName) {\n    var closestMatch, closestScore, enemy, matchScore, message, oldTargetPos, targetThang, _i, _len, _ref1, _ref2, _ref3, _ref4;\n    if (methodName == null) {\n      methodName = 'setTarget';\n    }\n    oldTargetPos = this.getTargetPos();\n    this.targetPos = null;\n    if (target && !target.isThang && _.isString(target.id) && (targetThang = this.world.getThangByID(target.id))) {\n      target = targetThang;\n    }\n    if (target == null) {\n      target = null;\n    } else if (target.isVector || (_.isPlainObject(target) && ((target.x != null) || (target.y != null)))) {\n      throw new ArgumentError(\"Target a unit, not an {x, y} position.\", methodName, \"target\", \"unit\", target);\n    } else if (target && _.isString(target)) {\n      targetThang = this.world.getThangByID(target);\n      if (!targetThang) {\n        targetThang = this.world.getThangByID(_.string.titleize(target));\n        if (targetThang) {\n          throw new ArgumentError(\"Attack \\\"\" + (_.string.titleize(target)) + \"\\\", not \\\"\" + target + \"\\\". (Capital letters are important.)\", methodName, \"target\", \"unit\", target);\n        }\n      }\n      if (!targetThang) {\n        if (/^enemy\\d*$/.test(target)) {\n          throw new ArgumentError(\"Target an enemy variable, not the string \\\"\" + target + \"\\\". (Try using findNearestEnemy.)\", methodName, \"target\", \"unit\", target);\n        }\n        if (target === \"target\") {\n          throw new ArgumentError('Target an enemy by name, like \"Treg\", not the string \"target\".', methodName, \"target\", \"unit\", target);\n        }\n        if (target === \"ogre\" || target === \"ogres\" || target === \"munchkin\") {\n          throw new ArgumentError(\"Target a particular ogre, not the string \\\"\" + target + \"\\\". (Try using its name or findNearestEnemy.)\", methodName, \"target\", \"unit\", target);\n        }\n        _ref1 = [null, 0, ''], closestMatch = _ref1[0], closestScore = _ref1[1], message = _ref1[2];\n        _ref3 = (_ref2 = typeof this.getEnemies === \"function\" ? this.getEnemies() : void 0) != null ? _ref2 : [];\n        for (_i = 0, _len = _ref3.length; _i < _len; _i++) {\n          enemy = _ref3[_i];\n          matchScore = enemy.id.score(target, 0.8);\n          if (matchScore > closestScore) {\n            _ref4 = [enemy, matchScore, \"Attack \\\"\" + enemy.id + \"\\\", not \\\"\" + target + \"\\\".\"], closestMatch = _ref4[0], closestScore = _ref4[1], message = _ref4[2];\n          }\n        }\n        if (closestScore >= 0.5) {\n          throw new ArgumentError(message, methodName, \"target\", \"unit\", target);\n        }\n        throw new ArgumentError(\"There's no one named \\\"\" + target + \"\\\" to target.\", methodName, \"target\", \"unit\", target);\n      }\n      target = targetThang;\n    } else if (!target.isThang) {\n      throw new ArgumentError(\"Target a unit.\", methodName, \"target\", \"unit\", target);\n    }\n    if (target != null ? target.hidden : void 0) {\n      target = null;\n    }\n    this.target = target;\n    if (this.target) {\n      this.trackTargetPos(this.target.pos, oldTargetPos);\n      return this.keepTrackedProperty('target');\n    }\n  };\n\n  Targets.prototype.setTargetPos = function(pos, methodName) {\n    var k, oldTargetPos, targetPos, _i, _len, _ref1;\n    if (methodName == null) {\n      methodName = 'setTargetPos';\n    }\n    oldTargetPos = this.getTargetPos();\n    this.target = null;\n    if (pos == null) {\n      this.targetPos = null;\n    } else if (pos.isVector) {\n      this.targetPos = pos.copy();\n    } else if (_.isPlainObject(pos) && ((pos.x != null) || (pos.y != null))) {\n      this.targetPos = new Vector(pos.x, pos.y, pos.z);\n    } else {\n      throw new ArgumentError(\"Target an {x: number, y: number} position.\", methodName, \"pos\", \"object\", pos);\n    }\n    if (this.targetPos) {\n      _ref1 = [\"x\", \"y\", \"z\"];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        k = _ref1[_i];\n        if (!((_.isNumber(this.targetPos[k]) && !_.isNaN(this.targetPos[k]) && this.targetPos[k] !== Infinity) || (k === \"z\" && (this.targetPos[k] == null)))) {\n          targetPos = this.targetPos;\n          this.targetPos = null;\n          throw new ArgumentError(\"Target an {x: number, y: number} position.\", methodName, \"pos.\" + k, \"number\", targetPos[k]);\n        }\n      }\n    }\n    if (this.targetPos) {\n      this.trackTargetPos(this.targetPos, oldTargetPos);\n      return this.keepTrackedProperty('targetPos');\n    }\n  };\n\n  Targets.prototype.setTargetXY = function(x, y, z, methodName) {\n    var k, _i, _len, _ref1;\n    if (methodName == null) {\n      methodName = 'setTargetXY';\n    }\n    _ref1 = [[\"x\", x], [\"y\", y], [\"z\", z]];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      k = _ref1[_i];\n      if (!((_.isNumber(k[1]) && !_.isNaN(k[1]) && k[1] !== Infinity) || (k[0] === \"z\" && (k[1] == null)))) {\n        throw new ArgumentError(\"Target an {x: number, y: number} position.\", methodName, k[0], \"number\", k[1]);\n      }\n    }\n    return this.setTargetPos(new Vector(x, y, z), methodName);\n  };\n\n  Targets.prototype.trackTargetPos = function(targetPos, oldTargetPos) {\n    var closeEnough, i, x, _i, _len, _ref1;\n    if (targetPos.equals(oldTargetPos)) {\n      return;\n    }\n    closeEnough = false;\n    _ref1 = (function() {\n      var _j, _ref1, _results;\n      _results = [];\n      for (x = _j = 0, _ref1 = this._allTargets.length; _j <= _ref1; x = _j += 2) {\n        _results.push(x);\n      }\n      return _results;\n    }).call(this);\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      i = _ref1[_i];\n      if (Math.abs(this._allTargets[i] - targetPos.x) < 1 && Math.abs(this._allTargets[i + 1] - targetPos.y) < 1) {\n        closeEnough = true;\n        break;\n      }\n    }\n    if (!closeEnough) {\n      return this._allTargets.push(targetPos.x, targetPos.y);\n    }\n  };\n\n  Targets.prototype.getTargetPos = function() {\n    var _ref1, _ref2;\n    return (_ref1 = this.targetPos) != null ? _ref1 : (_ref2 = this.target) != null ? _ref2.pos : void 0;\n  };\n\n  return Targets;\n\n})(Component);\n",
	"commitMessage": "Diplomat submission for lang tr: 1 change(s).",
	"parent": "57828d4003f4931f00561499",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274",
		"55249b592c50509d061e9685"
	],
	"codeLanguage": "coffeescript",
	"patches": [],
	"official": false,
	"configSchema": {
		"id": "__base__",
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b4150ff92f1f4f8000024",
			"majorVersion": 0
		}
	],
	"description": "This Thang can target other Thangs or positions.",
	"system": "targeting",
	"searchStrings": "targets t ta tar targ targe",
	"i18nCoverage": [
		"-",
		"ru",
		"fr",
		"nb",
		"de-DE",
		"zh-HANS",
		"es-419",
		"sk",
		"hu",
		"it",
		"pt-BR",
		"uk",
		"pl",
		"ja",
		"nl-NL",
		"da",
		"es-ES"
	],
	"index": true,
	"created": "2016-08-10T11:54:12.949Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 85,
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