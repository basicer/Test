{
	"_id": "56b9057a2fe4ef3f0098f471",
	"slug": "castsinvisibility",
	"searchStrings": "casts invisibility c ca cas cast casts castsi castsin castsinv castsinvi castsinvis castsinvisi castsinvisib castsinvisibi castsinvisibil castsinvisibili",
	"name": "CastsInvisibility",
	"js": "var CastsInvisibility,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCastsInvisibility = (function(_super) {\n  __extends(CastsInvisibility, _super);\n\n  CastsInvisibility.className = 'CastsInvisibility';\n\n  function CastsInvisibility(config) {\n    CastsInvisibility.__super__.constructor.call(this, config);\n    this._invisibilitySpell = {\n      name: 'invisibility',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      range: this.range,\n      duration: this.duration\n    };\n    delete this.duration;\n    delete this.cooldown;\n    delete this.specificCooldown;\n    delete this.range;\n  }\n\n  CastsInvisibility.prototype.attach = function(thang) {\n    CastsInvisibility.__super__.attach.call(this, thang);\n    return thang.addSpell(this._invisibilitySpell);\n  };\n\n  CastsInvisibility.prototype.perform_invisibility = function() {\n    var e, effect, effects, targeter, _base, _base1, _i, _j, _len, _len1, _ref, _results;\n    if (typeof (_base = this.target).unhide === \"function\") {\n      _base.unhide();\n    }\n    this.target.effects = (function() {\n      var _i, _len, _ref, _results;\n      _ref = this.target.effects;\n      _results = [];\n      for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n        e = _ref[_i];\n        if (e.name !== 'hide') {\n          _results.push(e);\n        }\n      }\n      return _results;\n    }).call(this);\n    this.target.unhiddenPerformAttack = this.target.performAttack;\n    if ((_base1 = this.target).unhide == null) {\n      _base1.unhide = this.unhide;\n    }\n    effects = [\n      {\n        name: 'hide',\n        duration: this.spells.invisibility.duration,\n        reverts: true,\n        setTo: true,\n        targetProperty: 'hidden'\n      }, {\n        name: 'hide',\n        duration: this.spells.invisibility.duration,\n        reverts: true,\n        factor: 0.5,\n        targetProperty: 'alpha'\n      }, {\n        name: 'hide',\n        duration: this.spells.invisibility.duration,\n        reverts: true,\n        setTo: this.hiddenPerformAttack,\n        targetProperty: 'performAttack'\n      }, {\n        name: 'hide',\n        duration: this.spells.invisibility.duration,\n        reverts: false,\n        setTo: this.target.unhiddenPerformAttack,\n        targetProperty: 'unhiddenPerformAttack'\n      }\n    ];\n    for (_i = 0, _len = effects.length; _i < _len; _i++) {\n      effect = effects[_i];\n      this.target.addEffect(effect, this);\n    }\n    _ref = this.world.thangs;\n    _results = [];\n    for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {\n      targeter = _ref[_j];\n      if (targeter.target === this.target && targeter.exists && targeter !== this) {\n        _results.push(targeter.setTarget(null));\n      }\n    }\n    return _results;\n  };\n\n  CastsInvisibility.prototype.hiddenPerformAttack = function() {\n    if (this.hidden) {\n      if (typeof this.unhide === \"function\") {\n        this.unhide();\n      }\n    }\n    return this.unhiddenPerformAttack.apply(this, arguments);\n  };\n\n  CastsInvisibility.prototype.unhide = function() {\n    var effect, _i, _len, _ref;\n    _ref = this.effects;\n    for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n      effect = _ref[_i];\n      if (effect.name === 'hide') {\n        effect.timeSinceStart = 9001;\n      }\n    }\n    return this.updateEffects('hide');\n  };\n\n  return CastsInvisibility;\n\n})(Component);\n",
	"system": "magic",
	"creator": "537d01f484c54c6e05c05989",
	"original": "5462e1003839c6e02811d1bf",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Implements fix for setting self target to null and comparing future targets to null",
	"parent": "55adb4fc883266b463cbad00",
	"description": "This Component gives the Thang a invisibility spell.",
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
			"duration": {
				"type": "number",
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
			"range": 10,
			"cooldown": 0.5,
			"specificCooldown": 12,
			"duration": 4
		}
	},
	"patches": [
		"54ad3946628088410559b823",
		"54ad3a8b628088410559be3d",
		"54ad3b220b109c3c053c7e25",
		"54ad3b702dc83d060756b7d6",
		"54ad3ca1694b223e05641f1d"
	],
	"index": true,
	"created": "2016-02-08T21:15:38.249Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 12,
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