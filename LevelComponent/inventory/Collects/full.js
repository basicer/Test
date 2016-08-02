{
	"_id": "57a0a70853b4b61f00f23792",
	"slug": "collects",
	"creator": "577fa93a06c3d62900b17b3a",
	"name": "Collects",
	"original": "524b7bbe7fc0f6d519000019",
	"__v": 0,
	"js": "var Collects, downTheChain,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  __slice = [].slice,\n  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };\n\ndownTheChain = require('lib/world/world_utils').downTheChain;\n\nCollects = (function(_super) {\n  __extends(Collects, _super);\n\n  Collects.className = \"Collects\";\n\n  function Collects(config) {\n    Collects.__super__.constructor.call(this, config);\n    this.collectRangeSquared = this.collectRange * this.collectRange;\n    this._startingGold = this.startingGold;\n    this._income = this.income;\n    delete this.startingGold;\n    delete this.income;\n  }\n\n  Collects.prototype.attach = function(thang) {\n    Collects.__super__.attach.call(this, thang);\n    if (thang.collectedThangIDs == null) {\n      thang.collectedThangIDs = [];\n    }\n    thang.addTrackedProperties([\"collectedThangIDs\", \"array\"]);\n    if ((thang.inventorySystem = thang.world.getSystem(\"Inventory\")) && !thang.isItem) {\n      if (this._startingGold) {\n        thang.inventorySystem.addGoldForTeam(thang.team, this._startingGold, false);\n      }\n      if (this._income) {\n        return thang.inventorySystem.teamGold[thang.team].income += this._income;\n      }\n    }\n  };\n\n  Collects.prototype.getItems = function() {\n    var item, items;\n    if (arguments[0] != null) {\n      throw new ArgumentError(\"\", \"getItems\", \"\", \"\", arguments[0]);\n    }\n    if (!this.canSee) {\n      return [];\n    }\n    items = (function() {\n      var _i, _len, _ref, _results;\n      _ref = this.inventorySystem.collectables;\n      _results = [];\n      for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n        item = _ref[_i];\n        if (this.canSee(item) && item !== this) {\n          _results.push(item);\n        }\n      }\n      return _results;\n    }).call(this);\n    return items;\n  };\n\n  Collects.prototype.findItems = function() {\n    if (arguments[0] != null) {\n      throw new ArgumentError(\"\", \"findItems\", \"\", \"\", arguments[0]);\n    }\n    return this.getItems();\n  };\n\n  Collects.prototype.findNearestItem = function() {\n    var items;\n    if (arguments[0] != null) {\n      throw new ArgumentError(\"\", \"findNearestItem\", \"\", \"\", arguments[0]);\n    }\n    items = this.getItems();\n    if (!items.length) {\n      return null;\n    }\n    return this.getNearest(items);\n  };\n\n  Collects.prototype.canCollect = function(collectable) {\n    return !this.dead && this.distanceSquared(collectable, false) < this.collectRangeSquared + 25 && this.distanceSquared(collectable, true) < this.collectRangeSquared && !(collectable.isCarryable && collectable.parent);\n  };\n\n  Collects.prototype.collect = function(collectable) {\n    if (!collectable.isCollectable) {\n      return;\n    }\n    if (this.canCollect(collectable)) {\n      return this.performCollect(collectable);\n    } else {\n      return this.move(collectable.pos);\n    }\n  };\n\n  Collects.prototype.performCollect = function(collectable) {\n    var collectableKeyChain, collectableProperty, collectableValue, prop, _i, _j, _k, _len, _len1, _ref, _ref1, _ref2;\n    if (collectable.id.search(\"Potion\") === -1 && collectable.id.search(\"Coin\") === -1) {\n      this.collectedThangIDs.push(collectable.id);\n      this.keepTrackedProperty('collectedThangIDs');\n    }\n    this.publishNote(\"thang-collected-item\", {\n      item: collectable,\n      actor: this\n    });\n    collectable.killer = this;\n    if (typeof collectable.die === \"function\") {\n      collectable.die();\n    }\n    collectable.setExists(false);\n    _ref1 = (_ref = collectable.collectableProperties) != null ? _ref : [];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      collectableProperty = _ref1[_i];\n      if (!_.isArray(collectableProperty)) {\n        console.error(collectable.id, \"being collected by\", this.id, \"but has problem with collectableProperty\", collectableProperty, \"which should be an array.\");\n        continue;\n      }\n      for (_j = 0, _len1 = collectableProperty.length; _j < _len1; _j++) {\n        _ref2 = collectableProperty[_j], collectableKeyChain = 2 <= _ref2.length ? __slice.call(_ref2, 0, _k = _ref2.length - 1) : (_k = 0, []), collectableValue = _ref2[_k++];\n        if (collectableKeyChain.length === 1 && collectableKeyChain[0] === 'health') {\n          this.health = Math.min(this.maxHealth, this.health + collectableValue);\n        } else {\n          downTheChain(this, collectableKeyChain, collectableValue);\n        }\n        prop = collectableKeyChain[0];\n        if (__indexOf.call(this.trackedPropertiesKeys, prop) >= 0) {\n          this.keepTrackedProperty(prop);\n        }\n      }\n    }\n    this.addCurrentEvent('collect');\n    collectable.addCurrentEvent('collected');\n    if (collectable.collectableExclamation) {\n      return typeof this.sayWithoutBlocking === \"function\" ? this.sayWithoutBlocking(collectable.collectableExclamation) : void 0;\n    }\n  };\n\n  Collects.prototype.drop = function(thangID) {\n    var collectable;\n    if (__indexOf.call(this.collectedThangIDs, thangID) < 0) {\n      return;\n    }\n    this.collectedThangIDs.splice(this.collectedThangIDs.lastIndexOf(thangID), 1);\n    collectable = this.world.thangMap[thangID];\n    collectable.setExists(true);\n    collectable.pos = this.pos.copy();\n    return this.keepTrackedProperty('collectedThangIDs');\n  };\n\n  return Collects;\n\n})(Component);\n",
	"commitMessage": "Diplomat submission for lang vi: 1 change(s).",
	"parent": "579cac0a9872641f007ecd4e",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"patches": [],
	"codeLanguage": "coffeescript",
	"official": false,
	"configSchema": {
		"properties": {
			"autoCollects": {
				"type": "boolean",
				"default": true,
				"description": "Whether this Thang automatically collects Collectables it walks over."
			},
			"collectRange": {
				"type": "number",
				"description": "How far away this Thang can collect Collectables, in meters.",
				"minimum": 0,
				"default": 5
			},
			"startingGold": {
				"type": "integer",
				"description": "How much gold this Thang adds to its team's starting gold."
			},
			"income": {
				"type": "number",
				"description": "How much gold per second this Thang adds to its team's gold income."
			}
		},
		"default": {
			"collectRange": 5,
			"autoCollects": true
		},
		"id": "__base__",
		"additionalProperties": true,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b75ad7fc0f6d519000001",
			"majorVersion": 0
		},
		{
			"original": "524b4150ff92f1f4f8000024",
			"majorVersion": 0
		}
	],
	"description": "This Thang can collect Collectable Thangs.",
	"system": "inventory",
	"searchStrings": "collects c co col coll colle collec",
	"i18nCoverage": [
		"-",
		"tr",
		"es-ES",
		"ru",
		"gl",
		"fr",
		"nb",
		"de-DE",
		"es-419",
		"it",
		"zh-HANS",
		"sk",
		"ar",
		"cs",
		"pt-BR",
		"uk",
		"ja",
		"pl",
		"sv",
		"ro",
		"nl-BE",
		"hu",
		"nl-NL",
		"lt",
		"el",
		"sr",
		"da",
		"bg"
	],
	"index": true,
	"created": "2016-08-02T13:58:32.148Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 96,
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