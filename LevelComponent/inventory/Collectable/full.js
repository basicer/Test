{
	"_id": "538755f8cb18e700007122b1",
	"creator": "512ef4805a67a8c507000001",
	"slug": "collectable",
	"name": "Collectable",
	"js": "var Collectable, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCollectable = (function(_super) {\n  __extends(Collectable, _super);\n\n  function Collectable() {\n    _ref = Collectable.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Collectable.className = \"Collectable\";\n\n  Collectable.prototype.isCollectable = true;\n\n  return Collectable;\n\n})(Component);\n",
	"original": "524d94d83ea855e0ab000279",
	"__v": 2,
	"commitMessage": "",
	"parent": "538697dbcb18e7000071224f",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"official": false,
	"configSchema": {
		"properties": {
			"collectableProperties": {
				"type": "array",
				"items": {
					"type": "array"
				},
				"description": "Like [\"pos\", \"x\", 30] to set pos.x = 30 when collected."
			},
			"collectableExclamation": {
				"type": "string",
				"description": "What whoever collects this Thang might say."
			}
		},
		"id": "__base__",
		"additionalProperties": false,
		"type": "object",
		"default": {
			"collectableProperties": [],
			"collectableExclamation": ""
		}
	},
	"dependencies": [
		{
			"original": "524b4150ff92f1f4f8000024",
			"majorVersion": 0
		},
		{
			"original": "524b75ad7fc0f6d519000001",
			"majorVersion": 0
		},
		{
			"original": "524b3e3fff92f1f4f800000d",
			"majorVersion": 0
		}
	],
	"description": "This Thang is an item that can be picked up by other Thangs.",
	"system": "inventory",
	"codeLanguage": "coffeescript",
	"searchStrings": "collectable c co col coll colle collec collect collecta collectab",
	"created": "2014-05-29T15:44:56.275Z",
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