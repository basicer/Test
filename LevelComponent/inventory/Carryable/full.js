{
	"_id": "57753cf477c7d62600ea1064",
	"searchStrings": "carryable c ca car carr carry carrya carryab",
	"index": true,
	"slug": "carryable",
	"name": "Carryable",
	"js": "var Carryable, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCarryable = (function(_super) {\n  __extends(Carryable, _super);\n\n  function Carryable() {\n    _ref = Carryable.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Carryable.className = 'Carryable';\n\n  Carryable.prototype.isCarryable = true;\n\n  Carryable.prototype.attach = function(thang) {\n    Carryable.__super__.attach.call(this, thang);\n    if (!thang.move) {\n      thang.addTrackedProperties(['pos', 'Vector']);\n      return thang.keepTrackedProperty('pos');\n    }\n  };\n\n  Carryable.prototype.update = function() {\n    var _ref1;\n    if (this.parent != null) {\n      this.pos.x = this.parent.pos.x;\n      this.pos.y = this.parent.pos.y;\n      this.pos.z = this.anchorHeight + this.parent.pos.z - this.parent.height / 2;\n      return (_ref1 = this.velocity) != null ? _ref1.z = 0 : void 0;\n    }\n  };\n\n  Carryable.prototype.setParent = function(parent) {\n    return this.parent = parent;\n  };\n\n  Carryable.prototype.removeParent = function() {\n    return this.parent = null;\n  };\n\n  return Carryable;\n\n})(Component);\n",
	"system": "inventory",
	"creator": "54b1773a75e3055205e5a449",
	"original": "5750a3b23407ad2500876dd9",
	"watchers": [
		"537d01f484c54c6e05c05989",
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"commitMessage": "Track pos ",
	"parent": "57743644f6bd733800892428",
	"created": "2016-06-30T15:38:28.499Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 4,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "537d01f484c54c6e05c05989"
		},
		{
			"access": "read",
			"target": "public"
		}
	]
}