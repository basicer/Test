{
	"_id": "57b20ec92322182900ccad4c",
	"index": true,
	"slug": "autocasts",
	"name": "AutoCasts",
	"js": "var AutoCasts, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nAutoCasts = (function(_super) {\n  __extends(AutoCasts, _super);\n\n  function AutoCasts() {\n    _ref = AutoCasts.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  AutoCasts.className = \"AutoCasts\";\n\n  AutoCasts.prototype.chooseAction = function() {\n    var spell, spellName, spellTarget, _name, _ref1;\n    if (this.commander && !this.commander.dead) {\n      return;\n    }\n    if (this.gameEntity) {\n      return;\n    }\n    _ref1 = this.spells;\n    for (spellName in _ref1) {\n      spell = _ref1[spellName];\n      if (!(!this.spellHeats[spellName])) {\n        continue;\n      }\n      spellTarget = typeof this[_name = 'getTarget_' + spell.name] === \"function\" ? this[_name]() : void 0;\n      if (spellTarget && this.canCast(spell.name, spellTarget)) {\n        return this.cast(spell.name, spellTarget);\n      }\n    }\n    if (this.action === 'cast') {\n      return this.setTarget(null);\n    }\n  };\n\n  return AutoCasts;\n\n})(Component);\n",
	"creator": "537d01f484c54c6e05c05989",
	"original": "5358099d3e6b74641ec0c5e3",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Promisfy cast",
	"parent": "553703b5428ddac5686fd020",
	"official": false,
	"configSchema": {
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "52f13c37528baa731827408d",
			"majorVersion": 0
		}
	],
	"description": "This Component makes the Thang automatically cast spells if it has any relevant ones ready.",
	"system": "ai",
	"codeLanguage": "coffeescript",
	"searchStrings": "auto casts a au aut auto autoc autoca autocas",
	"created": "2016-08-15T18:49:45.817Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 14,
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