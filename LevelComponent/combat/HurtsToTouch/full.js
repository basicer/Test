{
	"_id": "55c11917c87e47c60604f96d",
	"searchStrings": "hurts to touch h hu hur hurt hurts hurtst hurtsto hurtstot hurtstoto hurtstotou",
	"index": true,
	"slug": "hurtstotouch",
	"name": "HurtsToTouch",
	"js": "var HurtsToTouch, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nHurtsToTouch = (function(_super) {\n  __extends(HurtsToTouch, _super);\n\n  function HurtsToTouch() {\n    _ref = HurtsToTouch.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  HurtsToTouch.className = 'HurtsToTouch';\n\n  HurtsToTouch.prototype.wasTriggeredBy = function(target) {\n    var attacker, damage, _ref1;\n    if (this.touchIgnoresStationary && ((_ref1 = target.velocity) != null ? _ref1.magnitude() : void 0) < 0.01) {\n      return;\n    }\n    attacker = this.builtBy || this;\n    damage = this.touchDamagePerSecond * this.world.dt;\n    return typeof target.takeDamage === \"function\" ? target.takeDamage(damage, attacker) : void 0;\n  };\n\n  return HurtsToTouch;\n\n})(Component);\n",
	"system": "combat",
	"creator": "512ef4805a67a8c507000001",
	"original": "55c10fc6c87e47c60604f94b",
	"watchers": [
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"description": "This Component makes the Thang hurt any other Thangs that touch it.",
	"dependencies": [
		{
			"original": "54de359ce7b94b530575350a",
			"majorVersion": 0
		}
	],
	"configSchema": {
		"properties": {
			"touchDamagePerSecond": {
				"type": "number",
				"description": "How much damage per second this Thang does to Thangs that touch it."
			},
			"touchIgnoresStationary": {
				"type": "boolean",
				"description": "Whether it only hurts to move near this Thang, as opposed to also hurting to stand still near it."
			}
		},
		"default": {
			"touchDamagePerSecond": 50,
			"touchIgnoresStationary": false
		}
	},
	"commitMessage": "Implemented touchIgnoresStationary.",
	"parent": "55c112c6c87e47c60604f951",
	"created": "2015-08-04T19:57:11.796Z",
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