{
	"_id": "552ed96e7f6644620e4e6053",
	"slug": "sarvensaviorreferee",
	"searchStrings": "sarven savior referee s sa sar sarv sarve sarven sarvens sarvensa sarvensav sarvensavi sarvensavio sarvensavior sarvensaviorr sarvensaviorre sarvensaviorref sarvensaviorrefe sarvensaviorrefer",
	"name": "SarvenSaviorReferee",
	"js": "var SarvenSaviorReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nSarvenSaviorReferee = (function(_super) {\n  __extends(SarvenSaviorReferee, _super);\n\n  function SarvenSaviorReferee() {\n    _ref = SarvenSaviorReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  SarvenSaviorReferee.className = 'SarvenSaviorReferee';\n\n  SarvenSaviorReferee.prototype.chooseAction = function() {\n    var fn, _i, _len, _ref1;\n    _ref1 = this.friends;\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      fn = _ref1[_i];\n      this.controlFriend(this.world.getThangByID(fn));\n    }\n    return this.checkVictory();\n  };\n\n  SarvenSaviorReferee.prototype.setUpLevel = function() {\n    var f, _i, _len, _ref1, _results;\n    this.didSpawn = false;\n    this.victoryFriends = false;\n    this.victoryFence = false;\n    this.friendHomeDistance = 5;\n    this.ogreXFudge = 5;\n    this.friends = ['Joan', 'Ronan', 'Nikita', 'Augustus'];\n    this.hollaback = {};\n    _ref1 = this.friends;\n    _results = [];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      f = _ref1[_i];\n      this.world.getThangByID(f).hollaback = this.hollaback;\n      _results.push(this.hollaback[f] = false);\n    }\n    return _results;\n  };\n\n  SarvenSaviorReferee.prototype.controlFriend = function(friend) {\n    var a, d, hpx, hpy;\n    if (this.hollaback[friend.id]) {\n      if (!friend.homePoint) {\n        a = this.world.rand.randf() * 2 * Math.PI;\n        d = this.friendHomeDistance;\n        hpx = this.points.friendHome.x + d * Math.cos(a);\n        hpy = this.points.friendHome.y + d * Math.sin(a);\n        friend.homePoint = {\n          x: hpx,\n          y: hpy\n        };\n      }\n      return friend.moveXY(friend.homePoint.x, friend.homePoint.y);\n    }\n  };\n\n  SarvenSaviorReferee.prototype.checkVictory = function() {\n    var f, friends, friendsAtHome, o, strayOgres;\n    if (this.victoryFriends && this.victoryFence) {\n      return;\n    }\n    if (!(this.world.age > 5)) {\n      return;\n    }\n    if (!this.victoryFriends) {\n      friends = (function() {\n        var _i, _len, _ref1, _results;\n        _ref1 = this.friends;\n        _results = [];\n        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n          f = _ref1[_i];\n          _results.push(this.world.getThangByID(f));\n        }\n        return _results;\n      }).call(this);\n      friendsAtHome = (function() {\n        var _i, _len, _results;\n        _results = [];\n        for (_i = 0, _len = friends.length; _i < _len; _i++) {\n          f = friends[_i];\n          if (f.pos.x < this.points.fenceSpot.x) {\n            _results.push(f);\n          }\n        }\n        return _results;\n      }).call(this);\n      if (friendsAtHome.length >= 4) {\n        this.victoryFriends = true;\n        this.setGoalState('friends-home', 'success');\n      }\n    }\n    if (!(this.world.age > 12)) {\n      return;\n    }\n    if (!this.victoryFence) {\n      strayOgres = (function() {\n        var _i, _len, _ref1, _results;\n        _ref1 = this.world.thangs;\n        _results = [];\n        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n          o = _ref1[_i];\n          if (o.team === 'ogres' && o.pos.x < this.points.fenceSpot.x - this.ogreXFudge) {\n            _results.push(o);\n          }\n        }\n        return _results;\n      }).call(this);\n      if (strayOgres.length === 0 && this.hero.pos.x < this.points.fenceSpot.x + this.ogreXFudge && this.world.getThangByID('Fence Wall')) {\n        this.victoryFence = true;\n        this.setGoalState('ogres-fenced', 'success');\n      }\n    }\n    if (this.victoryFriends && this.victoryFence) {\n      return this.world.endWorld(true, 1);\n    }\n  };\n\n  return SarvenSaviorReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "54a1dfb72f3b193c05f8920b",
	"watchers": [
		"5446cac8a887c47508b6f945",
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Changed victory conditions to end the world sooner and check for having built a fence that stopped some ogres.",
	"index": true,
	"parent": "54a398941515e23e05b96436",
	"description": "This Component makes the Thang o'ermaster the Sarven Savior level.",
	"dependencies": [
		{
			"original": "54977ce657e90bd1903dea72",
			"majorVersion": 0
		}
	],
	"created": "2015-04-15T21:34:38.414Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 5,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "5446cac8a887c47508b6f945"
		},
		{
			"access": "read",
			"target": "public"
		}
	]
}