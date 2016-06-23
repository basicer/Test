{
	"_id": "576c1d30bd38911f00ee1f51",
	"slug": "sees",
	"creator": "537d01f484c54c6e05c05989",
	"name": "Sees",
	"original": "524b457bff92f1f4f8000031",
	"__v": 0,
	"js": "var ArgumentError, Sees,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nArgumentError = require('lib/world/errors').ArgumentError;\n\nSees = (function(_super) {\n  __extends(Sees, _super);\n\n  Sees.className = 'Sees';\n\n  function Sees(config) {\n    Sees.__super__.constructor.call(this, config);\n    this.visualRangeSquared = this.visualRange * this.visualRange;\n  }\n\n  Sees.prototype.attach = function(thang) {\n    var _ref;\n    Sees.__super__.attach.call(this, thang);\n    thang.aiSystem = thang.world.getSystem('AI');\n    thang.visionSystem = thang.world.getSystem('Vision');\n    return thang.alwaysIgnoresLineOfSight = ((_ref = thang.visionSystem) != null ? _ref.checksLineOfSight : void 0) === false;\n  };\n\n  Sees.prototype.canSee = function(thang, ignoreLineOfSight) {\n    if (ignoreLineOfSight == null) {\n      ignoreLineOfSight = false;\n    }\n    if (thang.hidden) {\n      return false;\n    }\n    if (this.visualRange > 9000 && this.alwaysIgnoresLineOfSight) {\n      return true;\n    }\n    if (this.distanceSquared(thang) >= this.visualRangeSquared) {\n      return false;\n    }\n    if (this.seesThroughWalls || ignoreLineOfSight) {\n      return true;\n    }\n    if (this.aiSystem && !this.aiSystem.isPathClear(this.pos, thang.pos, thang, true)) {\n      return false;\n    }\n    return true;\n  };\n\n  Sees.prototype.getVisibleThangs = function() {\n    return _.filter(this.world.thangs, this.canSee);\n  };\n\n  Sees.prototype.getByType = function(type, thangs) {\n    var _this = this;\n    if (thangs) {\n      return _.filter(thangs, function(thang) {\n        return thang.type === type && thang.exists;\n      });\n    } else {\n      return _.filter(this.world.thangs, function(thang) {\n        return thang.type === type && thang.exists && thang !== _this && !thang.dead && (_this.canSee(thang) || (thang.superteam === _this.superteam && _this.superteam && !thang.hidden));\n      });\n    }\n  };\n\n  Sees.prototype.findByType = function(type, thangs) {\n    if (!_.isString(type)) {\n      throw new ArgumentError(\"\", \"findByType\", \"type\", \"string\", type);\n    }\n    if (thangs && !_.isArray(thangs)) {\n      throw new ArgumentError(\"Pass an optional array of units as second parameter\", \"findByType\", \"units\", \"thangs\", thangs);\n    }\n    return this.getByType(type, thangs);\n  };\n\n  Sees.prototype.getFlags = function() {\n    var flag, _i, _len, _ref, _results;\n    _ref = this.visionSystem.flags;\n    _results = [];\n    for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n      flag = _ref[_i];\n      if (flag.exists && flag.team === this.team) {\n        _results.push(flag);\n      }\n    }\n    return _results;\n  };\n\n  Sees.prototype.findFlags = function() {\n    return this.getFlags();\n  };\n\n  Sees.prototype.findFlag = function(color) {\n    var flag, _i, _len, _ref;\n    if (color && !(color === \"green\" || color === \"black\" || color === \"violet\")) {\n      throw new ArgumentError('Pass a flag color to find: \"green\", \"black\", or \"violet\".', \"findFlag\", \"color\", \"string\", color);\n    }\n    _ref = this.findFlags();\n    for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n      flag = _ref[_i];\n      if (flag.color === color || !color) {\n        return flag;\n      }\n    }\n    return null;\n  };\n\n  Sees.prototype.removeFlag = function(flag) {\n    var flagEvent;\n    if (_.isString(flag)) {\n      throw new ArgumentError(\"Remove a flag object instead of a color string.\", \"removeFlag\", \"flag\", \"flag\", flag);\n    }\n    if (!(flag && flag.team && flag.color)) {\n      throw new ArgumentError(\"Pass a flag object to remove.\", \"removeFlag\", \"flag\", \"flag\", flag);\n    }\n    if (flag.team !== this.team) {\n      throw new ArgumentError(\"\" + this.id + \" (team \" + this.team + \") can't remove \" + flag.id + \" (team \" + flag.team + \").\", \"removeFlag\", \"flag\", \"flag\", flag);\n    }\n    flagEvent = {\n      team: this.team,\n      color: flag.color,\n      time: this.world.age,\n      active: false,\n      player: \"Code (\" + this.team + \")\",\n      source: 'code'\n    };\n    this.world.addFlagEvent(flagEvent);\n    return this.visionSystem.processFlagEvent(flagEvent);\n  };\n\n  Sees.prototype.update = function() {\n    if (this.intent !== 'pickUpFlag') {\n      return;\n    }\n    if (this.flagTarget == null) {\n      this.intent = void 0;\n      return typeof this.unblock === \"function\" ? this.unblock() : void 0;\n    }\n    if ((this.flagTarget != null) && this.flagTarget.pos.x !== this.targetPos.x || this.flagTarget.pos.y !== this.targetPos.y) {\n      this.setTargetPos(this.flagTarget.pos);\n    }\n    if (this.distanceSquared(this.flagTarget.pos) <= this.flagPickupRange * this.flagPickupRange) {\n      if (this.flagTarget != null) {\n        this.removeFlag(this.flagTarget);\n      }\n      this.intent = void 0;\n      this.flagTarget = null;\n      if (typeof this.brake === \"function\") {\n        this.brake();\n      }\n      return typeof this.unblock === \"function\" ? this.unblock() : void 0;\n    }\n  };\n\n  Sees.prototype.pickUpFlag = function(flag) {\n    var thang, _i, _len, _ref;\n    if (_.isString(flag)) {\n      throw new ArgumentError(\"Pick up a flag object instead of a color string.\", \"pickUpFlag\", \"flag\", \"flag\", flag);\n    }\n    if (!(flag && flag.team && flag.color)) {\n      throw new ArgumentError(\"Pass a flag object to pick up.\", \"pickUpFlag\", \"flag\", \"flag\", flag);\n    }\n    if (flag.team !== this.team) {\n      throw new ArgumentError(\"\" + this.id + \" (team \" + this.team + \") can't pick up \" + flag.id + \" (team \" + flag.team + \").\", \"pickUpFlag\", \"flag\", \"flag\", flag);\n    }\n    if (this.move == null) {\n      throw new ArgumentError(\"\" + this.id + \" can't move, so can't pick up \" + flag.id + \".\", \"pickUpFlag\", \"flag\", \"flag\", flag);\n    }\n    flag = this.world.getThangByID(flag.id);\n    if (!flag.exists) {\n      return;\n    }\n    this.flagPickupRange = 1.5;\n    if (this.built) {\n      _ref = this.built;\n      for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n        thang = _ref[_i];\n        if (thang.collisionCategory === 'obstacles' && thang.intersects(flag)) {\n          this.flagPickupRange = 4;\n          break;\n        }\n      }\n    }\n    this.setTargetPos(flag.pos, \"pickUpFlag\");\n    if (this.distanceSquared(this.targetPos) <= this.flagPickupRange * this.flagPickupRange) {\n      this.intent = \"pickUpFlag\";\n      this.removeFlag(flag);\n      this.flagTarget = null;\n      this.setAction('idle');\n      this.setTarget(null);\n      if (typeof this.brake === \"function\") {\n        this.brake();\n      }\n      return typeof this.block === \"function\" ? this.block() : void 0;\n    } else {\n      this.flagTarget = flag;\n      this.intent = \"pickUpFlag\";\n      this.setAction('move');\n      return typeof this.block === \"function\" ? this.block() : void 0;\n    }\n  };\n\n  Sees.prototype.addFlag = function(color, targetPos) {\n    var flagEvent, team, _ref;\n    if (color !== 'green' && color !== 'black' && color !== 'violet') {\n      throw new ArgumentError(\"Pass a flag color to create.\", \"addFlag\", \"color\", \"string\", color);\n    }\n    if (!(targetPos && _.isNumber(targetPos.x) && _.isNumber(targetPos.y))) {\n      throw new ArgumentError(\"Pass a flag position to create.\", \"addFlag\", \"targetPos\", \"object\", targetPos);\n    }\n    team = (_ref = this.team) != null ? _ref : 'humans';\n    targetPos = {\n      x: targetPos.x,\n      y: targetPos.y\n    };\n    flagEvent = {\n      player: \"Code (\" + team + \")\",\n      team: team,\n      color: color,\n      time: this.world.age,\n      active: true,\n      pos: targetPos,\n      source: 'code'\n    };\n    this.world.addFlagEvent(flagEvent);\n    return this.visionSystem.processFlagEvent(flagEvent);\n  };\n\n  Sees.prototype.findHazards = function() {\n    var t, _i, _len, _ref, _results;\n    if (this.collisionSystem == null) {\n      this.collisionSystem = this.world.getSystem(\"Collision\");\n    }\n    _ref = this.collisionSystem.extantColliders;\n    _results = [];\n    for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n      t = _ref[_i];\n      if (t.isHazard && !t.dead) {\n        _results.push(t);\n      }\n    }\n    return _results;\n  };\n\n  return Sees;\n\n})(Component);\n",
	"commitMessage": "Fixes case when directly on top of a flag and not unblocking",
	"parent": "57647ed07bb21e33001ef91a",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"patches": [],
	"official": false,
	"configSchema": {
		"properties": {
			"seesThroughWalls": {
				"type": "boolean",
				"description": "Whether this Thang can see through walls (and doesn't have to perform line-of-sight checks).",
				"default": false
			},
			"visualRange": {
				"type": "number",
				"description": "How far this Thang can see, in meters.",
				"minimum": 0,
				"default": 9001,
				"format": "meters"
			}
		},
		"default": {
			"visualRange": 9001,
			"seesThroughWalls": false
		},
		"id": "__base__",
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b75ad7fc0f6d519000001",
			"majorVersion": 0
		}
	],
	"description": "This Thang can see other Thangs.",
	"system": "vision",
	"searchStrings": "sees s se",
	"i18nCoverage": [
		"-",
		"ru",
		"zh-HANS",
		"fr",
		"de-DE",
		"lt",
		"zh-HANT",
		"sk",
		"es-419",
		"es-ES",
		"it",
		"pl",
		"uk",
		"pt-BR",
		"sv",
		"nl-NL",
		"el",
		"da"
	],
	"index": true,
	"created": "2016-06-23T17:32:32.361Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 128,
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