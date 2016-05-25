{
	"_id": "5744f4ee3af6bf590cd273ba",
	"index": true,
	"slug": "item",
	"name": "Item",
	"codeLanguage": "coffeescript",
	"js": "var Item,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },\n  __slice = [].slice;\n\nItem = (function(_super) {\n  __extends(Item, _super);\n\n  Item.className = 'Item';\n\n  Item.prototype.isItem = true;\n\n  function Item(config) {\n    Item.__super__.constructor.call(this, config);\n  }\n\n  Item.prototype.attach = function(thang) {\n    var _ref;\n    Item.__super__.attach.call(this, thang);\n    thang.setExists(false);\n    if ((_ref = thang.world.getThangByID(this.ownerID)) != null ? _ref.programmableProperties : void 0) {\n      return this.equip();\n    }\n  };\n\n  Item.prototype.initialize = function() {\n    return this.equip();\n  };\n\n  Item.prototype.equip = function() {\n    var additionalBuilds, api, buildType, buildable, componentClass, componentConfig, method, plannableMethod, plannableMethods, programmableProperties, prop, usedPlannableMethods, _base, _base1, _i, _j, _k, _l, _len, _len1, _len2, _len3, _len4, _m, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6;\n    if (this.equipped) {\n      return;\n    }\n    this.equipped = true;\n    if (typeof this.setExists === \"function\") {\n      this.setExists(false);\n    }\n    this.owner = this.getThangByID(this.ownerID);\n    if (!this.owner) {\n      return console.log(this.id, \"couldn't find equipping owner with ID '\" + this.ownerID + \"'.\");\n    }\n    if (this.owner.plan) {\n      plannableMethods = ['pickUpItem', 'dropItem', 'move', 'moveXY', 'follow', 'moveRight', 'moveLeft', 'moveUp', 'moveDown', 'attack', 'attackPos', 'attackXY', 'attackNearestEnemy', 'attackNearbyEnemy', 'say', 'bustDownDoor', 'wait', 'swapItems', 'isBigger', 'isSmaller', 'buildXY', 'pickUpFlag', 'cleave', 'throw', 'cast', 'heal', 'hide', 'manaBlast', 'warcry', 'resetCooldown', 'envenom', 'backstab', 'bash', 'powerUp', 'scattershot', 'jump', 'jumpTo', 'electrocute', 'summon', 'dash', 'throwPos', 'shield', 'hurl', 'stomp', 'devour'];\n      usedPlannableMethods = (function() {\n        var _i, _len, _results;\n        _results = [];\n        for (_i = 0, _len = plannableMethods.length; _i < _len; _i++) {\n          method = plannableMethods[_i];\n          if (this.owner[method]) {\n            _results.push(method);\n          }\n        }\n        return _results;\n      }).call(this);\n    }\n    _ref = this.components;\n    for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n      _ref1 = _ref[_i], componentClass = _ref1[0], componentConfig = _ref1[1];\n      if (componentClass.className === 'Builds' && this.owner.buildables) {\n        additionalBuilds = new componentClass(componentConfig != null ? componentConfig : {});\n        _ref2 = additionalBuilds._buildables;\n        for (buildType in _ref2) {\n          buildable = _ref2[buildType];\n          this.owner.addBuildable(buildType, buildable);\n        }\n        continue;\n      }\n      if (componentClass.className === 'Commands' && this.owner.commandableTypes) {\n        this.owner.commandableTypes = _.union(this.owner.commandableTypes, componentConfig.commandableTypes || []);\n        this.owner.commandableMethods = _.union(this.owner.commandableMethods, componentConfig.commandableMethods || []);\n        continue;\n      }\n      if (componentClass.className === 'Collects' && this.owner.collect && !this.owner.inventorySystem.ignoreItemGold) {\n        if (componentConfig.startingGold) {\n          this.owner.inventorySystem.addGoldForTeam(this.owner.team, componentConfig.startingGold, false);\n        }\n        if (componentConfig.income) {\n          this.owner.inventorySystem.teamGold[this.owner.team].income += componentConfig.income;\n        }\n        continue;\n      }\n      if (_.find(this.owner.components, function(c2) {\n        return c2[0] === componentClass;\n      })) {\n        continue;\n      }\n      if (componentClass.className === 'Item') {\n        continue;\n      }\n      this.owner.addComponents([componentClass, componentConfig]);\n    }\n    if (this.owner.plan) {\n      _ref3 = _.difference(plannableMethods, usedPlannableMethods);\n      for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {\n        plannableMethod = _ref3[_j];\n        if (this.owner[plannableMethod] != null) {\n          this.owner.plannifyMethod(plannableMethod);\n        }\n      }\n    }\n    if (this.moreProgrammableProperties == null) {\n      this.moreProgrammableProperties = [];\n    }\n    if (this.owner.isProgrammable) {\n      programmableProperties = this.programmableProperties.concat(this.moreProgrammableProperties);\n      for (_k = 0, _len2 = programmableProperties.length; _k < _len2; _k++) {\n        prop = programmableProperties[_k];\n        if (!(!(__indexOf.call(this.owner.programmableProperties, prop) >= 0))) {\n          continue;\n        }\n        if (__indexOf.call(this.moreProgrammableProperties, prop) < 0) {\n          this.owner.programmableProperties.push(prop);\n        }\n        api = _.isFunction(this.owner[prop]) ? this.owner.apiOwnMethods : this.owner.apiProperties;\n        if (!((__indexOf.call(this.owner.apiMethods, prop) >= 0) || (__indexOf.call(this.owner.apiProperties, prop) >= 0) || (__indexOf.call(this.owner.apiOwnMethods, prop) >= 0))) {\n          api.push(prop);\n        }\n      }\n      if ((_base = this.owner).moreProgrammableProperties == null) {\n        _base.moreProgrammableProperties = [];\n      }\n      _ref4 = this.moreProgrammableProperties;\n      for (_l = 0, _len3 = _ref4.length; _l < _len3; _l++) {\n        prop = _ref4[_l];\n        if (!(__indexOf.call(this.owner.moreProgrammableProperties, prop) >= 0)) {\n          this.owner.moreProgrammableProperties.push(prop);\n        }\n      }\n      _ref5 = this.owner.apiProperties.slice();\n      for (_m = 0, _len4 = _ref5.length; _m < _len4; _m++) {\n        prop = _ref5[_m];\n        if (!(_.isFunction(this.owner[prop]))) {\n          continue;\n        }\n        this.owner.apiProperties = _.without(this.owner.apiProperties, prop);\n        this.owner.apiOwnMethods.push(prop);\n      }\n    }\n    this.owner.hudProperties = _.union(this.owner.hudProperties, (_ref6 = this.extraHUDProperties) != null ? _ref6 : []);\n    this.owner.updateRegistration();\n    return typeof (_base1 = this.owner).postEquip === \"function\" ? _base1.postEquip() : void 0;\n  };\n\n  Item.prototype.modifyStats = function() {\n    var modifiers, prop, relatedProp, _ref, _results;\n    if (!this.owner) {\n      return console.warn(this.id, \"can't modify stats for ownerID\", this.ownerID, \"because that owner doesn't exist.\");\n    }\n    _ref = this.stats;\n    _results = [];\n    for (prop in _ref) {\n      modifiers = _ref[prop];\n      this.modifyStat(prop, modifiers);\n      if (/^max.+/.test(prop)) {\n        relatedProp = prop.replace(/^max(.)(.*)/, function() {\n          var groups;\n          groups = 1 <= arguments.length ? __slice.call(arguments, 0) : [];\n          return groups[1].toLowerCase() + groups[2];\n        });\n        if (this.owner[relatedProp] != null) {\n          this.modifyStat(relatedProp, modifiers, prop);\n        }\n      }\n      if (this.owner[prop + 'Squared']) {\n        _results.push(this.owner[prop + 'Squared'] = Math.pow(this.owner[prop], 2));\n      } else {\n        _results.push(void 0);\n      }\n    }\n    return _results;\n  };\n\n  Item.prototype.modifyStat = function(prop, modifiers, originalProp) {\n    var allProperties, oldVal, type, _ref, _ref1, _ref2;\n    if (originalProp == null) {\n      originalProp = null;\n    }\n    oldVal = this.owner[prop];\n    if (modifiers.setTo != null) {\n      this.owner[prop] = modifiers.setTo;\n    }\n    if ((modifiers.addend != null) && (this.owner[prop] != null)) {\n      this.owner[prop] += modifiers.addend * (this.owner[(originalProp != null ? originalProp : prop) + 'Factor'] || 1);\n    }\n    if (modifiers.factor != null) {\n      this.owner[prop] *= modifiers.factor;\n    }\n    allProperties = ((_ref2 = this.owner.programmableProperties) != null ? _ref2 : []).concat((_ref1 = this.owner.moreProgrammableProperties) != null ? _ref1 : []).concat((_ref = this.owner.hudProperties) != null ? _ref : []);\n    if (!_.isEqual(this.owner[prop], oldVal) && ((__indexOf.call(allProperties, prop) >= 0) || prop.substr(0, 3) === 'max')) {\n      type = '';\n      if (_.isNumber(this.owner[prop])) {\n        type || (type = 'number');\n      }\n      if (_.isString(this.owner[prop])) {\n        type || (type = 'string');\n      }\n      if (this.owner[prop] === false || this.owner[prop] === true) {\n        type || (type = 'boolean');\n      }\n      if (_.isArray(this.owner[prop])) {\n        type || (type = 'array');\n      }\n      type || (type = 'object');\n      this.owner.addTrackedProperties([prop, type]);\n      return this.owner.keepTrackedProperty(prop);\n    }\n  };\n\n  return Item;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "53e12043b82921000051cdf9",
	"watchers": [
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"commitMessage": "Added a postEquip method (for use in HasPet so far).",
	"parent": "56f4626a8a6fac010f7bb584",
	"official": false,
	"configSchema": {
		"properties": {
			"extraHUDProperties": {
				"type": "array",
				"items": {
					"type": "string"
				},
				"default": [],
				"description": "Names of properties to display in the HUD when this Thang is selected."
			},
			"moreProgrammableProperties": {
				"type": "array",
				"items": {
					"type": "string",
					"minLength": 1
				},
				"uniqueItems": true,
				"default": [],
				"description": "Which non-important programmable properties this item adds to its hero."
			},
			"ownerID": {
				"type": "string",
				"format": "thang",
				"description": "The ID of the Thang which will equip this item.",
				"default": ""
			},
			"programmableProperties": {
				"type": "array",
				"items": {
					"type": "string",
					"default": "attack",
					"minLength": 1
				},
				"description": "Which programmable properties this Item adds to its hero.",
				"default": [],
				"uniqueItems": true
			},
			"slots": {
				"type": "array",
				"items": {
					"type": "string",
					"enum": [
						"head",
						"eyes",
						"neck",
						"torso",
						"wrists",
						"gloves",
						"left-ring",
						"right-ring",
						"right-hand",
						"left-hand",
						"waist",
						"feet",
						"programming-book",
						"pet",
						"minion",
						"flag",
						"misc-0",
						"misc-1"
					],
					"default": "right-hand"
				},
				"description": "Which slots this Item might be equipped in.",
				"minItems": 1,
				"default": [
					"right-hand"
				],
				"uniqueItems": true
			},
			"stats": {
				"type": "object",
				"description": "Which stat modifiers this Item confers. You can add additional properties besides those listed, but consider adding them in their Components and the extraHUDProperties instead.",
				"additionalProperties": {
					"type": "object",
					"additionalProperties": false,
					"properties": {
						"setTo": {
							"description": "What value to set this property to."
						},
						"addend": {
							"type": "number",
							"description": "What number to add to this property (after setTo).",
							"default": 0
						},
						"factor": {
							"type": "number",
							"description": "What number to multiply this property by (after setTo and addend).",
							"default": 1
						}
					}
				},
				"properties": {
					"maxHealth": {
						"properties": {
							"addend": {
								"type": "number",
								"description": "What number to add to this property (after setTo).",
								"default": 0
							}
						},
						"description": "Main armor stat.",
						"type": "object",
						"default": {
							"addend": 10
						},
						"additionalProperties": false
					},
					"maxSpeed": {
						"properties": {
							"addend": {
								"type": "number",
								"description": "What number to add to this property (after setTo).",
								"default": 0
							}
						},
						"description": "Main boots stat, and can be used for certain other items encumbering you.",
						"type": "object"
					},
					"healthReplenishRate": {
						"properties": {
							"addend": {
								"type": "number",
								"description": "What number to add to this property (after setTo).",
								"default": 0
							}
						},
						"description": "Add any health regen here.",
						"type": "object"
					},
					"shieldDefenseFactor": {
						"description": "Assign in extraHUDProperties and Shields Component, not here.",
						"properties": {
							"setTo": {
								"description": "What value to set this property to."
							},
							"addend": {
								"type": "number",
								"description": "What number to add to this property (after setTo).",
								"default": 0
							},
							"factor": {
								"type": "number",
								"description": "What number to multiply this property by (after setTo and addend).",
								"default": 1
							}
						},
						"type": "object"
					},
					"attackDamage": {
						"type": "object",
						"properties": {
							"addend": {
								"type": "number",
								"description": "What number to add to this property (after setTo).",
								"default": 0
							},
							"factor": {
								"type": "number",
								"description": "What number to multiply this property by (after setTo and addend).",
								"default": 1
							}
						},
						"description": "Assign in extraHUDProperties and Attacks Component, not here. (Unless a non-primary-weapon item is increasing the attack damage.)"
					}
				}
			}
		},
		"additionalProperties": false,
		"type": "object",
		"default": {
			"slots": [
				"right-hand"
			],
			"programmableProperties": [],
			"moreProgrammableProperties": [],
			"ownerID": "",
			"extraHUDProperties": []
		}
	},
	"dependencies": [
		{
			"original": "524b4150ff92f1f4f8000024",
			"majorVersion": 0
		}
	],
	"description": "This Component lets the Thang be equipped as an item in the inventory of a Thang which Equips.",
	"system": "inventory",
	"searchStrings": "item i it",
	"created": "2016-05-25T00:42:22.890Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 56,
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