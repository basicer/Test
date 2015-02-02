{
	"_id": "54cfab9134fb8d5805dbc968",
	"searchStrings": "illusory interruption referee i il ill illu illus illuso illusor illusory illusoryi illusoryin illusoryint illusoryinte illusoryinter illusoryinterr illusoryinterru illusoryinterrup illusoryinterrupt illusoryinterrupti illusoryinterruptio illusoryinterruption illusoryinterruptionr illusoryinterruptionre illusoryinterruptionref illusoryinterruptionrefe illusoryinterruptionrefer",
	"index": true,
	"slug": "illusoryinterruptionreferee",
	"name": "IllusoryInterruptionReferee",
	"js": "var IllusoryInterruptionReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nIllusoryInterruptionReferee = (function(_super) {\n  __extends(IllusoryInterruptionReferee, _super);\n\n  function IllusoryInterruptionReferee() {\n    _ref = IllusoryInterruptionReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  IllusoryInterruptionReferee.className = 'IllusoryInterruptionReferee';\n\n  IllusoryInterruptionReferee.prototype.chooseAction = function() {\n    var decoy, hero, trigger;\n    hero = this.world.getThangByID('Hero Placeholder');\n    trigger = this.world.getThangByID('Decoy Trigger');\n    if (hero.distanceTo(trigger) < 1 && !hero.activatedDecoy) {\n      decoy = this.world.getThangByID('Decoy');\n      decoy.spawnPos = trigger.pos;\n      decoy.inactive = false;\n      return hero.activatedDecoy = true;\n    }\n  };\n\n  return IllusoryInterruptionReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "54b1773a75e3055205e5a449",
	"original": "54cec0ceca9cbd5505834f2b",
	"watchers": [
		"54b1773a75e3055205e5a449",
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "Referee for Illusory Interruption",
	"codeLanguage": "coffeescript",
	"dependencies": [
		{
			"original": "54977ce657e90bd1903dea72",
			"majorVersion": 0
		}
	],
	"commitMessage": "Fix decoy movement direction",
	"parent": "54cece90c39305530570920f",
	"created": "2015-02-02T16:53:37.505Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 3,
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