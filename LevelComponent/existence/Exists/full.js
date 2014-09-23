{
	"_id": "5420e70cf9e6504a05512a84",
	"creator": "512ef4805a67a8c507000001",
	"slug": "exists",
	"name": "Exists",
	"original": "524b4150ff92f1f4f8000024",
	"__v": 0,
	"js": "var Exists, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nExists = (function(_super) {\n  __extends(Exists, _super);\n\n  function Exists() {\n    _ref = Exists.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Exists.className = 'Exists';\n\n  Exists.prototype.exists = true;\n\n  Exists.prototype.setExists = function(exists) {\n    if (exists === this.exists) {\n      return;\n    }\n    this.exists = exists;\n    this.keepTrackedProperty('exists');\n    return this.updateRegistration();\n  };\n\n  return Exists;\n\n})(Component);\n",
	"commitMessage": "Accepted Driphter's Clojure patch.",
	"parent": "53bed341b4acf939fd9f721d",
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
			"stateless": {
				"type": "boolean",
				"default": false,
				"description": "Whether this Thang is static and can be exempt from costly state tracking"
			},
			"exists": {
				"type": "boolean",
				"default": true
			}
		},
		"id": "__base__",
		"additionalProperties": false,
		"type": "object",
		"default": {
			"stateless": false,
			"exists": true
		}
	},
	"dependencies": [],
	"description": "This Thang exists and takes part in the level simulation.",
	"system": "existence",
	"searchStrings": "exists e ex exi exis",
	"created": "2014-09-23T03:20:44.801Z",
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