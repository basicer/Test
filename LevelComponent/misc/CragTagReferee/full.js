{
	"_id": "54f608de18aec0b005a499e5",
	"searchStrings": "crag tag referee c cr cra crag cragt cragta cragtag cragtagr cragtagre cragtagref cragtagrefe cragtagrefer",
	"index": true,
	"slug": "cragtagreferee",
	"name": "CragTagReferee",
	"js": "var CragTagReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCragTagReferee = (function(_super) {\n  __extends(CragTagReferee, _super);\n\n  function CragTagReferee() {\n    _ref = CragTagReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  CragTagReferee.className = 'CragTagReferee';\n\n  CragTagReferee.prototype.chooseAction = function() {\n    if (!this.didPostSetUp) {\n      this.postSetUp();\n    }\n    if (this.pender) {\n      return this.controlPender();\n    }\n  };\n\n  CragTagReferee.prototype.setUpLevel = function() {\n    this.pender = this.world.getThangByID('Pender Spellbane');\n    this.pender.waypoint = 0;\n    this.pender.taunt = 0;\n    this.pender.caught = false;\n    this.victoryChecked = false;\n    this.setUpPenderPoints();\n    this.pender.pos = this.penderPoints[0];\n    return this.setUpTaunts();\n  };\n\n  CragTagReferee.prototype.setUpPenderPoints = function() {\n    var a, i, n, px, py, r, _i;\n    this.penderPoints = [];\n    r = 24;\n    for (i = _i = 0; _i < 12; i = ++_i) {\n      a = (2.0 * Math.PI / 12.0) * i;\n      px = 40 + r * Math.cos(a);\n      py = 32 + r * Math.sin(a);\n      this.penderPoints.push(new Vector(px, py));\n    }\n    n = this.world.rand.rand(this.penderPoints.length);\n    this.penderPoints = this.penderPoints.slice(n, this.penderPoints.length).concat(this.penderPoints.slice(0, n));\n    if (this.world.rand.randf() < 0.5) {\n      return this.penderPoints.reverse();\n    }\n  };\n\n  CragTagReferee.prototype.setUpTaunts = function() {\n    var i, j, t, _i, _ref1;\n    this.tauntDelay = 7;\n    this.tauntTime = this.world.age;\n    this.taunts = [\"Catch me if you can!\", \"Pick up the pace!\", \"Where are you even going?\", \"Get the lead out!\", \"You'll never catch me!\", \"C'mon, try to keep up!\", \"Are you out of breath yet?\"];\n    for (i = _i = _ref1 = this.taunts.length - 1; _ref1 <= 2 ? _i <= 2 : _i >= 2; i = _ref1 <= 2 ? ++_i : --_i) {\n      j = 1 + Math.floor(this.world.rand.randf() * (i - 2));\n      t = this.taunts[j];\n      this.taunts[j] = this.taunts[i];\n      this.taunts[i] = t;\n    }\n    this.caughtTaunt = \"You got me! Good... but the real test is yet to come.\";\n    return this.campTaunt = \"That's not fair! You have to chase me.\";\n  };\n\n  CragTagReferee.prototype.postSetUp = function() {\n    var f;\n    this.didPostSetUp = true;\n    f = this.hero.maxSpeed / this.pender.maxSpeed;\n    return this.pender.maxSpeed *= f * 1.01;\n  };\n\n  CragTagReferee.prototype.controlPender = function() {\n    if (this.pender.caught) {\n      return;\n    }\n    this.pender.move(this.penderPoints[this.pender.waypoint]);\n    if (this.pender.distanceTo(this.penderPoints[this.pender.waypoint]) < 5) {\n      this.pender.waypoint = this.pender.waypoint < this.penderPoints.length - 1 ? this.pender.waypoint + 1 : 0;\n    }\n    if (this.pender.distanceTo(this.hero) < 4) {\n      if (this.hero.action === 'idle') {\n        this.pender.say(this.campTaunt);\n      } else {\n        this.pender.caught = true;\n        this.pender.say(this.caughtTaunt);\n      }\n    }\n    if (!this.pender.caught && this.world.age > this.tauntTime) {\n      this.tauntTime = this.world.age + this.tauntDelay;\n      this.pender.say(this.taunts[this.pender.taunt]);\n      return this.pender.taunt = this.pender.taunt < this.taunts.length - 1 ? this.pender.taunt + 1 : 1;\n    }\n  };\n\n  CragTagReferee.prototype.checkVictory = function() {\n    if (this.victoryChecked) {\n      return;\n    }\n    if (this.world.age < 30 && this.pender.caught) {\n      this.victoryChecked = true;\n      this.pender.caught = true;\n      this.setGoalState('catch-pender', 'success');\n      this.world.endWorld(true, 1);\n    }\n    if (this.world.age > 30 && !this.pender.caught) {\n      this.victoryChecked = true;\n      this.setGoalState('catch-pender', 'failure');\n      return this.world.endWorld(true, 1);\n    }\n  };\n\n  return CragTagReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "5446cac8a887c47508b6f945",
	"original": "54ef7e0964112781056bdc0c",
	"watchers": [
		"5446cac8a887c47508b6f945",
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"commitMessage": "Prevent win by camping. Nudge Pender's speed up to make the chase longer.",
	"parent": "54efb4fed5d7508605aa3c0c",
	"created": "2015-03-03T19:17:50.232Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 4,
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