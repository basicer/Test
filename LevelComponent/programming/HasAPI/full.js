{
	"_id": "57647ed00f52412400b23b0d",
	"slug": "hasapi",
	"name": "HasAPI",
	"js": "var HasAPI, slugify, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nslugify = function(str) {\n  var from, i, to, _i, _ref;\n  str = str.replace(/^\\s+|\\s+$/g, \"\").toLowerCase();\n  from = \"àáäâèéëêìíïîòóöôùúüûñç·/_,:;\";\n  to = \"aaaaeeeeiiiioooouuuunc------\";\n  for (i = _i = i, _ref = from.length; i <= _ref ? _i <= _ref : _i >= _ref; i = i <= _ref ? ++_i : --_i) {\n    str = str.replace(new RegExp(from.charAt(i), \"g\"), to.charAt(i));\n  }\n  return str.replace(/[^a-z0-9 -]/g, \"\").replace(/\\s+/g, \"-\").replace(/-+/g, \"-\");\n};\n\nHasAPI = (function(_super) {\n  __extends(HasAPI, _super);\n\n  function HasAPI() {\n    _ref = HasAPI.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  HasAPI.className = 'HasAPI';\n\n  HasAPI.prototype.attach = function(thang) {\n    var _ref1;\n    HasAPI.__super__.attach.call(this, thang);\n    if ((_ref1 = thang.spriteName) === 'Ogre M' || _ref1 === 'Ogre F') {\n      return thang.type || (thang.type = 'ogre');\n    } else {\n      return thang.type || (thang.type = slugify(thang.spriteName).replace(/(^ogre-|^human-|(-[mf])?(-[0-9]+)?$)/g, ''));\n    }\n  };\n\n  HasAPI.prototype.block = function() {\n    var _ref1;\n    if ((_ref1 = this.future) != null) {\n      _ref1.resolve(esper.Value.fromNative('interrupted'));\n    }\n    this.future = new esper.FutureValue();\n    return this.future;\n  };\n\n  HasAPI.prototype.update = function() {\n    if (!(this.waitingToUnblock && this.actionHeats.all <= this.world.dt)) {\n      return;\n    }\n    return this.finishUnblocking();\n  };\n\n  HasAPI.prototype.finishUnblocking = function() {\n    var aether, _ref1;\n    if (!(aether = (_ref1 = this.world.userCodeMap['Hero Placeholder']) != null ? _ref1.plan : void 0)) {\n      return;\n    }\n    this.future.resolve(aether.esperEngine.realm.makeForForeignObject(this.waitingToUnblockReturnValue));\n    this.future = void 0;\n    if (this.plan) {\n      this.currentPlanMethodResolved = true;\n    }\n    this.waitingToUnblock = void 0;\n    return this.waitingToUnblockReturnValue = void 0;\n  };\n\n  HasAPI.prototype.unblock = function(returnValue) {\n    if (!this.future) {\n      return;\n    }\n    if (this.actionHeats.all <= this.world.dt) {\n      return this.finishUnblocking();\n    } else {\n      this.waitingToUnblock = true;\n      return this.waitingToUnblockReturnValue = returnValue;\n    }\n  };\n\n  return HasAPI;\n\n})(Component);\n",
	"creator": "537d01f484c54c6e05c05989",
	"original": "52e816058c875f0000000001",
	"__v": 0,
	"commitMessage": "Finish unblocking at end of action instead of at beginning",
	"parent": "57350e82dd3a12dd69e023d1",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"patches": [],
	"official": false,
	"configSchema": {
		"properties": {
			"apiMethods": {
				"type": "array",
				"description": "Names of methods in this Thang's API. These methods operate on the original Thang and are accessible to any team.",
				"items": {
					"type": "string",
					"name": "Name of a method in this Thang's API."
				},
				"default": [
					"findNearest",
					"hasEffect",
					"distanceTo",
					"findNearestEnemy",
					"findEnemies"
				]
			},
			"apiProperties": {
				"type": "array",
				"description": "Names of properties in this Thang's API.",
				"items": {
					"type": "string",
					"name": "Name of a property in this Thang's API."
				},
				"default": [
					"id",
					"health",
					"pos",
					"target",
					"team",
					"type",
					"maxHealth"
				]
			},
			"type": {
				"type": "string",
				"description": "What's the player-visible type of this Thang, like 'soldier', 'thrower', 'arrow', or 'beam-tower'."
			}
		},
		"default": {
			"apiProperties": [
				"id",
				"health",
				"pos",
				"target",
				"team",
				"type",
				"maxHealth"
			],
			"apiMethods": [
				"findNearest",
				"hasEffect",
				"distanceTo",
				"findNearestEnemy",
				"findEnemies"
			],
			"type": ""
		},
		"additionalProperties": true,
		"type": "object"
	},
	"dependencies": [],
	"description": "This Component lets the Thang specify its API to other Programmable Thangs. You can also use it to add random properties to a Thang.",
	"system": "programming",
	"searchStrings": "has api h ha has hasa",
	"created": "2016-06-17T22:50:56.172Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 26,
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