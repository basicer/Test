{
	"_id": "54ca6bcd30fe64d01a6ff8a5",
	"slug": "autotargetsstrongest",
	"name": "AutoTargetsStrongest",
	"js": "var AutoTargetsStrongest, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nAutoTargetsStrongest = (function(_super) {\n  __extends(AutoTargetsStrongest, _super);\n\n  function AutoTargetsStrongest() {\n    _ref = AutoTargetsStrongest.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  AutoTargetsStrongest.className = \"AutoTargetsStrongest\";\n\n  AutoTargetsStrongest.prototype.chooseAction = function() {\n    var enemies,\n      _this = this;\n    if (this.targetPos || (this.target && this.target.team === this.team)) {\n      return;\n    }\n    enemies = _.sortBy(this.getEnemies(), function(e) {\n      return e.health * 9001 - _this.distance(e);\n    });\n    if (enemies.length) {\n      this.setTarget(_.last(enemies));\n      if (this.action === 'idle' && this.actions.attack) {\n        return this.setAction('attack');\n      }\n    }\n  };\n\n  return AutoTargetsStrongest;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "5260635c026e8481e7000011",
	"__v": 0,
	"commitMessage": "Added a long description.",
	"parent": "538755f4cb18e70000712283",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"official": false,
	"configSchema": {
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [],
	"description": "This Component makes the Thang attack the strongest  the strongest unit that it can see (compared to AutoTargetsNearest, which is normally used).",
	"system": "ai",
	"codeLanguage": "coffeescript",
	"searchStrings": "auto targets strongest a au aut auto autot autota autotar autotarg autotarge autotarget autotargets autotargetss autotargetsst autotargetsstr autotargetsstro autotargetsstron autotargetsstrong autotargetsstronge",
	"created": "2015-01-29T17:20:13.810Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 70,
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