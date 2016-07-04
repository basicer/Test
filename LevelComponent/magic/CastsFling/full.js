{
	"_id": "577a030ffd900f7b00315a77",
	"searchStrings": "casts fling c ca cas cast casts castsf castsfl castsfli",
	"index": true,
	"slug": "castsfling",
	"name": "CastsFling",
	"js": "var CastsFling,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCastsFling = (function(_super) {\n  __extends(CastsFling, _super);\n\n  CastsFling.className = 'CastsFling';\n\n  function CastsFling(config) {\n    CastsFling.__super__.constructor.call(this, config);\n    this._flingSpell = {\n      name: 'fling',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      range: this.range,\n      mass: this.mass\n    };\n    delete this.mass;\n    delete this.cooldown;\n    delete this.specificCooldown;\n    delete this.range;\n  }\n\n  CastsFling.prototype.attach = function(thang) {\n    CastsFling.__super__.attach.call(this, thang);\n    return thang.addSpell(this._flingSpell);\n  };\n\n  CastsFling.prototype.perform_fling = function() {\n    var momentum;\n    momentum = this.target.pos.copy().subtract(this.pos, true).normalize();\n    momentum.z = 0.5;\n    momentum.multiply(this.spells.fling.mass, true);\n    this.target.velocity.add(momentum.divide(this.target.mass, true), true);\n    this.target.pos.z += 0.5;\n    if (this.hidden) {\n      return typeof this.unhide === \"function\" ? this.unhide() : void 0;\n    }\n  };\n\n  return CastsFling;\n\n})(Component);\n",
	"system": "magic",
	"creator": "57261bee23fccb2f009093c1",
	"original": "5462e02b3839c6e02811d1ad",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Diplomat submission for lang bg: 1 change(s).",
	"parent": "56faa6dfc88ef82400cac526",
	"description": "This Component gives the Thang a fling spell.",
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
			"mass": {
				"type": "number",
				"minimum": 0,
				"description": "How much mass the fling imparts to the target, in kilograms.",
				"format": "kilograms"
			}
		},
		"additionalProperties": false,
		"type": "object",
		"default": {
			"range": 30,
			"cooldown": 0.75,
			"specificCooldown": 7.5,
			"mass": 500
		}
	},
	"i18nCoverage": [
		"-",
		"de-DE",
		"fr",
		"ru",
		"es-ES",
		"nb",
		"zh-HANS",
		"sk",
		"pt-BR",
		"sv",
		"uk",
		"pl",
		"nl-NL",
		"it",
		"el",
		"hu",
		"es-419",
		"sr",
		"da",
		"bg"
	],
	"patches": [],
	"created": "2016-07-04T06:32:47.721Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 29,
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