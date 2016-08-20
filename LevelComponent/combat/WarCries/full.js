{
	"_id": "57b87dd19c0e082f00714c92",
	"searchStrings": "war cries w wa war warc warcr warcri",
	"index": true,
	"slug": "warcries",
	"name": "WarCries",
	"js": "var WarCries,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nWarCries = (function(_super) {\n  __extends(WarCries, _super);\n\n  WarCries.className = \"WarCries\";\n\n  function WarCries(config) {\n    WarCries.__super__.constructor.call(this, config);\n    this.warcryRangeSquared = this.warcryRange * this.warcryRange;\n  }\n\n  WarCries.prototype.attach = function(thang) {\n    var warcryAction;\n    warcryAction = {\n      name: 'warcry',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    WarCries.__super__.attach.call(this, thang);\n    return thang.addActions(warcryAction);\n  };\n\n  WarCries.prototype.warcry = function() {\n    this.setAction('warcry');\n    return typeof this.block === \"function\" ? this.block() : void 0;\n  };\n\n  WarCries.prototype.update = function() {\n    var args, e, effect, effects, friend, _i, _j, _len, _len1, _ref;\n    if (!(this.action === 'warcry' && this.act())) {\n      return;\n    }\n    if (typeof this.unblock === \"function\") {\n      this.unblock();\n    }\n    if (this.hidden) {\n      if (typeof this.unhide === \"function\") {\n        this.unhide();\n      }\n    }\n    if (typeof this.addCurrentEvent === \"function\") {\n      this.addCurrentEvent('warcry');\n    }\n    if (typeof this.sayWithoutBlocking === \"function\") {\n      this.sayWithoutBlocking(\"Goooo \" + this.team + \"!\");\n    }\n    _ref = [this].concat(this.getFriends());\n    for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n      friend = _ref[_i];\n      if (!(friend.hasEffects && this.distanceSquared(friend) <= this.warcryRangeSquared)) {\n        continue;\n      }\n      friend.effects = (function() {\n        var _j, _len1, _ref1, _results;\n        _ref1 = friend.effects;\n        _results = [];\n        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {\n          e = _ref1[_j];\n          if (e.name !== 'warcry') {\n            _results.push(e);\n          }\n        }\n        return _results;\n      })();\n      effects = [\n        {\n          name: 'warcry',\n          duration: this.warcryDuration,\n          reverts: true,\n          factor: this.warcryHasteFactor,\n          targetProperty: 'maxSpeed'\n        }, {\n          name: 'warcry',\n          duration: this.warcryDuration,\n          reverts: true,\n          factor: this.warcryHasteFactor,\n          targetProperty: 'actionTimeFactor'\n        }\n      ];\n      for (_j = 0, _len1 = effects.length; _j < _len1; _j++) {\n        effect = effects[_j];\n        friend.addEffect(effect, this);\n      }\n    }\n    args = [parseFloat(this.pos.x.toFixed(2)), parseFloat(this.pos.y.toFixed(2)), parseFloat(this.warcryRange.toFixed(2)), '#FF8C00'];\n    return this.addCurrentEvent(\"aoe-\" + (JSON.stringify(args)));\n  };\n\n  return WarCries;\n\n})(Component);\n",
	"creator": "57b87d869c0e082f00714c84",
	"original": "53178759a508f6e7b3464001",
	"__v": 0,
	"commitMessage": "Diplomat submission for lang pl: 1 change(s).",
	"parent": "5794e15090ff081f00acac99",
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
			"cooldown": {
				"type": "number",
				"minimum": 0,
				"description": "Cooldown before this Thang can act again after jumping."
			},
			"specificCooldown": {
				"type": "number",
				"description": "Cooldown before this Thang can jump again.",
				"minimum": 0
			},
			"warcryDuration": {
				"type": "number",
				"description": "How long the warcry lasts, in seconds.",
				"format": "seconds",
				"default": 5
			},
			"warcryHasteFactor": {
				"type": "number",
				"description": "By how much to increase the speed of allied units.",
				"default": 1.3
			},
			"warcryRange": {
				"type": "number",
				"default": 10,
				"description": "How far the warcry reaches, in meters.",
				"format": "meters"
			}
		},
		"additionalProperties": false,
		"type": "object",
		"default": {
			"cooldown": 1,
			"specificCooldown": 0,
			"warcryHasteFactor": 1.3,
			"warcryDuration": 5,
			"warcryRange": 10
		}
	},
	"dependencies": [],
	"description": "This Component makes the Thang let out a warcry, which hastes allies around it.",
	"system": "combat",
	"i18nCoverage": [
		"-",
		"fr",
		"de-DE",
		"nb",
		"ru",
		"zh-HANS",
		"sk",
		"it",
		"pt-BR",
		"uk",
		"es-419",
		"sv",
		"el",
		"nl-NL",
		"da",
		"tr",
		"es-ES",
		"zh-HANT",
		"pl"
	],
	"created": "2016-08-20T15:57:05.175Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 37,
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