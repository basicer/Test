{
	"_id": "57647fac8514f82f0054048f",
	"searchStrings": "hurls enemies h hu hur hurl hurls hurlse hurlsen hurlsene hurlsenem hurlsenemi",
	"index": true,
	"slug": "hurlsenemies",
	"name": "HurlsEnemies",
	"js": "var ArgumentError, HurlsEnemies, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nArgumentError = require('lib/world/errors').ArgumentError;\n\nHurlsEnemies = (function(_super) {\n  __extends(HurlsEnemies, _super);\n\n  function HurlsEnemies() {\n    _ref = HurlsEnemies.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  HurlsEnemies.className = \"HurlsEnemies\";\n\n  HurlsEnemies.prototype.attach = function(thang) {\n    var hurlAction;\n    hurlAction = {\n      name: 'hurl',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    HurlsEnemies.__super__.attach.call(this, thang);\n    return thang.addActions(hurlAction);\n  };\n\n  HurlsEnemies.prototype.hurl = function(target, toPos) {\n    if (typeof target === 'undefined' || ((target == null) && this.hasEnemies())) {\n      throw new ArgumentError(\"\" + this.id + \" needs something to hurl.\", \"hurl\", \"target\", \"object\", target);\n    }\n    if ((toPos != null) && ((toPos.x == null) || (toPos.y == null))) {\n      throw new ArgumentError(\"\" + this.id + \" should hurl toward which {x, y} position?\", \"hurl\", \"toPos\", \"object\", target);\n    }\n    this.setTarget(target, 'hurl');\n    if (!this.target) {\n      return;\n    }\n    this.intent = \"hurl\";\n    this.hurlToTargetPos = toPos ? new Vector(toPos.x, toPos.y) : null;\n    if (this.actions.move && this.distance(this.target, true) > this.hurlRange) {\n      this.currentSpeedRatio = 1;\n      this.setAction('move');\n    } else {\n      this.setAction('hurl');\n    }\n    return typeof this.block === \"function\" ? this.block() : void 0;\n  };\n\n  HurlsEnemies.prototype.canHurl = function() {\n    var distance, _ref1;\n    if (!(this.canAct() && ((_ref1 = this.target) != null ? _ref1.isMovable : void 0))) {\n      return false;\n    }\n    distance = this.distance(this.target, true);\n    if (distance - 0.5 <= this.hurlRange) {\n      this.setAction('hurl');\n      return true;\n    }\n    return false;\n  };\n\n  HurlsEnemies.prototype.getHurlMomentum = function(target, targetPos) {\n    var dir;\n    if (this.hurlToTargetPos) {\n      dir = this.hurlToTargetPos.copy().subtract(this.target.pos).normalize();\n    } else {\n      dir = this.pos.copy().subtract(target.pos).normalize();\n    }\n    dir.z = this.hurlZAngle ? Math.sin(this.hurlZAngle) : 0;\n    dir.multiply(this.hurlMass, true);\n    return dir;\n  };\n\n  HurlsEnemies.prototype.performHurl = function(target) {\n    var dir, momentum;\n    if (this.hidden) {\n      if (typeof this.unhide === \"function\") {\n        this.unhide();\n      }\n    }\n    momentum = this.getHurlMomentum(target, target.pos);\n    target.velocity.multiply(0, true);\n    target.velocity.add(Vector.divide(momentum, target.mass, true), true);\n    target.pos.z += this.pos.z;\n    if (this.hurlToTargetPos) {\n      dir = this.hurlToTargetPos.copy().subtract(target.pos).normalize();\n    } else {\n      dir = this.pos.copy().subtract(target.pos).normalize();\n    }\n    dir.multiply(2 + (Math.max(this.width, this.height) * Math.sqrt(2) / 2));\n    target.pos = this.pos.copy().add(dir, true);\n    if (target.health != null) {\n      target.health -= this.hurlDamage;\n    }\n    if (target.hasEffects) {\n      target.addEffect({\n        name: 'confuse',\n        duration: 1.5,\n        reverts: true,\n        factor: 0.01,\n        targetProperty: 'actionTimeFactor'\n      });\n    }\n    if (this.hidden) {\n      return typeof this.unhide === \"function\" ? this.unhide() : void 0;\n    }\n  };\n\n  HurlsEnemies.prototype.update = function() {\n    if (!(this.intent === 'hurl' && this.canHurl() && this.act())) {\n      return;\n    }\n    if (typeof this.unblock === \"function\") {\n      this.unblock();\n    }\n    this.performHurl(this.target);\n    return this.intent = void 0;\n  };\n\n  return HurlsEnemies;\n\n})(Component);\n",
	"system": "combat",
	"creator": "537d01f484c54c6e05c05989",
	"original": "55e1de8886c019bc47b64112",
	"watchers": [
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"description": "This Component gives the Thang a \"hurl\" action.",
	"codeLanguage": "coffeescript",
	"dependencies": [
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		},
		{
			"original": "524b7b8c7fc0f6d519000013",
			"majorVersion": 0
		},
		{
			"original": "524b7b7c7fc0f6d519000011",
			"majorVersion": 0
		},
		{
			"original": "524b75ad7fc0f6d519000001",
			"majorVersion": 0
		}
	],
	"configSchema": {
		"properties": {
			"cooldown": {
				"type": "number",
				"description": "How many seconds each hurl takes.",
				"default": 1,
				"minimum": 0,
				"format": "seconds"
			},
			"hurlDamage": {
				"type": "number",
				"description": "The damage done to the enemy that is hurled"
			},
			"hurlMass": {
				"type": "number",
				"description": "How much mass to impart to the momentum of the hurl.",
				"format": "kilograms",
				"default": 5000
			},
			"hurlRange": {
				"type": "number",
				"description": "How many meters this hurl can reach.",
				"minimum": 0,
				"exclusiveMinimum": true,
				"default": 3,
				"format": "meters"
			},
			"hurlZAngle": {
				"type": "number",
				"description": "What angle from horizontal to apply the hurlMass momentum at.",
				"format": "radians",
				"default": 0.785
			},
			"specificCooldown": {
				"type": "number",
				"description": "How many seconds before this specific hurl can be done again, if longer than normal cooldown.",
				"minimum": 0,
				"format": "seconds"
			}
		},
		"default": {
			"cooldown": 1,
			"hurlRange": 3,
			"specificCooldown": 2,
			"hurlMass": 500,
			"hurlZAngle": 0.785,
			"hurlDamage": 10
		},
		"additionalProperties": false,
		"type": "object"
	},
	"i18nCoverage": [
		"-",
		"ru",
		"es-419",
		"fr",
		"it",
		"es-ES",
		"de-DE",
		"el",
		"pt-BR",
		"nl-NL",
		"da",
		"hu",
		"zh-HANT"
	],
	"commitMessage": "Fix potentially not existing block/unblock methods",
	"parent": "57559e499105091f007579bf",
	"patches": [],
	"created": "2016-06-17T22:54:36.090Z",
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