{
	"_id": "558452214bed1b6c2a2caab5",
	"searchStrings": "casts disintegrate c ca cas cast casts castsd castsdi castsdis castsdisi castsdisin castsdisint castsdisinte castsdisinteg castsdisintegr castsdisintegra",
	"index": true,
	"slug": "castsdisintegrate",
	"name": "CastsDisintegrate",
	"js": "var CastsDisintegrate,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCastsDisintegrate = (function(_super) {\n  __extends(CastsDisintegrate, _super);\n\n  CastsDisintegrate.className = 'CastsDisintegrate';\n\n  function CastsDisintegrate(config) {\n    CastsDisintegrate.__super__.constructor.call(this, config);\n    this._disintegrateSpell = {\n      name: 'disintegrate',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      range: this.range,\n      damage: this.damage\n    };\n    delete this.damage;\n    delete this.cooldown;\n    delete this.specificCooldown;\n    delete this.range;\n  }\n\n  CastsDisintegrate.prototype.attach = function(thang) {\n    CastsDisintegrate.__super__.attach.call(this, thang);\n    return thang.addSpell(this._disintegrateSpell);\n  };\n\n  CastsDisintegrate.prototype.perform_disintegrate = function() {\n    var damagePerFrame, e, effect, effects, _i, _len;\n    this.target.effects = (function() {\n      var _i, _len, _ref, _results;\n      _ref = this.target.effects;\n      _results = [];\n      for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n        e = _ref[_i];\n        if (e.name !== 'disintegrate') {\n          _results.push(e);\n        }\n      }\n      return _results;\n    }).call(this);\n    damagePerFrame = this.spells.disintegrate.damage * this.world.dt;\n    effects = [\n      {\n        name: 'disintegrate',\n        duration: 1,\n        addend: -damagePerFrame,\n        targetProperty: 'health',\n        repeatsEvery: this.world.dt\n      }\n    ];\n    for (_i = 0, _len = effects.length; _i < _len; _i++) {\n      effect = effects[_i];\n      this.target.addEffect(effect, this);\n    }\n    if (this.hidden) {\n      return typeof this.unhide === \"function\" ? this.unhide() : void 0;\n    }\n  };\n\n  return CastsDisintegrate;\n\n})(Component);\n",
	"system": "magic",
	"creator": "512ef4805a67a8c507000001",
	"original": "5462e06e3839c6e02811d1b3",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Cancels hide and invisibility.",
	"parent": "553ac4f3c4411b7c18d9daad",
	"description": "This Component gives the Thang a disintegrate spell.",
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
			"damage": {
				"type": "number",
				"minimum": 0
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
			"range": 15,
			"cooldown": 1,
			"specificCooldown": 6,
			"damage": 200
		}
	},
	"patches": [],
	"created": "2015-06-19T17:32:17.528Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 8,
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