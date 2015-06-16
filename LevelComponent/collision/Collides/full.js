{
	"_id": "5580904ab43ce0b15a91b266",
	"creator": "512ef4805a67a8c507000001",
	"slug": "collides",
	"name": "Collides",
	"original": "524b7b857fc0f6d519000012",
	"__v": 0,
	"js": "var Collides, CollisionCategory, box2d, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };\n\nbox2d = require('lib/world/box2d');\n\nCollisionCategory = require('lib/world/systems/collision').CollisionCategory;\n\nCollides = (function(_super) {\n  __extends(Collides, _super);\n\n  function Collides() {\n    _ref = Collides.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Collides.className = \"Collides\";\n\n  Collides.prototype.collides = true;\n\n  Collides.prototype.updateCollisionFilterBits = function(filter, catName) {\n    var cat, collisionSystem, st, superteamIndex, superteams, _ref1;\n    st = (_ref1 = this.superteam) != null ? _ref1 : null;\n    collisionSystem = this.world.getSystem(\"Collision\");\n    superteams = collisionSystem.superteams;\n    if (__indexOf.call(superteams, st) >= 0) {\n      superteamIndex = superteams.indexOf(st);\n    } else {\n      superteamIndex = superteams.push(st) - 1;\n    }\n    cat = collisionSystem.allCategories[CollisionCategory.nameFor(catName || this.collisionCategory, superteamIndex)];\n    this.collisionCategory = catName;\n    filter.categoryBits = cat.number;\n    return filter.maskBits = cat.mask;\n  };\n\n  Collides.prototype.attach = function(thang) {\n    Collides.__super__.attach.call(this, thang);\n    thang.createBodyDef();\n    if (thang.exists && (thang.moves || thang.collisionCategory !== 'none')) {\n      thang.createBody();\n    }\n    return thang.originalCollisionCategory = thang.collisionCategory;\n  };\n\n  Collides.prototype.createBodyDef = function() {\n    var area, bodyDef, diameter, fixDef, h2, radius, segmentCount, segmentLength, theta, vertices, w2, _i, _ref1, _ref2;\n    if (!((box2d != null) && window.BOX2D_ENABLED !== false)) {\n      return;\n    }\n    bodyDef = new box2d.b2BodyDef();\n    _ref1 = [this.pos.x, this.pos.y], bodyDef.position.x = _ref1[0], bodyDef.position.y = _ref1[1];\n    bodyDef.type = (function() {\n      switch (this.collisionType) {\n        case \"static\":\n          return box2d.b2Body.b2_staticBody;\n        case \"kinematic\":\n          return box2d.b2Body.b2_kinematicBody;\n        case \"dynamic\":\n          return box2d.b2Body.b2_dynamicBody;\n      }\n    }).call(this);\n    bodyDef.bullet = this.isBullet;\n    bodyDef.fixedRotation = this.fixedRotation;\n    bodyDef.active = this.exists;\n    fixDef = new box2d.b2FixtureDef();\n    this.updateCollisionFilterBits(fixDef.filter, this.collisionCategory);\n    fixDef.friction = 0.0;\n    fixDef.restitution = this.restitution;\n    area = 0;\n    switch (this.shape) {\n      case \"ellipsoid\":\n      case \"disc\":\n        diameter = Math.max(this.width, this.height);\n        if ((Math.abs(this.width - this.height) / diameter) <= 0.25) {\n          radius = diameter / 2;\n          fixDef.shape = new box2d.b2CircleShape(radius);\n          area = Math.PI * radius * radius;\n        } else {\n          segmentCount = 16;\n          segmentLength = 2 * Math.PI / segmentCount;\n          _ref2 = [this.width / 2, this.height / 2], w2 = _ref2[0], h2 = _ref2[1];\n          vertices = [];\n          for (theta = _i = 0; 0 <= segmentCount ? _i < segmentCount : _i > segmentCount; theta = 0 <= segmentCount ? ++_i : --_i) {\n            vertices.push(new box2d.b2Vec2(w2 * Math.cos(segmentLength * theta), h2 * Math.sin(segmentLength * theta)));\n          }\n          fixDef.shape = box2d.b2PolygonShape.AsArray(vertices, segmentCount);\n          area = Math.PI * w2 * h2;\n        }\n        break;\n      case \"box\":\n      case \"sheet\":\n        fixDef.shape = box2d.b2PolygonShape.AsBox(this.width / 2, this.height / 2);\n        area = this.width * this.height;\n    }\n    fixDef.density = this.mass / area;\n    this.bodyDef = bodyDef;\n    return this.fixDef = fixDef;\n  };\n\n  Collides.prototype.cancelCollisions = function(becauseOfDeath) {\n    var catName, filterData, fixtureList;\n    if (becauseOfDeath == null) {\n      becauseOfDeath = false;\n    }\n    if (!this.body) {\n      return;\n    }\n    this.body.SetActive(false);\n    fixtureList = this.body.GetFixtureList();\n    filterData = fixtureList.GetFilterData();\n    becauseOfDeath = becauseOfDeath && this.collisionType === \"dynamic\";\n    catName = CollisionCategory.nameFor(becauseOfDeath ? \"dead\" : \"none\");\n    this.updateCollisionFilterBits(filterData, catName);\n    if (becauseOfDeath) {\n      this.body.SetActive(true);\n    }\n    this.body.GetFixtureList().SetFilterData(filterData);\n    if (!becauseOfDeath) {\n      return this.updateRegistration();\n    }\n  };\n\n  Collides.prototype.restoreCollisions = function() {\n    var filterData, fixtureList;\n    this.body.SetActive(false);\n    fixtureList = this.body.GetFixtureList();\n    filterData = fixtureList.GetFilterData();\n    this.updateCollisionFilterBits(filterData, this.originalCollisionCategory);\n    this.body.SetActive(true);\n    return this.body.GetFixtureList().SetFilterData(filterData);\n  };\n\n  Collides.prototype.createBody = function() {\n    var box2dWorld, _ref1;\n    if (this.body) {\n      return;\n    }\n    if (!(box2dWorld = (_ref1 = this.world.getSystem('Collision')) != null ? _ref1.box2dWorld : void 0)) {\n      return;\n    }\n    this.body = box2dWorld.CreateBody(this.bodyDef);\n    this.body.SetUserData(this);\n    this.body.CreateFixture(this.fixDef);\n    if (this.rotation) {\n      this.body.SetAngle(this.rotation);\n    }\n    return this.body;\n  };\n\n  Collides.prototype.destroyBody = function() {\n    if (!this.body) {\n      return;\n    }\n    this.body.SetUserData(null);\n    this.world.getSystem(\"Collision\").box2dWorld.DestroyBody(this.body);\n    return this.body = this.bodyDef = this.fixDef = null;\n  };\n\n  return Collides;\n\n})(Component);\n",
	"commitMessage": "Fixed ice door collision.",
	"parent": "552eb0d47f6644620e4e602a",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"official": false,
	"configSchema": {
		"properties": {
			"collisionType": {
				"description": "Explanations: http://www.box2d.org/manual.html#_Toc258082973",
				"default": "dynamic",
				"type": "string",
				"enum": [
					"static",
					"kinematic",
					"dynamic"
				]
			},
			"collisionCategory": {
				"type": "string",
				"enum": [
					"ground",
					"air",
					"ground_and_air",
					"none",
					"obstacles",
					"dead"
				],
				"default": "ground",
				"description": "What type of collisions this Thang partakes in."
			},
			"mass": {
				"type": "number",
				"description": "Mass in kilograms.",
				"default": 70,
				"format": "kilograms"
			},
			"fixedRotation": {
				"type": "boolean",
				"default": false,
				"description": "Whether this Thang can rotate freely when physics forces act upon it."
			},
			"isBullet": {
				"type": "boolean",
				"description": "Whether this Thang collides like a bullet (long, small, fast).",
				"default": false
			},
			"restitution": {
				"type": "number",
				"minimum": 0,
				"exclusiveMinimum": true,
				"description": "Bounciness--ratio of speed after a collision to speed before the collision. http://en.wikipedia.org/wiki/Coefficient_of_restitution",
				"default": 0.5
			}
		},
		"default": {
			"collisionType": "dynamic",
			"collisionCategory": "ground",
			"mass": 70,
			"fixedRotation": false,
			"isBullet": false,
			"restitution": 0.5
		},
		"id": "__base__",
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b75ad7fc0f6d519000001",
			"majorVersion": 0
		},
		{
			"original": "524b4150ff92f1f4f8000024",
			"majorVersion": 0
		}
	],
	"description": "This Thang collides with other Thangs.",
	"system": "collision",
	"searchStrings": "collides c co col coll colli collid",
	"created": "2015-06-16T21:08:26.591Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 49,
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