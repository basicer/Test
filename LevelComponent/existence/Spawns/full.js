{
	"_id": "55f78cf6a216618405e00d85",
	"searchStrings": "spawns s sp spa spaw",
	"creator": "531c8c3ccf439d790a23af04",
	"slug": "spawns",
	"name": "Spawns",
	"js": "var Spawns, Thang, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nThang = require('lib/world/thang');\n\nSpawns = (function(_super) {\n  __extends(Spawns, _super);\n\n  function Spawns() {\n    _ref = Spawns.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Spawns.className = \"Spawns\";\n\n  Spawns.prototype.attach = function(thang) {\n    var _ref1;\n    this.requiredThangTypes = ((_ref1 = thang.requiredThangTypes) != null ? _ref1 : []).concat(_.filter(this.requiredThangTypes));\n    Spawns.__super__.attach.call(this, thang);\n    return thang.spawnPools = {};\n  };\n\n  Spawns.prototype.spawn = function(thangTypeName, components, id, poolName) {\n    var component, effect, effects, i, pool, pooledSpawn, spawned, _base, _i, _j, _k, _l, _len, _len1, _len2, _len3, _ref1, _ref2;\n    if (id == null) {\n      id = null;\n    }\n    if (poolName == null) {\n      poolName = null;\n    }\n    spawned = new Thang(this.world, thangTypeName, id);\n    if (this.team && this.team !== 'neutral') {\n      for (_i = 0, _len = components.length; _i < _len; _i++) {\n        component = components[_i];\n        if ((_ref1 = component[1]) != null ? _ref1.team : void 0) {\n          component[1].team = this.team;\n        }\n      }\n    }\n    for (_j = 0, _len1 = components.length; _j < _len1; _j++) {\n      component = components[_j];\n      if ((_ref2 = component[1]) != null ? _ref2.stateless : void 0) {\n        component[1].stateless = false;\n      }\n    }\n    spawned.addComponents.apply(spawned, components);\n    spawned.keepTrackedProperty('exists');\n    spawned.updateRegistration();\n    if (this.hasEffects && spawned.hasEffects && this.effects.length) {\n      effects = _.cloneDeep(this.effects);\n      for (_k = 0, _len2 = effects.length; _k < _len2; _k++) {\n        effect = effects[_k];\n        if (effect.name !== 'sacrifice') {\n          spawned.addEffect(effect);\n        }\n      }\n    }\n    if (poolName == null) {\n      poolName = spawned.spriteName;\n    }\n    pool = (_base = this.spawnPools)[poolName] != null ? (_base = this.spawnPools)[poolName] : _base[poolName] = [];\n    for (i = _l = 0, _len3 = pool.length; _l < _len3; i = ++_l) {\n      pooledSpawn = pool[i];\n      if (!(pooledSpawn.exists || pooledSpawn.isCollectable)) {\n        spawned.id = pooledSpawn.id;\n        pool[i] = spawned;\n        spawned.trackedPropertiesUsed = pooledSpawn.trackedPropertiesUsed;\n        this.world.setThang(spawned);\n        if (typeof spawned.initialize === \"function\") {\n          spawned.initialize();\n        }\n        return spawned;\n      }\n    }\n    pool.push(spawned);\n    this.world.thangs.unshift(spawned);\n    this.world.setThang(spawned);\n    if (typeof spawned.initialize === \"function\") {\n      spawned.initialize();\n    }\n    return spawned;\n  };\n\n  Spawns.prototype.componentsForThangType = function(original) {\n    var component, componentClass, componentModel, components, thangTypeModel, _base, _i, _len, _name, _ref1;\n    if (!(this.world.levelComponents && this.world.thangTypes)) {\n      return;\n    }\n    if (!(thangTypeModel = _.find(this.world.thangTypes, {\n      original: original\n    }))) {\n      console.error(this.id, 'could not find ThangType for', original, 'when trying to get ready to spawn one, of', this.world.thangTypes);\n      return [];\n    }\n    components = [];\n    _ref1 = thangTypeModel.components;\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      component = _ref1[_i];\n      componentModel = _.find(this.world.levelComponents, function(c) {\n        var _ref2;\n        return c.original === component.original && c.version.major === ((_ref2 = component.majorVersion) != null ? _ref2 : 0);\n      });\n      componentClass = this.world.loadClassFromCode(componentModel.js, componentModel.name, 'component');\n      if ((_base = this.world.classMap)[_name = componentClass.className] == null) {\n        _base[_name] = componentClass;\n      }\n      components.push([componentClass, component.config]);\n    }\n    return components;\n  };\n\n  return Spawns;\n\n})(Component);\n",
	"original": "524cbdc03ea855e0ab0000bb",
	"__v": 0,
	"commitMessage": "Don't pass sacrifice bonuses to spawned minions.",
	"parent": "550396567faf86bc6bb226e4",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"official": false,
	"configSchema": {
		"id": "__base__",
		"additionalProperties": false,
		"type": "object",
		"properties": {
			"requiredThangTypes": {
				"type": "array",
				"items": {
					"type": "string",
					"format": "thang-type",
					"description": "Additional ThangType upon which this Spawner depends."
				},
				"description": "Additional ThangTypes upon which this Spawner depends."
			}
		},
		"default": {
			"requiredThangTypes": []
		}
	},
	"dependencies": [],
	"description": "This Thang can spawn other Thangs.",
	"system": "existence",
	"created": "2015-09-15T03:13:58.362Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 43,
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