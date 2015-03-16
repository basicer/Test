{
	"_id": "55073dd8adb325d1c6c356f7",
	"searchStrings": "cavern referee c ca cav cave caver cavern cavernr cavernre cavernref cavernrefe cavernrefer",
	"index": true,
	"slug": "cavernreferee",
	"name": "CavernReferee",
	"js": "var CavernReferee, Rectangle, Vector, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nRectangle = require('lib/world/rectangle');\n\nVector = require('lib/world/vector');\n\nCavernReferee = (function(_super) {\n  __extends(CavernReferee, _super);\n\n  function CavernReferee() {\n    _ref = CavernReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  CavernReferee.className = 'CavernReferee';\n\n  CavernReferee.prototype.setUp = function() {\n    var hero, hero2, posX, posX2, posY, spikes, _i, _len, _ref1, _results;\n    hero = this.world.getThangByID('Hero Placeholder');\n    posX = 30 + this.world.rand.randf() * 40;\n    posY = 31 + this.world.rand.randf() * 75;\n    hero.pos = new Vector(posX, posY);\n    hero.hasMoved = true;\n    if (hero.teleport == null) {\n      hero.teleport = function() {};\n    }\n    hero2 = this.world.getThangByID('Hero Placeholder 1');\n    posX2 = 160 - posX;\n    hero2.pos = new Vector(posX2, posY);\n    hero2.hasMoved = true;\n    if (hero2.teleport == null) {\n      hero2.teleport = function() {};\n    }\n    this.didSetUp = true;\n    _ref1 = this.findHazards();\n    _results = [];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      spikes = _ref1[_i];\n      if (!(spikes.type === 'spike-trap')) {\n        continue;\n      }\n      spikes.attackDamage = 500;\n      spikes.attackRange = 4;\n      _results.push(spikes.attackMass = 1000);\n    }\n    return _results;\n  };\n\n  CavernReferee.prototype.chooseAction = function() {\n    var buildType, built, built2, fence, fences, hero, heroID, home, minion, n, r, shouldHaveSpawned, spawnChance, spawnChances, spawnRate, t, type, _i, _j, _k, _l, _len, _len1, _len2, _len3, _ref1, _ref2, _ref3, _results;\n    if (!this.didSetUp) {\n      this.setUp();\n    }\n    spawnRate = 0.333 + this.world.age / 120;\n    shouldHaveSpawned = 3 + spawnRate * this.world.age;\n    if (shouldHaveSpawned > this.built.length / 2) {\n      spawnChances = [[0, 'ogre-munchkin-f'], [15, 'ogre-munchkin-m'], [30, 'ogre-thrower'], [49, 'ogre-m'], [58, 'ogre-f'], [65, 'health-potion-large'], [67, 'ogre-fangrider'], [76, 'ogre-shaman'], [85, 'ogre-brawler'], [90, 'bear-trap'], [96, 'ogre-headhunter']];\n      r = this.world.rand.randf();\n      n = 100 * Math.pow(r, 85 / (this.world.age + 1));\n      for (_i = 0, _len = spawnChances.length; _i < _len; _i++) {\n        _ref1 = spawnChances[_i], spawnChance = _ref1[0], type = _ref1[1];\n        if (n >= spawnChance) {\n          buildType = type;\n        } else {\n          break;\n        }\n      }\n      fences = (function() {\n        var _j, _len1, _ref2, _results;\n        _ref2 = this.world.thangs;\n        _results = [];\n        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {\n          t = _ref2[_j];\n          if (t.spriteName === 'Fence Wall' && t.exists) {\n            _results.push(t);\n          }\n        }\n        return _results;\n      }).call(this);\n      for (_j = 0, _len1 = fences.length; _j < _len1; _j++) {\n        fence = fences[_j];\n        fence.stateless = false;\n        fence.setExists(false);\n        if (typeof this.say === \"function\") {\n          this.say('Begone, fence!');\n        }\n      }\n      this.build(buildType);\n      built = this.performBuild();\n      built.team = 'neutral';\n      built.pos.x = 30 + this.world.rand.randf() * 40;\n      built.pos.y = 31 + this.world.rand.randf() * 75;\n      if (built.move) {\n        built.hasMoved = true;\n      } else {\n        built.addTrackedProperties(['pos', 'Vector']);\n        built.keepTrackedProperty('pos');\n      }\n      this.build(buildType);\n      built2 = this.performBuild();\n      built2.team = 'neutral';\n      built2.pos.x = 160 - built.pos.x;\n      built2.pos.y = built.pos.y;\n      built2.hasMoved = true;\n      if (built2.move) {\n        built2.hasMoved = true;\n      } else {\n        built2.addTrackedProperties(['pos', 'Vector']);\n        built2.keepTrackedProperty('pos');\n      }\n    }\n    _ref2 = ['Hero Placeholder', 'Hero Placeholder 1'];\n    for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {\n      heroID = _ref2[_k];\n      hero = this.world.getThangByID(heroID);\n      if (hero.sayMessage === \"You'll never defeat me!\" && !hero.nerfed) {\n        hero.nerfed = true;\n        hero.health = hero.maxHealth = hero.maxHealth * 0.75;\n        hero.maxSpeed *= 0.75;\n      }\n      if (this.westRect == null) {\n        this.westRect = new Rectangle(50, 66, 44, 84);\n      }\n      if (this.eastRect == null) {\n        this.eastRect = new Rectangle(110, 66, 44, 84);\n      }\n      if (this.midRect == null) {\n        this.midRect = new Rectangle(79, 69, 18, 26);\n      }\n      if (!_.find([this.westRect, this.eastRect, this.midRect], (function(r) {\n        return r.containsPoint(hero.pos);\n      }))) {\n        this.say('Back where you belong!');\n        home = heroID === 'Hero Placeholder' ? this.westRect : this.eastRect;\n        hero.pos = home.getPos();\n      }\n    }\n    _ref3 = this.built;\n    _results = [];\n    for (_l = 0, _len3 = _ref3.length; _l < _len3; _l++) {\n      minion = _ref3[_l];\n      if (!(minion.action === 'idle' && minion.health > 0)) {\n        continue;\n      }\n      hero = this.world.getThangByID((minion.pos.x < 80 ? 'Hero Placeholder' : 'Hero Placeholder 1'));\n      _results.push(minion.attack(hero));\n    }\n    return _results;\n  };\n\n  return CavernReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "54443c52645c0c0000c32983",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274",
		"539b46304e8e233a056a690d"
	],
	"__v": 0,
	"commitMessage": "No fences!",
	"parent": "5500a7038e43b87b053b0250",
	"patches": [],
	"created": "2015-03-16T20:32:24.816Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 15,
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