{
	"_id": "538755f7cb18e700007122a7",
	"creator": "512ef4805a67a8c507000001",
	"slug": "rotatestotarget",
	"name": "RotatesToTarget",
	"original": "524b7bcd7fc0f6d51900001b",
	"__v": 0,
	"js": "var RotatesToTarget, Vector, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nVector = require('lib/world/vector');\n\nRotatesToTarget = (function(_super) {\n  __extends(RotatesToTarget, _super);\n\n  function RotatesToTarget() {\n    _ref = RotatesToTarget.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  RotatesToTarget.className = \"RotatesToTarget\";\n\n  RotatesToTarget.prototype.attach = function(thang) {\n    RotatesToTarget.__super__.attach.call(this, thang);\n    return thang.addTrackedProperties(['degrees', 'number']);\n  };\n\n  RotatesToTarget.prototype.rotateTo = function(r) {\n    if (typeof r !== 'number') {\n      throw new ArgumentError(\"\", \"rotateTo\", \"degrees\", \"number\", r);\n    }\n    this.degrees = r % 360;\n    r = 2 * Math.PI - r * Math.PI / 180;\n    this.setTargetPos((new Vector(this.range * Math.cos(r), this.range * Math.sin(r))).add(this.pos));\n    this.rotation = r % (2 * Math.PI);\n    return this.hasRotated = true;\n  };\n\n  RotatesToTarget.prototype.update = function() {\n    var targetPos;\n    if (this.dead) {\n      return;\n    }\n    if (!(targetPos = this.getTargetPos())) {\n      return;\n    }\n    this.rotation = Vector.subtract(targetPos, this.pos).heading();\n    return this.hasRotated = true;\n  };\n\n  return RotatesToTarget;\n\n})(Component);\n",
	"commitMessage": "",
	"parent": "538697dbcb18e70000712245",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"official": false,
	"configSchema": {
		"id": "__base__",
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b75ad7fc0f6d519000001",
			"majorVersion": 0
		}
	],
	"description": "This Thang will rotate to face its target.",
	"system": "targeting",
	"codeLanguage": "coffeescript",
	"created": "2014-05-29T15:44:55.533Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 33,
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