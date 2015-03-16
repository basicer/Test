{
	"_id": "550768a400d691cb0d309ad4",
	"creator": "512ef4805a67a8c507000001",
	"slug": "delaysexistence",
	"name": "DelaysExistence",
	"js": "var DelaysExistence, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nDelaysExistence = (function(_super) {\n  __extends(DelaysExistence, _super);\n\n  function DelaysExistence() {\n    _ref = DelaysExistence.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  DelaysExistence.className = \"DelaysExistence\";\n\n  DelaysExistence.prototype.appeared = false;\n\n  DelaysExistence.prototype.attach = function(thang) {\n    var _ref1;\n    DelaysExistence.__super__.attach.call(this, thang);\n    thang.setExists(false);\n    return (_ref1 = thang.world.getSystem('Existence')) != null ? _ref1.startTrackingDelayedThangs() : void 0;\n  };\n\n  DelaysExistence.prototype.possiblyRevive = function() {\n    if (this.appeared || this.world.age < this.appearanceDelay) {\n      return false;\n    }\n    this.appeared = true;\n    this.setExists(true);\n    return true;\n  };\n\n  return DelaysExistence;\n\n})(Component);\n",
	"original": "524cbbea3ea855e0ab00003d",
	"__v": 0,
	"commitMessage": "Performance: reducing unnecessary registries.",
	"parent": "538755f3cb18e70000712279",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"official": false,
	"configSchema": {
		"properties": {
			"appearanceDelay": {
				"type": "number",
				"minimum": 0,
				"description": "How many seconds this Thang delays before appearing."
			}
		},
		"default": {
			"appearanceDelay": 5
		},
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b4150ff92f1f4f8000024",
			"majorVersion": 0
		}
	],
	"description": "This Thang doesn't show up right away.",
	"system": "existence",
	"codeLanguage": "coffeescript",
	"searchStrings": "delays existence d de del dela delay delays delayse delaysex delaysexi delaysexis delaysexist delaysexiste delaysexisten",
	"created": "2015-03-16T23:35:00.852Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 26,
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