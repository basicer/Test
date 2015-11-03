{
	"_id": "563941869814e03cd68920e7",
	"index": true,
	"slug": "equips",
	"name": "Equips",
	"codeLanguage": "coffeescript",
	"js": "var Equips,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nEquips = (function(_super) {\n  __extends(Equips, _super);\n\n  Equips.className = 'Equips';\n\n  Equips.prototype.equips = true;\n\n  function Equips(config) {\n    var _ref;\n    Equips.__super__.constructor.call(this, config);\n    this._inventorySlots = (_ref = this.inventory) != null ? _ref : {};\n    delete this.inventory;\n  }\n\n  Equips.prototype.attach = function(thang) {\n    var item, itemConfig, itemThangTypeOriginal, slot, thangTypeModel, _ref;\n    Equips.__super__.attach.call(this, thang);\n    thang.inventory = {};\n    thang.inventoryIDs = {};\n    thang.inventoryThangTypeNames = {};\n    thang.addTrackedFinalProperties('inventoryIDs', 'inventoryThangTypeNames');\n    _ref = this._inventorySlots;\n    for (slot in _ref) {\n      itemThangTypeOriginal = _ref[slot];\n      if (!(thang.world.levelComponents && thang.world.thangTypes)) {\n        return;\n      }\n      thangTypeModel = _.find(thang.world.thangTypes, {\n        original: itemThangTypeOriginal\n      });\n      if (!thangTypeModel) {\n        console.error(thang.id, 'could not find ThangType for', itemThangTypeOriginal, 'when attaching Equips');\n        continue;\n      }\n      itemConfig = {\n        thangType: itemThangTypeOriginal,\n        config: {},\n        components: thangTypeModel.components\n      };\n      if (!(item = thang.world.loadThangFromLevel(itemConfig, thang.world.levelComponents, thang.world.thangTypes, thang.id))) {\n        continue;\n      }\n      thang.world.addThang(item);\n      thang.inventory[slot] = item;\n      thang.inventoryIDs[slot] = item.id;\n      thang.inventoryThangTypeNames[slot] = item.spriteName;\n    }\n  };\n\n  return Equips;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "53e217d253457600003e3ebb",
	"watchers": [
		"512ef4805a67a8c507000001"
	],
	"__v": 4,
	"commitMessage": "Added flag slot.",
	"parent": "545ab3ad05ea42ddaf184d1c",
	"official": false,
	"configSchema": {
		"properties": {
			"attackDamageFactor": {
				"type": "number",
				"default": 1,
				"additionalProperties": false,
				"minimum": 0,
				"exclusiveMinimum": true,
				"description": "How much damage this hero will do with a weapon relative to its listed damage."
			},
			"inventory": {
				"type": "object",
				"description": "Inventory Item ThangTypes this Thang has equipped.",
				"additionalProperties": false,
				"properties": {
					"head": {
						"type": "string",
						"format": "item-thang-type",
						"description": "An equipped Item in this slot."
					},
					"eyes": {
						"type": "string",
						"format": "item-thang-type",
						"description": "An equipped Item in this slot."
					},
					"neck": {
						"type": "string",
						"format": "item-thang-type",
						"description": "An equipped Item in this slot."
					},
					"torso": {
						"type": "string",
						"format": "item-thang-type",
						"description": "An equipped Item in this slot."
					},
					"wrists": {
						"type": "string",
						"format": "item-thang-type",
						"description": "An equipped Item in this slot."
					},
					"gloves": {
						"type": "string",
						"format": "item-thang-type",
						"description": "An equipped Item in this slot."
					},
					"left-ring": {
						"type": "string",
						"format": "item-thang-type",
						"description": "An equipped Item in this slot."
					},
					"right-ring": {
						"type": "string",
						"format": "item-thang-type",
						"description": "An equipped Item in this slot."
					},
					"left-hand": {
						"type": "string",
						"format": "item-thang-type",
						"description": "An equipped Item in this slot."
					},
					"right-hand": {
						"type": "string",
						"format": "item-thang-type",
						"description": "An equipped Item in this slot."
					},
					"waist": {
						"type": "string",
						"format": "item-thang-type",
						"description": "An equipped Item in this slot."
					},
					"feet": {
						"type": "string",
						"format": "item-thang-type",
						"description": "An equipped Item in this slot."
					},
					"spellbook": {
						"type": "string",
						"format": "item-thang-type",
						"description": "An equipped Item in this slot."
					},
					"programming-book": {
						"type": "string",
						"format": "item-thang-type",
						"description": "An equipped Item in this slot."
					},
					"pet": {
						"type": "string",
						"format": "item-thang-type",
						"description": "An equipped Item in this slot."
					},
					"minion": {
						"type": "string",
						"format": "item-thang-type",
						"description": "An equipped Item in this slot."
					},
					"misc-0": {
						"type": "string",
						"format": "item-thang-type",
						"description": "An equipped Item in this slot."
					},
					"misc-1": {
						"type": "string",
						"format": "item-thang-type",
						"description": "An equipped Item in this slot."
					},
					"misc-2": {
						"type": "string",
						"format": "item-thang-type",
						"description": "An equipped Item in this slot."
					},
					"misc-3": {
						"type": "string",
						"format": "item-thang-type",
						"description": "An equipped Item in this slot."
					},
					"misc-4": {
						"type": "string",
						"format": "item-thang-type",
						"description": "An equipped Item in this slot."
					},
					"flag": {
						"type": "string",
						"format": "item-thang-type",
						"description": "An equipped Item in this slot."
					}
				}
			},
			"maxHealthFactor": {
				"default": 1,
				"type": "number",
				"minimum": 0,
				"exclusiveMinimum": true,
				"description": "How much health this hero will gain from armor relative to its listed health."
			}
		},
		"additionalProperties": false,
		"type": "object",
		"default": {
			"attackDamageFactor": 1,
			"maxHealthFactor": 1
		}
	},
	"dependencies": [
		{
			"original": "524b7bab7fc0f6d519000017",
			"majorVersion": 0
		},
		{
			"original": "524b7b747fc0f6d519000010",
			"majorVersion": 0
		},
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		},
		{
			"original": "524b7b857fc0f6d519000012",
			"majorVersion": 0
		},
		{
			"original": "52e95818a3ca8546b7000001",
			"majorVersion": 0
		},
		{
			"original": "524b3e3fff92f1f4f800000d",
			"majorVersion": 0
		},
		{
			"original": "524b4150ff92f1f4f8000024",
			"majorVersion": 0
		},
		{
			"original": "524b75ad7fc0f6d519000001",
			"majorVersion": 0
		},
		{
			"original": "52a399b98537a70000000003",
			"majorVersion": 0
		},
		{
			"original": "524b7bb67fc0f6d519000018",
			"majorVersion": 0
		},
		{
			"original": "524b7b9f7fc0f6d519000015",
			"majorVersion": 0
		},
		{
			"original": "524b7b977fc0f6d519000014",
			"majorVersion": 0
		},
		{
			"original": "524b7b8c7fc0f6d519000013",
			"majorVersion": 0
		},
		{
			"original": "52e816058c875f0000000001",
			"majorVersion": 0
		}
	],
	"description": "This Component lets the Thang equip Items. It pulls in all the Components needed for a basic, versatile Thang.",
	"system": "inventory",
	"searchStrings": "equips e eq equ equi",
	"patches": [
		"57a06ed553b4b61f00f1c78a"
	],
	"created": "2015-11-03T23:21:42.656Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 17,
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