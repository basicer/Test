{
	"_id": "577e713367053f25007df5f5",
	"slug": "backstabs",
	"name": "Backstabs",
	"codeLanguage": "coffeescript",
	"js": "var ArgumentError, Backstabs, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nArgumentError = require('lib/world/errors').ArgumentError;\n\nBackstabs = (function(_super) {\n  __extends(Backstabs, _super);\n\n  function Backstabs() {\n    _ref = Backstabs.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Backstabs.className = 'Backstabs';\n\n  Backstabs.prototype.attach = function(thang) {\n    var backstabAction;\n    backstabAction = {\n      name: 'backstab',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    Backstabs.__super__.attach.call(this, thang);\n    return thang.addActions(backstabAction);\n  };\n\n  Backstabs.prototype.backstab = function(target) {\n    var _ref1;\n    if (target == null) {\n      throw new ArgumentError(\"Target is null. Is there always a target to backstab? (Use if?)\", \"backstab\", \"target\", \"object\", target);\n    }\n    this.setTarget(target, 'backstab');\n    if (!this.target) {\n      return \"done\";\n    }\n    if (this.actions.move && this.distance(this.target, true) > this.backstabRange) {\n      this.setAction('move');\n    } else {\n      this.setAction('backstab');\n    }\n    if (this.distance(this.target, true) <= this.backstabRange && this.getCooldown('backstab') > 1) {\n      return \"done\";\n    } else if (this.backstabbedOnce || ((_ref1 = this.target) != null ? _ref1.health : void 0) <= 0) {\n      this.backstabbedOnce = false;\n      this.setAction('idle');\n      return \"done\";\n    } else {\n      return \"backstab\";\n    }\n  };\n\n  Backstabs.prototype.getBackstabMomentum = function(targetPos) {\n    var dir;\n    dir = targetPos.copy().subtract(this.pos).normalize();\n    dir.z = Math.sin(Math.PI / 2);\n    dir.multiply(this.backstabMass, true);\n    return dir;\n  };\n\n  Backstabs.prototype.update = function() {\n    var damage, momentum, success, _base, _ref1;\n    if (!(this.action === 'backstab' && this.target && this.distance(this.target, true) <= this.backstabRange && this.act())) {\n      return;\n    }\n    success = this.pos.distanceSquared(this.target.pos) < this.pos.distanceSquared(Vector.add(this.target.pos, new Vector(1, 0).rotate((_ref1 = this.target.rotation) != null ? _ref1 : 0)));\n    damage = success ? this.backstabDamage : this.backstabDamage * 0.1;\n    this.rotation = Vector.subtract(this.target.pos, this.pos).heading();\n    momentum = success ? this.getBackstabMomentum(this.target.pos) : null;\n    if (typeof (_base = this.target).takeDamage === \"function\") {\n      _base.takeDamage(damage, this, momentum);\n    }\n    if (typeof this.brake === \"function\") {\n      this.brake();\n    }\n    if (this.hidden) {\n      if (typeof this.unhide === \"function\") {\n        this.unhide();\n      }\n    }\n    if (typeof this.sayWithoutBlocking === \"function\") {\n      this.sayWithoutBlocking(success ? \"Boom!\" : \"Err... hi?\");\n    }\n    if (this.plan) {\n      return this.backstabbedOnce = true;\n    }\n  };\n\n  return Backstabs;\n\n})(Component);\n",
	"creator": "577a42cb30e8452400a13329",
	"original": "53caa3b603039b0439ee74d0",
	"watchers": [
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"commitMessage": "Diplomat submission for lang he: 1 change(s).",
	"parent": "57627384a9621a200065583d",
	"official": false,
	"configSchema": {
		"properties": {
			"backstabDamage": {
				"type": "number",
				"description": "How much damage a successful backstab does."
			},
			"backstabMass": {
				"type": "number",
				"format": "kilograms"
			},
			"backstabRange": {
				"type": "number",
				"format": "meters",
				"minimum": 0,
				"exclusiveMinimum": true,
				"description": "How close the Thang needs to be to backstab, in meters."
			},
			"cooldown": {
				"type": "number",
				"description": "How many seconds each backstab takes.",
				"minimum": 0,
				"format": "seconds"
			},
			"specificCooldown": {
				"type": "number",
				"description": "How many seconds before this specific backstab can be done again, if longer than normal cooldown.",
				"minimum": 0,
				"format": "seconds"
			}
		},
		"default": {
			"cooldown": 0.5,
			"specificCooldown": 15,
			"backstabRange": 3,
			"backstabDamage": 60,
			"backstabMass": 0
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
			"original": "524b7b7c7fc0f6d519000011",
			"majorVersion": 0
		},
		{
			"original": "524b75ad7fc0f6d519000001",
			"majorVersion": 0
		}
	],
	"description": "This Component gives the Thang a backstab ability.",
	"system": "combat",
	"searchStrings": "backstabs b ba bac back backs backst backsta",
	"i18nCoverage": [
		"-",
		"es-ES",
		"de-DE",
		"fr",
		"cs",
		"zh-HANS",
		"zh-HANT",
		"ru",
		"nb",
		"tr",
		"lt",
		"pt-BR",
		"nl-NL",
		"sk",
		"pl",
		"ro",
		"it",
		"sv",
		"id",
		"ja",
		"da",
		"uk",
		"hu",
		"el",
		"bg",
		"ca",
		"es-419",
		"sr",
		"fi"
	],
	"patches": [
		"574993fc2f39f92500d786ba"
	],
	"index": true,
	"created": "2016-07-07T15:11:47.597Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 61,
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