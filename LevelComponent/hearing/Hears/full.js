{
	"_id": "57647ecf8514f82f00540428",
	"slug": "hears",
	"creator": "537d01f484c54c6e05c05989",
	"name": "Hears",
	"original": "524b7b977fc0f6d519000014",
	"__v": 0,
	"js": "var Hears, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nHears = (function(_super) {\n  __extends(Hears, _super);\n\n  function Hears() {\n    _ref = Hears.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Hears.className = 'Hear';\n\n  Hears.prototype.attach = function(thang) {\n    Hears.__super__.attach.call(this, thang);\n    return thang.hearingDelay = this.hearingDelayMinimum + thang.world.rand.randf() * (1.5 * (this.hearingDelayMaximum - this.hearingDelayMinimum));\n  };\n\n  Hears.prototype.hear = function(speaker, message, data) {};\n\n  return Hears;\n\n})(Component);\n",
	"commitMessage": "Properly randomize hearing delay",
	"parent": "5491c161d9b62180173a9565",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"patches": [],
	"official": false,
	"configSchema": {
		"properties": {
			"hearingRange": {
				"type": "number",
				"description": "How far this Thang can hear, in meters.",
				"minimum": 0,
				"default": 9001,
				"format": "meters"
			},
			"hearingDelayMinimum": {
				"type": "number",
				"description": "How long it takes this Thang to react to something it hears, minimum.",
				"minimum": 0,
				"default": 0.5,
				"format": "seconds"
			},
			"hearingDelayMaximum": {
				"description": "How long it takes this Thang to react to something it hears, maximum.",
				"type": "number",
				"minimum": 0,
				"default": 2,
				"format": "seconds"
			}
		},
		"default": {
			"hearingRange": 9001,
			"hearingDelayMinimum": 0.5,
			"hearingDelayMaximum": 2
		},
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
	"description": "This Thang can hear other Thangs.",
	"system": "hearing",
	"searchStrings": "hears h he hea",
	"created": "2016-06-17T22:50:55.794Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 44,
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