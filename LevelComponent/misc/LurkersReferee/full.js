{
	"_id": "55c2919d3767fd3435eb44a4",
	"searchStrings": "lurkers referee l lu lur lurk lurke lurker lurkers lurkersr lurkersre lurkersref lurkersrefe lurkersrefer",
	"index": true,
	"slug": "lurkersreferee",
	"name": "LurkersReferee",
	"js": "var LurkersReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nLurkersReferee = (function(_super) {\n  __extends(LurkersReferee, _super);\n\n  function LurkersReferee() {\n    _ref = LurkersReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  LurkersReferee.className = 'LurkersReferee';\n\n  LurkersReferee.prototype.setUpLevel = function() {\n    this.world.getThangByID('Ghuk').wanderRegion = this.rectangles.GhukWander;\n    this.world.getThangByID('Turann').wanderRegion = this.rectangles.TurannWander;\n    this.world.getThangByID('Nazgareth').wanderRegion = this.rectangles.NazgarethWander;\n    this.world.getThangByID('Randall').wanderRegion = this.rectangles.RandallWander;\n    this.world.getThangByID('Langthok').wanderRegion = this.rectangles.LangthokWander;\n    return this.world.getThangByID('Arngotho').wanderRegion = this.rectangles.ArngothoWander;\n  };\n\n  LurkersReferee.prototype.controlOgres = function(ogres) {\n    var e, o, _i, _j, _len, _len1, _ref1, _results;\n    for (_i = 0, _len = ogres.length; _i < _len; _i++) {\n      o = ogres[_i];\n      e = o.findNearestEnemy();\n      if (e && e.team === 'humans' && (o.distanceTo(e) < 8 || o.health < o.maxHealth)) {\n        o.attack(e);\n        this.cancelSleep(o);\n      } else {\n        o.actionHeats.all = 2 * this.world.dt;\n        this.cancelSleep(o);\n        o.addEffect({\n          name: 'sleep',\n          duration: this.world.dt,\n          reverts: true,\n          setTo: true,\n          targetProperty: 'asleep'\n        });\n      }\n    }\n    _ref1 = this.world.thangs;\n    _results = [];\n    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {\n      o = _ref1[_j];\n      if (o.team === 'ogres' && o.type === 'shaman' && o.dead) {\n        _results.push(this.cancelSleep(o));\n      }\n    }\n    return _results;\n  };\n\n  LurkersReferee.prototype.cancelSleep = function(ogre) {\n    var effect, _i, _len, _ref1;\n    _ref1 = ogre.effects;\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      effect = _ref1[_i];\n      if (effect.name === 'sleep') {\n        effect.timeSinceStart = 9001;\n      }\n    }\n    return ogre.updateEffects();\n  };\n\n  LurkersReferee.prototype.controlNeutral = function(yaks) {\n    var y, _i, _len, _results;\n    _results = [];\n    for (_i = 0, _len = yaks.length; _i < _len; _i++) {\n      y = yaks[_i];\n      if (y.action === 'attack' || y.enraged) {\n        y.enraged = true;\n        continue;\n      }\n      _results.push(this.doWander(y));\n    }\n    return _results;\n  };\n\n  LurkersReferee.prototype.doWander = function(mob) {\n    if (!mob.wanderRegion) {\n      return;\n    }\n    if (!mob.wanderPoint) {\n      mob.wanderPoint = this.pickPointFromRegions([mob.wanderRegion]);\n    }\n    mob.move(mob.wanderPoint);\n    if (mob.distanceTo(mob.wanderPoint) < 4) {\n      return mob.wanderPoint = null;\n    }\n  };\n\n  return LurkersReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "54aadb0f68e9113f0583ede3",
	"watchers": [
		"5446cac8a887c47508b6f945",
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Using sleep mark.",
	"parent": "54ab50855f31a51e0b867e6b",
	"created": "2015-08-05T22:43:41.569Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 3,
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