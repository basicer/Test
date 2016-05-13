{
	"_id": "573521defda3cf250008a1ef",
	"index": true,
	"slug": "hides",
	"name": "Hides",
	"codeLanguage": "coffeescript",
	"js": "var Hides, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nHides = (function(_super) {\n  __extends(Hides, _super);\n\n  function Hides() {\n    _ref = Hides.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Hides.className = 'Hides';\n\n  Hides.prototype.attach = function(thang) {\n    var hideAction;\n    hideAction = {\n      name: 'hide',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    Hides.__super__.attach.call(this, thang);\n    thang.addActions(hideAction);\n    return thang.addTrackedProperties(['hidden', 'boolean']);\n  };\n\n  Hides.prototype.hide = function() {\n    this.setAction('hide');\n    return this.block();\n  };\n\n  Hides.prototype.update = function() {\n    var effect, hidden, hideEffects, targeter, _i, _j, _len, _len1, _ref1, _results;\n    hidden = this.hidden;\n    if (this.action === 'hide' && this.act()) {\n      this.unblock();\n      if (this.hidden) {\n        this.unhide();\n      }\n      hideEffects = [\n        {\n          name: 'hide',\n          duration: this.hideDuration,\n          reverts: true,\n          factor: 0.5,\n          targetProperty: 'alpha'\n        }, {\n          name: 'hide',\n          duration: this.hideDuration,\n          reverts: true,\n          setTo: true,\n          targetProperty: 'hidden'\n        }\n      ];\n      for (_i = 0, _len = hideEffects.length; _i < _len; _i++) {\n        effect = hideEffects[_i];\n        this.addEffect(effect);\n      }\n      hidden = true;\n    }\n    if (hidden) {\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {\n        targeter = _ref1[_j];\n        if (targeter.target === this && targeter.exists && targeter !== this) {\n          _results.push(targeter.setTarget(null));\n        }\n      }\n      return _results;\n    }\n  };\n\n  Hides.prototype.performAttack = function() {\n    if (this.hidden) {\n      return this.unhide();\n    }\n  };\n\n  Hides.prototype.unhide = function() {\n    var effect, _i, _len, _ref1;\n    _ref1 = this.effects;\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      effect = _ref1[_i];\n      if (effect.name === 'hide') {\n        effect.timeSinceStart = 9001;\n      }\n    }\n    return this.updateEffects('hide');\n  };\n\n  return Hides;\n\n})(Component);\n",
	"creator": "537d01f484c54c6e05c05989",
	"original": "53c99b2eebba77000033ae9d",
	"watchers": [
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"commitMessage": "Refactor to new esper yielding method",
	"parent": "56b9057a2fe4ef3f0098f470",
	"official": false,
	"configSchema": {
		"properties": {
			"cooldown": {
				"type": "number",
				"format": "seconds",
				"description": "How long it takes to start hiding, in seconds.",
				"minimum": 0,
				"default": 0.5
			},
			"hideDuration": {
				"type": "number",
				"format": "seconds",
				"minimum": 0,
				"default": 5,
				"description": "How long the invisibility lasts when triggered."
			},
			"specificCooldown": {
				"type": "number",
				"minimum": 0,
				"format": "seconds",
				"description": "How long, in seconds, before hide can be used again."
			}
		},
		"default": {
			"cooldown": 0.5,
			"hideDuration": 5,
			"specificCooldown": 15
		},
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "52bdf7f58c4289607b00002f",
			"majorVersion": 0
		},
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		},
		{
			"original": "52e95818a3ca8546b7000001",
			"majorVersion": 0
		}
	],
	"description": "This Component gives the Thang a hide ability.",
	"system": "targeting",
	"searchStrings": "hides h hi hid",
	"created": "2016-05-13T00:37:50.686Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 13,
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