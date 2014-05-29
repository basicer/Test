{
	"_id": "538755f6cb18e70000712293",
	"creator": "512ef4805a67a8c507000001",
	"slug": "hearsandaggros",
	"name": "HearsAndAggros",
	"js": "var HearsAndAggros, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nHearsAndAggros = (function(_super) {\n  __extends(HearsAndAggros, _super);\n\n  function HearsAndAggros() {\n    _ref = HearsAndAggros.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  HearsAndAggros.className = \"HearsAndAggros\";\n\n  HearsAndAggros.prototype.hear = function(speaker, message) {\n    var target;\n    if (speaker.team !== this.team) {\n      target = speaker;\n    } else if (speaker.target && speaker.target.isAttackable && speaker.target.team !== this.team) {\n      target = speaker.target;\n    }\n    if (target) {\n      if ((this.heardAggroMessages != null ? this.heardAggroMessages : this.heardAggroMessages = {})[message] && this.aggroResponses.length) {\n        this.say(\"Heard that one before.\");\n        return;\n      }\n      this.heardAggroMessages[message] = true;\n      if (!(this.aggroResponses.length > 1)) {\n        this.attack(target);\n      }\n      if (this.aggroResponses.length) {\n        this.say(this.aggroResponses.shift());\n        if (this.actions.say) {\n          return this.heat = Math.max(this.heat, this.actions.say.cooldown);\n        }\n      }\n    }\n  };\n\n  return HearsAndAggros;\n\n})(Component);\n",
	"original": "524d94503ea855e0ab00023f",
	"__v": 0,
	"commitMessage": "",
	"parent": "538697d9cb18e70000712230",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"official": false,
	"configSchema": {
		"properties": {
			"aggroResponses": {
				"type": "array",
				"items": {
					"type": "string"
				},
				"description": "List of responses to say when getting angry (aggro happens on the last one)."
			}
		},
		"default": {
			"aggroResponses": []
		},
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b7b977fc0f6d519000014",
			"majorVersion": 0
		},
		{
			"original": "524b7b687fc0f6d51900000f",
			"majorVersion": 0
		}
	],
	"description": "This Thang attacks any enemies it hears talking within its hearingRange.",
	"system": "ai",
	"codeLanguage": "coffeescript",
	"searchStrings": "hears and aggros h he hea hear hears hearsa hearsan hearsand hearsanda hearsandag hearsandagg hearsandaggr",
	"created": "2014-05-29T15:44:54.043Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 16,
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