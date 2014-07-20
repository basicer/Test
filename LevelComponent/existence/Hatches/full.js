{
	"_id": "53cc380a03039b0439ee7e39",
	"index": true,
	"slug": "hatches",
	"name": "Hatches",
	"codeLanguage": "coffeescript",
	"js": "var Hatches, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nHatches = (function(_super) {\n  __extends(Hatches, _super);\n\n  function Hatches() {\n    _ref = Hatches.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Hatches.className = 'Hatches';\n\n  Hatches.prototype.attach = function(thang) {\n    var hatchAction;\n    hatchAction = {\n      name: 'hatch',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    Hatches.__super__.attach.call(this, thang);\n    return thang.addActions(hatchAction);\n  };\n\n  Hatches.prototype.hatch = function() {\n    if (!this.devouredCount) {\n      return this.handleHungryHatchWarning();\n    }\n    return this.setAction('hatch');\n  };\n\n  Hatches.prototype.update = function() {\n    var hatched, i, offsetAngle, toHatch, _i;\n    if (!(this.action === 'hatch' && this.act())) {\n      return;\n    }\n    toHatch = this.devouredCount * this.devourToHatchRatio;\n    for (i = _i = 0; 0 <= toHatch ? _i < toHatch : _i > toHatch; i = 0 <= toHatch ? ++_i : --_i) {\n      this.toBuild = this.buildables[this.hatchType];\n      hatched = this.performBuild();\n      offsetAngle = 2 * Math.PI * i / toHatch - Math.PI;\n      hatched.pos.add(new Vector(2, 0).rotate(offsetAngle));\n    }\n    return this.devouredCount = 0;\n  };\n\n  Hatches.prototype.handleHungryHatchWarning = function() {\n    var aether, fakeError, message, problem, statementRange;\n    if (!(this.isProgrammable && !this.handledHungryHatching && (aether = this.getAetherForMethod('chooseAction')))) {\n      return;\n    }\n    this.handledHungryHatching = true;\n    statementRange = aether.lastStatementRange;\n    message = \"\" + this.id + \" can't hatch without first successfully devouring.\";\n    fakeError = {\n      name: \"HungryHatch\",\n      message: message,\n      toString: function() {\n        return message;\n      }\n    };\n    problem = aether.createUserCodeProblem({\n      type: 'runtime',\n      level: 'info',\n      error: fakeError,\n      range: statementRange\n    });\n    return this.addAetherProblemForMethod(problem, 'chooseAction');\n  };\n\n  return Hatches;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "53cb1f9903039b0439ee750c",
	"watchers": [
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"commitMessage": "Typo in docs.",
	"parent": "53cc31be03039b0439ee7d93",
	"official": false,
	"configSchema": {
		"properties": {
			"cooldown": {
				"type": "number",
				"description": "How many seconds each hatch takes.",
				"default": 0.5,
				"minimum": 0,
				"format": "seconds"
			},
			"specificCooldown": {
				"type": "number",
				"description": "How many seconds before this specific hatch can be done again, if longer than normal cooldown.",
				"minimum": 0,
				"format": "seconds"
			},
			"devourToHatchRatio": {
				"type": "integer",
				"default": 3,
				"minimum": 0,
				"exclusiveMinimum": true,
				"description": "How many Thangs to hatch per devoured Thang."
			},
			"hatchType": {
				"type": "string",
				"description": "The buildable template id to hatch.",
				"default": "munchkin"
			}
		},
		"default": {
			"cooldown": 0.5,
			"devourToHatchRatio": 3,
			"hatchType": "munchkin",
			"specificCooldown": 0
		},
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "53cb185c03039b0439ee7506",
			"majorVersion": 0
		},
		{
			"original": "52d9a6773cf02dcf26000dc4",
			"majorVersion": 0
		}
	],
	"description": "This Component lets the Thang hatch minions when it devours other Thangs.",
	"system": "existence",
	"searchStrings": "hatches h ha hat hatc hatch",
	"created": "2014-07-20T21:43:38.962Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 6,
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