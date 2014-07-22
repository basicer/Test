{
	"_id": "53ce84337747af0000aa6471",
	"creator": "512ef4805a67a8c507000001",
	"slug": "hearsandobeys",
	"name": "HearsAndObeys",
	"js": "var HearsAndObeys, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nHearsAndObeys = (function(_super) {\n  __extends(HearsAndObeys, _super);\n\n  function HearsAndObeys() {\n    _ref = HearsAndObeys.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  HearsAndObeys.className = \"HearsAndObeys\";\n\n  HearsAndObeys.prototype.hear = function(speaker, command, data) {\n    var acknowledged, commandLower, error, i, matchesCommand, punct, target, targetPos, _base, _name, _ref1, _ref2;\n    if (this.health <= 0) {\n      return;\n    }\n    if (speaker.team !== this.team) {\n      return;\n    }\n    if ((data != null ? data.type : void 0) && data.type !== this.type) {\n      return;\n    }\n    if ((_base = (acknowledged = this.acknowledgedSpeakerCommands != null ? this.acknowledgedSpeakerCommands : this.acknowledgedSpeakerCommands = {}))[_name = speaker.id] == null) {\n      _base[_name] = {};\n    }\n    commandLower = command.toLowerCase();\n    matchesCommand = function(synonyms) {\n      var s, _i, _len;\n      for (_i = 0, _len = synonyms.length; _i < _len; _i++) {\n        s = synonyms[_i];\n        if (commandLower.search(s) !== -1) {\n          return true;\n        }\n      }\n    };\n    target = data != null ? data.target : void 0;\n    targetPos = data != null ? data.targetPos : void 0;\n    this.specificAttackTarget = null;\n    if (this.actions.move && matchesCommand(['move', 'go to'])) {\n      if (targetPos && (targetPos.x != null) && (targetPos.y != null)) {\n        try {\n          this.move(targetPos);\n        } catch (_error) {\n          error = _error;\n          if (typeof this.say === \"function\") {\n            this.say(\"What kind of targetPos is {x: \" + targetPos.x + \", y: \" + targetPos.y + \"}?\");\n          }\n        }\n      } else if (target && target.pos && target.isThang) {\n        this.follow(target);\n      } else {\n        if (typeof this.say === \"function\") {\n          this.say(\"Where to?\");\n        }\n      }\n    } else if (this.defend && matchesCommand(['defend'])) {\n      if (targetPos && (targetPos.x != null) && (targetPos.y != null)) {\n        try {\n          this.defendPos(targetPos);\n        } catch (_error) {\n          error = _error;\n          if (typeof this.say === \"function\") {\n            this.say(\"What kind of targetPos is {x: \" + targetPos.x + \", y: \" + targetPos.y + \"}?\");\n          }\n        }\n      } else if (target && target.isThang) {\n        this.defend(target);\n      } else {\n        this.defend();\n      }\n    } else if (this.actions.move && matchesCommand(['follow', 'come with', \"let's go\"])) {\n      this.follow(speaker);\n      acknowledged.follow = true;\n    } else if (this.actions.move && this.say && !acknowledged.follow && matchesCommand([\"who goes there?\"])) {\n      if (typeof this.say === \"function\") {\n        this.say(this.id);\n      }\n      this.follow(speaker);\n      acknowledged.follow = true;\n      return;\n    } else if (this.actions.attack && matchesCommand(['charge', 'attack', 'kill', 'fight', 'battle', 'slay', 'maul', 'destroy', 'exterminate', 'overwhelm', 'stab', 'assault', 'annihilate', 'assassinate', 'dispatch', 'eradicate', 'murder', 'massacre', 'obliterate', 'slaughter', 'wipe out', 'defeat', '杀'])) {\n      if (target != null ? target.isAttackable : void 0) {\n        this.attack(target);\n        this.specificAttackTarget = target;\n      } else if (((_ref1 = speaker.target) != null ? _ref1.isAttackable : void 0) && (!this.team || speaker.target.team !== this.team)) {\n        this.attack(speaker.target);\n      } else {\n        this.attack(this.getNearestEnemy());\n      }\n    } else if (matchesCommand(['hail', 'hello', 'hi!', 'hi ', 'greetings'])) {\n      if (speaker.id === \"Tharin\") {\n        punct = [\"!\", \"! \", \".\"][this.world.rand.rand(3)];\n      } else {\n        punct = \"!\";\n      }\n      if (!acknowledged.hail) {\n        if (typeof this.say === \"function\") {\n          this.say(\"Ho, \" + speaker.id + punct);\n        }\n      }\n      acknowledged.hail = true;\n      return;\n    } else {\n      return;\n    }\n    if ((_ref2 = this.obeyResponses) != null ? _ref2.length : void 0) {\n      i = this.world.rand.rand(this.obeyResponses.length);\n      return typeof this.say === \"function\" ? this.say(this.obeyResponses[i]) : void 0;\n    }\n  };\n\n  return HearsAndObeys;\n\n})(Component);\n",
	"original": "524d947f3ea855e0ab000240",
	"__v": 0,
	"commitMessage": "杀",
	"parent": "539c840337b239af9d3a269e",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"official": false,
	"configSchema": {
		"properties": {
			"obeyResponses": {
				"type": "array",
				"items": {
					"type": "string"
				},
				"description": "Responses to randomly say when obeying a command."
			}
		},
		"default": {
			"obeyResponses": []
		},
		"id": "__base__",
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b7b977fc0f6d519000014",
			"majorVersion": 0
		},
		{
			"original": "524b7b9f7fc0f6d519000015",
			"majorVersion": 0
		},
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		},
		{
			"original": "524b7b747fc0f6d519000010",
			"majorVersion": 0
		}
	],
	"description": "This Thang obeys any spoken orders it understands from allied Thangs.",
	"system": "ai",
	"searchStrings": "hears and obeys h he hea hear hears hearsa hearsan hearsand hearsando hearsandob hearsandobe",
	"created": "2014-07-22T15:33:07.317Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 25,
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