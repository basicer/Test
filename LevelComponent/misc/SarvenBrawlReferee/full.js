{
	"_id": "553e6b899bdea5d00f1fd8fe",
	"searchStrings": "sarven brawl referee s sa sar sarv sarve sarven sarvenb sarvenbr sarvenbra sarvenbraw sarvenbrawl sarvenbrawlr sarvenbrawlre sarvenbrawlref sarvenbrawlrefe sarvenbrawlrefer",
	"index": true,
	"slug": "sarvenbrawlreferee",
	"name": "SarvenBrawlReferee",
	"js": "var SarvenBrawlReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nSarvenBrawlReferee = (function(_super) {\n  __extends(SarvenBrawlReferee, _super);\n\n  function SarvenBrawlReferee() {\n    _ref = SarvenBrawlReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  SarvenBrawlReferee.className = 'SarvenBrawlReferee';\n\n  SarvenBrawlReferee.prototype.setUpLevel = function() {\n    return this.patrolOrder = [[this.rectangles.left, this.points.NW], [this.rectangles.bottom, this.points.SW], [this.rectangles.right, this.points.SE], [this.rectangles.top, this.points.NE]];\n  };\n\n  SarvenBrawlReferee.prototype.controlOgres = function(ogres) {\n    var edgePoint, enemy, i, matched, nextEdgePoint, nextRect, ogre, rect, targetPos, _i, _j, _k, _len, _len1, _len2, _ref1, _ref2, _ref3, _results;\n    for (_i = 0, _len = ogres.length; _i < _len; _i++) {\n      ogre = ogres[_i];\n      if (ogre.action === 'idle' || ogre.targetPos) {\n        if (ogre.canSee(this.hero)) {\n          ogre.attack(this.hero);\n        } else if (ogre.action === 'idle' || ogre.distanceSquared(ogre.targetPos) < 25) {\n          matched = false;\n          _ref1 = this.patrolOrder;\n          for (i = _j = 0, _len1 = _ref1.length; _j < _len1; i = ++_j) {\n            _ref2 = _ref1[i], rect = _ref2[0], edgePoint = _ref2[1];\n            if (rect.containsPoint(ogre.pos)) {\n              matched = true;\n              break;\n            }\n          }\n          if (matched) {\n            _ref3 = this.patrolOrder[(i + 1) % this.patrolOrder.length], nextRect = _ref3[0], nextEdgePoint = _ref3[1];\n            targetPos = nextEdgePoint.copy().add({\n              x: this.world.rand.randf2(-8, 8),\n              y: this.world.rand.randf2(-8, 8)\n            });\n            ogre.move(targetPos);\n          } else {\n            ogre.move(this.hero.pos);\n          }\n        }\n      }\n    }\n    _results = [];\n    for (_k = 0, _len2 = ogres.length; _k < _len2; _k++) {\n      ogre = ogres[_k];\n      if (!((ogre.action === 'attack' && ogre.target === this.hero) || ogre.action === 'move')) {\n        continue;\n      }\n      enemy = ogre.getNearestEnemy();\n      if (enemy) {\n        _results.push(ogre.attack(enemy));\n      } else {\n        _results.push(void 0);\n      }\n    }\n    return _results;\n  };\n\n  return SarvenBrawlReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "548cf3c20ffdc235e80ef0d8",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "This Component makes the Thang oversee the Savern Brawl level.",
	"dependencies": [
		{
			"original": "52d9a6773cf02dcf26000dc4",
			"majorVersion": 0
		}
	],
	"commitMessage": "More better at attacking minions.",
	"parent": "553e61f19bdea5d00f1fd8ea",
	"created": "2015-04-27T17:02:01.613Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 5,
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