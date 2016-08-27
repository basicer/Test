{
	"_id": "57c19b99def1bb3600ca6a3d",
	"slug": "allied",
	"creator": "57bd71a184e6e42500820dde",
	"name": "Allied",
	"original": "524b7b747fc0f6d519000010",
	"__v": 1,
	"js": "var Allied, ArgumentError,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nArgumentError = require('lib/world/errors').ArgumentError;\n\nAllied = (function(_super) {\n  __extends(Allied, _super);\n\n  Allied.className = 'Allied';\n\n  Allied.prototype.significantProperty = 'isAttackable';\n\n  function Allied(config) {\n    Allied.__super__.constructor.call(this, config);\n    this.superteam || (this.superteam = this.team);\n  }\n\n  Allied.prototype.attach = function(thang) {\n    Allied.__super__.attach.call(this, thang);\n    return thang.allianceSystem = thang.world.getSystem(\"Alliance\");\n  };\n\n  Allied.prototype.getFriends = function() {\n    var friends, thang, _i, _len, _ref;\n    if (!this.canSee) {\n      return [];\n    }\n    friends = [];\n    _ref = this.allAllies;\n    for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n      thang = _ref[_i];\n      if (thang !== this && thang[this.significantProperty] && !thang.hidden) {\n        friends.push(thang);\n      }\n    }\n    return friends;\n  };\n\n  Allied.prototype.findFriends = function() {\n    if (arguments[0] != null) {\n      throw new ArgumentError('', \"findFriends\", \"\", \"\", arguments[0]);\n    }\n    return this.getFriends();\n  };\n\n  Allied.prototype.hasFriends = function() {\n    var thang, _i, _len, _ref;\n    _ref = this.allAllies;\n    for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n      thang = _ref[_i];\n      if (thang !== this && thang[this.significantProperty] && this.canSee(thang, true)) {\n        return true;\n      }\n    }\n    return false;\n  };\n\n  Allied.prototype.getCombatants = function() {\n    var combatants, thang, _i, _len, _ref;\n    if (!this.canSee) {\n      return [];\n    }\n    combatants = [];\n    _ref = this.allianceSystem.allAlliedThangs;\n    for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n      thang = _ref[_i];\n      if (thang[this.significantProperty] && this.canSee(thang) && thang !== this) {\n        combatants.push(thang);\n      }\n    }\n    return combatants;\n  };\n\n  Allied.prototype.findCombatants = function() {\n    if (arguments[0] != null) {\n      throw new ArgumentError('', \"findCombatants\", \"\", \"\", arguments[0]);\n    }\n    return this.getCombatants();\n  };\n\n  Allied.prototype.findCorpses = function() {\n    var corpses;\n    if (arguments[0] != null) {\n      throw new ArgumentError('', \"findCorpses\", \"\", \"\", arguments[0]);\n    }\n    corpses = _.filter(this.world.getSystem('Combat').corpses, function(corpse) {\n      return corpse.hasEffects;\n    });\n    return corpses;\n  };\n\n  Allied.prototype.getEnemies = function() {\n    var enemies, thang, _i, _len, _ref;\n    if (!this.canSee) {\n      return [];\n    }\n    enemies = [];\n    _ref = this.allianceSystem.allAlliedThangs;\n    for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n      thang = _ref[_i];\n      if (thang.superteam !== this.superteam && thang[this.significantProperty] && this.canSee(thang)) {\n        enemies.push(thang);\n      }\n    }\n    return enemies;\n  };\n\n  Allied.prototype.findEnemies = function() {\n    if (arguments[0] != null) {\n      throw new ArgumentError('', \"findEnemies\", \"\", \"\", arguments[0]);\n    }\n    return this.getEnemies();\n  };\n\n  Allied.prototype.hasEnemies = function() {\n    var thang, _i, _len, _ref;\n    _ref = this.allianceSystem.allAlliedThangs;\n    for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n      thang = _ref[_i];\n      if (thang.superteam !== this.superteam && thang[this.significantProperty]) {\n        return true;\n      }\n    }\n    return false;\n  };\n\n  Allied.prototype.getEnemyMissiles = function() {\n    var enemyMissiles, thang, _i, _len, _ref;\n    if (!this.canSee) {\n      return [];\n    }\n    enemyMissiles = [];\n    _ref = this.allianceSystem.allAlliedThangs;\n    for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n      thang = _ref[_i];\n      if (thang.isMissile && thang.superteam !== this.superteam && this.canSee(thang)) {\n        enemyMissiles.push(thang);\n      }\n    }\n    return enemyMissiles;\n  };\n\n  Allied.prototype.findEnemyMissiles = function() {\n    if (arguments[0] != null) {\n      throw new ArgumentError('', \"findEnemyMissiles\", \"\", \"\", arguments[0]);\n    }\n    return this.getEnemyMissiles();\n  };\n\n  Allied.prototype.getFriendlyMissiles = function() {\n    var friendlyMissiles, thang, _i, _len, _ref;\n    if (!this.canSee) {\n      return [];\n    }\n    friendlyMissiles = [];\n    _ref = this.allianceSystem.allAlliedThangs;\n    for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n      thang = _ref[_i];\n      if (thang.isMissile && thang.superteam === this.superteam && this.canSee(thang)) {\n        friendlyMissiles.push(thang);\n      }\n    }\n    return friendlyMissiles;\n  };\n\n  Allied.prototype.findFriendlyMissiles = function() {\n    if (arguments[0] != null) {\n      throw new ArgumentError('', \"findFriendlyMissiles\", \"\", \"\", arguments[0]);\n    }\n    return this.getFriendlyMissiles();\n  };\n\n  Allied.prototype.getNearestFriend = function() {\n    return this.getNearest(this.getFriends());\n  };\n\n  Allied.prototype.findNearestFriend = function() {\n    if (arguments[0] != null) {\n      throw new ArgumentError(\"\", \"findNearestFriend\", \"\", \"\", arguments[0]);\n    }\n    return this.getNearestFriend();\n  };\n\n  Allied.prototype.getNearestEnemy = function() {\n    return this.getNearest(this.getEnemies());\n  };\n\n  Allied.prototype.findNearestEnemy = function() {\n    var enemy;\n    if (arguments[0] != null) {\n      throw new ArgumentError(\"\", \"findNearestEnemy\", \"\", \"\", arguments[0]);\n    }\n    enemy = this.getNearestEnemy();\n    if (this.announceAction) {\n      if (enemy) {\n        this.announceAction(\"findNearestEnemy: I see you.\", true);\n      } else {\n        this.announceAction(\"findNearestEnemy: I don't see anyone.\", true);\n      }\n    }\n    return enemy;\n  };\n\n  Allied.prototype.getNearestEnemyValidateReturn = function(ret) {\n    if ((ret != null) && !ret instanceof Thang) {\n      throw new ArgumentError(\"\", \"getNearestEnemy\", \"return\", \"Thang\", ret);\n    }\n  };\n\n  Allied.prototype.getNearestCombatant = function() {\n    return this.getNearest(this.getCombatants());\n  };\n\n  Allied.prototype.findNearestCombatant = function() {\n    if (arguments[0] != null) {\n      throw new ArgumentError(\"\", \"findNearestCombatant\", \"\", \"\", arguments[0]);\n    }\n    return this.getNearestCombatant();\n  };\n\n  return Allied;\n\n})(Component);\n",
	"commitMessage": "Diplomat submission for lang sl: 9 change(s).",
	"parent": "57a8404efc40d83500ab5c40",
	"patches": [
		"5768fcb87cc42a2e003037da",
		"5798c8bb1ac4c925005bc73e",
		"57c19bfcb202e92500cf3b3c"
	],
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"official": false,
	"configSchema": {
		"properties": {
			"team": {
				"type": "string",
				"description": "Which team this Thang is on. Teams must not change after the level starts.",
				"format": "team"
			},
			"superteam": {
				"type": "string",
				"description": "Which superteam this Thang is on (or defaults to team).",
				"format": "superteam",
				"default": ""
			},
			"significantProperty": {
				"type": "string",
				"description": "Which property to use to filter getFriends/getEnemies/getCombatants with, like 'isAttackable' or 'isSelectable'.",
				"default": "isAttackable"
			}
		},
		"default": {
			"team": "humans",
			"superteam": "",
			"significantProperty": "isAttackable"
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
	"description": "This Thang is part of a team.",
	"system": "alliance",
	"searchStrings": "allied a al all alli",
	"i18nCoverage": [
		"-",
		"fr",
		"es-419",
		"pt-BR",
		"hu",
		"pl",
		"nl-NL",
		"ru",
		"da",
		"ro",
		"de-DE",
		"tr",
		"it",
		"ca",
		"el",
		"zh-HANS",
		"sv",
		"bg",
		"he",
		"lt",
		"cs",
		"sr",
		"sk",
		"id",
		"ar",
		"fi",
		"es-ES",
		"uk",
		"sl"
	],
	"index": true,
	"created": "2016-08-27T13:54:33.741Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 201,
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