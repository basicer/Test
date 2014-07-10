{
	"_id": "53beb82d9e81333605a00742",
	"index": true,
	"slug": "marchingorders",
	"name": "MarchingOrders",
	"codeLanguage": "coffeescript",
	"js": "var MarchingOrders, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nMarchingOrders = (function(_super) {\n  __extends(MarchingOrders, _super);\n\n  function MarchingOrders() {\n    _ref = MarchingOrders.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  MarchingOrders.className = 'MarchingOrders';\n\n  MarchingOrders.prototype.marchNorth = function() {\n    return this.moveXY(this.pos.x, this.pos.y + this.simpleMoveDistance);\n  };\n\n  MarchingOrders.prototype.marchSouth = function() {\n    return this.moveXY(this.pos.x, this.pos.y - this.simpleMoveDistance);\n  };\n\n  MarchingOrders.prototype.marchWest = function() {\n    return this.moveXY(this.pos.x - this.simpleMoveDistance, this.pos.y);\n  };\n\n  MarchingOrders.prototype.marchEast = function() {\n    return this.moveXY(this.pos.x + this.simpleMoveDistance, this.pos.y);\n  };\n\n  return MarchingOrders;\n\n})(Component);\n",
	"creator": "5162fab9c92b4c751e000274",
	"original": "53bad8db8971a44605155698",
	"watchers": [
		"5162fab9c92b4c751e000274",
		"5310e4e562b398ee3ca23325"
	],
	"__v": 0,
	"commitMessage": "Accepted Gosnat's patch.",
	"parent": "53bd71be307ca58a91257a30",
	"patches": [],
	"official": false,
	"configSchema": {
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [],
	"description": "This Component makes the Thang attack itself.",
	"system": "misc",
	"searchStrings": "marching orders m ma mar marc march marchi marchin marching marchingo marchingor marchingord marchingorde",
	"created": "2014-07-10T15:58:37.345Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 3,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "5162fab9c92b4c751e000274"
		},
		{
			"access": "read",
			"target": "public"
		},
		{
			"access": "write",
			"target": "5310e4e562b398ee3ca23325"
		}
	]
}