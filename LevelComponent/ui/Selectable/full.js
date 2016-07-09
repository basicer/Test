{
	"_id": "5780d8c303f4931f0054be52",
	"slug": "selectable",
	"creator": "5669fd00631bcd2200a9bdb7",
	"name": "Selectable",
	"original": "524b7bb67fc0f6d519000018",
	"__v": 0,
	"js": "var Selectable,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  __slice = [].slice,\n  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };\n\nSelectable = (function(_super) {\n  __extends(Selectable, _super);\n\n  Selectable.className = 'Selectable';\n\n  Selectable.prototype.isSelectable = true;\n\n  Selectable.prototype.inThangList = true;\n\n  Selectable.prototype._defaultHUDProperties = [\"health\", \"pos\", \"target\", \"action\"];\n\n  function Selectable(options) {\n    Selectable.__super__.constructor.call(this, options);\n    this.hudProperties = _.without.apply(_, [this._defaultHUDProperties.concat(this.extraHUDProperties || [])].concat(__slice.call(this.excludedHUDProperties || [])));\n    delete this.extraHUDProperties;\n    delete this.excludedHUDProperties;\n  }\n\n  Selectable.prototype.attach = function(thang) {\n    Selectable.__super__.attach.call(this, thang);\n    return thang.startTrackingGold();\n  };\n\n  Selectable.prototype.startTrackingGold = function() {\n    var _ref;\n    if (__indexOf.call(this.hudProperties, 'gold') < 0) {\n      return;\n    }\n    if (this.startedTrackingGold) {\n      return;\n    }\n    this.startedTrackingGold = true;\n    this.addTrackedProperties(['gold', 'number']);\n    this.addTrackedProperties(['goldEarned', 'number']);\n    this.inventorySystem = this.world.getSystem('Inventory');\n    return (_ref = this.inventorySystem) != null ? _ref.goldTrackers.push(this) : void 0;\n  };\n\n  Selectable.prototype.trackGold = function() {\n    var newGold, newGoldEarned, oldGold, _ref;\n    this.startTrackingGold();\n    if (!this.inventorySystem) {\n      return;\n    }\n    newGold = this.inventorySystem.goldForTeam(this.team) || 0;\n    oldGold = this.gold;\n    if (newGold && newGold !== this.gold) {\n      this.keepTrackedProperty('gold');\n    }\n    this.gold = newGold;\n    newGoldEarned = ((_ref = this.inventorySystem.teamGold[this.team]) != null ? _ref.earned : void 0) || 0;\n    if (newGoldEarned && newGoldEarned !== this.goldEarned && newGoldEarned !== this.gold) {\n      this.keepTrackedProperty('goldEarned');\n    }\n    return this.goldEarned = newGoldEarned;\n  };\n\n  Selectable.prototype.update = function() {\n    if (__indexOf.call(this.hudProperties, 'gold') < 0) {\n      return;\n    }\n    return this.trackGold();\n  };\n\n  return Selectable;\n\n})(Component);\n",
	"commitMessage": "Diplomat submission for lang fa: 1 change(s).",
	"parent": "57742d0d4fe71e270081457a",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"patches": [],
	"official": false,
	"configSchema": {
		"properties": {
			"excludedHUDProperties": {
				"type": "array",
				"items": {
					"type": "string"
				},
				"default": [],
				"description": "To exclude \"health\", \"pos\", or \"target\", pass them in this array."
			},
			"extraHUDProperties": {
				"type": "array",
				"items": {
					"type": "string"
				},
				"default": [],
				"description": "Names of properties to display in the HUD when this Thang is selected."
			},
			"inThangList": {
				"type": "boolean",
				"default": true,
				"description": "Whether this Thang will show up in the Thang list on the right for quick selection."
			},
			"hudName": {
				"type": "string"
			}
		},
		"id": "__base__",
		"additionalProperties": false,
		"type": "object",
		"default": {
			"extraHUDProperties": [],
			"excludedHUDProperties": [],
			"inThangList": true,
			"hudName": ""
		}
	},
	"dependencies": [
		{
			"original": "524b75ad7fc0f6d519000001",
			"majorVersion": 0
		}
	],
	"description": "This Thang can be selected by clicking on it.",
	"system": "ui",
	"searchStrings": "selectable s se sel sele selec select selecta selectab",
	"i18nCoverage": [
		"-",
		"tr",
		"ru",
		"pt-PT",
		"pt-BR",
		"fr",
		"nb",
		"de-DE",
		"zh-HANS",
		"zh-HANT",
		"sk",
		"es-ES",
		"es-419",
		"it",
		"nl-NL",
		"uk",
		"ja",
		"ro",
		"nl-BE",
		"pl",
		"he",
		"lt",
		"da",
		"el",
		"id",
		"hu",
		"fa"
	],
	"created": "2016-07-09T10:58:11.490Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 81,
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