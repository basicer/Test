{
	"_id": "55cd43c230dfb6c578cb7a09",
	"creator": "512ef4805a67a8c507000001",
	"slug": "beam",
	"name": "Beam",
	"js": "var Beam, Ellipse, Rectangle, Vector, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nVector = require('lib/world/vector');\n\nRectangle = require('lib/world/rectangle');\n\nEllipse = require('lib/world/ellipse');\n\nBeam = (function(_super) {\n  __extends(Beam, _super);\n\n  function Beam() {\n    _ref = Beam.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Beam.className = \"Beam\";\n\n  Beam.prototype.attach = function(thang) {\n    Beam.__super__.attach.call(this, thang);\n    thang.addTrackedProperties(['scaleFactorX', 'number']);\n    return thang.addTrackedProperties(['pos', 'Vector']);\n  };\n\n  Beam.prototype.launch = function(shooter) {\n    var beamEnd, collisionThangPos, diff, shape;\n    diff = Vector.subtract(this.targetPos, this.shooter.pos);\n    this.width = this.shooter.attackRange;\n    this.height = 5.8181;\n    beamEnd = Vector.add(this.shooter.pos, diff.copy().limit(this.width));\n    collisionThangPos = this.shooter.pos.copy().add(new Vector(Math.cos(diff.heading()) * 0.5 * this.width, Math.sin(diff.heading()) * 0.5 * this.width));\n    this.collisionThang = {\n      shape: this.shape,\n      width: this.width,\n      height: this.height,\n      rotation: diff.heading(),\n      pos: collisionThangPos\n    };\n    shape = new {\n      box: Rectangle,\n      sheet: Rectangle,\n      ellipsoid: Ellipse,\n      disc: Ellipse\n    }[this.shape](this.collisionThang.pos.x, this.collisionThang.pos.y, this.width, this.height, this.collisionThang.rotation);\n    this.collisionThang.getShape = function() {\n      return shape;\n    };\n    diff = Vector.subtract(beamEnd, this.pos);\n    this.rotation = diff.heading();\n    this.pos.x += Math.cos(this.rotation) * 0.5 * this.width;\n    this.pos.y += Math.sin(this.rotation) * 0.5 * this.width;\n    this.pos.z = (this.shooter.depth + this.targetPos.z) / 2 + this.depth / 2;\n    this.scaleFactorX = this.width / 16;\n    this.scaleFactorX *= 1 - 0.25 * Math.abs(Math.sin(this.rotation));\n    this.keepTrackedProperty('pos');\n    this.keepTrackedProperty('scaleFactorX');\n    return this.keepTrackedProperty('rotation');\n  };\n\n  Beam.prototype.update = function() {\n    var thang, _i, _len, _ref1, _results;\n    _ref1 = this.world.getSystem(\"Combat\").attackables.slice();\n    _results = [];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      thang = _ref1[_i];\n      if (thang.team !== this.team && thang !== this.shooter && this.intersects(this.collisionThang, thang)) {\n        this.shooter.performAttackOriginal(thang, this.world.dt / this.shooter.actions.attack.cooldown);\n        _results.push(this.addCurrentEvent('hit'));\n      } else {\n        _results.push(void 0);\n      }\n    }\n    return _results;\n  };\n\n  return Beam;\n\n})(Component);\n",
	"original": "524cce5a3ea855e0ab000175",
	"__v": 0,
	"commitMessage": "Slice!",
	"parent": "54861e3fae4cab0000e0eb5f",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"official": false,
	"configSchema": {
		"id": "__base__",
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524cc2593ea855e0ab000142",
			"majorVersion": 0
		}
	],
	"description": "This Thang is a Beam weapon.",
	"system": "combat",
	"searchStrings": "beam b be",
	"created": "2015-08-14T01:26:26.504Z",
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