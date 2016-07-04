{
	"_id": "577a08bce96b2e6a005607fa",
	"searchStrings": "casts shockwave c ca cas cast casts castss castssh castssho castsshoc castsshock castsshockw castsshockwa",
	"index": true,
	"slug": "castsshockwave",
	"name": "CastsShockwave",
	"js": "var CastsShockwave,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCastsShockwave = (function(_super) {\n  __extends(CastsShockwave, _super);\n\n  CastsShockwave.className = 'CastsShockwave';\n\n  function CastsShockwave(config) {\n    CastsShockwave.__super__.constructor.call(this, config);\n    this._shockwaveSpell = {\n      name: 'shockwave',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      range: this.range,\n      damage: this.damage,\n      mass: this.mass,\n      radius: this.radius\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    delete this.range;\n    delete this.damage;\n    delete this.mass;\n    delete this.radius;\n  }\n\n  CastsShockwave.prototype.attach = function(thang) {\n    CastsShockwave.__super__.attach.call(this, thang);\n    return thang.addSpell(this._shockwaveSpell);\n  };\n\n  CastsShockwave.prototype.perform_shockwave = function() {\n    var args, d, momentum, mover, ratio, targetPos, _i, _len, _ref;\n    if (this.hidden) {\n      if (typeof this.unhide === \"function\") {\n        this.unhide();\n      }\n    }\n    targetPos = this.getTargetPos();\n    _ref = this.world.getSystem('Movement').movers;\n    for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n      mover = _ref[_i];\n      if (!((d = targetPos.distance(mover.pos)) < this.spells.shockwave.radius && mover.team !== this.team)) {\n        continue;\n      }\n      ratio = 1 - d / this.spells.shockwave.radius;\n      momentum = mover.pos.copy().subtract(targetPos, true).multiply(ratio * this.spells.shockwave.mass, true);\n      momentum.z = (momentum.magnitude() / 2) || this.spells.shockwave.mass;\n      mover.velocity.add(momentum.divide(mover.mass, true), true);\n      mover.rotation = (mover.velocity.heading() + Math.PI) % (2 * Math.PI);\n      mover.pos.z += 0.5;\n      if (this.spells.shockwave.damage) {\n        if (typeof mover.takeDamage === \"function\") {\n          mover.takeDamage(this.spells.shockwave.damage * ratio, this);\n        }\n      }\n    }\n    args = [parseFloat(targetPos.x.toFixed(2)), parseFloat(targetPos.y.toFixed(2)), parseFloat(this.spells.shockwave.radius.toFixed(2)), 'rgba(163, 215, 189, 0.1)'];\n    return typeof this.addCurrentEvent === \"function\" ? this.addCurrentEvent(\"aoe-\" + (JSON.stringify(args))) : void 0;\n  };\n\n  return CastsShockwave;\n\n})(Component);\n",
	"system": "magic",
	"creator": "57261bee23fccb2f009093c1",
	"original": "5462e0aa3839c6e02811d1b9",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Diplomat submission for lang bg: 1 change(s).",
	"parent": "56f59bb8db0216900f088cdd",
	"description": "This Component gives the Thang a shockwave spell.",
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
			"radius": {
				"description": "How far away the shockwave can affect Thangs, in meters.",
				"type": "number",
				"format": "meters"
			},
			"mass": {
				"description": "How much mass the shockwave imparts to Thangs at the center of the radius, in kilograms.",
				"type": "number",
				"format": "\"kilograms\"",
				"minimum": 0
			},
			"damage": {
				"type": "number",
				"description": "How much damage the shockwave does to targets at the center of its blast.",
				"minimum": 0
			}
		},
		"additionalProperties": false,
		"type": "object",
		"default": {
			"range": 20,
			"cooldown": 0.75,
			"specificCooldown": 15,
			"damage": 50,
			"mass": 350,
			"radius": 20
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
		"uk",
		"es-419",
		"pl",
		"sv",
		"it",
		"el",
		"nl-NL",
		"sr",
		"bg"
	],
	"patches": [],
	"created": "2016-07-04T06:57:00.783Z",
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