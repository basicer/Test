{
	"_id": "57437ee1f2770320c70fb49c",
	"index": true,
	"slug": "powersup",
	"name": "PowersUp",
	"codeLanguage": "coffeescript",
	"js": "var PowersUp, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nPowersUp = (function(_super) {\n  __extends(PowersUp, _super);\n\n  function PowersUp() {\n    _ref = PowersUp.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  PowersUp.className = 'PowersUp';\n\n  PowersUp.prototype.attach = function(thang) {\n    var powerUpAction;\n    powerUpAction = {\n      name: 'power-up',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    PowersUp.__super__.attach.call(this, thang);\n    return thang.addActions(powerUpAction);\n  };\n\n  PowersUp.prototype.powerUp = function() {\n    this.setAction('power-up');\n    if (this.getCooldown('power-up') > 1) {\n      return \"done\";\n    } else if (this.poweredUpOnce) {\n      this.poweredUpOnce = false;\n      this.setAction('idle');\n      return \"done\";\n    } else {\n      return \"power-up\";\n    }\n  };\n\n  PowersUp.prototype.update = function() {\n    var effect, _i, _len, _ref1;\n    if (!(this.action === 'power-up' && this.act())) {\n      return;\n    }\n    this.effects = (function() {\n      var _i, _len, _ref1, _ref2, _results;\n      _ref1 = this.effects;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        effect = _ref1[_i];\n        if ((_ref2 = effect.name) !== 'power-up' && _ref2 !== 'power-up-2') {\n          _results.push(effect);\n        }\n      }\n      return _results;\n    }).call(this);\n    _ref1 = this.powerUpEffects.slice();\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      effect = _ref1[_i];\n      this.addEffect(effect);\n    }\n    if (this.plan) {\n      this.poweredUpOnce = true;\n    }\n    return typeof this.brake === \"function\" ? this.brake() : void 0;\n  };\n\n  PowersUp.prototype.performAttack = function() {\n    var effect, _i, _len, _ref1, _ref2, _results;\n    if (this.powerUpEndsOnAttack) {\n      _ref1 = this.effects;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        effect = _ref1[_i];\n        if ((effect.timeSinceStart != null) && ((_ref2 = effect.name) === 'power-up' || _ref2 === 'power-up-2')) {\n          _results.push(effect.timeSinceStart += 9001);\n        }\n      }\n      return _results;\n    }\n  };\n\n  return PowersUp;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "53cac46003039b0439ee74e4",
	"watchers": [
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"commitMessage": "i18n patch(es)",
	"parent": "572f55c55d4836f6012ecf73",
	"official": false,
	"configSchema": {
		"properties": {
			"cooldown": {
				"type": "number",
				"description": "How many seconds each power-up takes.",
				"default": 1,
				"minimum": 0,
				"format": "seconds"
			},
			"powerUpEffects": {
				"type": "array",
				"items": {
					"type": "object",
					"additionalProperties": false,
					"properties": {
						"name": {
							"type": "string",
							"description": "Human readable name of the effect."
						},
						"duration": {
							"type": "number",
							"description": "Time in seconds that the effect lasts."
						},
						"repeatsEvery": {
							"type": "number",
							"description": "Repeats the effect every x seconds."
						},
						"reverts": {
							"type": "boolean",
							"description": "Property change goes back once the effect ends."
						},
						"revertsProportionally": {
							"type": "boolean",
							"description": "Property may change over time by outside forces.          Recalculate when effect is over, reversing the calculation.          So if factor is 0.5, initial value is 100, value goes to 50,          then decreases by outside forces to 40, revert goes to 80          instead of 100. This is mainly for health effects."
						},
						"targetProperty": {
							"type": "string",
							"description": "Property being affected."
						},
						"setTo": {
							"description": "Sets the property to this value."
						},
						"addend": {
							"type": "number",
							"description": "Adds to the property value (after setTo)."
						},
						"factor": {
							"type": "number",
							"description": "Multiplies the property by the value (after setTo and any addends)."
						}
					},
					"default": {
						"name": "power-up",
						"targetProperty": "attackDamage",
						"reverts": true,
						"duration": 10
					}
				},
				"default": [
					{
						"name": "power-up",
						"targetProperty": "attackDamage",
						"reverts": true,
						"duration": 10
					}
				]
			},
			"powerUpEndsOnAttack": {
				"type": "boolean",
				"description": "Whether the power up applies to a single attack."
			},
			"specificCooldown": {
				"type": "number",
				"description": "How many seconds before this specific power-up can be done again, if longer than normal cooldown.",
				"minimum": 0,
				"format": "seconds"
			}
		},
		"additionalProperties": false,
		"type": "object",
		"default": {
			"powerUpEffects": [
				{
					"name": "power-up",
					"targetProperty": "attackDamage",
					"reverts": true,
					"duration": 10
				}
			],
			"cooldown": 1,
			"powerUpEndsOnAttack": false,
			"specificCooldown": 0
		}
	},
	"dependencies": [
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		},
		{
			"original": "52e95818a3ca8546b7000001",
			"majorVersion": 0
		}
	],
	"description": "This Component gives the Thang the ability to power up (with arbitrary effects).",
	"system": "combat",
	"searchStrings": "powers up p po pow powe power powers",
	"i18nCoverage": [
		"-",
		"gl",
		"fr",
		"nb",
		"de-DE",
		"ru",
		"zh-HANS",
		"sk",
		"it",
		"pt-BR",
		"uk",
		"sv",
		"es-419",
		"ja",
		"el",
		"nl-NL",
		"da",
		"pl"
	],
	"patches": [],
	"created": "2016-05-23T22:06:25.690Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 30,
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