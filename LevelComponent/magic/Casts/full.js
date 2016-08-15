{
	"_id": "57b20ec99c60013600e98a1c",
	"slug": "casts",
	"name": "Casts",
	"js": "var ArgumentError, Casts, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  __slice = [].slice;\n\nArgumentError = require('lib/world/errors').ArgumentError;\n\nCasts = (function(_super) {\n  __extends(Casts, _super);\n\n  function Casts() {\n    _ref = Casts.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Casts.className = 'Casts';\n\n  /*\n  @spellSchema =\n    type: 'object'\n    required: ['name', 'cooldown']\n    properties:\n      name:\n        type: 'string'\n        description: 'The handle for the spell like \"arctic-blast\" which we key the method off as well, so \"perform_arctic-blast\" would apply damage, effects, etc.'\n      range:\n        type: 'number'\n        description: 'Distance in meters this spell can be cast from.'\n      cooldown:\n        type: 'number'\n        description: 'Same as an action'\n      specificCooldown:\n        type: 'number'\n        description: 'Same as an action'\n  */\n\n\n  Casts.prototype.attach = function(thang) {\n    Casts.__super__.attach.call(this, thang);\n    thang.spellHeats = {};\n    thang.spellNames = [];\n    return thang.addActions({\n      name: 'cast',\n      cooldown: 1\n    });\n  };\n\n  Casts.prototype.addSpell = function(spell) {\n    if (this.spells == null) {\n      this.spells = {};\n    }\n    this.spells[spell.name] = spell;\n    return this.spellNames.push(spell.name);\n  };\n\n  Casts.prototype.setSpell = function(spell, methodName) {\n    if (methodName == null) {\n      methodName = 'setSpell';\n    }\n    spell = this.getSpellFromName(spell, methodName);\n    if (spell !== this.spell) {\n      this.keepTrackedProperty('spell');\n      return this.spell = spell;\n    }\n  };\n\n  Casts.prototype.cast = function() {\n    var castArguments, setTargetFn, spell, target, targetPos, targetThang;\n    spell = arguments[0], target = arguments[1], castArguments = 3 <= arguments.length ? __slice.call(arguments, 2) : [];\n    if (spell === 'time-warp' || spell === 'raise-dead' || spell === 'windstorm' || spell === 'goldstorm' || spell === 'summon-undead' || spell === 'summon-burl' || spell === 'summon-fangrider') {\n      if (target == null) {\n        target = this;\n      }\n    }\n    if (!target) {\n      throw new ArgumentError(\"You need something to cast upon.\", 'cast', \"target\", \"object\", target);\n    }\n    if (_.isString(target)) {\n      target = this.world.getThangByID(target);\n    } else if (target && !target.isThang && _.isString(target.id) && (targetThang = this.world.getThangByID(target.id))) {\n      target = targetThang;\n    }\n    this.castArguments = castArguments;\n    setTargetFn = this.setTarget;\n    if (spell === 'teleport' || spell === 'antigravity' || spell === 'ice-rink' || spell === 'windstorm') {\n      if (targetPos = target != null ? target.pos : void 0) {\n        target = targetPos;\n      }\n      setTargetFn = this.setTargetPos;\n    } else if ((spell === 'fireball' || spell === 'poison-cloud' || spell === 'raise-dead' || spell === 'shockwave') && (target != null ? target.x : void 0) && (target != null ? target.y : void 0)) {\n      setTargetFn = this.setTargetPos;\n    }\n    this.setSpell(spell, 'cast');\n    setTargetFn.call(this, target, 'cast');\n    if (typeof this.announceAction === \"function\") {\n      this.announceAction(\"cast \\\"\" + spell + \"\\\"\");\n    }\n    this.intent = 'cast';\n    if (!this.actions.move || !this.spell.range || this.distance(target) <= this.spell.range) {\n      this.setAction('cast');\n      this.updateRegistration();\n    } else {\n      this.currentSpeedRatio = 1;\n      this.setAction(\"move\");\n    }\n    return typeof this.block === \"function\" ? this.block() : void 0;\n  };\n\n  Casts.prototype.getSpellFromName = function(spell, methodName) {\n    var closestScore, matchScore, message, otherSpell, _ref1, _ref2;\n    if (typeof spell === 'undefined') {\n      throw new ArgumentError(\"You need a spell to cast.\", methodName, \"spell\", \"string\", spell);\n    }\n    if (!_.isString(spell)) {\n      throw new ArgumentError(\"You need a string spell; one of [\" + (_.keys(this.spells).join(', ')) + \"]\", methodName, \"spell\", \"string\", spell);\n    }\n    if (!(spell in this.spells)) {\n      _ref1 = [0, ''], closestScore = _ref1[0], message = _ref1[1];\n      for (otherSpell in this.spells) {\n        matchScore = otherSpell.score(spell, 0.8);\n        if (matchScore > closestScore) {\n          _ref2 = [matchScore, \"The spell is \\\"\" + otherSpell + \"\\\", not \\\"\" + spell + \"\\\".\"], closestScore = _ref2[0], message = _ref2[1];\n        }\n      }\n      if (closestScore >= 0.5) {\n        throw new ArgumentError(message, methodName, \"spell\", \"string\", spell);\n      }\n      if (methodName === 'canCast') {\n        return null;\n      }\n      throw new ArgumentError(\"You don't have spell \\\"\" + spell + \"\\\", only [\" + (_.keys(this.spells).join(', ')) + \"]\", methodName, \"spell\", \"string\", spell);\n    }\n    return this.spells[spell];\n  };\n\n  Casts.prototype.canCast = function(spell, target) {\n    var targetPos, targetThang, _ref1, _ref2;\n    spell = this.getSpellFromName(spell, 'canCast');\n    if (!spell) {\n      return false;\n    }\n    if (this.spellHeats[spell.name]) {\n      return false;\n    }\n    if (!target) {\n      return true;\n    }\n    if (_.isString(target)) {\n      target = this.world.getThangByID(target);\n    }\n    if (target && !target.isThang && _.isString(target.id) && (targetThang = this.world.getThangByID(target.id))) {\n      target = targetThang;\n    }\n    if ((_ref1 = spell.name) === 'teleport' || _ref1 === 'antigravity' || _ref1 === 'ice-rink' || _ref1 === 'windstorm' || _ref1 === 'fireball' || _ref1 === 'poison-cloud' || _ref1 === 'raise-dead' || _ref1 === 'shockwave') {\n      targetPos = (target != null ? target.pos : void 0) ? target.pos : target;\n      if (!_.isNumber((targetPos != null ? targetPos.x : void 0) + (targetPos != null ? targetPos.y : void 0))) {\n        throw new ArgumentError(\"Target must be an {x, y} coordinate.\", \"canCast\", \"targetPos\", \"object\", targetPos);\n      }\n      return true;\n    }\n    if (!(target != null ? target.isThang : void 0)) {\n      throw new ArgumentError(\"Target must be a unit.\", \"canCast\", \"target\", \"unit\", target);\n    }\n    if (!target.hasEffects) {\n      return false;\n    }\n    if ((_ref2 = spell.name) !== 'heal' && _ref2 !== 'sacrifice' ? _.find(target.effects, {\n      name: spell.name\n    }) : void 0) {\n      return false;\n    }\n    return true;\n  };\n\n  return Casts;\n\n})(Component);\n",
	"creator": "537d01f484c54c6e05c05989",
	"original": "52f13c37528baa731827408d",
	"__v": 0,
	"commitMessage": "Promisfy cast",
	"parent": "57ab1885e5636725008bd842",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"patches": [
		"575e8a9a9301a724002f9771"
	],
	"official": false,
	"configSchema": {
		"id": "__base__",
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b75ad7fc0f6d519000001",
			"majorVersion": 0
		},
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		},
		{
			"original": "524b7b7c7fc0f6d519000011",
			"majorVersion": 0
		}
	],
	"description": "This Component gives the Thang the ability to cast spells (from other Components).",
	"system": "magic",
	"searchStrings": "casts c ca cas",
	"i18nCoverage": [
		"-",
		"tr",
		"ru",
		"gl",
		"fr",
		"sv",
		"de-DE",
		"es-ES",
		"pt-BR",
		"lt",
		"zh-HANS",
		"nb",
		"nl-NL",
		"sk",
		"pl",
		"cs",
		"hu",
		"it",
		"ja",
		"uk",
		"id",
		"ro",
		"el",
		"bg",
		"ca",
		"es-419",
		"sr",
		"da",
		"fi"
	],
	"index": true,
	"created": "2016-08-15T18:49:45.825Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 107,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "5162fab9c92b4c751e000274"
		},
		{
			"access": "read",
			"target": "public"
		}
	]
}