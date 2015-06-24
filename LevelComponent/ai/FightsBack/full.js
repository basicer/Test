{
	"_id": "558a1d344bed1b6c2a2cabb8",
	"creator": "512ef4805a67a8c507000001",
	"slug": "fightsback",
	"name": "FightsBack",
	"js": "var FightsBack, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nFightsBack = (function(_super) {\n  __extends(FightsBack, _super);\n\n  function FightsBack() {\n    _ref = FightsBack.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  FightsBack.className = \"FightsBack\";\n\n  FightsBack.prototype.chooseAction = function() {\n    if (!this.lastAttacker || this.lastAttacker.dead) {\n      return;\n    }\n    return this.attack(this.lastAttacker);\n  };\n\n  FightsBack.prototype.takeDamage = function(damage, attacker) {\n    this.lastAttacker = attacker;\n    if (!this.dead) {\n      return this.attack(attacker);\n    }\n  };\n\n  return FightsBack;\n\n})(Component);\n",
	"original": "524d94123ea855e0ab00023d",
	"__v": 0,
	"commitMessage": "Remember last target to fight back against (if there is no AutoTargetsNearest).",
	"parent": "538755f4cb18e7000071227f",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"official": false,
	"configSchema": {
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b7ba57fc0f6d519000016",
			"majorVersion": 0
		}
	],
	"description": "This Thang attacks anything that damages it.",
	"system": "ai",
	"codeLanguage": "coffeescript",
	"searchStrings": "fights back f fi fig figh fight fights fightsb fightsba",
	"created": "2015-06-24T03:00:04.663Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 15,
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