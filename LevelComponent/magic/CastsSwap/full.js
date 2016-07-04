{
	"_id": "577a0b807ca6da5800795dbd",
	"searchStrings": "casts swap c ca cas cast casts castss castssw",
	"index": true,
	"slug": "castsswap",
	"name": "CastsSwap",
	"js": "var CastsSwap,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCastsSwap = (function(_super) {\n  __extends(CastsSwap, _super);\n\n  CastsSwap.className = 'CastsSwap';\n\n  function CastsSwap(config) {\n    CastsSwap.__super__.constructor.call(this, config);\n    this._swapSpell = {\n      name: 'swap',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      range: this.range\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    delete this.range;\n  }\n\n  CastsSwap.prototype.attach = function(thang) {\n    CastsSwap.__super__.attach.call(this, thang);\n    return thang.addSpell(this._swapSpell);\n  };\n\n  CastsSwap.prototype.castSwap = function(target) {\n    return this.cast('swap', target, 'castSwap');\n  };\n\n  CastsSwap.prototype.perform_swap = function() {\n    var spot;\n    spot = this.target.pos;\n    this.target.pos = this.pos;\n    this.pos = spot;\n    this.target.pos.z = Math.max(0, this.target.depth / 2);\n    this.pos.z = Math.max(0, this.depth / 2);\n    this.hasMoved = true;\n    return this.target.hasMoved = true;\n  };\n\n  return CastsSwap;\n\n})(Component);\n",
	"system": "magic",
	"creator": "57261bee23fccb2f009093c1",
	"original": "5462e0b13839c6e02811d1ba",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Diplomat submission for lang bg: 1 change(s).",
	"parent": "57069863fd43a220001fb64e",
	"description": "This Component gives the Thang a swap spell.",
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
			}
		},
		"additionalProperties": false,
		"type": "object",
		"default": {
			"range": 30,
			"cooldown": 0.25,
			"specificCooldown": 5
		}
	},
	"i18nCoverage": [
		"-",
		"de-DE",
		"fr",
		"ru",
		"zh-HANS",
		"sk",
		"uk",
		"pt-BR",
		"pl",
		"es-419",
		"it",
		"el",
		"nl-NL",
		"sr",
		"sv",
		"bg"
	],
	"patches": [],
	"created": "2016-07-04T07:08:48.435Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 22,
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