{
	"_id": "53d57573b17ad46612cc99df",
	"index": true,
	"slug": "player",
	"name": "Player",
	"codeLanguage": "coffeescript",
	"js": "var Player, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nPlayer = (function(_super) {\n  __extends(Player, _super);\n\n  function Player() {\n    _ref = Player.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Player.className = 'Player';\n\n  Player.prototype.chooseAction = function() {\n    this.attack(this);\n    arrow(keys(to(move)));\n    return space(bar(this(attack)));\n  };\n\n  return Player;\n\n})(Component);\n",
	"creator": "53d56f91d4e4c9ce0f7a9065",
	"original": "53d572bed4e4c9ce0f7a924b",
	"watchers": [
		"53d56f91d4e4c9ce0f7a9065"
	],
	"__v": 0,
	"official": false,
	"configSchema": {
		"additionalProperties": true,
		"type": [
			"array",
			"object"
		],
		"maxItems": 3
	},
	"dependencies": [],
	"description": "This Component makes the Thang attack itself.",
	"system": "movement",
	"commitMessage": "Now code player mode",
	"parent": "53d572bed4e4c9ce0f7a924b",
	"searchStrings": "player p pl pla play",
	"created": "2014-07-27T21:56:03.126Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 1,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "53d56f91d4e4c9ce0f7a9065"
		},
		{
			"access": "read",
			"target": "public"
		}
	]
}