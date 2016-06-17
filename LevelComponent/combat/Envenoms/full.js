{
	"_id": "57647fac38a66f2a00a23bbf",
	"slug": "envenoms",
	"searchStrings": "envenoms e en env enve enven enveno",
	"name": "Envenoms",
	"js": "var Envenoms, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nEnvenoms = (function(_super) {\n  __extends(Envenoms, _super);\n\n  function Envenoms() {\n    _ref = Envenoms.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Envenoms.className = 'Envenoms';\n\n  Envenoms.prototype.attach = function(thang) {\n    var envenomAction;\n    envenomAction = {\n      name: 'envenom',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    Envenoms.__super__.attach.call(this, thang);\n    return thang.addActions(envenomAction);\n  };\n\n  Envenoms.prototype.envenom = function() {\n    this.setAction('envenom');\n    return typeof this.block === \"function\" ? this.block() : void 0;\n  };\n\n  Envenoms.prototype.update = function() {\n    if (!(this.action === 'envenom' && this.act())) {\n      return;\n    }\n    if (typeof this.unblock === \"function\") {\n      this.unblock();\n    }\n    return this.envenomed = true;\n  };\n\n  Envenoms.prototype.performAttack = function(target, damageRatio, momentum) {\n    var damagePerFrame, envenomDPS, heroDPS, _ref1;\n    if (damageRatio == null) {\n      damageRatio = 1;\n    }\n    if (momentum == null) {\n      momentum = null;\n    }\n    if (!this.envenomed) {\n      return;\n    }\n    this.envenomed = false;\n    if (!target.hasEffects) {\n      return;\n    }\n    heroDPS = this.attackDamage / this.actions.attack.cooldown * ((_ref1 = this.attackDamageFactor) != null ? _ref1 : 1);\n    envenomDPS = heroDPS / 2;\n    damagePerFrame = envenomDPS * this.world.dt;\n    return target.addEffect({\n      name: 'poison',\n      duration: this.envenomDuration,\n      targetProperty: 'health',\n      repeatsEvery: this.world.dt,\n      addend: -damagePerFrame\n    });\n  };\n\n  return Envenoms;\n\n})(Component);\n",
	"system": "combat",
	"creator": "537d01f484c54c6e05c05989",
	"original": "5466d574417c8b48a9811e88",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "This Component gives the Thang a powerup to envenom its next attack.",
	"codeLanguage": "coffeescript",
	"dependencies": [
		{
			"original": "52e95818a3ca8546b7000001",
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
			"specificCooldown": {
				"type": "number",
				"minimum": 0,
				"format": "seconds"
			},
			"envenomDuration": {
				"type": "number",
				"minimum": 0,
				"exclusiveMinimum": true,
				"format": "seconds"
			}
		},
		"additionalProperties": false,
		"type": "object",
		"default": {
			"cooldown": 0.75,
			"specificCooldown": 10,
			"envenomDuration": 10
		}
	},
	"i18nCoverage": [
		"-",
		"es-419",
		"gl",
		"fr",
		"nb",
		"de-DE",
		"es-ES",
		"ru",
		"zh-HANS",
		"sk",
		"it",
		"uk",
		"pt-BR",
		"nl-NL",
		"el",
		"da",
		"sv",
		"hu",
		"pl"
	],
	"commitMessage": "Fix potentially not existing block/unblock methods",
	"parent": "5746273d8863832000a55b7c",
	"patches": [],
	"index": true,
	"created": "2016-06-17T22:54:36.092Z",
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