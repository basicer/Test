{
	"_id": "57647ed069a45025009432ee",
	"slug": "plans",
	"creator": "537d01f484c54c6e05c05989",
	"name": "Plans",
	"original": "524b7b517fc0f6d51900000d",
	"__v": 0,
	"js": "var Plans, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  __slice = [].slice;\n\nPlans = (function(_super) {\n  __extends(Plans, _super);\n\n  function Plans() {\n    _ref = Plans.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Plans.prototype.plannifiedMethodsActive = false;\n\n  Plans.className = 'Plans';\n\n  Plans.prototype.attach = function(thang) {\n    var plannableMethod, _i, _len, _ref1, _results;\n    this.planIterations = 0;\n    this.planWorldEndsAfter = this.worldEndsAfter;\n    delete this.worldEndsAfter;\n    Plans.__super__.attach.call(this, thang);\n    _ref1 = ['pickUpItem', 'dropItem', 'push', 'move', 'moveXY', 'follow', 'moveRight', 'moveLeft', 'moveUp', 'moveDown', 'attack', 'attackPos', 'attackXY', 'attackNearestEnemy', 'attackNearbyEnemy', 'say', 'bustDownDoor', 'wait', 'swapItems', 'isBigger', 'isSmaller', 'buildXY', 'pickUpFlag', 'cleave', 'throw', 'cast', 'heal', 'hide', 'manaBlast', 'warcry', 'resetCooldown', 'envenom', 'backstab', 'bash', 'powerUp', 'scattershot', 'jump', 'jumpTo', 'electrocute', 'summon', 'dash', 'throwPos', 'shield', 'hurl', 'stomp', 'devour'];\n    _results = [];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      plannableMethod = _ref1[_i];\n      if (thang[plannableMethod] != null) {\n        _results.push(thang.plannifyMethod(plannableMethod));\n      } else {\n        _results.push(void 0);\n      }\n    }\n    return _results;\n  };\n\n  Plans.prototype.plannifyMethod = function(methodName) {\n    var originalMethod,\n      _this = this;\n    if (methodName === 'say' && !this.actions.say) {\n      this.addActions({\n        name: 'say',\n        cooldown: 1\n      });\n    }\n    originalMethod = this[methodName];\n    return this[methodName] = function() {\n      var action, aether, args, error;\n      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];\n      aether = _this.getAetherForMethod('plan');\n      try {\n        action = originalMethod.apply(_this, args);\n      } catch (_error) {\n        error = _error;\n        _this.handleProgrammingError(error, 'plan');\n        _this.replaceMethodCode('plan', null);\n      }\n      if (!_this.plannifiedMethodsActive) {\n        return action;\n      }\n      if (action !== \"done\") {\n        _this.currentPlan = {\n          methodName: methodName,\n          methodArgs: args\n        };\n        if (_this.future != null) {\n          return _this.future;\n        }\n        _this.future = new esper.FutureValue();\n        _this.future.oldStyle = true;\n        return _this.future;\n      }\n      return action;\n    };\n  };\n\n  Plans.prototype.plan = function() {};\n\n  Plans.prototype.chooseAction = function() {\n    var action, aether, done, error, value, _ref1, _ref2, _ref3;\n    if ((this.plansAreFinished || !((_ref1 = this.programmableMethods) != null ? _ref1.plan : void 0)) && !this.eventThreadAether) {\n      return this.setAction(\"idle\");\n    }\n    aether = this.getAetherForMethod('plan');\n    if (!this.planGenerator) {\n      if (!(this.planGenerator = this.plan())) {\n        return this.finishPlans();\n      }\n      if (typeof aether.sandboxGenerator === \"function\") {\n        aether.sandboxGenerator(this.planGenerator);\n      }\n    }\n    if (this.currentPlan) {\n      if (this.future && !this.future.oldStyle) {\n        return null;\n      } else if (this.currentPlanMethodResolved) {\n        this.currentPlanMethodResolved = false;\n        return this.endCurrentPlan(aether);\n      } else {\n        this.plannifiedMethodsActive = true;\n        action = this.currentPlan.methodName ? this[this.currentPlan.methodName].apply(this, this.currentPlan.methodArgs) : \"done\";\n        this.plannifiedMethodsActive = false;\n        if (action === \"done\") {\n          if (this.future != null) {\n            this.future.resolve(esper.Value.fromNative('done'));\n            this.future = void 0;\n          }\n          return this.endCurrentPlan(aether);\n        }\n      }\n    } else {\n      this._aetherUserInfo.time = aether._userInfo.time = this.world.age;\n      ++this._aetherAPIOwnMethodsAllowed;\n      try {\n        this.plannifiedMethodsActive = true;\n        _ref2 = this.planGenerator.next(), value = _ref2.value, done = _ref2.done;\n        this.plannifiedMethodsActive = false;\n      } catch (_error) {\n        error = _error;\n        this.handleProgrammingError(error, \"plan\");\n        _ref3 = [null, true], value = _ref3[0], done = _ref3[1];\n      }\n      --this._aetherAPIOwnMethodsAllowed;\n      if (done) {\n        this.setAction('idle');\n        this.intent = void 0;\n        if (this.planLoops) {\n          this.planGenerator = null;\n          return this.planIterations++;\n        } else {\n          return this.finishPlans();\n        }\n      }\n    }\n  };\n\n  Plans.prototype.endCurrentPlan = function(aether) {\n    if (aether == null) {\n      aether = this.getAetherForMethod('plan');\n    }\n    this.currentPlan = null;\n    return this.chooseAction();\n  };\n\n  Plans.prototype.finishPlans = function() {\n    var _ref1;\n    this.publishNote('thang-finished-plans', {});\n    if (typeof this.isGrounded === \"function\" ? this.isGrounded() : void 0) {\n      if ((_ref1 = this.velocity) != null) {\n        _ref1.multiply(0);\n      }\n    }\n    if (this.planWorldEndsAfter) {\n      this.world.endWorld(false, this.planWorldEndsAfter, true);\n    }\n    return this.plansAreFinished = true;\n  };\n\n  return Plans;\n\n})(Component);\n",
	"commitMessage": "Only set idle if no threads exist",
	"parent": "5741fbddf2770320c70fb362",
	"index": true,
	"patches": [],
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"official": false,
	"configSchema": {
		"properties": {
			"planLoops": {
				"type": "boolean",
				"description": "Whether the plan() method loops and is called again and again after it finishes each time."
			},
			"worldEndsAfter": {
				"description": "When not null (or zero), ends the world this many seconds after this Thang finishes its plans.",
				"default": 5,
				"oneOf": [
					{
						"type": "null"
					},
					{
						"type": "number",
						"minimum": 0,
						"exclusiveMinimum": false,
						"maximum": 3000,
						"default": 5,
						"format": "seconds"
					}
				]
			}
		},
		"default": {
			"worldEndsAfter": 0,
			"planLoops": false
		},
		"id": "__base__",
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		}
	],
	"description": "This Thang plans all its actions in advance and then executes its plan.",
	"system": "programming",
	"searchStrings": "plans p pl pla",
	"created": "2016-06-17T22:50:56.463Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 100,
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