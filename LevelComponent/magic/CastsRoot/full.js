{
	"_id": "579a01f8b468cc25007fea32",
	"searchStrings": "casts root c ca cas cast casts castsr castsro",
	"index": true,
	"slug": "castsroot",
	"name": "CastsRoot",
	"js": "var CastsRoot,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCastsRoot = (function(_super) {\n  __extends(CastsRoot, _super);\n\n  CastsRoot.className = 'CastsRoot';\n\n  function CastsRoot(config) {\n    CastsRoot.__super__.constructor.call(this, config);\n    this._rootSpell = {\n      name: 'root',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      range: this.range,\n      duration: this.duration,\n      factor: this.factor\n    };\n    delete this.duration;\n    delete this.factor;\n    delete this.cooldown;\n    delete this.specificCooldown;\n    delete this.range;\n  }\n\n  CastsRoot.prototype.attach = function(thang) {\n    CastsRoot.__super__.attach.call(this, thang);\n    return thang.addSpell(this._rootSpell);\n  };\n\n  CastsRoot.prototype.perform_root = function() {\n    var e, effect, effects, _i, _len, _ref, _results;\n    this.target.effects = (function() {\n      var _i, _len, _ref, _results;\n      _ref = this.target.effects;\n      _results = [];\n      for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n        e = _ref[_i];\n        if (e.name !== 'root') {\n          _results.push(e);\n        }\n      }\n      return _results;\n    }).call(this);\n    if ((_ref = this.target.velocity) != null) {\n      _ref.multiply(this.spells.root.factor);\n    }\n    effects = [\n      {\n        name: 'root',\n        duration: this.spells.root.duration,\n        reverts: true,\n        factor: this.spells.root.factor,\n        targetProperty: 'maxSpeed'\n      }\n    ];\n    _results = [];\n    for (_i = 0, _len = effects.length; _i < _len; _i++) {\n      effect = effects[_i];\n      _results.push(this.target.addEffect(effect, this));\n    }\n    return _results;\n  };\n\n  return CastsRoot;\n\n})(Component);\n",
	"system": "magic",
	"creator": "5790b3eea6956624001431f9",
	"original": "5462e01a3839c6e02811d1ab",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Diplomat submission for lang hu: 1 change(s).",
	"parent": "577a074630e8452400a040c6",
	"description": "This Component gives the Thang a root spell.",
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
			"factor": {
				"type": "number",
				"minimum": 0.05
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
			"cooldown": 0.75,
			"specificCooldown": 7.5,
			"factor": 0,
			"duration": 5
		}
	},
	"i18nCoverage": [
		"-",
		"de-DE",
		"fr",
		"ru",
		"zh-HANS",
		"sk",
		"pt-BR",
		"es-ES",
		"sv",
		"uk",
		"pl",
		"da",
		"it",
		"el",
		"nl-NL",
		"es-419",
		"sr",
		"bg",
		"hu"
	],
	"patches": [],
	"created": "2016-07-28T13:00:40.126Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 28,
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