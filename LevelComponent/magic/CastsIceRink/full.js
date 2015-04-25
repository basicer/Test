{
	"_id": "553ae5d4c4411b7c18d9daed",
	"searchStrings": "casts ice rink c ca cas cast casts castsi castsic castsice castsicer castsiceri",
	"index": true,
	"slug": "castsicerink",
	"name": "CastsIceRink",
	"js": "var CastsIceRink,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCastsIceRink = (function(_super) {\n  __extends(CastsIceRink, _super);\n\n  CastsIceRink.className = 'CastsIceRink';\n\n  function CastsIceRink(config) {\n    CastsIceRink.__super__.constructor.call(this, config);\n    this._iceRinkSpell = {\n      name: 'ice-rink',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      range: this.range,\n      radius: this.radius,\n      duration: this.duration\n    };\n    delete this.radius;\n    delete this.duration;\n    delete this.cooldown;\n    delete this.specificCooldown;\n    delete this.range;\n  }\n\n  CastsIceRink.prototype.attach = function(thang) {\n    CastsIceRink.__super__.attach.call(this, thang);\n    return thang.addSpell(this._iceRinkSpell);\n  };\n\n  CastsIceRink.prototype['perform_ice-rink'] = function() {\n    var targetPos;\n    targetPos = this.getTargetPos().copy();\n    return this.world.getSystem(\"Movement\").addFrictionField({\n      pos: targetPos,\n      radius: this.spells['ice-rink'].radius,\n      duration: this.spells['ice-rink'].duration,\n      friction: 0,\n      source: this\n    });\n  };\n\n  return CastsIceRink;\n\n})(Component);\n",
	"system": "magic",
	"creator": "512ef4805a67a8c507000001",
	"original": "553adc39c4411b7c18d9dac1",
	"watchers": [
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"description": "This Component gives the Thang an ice-rink spell.",
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
				"description": "Number of seconds the ice-rink lasts",
				"additionalProperties": true
			},
			"radius": {
				"type": "number",
				"description": "Radius of the region effected by the ice-rink.",
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
			"range": 50,
			"cooldown": 0.5,
			"specificCooldown": 10,
			"radius": 30,
			"duration": 5
		}
	},
	"commitMessage": "Not quite as big/far.",
	"parent": "553ade32c4411b7c18d9dac3",
	"created": "2015-04-25T00:54:44.964Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 2,
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