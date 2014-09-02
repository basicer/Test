{
	"_id": "54052776c587b892f51ae42a",
	"slug": "shoots",
	"creator": "512ef4805a67a8c507000001",
	"name": "Shoots",
	"original": "524b7bc67fc0f6d51900001a",
	"__v": 0,
	"js": "var Shoots, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nShoots = (function(_super) {\n  __extends(Shoots, _super);\n\n  function Shoots() {\n    _ref = Shoots.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Shoots.className = \"Shoots\";\n\n  Shoots.prototype.attach = function(thang) {\n    var _ref1, _ref2, _ref3;\n    thang.performAttackOriginal = thang.performAttack;\n    delete thang.performAttack;\n    this.missileThangType = ((_ref1 = this.requiredThangTypes) != null ? _ref1 : [])[0];\n    thang.requiredThangTypes = ((_ref3 = thang.requiredThangTypes) != null ? _ref3 : []).concat((_ref2 = this.requiredThangTypes) != null ? _ref2 : []);\n    if (this.missileThangType) {\n      thang.componentsForThangType(this.missileThangType);\n    }\n    delete this.requiredThangTypes;\n    return Shoots.__super__.attach.call(this, thang);\n  };\n\n  Shoots.prototype.performAttack = function(targetOrPos) {\n    var _base;\n    if (!this.missileComponents) {\n      this.configureMissile();\n    }\n    if (!this.missileComponents) {\n      return;\n    }\n    this.lastMissileShot = this.spawn(this.missileSpriteName, this.missileComponents);\n    if (typeof (_base = this.lastMissileShot).launch === \"function\") {\n      _base.launch(this);\n    }\n    if (typeof this.brake === \"function\") {\n      this.brake();\n    }\n    return this.lastMissileShot;\n  };\n\n  Shoots.prototype.configureMissile = function() {\n    var allied, missileThang, _ref1, _ref2, _ref3;\n    if (this.missileThangID && (missileThang = this.world.getThangByID(this.missileThangID))) {\n      this.missileComponents = _.cloneDeep(missileThang.components);\n      this.missileSpriteName = missileThang.spriteName;\n    } else if (this.missileThangType) {\n      this.missileComponents = _.cloneDeep(this.componentsForThangType(this.missileThangType));\n      this.missileSpriteName = (_ref1 = (_ref2 = _.find(this.world.thangTypes, {\n        original: this.missileThangType\n      })) != null ? _ref2.name : void 0) != null ? _ref1 : this.missileThangType;\n    }\n    if ((_ref3 = this.missileComponents) != null ? _ref3.length : void 0) {\n      if (allied = _.find(this.missileComponents, function(c) {\n        return c[1].team;\n      })) {\n        return allied[1].team = this.team;\n      }\n    } else {\n      return console.log(this.id, \"Shoots problem: couldn't find missile to shoot for ID\", this.missileThangID, \"or type\", this.missileThangType);\n    }\n  };\n\n  return Shoots;\n\n})(Component);\n",
	"commitMessage": "Can't wait until we upload live and the defaults work the same way.",
	"parent": "5405273cc587b892f51ae429",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"official": false,
	"configSchema": {
		"properties": {
			"missileThangID": {
				"type": "string",
				"description": "Old way of loading missiles. The specific ID of a Thang to use as a template for this Thang's missiles, like \"Arrow\", that already exists in the level.",
				"format": "thang"
			},
			"requiredThangTypes": {
				"type": "array",
				"description": "Contains a single element: the ThangType to use as a template for this Thang's missiles.",
				"additionalProperties": true,
				"items": {
					"description": "The ThangType to use as a template for this Thang's missiles.",
					"format": "thang-type",
					"type": "string"
				}
			}
		},
		"id": "__base__",
		"additionalProperties": false,
		"type": "object",
		"default": {
			"missileThangID": "",
			"requiredThangTypes": []
		}
	},
	"dependencies": [
		{
			"original": "524b7ba57fc0f6d519000016",
			"majorVersion": 0
		},
		{
			"original": "524cbdc03ea855e0ab0000bb",
			"majorVersion": 0
		}
	],
	"description": "This Thang can shoot other Thangs as missiles.",
	"system": "combat",
	"searchStrings": "shoots s sh sho shoo",
	"created": "2014-09-02T02:12:06.469Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 48,
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