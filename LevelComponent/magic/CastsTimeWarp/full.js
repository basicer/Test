{
	"_id": "577a0c1dfd900f7b00316034",
	"index": true,
	"slug": "caststimewarp",
	"name": "CastsTimeWarp",
	"codeLanguage": "coffeescript",
	"js": "var CastsTimeWarp,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCastsTimeWarp = (function(_super) {\n  __extends(CastsTimeWarp, _super);\n\n  CastsTimeWarp.className = 'CastsTimeWarp';\n\n  function CastsTimeWarp(config) {\n    CastsTimeWarp.__super__.constructor.call(this, config);\n    this._timeWarpSpell = {\n      name: 'time-warp',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      radius: this.radius,\n      factor: this.factor,\n      duration: this.duration\n    };\n    delete this.factor;\n    delete this.duration;\n    delete this.cooldown;\n    delete this.specificCooldown;\n  }\n\n  CastsTimeWarp.prototype.attach = function(thang) {\n    CastsTimeWarp.__super__.attach.call(this, thang);\n    return thang.addSpell(this._timeWarpSpell);\n  };\n\n  CastsTimeWarp.prototype.castTimeWarp = function() {\n    return this.cast('time-warp', this, 'castTimeWarp');\n  };\n\n  CastsTimeWarp.prototype['perform_time-warp'] = function() {\n    var args, effect, effects, factor, name, target, _i, _j, _len, _len1, _ref;\n    _ref = this.world.getSystem('Existence').extant;\n    for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n      target = _ref[_i];\n      if (target.pos && this.distance(target) < this.spells['time-warp'].radius) {\n        if (target.hasEffects) {\n          factor = this.spells['time-warp'].factor;\n          name = factor > 1 ? 'haste' : 'slow';\n          if (target === this) {\n            factor = Math.sqrt(factor);\n          }\n          effects = [\n            {\n              name: name,\n              duration: this.spells['time-warp'].duration,\n              reverts: true,\n              factor: this.spells['time-warp'].factor,\n              targetProperty: 'maxSpeed'\n            }, {\n              name: name,\n              duration: this.spells['time-warp'].duration,\n              reverts: true,\n              factor: this.spells['time-warp'].factor,\n              targetProperty: 'actionTimeFactor'\n            }\n          ];\n          for (_j = 0, _len1 = effects.length; _j < _len1; _j++) {\n            effect = effects[_j];\n            target.addEffect(effect, this);\n          }\n        } else if (target.velocity) {\n          target.velocity.multiply(this.spells['time-warp'].factor, true);\n        }\n      }\n    }\n    args = [parseFloat(this.pos.x.toFixed(2)), parseFloat(this.pos.y.toFixed(2)), parseFloat(this.spells['time-warp'].radius.toFixed(2)), '#55D3BA'];\n    return this.addCurrentEvent(\"aoe-\" + (JSON.stringify(args)));\n  };\n\n  return CastsTimeWarp;\n\n})(Component);\n",
	"creator": "57261bee23fccb2f009093c1",
	"original": "53cae79f03039b0439ee74f8",
	"watchers": [
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"commitMessage": "Diplomat submission for lang bg: 1 change(s).",
	"parent": "570699182d457f2f00ca9940",
	"official": false,
	"configSchema": {
		"properties": {
			"cooldown": {
				"type": "number",
				"minimum": 0,
				"format": "seconds",
				"default": 0.5
			},
			"duration": {
				"type": "number",
				"minimum": 0,
				"default": 5,
				"description": "How long the time warp lasts.",
				"format": "seconds"
			},
			"factor": {
				"type": "number",
				"description": "The multiple of normal speed at which time passes for Thangs caught inside the time warp.",
				"additionalProperties": false,
				"default": "0.25",
				"minimum": 0
			},
			"radius": {
				"type": "number",
				"description": "How far the time warp reaches around the caster, in meters.",
				"default": 20,
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
			"cooldown": 0.5,
			"specificCooldown": 7.5,
			"factor": 0.25,
			"radius": 20,
			"duration": 4
		}
	},
	"dependencies": [
		{
			"original": "52f13c37528baa731827408d",
			"majorVersion": 0
		},
		{
			"original": "52e95818a3ca8546b7000001",
			"majorVersion": 0
		},
		{
			"original": "524b3e3fff92f1f4f800000d",
			"majorVersion": 0
		}
	],
	"description": "This Component gives the Thang a time warp spell.",
	"system": "magic",
	"searchStrings": "casts time warp c ca cas cast casts castst caststi caststim caststime caststimew caststimewa",
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
	"created": "2016-07-04T07:11:25.777Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 25,
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