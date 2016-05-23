{
	"_id": "57438a8c746e452100f08f0e",
	"searchStrings": "stonewall warcry s st sto ston stone stonew stonewa stonewal stonewall stonewallw stonewallwa stonewallwar stonewallwarc",
	"index": true,
	"slug": "stonewallwarcry",
	"name": "StonewallWarcry",
	"js": "var StonewallWarcry,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nStonewallWarcry = (function(_super) {\n  __extends(StonewallWarcry, _super);\n\n  StonewallWarcry.className = 'StonewallWarcry';\n\n  function StonewallWarcry(config) {\n    StonewallWarcry.__super__.constructor.call(this, config);\n    this.warcryRangeSquared = this.warcryRange * this.warcryRange;\n  }\n\n  StonewallWarcry.prototype.attach = function(thang) {\n    var warcryAction;\n    warcryAction = {\n      name: 'warcry',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    StonewallWarcry.__super__.attach.call(this, thang);\n    return thang.addActions(warcryAction);\n  };\n\n  StonewallWarcry.prototype.warcry = function() {\n    this.setAction('warcry');\n    return typeof this.block === \"function\" ? this.block() : void 0;\n  };\n\n  StonewallWarcry.prototype.update = function() {\n    var args, baseMass, e, effect, effects, friend, _i, _j, _len, _len1, _ref;\n    if (!(this.action === 'warcry' && this.act())) {\n      return;\n    }\n    if (typeof this.unblock === \"function\") {\n      this.unblock();\n    }\n    if (this.hidden) {\n      if (typeof this.unhide === \"function\") {\n        this.unhide();\n      }\n    }\n    if (typeof this.addCurrentEvent === \"function\") {\n      this.addCurrentEvent('warcry');\n    }\n    if (typeof this.sayWithoutBlocking === \"function\") {\n      this.sayWithoutBlocking(\"Push them back!\");\n    }\n    _ref = [this].concat(this.getFriends());\n    for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n      friend = _ref[_i];\n      if (!(friend.hasEffects && this.distanceSquared(friend) <= this.warcryRangeSquared)) {\n        continue;\n      }\n      friend.effects = (function() {\n        var _j, _len1, _ref1, _results;\n        _ref1 = friend.effects;\n        _results = [];\n        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {\n          e = _ref1[_j];\n          if (e.name !== 'warcry') {\n            _results.push(e);\n          }\n        }\n        return _results;\n      })();\n      baseMass = Math.max(this.warcryMinimumMass, friend.attackMass);\n      effects = [\n        {\n          name: 'warcry',\n          duration: this.warcryDuration,\n          reverts: true,\n          setTo: 0.05,\n          targetProperty: 'attackZAngle'\n        }, {\n          name: 'warcry',\n          duration: this.warcryDuration,\n          reverts: true,\n          setTo: baseMass,\n          targetProperty: 'attackMass'\n        }, {\n          name: 'warcry',\n          duration: this.warcryDuration,\n          reverts: true,\n          factor: this.warcryMassFactor,\n          targetProperty: 'attackMass'\n        }\n      ];\n      for (_j = 0, _len1 = effects.length; _j < _len1; _j++) {\n        effect = effects[_j];\n        friend.addEffect(effect, this);\n      }\n    }\n    args = [parseFloat(this.pos.x.toFixed(2)), parseFloat(this.pos.y.toFixed(2)), parseFloat(this.warcryRange.toFixed(2)), '#FF8C00'];\n    return this.addCurrentEvent(\"aoe-\" + (JSON.stringify(args)));\n  };\n\n  return StonewallWarcry;\n\n})(Component);\n",
	"system": "combat",
	"creator": "537d01f484c54c6e05c05989",
	"original": "554b821364f43b88056cd423",
	"watchers": [
		"54b1773a75e3055205e5a449",
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"description": "Increases attackMass of friendly soldiers",
	"commitMessage": "Promisifies",
	"parent": "573fa0ac3e910f115e5e463d",
	"configSchema": {
		"properties": {
			"cooldown": {
				"type": "number",
				"minimum": 0,
				"description": "Cooldown before this Thang can act again after warcry."
			},
			"specificCooldown": {
				"type": "number",
				"description": "Cooldown before this Thang can warcry again.",
				"minimum": 0
			},
			"warcryDuration": {
				"type": "number",
				"description": "How long the warcry lasts, in seconds.",
				"format": "seconds",
				"default": 5
			},
			"warcryMassFactor": {
				"type": "number",
				"description": "By how much to increase the attackMass of allied units.",
				"default": 1.2
			},
			"warcryMinimumMass": {
				"description": "Increase attackMass to this value if the unit's attackMass is less",
				"default": "400"
			},
			"warcryRange": {
				"type": "number",
				"default": 10,
				"description": "How far the warcry reaches, in meters.",
				"format": "meters"
			}
		},
		"default": {
			"cooldown": 1,
			"specificCooldown": 0,
			"warcryDuration": 5,
			"warcryRange": 10,
			"warcryMassFactor": 1.3,
			"warcryMinimumMass": 400
		}
	},
	"dependencies": [
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		}
	],
	"created": "2016-05-23T22:56:12.967Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 7,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "54b1773a75e3055205e5a449"
		},
		{
			"access": "read",
			"target": "public"
		}
	]
}