{
	"_id": "553ade32c4411b7c18d9dac2",
	"searchStrings": "casts antigravity c ca cas cast casts castsa castsan castsant castsanti castsantig castsantigr castsantigra castsantigrav castsantigravi",
	"index": true,
	"slug": "castsantigravity",
	"name": "CastsAntigravity",
	"js": "var CastsAntigravity,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCastsAntigravity = (function(_super) {\n  __extends(CastsAntigravity, _super);\n\n  CastsAntigravity.className = 'CastsAntigravity';\n\n  function CastsAntigravity(config) {\n    CastsAntigravity.__super__.constructor.call(this, config);\n    this._antigravitySpell = {\n      name: 'antigravity',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      range: this.range,\n      radius: this.radius,\n      duration: this.duration\n    };\n    delete this.radius;\n    delete this.duration;\n    delete this.cooldown;\n    delete this.specificCooldown;\n    delete this.range;\n  }\n\n  CastsAntigravity.prototype.attach = function(thang) {\n    CastsAntigravity.__super__.attach.call(this, thang);\n    return thang.addSpell(this._antigravitySpell);\n  };\n\n  CastsAntigravity.prototype.perform_antigravity = function() {\n    var targetPos;\n    targetPos = this.getTargetPos().copy();\n    return this.world.getSystem(\"Movement\").addGravityField({\n      pos: targetPos,\n      radius: this.spells.antigravity.radius,\n      duration: this.spells.antigravity.duration,\n      gravity: -9.81,\n      attenuates: true,\n      source: this\n    });\n  };\n\n  return CastsAntigravity;\n\n})(Component);\n",
	"system": "magic",
	"creator": "512ef4805a67a8c507000001",
	"original": "5462e0653839c6e02811d1b2",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Fixed up description, snippets.",
	"parent": "5539656664a1488df00d94be",
	"description": "This Component gives the Thang a antigravity spell.",
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
				"format": "seconds",
				"description": "Number of seconds the antigravity lasts",
				"additionalProperties": true
			},
			"radius": {
				"type": "number",
				"description": "Radius of the region effected by the antigravity.",
				"minimum": 0,
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
			"range": 40,
			"cooldown": 0.5,
			"specificCooldown": 10,
			"radius": 20,
			"duration": 2.5
		}
	},
	"patches": [],
	"created": "2015-04-25T00:22:10.071Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 7,
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