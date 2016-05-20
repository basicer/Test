{
	"_id": "573fa0ac3e910f115e5e463c",
	"index": true,
	"slug": "impales",
	"name": "Impales",
	"codeLanguage": "coffeescript",
	"js": "var Impales, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };\n\nImpales = (function(_super) {\n  __extends(Impales, _super);\n\n  function Impales() {\n    _ref = Impales.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Impales.className = 'Impales';\n\n  Impales.prototype.attach = function(thang) {\n    var impaleAction;\n    impaleAction = {\n      name: 'impale',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    Impales.__super__.attach.call(this, thang);\n    return thang.addActions(impaleAction);\n  };\n\n  Impales.prototype.impale = function(targetOrPos) {\n    this.setAction('impale');\n    return this.impaleTarget = targetOrPos;\n  };\n\n  Impales.prototype.update = function() {\n    if (this.action === 'impale' && this.act()) {\n      this.performImpale();\n    }\n    return this.updateMissiles();\n  };\n\n  Impales.prototype.performImpale = function() {\n    var dir, missile, missileThang, targetPos, _ref1, _ref2, _ref3, _ref4;\n    if (this.hidden) {\n      if (typeof this.unhide === \"function\") {\n        this.unhide();\n      }\n    }\n    targetPos = (_ref1 = (_ref2 = (_ref3 = this.impaleTarget) != null ? _ref3.pos : void 0) != null ? _ref2 : this.impaleTarget) != null ? _ref1 : new Vector(1, 0).rotate(this.rotation);\n    if (!targetPos.isVector) {\n      targetPos = new Vector(targetPos.x, targetPos.y, targetPos.z);\n    }\n    dir = Vector.subtract(targetPos, this.pos).normalize();\n    dir.z = 0;\n    if ((_ref4 = this.velocity) != null) {\n      _ref4.add(dir.copy().multiply(-this.impaleRecoilMass / this.mass));\n    }\n    if (typeof this.sayWithoutBlocking === \"function\") {\n      this.sayWithoutBlocking('Take THAT!');\n    }\n    if (!this.impaleMissileSpriteName) {\n      missileThang = this.world.getThangByID(this.impaleMissileThangID);\n      if (!missileThang) {\n        console.log(this.id, \"Impales problem: couldn't find missile to shoot for ID\", this.impaleMissileThangID);\n        return;\n      }\n      this.impaleMissileSpriteName = missileThang.spriteName;\n      this.impaleMissileComponents = _.cloneDeep(missileThang.components);\n    }\n    if (!this.impaleMissileSpriteName) {\n      return;\n    }\n    missile = this.spawn(this.impaleMissileSpriteName, this.impaleMissileComponents, null, 'Impaling ' + this.impaleMissileSpriteName);\n    missile.setExists(true);\n    missile.pos = Vector.add(this.pos, {\n      x: 0,\n      y: 0,\n      z: missile.pos.z\n    }, true);\n    missile.targetPos = missile.pos.copy().add(dir.copy().multiply(1000));\n    missile.velocity = dir.copy().multiply(missile.maxSpeed);\n    missile.maintainsElevation = function() {\n      return true;\n    };\n    missile.rotation = missile.velocity.heading() % (2 * Math.PI);\n    missile.hasRotated = true;\n    missile.targetsHit = [];\n    if (this.impaleMissiles == null) {\n      this.impaleMissiles = [];\n    }\n    return this.impaleMissiles.push(missile);\n  };\n\n  Impales.prototype.updateMissiles = function() {\n    var missile, momentum, thang, _i, _len, _ref1, _ref2, _results;\n    _ref2 = (_ref1 = this.impaleMissiles) != null ? _ref1 : [];\n    _results = [];\n    for (_i = 0, _len = _ref2.length; _i < _len; _i++) {\n      missile = _ref2[_i];\n      if (!missile.exists) {\n        continue;\n      }\n      missile.rotation = missile.velocity.heading() % (2 * Math.PI);\n      _results.push((function() {\n        var _j, _len1, _ref3, _ref4, _results1;\n        _ref3 = this.world.getSystem(\"Combat\").attackables;\n        _results1 = [];\n        for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {\n          thang = _ref3[_j];\n          if (thang !== this && !(_ref4 = thang.id, __indexOf.call(missile.targetsHit, _ref4) >= 0) && missile.intersects(thang)) {\n            momentum = Vector.subtract(thang.pos, this.pos).normalize(true);\n            momentum.z = Math.sin(Math.PI / 6);\n            momentum.normalize(true).multiply(this.impaleRecoilMass, true);\n            if (typeof thang.takeDamage === \"function\") {\n              thang.takeDamage(this.impaleDamage, this, momentum);\n            }\n            missile.addCurrentEvent('hit');\n            _results1.push(missile.targetsHit.push(thang.id));\n          } else {\n            _results1.push(void 0);\n          }\n        }\n        return _results1;\n      }).call(this));\n    }\n    return _results;\n  };\n\n  return Impales;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "53cb427403039b0439ee7517",
	"watchers": [
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"commitMessage": "sayWithoutBlocking",
	"parent": "558452244bed1b6c2a2caac4",
	"official": false,
	"configSchema": {
		"properties": {
			"cooldown": {
				"type": "number",
				"minimum": 0,
				"format": "seconds",
				"default": 1,
				"description": "How long the impale takes, in seconds."
			},
			"specificCooldown": {
				"type": "number",
				"format": "seconds",
				"minimum": 0,
				"description": "How long before this specific impale can be used again, in seconds."
			},
			"impaleRecoilMass": {
				"type": "number",
				"minimum": 0,
				"description": "How much mass to impart as recoil to the impaler, in kilograms.",
				"format": "kilograms",
				"default": 500
			},
			"impaleMissileThangID": {
				"type": "string",
				"description": "ID of the template missile Thang to fire. It should not have normal missile Components or collide with anything.",
				"default": "Impaling Spear"
			},
			"impaleDamage": {
				"type": "number",
				"default": 35,
				"description": "How much damage the impaling missile does."
			}
		},
		"default": {
			"cooldown": 1,
			"impaleRecoilMass": 500,
			"impaleMissileThangID": "Impaling Spear",
			"impaleDamage": 35,
			"specificCooldown": 0
		},
		"additionalProperties": false,
		"type": "object"
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
	"description": "This Component gives the Thang an impaling missile attack.",
	"system": "combat",
	"searchStrings": "impales i im imp impa impal",
	"created": "2016-05-20T23:41:32.389Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 7,
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