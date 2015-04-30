{
	"_id": "55424db53407c47418d0aa23",
	"searchStrings": "harrowland referee h ha har harr harro harrow harrowl harrowla harrowlan harrowland harrowlandr harrowlandre harrowlandref harrowlandrefe harrowlandrefer",
	"index": true,
	"slug": "harrowlandreferee",
	"name": "HarrowlandReferee",
	"js": "var HarrowlandReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };\n\nHarrowlandReferee = (function(_super) {\n  __extends(HarrowlandReferee, _super);\n\n  function HarrowlandReferee() {\n    _ref = HarrowlandReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  HarrowlandReferee.className = 'HarrowlandReferee';\n\n  HarrowlandReferee.prototype.chooseAction = function() {\n    if (this.world.age > 0 && !this.didPostSetUp) {\n      return this.postSetUp();\n    }\n  };\n\n  HarrowlandReferee.prototype.postSetUp = function() {\n    var f, me, meMaxX, mw, mwMinX, np, wave, yak, _i, _j, _k, _len, _len1, _len2, _ref1, _ref2, _ref3, _results;\n    this.didPostSetUp = true;\n    _ref1 = this.world.thangs;\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      yak = _ref1[_i];\n      if (yak.type === 'sand-yak') {\n        yak.isAttackable = false;\n      }\n    }\n    f = this.calcMinionWavePower();\n    _ref2 = this.waves;\n    for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {\n      wave = _ref2[_j];\n      if (wave.name !== 'minionsWest') {\n        continue;\n      }\n      wave.scaledPower *= f;\n    }\n    this.spawnWaveNamed('minionsWest');\n    _ref3 = this.built;\n    _results = [];\n    for (_k = 0, _len2 = _ref3.length; _k < _len2; _k++) {\n      mw = _ref3[_k];\n      if (!(mw.type !== 'sand-yak')) {\n        continue;\n      }\n      mwMinX = this.rectangles.minionsWest.vertices()[0].x;\n      meMaxX = this.rectangles.minionsEast.vertices()[2].x;\n      np = new Vector(meMaxX - (mw.pos.x - mwMinX), mw.pos.y);\n      _results.push(me = this.instabuild(this.getEastBuildType(mw.type), np.x, np.y));\n    }\n    return _results;\n  };\n\n  HarrowlandReferee.prototype.getEastBuildType = function(otype) {\n    if (__indexOf.call(this.world.getSystem('Existence').buildTypePower, otype) < 0) {\n      return otype + ['-f-east', '-m-east'][this.world.rand.rand(2)];\n    }\n    return otype;\n  };\n\n  HarrowlandReferee.prototype.calcMinionWavePower = function() {\n    var h0, h1, havg;\n    h0 = this.hero.maxHealth;\n    h1 = this.hero2.maxHealth;\n    havg = (h0 + h1) / 2;\n    return Math.max(1.0, havg / 500);\n  };\n\n  HarrowlandReferee.prototype.controlNeutral = function(yaks) {\n    var e, yak, yy, _i, _len;\n    for (_i = 0, _len = yaks.length; _i < _len; _i++) {\n      yak = yaks[_i];\n      if (yak.action === 'attack') {\n        continue;\n      }\n      e = yak.findNearestEnemy();\n      if (e && yak.distanceTo(e) < 5) {\n        yak.attack(e);\n        return;\n      }\n      if (!yak.wanderPoint) {\n        yy = yak.pos.y > 32 ? 20 : 48;\n        yak.wanderPoint = new Vector(yak.pos.x, yy);\n      }\n      if (yak.wanderPoint) {\n        yak.move(yak.wanderPoint);\n      }\n      if (yak.distanceTo(yak.wanderPoint) < 5) {\n        yak.wanderPoint = null;\n      }\n    }\n  };\n\n  return HarrowlandReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "54ecd16c835e1e50051d50ec",
	"watchers": [
		"5446cac8a887c47508b6f945",
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Yaks don't attack enemies what don't exist.",
	"parent": "54ef6ea4316c6685050cfaf0",
	"created": "2015-04-30T15:43:49.244Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 7,
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