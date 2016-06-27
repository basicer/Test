{
	"_id": "577096d357693a2600de595f",
	"slug": "bashes",
	"searchStrings": "bashes b ba bas bash",
	"name": "Bashes",
	"js": "var ArgumentError, Bashes, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nArgumentError = require('lib/world/errors').ArgumentError;\n\nBashes = (function(_super) {\n  __extends(Bashes, _super);\n\n  function Bashes() {\n    _ref = Bashes.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Bashes.className = 'Bashes';\n\n  Bashes.prototype.attach = function(thang) {\n    var bashAction;\n    bashAction = {\n      name: 'bash',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    Bashes.__super__.attach.call(this, thang);\n    return thang.addActions(bashAction);\n  };\n\n  Bashes.prototype.bash = function(target) {\n    if (target == null) {\n      throw new ArgumentError(\"Target is null. Is there always a target to bash? (Use if?)\", \"bash\", \"target\", \"object\", target);\n    }\n    this.setTarget(target, 'bash');\n    if (!this.target) {\n      return;\n    }\n    if (this.target.health <= 0) {\n      return typeof this.sayWithoutBlocking === \"function\" ? this.sayWithoutBlocking(\"...but it's dead!\") : void 0;\n    }\n    this.intent = \"bash\";\n    if (this.actions.move && this.distance(this.target, true) > this.bashRange) {\n      this.setAction('move');\n    } else {\n      this.setAction('bash');\n    }\n    return typeof this.block === \"function\" ? this.block() : void 0;\n  };\n\n  Bashes.prototype.getBashMomentum = function(targetPos) {\n    var dir;\n    dir = targetPos.copy().subtract(this.pos).normalize();\n    dir.z = Math.sin(Math.PI / 8);\n    dir.multiply(this.bashMass, true);\n    return dir;\n  };\n\n  Bashes.prototype.update = function() {\n    var momentum, _base, _base1;\n    if (this.intent !== 'bash') {\n      return;\n    }\n    if (!this.target || this.target.health <= 0) {\n      if (typeof this.unblock === \"function\") {\n        this.unblock();\n      }\n      this.setAction('idle');\n      this.intent = void 0;\n      return;\n    }\n    if (this.actions.move && this.distance(this.target, true) > this.bashRange) {\n      this.setAction('move');\n      return;\n    }\n    this.setAction('bash');\n    if (!this.act()) {\n      return;\n    }\n    if (typeof this.unblock === \"function\") {\n      this.unblock();\n    }\n    this.intent = void 0;\n    if (typeof this.sayWithoutBlocking === \"function\") {\n      this.sayWithoutBlocking('Bash!');\n    }\n    this.rotation = Vector.subtract(this.target.pos, this.pos).heading();\n    momentum = this.getBashMomentum(this.target.pos);\n    if (this.target.target === this) {\n      if (typeof (_base = this.target).brake === \"function\") {\n        _base.brake();\n      }\n    }\n    if (typeof (_base1 = this.target).takeDamage === \"function\") {\n      _base1.takeDamage(this.bashDamage, this, momentum);\n    }\n    if (typeof this.brake === \"function\") {\n      this.brake();\n    }\n    if (this.hidden) {\n      return typeof this.unhide === \"function\" ? this.unhide() : void 0;\n    }\n  };\n\n  return Bashes;\n\n})(Component);\n",
	"system": "combat",
	"creator": "5770892301b1894b00afdeca",
	"original": "54678d42417c8b48a9811f2e",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "This Component gives the Thang a bash ability.",
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
	"configSchema": {
		"properties": {
			"cooldown": {
				"type": "number",
				"description": "How many seconds each bash takes.",
				"minimum": 0,
				"format": "seconds"
			},
			"specificCooldown": {
				"type": "number",
				"description": "How many seconds before this specific bash can be done again, if longer than normal cooldown.",
				"minimum": 0,
				"format": "seconds"
			},
			"bashRange": {
				"type": "number",
				"default": 3,
				"format": "meters",
				"minimum": 0,
				"exclusiveMinimum": true,
				"description": "How close the Thang needs to be to bash, in meters."
			},
			"bashDamage": {
				"type": "number"
			},
			"bashMass": {
				"type": "number",
				"format": "kilograms",
				"minimum": 0
			}
		},
		"default": {
			"cooldown": 0.25,
			"specificCooldown": 6,
			"bashDamage": 10,
			"bashMass": 100,
			"bashRange": 3
		},
		"additionalProperties": false,
		"type": "object"
	},
	"i18nCoverage": [
		"-",
		"fr",
		"sv",
		"de-DE",
		"lt",
		"es-ES",
		"ru",
		"zh-HANS",
		"nb",
		"tr",
		"pt-BR",
		"sk",
		"nl-NL",
		"pl",
		"cs",
		"it",
		"ja",
		"uk",
		"id",
		"hu",
		"ro",
		"el",
		"da",
		"bg",
		"ca",
		"es-419",
		"sr",
		"fi",
		"ar"
	],
	"commitMessage": "Diplomat submission for lang ar: 2 change(s).",
	"parent": "5762767817664024009a47f4",
	"patches": [],
	"index": true,
	"created": "2016-06-27T03:00:35.020Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 55,
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