{
	"_id": "57627ad917664024009a4fc5",
	"searchStrings": "casts drain life c ca cas cast casts castsd castsdr castsdra castsdrai castsdrain castsdrainl castsdrainli",
	"index": true,
	"slug": "castsdrainlife",
	"name": "CastsDrainLife",
	"js": "var CastsDrainLife,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCastsDrainLife = (function(_super) {\n  __extends(CastsDrainLife, _super);\n\n  CastsDrainLife.className = 'CastsDrainLife';\n\n  function CastsDrainLife(config) {\n    CastsDrainLife.__super__.constructor.call(this, config);\n    this._drainLifeSpell = {\n      name: 'drain-life',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      range: this.range,\n      damage: this.damage\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    delete this.range;\n    delete this.damage;\n  }\n\n  CastsDrainLife.prototype.attach = function(thang) {\n    CastsDrainLife.__super__.attach.call(this, thang);\n    return thang.addSpell(this._drainLifeSpell);\n  };\n\n  CastsDrainLife.prototype['perform_drain-life'] = function() {\n    var damagePerFrame, duration, effect, myEffects, targetEffects, _i, _j, _len, _len1;\n    duration = this.spells['drain-life'].cooldown;\n    damagePerFrame = this.spells['drain-life'].damage / duration / this.world.frameRate;\n    targetEffects = [\n      {\n        name: 'drain-life',\n        duration: duration,\n        reverts: false,\n        addend: -damagePerFrame,\n        targetProperty: 'health',\n        repeatsEvery: this.world.dt\n      }\n    ];\n    for (_i = 0, _len = targetEffects.length; _i < _len; _i++) {\n      effect = targetEffects[_i];\n      this.target.addEffect(effect);\n    }\n    myEffects = [\n      {\n        name: 'drain-life',\n        duration: duration,\n        reverts: false,\n        addend: damagePerFrame,\n        targetProperty: 'health',\n        repeatsEvery: this.world.dt\n      }\n    ];\n    for (_j = 0, _len1 = myEffects.length; _j < _len1; _j++) {\n      effect = myEffects[_j];\n      this.addEffect(effect);\n    }\n    if (this.hidden) {\n      return typeof this.unhide === \"function\" ? this.unhide() : void 0;\n    }\n  };\n\n  return CastsDrainLife;\n\n})(Component);\n",
	"system": "magic",
	"creator": "53a0668a64edb6fa0bf673eb",
	"original": "5462e0953839c6e02811d1b7",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 2,
	"commitMessage": "Diplomat submission for lang fi: 1 change(s).",
	"parent": "57437ee1f2770320c70fb49a",
	"description": "This Component gives the Thang a drain life spell.",
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
			"damage": {
				"type": "number",
				"minimum": 0
			}
		},
		"additionalProperties": false,
		"type": "object",
		"default": {
			"range": 15,
			"cooldown": 0.75,
			"specificCooldown": 0,
			"damage": 6
		}
	},
	"i18nCoverage": [
		"-",
		"de-DE",
		"fr",
		"es-ES",
		"ru",
		"nb",
		"zh-HANS",
		"pt-BR",
		"sk",
		"nl-NL",
		"sv",
		"uk",
		"pl",
		"it",
		"hu",
		"el",
		"ro",
		"bg",
		"id",
		"es-419",
		"sr",
		"da",
		"fi"
	],
	"patches": [
		"577a01fb35ea2e24003527a7",
		"577a0254ba80731f00d03020"
	],
	"created": "2016-06-16T10:09:29.379Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 37,
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