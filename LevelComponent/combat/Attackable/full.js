{
	"_id": "5780d99405e1872400f6db50",
	"slug": "attackable",
	"creator": "5669fd00631bcd2200a9bdb7",
	"name": "Attackable",
	"original": "524b7bab7fc0f6d519000017",
	"__v": 0,
	"js": "var Attackable, MAX_COOLDOWN, Vector,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nMAX_COOLDOWN = require('lib/world/systems/action');\n\nVector = require('lib/world/vector');\n\nAttackable = (function(_super) {\n  __extends(Attackable, _super);\n\n  Attackable.className = 'Attackable';\n\n  Attackable.prototype.isAttackable = true;\n\n  Attackable.prototype.damageMitigationFactor = 1;\n\n  function Attackable(config) {\n    Attackable.__super__.constructor.call(this, config);\n    this.health = this.maxHealth;\n  }\n\n  Attackable.prototype.attach = function(thang) {\n    Attackable.__super__.attach.call(this, thang);\n    thang.addTrackedProperties([\"health\", \"number\"], [\"healthReplenishRate\", \"number\"], [\"maxHealth\", \"number\"]);\n    return thang.addActions({\n      name: 'die',\n      cooldown: MAX_COOLDOWN\n    });\n  };\n\n  Attackable.prototype.takeDamage = function(damage, attacker, momentum) {\n    if (momentum == null) {\n      momentum = null;\n    }\n    damage *= this.damageMitigationFactor;\n    this.world.getSystem('Combat').addDamage(attacker != null ? attacker.team : void 0, this.team, damage);\n    this.health -= damage;\n    this.keepTrackedProperty('health');\n    if (!this.dead) {\n      if (typeof this.addCurrentEvent === \"function\") {\n        this.addCurrentEvent('take-damage');\n      }\n      if (this.health <= 0) {\n        this.killer = attacker;\n        if (this.velocity) {\n          this.rotation = (this.velocity.heading() + Math.PI) % (2 * Math.PI);\n          this.hasRotated = true;\n        }\n      }\n    }\n    if ((this.velocity != null) && (momentum != null)) {\n      if (momentum.z > 1 && (typeof this.isGrounded === \"function\" ? this.isGrounded() : void 0)) {\n        this.velocity.z = Math.max(this.velocity.z, 0);\n      }\n      this.velocity.add(Vector.divide(momentum, this.mass, true), true);\n    }\n    if (this.damageReflection && (attacker != null ? attacker.takeDamage : void 0) && this.distance(attacker, true) < (this.damageReflectionRange || 5) && !this.reflectingDamageNow) {\n      this.reflectingDamageNow = true;\n      attacker.takeDamage(this.damageReflection, this);\n      return this.reflectingDamageNow = false;\n    }\n  };\n\n  Attackable.prototype.die = function() {\n    var event, _ref;\n    this.setAction('die');\n    this.act(true);\n    if (typeof this.cancelCollisions === \"function\") {\n      this.cancelCollisions(true);\n    }\n    event = {\n      killer: this.killer\n    };\n    if (((_ref = this.killer) != null ? _ref.health : void 0) != null) {\n      event.killerHealth = this.killer.health;\n    }\n    event.maxHealth = this.maxHealth;\n    this.publishNote(\"thang-died\", event);\n    if (typeof this.addCurrentEvent === \"function\") {\n      this.addCurrentEvent('die');\n    }\n    this.dead = true;\n    this.isAttackable = false;\n    return this.updateRegistration();\n  };\n\n  Attackable.prototype.revive = function() {\n    this.setAction('idle');\n    this.actionHeats.all = 0;\n    if (typeof this.restoreCollisions === \"function\") {\n      this.restoreCollisions();\n    }\n    this.dead = false;\n    this.isAttackable = true;\n    return this.updateRegistration();\n  };\n\n  Attackable.prototype.update = function() {\n    if (this.health > 0 && this.healthReplenishRate && (this.health < this.maxHealth || this.healthReplenishRate < 0)) {\n      this.keepTrackedProperty('health');\n      this.health = Math.min(this.maxHealth, this.health + this.healthReplenishRate * this.world.dt);\n    }\n    if (this.health > this.maxHealth) {\n      return this.health = this.maxHealth;\n    }\n  };\n\n  return Attackable;\n\n})(Component);\n",
	"commitMessage": "Diplomat submission for lang fa: 2 change(s).",
	"parent": "576e559593914c1f009b006e",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"patches": [],
	"official": false,
	"configSchema": {
		"properties": {
			"damageReflection": {
				"type": "number",
				"description": "Amount of damage reflected to attackers within damageReflectionRange meters with each attack."
			},
			"damageReflectionRange": {
				"type": "number",
				"format": "meters",
				"minimum": 0
			},
			"health": {
				"type": "number",
				"description": "Deprecated: all Thangs start at maxHealth."
			},
			"healthReplenishRate": {
				"type": "number",
				"description": "How much health this Thang regenerates per second.",
				"default": 0
			},
			"maxHealth": {
				"type": "number",
				"minimum": 0,
				"exclusiveMinimum": true,
				"description": "The maximum health value for this Thang."
			}
		},
		"default": {
			"maxHealth": 10,
			"healthReplenishRate": 0,
			"health": 0,
			"damageReflection": 0,
			"damageReflectionRange": 5
		},
		"additionalProperties": true,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		},
		{
			"original": "524b3e3fff92f1f4f800000d",
			"majorVersion": 0
		}
	],
	"description": "This Component gives the Thang health and the ability to take damage.",
	"system": "combat",
	"searchStrings": "attackable a at att atta attac attack attacka attackab",
	"i18nCoverage": [
		"-",
		"pt-PT",
		"tr",
		"es-ES",
		"sv",
		"fr",
		"vi",
		"ru",
		"zh-HANS",
		"gl",
		"pt-BR",
		"de-DE",
		"nb",
		"cs",
		"ar",
		"id",
		"uk",
		"lt",
		"zh-HANT",
		"sk",
		"pl",
		"nl-NL",
		"hu",
		"ro",
		"it",
		"ja",
		"da",
		"el",
		"ca",
		"ko",
		"bg",
		"he",
		"es-419",
		"sr",
		"fi",
		"fa"
	],
	"index": true,
	"created": "2016-07-09T11:01:40.506Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 122,
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