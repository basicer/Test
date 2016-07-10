{
	"_id": "57828c0e7e82714c005f1af5",
	"searchStrings": "throws t th thr thro",
	"index": true,
	"slug": "throws",
	"name": "Throws",
	"js": "var ArgumentError, Throws, Vector, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nArgumentError = require('lib/world/errors').ArgumentError;\n\nVector = require('lib/world/vector');\n\nThrows = (function(_super) {\n  __extends(Throws, _super);\n\n  function Throws() {\n    _ref = Throws.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Throws.className = 'Throws';\n\n  Throws.prototype.attach = function(thang) {\n    var throwAction, _ref1, _ref2, _ref3;\n    throwAction = {\n      name: 'throw',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    this.thrownMissileThangType = ((_ref1 = this.requiredThangTypes) != null ? _ref1 : [])[0];\n    thang.requiredThangTypes = ((_ref3 = thang.requiredThangTypes) != null ? _ref3 : []).concat((_ref2 = this.requiredThangTypes) != null ? _ref2 : []);\n    if (this.thrownMissileThangType) {\n      thang.componentsForThangType(this.thrownMissileThangType);\n    }\n    delete this.requiredThangTypes;\n    Throws.__super__.attach.call(this, thang);\n    return thang.addActions(throwAction);\n  };\n\n  Throws.prototype.performThrow = function(targetOrPos) {\n    var _base;\n    if (!this.thrownMissileComponents) {\n      this.configureThrownMissile();\n    }\n    if (!this.thrownMissileComponents) {\n      return;\n    }\n    if (typeof this.unblock === \"function\") {\n      this.unblock();\n    }\n    this.intent = void 0;\n    if (this.hidden) {\n      if (typeof this.unhide === \"function\") {\n        this.unhide();\n      }\n    }\n    this.lastMissileThrown = this.spawn(this.thrownMissileSpriteName, this.thrownMissileComponents);\n    if (typeof (_base = this.lastMissileThrown).launch === \"function\") {\n      _base.launch(this, 'throw');\n    }\n    if (typeof this.brake === \"function\") {\n      this.brake();\n    }\n    if (typeof this.sayWithoutBlocking === \"function\") {\n      this.sayWithoutBlocking(\"Take that!\");\n    }\n    return this.lastMissileThrown;\n  };\n\n  Throws.prototype.configureThrownMissile = function() {\n    var allied, _ref1, _ref2, _ref3;\n    if (this.thrownMissileThangType) {\n      this.thrownMissileComponents = _.cloneDeep(this.componentsForThangType(this.thrownMissileThangType));\n      this.thrownMissileSpriteName = (_ref1 = (_ref2 = _.find(this.world.thangTypes, {\n        original: this.thrownMissileThangType\n      })) != null ? _ref2.name : void 0) != null ? _ref1 : this.thrownMissileThangType;\n    }\n    if ((_ref3 = this.thrownMissileComponents) != null ? _ref3.length : void 0) {\n      if (allied = _.find(this.thrownMissileComponents, function(c) {\n        return c[1].team;\n      })) {\n        return allied[1].team = this.team;\n      }\n    } else {\n      return console.log(this.id, \"Throws problem: couldn't find missile to throw for type\", this.thrownMissileThangType);\n    }\n  };\n\n  Throws.prototype.performThrownAttack = function(target, damageRatio, momentum) {\n    var _ref1;\n    if (damageRatio == null) {\n      damageRatio = 1;\n    }\n    if (momentum == null) {\n      momentum = null;\n    }\n    if (momentum == null) {\n      momentum = this.getThrowMomentum((_ref1 = target.pos) != null ? _ref1 : target);\n    }\n    return typeof target.takeDamage === \"function\" ? target.takeDamage(this.throwDamage * damageRatio, this, momentum) : void 0;\n  };\n\n  Throws.prototype.getThrowMomentum = function(targetPos) {\n    var dir;\n    if (!this.throwMass) {\n      return null;\n    }\n    dir = targetPos.copy().subtract(this.pos).normalize();\n    dir.z = Math.sin(0.2);\n    return dir.normalize().multiply(this.throwMass, true);\n  };\n\n  Throws.prototype.canThrow = function() {\n    var distance, targetPos;\n    if (!(this.canAct('throw') && (targetPos = this.getTargetPos()))) {\n      return false;\n    }\n    distance = this.distance(targetPos, false);\n    return distance - 0.5 <= this.throwRange;\n  };\n\n  Throws.prototype.setThrow = function() {\n    var target;\n    this.intent = 'throw';\n    if (typeof this.announceAction === \"function\") {\n      this.announceAction('throw');\n    }\n    target = this.target || this.targetPos;\n    if (target && this.actions.move && this.chasesWhenAttackingOutOfRange && this.distance(this.getTargetPos(), false) - 0.5 > this.throwRange) {\n      this.currentSpeedRatio = 1;\n      this.setAction('move');\n    } else {\n      if (this.distance(this.getTargetPos(), false) > this.throwRange) {\n        this.currentSpeedRatio = 1;\n        this.setAction('move');\n      } else {\n        this.setAction('throw');\n      }\n    }\n    return typeof this.block === \"function\" ? this.block() : void 0;\n  };\n\n  Throws.prototype[\"throw\"] = function(target) {\n    if (typeof target === 'undefined' || ((target == null) && this.hasEnemies())) {\n      throw new ArgumentError(\"throw target is null.\", \"throw\", \"target\", \"object\", target);\n    }\n    if (!target) {\n      this.setAction('idle');\n      this.setTarget(null);\n    }\n    this.setTarget(target, 'throw');\n    return this.setThrow();\n  };\n\n  Throws.prototype.throwPos = function(targetPos) {\n    if (typeof targetPos === 'undefined') {\n      throw new ArgumentError(\"You need a position to throw at.\", 'throwPos', \"targetPos\", \"object\", targetPos);\n    }\n    this.setTargetPos(targetPos, 'throw');\n    return this.setThrow();\n  };\n\n  Throws.prototype.throwXY = function(x, y, z) {\n    var k, _i, _len, _ref1;\n    _ref1 = [[\"x\", x], [\"y\", y], [\"z\", z]];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      k = _ref1[_i];\n      if (!((_.isNumber(k[1]) && !_.isNaN(k[1]) && k[1] !== Infinity) || (k[0] === \"z\" && (k[1] == null)))) {\n        throw new ArgumentError(\"Throw at an {x: number, y: number} position.\", \"throwXY\", k[0], \"number\", k[1]);\n      }\n    }\n    return this.throwPos(new Vector(x, y, z));\n  };\n\n  return Throws;\n\n})(Component);\n",
	"system": "combat",
	"creator": "5780048c7f66cf20001d55ba",
	"original": "54627b59f44055a4b5e73536",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 1,
	"description": "This Component gives the Thang the ability to throw missiles.",
	"dependencies": [
		{
			"original": "524cbdc03ea855e0ab0000bb",
			"majorVersion": 0
		},
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		},
		{
			"original": "524b7b7c7fc0f6d519000011",
			"majorVersion": 0
		},
		{
			"original": "524b7b747fc0f6d519000010",
			"majorVersion": 0
		}
	],
	"commitMessage": "Diplomat submission for lang es-ES: 4 change(s).",
	"parent": "5775004a02375124003a845c",
	"configSchema": {
		"properties": {
			"cooldown": {
				"type": "number",
				"description": "How many seconds each throw takes.",
				"default": 0.5,
				"minimum": 0,
				"format": "seconds"
			},
			"requiredThangTypes": {
				"type": "array",
				"description": "Contains a single element: the ThangType to use as a template for this Thang's thrown missiles.",
				"additionalProperties": true,
				"items": {
					"description": "The ThangType to use as a template for this Thang's thrown missiles.",
					"format": "thang-type",
					"type": "string"
				},
				"maxItems": 1
			},
			"specificCooldown": {
				"type": "number",
				"description": "How many seconds before this specific throw can be done again, if longer than normal cooldown.",
				"minimum": 0,
				"format": "seconds",
				"default": 0
			},
			"throwDamage": {
				"type": "number",
				"description": "How much damage each throw does.",
				"default": 5
			},
			"throwMass": {
				"type": "number",
				"description": "How much mass to impart to the momentum of the throw.",
				"format": "kilograms",
				"default": 0
			},
			"throwRange": {
				"type": "number",
				"description": "How many meters this throw can reach.",
				"minimum": 0,
				"exclusiveMinimum": true,
				"default": 15,
				"format": "meters"
			}
		},
		"additionalProperties": false,
		"type": "object",
		"default": {
			"requiredThangTypes": [],
			"throwDamage": 5,
			"throwRange": 15,
			"cooldown": 0.5,
			"specificCooldown": 0,
			"throwMass": 0
		}
	},
	"i18nCoverage": [
		"-",
		"fr",
		"de-DE",
		"es-ES",
		"ru",
		"zh-HANS",
		"es-419",
		"sk",
		"it",
		"uk",
		"pt-BR",
		"zh-HANT",
		"pl",
		"nl-NL",
		"sv",
		"el",
		"cs",
		"da"
	],
	"patches": [
		"579c0bcf80c64f24009349e1"
	],
	"created": "2016-07-10T17:55:26.282Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 53,
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