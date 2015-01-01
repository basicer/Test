{
	"_id": "54a5c94132e0e8b3d4d04c66",
	"slug": "oddsandstormreferee",
	"searchStrings": "odd sandstorm referee o od odd odds oddsa oddsan oddsand oddsands oddsandst oddsandsto oddsandstor oddsandstorm oddsandstormr oddsandstormre oddsandstormref oddsandstormrefe oddsandstormrefer",
	"name": "OddSandstormReferee",
	"js": "var OddSandstormReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nOddSandstormReferee = (function(_super) {\n  __extends(OddSandstormReferee, _super);\n\n  function OddSandstormReferee() {\n    _ref = OddSandstormReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  OddSandstormReferee.className = 'OddSandstormReferee';\n\n  OddSandstormReferee.prototype.chooseAction = function() {\n    var fn, _i, _len, _ref1, _results;\n    _ref1 = this.oddSandstormFriends;\n    _results = [];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      fn = _ref1[_i];\n      _results.push(this.controlFriend(fn));\n    }\n    return _results;\n  };\n\n  OddSandstormReferee.prototype.setUpLevel = function() {\n    this.oddSandstormFriends = ['Tabitha', 'Max', 'Todd'];\n    this.victoryOasis = false;\n    return this.yakRegions = {\n      'Arngotho': this.rectangles.yakNW,\n      'Randall': this.rectangles.yakNE,\n      'Falthror': this.rectangles.yakSW,\n      'Langthok': this.rectangles.yakSE\n    };\n  };\n\n  OddSandstormReferee.prototype.controlFriend = function(fn) {\n    var friend;\n    if (!(this.deadOgres() >= 3)) {\n      return;\n    }\n    if (this.hero.health <= 0) {\n      return;\n    }\n    friend = this.world.getThangByID(fn);\n    if (friend.health <= 0) {\n      return;\n    }\n    if (friend.distanceTo(this.hero.pos) > 3) {\n      return friend.move({\n        x: this.hero.pos.x,\n        y: this.hero.pos.y - 2\n      });\n    }\n  };\n\n  OddSandstormReferee.prototype.deadOgres = function() {\n    var dogres, o;\n    dogres = (function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        o = _ref1[_i];\n        if (o.team === 'ogres' && o.health <= 0) {\n          _results.push(o);\n        }\n      }\n      return _results;\n    }).call(this);\n    return dogres.length;\n  };\n\n  OddSandstormReferee.prototype.controlNeutral = function(yaks) {\n    var region, y, _i, _len, _ref1, _results;\n    if (!this.yakRegions) {\n      return;\n    }\n    _results = [];\n    for (_i = 0, _len = yaks.length; _i < _len; _i++) {\n      y = yaks[_i];\n      if (y.action === 'attack' || y.enraged) {\n        y.enraged = true;\n        continue;\n      }\n      if (!y.movePoint) {\n        region = (_ref1 = this.yakRegions[y.id]) != null ? _ref1 : this.rectangles.yakCenter;\n        y.movePoint = this.pickPointFromRegions([region]);\n      }\n      y.move(y.movePoint);\n      if (y.distanceTo(y.movePoint) < 4) {\n        _results.push(y.movePoint = null);\n      } else {\n        _results.push(void 0);\n      }\n    }\n    return _results;\n  };\n\n  return OddSandstormReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "54a3105ea85d005f090253e0",
	"watchers": [
		"5446cac8a887c47508b6f945",
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Reduced propensity of peasants to push the pugilist to the pole.",
	"index": true,
	"parent": "54a4386e59c1889ef45a59b7",
	"created": "2015-01-01T22:25:05.740Z",
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