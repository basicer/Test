{
	"_id": "577a010d30e8452400a03a01",
	"searchStrings": "casts earthskin c ca cas cast casts castse castsea castsear castseart castsearth castsearths castsearthsk",
	"index": true,
	"slug": "castsearthskin",
	"name": "CastsEarthskin",
	"js": "var CastsEarthskin,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCastsEarthskin = (function(_super) {\n  __extends(CastsEarthskin, _super);\n\n  CastsEarthskin.className = 'CastsEarthskin';\n\n  function CastsEarthskin(config) {\n    CastsEarthskin.__super__.constructor.call(this, config);\n    this._earthskinSpell = {\n      name: 'earthskin',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      range: this.range,\n      duration: this.duration,\n      factor: this.factor\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    delete this.range;\n    delete this.duration;\n    delete this.factor;\n  }\n\n  CastsEarthskin.prototype.attach = function(thang) {\n    CastsEarthskin.__super__.attach.call(this, thang);\n    return thang.addSpell(this._earthskinSpell);\n  };\n\n  CastsEarthskin.prototype.perform_earthskin = function() {\n    var e, effect, effects, _i, _len, _results;\n    this.target.effects = (function() {\n      var _i, _len, _ref, _results;\n      _ref = this.target.effects;\n      _results = [];\n      for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n        e = _ref[_i];\n        if (e.name !== 'earthskin') {\n          _results.push(e);\n        }\n      }\n      return _results;\n    }).call(this);\n    effects = [\n      {\n        name: 'earthskin',\n        duration: this.spells.earthskin.duration,\n        reverts: true,\n        factor: this.spells.earthskin.factor,\n        targetProperty: 'maxHealth'\n      }, {\n        name: 'earthskin',\n        duration: this.spells.earthskin.duration,\n        revertsProportionally: true,\n        factor: this.spells.earthskin.factor,\n        targetProperty: 'health'\n      }\n    ];\n    _results = [];\n    for (_i = 0, _len = effects.length; _i < _len; _i++) {\n      effect = effects[_i];\n      _results.push(this.target.addEffect(effect, this));\n    }\n    return _results;\n  };\n\n  return CastsEarthskin;\n\n})(Component);\n",
	"system": "magic",
	"creator": "57261bee23fccb2f009093c1",
	"original": "5463799d3839c6e02811d327",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 2,
	"commitMessage": "Diplomat submission for lang bg: 1 change(s).",
	"parent": "57437ee1f2770320c70fb49b",
	"description": "This Component gives the Thang a earthskin spell.",
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
				"minimum": 0
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
			"specificCooldown": 10,
			"factor": 1.5,
			"duration": 5
		}
	},
	"i18nCoverage": [
		"-",
		"de-DE",
		"fr",
		"es-ES",
		"es-419",
		"ru",
		"nb",
		"zh-HANS",
		"sk",
		"pt-BR",
		"nl-NL",
		"sv",
		"uk",
		"pl",
		"ja",
		"it",
		"el",
		"hu",
		"sr",
		"da",
		"bg"
	],
	"patches": [
		"577a01d47ca6da5800795833",
		"577a028535ea2e2400352807"
	],
	"created": "2016-07-04T06:24:13.592Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 31,
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