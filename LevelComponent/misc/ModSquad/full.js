{
	"_id": "53becd9f29964334050303aa",
	"index": true,
	"slug": "modsquad",
	"name": "ModSquad",
	"codeLanguage": "coffeescript",
	"js": "var ModSquad, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nModSquad = (function(_super) {\n  __extends(ModSquad, _super);\n\n  function ModSquad() {\n    _ref = ModSquad.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  ModSquad.className = 'ModSquad';\n\n  ModSquad.prototype.pickMushroom = function() {\n    return this.moveXY(7, 44);\n  };\n\n  ModSquad.prototype.buySmallPotion = function() {\n    return this.moveXY(20, 44);\n  };\n\n  ModSquad.prototype.buyMediumPotion = function() {\n    return this.moveXY(38, 44);\n  };\n\n  ModSquad.prototype.buyLargePotion = function() {\n    return this.moveXY(54, 43);\n  };\n\n  return ModSquad;\n\n})(Component);\n",
	"creator": "5310e4e562b398ee3ca23325",
	"original": "53becc4f88014c3505a61037",
	"watchers": [
		"5310e4e562b398ee3ca23325"
	],
	"__v": 0,
	"official": false,
	"configSchema": {
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [],
	"description": "This Component makes the Thang attack itself.",
	"system": "misc",
	"commitMessage": "",
	"parent": "53becc4f88014c3505a61037",
	"searchStrings": "mod squad m mo mod mods modsq modsqu",
	"created": "2014-07-10T17:30:07.579Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 1,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "5310e4e562b398ee3ca23325"
		},
		{
			"access": "read",
			"target": "public"
		}
	]
}