{
	"_id": "54e3e914de744156051bc7f5",
	"searchStrings": "lightstone l li lig ligh light lights lightst lightsto",
	"index": true,
	"slug": "lightstone",
	"name": "Lightstone",
	"js": "var Lightstone,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nLightstone = (function(_super) {\n  __extends(Lightstone, _super);\n\n  Lightstone.className = 'Lightstone';\n\n  function Lightstone(config) {\n    Lightstone.__super__.constructor.call(this, config);\n  }\n\n  Lightstone.prototype.attach = function(thang) {\n    Lightstone.__super__.attach.call(this, thang);\n    thang.isCollectable = true;\n    thang.maintainsElevation = function() {\n      return true;\n    };\n    thang.pickedUpBy = null;\n    thang.lightstoneDuration = this.lightstoneDuration;\n    return thang.lightstoneTimer = 0;\n  };\n\n  Lightstone.prototype.chooseAction = function() {\n    this.checkLightstoneTimer();\n    if (this.pickedUpBy) {\n      return this.floatGem();\n    }\n  };\n\n  Lightstone.prototype.wasCollectedBy = function(thang) {\n    var _ref;\n    if ((_ref = thang.hasActiveLightstone) != null) {\n      _ref.expireLightstone();\n    }\n    thang.hasActiveLightstone = this;\n    this.showAura = false;\n    thang.showAura = true;\n    this.pickedUpBy = thang;\n    this.isCollectable = false;\n    this.lightstoneTimer = this.lightstoneDuration;\n    return this.setExists(true);\n  };\n\n  Lightstone.prototype.expireLightstone = function() {\n    if (this.pickedUpBy === null) {\n      return;\n    }\n    this.pickedUpBy.hasActiveLightstone = null;\n    this.lightstoneTimer = 0;\n    this.setExists(false);\n    this.pickedUpBy.showAura = false;\n    return this.pickedUpBy = null;\n  };\n\n  Lightstone.prototype.checkLightstoneTimer = function() {\n    if (this.lightstoneTimer > 0) {\n      return this.lightstoneTimer -= this.world.dt;\n    } else {\n      return this.expireLightstone();\n    }\n  };\n\n  Lightstone.prototype.floatGem = function() {\n    if (!this.pickedUpBy) {\n      return;\n    }\n    this.hasMoved = true;\n    this.pos.x = this.pickedUpBy.pos.x;\n    this.pos.y = this.pickedUpBy.pos.y;\n    return this.pos.z = 8;\n  };\n\n  return Lightstone;\n\n})(Component);\n",
	"system": "inventory",
	"creator": "54b1773a75e3055205e5a449",
	"original": "54d6d3122f89c55405f2a353",
	"watchers": [
		"54b1773a75e3055205e5a449",
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "A stone that glows.",
	"codeLanguage": "coffeescript",
	"dependencies": [
		{
			"original": "524d94d83ea855e0ab000279",
			"majorVersion": 0
		},
		{
			"original": "54d9071f2f89c55405f66644",
			"majorVersion": 0
		},
		{
			"original": "524b7b8c7fc0f6d519000013",
			"majorVersion": 0
		}
	],
	"commitMessage": "Configurable lightstone duration",
	"parent": "54d97aaea9bd9f57050fa52a",
	"configSchema": {
		"properties": {
			"lightstoneDuration": {
				"type": "number",
				"default": 6,
				"description": "How long the Lightstone effect lasts."
			}
		},
		"default": {
			"lightstoneDuration": 6
		}
	},
	"created": "2015-02-18T01:21:24.876Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 4,
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