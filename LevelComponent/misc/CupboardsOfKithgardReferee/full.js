{
	"_id": "56816058f7e9a5e3883b8e3d",
	"searchStrings": "cupboards of kithgard referee c cu cup cupb cupbo cupboa cupboar cupboard cupboards cupboardso cupboardsof cupboardsofk cupboardsofki cupboardsofkit cupboardsofkith cupboardsofkithg cupboardsofkithga cupboardsofkithgar cupboardsofkithgard cupboardsofkithgardr cupboardsofkithgardre cupboardsofkithgardref cupboardsofkithgardrefe cupboardsofkithgardrefer",
	"index": true,
	"slug": "cupboardsofkithgardreferee",
	"name": "CupboardsOfKithgardReferee",
	"js": "var CupboardsOfKithgardReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCupboardsOfKithgardReferee = (function(_super) {\n  __extends(CupboardsOfKithgardReferee, _super);\n\n  function CupboardsOfKithgardReferee() {\n    _ref = CupboardsOfKithgardReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  CupboardsOfKithgardReferee.className = 'CupboardsOfKithgardReferee';\n\n  CupboardsOfKithgardReferee.prototype.chooseAction = function() {\n    var cupboard, _ref1;\n    if (!this.didSetUp) {\n      this.setUp();\n    }\n    cupboard = this.world.getThangByID('Cupboard');\n    if (cupboard.dead) {\n      if ((_ref1 = this.hero.snapPoints) != null) {\n        _ref1.pop();\n      }\n      this.world.setGoalState(\"injured-cupboard\", \"success\");\n    } else if (cupboard.health < cupboard.maxHealth) {\n      this.world.setGoalState(\"injured-cupboard\", \"failure\");\n    }\n    if (!this.skeletonActive) {\n      this.checkCupboard();\n    }\n    this.controlOgres();\n    if (this.skeletonActive) {\n      return this.controlSkeleton();\n    }\n  };\n\n  CupboardsOfKithgardReferee.prototype.setUp = function() {\n    var ogre, _i, _len, _ref1;\n    this.didSetUp = true;\n    this.skeletonActive = false;\n    _ref1 = this.world.thangs;\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      ogre = _ref1[_i];\n      if (ogre.spriteName === \"Ogre M\") {\n        ogre.sawEnemy = false;\n      }\n    }\n    this.ogreActivationTime = 1.5;\n    return this.hero.findsPaths = false;\n  };\n\n  CupboardsOfKithgardReferee.prototype.checkCupboard = function() {\n    var cupboard, skel;\n    cupboard = this.world.getThangByID('Cupboard');\n    if (cupboard.dead) {\n      cupboard.addActions({\n        name: 'open_empty',\n        cooldown: 9000\n      });\n      cupboard.setAction('open_empty');\n      cupboard.act();\n      if (!this.skeletonActive) {\n        skel = this.world.getThangByID('Kate');\n        skel.health = 500;\n        skel.maxHealth = 500;\n        skel.keepTrackedProperty(\"health\");\n        skel.keepTrackedProperty(\"maxHealth\");\n        skel.pos.x = 43;\n        skel.pos.y = 29;\n        skel.hasMoved = true;\n        skel.say('Masssssterrrrr...');\n        skel.setTargetPos({\n          x: 38,\n          y: 30\n        });\n        skel.setAction('move');\n        skel.act();\n        return this.skeletonActive = true;\n      }\n    }\n  };\n\n  CupboardsOfKithgardReferee.prototype.controlOgres = function() {\n    var enemy, offset, ogre, skel, _i, _len, _ref1, _results;\n    if (this.world.age > this.ogreActivationTime) {\n      offset = 0;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        ogre = _ref1[_i];\n        if (!(ogre.spriteName === \"Ogre M\" && ogre.exists && !ogre.dead)) {\n          continue;\n        }\n        ogre.commander = this;\n        enemy = ogre.getNearestEnemy();\n        if (this.skeletonActive) {\n          skel = this.world.getThangByID('Kate');\n          if (!skel.dead) {\n            enemy = skel;\n          }\n        }\n        if ((enemy != null) && ogre.canSee(enemy) || this.skeletonActive) {\n          ogre.stage = 1;\n          _results.push(ogre.attack(enemy));\n        } else {\n          if (!ogre.stage && ogre.distanceTo({\n            x: 74,\n            y: 50\n          }) > 1) {\n            _results.push(ogre.moveXY(74, 50));\n          } else if (!ogre.stage && ogre.distanceTo({\n            x: 74,\n            y: 50\n          }) <= 1) {\n            _results.push(ogre.stage = 1);\n          } else if ((ogre.stage != null) && ogre.stage === 1) {\n            _results.push(ogre.moveXY(14, 50));\n          } else {\n            _results.push(void 0);\n          }\n        }\n      }\n      return _results;\n    }\n  };\n\n  CupboardsOfKithgardReferee.prototype.controlSkeleton = function() {\n    var enemy, skeleton;\n    skeleton = this.world.getThangByID('Kate');\n    enemy = skeleton.getNearestEnemy();\n    if (enemy) {\n      skeleton.setTarget(enemy);\n      return skeleton.setAction('attack');\n    }\n  };\n\n  return CupboardsOfKithgardReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "54e0d3bdd4268954053a09af",
	"watchers": [
		"54b1773a75e3055205e5a449",
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "Cupboards of Kithgard Referee",
	"codeLanguage": "coffeescript",
	"dependencies": [
		{
			"original": "54977ce657e90bd1903dea72",
			"majorVersion": 0
		}
	],
	"commitMessage": "Don't modify snapPoints if hero doesn't move simply",
	"parent": "565f2066f076a887053936ad",
	"created": "2015-12-28T16:16:24.891Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 13,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "54b1773a75e3055205e5a449"
		},
		{
			"access": "read",
			"target": "public"
		}
	]
}