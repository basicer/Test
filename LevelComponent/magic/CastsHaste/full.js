{
	"_id": "577a047dba80731f00d0325b",
	"index": true,
	"slug": "castshaste",
	"name": "CastsHaste",
	"js": "var CastsHaste,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCastsHaste = (function(_super) {\n  __extends(CastsHaste, _super);\n\n  CastsHaste.className = 'CastsHaste';\n\n  function CastsHaste(config) {\n    CastsHaste.__super__.constructor.call(this, config);\n    this._hasteSpell = {\n      name: 'haste',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      range: this.range,\n      duration: this.duration,\n      factor: this.factor\n    };\n    delete this.duration;\n    delete this.factor;\n    delete this.cooldown;\n    delete this.specificCooldown;\n    delete this.range;\n  }\n\n  CastsHaste.prototype.attach = function(thang) {\n    CastsHaste.__super__.attach.call(this, thang);\n    return thang.addSpell(this._hasteSpell);\n  };\n\n  CastsHaste.prototype.castHaste = function(target) {\n    return this.cast('haste', target);\n  };\n\n  CastsHaste.prototype.perform_haste = function() {\n    var e, effect, effects, _i, _len, _results;\n    this.target.effects = (function() {\n      var _i, _len, _ref, _results;\n      _ref = this.target.effects;\n      _results = [];\n      for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n        e = _ref[_i];\n        if (e.name !== 'haste') {\n          _results.push(e);\n        }\n      }\n      return _results;\n    }).call(this);\n    effects = [\n      {\n        name: 'haste',\n        duration: this.spells.haste.duration,\n        reverts: true,\n        factor: this.spells.haste.factor,\n        targetProperty: 'maxSpeed'\n      }, {\n        name: 'haste',\n        duration: this.spells.haste.duration,\n        reverts: true,\n        factor: this.spells.haste.factor,\n        targetProperty: 'actionTimeFactor'\n      }\n    ];\n    _results = [];\n    for (_i = 0, _len = effects.length; _i < _len; _i++) {\n      effect = effects[_i];\n      _results.push(this.target.addEffect(effect, this));\n    }\n    return _results;\n  };\n\n  return CastsHaste;\n\n})(Component);\n",
	"creator": "57261bee23fccb2f009093c1",
	"original": "531a8d88253ea9e79b47444a",
	"__v": 0,
	"commitMessage": "Diplomat submission for lang bg: 1 change(s).",
	"parent": "56faa9ab1b576220000f2e8e",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"patches": [],
	"official": false,
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
			"factor": {
				"type": "number",
				"minimum": 1
			},
			"duration": {
				"type": "number",
				"minimum": 0,
				"format": "seconds"
			}
		},
		"additionalProperties": false,
		"type": "object",
		"default": {
			"range": 30,
			"cooldown": 0.5,
			"specificCooldown": 10,
			"factor": 2,
			"duration": 5
		}
	},
	"dependencies": [
		{
			"original": "52f13c37528baa731827408d",
			"majorVersion": 0
		}
	],
	"description": "This Component gives the Thang a haste spell.",
	"system": "magic",
	"searchStrings": "casts haste c ca cas cast casts castsh castsha castshas",
	"i18nCoverage": [
		"-",
		"de-DE",
		"fr",
		"nb",
		"ru",
		"es-ES",
		"zh-HANS",
		"sk",
		"es-419",
		"pt-BR",
		"sv",
		"uk",
		"pl",
		"it",
		"nl-NL",
		"el",
		"hu",
		"sr",
		"da",
		"bg"
	],
	"created": "2016-07-04T06:38:53.960Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 35,
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