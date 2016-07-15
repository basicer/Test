{
	"_id": "57888ec711578249eefb61d0",
	"slug": "programmable",
	"creator": "512ef4805a67a8c507000001",
	"name": "Programmable",
	"original": "524b7b5a7fc0f6d51900000e",
	"__v": 0,
	"js": "var Programmable, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },\n  __slice = [].slice;\n\nProgrammable = (function(_super) {\n  __extends(Programmable, _super);\n\n  function Programmable() {\n    _ref = Programmable.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Programmable.className = 'Programmable';\n\n  Programmable.prototype.isProgrammable = true;\n\n  Programmable.prototype.isProgrammableDisabled = false;\n\n  Programmable.prototype.erroredOut = false;\n\n  Programmable.prototype.errorsOut = false;\n\n  Programmable.prototype.extraProgrammableProperties = ['validateReturn', 'id', 'spriteName', '_aetherUserInfo', '_aetherAPIOwnMethodsAllowed', '_aetherShouldSkipFlow'];\n\n  Programmable.prototype.attach = function(thang) {\n    var api, method, methodName, prop, _i, _len, _ref1, _ref2, _ref3, _ref4, _ref5, _results;\n    this.programmableProperties = ((_ref2 = thang.programmableProperties) != null ? _ref2 : []).concat((_ref1 = this.programmableProperties) != null ? _ref1 : []);\n    Programmable.__super__.attach.call(this, thang);\n    this.programmableProperties = ((_ref3 = thang.moreProgrammableProperties) != null ? _ref3 : []).concat(this.programmableProperties);\n    if (thang.apiUserProperties == null) {\n      thang.apiUserProperties = [];\n    }\n    if (thang.apiProperties == null) {\n      thang.apiProperties = [];\n    }\n    if (thang.apiMethods == null) {\n      thang.apiMethods = [];\n    }\n    if (thang.apiOwnMethods == null) {\n      thang.apiOwnMethods = [];\n    }\n    _ref4 = _.union(this.programmableProperties, this.extraProgrammableProperties);\n    for (_i = 0, _len = _ref4.length; _i < _len; _i++) {\n      prop = _ref4[_i];\n      if (!(!(__indexOf.call(thang.apiUserProperties, prop) >= 0) && !(__indexOf.call(thang.apiMethods, prop) >= 0))) {\n        continue;\n      }\n      api = _.isFunction(thang[prop]) ? thang.apiOwnMethods : thang.apiProperties;\n      if (__indexOf.call(api, prop) < 0) {\n        api.push(prop);\n      }\n    }\n    thang.addTrackedProperties([\"erroredOut\", \"boolean\"]);\n    thang.addTrackedFinalProperties(\"errorsOut\");\n    thang.publishedUserCodeProblems = {};\n    _ref5 = thang.programmableMethods;\n    _results = [];\n    for (methodName in _ref5) {\n      method = _ref5[methodName];\n      _results.push(thang.deserializeAether(methodName));\n    }\n    return _results;\n  };\n\n  Programmable.prototype.deserializeAether = function(methodName) {\n    var aether, deserialized, method, problem, userCode, _base, _i, _len, _name, _ref1, _ref2, _ref3,\n      _this = this;\n    method = this.programmableMethods[methodName];\n    if ((_base = this.world.userCodeMap)[_name = this.id] == null) {\n      _base[_name] = {};\n    }\n    userCode = this.world.userCodeMap[this.id];\n    if (!userCode[methodName]) {\n      method.originalSource = this.getMethodSource(methodName).original;\n      if (method.source == null) {\n        method.source = method.originalSource;\n      }\n      method.name = methodName;\n      if (method.permissions == null) {\n        method.permissions = {\n          read: [],\n          readwrite: [(_ref1 = this.team) != null ? _ref1 : \"humans\"]\n        };\n      }\n    }\n    if (!(aether = userCode[methodName])) {\n      return;\n    }\n    if (!(aether instanceof Aether)) {\n      deserialized = Aether.deserialize(aether);\n      deserialized.serializedAether = aether;\n      aether.flow = {};\n      aether.metrics = {};\n      aether.style = _.cloneDeep(aether.style);\n      aether.problems = _.cloneDeep(aether.problems);\n      aether = userCode[methodName] = deserialized;\n      aether.whileLoopMarker = function() {\n        return _this.world.frames.length;\n      };\n    }\n    if (aether != null ? aether.problems.errors.length : void 0) {\n      this.erroredOut = this.errorsOut = true;\n      this.keepTrackedProperty('erroredOut');\n    }\n    _ref3 = (_ref2 = aether != null ? aether.getAllProblems() : void 0) != null ? _ref2 : [];\n    for (_i = 0, _len = _ref3.length; _i < _len; _i++) {\n      problem = _ref3[_i];\n      if (!(!this.publishedUserCodeProblems[problem.message])) {\n        continue;\n      }\n      this.publishNote('user-code-problem', {\n        problem: problem\n      });\n      this.publishedUserCodeProblems[problem.message] = problem;\n    }\n    this.replaceMethodCode(methodName, aether);\n    return aether;\n  };\n\n  Programmable.prototype.replaceMethodCode = function(methodName, aether) {\n    var inner, method, methodChain, methodSource, outer, problem, _i, _len, _ref1, _ref2, _ref3;\n    method = this.programmableMethods[methodName];\n    methodChain = this.createMethodChain(methodName);\n    methodSource = (_ref1 = aether != null ? aether.pure : void 0) != null ? _ref1 : '';\n    method.source = methodSource;\n    if (!methodSource.length) {\n      methodChain.user = function() {};\n      if (aether != null ? aether.problems.errors.length : void 0) {\n        this.erroredOut = this.errorsOut = true;\n        this.keepTrackedProperty('erroredOut');\n      }\n      _ref3 = (_ref2 = aether != null ? aether.getAllProblems() : void 0) != null ? _ref2 : [];\n      for (_i = 0, _len = _ref3.length; _i < _len; _i++) {\n        problem = _ref3[_i];\n        if (!(!this.publishedUserCodeProblems[problem.message])) {\n          continue;\n        }\n        this.publishNote('user-code-problem', {\n          problem: problem\n        });\n        this.publishedUserCodeProblems[problem.message] = problem;\n      }\n      return;\n    }\n    inner = aether.createFunction();\n    this.addGlobals(aether);\n    outer = function() {\n      var args, error, result;\n      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];\n      if (this.checkExecutionLimit(methodName, aether) > 0) {\n        return;\n      }\n      this._aetherUserInfo = aether._userInfo = {\n        time: this.world.age\n      };\n      if (this._aetherAPIOwnMethodsAllowed == null) {\n        this._aetherAPIOwnMethodsAllowed = 0;\n      }\n      ++this._aetherAPIOwnMethodsAllowed;\n      if (methodName === 'chooseAction') {\n        this.actionsChosenThisCall = 0;\n      }\n      try {\n        result = this.validateReturn(methodName, inner.apply(this, args));\n      } catch (_error) {\n        error = _error;\n        this.handleProgrammingError(error, methodName);\n        this.replaceMethodCode(methodName, null);\n        result = null;\n      }\n      --this._aetherAPIOwnMethodsAllowed;\n      this.actionsChosenThisCall = null;\n      return result;\n    };\n    return methodChain.user = outer;\n  };\n\n  Programmable.prototype.addGlobals = function(aether) {\n    if (typeof aether.addGlobal === \"function\") {\n      aether.addGlobal('hero', this);\n    }\n    if (aether.language.id === 'python') {\n      if (typeof aether.addGlobal === \"function\") {\n        aether.addGlobal('self', this);\n      }\n    }\n    if (this.isGameReferee) {\n      return typeof aether.addGlobal === \"function\" ? aether.addGlobal('game', this) : void 0;\n    }\n  };\n\n  Programmable.prototype.validateReturn = function(methodName, ret) {\n    var _name;\n    if (typeof this[_name = methodName + 'ValidateReturn'] === \"function\") {\n      this[_name](ret);\n    }\n    return ret;\n  };\n\n  Programmable.prototype.getAetherForMethod = function(methodName) {\n    return this.world.userCodeMap[this.id][methodName];\n  };\n\n  Programmable.prototype.addAetherProblemForMethod = function(problem, methodName) {\n    var aether;\n    problem.userInfo.thangID = this.id;\n    problem.userInfo.methodName = methodName;\n    problem.message = problem.message.replace(/(Object )?#<Object>/, this.id);\n    problem.userInfo.key = [this.id, methodName, problem.message].join(\"|\");\n    problem.userInfo.age = this.world.age;\n    aether = this.getAetherForMethod(methodName);\n    aether.addProblem(problem);\n    if (problem.level === 'error') {\n      console.log(this.id, \"had new Programmable problem:\", methodName, problem.message, problem.userInfo.age);\n    }\n    if (problem.level === 'error') {\n      this.world.addError(problem);\n    }\n    if (!this.publishedUserCodeProblems[problem.message]) {\n      this.publishNote('user-code-problem', {\n        problem: problem\n      });\n      return this.publishedUserCodeProblems[problem.message] = problem;\n    }\n  };\n\n  Programmable.prototype.handleProgrammingError = function(error, methodName) {\n    var aether, problem;\n    this.erroredOut = this.errorsOut = true;\n    this.keepTrackedProperty('erroredOut');\n    aether = this.getAetherForMethod(methodName);\n    problem = aether.createUserCodeProblem({\n      type: 'runtime',\n      error: error\n    });\n    return this.addAetherProblemForMethod(problem, methodName);\n  };\n\n  Programmable.prototype.checkExecutionLimit = function(methodName, aether) {\n    var age, fakeError, justUsed, lastUsed, message, method, overuse, problem, totalUsed, _ref1;\n    method = this.programmableMethods[methodName];\n    if (!(method.executionLimit && aether.metrics)) {\n      return 0;\n    }\n    if (method.executionUsed == null) {\n      method.executionUsed = 0;\n    }\n    lastUsed = method.executionUsed;\n    totalUsed = (_ref1 = aether.metrics.statementsExecuted) != null ? _ref1 : 0;\n    justUsed = totalUsed - lastUsed;\n    method.executionUsed = Math.min(totalUsed, method.executionUsed + method.executionLimit);\n    overuse = justUsed - method.executionLimit;\n    if (overuse > 0 && !this.executionLimitExceeded) {\n      this.executionLimitExceeded = true;\n      age = this.world.age;\n      message = \"Exceeded per-call execution limit with \" + justUsed + \" / \" + method.executionLimit + \" statements.\\nYour code will run less often to compensate.\";\n      fakeError = {\n        name: \"ExecutionLimitExceeded\",\n        message: message,\n        toString: function() {\n          return message;\n        }\n      };\n      problem = aether.createUserCodeProblem({\n        type: 'runtime',\n        level: 'info',\n        error: fakeError\n      });\n      this.addAetherProblemForMethod(problem, methodName);\n    }\n    return justUsed - method.executionLimit;\n  };\n\n  Programmable.prototype.debug = function() {\n    var args;\n    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];\n    return console.log.apply(console, args);\n  };\n\n  return Programmable;\n\n})(Component);\n",
	"commitMessage": "Removed support for cloned methods.",
	"parent": "574df82b7a42c0ac49c01f43",
	"patches": [],
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"official": false,
	"configSchema": {
		"properties": {
			"apiUserProperties": {
				"type": "array",
				"items": {
					"type": "string",
					"description": "Names of properties which should be writable by programmable methods."
				},
				"default": []
			},
			"moreProgrammableProperties": {
				"type": "array",
				"items": {
					"type": "string",
					"description": "Names of more properties which should be accessible to programmable methods in the \"More\" tab.",
					"minLength": 1
				},
				"uniqueItems": true,
				"default": []
			},
			"programmableMethods": {
				"description": "Methods which should be programmable: {name: string, source: string, type: instance|class, parameters: array of strings}.",
				"additionalProperties": {
					"default": {
						"name": "methodName"
					},
					"type": "object",
					"additionalProperties": false,
					"minProperties": 1,
					"description": "Configuration for a single programmable method.",
					"properties": {
						"languages": {
							"format": "code-languages-object",
							"description": "Initial source code in languages other than JavaScript",
							"additionalProperties": {
								"description": "Initial source code for another language besides JavaScript.",
								"format": "code",
								"type": "string"
							},
							"type": "object",
							"skipJavaScript": true
						},
						"name": {
							"type": "string",
							"description": "Name of the method."
						},
						"source": {
							"type": "string",
							"format": "javascript",
							"description": "Initial source code the user can edit."
						},
						"parameters": {
							"type": "array",
							"items": {
								"type": "string"
							},
							"description": "Names of parameters to the method."
						},
						"permissions": {
							"type": "object",
							"additionalProperties": false,
							"properties": {
								"read": {
									"type": "array",
									"description": "Array of teams which should be allowed to read (but not write) this spell.",
									"items": {
										"type": "string",
										"description": "A team which should be allowed to read (but not write) this spell."
									},
									"default": []
								},
								"readwrite": {
									"type": "array",
									"description": "Array of teams which should be allowed to read and write this spell. This will migrate to a single team in a future update, as multiple teams can't share a spell in multiplayer.",
									"items": {
										"type": "string",
										"description": "A team which should be allowed to read and write this spell."
									},
									"default": [
										"humans"
									],
									"maxItems": 1
								}
							},
							"required": [
								"read",
								"readwrite"
							]
						},
						"executionLimit": {
							"type": "integer",
							"description": "How many execution units (~statements) allowed per method call. 0 for unlimited. Just works on chooseAction so far.",
							"minimum": 0
						},
						"aiSource": {
							"type": "string",
							"format": "javascript",
							"description": "The default source the Thang will run if it's an AI-controlled player in multiplayer."
						},
						"i18n": {
							"additionalProperties": true,
							"type": "object",
							"format": "i18n",
							"props": [
								"context"
							],
							"description": "Help translate the example code comments."
						},
						"context": {
							"additionalProperties": {
								"type": "string"
							},
							"type": "object",
							"title": "Comments"
						},
						"solutions": {
							"type": "array",
							"items": {
								"properties": {
									"source": {
										"type": "string",
										"format": "code"
									},
									"language": {
										"type": "string",
										"enum": [
											"javascript",
											"python",
											"coffeescript",
											"clojure",
											"lua",
											"io",
											"java"
										]
									},
									"succeeds": {
										"type": "boolean",
										"default": true
									},
									"seed": {
										"oneOf": [
											{
												"type": "number",
												"description": "A fixed seed to use"
											},
											{
												"type": "object",
												"description": "Variables that might go into the seed."
											}
										]
									},
									"difficulty": {
										"type": "number",
										"description": "Difficulty level for replayable levels (or 0, the default)."
									},
									"heroConfig": {
										"type": "object",
										"additionalProperties": false,
										"properties": {
											"inventory": {
												"type": "object",
												"description": "The inventory of the hero: slots to item ThangTypes.",
												"additionalProperties": {
													"type": [
														"object",
														"string"
													],
													"description": "An item ThangType.",
													"format": "thang-type",
													"links": [
														{
															"rel": "db",
															"href": "/db/thang.type/{($)}/version"
														}
													]
												}
											},
											"thangType": {
												"type": [
													"object",
													"string"
												],
												"links": [
													{
														"rel": "db",
														"href": "/db/thang.type/{($)}/version"
													}
												],
												"title": "Thang Type",
												"description": "The ThangType of the hero.",
												"format": "thang-type"
											}
										},
										"description": "Which hero the player is using, equipped with what inventory."
									},
									"flagHistory": {
										"type": "array",
										"description": "The history of flag events during the last real-time playback submission.",
										"items": {
											"required": [
												"player",
												"color",
												"time",
												"active"
											],
											"properties": {
												"player": {
													"type": "string"
												},
												"team": {
													"type": "string"
												},
												"color": {
													"type": "string",
													"enum": [
														"green",
														"black",
														"violet"
													],
													"default": "green"
												},
												"time": {
													"type": "number",
													"minimum": 0
												},
												"active": {
													"type": "boolean"
												},
												"pos": {
													"required": [
														"x",
														"y"
													],
													"properties": {
														"x": {
															"type": "number"
														},
														"y": {
															"type": "number"
														}
													},
													"type": "object"
												}
											},
											"type": "object"
										}
									},
									"lastHash": {
										"type": "number",
										"description": "Actually the second to last frame hash."
									},
									"frameCount": {
										"type": "integer",
										"description": "Count of frames."
									},
									"goals": {
										"type": "object"
									}
								},
								"type": "object"
							},
							"format": "solutions",
							"description": "The first solution for each language will be the primary solution (shown to teachers)."
						}
					}
				},
				"type": "object"
			},
			"programmableProperties": {
				"type": "array",
				"items": {
					"type": "string",
					"description": "Names of properties which should be accessible to programmable methods.",
					"minLength": 1
				},
				"uniqueItems": true
			}
		},
		"default": {
			"programmableProperties": [
				"say"
			],
			"moreProgrammableProperties": [],
			"apiUserProperties": []
		},
		"id": "__base__",
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [],
	"description": "This Thang can be programmed by the player.",
	"system": "programming",
	"searchStrings": "programmable p pr pro prog progr progra program programm programma programmab",
	"i18nCoverage": [
		"-",
		"tr",
		"cs",
		"ru",
		"nn",
		"gl",
		"fr",
		"nb",
		"de-DE",
		"zh-HANS",
		"de-CH",
		"ar",
		"pt-BR",
		"es-ES",
		"es-419",
		"zh-HANT",
		"sk",
		"ro",
		"it",
		"uk",
		"fi",
		"sv",
		"pl",
		"da",
		"el",
		"nl-NL"
	],
	"index": true,
	"created": "2016-07-15T07:20:39.994Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 192,
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