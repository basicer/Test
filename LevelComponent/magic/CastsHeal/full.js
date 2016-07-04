{
	"_id": "577a04da7806f96100b7de1a",
	"searchStrings": "casts heal c ca cas cast casts castsh castshe",
	"index": true,
	"slug": "castsheal",
	"name": "CastsHeal",
	"js": "var CastsHeal,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCastsHeal = (function(_super) {\n  __extends(CastsHeal, _super);\n\n  CastsHeal.className = 'CastsHeal';\n\n  function CastsHeal(config) {\n    CastsHeal.__super__.constructor.call(this, config);\n    this._healSpell = {\n      name: 'heal',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      range: this.range,\n      health: this.health\n    };\n    delete this.health;\n    delete this.cooldown;\n    delete this.specificCooldown;\n    delete this.range;\n  }\n\n  CastsHeal.prototype.attach = function(thang) {\n    CastsHeal.__super__.attach.call(this, thang);\n    return thang.addSpell(this._healSpell);\n  };\n\n  CastsHeal.prototype.getTarget_heal = function() {\n    var amountToBeHealed, bestFriend, bestFriendValue, friend, friends, healRangeSquared, healValue, inRange, _i, _len;\n    if (!(friends = typeof this.getFriends === \"function\" ? this.getFriends() : void 0)) {\n      return null;\n    }\n    bestFriend = null;\n    bestFriendValue = 0;\n    healRangeSquared = this.spells.heal.range * this.spells.heal.range;\n    for (_i = 0, _len = friends.length; _i < _len; _i++) {\n      friend = friends[_i];\n      if (!(friend.health < friend.maxHealth)) {\n        continue;\n      }\n      amountToBeHealed = Math.min(friend.maxHealth - friend.health, this.spells.heal.health);\n      if (amountToBeHealed < this.spells.heal.healAmount / 2 && friend.health > friend.maxHealth / 2) {\n        continue;\n      }\n      inRange = this.distanceSquared(friend) <= healRangeSquared;\n      healValue = amountToBeHealed / (1 + friend.health / friend.maxHealth);\n      if (!inRange) {\n        healValue /= 10;\n      }\n      if (healValue > bestFriendValue) {\n        bestFriendValue = healValue;\n        bestFriend = friend;\n      }\n    }\n    return bestFriend;\n  };\n\n  CastsHeal.prototype.perform_heal = function() {\n    var e;\n    if (this.target.dead) {\n      return;\n    }\n    this.target.health = Math.min(this.target.maxHealth, this.target.health + this.spells.heal.health);\n    if (this.target.effects) {\n      this.target.effects = (function() {\n        var _i, _len, _ref, _results;\n        _ref = this.target.effects;\n        _results = [];\n        for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n          e = _ref[_i];\n          if (e.name !== 'heal') {\n            _results.push(e);\n          }\n        }\n        return _results;\n      }).call(this);\n      return this.target.addEffect({\n        name: 'heal',\n        duration: 0.5,\n        reverts: true,\n        setTo: true,\n        targetProperty: 'beingHealed'\n      });\n    }\n  };\n\n  return CastsHeal;\n\n})(Component);\n",
	"system": "magic",
	"creator": "57261bee23fccb2f009093c1",
	"original": "5462e1093839c6e02811d1c0",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Diplomat submission for lang bg: 2 change(s).",
	"parent": "56faaa2b3d3c0325000441e7",
	"description": "This Component gives the Thang a heal spell.",
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
			},
			"health": {
				"type": "number"
			}
		},
		"additionalProperties": false,
		"type": "object",
		"default": {
			"range": 30,
			"cooldown": 0.75,
			"specificCooldown": 7.5,
			"health": 200
		}
	},
	"i18nCoverage": [
		"-",
		"ru",
		"gl",
		"fr",
		"sv",
		"de-DE",
		"es-ES",
		"es-419",
		"zh-HANS",
		"nl-NL",
		"sk",
		"pt-BR",
		"pl",
		"uk",
		"it",
		"el",
		"hu",
		"sr",
		"da",
		"bg"
	],
	"patches": [],
	"created": "2016-07-04T06:40:26.236Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 32,
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