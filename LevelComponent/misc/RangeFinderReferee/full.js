{
	"_id": "56cf9d9b3b80593600a6cc40",
	"searchStrings": "range finder referee r ra ran rang range rangef rangefi rangefin rangefind rangefinde rangefinder rangefinderr rangefinderre rangefinderref rangefinderrefe rangefinderrefer",
	"index": true,
	"slug": "rangefinderreferee",
	"name": "RangeFinderReferee",
	"js": "var RangeFinderReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nRangeFinderReferee = (function(_super) {\n  __extends(RangeFinderReferee, _super);\n\n  function RangeFinderReferee() {\n    _ref = RangeFinderReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  RangeFinderReferee.className = 'RangeFinderReferee';\n\n  RangeFinderReferee.prototype.chooseAction = function() {\n    var t, _i, _len, _ref1;\n    if (!this.didSetUp) {\n      this.setUp();\n    }\n    _ref1 = this.world.thangs;\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      t = _ref1[_i];\n      if (t.spriteName === 'Shell') {\n        t.blastRadius = 10;\n      }\n    }\n    return this.fireWhenReady();\n  };\n\n  RangeFinderReferee.prototype.setUpLevel = function() {\n    this.hero.dSay = this.hero.say;\n    return this.hero.say = function(msg, data, _excess) {\n      if (typeof msg === 'number') {\n        msg = msg.toFixed(2);\n      }\n      return this.dSay(msg, data, _excess);\n    };\n  };\n\n  RangeFinderReferee.prototype.setUp = function() {\n    var artillery;\n    this.didSetUp = true;\n    this.targets = ['Gort', 'Smasher', 'Charles', 'Gorgnub'];\n    artillery = this.world.getThangByID('Artillery');\n    return artillery.fireAtDistance = [];\n  };\n\n  RangeFinderReferee.prototype.fireWhenReady = function() {\n    var artillery, d, distance, enemy, enemyId, fired, hero, _i, _len, _ref1;\n    artillery = this.world.getThangByID('Artillery');\n    hero = this.world.getThangByID('Hero Placeholder');\n    if (artillery.fireAtDistance.length > 0) {\n      console.log('length', artillery.fireAtDistance.length, ' next', artillery.fireAtDistance[0]);\n      if (!artillery.canAct('attack')) {\n        artillery.say('Reloading...');\n        return;\n      }\n      distance = parseInt(artillery.fireAtDistance[0]);\n      fired = false;\n      _ref1 = this.targets;\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        enemyId = _ref1[_i];\n        enemy = this.world.getThangByID(enemyId);\n        if (enemy.health < 0 || enemy.dead) {\n          continue;\n        }\n        d = Math.floor(hero.distanceTo(enemy));\n        if (d === distance) {\n          console.log('CATSYNC: firing at distance ', d, ' target ', enemy.name);\n          artillery.attackXY(enemy.pos.x, enemy.pos.y);\n          artillery.fireAtDistance.shift();\n          fired = true;\n        }\n      }\n      if (!fired) {\n        artillery.attackXY(artillery.pos.x + distance, artillery.pos.y);\n        return artillery.fireAtDistance.shift();\n      }\n    } else {\n      return artillery.setAction('idle');\n    }\n  };\n\n  return RangeFinderReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "537d01f484c54c6e05c05989",
	"original": "54c6d4673e62e3210d5054fd",
	"watchers": [
		"54b1773a75e3055205e5a449",
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "This component makes the Artillery fire at a target at the specified distance.",
	"codeLanguage": "coffeescript",
	"commitMessage": "toFixed-es any numbers the hero says.",
	"parent": "54c7e8bfd517a56707ad1860",
	"dependencies": [
		{
			"original": "54977ce657e90bd1903dea72",
			"majorVersion": 0
		}
	],
	"created": "2016-02-26T00:34:35.737Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 6,
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