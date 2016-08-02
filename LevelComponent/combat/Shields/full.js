{
	"_id": "57a0a679d4d20d2e0079a291",
	"slug": "shields",
	"name": "Shields",
	"js": "var Shields,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nShields = (function(_super) {\n  __extends(Shields, _super);\n\n  Shields.className = \"Shields\";\n\n  function Shields(config) {\n    Shields.__super__.constructor.call(this, config);\n    this.shieldDefensePercent = parseInt(this.shieldDefenseFactor * 100);\n  }\n\n  Shields.prototype.attach = function(thang) {\n    var shieldAction;\n    shieldAction = {\n      name: 'shield',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    Shields.__super__.attach.call(this, thang);\n    return thang.addActions(shieldAction);\n  };\n\n  Shields.prototype.shield = function() {\n    var oldAction;\n    oldAction = this.action;\n    this.setAction('shield');\n    if (this.act()) {\n      this.startShielding();\n      if (oldAction === 'shield') {\n        this.actionActivated = false;\n      }\n    } else {\n      this.intent = 'shield';\n    }\n    return typeof this.block === \"function\" ? this.block() : void 0;\n  };\n\n  Shields.prototype.update = function() {\n    if (!(this.intent === 'shield' && this.act())) {\n      return;\n    }\n    return this.startShielding();\n  };\n\n  Shields.prototype.startShielding = function() {\n    var e,\n      _this = this;\n    this.intent = void 0;\n    this.effects = (function() {\n      var _i, _len, _ref, _results;\n      _ref = this.effects;\n      _results = [];\n      for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n        e = _ref[_i];\n        if (e.name !== 'shield') {\n          _results.push(e);\n        }\n      }\n      return _results;\n    }).call(this);\n    this.addEffect({\n      name: 'shield',\n      duration: this.actions['shield'].cooldown,\n      reverts: true,\n      targetProperty: 'isShielding',\n      setTo: true,\n      onRevert: function() {\n        return _this.stopShielding();\n      }\n    });\n    this.addEffect({\n      name: 'shield',\n      duration: this.actions['shield'].cooldown + this.world.dt,\n      reverts: true,\n      targetProperty: 'damageMitigationFactor',\n      factor: 1 - this.shieldDefenseFactor\n    });\n    if (typeof this.isGrounded === \"function\" ? this.isGrounded() : void 0) {\n      return typeof this.brake === \"function\" ? this.brake() : void 0;\n    }\n  };\n\n  Shields.prototype.stopShielding = function() {\n    return this.unblock();\n  };\n\n  return Shields;\n\n})(Component);\n",
	"creator": "577fa93a06c3d62900b17b3a",
	"original": "531a9707253ea9e79b474457",
	"__v": 0,
	"commitMessage": "Diplomat submission for lang vi: 1 change(s).",
	"parent": "576b5bad72cdca1f0075514b",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"patches": [
		"579cad849872641f007ece01",
		"579cadbd63fd7f2000499463"
	],
	"official": false,
	"configSchema": {
		"id": "__base__",
		"properties": {
			"cooldown": {
				"type": "number",
				"description": "How many seconds each shield takes.",
				"default": 0.5,
				"minimum": 0,
				"format": "seconds"
			},
			"shieldDefenseFactor": {
				"type": "number",
				"minimum": 0,
				"maximum": 1,
				"description": "How much damage is absorbed while in shield mode.",
				"default": 0.75
			},
			"specificCooldown": {
				"type": "number",
				"description": "How many seconds before this specific shield can be done again, if longer than normal cooldown.",
				"minimum": 0,
				"format": "seconds"
			}
		},
		"additionalProperties": false,
		"type": "object",
		"default": {
			"cooldown": 0.5,
			"specificCooldown": 0,
			"shieldDefenseFactor": 0.75
		}
	},
	"dependencies": [
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		}
	],
	"description": "This Component gives the Thang a shield ability.",
	"system": "combat",
	"searchStrings": "shields s sh shi shie shiel",
	"i18nCoverage": [
		"-",
		"es-ES",
		"cs",
		"ru",
		"zh-HANS",
		"fr",
		"nb",
		"de-DE",
		"lt",
		"es-419",
		"zh-HANT",
		"ro",
		"pt-BR",
		"sk",
		"hu",
		"it",
		"ja",
		"pl",
		"uk",
		"fi",
		"tr",
		"el",
		"nl-NL",
		"da",
		"id",
		"sr",
		"vi"
	],
	"created": "2016-08-02T13:56:09.776Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 59,
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