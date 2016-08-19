{
	"_id": "57b78d2c8651862000f1de2f",
	"searchStrings": "detects ogres d de det dete detec detect detects detectso detectsog detectsogr",
	"index": true,
	"slug": "detectsogres",
	"name": "DetectsOgres",
	"js": "var DetectsOgres, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nDetectsOgres = (function(_super) {\n  __extends(DetectsOgres, _super);\n\n  function DetectsOgres() {\n    _ref = DetectsOgres.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  DetectsOgres.className = 'DetectsOgres';\n\n  DetectsOgres.prototype.shouldAttack = function(target) {\n    if (!target) {\n      return false;\n    }\n    if (target.type === 'munchkin') {\n      return true;\n    }\n    return false;\n  };\n\n  DetectsOgres.prototype.isClose = function(target) {\n    var r;\n    if (!target) {\n      return false;\n    }\n    r = Math.max(8, this.attackRange || 0);\n    return this.distanceTo(target) <= r;\n  };\n\n  return DetectsOgres;\n\n})(Component);\n",
	"system": "misc",
	"creator": "57b784cc8cbf7d24004c1254",
	"original": "57602c522bd0235800550a52",
	"watchers": [
		"54b1773a75e3055205e5a449",
		"512ef4805a67a8c507000001"
	],
	"__v": 2,
	"commitMessage": "Diplomat submission for lang es-ES: 0 change(s).",
	"parent": "57a9ed0922acb520004776af",
	"description": "This component adds the isOgre api",
	"codeLanguage": "coffeescript",
	"patches": [
		"5794e3920db3372e00070b62",
		"5794e3c0e0ab2d26009e959f",
		"5797dea1ff77551f009fa046",
		"579eb6d6d4d20d2e00779b64",
		"57af50e18a0d832000df6742",
		"57af511e2e1d7f2000a924f9",
		"57b23dfd9c524e24004ce46b",
		"57b2cba17583a91f00acb814",
		"57b2ccc07583a91f00acb8fd",
		"57b7887f72ded920007ec6db",
		"57bf27d2bf4d7e20007a986d",
		"57bf322314bddd200023488e"
	],
	"i18nCoverage": [
		"-"
	],
	"created": "2016-08-19T22:50:20.548Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 18,
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