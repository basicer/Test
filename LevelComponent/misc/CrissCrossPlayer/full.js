{
	"_id": "5420e746f9e6504a05512a9b",
	"slug": "crisscrossplayer",
	"name": "CrissCrossPlayer",
	"codeLanguage": "coffeescript",
	"js": "var CrissCrossPlayer, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCrissCrossPlayer = (function(_super) {\n  __extends(CrissCrossPlayer, _super);\n\n  function CrissCrossPlayer() {\n    _ref = CrissCrossPlayer.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  CrissCrossPlayer.className = \"CrissCrossPlayer\";\n\n  CrissCrossPlayer.prototype.teamColors = {\n    humans: '#ff0000',\n    ogres: '#0000ff'\n  };\n\n  CrissCrossPlayer.prototype.attach = function(thang) {\n    var prop, _i, _len, _ref1, _results;\n    CrissCrossPlayer.__super__.attach.call(this, thang);\n    thang.addTrackedProperties(['round', 'number']);\n    thang.addTrackedFinalProperties('turns', 'tileGrid');\n    thang.addTrackedProperties(['tilesOwned', 'array'], ['myTiles', 'array'], ['opponentTiles', 'array']);\n    _ref1 = ['tilesOwned', 'myTiles', 'opponentTiles'];\n    _results = [];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      prop = _ref1[_i];\n      _results.push(thang.keepTrackedProperty(prop));\n    }\n    return _results;\n  };\n\n  CrissCrossPlayer.prototype.setMap = function(map) {\n    this.map = map;\n    return this.updateGrid();\n  };\n\n  CrissCrossPlayer.prototype.setTileGroups = function(tileGroups) {\n    this.tileGroups = tileGroups;\n  };\n\n  CrissCrossPlayer.prototype.setTurns = function(turns) {\n    this.turns = turns;\n  };\n\n  CrissCrossPlayer.prototype.setRound = function(round) {\n    this.round = round;\n    this.keepTrackedProperty('round');\n    if (this.round) {\n      return this.currentSpeedRatio = 1;\n    }\n  };\n\n  CrissCrossPlayer.prototype.hear = function(speaker, message, data) {\n    var args, color, nodeThang, offset, submission, tile, _ref1, _ref2;\n    if (speaker.team !== 'neutral') {\n      return;\n    }\n    if ((!data) || (data.currentTileGroup === void 0)) {\n      return;\n    }\n    submission = this.makeBid(data.currentTileGroup);\n    if (!submission) {\n      this.say(\"No bid\", submission);\n      return;\n    }\n    if (_.isNumber(submission.gold)) {\n      submission.gold = Math.round(submission.gold);\n    } else {\n      submission.gold = 0;\n    }\n    this.say(((_ref1 = (_ref2 = submission.desiredTile) != null ? _ref2.id : void 0) != null ? _ref1 : \"???\") + \" for \" + submission.gold + \" gold!\", submission);\n    tile = submission.desiredTile;\n    if (!(tile != null ? tile.id : void 0)) {\n      return;\n    }\n    nodeThang = this.getThangForNodeID(tile.id);\n    color = this.teamColors[this.team];\n    offset = this.team === 'humans' ? -1.5 : 1.5;\n    args = [parseFloat(nodeThang.pos.x + offset), parseFloat(nodeThang.pos.y), 1.5, color];\n    return this.addCurrentEvent(\"aoe-\" + (JSON.stringify(args)));\n  };\n\n  CrissCrossPlayer.prototype.updateAPIs = function() {\n    return this.updateTilesProperties();\n  };\n\n  CrissCrossPlayer.prototype.updateTilesProperties = function() {\n    var tile;\n    this.tilesOwned = (function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = _.values(this.map);\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        tile = _ref1[_i];\n        if (tile.owner) {\n          _results.push(tile);\n        }\n      }\n      return _results;\n    }).call(this);\n    this.tilesOwned = _.sortBy(this.tilesOwned, 'turnWon');\n    this.myTiles = (function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.tilesOwned;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        tile = _ref1[_i];\n        if (tile.owner === this.team) {\n          _results.push(tile);\n        }\n      }\n      return _results;\n    }).call(this);\n    return this.opponentTiles = (function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.tilesOwned;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        tile = _ref1[_i];\n        if (tile.owner !== this.team) {\n          _results.push(tile);\n        }\n      }\n      return _results;\n    }).call(this);\n  };\n\n  CrissCrossPlayer.prototype.getTile = function(x, y) {\n    return this.tileGrid[x][y];\n  };\n\n  CrissCrossPlayer.prototype.highlightTile = function(tile) {\n    var args, color, nodeThang, yOffset;\n    nodeThang = this.getThangForNodeID(tile.id);\n    color = this.teamColors[this.team];\n    yOffset = this.team === 'humans' ? -2.5 : 2.5;\n    args = [parseFloat(nodeThang.pos.x), parseFloat(nodeThang.pos.y + yOffset), 1.0, color];\n    return this.addCurrentEvent(\"aoe-\" + (JSON.stringify(args)));\n  };\n\n  CrissCrossPlayer.prototype.updateGrid = function() {\n    var tile, _base, _base1, _i, _len, _name, _name1, _ref1, _results;\n    this.tileGrid = [];\n    _ref1 = _.values(this.map);\n    _results = [];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      tile = _ref1[_i];\n      if ((_base = this.tileGrid)[_name = tile.x] == null) {\n        _base[_name] = [];\n      }\n      if ((_base1 = this.tileGrid[tile.x])[_name1 = tile.y] == null) {\n        _base1[_name1] = [];\n      }\n      _results.push(this.tileGrid[tile.x][tile.y] = tile);\n    }\n    return _results;\n  };\n\n  CrissCrossPlayer.prototype.makeBidValidateReturn = function(bid) {\n    if (bid && bid.hash) {\n      if (bid.gold == null) {\n        bid.gold = bid.hash.gold;\n      }\n      if (bid.desiredTile == null) {\n        bid.desiredTile = bid.hash.desiredTile;\n      }\n    }\n    if (!(_.isNull(bid) || _.isObject(bid))) {\n      throw new Error(\"makeBid() should return a bid object or null, not \" + bid + \".\");\n    }\n    if (!bid) {\n      return null;\n    }\n    if (!((bid.gold != null) && _.isNumber(bid.gold) && bid.gold >= 0)) {\n      throw new Error(\"makeBid() should return a bid with 'gold' as an integer >= 0, not \" + (typeof bid.gold) + \" \" + bid.gold + \".\");\n    }\n    if ((bid.desiredTile != null) && !(_.isObject(bid.desiredTile) && bid.desiredTile.id && (bid.desiredTile.x != null) && (bid.desiredTile.y != null))) {\n      throw new Error(\"makeBid() should return a bid with 'desiredTile' as a tile object, not \" + (typeof bid.desiredTile) + \" \" + bid.desiredTile + \".\");\n    }\n    return null;\n  };\n\n  CrissCrossPlayer.prototype.getThangForNodeID = function(nodeID) {\n    return this.world.getThangByID(\"Tile \" + nodeID);\n  };\n\n  return CrissCrossPlayer;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "53a851cce618483605408d04",
	"watchers": [
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Accepted Driphter's Clojure patch.",
	"parent": "53e91f9c0cd04e000051f02b",
	"patches": [],
	"index": true,
	"official": false,
	"configSchema": {
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b7b747fc0f6d519000010",
			"majorVersion": 0
		}
	],
	"description": "This Component is a one-off supporting the captains in Criss-Cross.",
	"system": "misc",
	"searchStrings": "criss cross player c cr cri cris criss crissc crisscr crisscro crisscros crisscross crisscrossp crisscrosspl crisscrosspla crisscrossplay",
	"created": "2014-09-23T03:21:42.953Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 34,
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
		}
	]
}