{
	"_id": "577a01b9fd900f7b003159e3",
	"searchStrings": "casts fear c ca cas cast casts castsf castsfe",
	"index": true,
	"slug": "castsfear",
	"name": "CastsFear",
	"js": "var CastsFear,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCastsFear = (function(_super) {\n  __extends(CastsFear, _super);\n\n  CastsFear.className = 'CastsFear';\n\n  function CastsFear(config) {\n    CastsFear.__super__.constructor.call(this, config);\n    this._fearSpell = {\n      name: 'fear',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      range: this.range,\n      duration: this.duration\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    delete this.range;\n    delete this.duration;\n  }\n\n  CastsFear.prototype.attach = function(thang) {\n    CastsFear.__super__.attach.call(this, thang);\n    return thang.addSpell(this._fearSpell);\n  };\n\n  CastsFear.prototype.perform_fear = function() {\n    var duration, e, effect, effects, onRevert, target, _i, _len;\n    this.target.effects = (function() {\n      var _i, _len, _ref, _results;\n      _ref = this.target.effects;\n      _results = [];\n      for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n        e = _ref[_i];\n        if (e.name !== 'fear') {\n          _results.push(e);\n        }\n      }\n      return _results;\n    }).call(this);\n    target = this.target;\n    onRevert = function() {\n      target.setTarget(null);\n      target.setAction('idle');\n      target.movedOncePos = null;\n      target.castOnceTarget = null;\n      return typeof target.clearAttack === \"function\" ? target.clearAttack() : void 0;\n    };\n    duration = this.spells.fear.duration;\n    if (/Hero Placeholder/.test(this.target.id)) {\n      duration /= 2;\n    }\n    effects = [\n      {\n        name: 'fear',\n        duration: duration,\n        reverts: true,\n        setTo: this.fearedChooseAction,\n        targetProperty: 'chooseAction',\n        onRevert: onRevert\n      }, {\n        name: 'fear',\n        duration: duration,\n        reverts: true,\n        setTo: null,\n        targetProperty: 'targetPos'\n      }\n    ];\n    for (_i = 0, _len = effects.length; _i < _len; _i++) {\n      effect = effects[_i];\n      this.target.addEffect(effect, this);\n    }\n    if (this.hidden) {\n      return typeof this.unhide === \"function\" ? this.unhide() : void 0;\n    }\n  };\n\n  CastsFear.prototype.fearedChooseAction = function() {\n    var _ref;\n    if (typeof this.sayWithoutBlocking === \"function\") {\n      this.sayWithoutBlocking('Eeek!');\n    }\n    if (this.move && ((_ref = this.actions) != null ? _ref.move : void 0)) {\n      if (this.fearedDirection == null) {\n        this.fearedDirection = new Vector(1000, 0).rotate(this.world.rand.randf() * Math.PI * 2);\n      }\n      return this.move(this.fearedDirection);\n    }\n  };\n\n  return CastsFear;\n\n})(Component);\n",
	"system": "magic",
	"creator": "57261bee23fccb2f009093c1",
	"original": "5462e0a03839c6e02811d1b8",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 1,
	"commitMessage": "Diplomat submission for lang bg: 1 change(s).",
	"parent": "573fa0ad3e910f115e5e4645",
	"description": "This Component gives the Thang a fear spell.",
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
			"duration": {
				"type": "number",
				"minimum": 0,
				"format": "seconds"
			}
		},
		"additionalProperties": false,
		"type": "object",
		"default": {
			"range": 25,
			"cooldown": 0.75,
			"specificCooldown": 10,
			"duration": 5
		}
	},
	"i18nCoverage": [
		"-",
		"de-DE",
		"fr",
		"lt",
		"ru",
		"es-419",
		"zh-HANS",
		"nb",
		"pt-BR",
		"sk",
		"pl",
		"nl-NL",
		"sv",
		"uk",
		"it",
		"hu",
		"el",
		"da",
		"ro",
		"id",
		"sr",
		"bg"
	],
	"patches": [
		"577a029ea889601f000042f0"
	],
	"created": "2016-07-04T06:27:05.789Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 42,
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