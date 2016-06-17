{
	"_id": "57647ed08514f82f0054042b",
	"slug": "cleaves",
	"name": "Cleaves",
	"codeLanguage": "coffeescript",
	"js": "var Cleaves, Vector, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nVector = require('lib/world/vector');\n\nCleaves = (function(_super) {\n  __extends(Cleaves, _super);\n\n  function Cleaves() {\n    _ref = Cleaves.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Cleaves.className = \"Cleaves\";\n\n  Cleaves.prototype.attach = function(thang) {\n    var cleaveAction;\n    cleaveAction = {\n      name: 'cleave',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    Cleaves.__super__.attach.call(this, thang);\n    return thang.addActions(cleaveAction);\n  };\n\n  Cleaves.prototype.cleave = function(target) {\n    this.intent = 'cleave';\n    if (target != null) {\n      if (target.isVector || (_.isPlainObject(target) && ((target.x != null) && (target.y != null)))) {\n        this.setTargetPos(target);\n      } else if (target.pos != null) {\n        this.setTarget(target, 'cleave');\n      } else {\n\n      }\n    }\n    if ((this.targetPos || this.target) && this.distance(this.getTargetPos()) > this.cleaveRange) {\n      this.setAction('move');\n    } else {\n      this.setAction('cleave');\n    }\n    return this.block();\n  };\n\n  Cleaves.prototype.getCleaveMomentum = function(target) {\n    var dir;\n    if (!this.cleaveMass) {\n      return null;\n    }\n    dir = target.pos.copy().subtract(this.pos).normalize();\n    dir.z = this.cleaveZAngle ? Math.sin(this.cleaveZAngle) : 0;\n    dir.multiply(this.cleaveMass, true);\n    return dir;\n  };\n\n  Cleaves.prototype.performCleave = function() {\n    var X, Y, args, color, d, endAngle, radius, relativeAngle, startAngle, straightCourse, target, targetAngle, targets, _i, _len;\n    if (typeof this.sayWithoutBlocking === \"function\") {\n      this.sayWithoutBlocking('Cleave!');\n    }\n    targets = this.cleaveFriendlyFire ? this.world.getSystem('Combat').attackables : this.getEnemies();\n    for (_i = 0, _len = targets.length; _i < _len; _i++) {\n      target = targets[_i];\n      if (!(target !== this && target.velocity && (d = this.distance(target)) < this.cleaveRange)) {\n        continue;\n      }\n      straightCourse = Vector.subtract(target.pos, this.pos);\n      targetAngle = straightCourse.heading();\n      relativeAngle = Math.abs(targetAngle - this.rotation);\n      relativeAngle = Math.min(relativeAngle, 2 * Math.PI - relativeAngle);\n      if (!(relativeAngle < this.cleaveAngle / 2)) {\n        continue;\n      }\n      target.takeDamage(this.cleaveDamage, this, this.getCleaveMomentum(target));\n    }\n    X = parseFloat(this.pos.x.toFixed(2));\n    Y = parseFloat(this.pos.y.toFixed(2));\n    radius = parseFloat(this.cleaveRange.toFixed(2));\n    color = '#8FBC8F';\n    if (this.cleaveAngle < 2 * Math.PI - 0.01) {\n      startAngle = this.rotation - this.cleaveAngle / 2;\n      endAngle = this.rotation + this.cleaveAngle / 2;\n      startAngle = startAngle < 0 ? 2 * Math.PI + startAngle : startAngle;\n      endAngle = endAngle < 0 ? 2 * Math.PI + endAngle : endAngle;\n      startAngle = parseFloat((2 * Math.PI - startAngle).toFixed(2));\n      endAngle = parseFloat((2 * Math.PI - endAngle).toFixed(2));\n    } else {\n      startAngle = endAngle = 0;\n    }\n    args = [X, Y, radius, color, endAngle, startAngle];\n    this.addCurrentEvent(\"aoe-\" + (JSON.stringify(args)));\n    if (this.actions.cleave.cooldown > 1 && this.hasEffects) {\n      this.addEffect({\n        name: 'confuse',\n        duration: this.actions.cleave.cooldown - this.world.dt,\n        reverts: true,\n        factor: 1,\n        targetProperty: 'cleaveDamage'\n      });\n    }\n    if (this.hidden) {\n      return typeof this.unhide === \"function\" ? this.unhide() : void 0;\n    }\n  };\n\n  Cleaves.prototype.update = function() {\n    if (!(this.intent === 'cleave' && this.isGrounded())) {\n      return;\n    }\n    if (this.action === 'move' && ((this.target != null) || (this.targetPos != null))) {\n      if (this.distance(this.getTargetPos()) < this.cleaveRange) {\n        this.setAction('cleave');\n      }\n    }\n    if (!(this.action === 'cleave' && this.act())) {\n      return;\n    }\n    this.performCleave();\n    if (this.getTargetPos()) {\n      this.rotation = Vector.subtract(this.getTargetPos(), this.pos).heading();\n    }\n    this.unblock();\n    this.intent = void 0;\n    this.setTarget(null);\n    return this.setAction('idle');\n  };\n\n  return Cleaves;\n\n})(Component);\n",
	"creator": "537d01f484c54c6e05c05989",
	"original": "53c0fbc7cd0dac3805df9053",
	"watchers": [
		"531c8c3ccf439d790a23af04"
	],
	"__v": 0,
	"commitMessage": "Fix promisify",
	"parent": "575411608ea2dd4b009aeeb0",
	"official": false,
	"configSchema": {
		"id": "__base__",
		"default": {
			"cooldown": 1,
			"specificCooldown": 15,
			"cleaveRange": 15,
			"cleaveDamage": 15,
			"cleaveAngle": 6.28,
			"cleaveFriendlyFire": false,
			"cleaveMass": 0,
			"cleaveZAngle": 0.785
		},
		"properties": {
			"cooldown": {
				"type": "number",
				"default": 1,
				"description": "The number of seconds it takes to perform the cleave.",
				"minimum": 0,
				"format": "seconds"
			},
			"specificCooldown": {
				"type": "number",
				"minimum": 0,
				"default": 15,
				"format": "seconds",
				"description": "The number of seconds before cleave can be performed again."
			},
			"cleaveDamage": {
				"type": "number",
				"description": "The amount of damage the cleave attack does.",
				"exclusiveMinimum": true,
				"minimum": 0,
				"default": 15
			},
			"cleaveAngle": {
				"type": "number",
				"default": 6.28,
				"minimum": 0,
				"description": "The angle that the attack affects.",
				"format": "radians"
			},
			"cleaveFriendlyFire": {
				"type": "boolean"
			},
			"cleaveMass": {
				"type": "number",
				"format": "kilograms",
				"description": "How much knockback mass to impart to cloven enemies."
			},
			"cleaveZAngle": {
				"type": "number",
				"format": "radians",
				"description": "At what angle from the horizontal to apply cleaveMass to cloven enemies.",
				"default": 0.785
			},
			"cleaveRange": {
				"type": "number",
				"description": "The number of meters that the attack reaches.",
				"minimum": 0,
				"exclusiveMinimum": true,
				"default": 7,
				"format": "meters"
			}
		},
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		},
		{
			"original": "524b7ba57fc0f6d519000016",
			"majorVersion": 0
		},
		{
			"original": "524b75ad7fc0f6d519000001",
			"majorVersion": 0
		}
	],
	"description": "This Component gives the Thang a powerful Cleave attack, hitting all enemies in an arc in front of him.",
	"system": "combat",
	"searchStrings": "cleaves c cl cle clea cleav",
	"i18nCoverage": [
		"-",
		"ru",
		"zh-HANS",
		"gl",
		"fr",
		"de-DE",
		"lt",
		"zh-HANT",
		"pt-BR",
		"nb",
		"it",
		"sk",
		"ja",
		"uk",
		"pl",
		"es-ES",
		"es-419",
		"hu",
		"el",
		"ca",
		"nl-NL",
		"sr",
		"da",
		"sv",
		"bg"
	],
	"patches": [],
	"index": true,
	"created": "2016-06-17T22:50:56.257Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 60,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "531c8c3ccf439d790a23af04"
		},
		{
			"access": "read",
			"target": "public"
		}
	]
}