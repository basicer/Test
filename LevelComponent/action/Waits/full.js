{
	"_id": "579c0baad4d20d2e00768b98",
	"index": true,
	"slug": "waits",
	"name": "Waits",
	"js": "var Waits, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nWaits = (function(_super) {\n  __extends(Waits, _super);\n\n  function Waits() {\n    _ref = Waits.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Waits.className = 'Waits';\n\n  Waits.prototype.defaultDuration = 1;\n\n  Waits.prototype.attach = function(thang) {\n    var waitAction, _ref1;\n    waitAction = {\n      name: 'wait',\n      cooldown: (_ref1 = this.defaultDuration) != null ? _ref1 : 1\n    };\n    Waits.__super__.attach.call(this, thang);\n    return thang.addActions(waitAction);\n  };\n\n  Waits.prototype.wait = function(duration) {\n    this.actions.wait.cooldown = duration - this.world.dt;\n    this.setAction('wait');\n    return this.block();\n  };\n\n  Waits.prototype.update = function() {\n    if (!(this.action === 'wait' && this.act())) {\n      return;\n    }\n    this.unblock();\n    return this.setAction('idle');\n  };\n\n  return Waits;\n\n})(Component);\n",
	"creator": "579bf3a663fd7f2000491aa1",
	"original": "5275cf1c46419d8623008386",
	"__v": 0,
	"commitMessage": "Diplomat submission for lang es-ES: 1 change(s).",
	"parent": "576ac3dfc10c132f00a2c939",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"patches": [],
	"official": false,
	"configSchema": {
		"properties": {
			"defaultDuration": {
				"type": "number",
				"default": 1,
				"description": "Default wait duration when wait() is called with no arguments, in seconds.",
				"exclusiveMinimum": true,
				"minimum": 0
			}
		},
		"id": "__base__",
		"additionalProperties": false,
		"type": "object",
		"default": {
			"defaultDuration": 1
		}
	},
	"dependencies": [
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		}
	],
	"description": "This Component lets the Thang wait before performing its next action.",
	"system": "action",
	"searchStrings": "waits w wa wai",
	"i18nCoverage": [
		"-",
		"cs",
		"es-ES",
		"fr",
		"zh-HANS",
		"es-419",
		"nb",
		"fi",
		"de-DE",
		"zh-HANT",
		"ru",
		"sk",
		"it",
		"pl",
		"uk",
		"pt-BR",
		"nl-NL",
		"nl-BE",
		"el",
		"da",
		"hu",
		"pt-PT",
		"fa"
	],
	"created": "2016-07-30T02:06:34.610Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 43,
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