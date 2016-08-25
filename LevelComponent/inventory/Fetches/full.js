{
	"_id": "57bf3138ebcf472500b14594",
	"slug": "fetches",
	"searchStrings": "fetches f fe fet fetc fetch",
	"name": "Fetches",
	"js": "var ArgumentError, Fetches, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nArgumentError = require('lib/world/errors').ArgumentError;\n\nFetches = (function(_super) {\n  __extends(Fetches, _super);\n\n  function Fetches() {\n    _ref = Fetches.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Fetches.className = 'Fetches';\n\n  Fetches.prototype.attach = function(thang) {\n    Fetches.__super__.attach.call(this, thang);\n    return thang.inventorySystem = thang.world.getSystem(\"Inventory\");\n  };\n\n  Fetches.prototype.fetch = function(item) {\n    if (!item) {\n      throw new ArgumentError(\"You must specify an item to fetch.\", \"fetch\", \"item\", \"object\", item);\n    }\n    if (!item.isCarryable) {\n      if (typeof this.sayWithoutBlocking === \"function\") {\n        this.sayWithoutBlocking(\"I can't carry that!\");\n      }\n      return;\n    }\n    if (!this.peekItem()) {\n      return this.pickUpItem(item);\n    }\n  };\n\n  Fetches.prototype.update = function() {\n    var _ref1, _ref2;\n    if (!this.commander) {\n      return;\n    }\n    if (this.intent === 'pickUpItem' || this.intent === 'dropItem') {\n      return;\n    }\n    if (this.peekItem() && this.commander) {\n      return this.dropItem({\n        x: (_ref1 = this.commander.pos) != null ? _ref1.x : void 0,\n        y: (_ref2 = this.commander.pos) != null ? _ref2.y : void 0\n      });\n    }\n  };\n\n  Fetches.prototype.getCarryableItems = function() {\n    var item, items;\n    if (arguments[0] != null) {\n      throw new ArgumentError(\"\", \"getItems\", \"\", \"\", arguments[0]);\n    }\n    if (!this.canSee) {\n      return [];\n    }\n    items = (function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.inventorySystem.collectables;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        item = _ref1[_i];\n        if (this.canSee(item) && item !== this && item.isCarryable) {\n          _results.push(item);\n        }\n      }\n      return _results;\n    }).call(this);\n    return items;\n  };\n\n  Fetches.prototype.findNearestItem = function() {\n    var items;\n    if (arguments[0] != null) {\n      throw new ArgumentError(\"\", \"findNearestItem\", \"\", \"\", arguments[0]);\n    }\n    items = this.getCarryableItems();\n    if (!items.length) {\n      return null;\n    }\n    return this.getNearest(items);\n  };\n\n  return Fetches;\n\n})(Component);\n",
	"system": "inventory",
	"creator": "54b1773a75e3055205e5a449",
	"original": "5769667c5a97804400921a9f",
	"watchers": [
		"54b1773a75e3055205e5a449",
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"commitMessage": "Add fetch version of findNearestItem for pets",
	"parent": "57a10b679b6cd62000c85cc9",
	"index": true,
	"dependencies": [
		{
			"original": "56f460b37af7e626020b92bf",
			"majorVersion": 0
		},
		{
			"original": "524b457bff92f1f4f8000031",
			"majorVersion": 0
		}
	],
	"created": "2016-08-25T17:56:08.042Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 6,
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