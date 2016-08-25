{
	"_id": "57bf219114bddd200022f9a6",
	"searchStrings": "has pet h ha has hasp",
	"index": true,
	"slug": "haspet",
	"name": "HasPet",
	"js": "var HasPet, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nHasPet = (function(_super) {\n  __extends(HasPet, _super);\n\n  function HasPet() {\n    _ref = HasPet.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  HasPet.className = 'HasPet';\n\n  HasPet.prototype.attach = function(thang) {\n    var _ref1, _ref2, _ref3;\n    if (!(this.petThangType = ((_ref1 = this.requiredThangTypes) != null ? _ref1 : [])[0])) {\n      console.error(thang.id, \"HasPet problem: pet requiredThangTypes is not configured.\");\n      delete this.requiredThangTypes;\n      return HasPet.__super__.attach.call(this, thang);\n    }\n    thang.requiredThangTypes = ((_ref3 = thang.requiredThangTypes) != null ? _ref3 : []).concat((_ref2 = this.requiredThangTypes) != null ? _ref2 : []);\n    delete this.requiredThangTypes;\n    return HasPet.__super__.attach.call(this, thang);\n  };\n\n  HasPet.prototype.postEquip = function() {\n    if (this.pet) {\n      return;\n    }\n    return this.spawnPet();\n  };\n\n  HasPet.prototype.spawnPet = function() {\n    var aether, aiSystem, allied, angle, petComponents, petSpriteName, placementAttempts, targetPos, _base, _ref1, _ref2;\n    petSpriteName = (_ref1 = (_ref2 = _.find(this.world.thangTypes, {\n      original: this.petThangType\n    })) != null ? _ref2.name : void 0) != null ? _ref1 : this.petThangType;\n    petComponents = _.cloneDeep(this.componentsForThangType(this.petThangType));\n    if (petComponents != null ? petComponents.length : void 0) {\n      if (allied = _.find(petComponents, function(c) {\n        return c[1].team;\n      })) {\n        allied[1].team = this.team;\n      }\n    }\n    aiSystem = this.world.getSystem(\"AI\");\n    angle = this.world.rand.randf() * 2 * Math.PI;\n    placementAttempts = 8;\n    while (placementAttempts--) {\n      targetPos = new Vector(this.pos.x + 3 * Math.cos(angle), this.pos.y + 3 * Math.sin(angle));\n      if (aiSystem.isPathClear(this.pos, targetPos, this, true)) {\n        break;\n      }\n      angle += Math.PI / 4;\n    }\n    this.pet = this.spawn(petSpriteName, petComponents);\n    this.pet.pos.x = targetPos.x;\n    this.pet.pos.y = targetPos.y;\n    if (this.pet.move) {\n      this.pet.hasMoved = true;\n    } else {\n      this.pet.addTrackedProperties(['pos', 'Vector']);\n      this.pet.keepTrackedProperty('pos');\n    }\n    if (aether = typeof this.getAetherForMethod === \"function\" ? this.getAetherForMethod('plan') : void 0) {\n      if (typeof aether.addGlobal === \"function\") {\n        aether.addGlobal('pet', this.pet);\n      }\n    }\n    this.pet.commander = this;\n    this.pet.actionsShouldBlock = true;\n    return typeof (_base = this.pet).trigger === \"function\" ? _base.trigger(\"spawn\") : void 0;\n  };\n\n  return HasPet;\n\n})(Component);\n",
	"system": "existence",
	"creator": "54b1773a75e3055205e5a449",
	"original": "5744e6733af6bf590cd2737d",
	"watchers": [
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"description": "This Component makes the Thang spawn a pet.",
	"dependencies": [
		{
			"original": "524b4150ff92f1f4f8000024",
			"majorVersion": 0
		},
		{
			"original": "524cbdc03ea855e0ab0000bb",
			"majorVersion": 0
		}
	],
	"commitMessage": "Pets should block when performing some actions",
	"parent": "57a109a7f68b492900a76edc",
	"configSchema": {
		"properties": {
			"requiredThangTypes": {
				"type": "array",
				"description": "Contains a single element: the ThangType to use as a template for this Thang's pet.",
				"additionalProperties": true,
				"items": {
					"description": "The ThangType to use as a template for this Thang's pet.",
					"format": "thang-type",
					"type": "string",
					"maxItems": 1
				}
			}
		},
		"default": {
			"requiredThangTypes": []
		}
	},
	"created": "2016-08-25T16:49:21.102Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 9,
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