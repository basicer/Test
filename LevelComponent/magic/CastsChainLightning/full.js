{
	"_id": "5707303eb4c3e345df36300c",
	"searchStrings": "casts chain lightning c ca cas cast casts castsc castsch castscha castschai castschain castschainl castschainli castschainlig castschainligh castschainlight castschainlightn castschainlightni",
	"index": true,
	"slug": "castschainlightning",
	"name": "CastsChainLightning",
	"js": "var ArgumentError, ChainLightning, Vector,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nArgumentError = require('lib/world/errors').ArgumentError;\n\nVector = require('lib/world/vector');\n\nChainLightning = (function(_super) {\n  __extends(ChainLightning, _super);\n\n  ChainLightning.className = 'ChainLightning';\n\n  function ChainLightning(config) {\n    ChainLightning.__super__.constructor.call(this, config);\n    this._chainLightningSpell = {\n      name: 'chain-lightning',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      range: this.range,\n      damage: this.damage,\n      bounceCount: this.bounceCount,\n      damageMultiplier: this.damageMultiplier,\n      bounceRange: this.bounceRange,\n      forks: this.forks,\n      forkCount: this.forkCount,\n      chainReturnMinimum: this.chainReturnMinimum,\n      chainBirthTime: this.chainBirthTime,\n      chainLifeTime: this.chainLifeTime,\n      chainRandomnessBias: this.chainRandomnessBias\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    delete this.range;\n    delete this.damage;\n    delete this.bounceCount;\n    delete this.damageMultiplier;\n    delete this.bounceRange;\n    delete this.forks;\n    delete this.forkCount;\n    delete this.chainReturnMinimum;\n    delete this.chainBirthTime;\n    delete this.chainLifeTime;\n    delete this.chainRandomnessBias;\n  }\n\n  ChainLightning.prototype.attach = function(thang) {\n    var _ref, _ref1, _ref2;\n    this.chainLightningThangType = ((_ref = this.requiredThangTypes) != null ? _ref : [])[0];\n    thang.requiredThangTypes = ((_ref2 = thang.requiredThangTypes) != null ? _ref2 : []).concat((_ref1 = this.requiredThangTypes) != null ? _ref1 : []);\n    if (this.chainLightningThangType) {\n      thang.componentsForThangType(this.chainLightningThangType);\n    }\n    delete this.requiredThangTypes;\n    ChainLightning.__super__.attach.call(this, thang);\n    return thang.addSpell(this._chainLightningSpell);\n  };\n\n  ChainLightning.prototype['perform_chain-lightning'] = function() {\n    var a, chainLightning, curTarget, _i, _ref;\n    if (this.hidden) {\n      if (typeof this.unhide === \"function\") {\n        this.unhide();\n      }\n    }\n    if (!this.chainLightningComponents) {\n      this.configureChainLightningMissile();\n    }\n    this.targetsHit = [this];\n    this.chainBolts = [];\n    for (a = _i = 0, _ref = this.spells['chain-lightning'].bounceCount + 1; 0 <= _ref ? _i < _ref : _i > _ref; a = 0 <= _ref ? ++_i : --_i) {\n      if (!(this.target && this.target !== null)) {\n        return;\n      }\n      this.targetsHit.push(this.target);\n      curTarget = this.target;\n      this.setTarget(this.findNextClosest());\n      if (!this.chainLightningComponents) {\n        throw new ArgumentError(\"There was a problem loading the Chain Lightning Thang Components.\");\n      } else {\n        chainLightning = this.spawn(this.chainLightningSpriteName, this.chainLightningComponents);\n        chainLightning.setExists(true);\n        chainLightning.keepTrackedProperty('pos');\n        chainLightning.keepTrackedProperty('rotation');\n        chainLightning.keepTrackedProperty('scaleFactorX');\n        chainLightning.keepTrackedProperty('scaleFactorY');\n        chainLightning.birthspan = a * this.spells['chain-lightning'].chainBirthTime;\n        chainLightning.isBorn = false;\n        chainLightning.lifespan = this.spells['chain-lightning'].chainLifeTime;\n        chainLightning.maxLife = this.spells['chain-lightning'].chainLifeTime;\n        chainLightning.damageIs = this.spells['chain-lightning'].damage * Math.pow(this.spells['chain-lightning'].damageMultiplier, a);\n        chainLightning.scaleFactorY = 0;\n        chainLightning.update = function() {\n          var index, potential;\n          this.birthspan -= this.world.dt;\n          if (this.birthspan <= 0 && !this.isBorn) {\n            if (this.prevRef) {\n              this.oT = this.prevRef.eT;\n            }\n            if (this.oT && this.eT && (this.eT.health <= 0 || this.eT === this.oT)) {\n              potential = this.spawner.getEnemies();\n              index = potential.indexOf(this.oT);\n              if (index !== -1) {\n                potential.splice(index, 1);\n              }\n              this.eT = this.oT.findNearest(potential);\n              if (!this.eT || this.eT.distanceTo(this.oT) > this.tBounceRange) {\n                this.setExists(false);\n              }\n            }\n            if (this.eT) {\n              this.eT.takeDamage(this.damageIs, this.spawner);\n              this.isBorn = true;\n            } else {\n              this.setExists(false);\n            }\n          }\n          if (this.isBorn) {\n            if (this.oT && this.eT) {\n              this.pos = Vector.divide(Vector.add(this.oT.pos, this.eT.pos), 2);\n              this.diff = Vector.subtract(this.oT.pos, this.eT.pos);\n              this.rotation = this.diff.heading();\n              this.hasRotated = true;\n              this.scaleFactorX = Math.max(0.2, 1 / 10 * this.diff.magnitude() / 2);\n            }\n            this.lifespan -= this.world.dt;\n            this.scaleFactorY = 2 * Math.max(this.lifespan / this.maxLife, 0);\n            if (this.lifespan <= 0) {\n              this.setExists(false);\n            }\n          }\n        };\n        chainLightning.tBounceRange = this.spells['chain-lightning'].bounceRange;\n        chainLightning.spawner = this;\n        chainLightning.oT = this.targetsHit[this.targetsHit.length - 2];\n        chainLightning.eT = this.targetsHit[this.targetsHit.length - 1];\n        chainLightning.pos = Vector.divide(Vector.add(chainLightning.oT.pos, chainLightning.eT.pos), 2);\n        chainLightning.diff = Vector.subtract(chainLightning.oT.pos, chainLightning.eT.pos);\n        chainLightning.rotation = chainLightning.diff.heading();\n        chainLightning.hasRotated = true;\n        chainLightning.scaleFactorX = Math.max(0.2, 1 / 10 * chainLightning.diff.magnitude() / 2);\n        if (this.chainBolts.length > 0) {\n          chainLightning.prevRef = this.chainBolts[this.chainBolts.length - 1];\n        }\n        this.chainBolts.push(chainLightning);\n      }\n    }\n    if (typeof this.brake === \"function\") {\n      this.brake();\n    }\n    return null;\n  };\n\n  ChainLightning.prototype.findNextClosest = function() {\n    var distTargets, potentialTargets, target, _i, _j, _len, _len1;\n    distTargets = [];\n    potentialTargets = this.findEnemies();\n    for (_i = 0, _len = potentialTargets.length; _i < _len; _i++) {\n      target = potentialTargets[_i];\n      distTargets.push([target, this.target.distance(target)]);\n    }\n    distTargets.sort(function(a, b) {\n      if (a[1] < b[1]) {\n        return -1;\n      } else if (a[1] > b[1]) {\n        return 1;\n      }\n      return 0;\n    });\n    potentialTargets = [];\n    for (_j = 0, _len1 = distTargets.length; _j < _len1; _j++) {\n      target = distTargets[_j];\n      if (this.spells['chain-lightning'].chainReturnMinimum < 2) {\n        if (target[0] !== this.target && this.targetsHit.indexOf(target[0]) === -1) {\n          if (this.target.distance(target[0]) > this.spells['chain-lightning'].bounceRange) {\n            break;\n          } else {\n            potentialTargets.push(target[0]);\n          }\n        }\n      } else {\n        if (target[0] !== this.target) {\n          if (this.targetsHit.indexOf(target[0]) === -1 || this.targetsHit.indexOf(target[0]) <= ((this.targetsHit.length - 1) - this.spells['chain-lightning'].chainReturnMinimum)) {\n            if (this.target.distance(target[0]) > this.spells['chain-lightning'].bounceRange) {\n              break;\n            } else {\n              potentialTargets.push(target[0]);\n            }\n          }\n        }\n      }\n    }\n    if (potentialTargets.length > 0) {\n      return potentialTargets[Math.floor(potentialTargets.length * Math.random() * this.spells['chain-lightning'].chainRandomnessBias)];\n    } else {\n      return null;\n    }\n  };\n\n  ChainLightning.prototype.configureChainLightningMissile = function() {\n    var allied, _ref, _ref1, _ref2;\n    if (this.chainLightningThangType) {\n      this.chainLightningComponents = _.cloneDeep(this.componentsForThangType(this.chainLightningThangType));\n      this.chainLightningSpriteName = (_ref = (_ref1 = _.find(this.world.thangTypes, {\n        original: this.chainLightningThangType\n      })) != null ? _ref1.name : void 0) != null ? _ref : this.chainLightningThangType;\n    }\n    if ((_ref2 = this.chainLightningComponents) != null ? _ref2.length : void 0) {\n      if (allied = _.find(this.chainLightningComponents, function(c) {\n        return c[1].team;\n      })) {\n        return allied[1].team = this.team;\n      }\n    } else {\n      return console.log(this.id, \"CastsChainLightning problem: couldn't find missile to shoot for type\", this.chainLightningThangType);\n    }\n  };\n\n  return ChainLightning;\n\n})(Component);\n",
	"system": "magic",
	"creator": "512ef4805a67a8c507000001",
	"original": "551e1ca7c13fa0320526064d",
	"watchers": [
		"537d01f484c54c6e05c05989"
	],
	"__v": 0,
	"commitMessage": "Fix @world from world masking global world reference bug",
	"parent": "55c8e51d6f518044b1e5e35c",
	"description": "This Component gives the Thang a chain lightning spell.",
	"configSchema": {
		"default": {
			"bounceCount": 8,
			"bounceRange": 20,
			"chainReturnMinimum": -1,
			"cooldown": 0.75,
			"damage": 120,
			"damageMultiplier": 0.75,
			"forkCount": 2,
			"forks": false,
			"chainBirthTime": 0.25,
			"chainLifeTime": 0.5,
			"chainRandomnessBias": 0.25,
			"requiredThangTypes": [
				"529ec2cec423d4e83b000011"
			],
			"range": 30,
			"specificCooldown": 20
		},
		"properties": {
			"bounceCount": {
				"type": "integer",
				"minimum": 0
			},
			"bounceRange": {
				"type": "number",
				"format": "meters",
				"minimum": 0
			},
			"chainBirthTime": {
				"type": "number",
				"minimum": 0,
				"additionalProperties": false,
				"format": "seconds"
			},
			"chainLifeTime": {
				"format": "seconds",
				"type": "number",
				"minimum": 0.5
			},
			"chainRandomnessBias": {
				"type": "number",
				"minimum": 0,
				"maximum": 1
			},
			"chainReturnMinimum": {
				"type": "integer",
				"format": "bounces",
				"minimum": -1
			},
			"cooldown": {
				"type": "number",
				"format": "seconds",
				"minimum": 0
			},
			"damage": {
				"minimum": 0,
				"type": "number"
			},
			"damageMultiplier": {
				"type": "number"
			},
			"forkCount": {
				"type": "integer",
				"minimum": 2
			},
			"forks": {
				"type": "boolean"
			},
			"range": {
				"type": "number",
				"format": "meters",
				"minimum": 0
			},
			"requiredThangTypes": {
				"type": "array",
				"additionalProperties": true,
				"description": "Contains a single element: the ThangType to use as a template for this Thang's lightning Bolts.",
				"items": {
					"description": "The ThangType to use as a template for this Thang's bolts.",
					"type": "string",
					"format": "thang-type"
				}
			},
			"specificCooldown": {
				"format": "seconds",
				"type": "number"
			}
		},
		"additionalProperties": false
	},
	"dependencies": [
		{
			"original": "524cbdc03ea855e0ab0000bb",
			"majorVersion": 0
		},
		{
			"original": "52f13c37528baa731827408d",
			"majorVersion": 0
		}
	],
	"created": "2016-04-08T04:14:54.756Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 18,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "537d01f484c54c6e05c05989"
		},
		{
			"access": "read",
			"target": "public"
		}
	]
}