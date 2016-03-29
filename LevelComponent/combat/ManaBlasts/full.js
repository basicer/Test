{
	"_id": "56fa9dd672a11d3600fb773c",
	"searchStrings": "mana blasts m ma man mana manab manabl manabla manablas",
	"index": true,
	"slug": "manablasts",
	"name": "ManaBlasts",
	"js": "var ManaBlasts, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nManaBlasts = (function(_super) {\n  __extends(ManaBlasts, _super);\n\n  function ManaBlasts() {\n    _ref = ManaBlasts.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  ManaBlasts.className = 'ManaBlasts';\n\n  ManaBlasts.prototype.attach = function(thang) {\n    var manaBlastAction;\n    manaBlastAction = {\n      name: 'mana-blast',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    ManaBlasts.__super__.attach.call(this, thang);\n    return thang.addActions(manaBlastAction);\n  };\n\n  ManaBlasts.prototype.manaBlast = function() {\n    this.setAction('mana-blast');\n    if (this.getCooldown('mana-blast') > 1) {\n      return \"done\";\n    } else if (this.manaBlastedOnce) {\n      this.manaBlastedOnce = false;\n      this.setAction('idle');\n      return \"done\";\n    } else {\n      return \"mana-blast\";\n    }\n  };\n\n  ManaBlasts.prototype.getManaBlastMomentum = function(targetPos) {\n    var dir;\n    dir = targetPos.copy().subtract(this.pos).normalize();\n    dir.z = Math.sin(Math.PI / 6);\n    dir.multiply(this.manaBlastMass, true);\n    return dir;\n  };\n\n  ManaBlasts.prototype.performManaBlast = function() {\n    var args, d, momentum, pct, target, _i, _len, _ref1;\n    _ref1 = this.getEnemies();\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      target = _ref1[_i];\n      if (!((d = this.distance(target)) < this.manaBlastRadius)) {\n        continue;\n      }\n      momentum = this.getManaBlastMomentum(target.pos);\n      pct = 1 - (d / this.manaBlastRadius);\n      if (target.velocity) {\n        if (typeof target.isGrounded === \"function\" ? target.isGrounded() : void 0) {\n          target.velocity.z = Math.max(target.velocity.z, 0);\n        }\n        target.velocity.add(Vector.multiply(momentum, pct / target.mass, true), true);\n      }\n      target.takeDamage(this.manaBlastDamage * pct, this);\n      if (target.velocity) {\n        target.pos.z += this.pos.z;\n      }\n      if (target.hasEffects) {\n        target.addEffect({\n          name: 'confuse',\n          duration: 3,\n          reverts: true,\n          factor: 0.01,\n          targetProperty: 'actionTimeFactor'\n        });\n      }\n    }\n    args = [parseFloat(this.pos.x.toFixed(2)), parseFloat(this.pos.y.toFixed(2)), parseFloat(this.manaBlastRadius.toFixed(2)), '#8FBCFF'];\n    this.addCurrentEvent(\"aoe-\" + (JSON.stringify(args)));\n    if (this.plan) {\n      this.manaBlastedOnce = true;\n    }\n    if (this.hidden) {\n      return typeof this.unhide === \"function\" ? this.unhide() : void 0;\n    }\n  };\n\n  ManaBlasts.prototype.update = function() {\n    if (!(this.action === 'mana-blast' && this.act())) {\n      return;\n    }\n    return this.performManaBlast();\n  };\n\n  return ManaBlasts;\n\n})(Component);\n",
	"system": "combat",
	"creator": "56eeb78bf8d2b3e800ca7915",
	"original": "5466da88417c8b48a9811e96",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "This Component gives the Thang a powerful mana blast ability.",
	"dependencies": [
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		},
		{
			"original": "524b75ad7fc0f6d519000001",
			"majorVersion": 0
		},
		{
			"original": "524b7b8c7fc0f6d519000013",
			"majorVersion": 0
		}
	],
	"configSchema": {
		"properties": {
			"cooldown": {
				"type": "number",
				"description": "How many seconds each mana blast takes.",
				"default": 0.75,
				"minimum": 0,
				"format": "seconds"
			},
			"manaBlastDamage": {
				"type": "number",
				"description": "How much damage the mana blast does at the center point, proportional to the distance from that centerpoint.",
				"minimum": 0
			},
			"manaBlastMass": {
				"type": "number",
				"description": "How much mass to impart to the momentum of the mana blast.",
				"format": "kilograms"
			},
			"manaBlastRadius": {
				"type": "number",
				"description": "How many meters this mana blast can reach.",
				"minimum": 0,
				"exclusiveMinimum": true,
				"format": "meters"
			},
			"specificCooldown": {
				"type": "number",
				"description": "How many seconds before this specific mana blast can be done again, if longer than normal cooldown.",
				"minimum": 0,
				"format": "seconds"
			}
		},
		"default": {
			"cooldown": 0.75,
			"specificCooldown": 15,
			"manaBlastRadius": 20,
			"manaBlastDamage": 100,
			"manaBlastMass": 5000
		},
		"additionalProperties": false,
		"type": "object"
	},
	"i18nCoverage": [
		"-",
		"gl",
		"fr",
		"de-DE",
		"nb",
		"ru",
		"zh-HANS",
		"sk",
		"es-419",
		"it",
		"uk",
		"pt-BR",
		"el",
		"nl-NL",
		"da"
	],
	"commitMessage": "Diplomat submission for lang da: 1 change(s).",
	"parent": "56c4f5612b138e240049578d",
	"patches": [],
	"created": "2016-03-29T15:23:02.938Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 23,
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