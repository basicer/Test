{
	"_id": "577a0c96a889601f00005038",
	"searchStrings": "casts windstorm c ca cas cast casts castsw castswi castswin castswind castswinds castswindst castswindsto",
	"index": true,
	"slug": "castswindstorm",
	"name": "CastsWindstorm",
	"js": "var CastsWindstorm,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCastsWindstorm = (function(_super) {\n  __extends(CastsWindstorm, _super);\n\n  CastsWindstorm.className = 'CastsWindstorm';\n\n  function CastsWindstorm(config) {\n    CastsWindstorm.__super__.constructor.call(this, config);\n    this._windstormSpell = {\n      name: 'windstorm',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      range: this.range,\n      radius: this.radius,\n      mass: this.mass\n    };\n    delete this.mass;\n    delete this.radius;\n    delete this.cooldown;\n    delete this.specificCooldown;\n    delete this.range;\n  }\n\n  CastsWindstorm.prototype.attach = function(thang) {\n    CastsWindstorm.__super__.attach.call(this, thang);\n    return thang.addSpell(this._windstormSpell);\n  };\n\n  CastsWindstorm.prototype.perform_windstorm = function() {\n    var args, d, momentum, mover, ratio, targetPos, _i, _len, _ref;\n    targetPos = this.getTargetPos();\n    _ref = this.world.getSystem('Movement').movers;\n    for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n      mover = _ref[_i];\n      if (!((d = targetPos.distance(mover.pos)) < this.spells.windstorm.radius && mover !== this)) {\n        continue;\n      }\n      ratio = 1 - d / this.spells.windstorm.radius;\n      momentum = mover.pos.copy().subtract(targetPos, true).multiply(ratio * this.spells.windstorm.mass, true);\n      mover.velocity.add(momentum.divide(mover.mass, true), true);\n      mover.rotation = (mover.velocity.heading() + Math.PI) % (2 * Math.PI);\n    }\n    args = [parseFloat(targetPos.x.toFixed(2)), parseFloat(targetPos.y.toFixed(2)), parseFloat(this.spells.windstorm.radius.toFixed(2)), 'rgba(163, 189, 215, 0.1)'];\n    return typeof this.addCurrentEvent === \"function\" ? this.addCurrentEvent(\"aoe-\" + (JSON.stringify(args))) : void 0;\n  };\n\n  CastsWindstorm.prototype.getTarget_windstorm = function() {\n    var missile, missileToSelf, missiles, _ref;\n    if (!(this.world.frames.length % 2)) {\n      return null;\n    }\n    if (!(missiles = typeof this.getEnemyMissiles === \"function\" ? this.getEnemyMissiles() : void 0)) {\n      return null;\n    }\n    if (!(missile = this.getNearest(missiles))) {\n      return null;\n    }\n    if (!(this.distance(missile) < this.spells.windstorm.range)) {\n      return null;\n    }\n    missileToSelf = this.pos.copy().subtract(missile.pos);\n    if (!(((_ref = missile.velocity) != null ? _ref.copy().rotate(-missileToSelf.heading()).x : void 0) > 0)) {\n      return null;\n    }\n    return this;\n  };\n\n  return CastsWindstorm;\n\n})(Component);\n",
	"system": "magic",
	"creator": "57261bee23fccb2f009093c1",
	"original": "5462e0473839c6e02811d1af",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Diplomat submission for lang bg: 1 change(s).",
	"parent": "5706999c2d457f2f00ca9986",
	"description": "This Component gives the Thang a windstorm spell.",
	"codeLanguage": "coffeescript",
	"dependencies": [
		{
			"original": "52f13c37528baa731827408d",
			"majorVersion": 0
		},
		{
			"original": "524b3e3fff92f1f4f800000d",
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
			"mass": {
				"type": "number",
				"description": "How much mass the windstorm imparts to Thangs at the center of the radius, in kilograms.",
				"minimum": 0,
				"format": "kilograms"
			},
			"radius": {
				"type": "number",
				"description": "How far away the windstorm can affect Thangs, in meters.",
				"format": "meters"
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
			"cooldown": 0.1,
			"specificCooldown": 0,
			"radius": 30,
			"mass": 40
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
		"es-419",
		"it",
		"el",
		"nl-NL",
		"sr",
		"sv",
		"bg"
	],
	"patches": [],
	"created": "2016-07-04T07:13:26.916Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 24,
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