{
	"_id": "574db26c6c8e2e240013c88b",
	"searchStrings": "munchkin swarm referee m mu mun munc munch munchk munchki munchkin munchkins munchkinsw munchkinswa munchkinswar munchkinswarm munchkinswarmr munchkinswarmre munchkinswarmref munchkinswarmrefe munchkinswarmrefer",
	"index": true,
	"slug": "munchkinswarmreferee",
	"name": "MunchkinSwarmReferee",
	"js": "var MunchkinSwarmReferee, Vector, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nVector = require('lib/world/vector');\n\nMunchkinSwarmReferee = (function(_super) {\n  __extends(MunchkinSwarmReferee, _super);\n\n  function MunchkinSwarmReferee() {\n    _ref = MunchkinSwarmReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  MunchkinSwarmReferee.className = 'MunchkinSwarmReferee';\n\n  MunchkinSwarmReferee.prototype.chooseAction = function() {\n    var brack, buildType, built, hero, living, shouldHaveSpawned, t, wave, _i, _j, _k, _len, _len1, _len2, _results, _results1, _results2;\n    if (!this.didSetup) {\n      this.setup();\n    }\n    shouldHaveSpawned = this.world.age * 0.5 - 1;\n    wave = Math.max(0, Math.floor(this.world.age / 12));\n    shouldHaveSpawned += 5 * wave;\n    if (shouldHaveSpawned > this.built.length && this.world.age < 40) {\n      buildType = this.world.rand.randf() < 0.5 ? 'ogre-munchkin-m' : 'ogre-munchkin-f';\n      this.build(buildType);\n      built = this.performBuild();\n      built.pos.x = 40;\n      built.pos.y = 36;\n      while (built.pos.distance({\n          x: 40,\n          y: 36\n        }) < 15) {\n        built.pos.x = 8 + this.world.rand.randf() * 64;\n        built.pos.y = 8 + this.world.rand.randf() * 52;\n      }\n      built.hasMoved = true;\n    }\n    living = (function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.built;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.health > 0) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this);\n    brack = this.world.getThangByID(\"Brack\");\n    if (brack.health > 0) {\n      living.push(brack);\n    }\n    hero = this.world.getThangByID('Hero Placeholder');\n    if (hero.distance({\n      x: 40,\n      y: 36\n    }) > 10) {\n      _results = [];\n      for (_i = 0, _len = living.length; _i < _len; _i++) {\n        t = living[_i];\n        _results.push(this.orderAttack(t));\n      }\n      return _results;\n    } else if (living.length < 13) {\n      _results1 = [];\n      for (_j = 0, _len1 = living.length; _j < _len1; _j++) {\n        t = living[_j];\n        _results1.push(this.orderEvasion(t, living.length));\n      }\n      return _results1;\n    } else {\n      _results2 = [];\n      for (_k = 0, _len2 = living.length; _k < _len2; _k++) {\n        t = living[_k];\n        _results2.push(this.orderAttack(t));\n      }\n      return _results2;\n    }\n  };\n\n  MunchkinSwarmReferee.prototype.setup = function() {\n    var hero;\n    this.didSetup = true;\n    hero = this.world.getThangByID('Hero Placeholder');\n    return hero.seesThroughWalls = true;\n  };\n\n  MunchkinSwarmReferee.prototype.orderEvasion = function(thang, livingCount) {\n    var awayFromHero, hero;\n    if (thang.hasAttackOrders && livingCount > 5) {\n      return;\n    }\n    hero = this.world.getThangByID('Hero Placeholder');\n    awayFromHero = hero.pos.copy().add(thang.pos.copy().subtract(hero.pos).normalize().multiply(15));\n    awayFromHero.x += 2 * Math.cos(this.world.age);\n    awayFromHero.y += 2 * Math.sin(this.world.age);\n    return thang.move(awayFromHero);\n  };\n\n  MunchkinSwarmReferee.prototype.orderAttack = function(thang) {\n    var hero;\n    thang.hasAttackOrders = true;\n    hero = this.world.getThangByID('Hero Placeholder');\n    return thang.attack(hero);\n  };\n\n  return MunchkinSwarmReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "54b1773a75e3055205e5a449",
	"original": "545eddb0e7f60fd6c557613a",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "This Component makes the Thang spawn ogres for the Munchkin Swarm level.",
	"dependencies": [
		{
			"original": "52d9a6773cf02dcf26000dc4",
			"majorVersion": 0
		}
	],
	"commitMessage": "Fix bug on some seeds where some ogres would survive the hero's cleave",
	"parent": "5637c8a39f27008605125789",
	"created": "2016-05-31T15:49:00.441Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 7,
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