{
	"_id": "550768a400d691cb0d309ad7",
	"searchStrings": "decoy d de dec",
	"index": true,
	"slug": "decoy",
	"name": "Decoy",
	"js": "var Decoy, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nDecoy = (function(_super) {\n  __extends(Decoy, _super);\n\n  function Decoy() {\n    _ref = Decoy.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Decoy.className = 'Decoy';\n\n  Decoy.prototype.chooseAction = function() {\n    var t, _i, _len, _ref1, _ref2, _ref3, _results;\n    if (this.inactive) {\n      return;\n    }\n    if (this.move) {\n      if (this.spawnPos == null) {\n        this.spawnPos = (_ref1 = (_ref2 = this.builtBy) != null ? _ref2.pos : void 0) != null ? _ref1 : this.pos;\n      }\n      if (this.fleeDirection == null) {\n        this.fleeDirection = this.pos.copy().subtract(this.spawnPos).normalize();\n      }\n      if (this.fleeDirection.isZero()) {\n        this.fleeDirection.add({\n          x: 1,\n          y: 0\n        }).rotate(this.world.rand.randf() * 2 * Math.PI);\n      }\n      this.move(this.pos.copy().add(this.fleeDirection.copy().multiply(10)));\n    }\n    _ref3 = this.world.thangs;\n    _results = [];\n    for (_i = 0, _len = _ref3.length; _i < _len; _i++) {\n      t = _ref3[_i];\n      if (t.setTarget && t.exists && t.attack && t.superteam !== this.superteam && this.distanceSquared(t) < 30 * 30) {\n        _results.push(t.attack(this));\n      }\n    }\n    return _results;\n  };\n\n  return Decoy;\n\n})(Component);\n",
	"system": "targeting",
	"creator": "512ef4805a67a8c507000001",
	"original": "5498c37b8e52573b10d3bcf9",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "This Component makes the Thang aggro all nearby enemies.",
	"dependencies": [
		{
			"original": "524b7bab7fc0f6d519000017",
			"majorVersion": 0
		}
	],
	"commitMessage": "Performance: reducing unnecessary registries.",
	"parent": "54cec24b34fb8d5805dacbb8",
	"configSchema": {
		"default": {
			"inactive": false
		},
		"properties": {
			"inactive": {
				"type": "boolean",
				"description": "Whether this Thang is inactive."
			}
		}
	},
	"created": "2015-03-16T23:35:00.916Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 6,
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