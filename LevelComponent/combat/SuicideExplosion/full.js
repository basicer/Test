{
	"_id": "5658af20646fb270689e67c9",
	"slug": "suicideexplosion",
	"searchStrings": "suicide explosion s su sui suic suici suicid suicide suicidee suicideex suicideexp suicideexpl suicideexplo suicideexplos suicideexplosi",
	"name": "SuicideExplosion",
	"js": "var SuicideExplosion, Vector,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nVector = require('lib/world/vector');\n\nSuicideExplosion = (function(_super) {\n  __extends(SuicideExplosion, _super);\n\n  SuicideExplosion.className = 'SuicideExplosion';\n\n  SuicideExplosion.proximity = false;\n\n  SuicideExplosion.hasExploded = false;\n\n  function SuicideExplosion(config) {\n    SuicideExplosion.__super__.constructor.call(this, config);\n  }\n\n  SuicideExplosion.prototype.update = function() {\n    var args, dir, linearDamage, nearest, target, targets, _i, _len, _results;\n    nearest = this.findNearest(this.findEnemies());\n    if (nearest) {\n      if (this.distance(nearest) < this.triggerRadius) {\n        this.proximity = true;\n      }\n    }\n    if ((this.health <= 0 || this.proximity) && !this.hasExploded) {\n      if (this.explosionDelay > 0) {\n        this.explosionDelay -= this.world.dt;\n        return;\n      }\n      this.hasExploded = true;\n      this.takeDamage(this.damage);\n      args = [parseFloat(this.pos.x.toFixed(2)), parseFloat(this.pos.y.toFixed(2)), parseFloat(this.explosionRadius), this.explosionColor];\n      this.addCurrentEvent(\"aoe-\" + (JSON.stringify(args)));\n      targets = this.friendlyFire ? this.world.getSystem('Combat').attackables : this.getEnemies();\n      _results = [];\n      for (_i = 0, _len = targets.length; _i < _len; _i++) {\n        target = targets[_i];\n        if (target && this.distance(target, true) <= this.explosionRadius) {\n          dir = target.pos.copy().subtract(this.pos).normalize();\n          dir.z = Math.sin(Math.PI / 8);\n          dir.multiply(this.explosionMass, true);\n          if (this.damageDistribution === 'full') {\n            _results.push(target.takeDamage(this.damage, this, dir));\n          } else if (this.damageDistribution === 'linear') {\n            linearDamage = this.damage * (this.explosionRadius - this.distance(target)) / this.explosionRadius;\n            _results.push(target.takeDamage(linearDamage, this, dir));\n          } else {\n            _results.push(void 0);\n          }\n        } else {\n          _results.push(void 0);\n        }\n      }\n      return _results;\n    }\n  };\n\n  return SuicideExplosion;\n\n})(Component);\n",
	"system": "combat",
	"creator": "512ef4805a67a8c507000001",
	"original": "551c54101794dc1a112c4f67",
	"watchers": [
		"537d01f484c54c6e05c05989"
	],
	"__v": 0,
	"commitMessage": "Adde explosionDelay option for cooler chain reactions.",
	"index": true,
	"parent": "55c0a81550cac5d58def9a7a",
	"configSchema": {
		"properties": {
			"damage": {
				"description": "How much damage the explosion does.",
				"type": "number"
			},
			"damageDistribution": {
				"description": "How the damage is distributed.",
				"type": "string",
				"enum": [
					"full",
					"linear"
				]
			},
			"explosionColor": {
				"type": "string",
				"format": "as hex"
			},
			"explosionMass": {
				"type": "number",
				"format": "kilograms"
			},
			"explosionRadius": {
				"description": "How far the explosion reaches.",
				"type": "number",
				"format": "meters",
				"minimum": 0
			},
			"friendlyFire": {
				"description": "Whether or not the explosion damages friendly units.",
				"type": "boolean"
			},
			"triggerRadius": {
				"description": "How close a target needs to be, before exploding early.",
				"type": "number",
				"format": "meters",
				"minimum": 0
			},
			"explosionDelay": {
				"type": "number",
				"format": "seconds",
				"description": "Time in seconds to explode after death."
			}
		},
		"default": {
			"damage": 1000,
			"damageDistribution": "full",
			"explosionColor": "#00FF00",
			"explosionRadius": 10,
			"friendlyFire": false,
			"triggerRadius": 3.5,
			"explosionMass": 1000,
			"explosionDelay": 0
		}
	},
	"description": "This Component causes the Thang to explode upon death, or getting too near an enemy.",
	"created": "2015-11-27T19:29:36.875Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 10,
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