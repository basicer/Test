{
	"_id": "54ab3155197e19410597e03e",
	"slug": "preferentialtreatmentreferee",
	"searchStrings": "preferential treatment referee p pr pre pref prefe prefer prefere preferen preferent preferenti preferentia preferential preferentialt preferentialtr preferentialtre preferentialtrea preferentialtreat preferentialtreatm preferentialtreatme preferentialtreatmen preferentialtreatment preferentialtreatmentr preferentialtreatmentre preferentialtreatmentref preferentialtreatmentrefe preferentialtreatmentrefer",
	"name": "PreferentialTreatmentReferee",
	"js": "var PreferentialTreatmentReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nPreferentialTreatmentReferee = (function(_super) {\n  __extends(PreferentialTreatmentReferee, _super);\n\n  function PreferentialTreatmentReferee() {\n    _ref = PreferentialTreatmentReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  PreferentialTreatmentReferee.className = 'PreferentialTreatmentReferee';\n\n  PreferentialTreatmentReferee.prototype.chooseAction = function() {\n    if (!this.didPreferentialTreatmentSetUp) {\n      return this.preferentialTreatmentSetUp();\n    }\n  };\n\n  PreferentialTreatmentReferee.prototype.preferentialTreatmentSetUp = function() {\n    var i, n, p, t, _i, _results;\n    this.didPreferentialTreatmentSetUp = true;\n    if (this.hero.maxHealth > 500) {\n      n = (this.hero.maxHealth - 500) / 50;\n      console.log('hero health is [' + this.hero.maxHealth + '], spawn [' + n + '] extra mobs');\n      _results = [];\n      for (i = _i = 0; 0 <= n ? _i < n : _i > n; i = 0 <= n ? ++_i : --_i) {\n        p = this.pickPointFromRegions([this.rectangles.extraSpawnRegion]);\n        t = ['ogre-munchkin-f', 'ogre-munchkin-m'][this.world.rand.rand(2)];\n        _results.push(this.instabuild(t, p.x, p.y));\n      }\n      return _results;\n    }\n  };\n\n  return PreferentialTreatmentReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "5446cac8a887c47508b6f945",
	"original": "54ab18f25038593d05ff26f9",
	"watchers": [
		"5446cac8a887c47508b6f945",
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "save for real",
	"index": true,
	"parent": "54ab18f25038593d05ff26f9",
	"created": "2015-01-06T00:50:29.472Z",
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