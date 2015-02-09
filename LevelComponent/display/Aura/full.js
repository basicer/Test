{
	"_id": "54d91e44198a604f058f7eb3",
	"searchStrings": "aura a au",
	"index": true,
	"slug": "aura",
	"name": "Aura",
	"js": "var Aura, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nAura = (function(_super) {\n  __extends(Aura, _super);\n\n  function Aura() {\n    _ref = Aura.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Aura.className = 'Aura';\n\n  Aura.prototype.chooseAction = function() {\n    if (this.world.frames.length % 2 === 0 && this.showAura && this.world.rand.randf() < this.auraFlicker) {\n      return this.drawAura();\n    }\n  };\n\n  Aura.prototype.drawAura = function() {\n    var X, Y, aura;\n    X = parseFloat((this.pos.x + this.auraOffsetX).toFixed(2));\n    Y = parseFloat((this.pos.y + this.auraOffsetY).toFixed(2));\n    aura = [X, Y, this.auraRadius, this.auraColor, 0, 0, 'floating'];\n    return this.addCurrentEvent(\"aoe-\" + (JSON.stringify(aura)));\n  };\n\n  return Aura;\n\n})(Component);\n",
	"system": "display",
	"creator": "54b1773a75e3055205e5a449",
	"original": "54d9071f2f89c55405f66644",
	"watchers": [
		"54b1773a75e3055205e5a449",
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "Gives the Thang a glowing Aura effect.",
	"codeLanguage": "coffeescript",
	"dependencies": [
		{
			"original": "524b3e3fff92f1f4f800000d",
			"majorVersion": 0
		},
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		}
	],
	"commitMessage": "auraFlicker",
	"parent": "54d919ebd0e3dd5405f4ed32",
	"configSchema": {
		"properties": {
			"auraColor": {
				"type": "string",
				"default": "rgba(255,255,128,0.11)",
				"description": "The aura's color"
			},
			"auraOffsetX": {
				"type": "number",
				"default": 0,
				"description": "X offset for the aura"
			},
			"auraOffsetY": {
				"type": "number",
				"default": 0.9,
				"description": "Y offset for the aura effect"
			},
			"auraRadius": {
				"default": 5,
				"type": "number",
				"additionalProperties": false,
				"description": "The aura's radius"
			},
			"showAura": {
				"type": "boolean",
				"default": true,
				"description": "Whether or not the aura is active"
			},
			"auraFlicker": {
				"type": "number",
				"default": 0.75,
				"description": "Flicker rate of the aura. Should be between 1 (no flicker) and 0 (no aura)"
			}
		},
		"default": {
			"auraRadius": 5,
			"showAura": true,
			"auraColor": "rgba(255,255,128,0.11)",
			"auraOffsetY": 0.9,
			"auraOffsetX": 0,
			"auraFlicker": 0.75
		}
	},
	"created": "2015-02-09T20:53:24.733Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 5,
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