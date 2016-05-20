{
	"_id": "573fa0ab3e910f115e5e4636",
	"index": true,
	"slug": "flaps",
	"name": "Flaps",
	"codeLanguage": "coffeescript",
	"js": "var Flaps, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nFlaps = (function(_super) {\n  __extends(Flaps, _super);\n\n  function Flaps() {\n    _ref = Flaps.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Flaps.className = 'Flaps';\n\n  Flaps.prototype.attach = function(thang) {\n    var flapAction;\n    flapAction = {\n      name: 'flap',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    Flaps.__super__.attach.call(this, thang);\n    return thang.addActions(flapAction);\n  };\n\n  Flaps.prototype.flap = function() {\n    return this.setAction('flap');\n  };\n\n  Flaps.prototype.update = function() {\n    var args, d, momentum, mover, ratio, _i, _len, _ref1;\n    if (this.action === 'flap' && this.act()) {\n      if (typeof this.sayWithoutBlocking === \"function\") {\n        this.sayWithoutBlocking('<FLAP>');\n      }\n      _ref1 = this.world.getSystem('Movement').movers;\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        mover = _ref1[_i];\n        if (!((d = this.distance(mover)) < this.flapRadius && mover !== this)) {\n          continue;\n        }\n        ratio = 1 - d / this.flapRadius;\n        momentum = mover.pos.copy().subtract(this.pos, true).multiply(ratio * this.flapWindMass, true);\n        mover.velocity.add(momentum.divide(mover.mass, true), true);\n        mover.rotation = (mover.velocity.heading() + Math.PI) % (2 * Math.PI);\n      }\n      args = [parseFloat(this.pos.x.toFixed(2)), parseFloat(this.pos.y.toFixed(2)), parseFloat(this.flapRadius.toFixed(2)), 'rgba(163, 189, 215, 0.1)'];\n      return typeof this.addCurrentEvent === \"function\" ? this.addCurrentEvent(\"aoe-\" + (JSON.stringify(args))) : void 0;\n    }\n  };\n\n  return Flaps;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "53cb5bcf03039b0439ee7520",
	"watchers": [
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"commitMessage": "sayWithoutBlocking",
	"parent": "53cc476f03039b0439ee7f35",
	"official": false,
	"configSchema": {
		"properties": {
			"cooldown": {
				"type": "number",
				"minimum": 0,
				"format": "seconds",
				"default": 0.3,
				"description": "How long the flap takes, in seconds."
			},
			"specificCooldown": {
				"type": "number",
				"format": "seconds",
				"minimum": 0,
				"description": "How long before this specific flap can be used again, in seconds."
			},
			"flapWindMass": {
				"type": "number",
				"minimum": 0,
				"description": "How much mass the wind from the flap imparts to Thangs at the center of the radius, in kilograms.",
				"format": "kilograms",
				"default": 20
			},
			"flapRadius": {
				"type": "number",
				"default": 30,
				"description": "How far away the flap can affect Thangs, in meters.",
				"format": "meters"
			}
		},
		"default": {
			"cooldown": 0.1,
			"flapWindMass": "20",
			"flapRadius": "30",
			"specificCooldown": 0
		},
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		},
		{
			"original": "524b75ad7fc0f6d519000001",
			"majorVersion": 0
		}
	],
	"description": "This Component gives the Thang a flapping wind gust ability.",
	"system": "combat",
	"searchStrings": "flaps f fl fla",
	"created": "2016-05-20T23:41:31.571Z",
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