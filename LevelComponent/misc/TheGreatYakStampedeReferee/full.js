{
	"_id": "55c3642d633ee6021f0cc2a4",
	"searchStrings": "the great yak stampede referee t th the theg thegr thegre thegrea thegreat thegreaty thegreatya thegreatyak thegreatyaks thegreatyakst thegreatyaksta thegreatyakstam thegreatyakstamp thegreatyakstampe thegreatyakstamped thegreatyakstampede thegreatyakstampeder thegreatyakstampedere thegreatyakstampederef thegreatyakstampederefe thegreatyakstampederefer",
	"index": true,
	"slug": "thegreatyakstampedereferee",
	"name": "TheGreatYakStampedeReferee",
	"js": "var TheGreatYakStampedeReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nTheGreatYakStampedeReferee = (function(_super) {\n  __extends(TheGreatYakStampedeReferee, _super);\n\n  function TheGreatYakStampedeReferee() {\n    _ref = TheGreatYakStampedeReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  TheGreatYakStampedeReferee.className = 'TheGreatYakStampedeReferee';\n\n  TheGreatYakStampedeReferee.prototype.chooseAction = function() {\n    var heat, spellName, t, yak, yaks, _i, _len, _ref1, _ref2, _ref3;\n    if (this.firstRun) {\n      this.actors.thoktar.isAttackable = false;\n      this.firstRun = false;\n    }\n    this.checkVictory();\n    this.jibberJabber();\n    if (this.fenceBuilt() && this.world.age >= 16) {\n      yaks = (function() {\n        var _i, _len, _ref1, _results;\n        _ref1 = this.world.thangs;\n        _results = [];\n        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n          t = _ref1[_i];\n          if (t.type === 'sand-yak' && t.exists) {\n            _results.push(t);\n          }\n        }\n        return _results;\n      }).call(this);\n      for (_i = 0, _len = yaks.length; _i < _len; _i++) {\n        yak = yaks[_i];\n        yak.waypoints = [new Vector(49, 25)];\n        yak.maxSpeed = 35;\n      }\n      if ((21 < (_ref1 = this.world.age) && _ref1 < 22)) {\n        this.say(\"Wait! No!\");\n      }\n      if ((23 < (_ref2 = this.world.age) && _ref2 < 24)) {\n        return this.say(\"Yaks! Not that way!\");\n      } else if (this.world.age > 28.5) {\n        if (this.humbugged) {\n          return this.move(new Vector(75, 60));\n        } else {\n          this.say(\"Bah!\");\n          this.attackDamage = 9000;\n          this.attackPos(new Vector(49, 25));\n          this.humbugged = true;\n          _ref3 = this.spellHeats;\n          for (spellName in _ref3) {\n            heat = _ref3[spellName];\n            this.spellHeats[spellName] = 9001;\n          }\n          return this.spells['raise-dead'].radius = 5;\n        }\n      }\n    }\n  };\n\n  TheGreatYakStampedeReferee.prototype.setUpLevel = function() {\n    this.hero = this.world.getThangByID('Hero Placeholder');\n    return this.actors = {\n      \"thoktar\": this.world.getThangByID('Thoktar'),\n      \"hector\": this.world.getThangByID('Hector'),\n      \"brom\": this.world.getThangByID('Brom'),\n      \"mary\": this.world.getThangByID('Mary'),\n      \"durfkor\": this.world.getThangByID('Durfkor'),\n      \"katelyn\": this.world.getThangByID('Katelyn')\n    };\n  };\n\n  TheGreatYakStampedeReferee.prototype.jibberJabber = function() {\n    var emote, emotes, now, _i, _len, _results;\n    now = Math.round(this.world.age);\n    emotes = [\n      {\n        time: 4,\n        actor: this.actors.durfkor,\n        message: \"Hey Mary, these are some...\"\n      }, {\n        time: 7,\n        actor: this.actors.durfkor,\n        message: \"funny-looking stepping stones, eh?\"\n      }, {\n        time: 9,\n        actor: this.actors.mary,\n        message: \"Sure are, but kind of pretty...\"\n      }, {\n        time: 11,\n        actor: this.actors.mary,\n        message: \"with that flashing red light!\"\n      }, {\n        time: 13,\n        actor: this.actors.thoktar,\n        message: \"Bwahaha-haa!\"\n      }, {\n        time: 14,\n        actor: this.actors.hector,\n        message: \"What's that sound? Thunder?\"\n      }, {\n        time: 16,\n        actor: this.actors.mary,\n        message: \"Oh, you know your hearing...\"\n      }, {\n        time: 18,\n        actor: this.actors.mary,\n        message: \"...ain't what it used to be.\"\n      }\n    ];\n    _results = [];\n    for (_i = 0, _len = emotes.length; _i < _len; _i++) {\n      emote = emotes[_i];\n      if (now === emote.time) {\n        _results.push(emote.actor.say(emote.message));\n      } else {\n        _results.push(void 0);\n      }\n    }\n    return _results;\n  };\n\n  TheGreatYakStampedeReferee.prototype.checkVictory = function() {\n    if (this.actors.hector.health < 1 || this.actors.brom.health < 1 || this.actors.mary.health < 1 || this.actors.durfkor.health < 1 || this.actors.katelyn.health < 1) {\n      return this.setGoalState('save', 'failure');\n    } else if (this.world.age >= 30) {\n      return this.setGoalState('save', 'success');\n    } else if (this.fenceBuilt()) {\n      return this.setGoalState('fence', 'success');\n    }\n  };\n\n  TheGreatYakStampedeReferee.prototype.fenceBuilt = function() {\n    var built, fence, fences, t, _i, _len;\n    built = false;\n    fences = (function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.spriteName === 'Fence Wall' && t.exists) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this);\n    for (_i = 0, _len = fences.length; _i < _len; _i++) {\n      fence = fences[_i];\n      if (this.rectangles['fence'].containsPoint(fence.pos)) {\n        built = true;\n      }\n    }\n    return built;\n  };\n\n  return TheGreatYakStampedeReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "54bab653ecb43555059f02fa",
	"watchers": [
		"546d4b4fa06acfd60c5ea198",
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Adjusted dialogue.",
	"parent": "54d68e1e79206955056b7417",
	"created": "2015-08-06T13:42:05.891Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 21,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "546d4b4fa06acfd60c5ea198"
		},
		{
			"access": "read",
			"target": "public"
		}
	]
}