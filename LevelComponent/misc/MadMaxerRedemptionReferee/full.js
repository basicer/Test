{
	"_id": "5537e902428ddac5686fd03f",
	"searchStrings": "mad maxer redemption referee m ma mad madm madma madmax madmaxe madmaxer madmaxerr madmaxerre madmaxerred madmaxerrede madmaxerredem madmaxerredemp madmaxerredempt madmaxerredempti madmaxerredemptio madmaxerredemption madmaxerredemptionr madmaxerredemptionre madmaxerredemptionref madmaxerredemptionrefe madmaxerredemptionrefer",
	"index": true,
	"slug": "madmaxerredemptionreferee",
	"name": "MadMaxerRedemptionReferee",
	"js": "var MadMaxerRedemptionReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nMadMaxerRedemptionReferee = (function(_super) {\n  __extends(MadMaxerRedemptionReferee, _super);\n\n  function MadMaxerRedemptionReferee() {\n    _ref = MadMaxerRedemptionReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  MadMaxerRedemptionReferee.className = 'MadMaxerRedemptionReferee';\n\n  MadMaxerRedemptionReferee.prototype.chooseAction = function() {\n    return null;\n  };\n\n  MadMaxerRedemptionReferee.prototype.setUpLevel = function() {\n    var a, archer, h, i, j, pea, t, _i, _j, _k, _l, _len, _ref1, _ref2, _ref3, _results;\n    this.hollaback = {};\n    this.pairs = [\n      {\n        \"peasant\": \"Merek\",\n        \"ogre\": \"Dosha\"\n      }, {\n        \"peasant\": \"Bernadette\",\n        \"ogre\": \"Leerer\"\n      }, {\n        \"peasant\": \"Paps\",\n        \"ogre\": \"Ursa\"\n      }, {\n        \"peasant\": \"Ellyn\",\n        \"ogre\": \"Yugark\"\n      }\n    ];\n    for (h = _i = 0; _i < 10; h = ++_i) {\n      for (i = _j = _ref1 = this.pairs.length - 1; _ref1 <= 1 ? _j <= 1 : _j >= 1; i = _ref1 <= 1 ? ++_j : --_j) {\n        j = this.world.rand.rand(i - 1);\n        t = this.pairs[j];\n        this.pairs[j] = this.pairs[i];\n        this.pairs[i] = t;\n      }\n    }\n    for (i = _k = 0, _ref2 = this.pairs.length; 0 <= _ref2 ? _k < _ref2 : _k > _ref2; i = 0 <= _ref2 ? ++_k : --_k) {\n      pea = this.world.getThangByID(this.pairs[i].peasant);\n      pea.maxHealth *= this.minPeasantHealthFactor + this.incrPeasantHealthFactor * i;\n      pea.health = pea.maxHealth;\n      pea.scaleFactor *= 0.7 + 0.3 * i;\n      pea.addTrackedProperties(['maxHealth', 'number']);\n      pea.keepTrackedProperty('maxHealth');\n      pea.keepTrackedProperty('scaleFactor');\n      pea.hollaback = this.hollaback;\n      this.hollaback[this.pairs[i].peasant] = false;\n    }\n    _ref3 = [\"Mirana\", \"Oliver\"];\n    _results = [];\n    for (_l = 0, _len = _ref3.length; _l < _len; _l++) {\n      a = _ref3[_l];\n      archer = this.world.getThangByID(a);\n      if (archer) {\n        _results.push(archer.hidden = true);\n      } else {\n        _results.push(void 0);\n      }\n    }\n    return _results;\n  };\n\n  MadMaxerRedemptionReferee.prototype.controlHumans = function(friends) {\n    var f, hideme, o, ogre, pair, _i, _j, _len, _len1, _ref1, _results;\n    _results = [];\n    for (_i = 0, _len = friends.length; _i < _len; _i++) {\n      f = friends[_i];\n      if (!this.hollaback[f.id]) {\n        continue;\n      }\n      if (!f.homePoint) {\n        f.homePoint = this.pickPointFromRegions([this.rectangles.homeZone]);\n      } else if (f.distanceTo(f.homePoint) > 4) {\n        f.move(f.homePoint);\n      } else {\n        f.homePoint = null;\n      }\n      if (this.rectangles.homeZone.containsPoint(f.pos) && !f.hidden) {\n        hideme = false;\n        o = \"\";\n        _ref1 = this.pairs;\n        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {\n          pair = _ref1[_j];\n          if (pair.peasant === f.id) {\n            o = pair.ogre;\n          }\n        }\n        if (o !== \"\") {\n          ogre = this.world.getThangByID(o);\n          if (ogre && ogre.health <= 0) {\n            hideme = true;\n          }\n        }\n        if (hideme) {\n          _results.push(f.hidden = true);\n        } else {\n          _results.push(void 0);\n        }\n      } else {\n        _results.push(void 0);\n      }\n    }\n    return _results;\n  };\n\n  MadMaxerRedemptionReferee.prototype.controlOgres = function(ogres) {\n    var minh, o, p, pair, pname, weakest, _i, _j, _k, _len, _len1, _len2, _ref1, _ref2, _results;\n    _results = [];\n    for (_i = 0, _len = ogres.length; _i < _len; _i++) {\n      o = ogres[_i];\n      if (o.pos.x < this.points.homeThreshold.x) {\n        minh = 9999;\n        weakest = null;\n        _ref1 = this.world.thangs;\n        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {\n          p = _ref1[_j];\n          if (p.exists && p.team === 'humans' && p.health > 0) {\n            if (p.health < minh) {\n              minh = p.health;\n              weakest = p;\n            }\n          }\n        }\n        if (weakest && o.target !== weakest) {\n          _results.push(o.attack(weakest.id));\n        } else {\n          _results.push(void 0);\n        }\n      } else {\n        pname = \"\";\n        _ref2 = this.pairs;\n        for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {\n          pair = _ref2[_k];\n          if (pair.ogre === o.id) {\n            pname = pair.peasant;\n          }\n        }\n        if (pname !== \"\") {\n          p = this.world.getThangByID(pname);\n          if (p.exists && p.health > 0 && o.target !== p) {\n            _results.push(o.attack(pname));\n          } else {\n            _results.push(void 0);\n          }\n        } else {\n          _results.push(void 0);\n        }\n      }\n    }\n    return _results;\n  };\n\n  return MadMaxerRedemptionReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "54d954983664c6520598c916",
	"watchers": [
		"5446cac8a887c47508b6f945",
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Don't make peasants flee, since that actually moves them now.",
	"parent": "54dabac3fd2d71d1d2ca3030",
	"configSchema": {
		"additionalProperties": false,
		"properties": {
			"incrPeasantHealthFactor": {
				"type": "number",
				"description": "Multiplier increment for the health of each successive peasant.",
				"default": 0.5
			},
			"minPeasantHealthFactor": {
				"type": "number",
				"description": "Base multiplier for peasant health.",
				"default": 1
			}
		}
	},
	"created": "2015-04-22T18:31:30.270Z",
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