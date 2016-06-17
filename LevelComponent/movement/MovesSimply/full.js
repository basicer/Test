{
	"_id": "57647fac7bb21e33001ef9fa",
	"creator": "537d01f484c54c6e05c05989",
	"slug": "movessimply",
	"name": "MovesSimply",
	"original": "524b7b427fc0f6d51900000b",
	"__v": 0,
	"js": "var ArgumentError, MovesSimply, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nArgumentError = require('lib/world/errors').ArgumentError;\n\nMovesSimply = (function(_super) {\n  __extends(MovesSimply, _super);\n\n  function MovesSimply() {\n    _ref = MovesSimply.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  MovesSimply.className = 'MovesSimply';\n\n  MovesSimply.prototype.attach = function(thang) {\n    var movementSystem;\n    MovesSimply.__super__.attach.call(this, thang);\n    if (movementSystem = thang.world.getSystem('Movement')) {\n      thang.simpleMoveDistance = movementSystem.simpleMoveDistance;\n      thang.snapPoints = movementSystem.simpleMoveSnapPoints;\n      return thang.snapThreshold = movementSystem.simpleMoveSnapThreshold;\n    }\n  };\n\n  MovesSimply.prototype.moveSimply = function(xDist, yDist, dirName, numberOfMoves) {\n    var intermediateMove, intermediateTarget, nearest, targetPos, _i, _ref1, _ref2;\n    if (numberOfMoves == null) {\n      numberOfMoves = null;\n    }\n    this.movingSince = this.world.age;\n    targetPos = new Vector(this.pos.x + xDist, this.pos.y + yDist);\n    if (((_ref1 = this.snapPoints) != null ? _ref1.length : void 0) && ((xDist && Math.abs(xDist) % this.simpleMoveDistance < 0.1) || (yDist && Math.abs(yDist) % this.simpleMoveDistance < 0.1))) {\n      nearest = _.min(this.snapPoints, function(p) {\n        return targetPos.distanceSquared(p);\n      });\n      if (targetPos.distanceSquared(nearest) < Math.pow(this.snapThreshold || 2.5, 2)) {\n        targetPos = new Vector(nearest.x, nearest.y);\n      }\n    }\n    if (numberOfMoves >= 2) {\n      for (intermediateMove = _i = 1, _ref2 = Math.min(10, numberOfMoves); 1 <= _ref2 ? _i < _ref2 : _i > _ref2; intermediateMove = 1 <= _ref2 ? ++_i : --_i) {\n        intermediateTarget = this.pos.copy().add(targetPos.copy().subtract(this.pos).divide(numberOfMoves).multiply(intermediateMove));\n        this.setTargetPos(intermediateTarget);\n      }\n    }\n    this.setTargetPos(targetPos);\n    if (typeof this.announceAction === \"function\") {\n      this.announceAction(dirName);\n    }\n    this.setAction(\"move\");\n    this.intent = 'moveSimply';\n    this.recentDistances = [];\n    return typeof this.block === \"function\" ? this.block() : void 0;\n  };\n\n  MovesSimply.prototype.update = function() {\n    var dist, frustratedMessage, idleTime, recentDist, _ref1, _ref2, _ref3, _ref4;\n    if (this.intent !== 'moveSimply') {\n      return;\n    }\n    frustratedMessage = \"I can't get there.\";\n    dist = this.distance((_ref1 = this.targetPos) != null ? _ref1 : this);\n    this.recentDistances.push(dist);\n    if (this.recentDistances.length === Math.round(this.world.frameRate)) {\n      recentDist = this.recentDistances.shift();\n      if (Math.abs(recentDist - dist) > 1) {\n        if (((_ref2 = this.currentlySaying) != null ? _ref2.message : void 0) === frustratedMessage) {\n          this.sayWithoutBlocking(\"\");\n        }\n        this.movingSince = this.world.age;\n      }\n    }\n    if (!this.returningSnap) {\n      if (this.targetPos && this.distance(this.targetPos) < this.moveThreshold) {\n        this.setTargetPos(null);\n        this.movingSince = null;\n        this.setAction(\"idle\");\n        this.intent = void 0;\n        return this.unblock();\n      }\n    } else {\n      if (this.targetPos && this.pos.distanceSquared(this.targetPos) < this.moveThreshold) {\n        this.setTargetPos(null);\n        this.movingSince = null;\n        this.setAction(\"idle\");\n        this.intent = void 0;\n        this.returningSnap = false;\n        return this.unblock();\n      }\n    }\n    idleTime = this.world.age - this.movingSince;\n    if (idleTime > 3 + ((_ref3 = this.moveWaitTime) != null ? _ref3 : 2)) {\n      this.setTargetPos(null);\n      this.movingSince = null;\n      this.setAction(\"idle\");\n      this.intent = void 0;\n      return this.unblock();\n    } else if (Math.abs(idleTime - ((_ref4 = this.moveWaitTime) != null ? _ref4 : 2)) <= this.world.dt) {\n      return this.sayWithoutBlocking(frustratedMessage);\n    }\n  };\n\n  MovesSimply.prototype.moveRight = function(d, _excess) {\n    if ((d != null) && !this.allowsSimpleMoveArguments) {\n      throw new ArgumentError(\"\", \"moveRight\", \"\", \"\", \"\", 0, \"Don't add \" + d + \".\");\n    }\n    if ((d != null) && typeof d !== 'number') {\n      throw new ArgumentError(\"Type the number of moves to make (default 1 move, which is \" + this.simpleMoveDistance + \"m).\", \"moveRight\", \"distance\", \"number\", d);\n    }\n    if (_excess != null) {\n      throw new ArgumentError(\"\", \"moveRight\", \"_excess\", \"\", \"\", 1);\n    }\n    return this.moveSimply((d != null ? d : 1) * this.simpleMoveDistance, 0, 'moveRight', d);\n  };\n\n  MovesSimply.prototype.moveLeft = function(d, _excess) {\n    if ((d != null) && !this.allowsSimpleMoveArguments) {\n      throw new ArgumentError(\"\", \"moveLeft\", \"\", \"\", \"\", 0, \"Don't add \" + d + \".\");\n    }\n    if ((d != null) && typeof d !== 'number') {\n      throw new ArgumentError(\"Type the number of moves to make (default 1 move, which is \" + this.simpleMoveDistance + \"m).\", \"moveLeft\", \"distance\", \"number\", d);\n    }\n    if (_excess != null) {\n      throw new ArgumentError(\"\", \"moveLeft\", \"_excess\", \"\", \"\", 1);\n    }\n    return this.moveSimply(-((d != null ? d : 1) * this.simpleMoveDistance), 0, 'moveLeft', d);\n  };\n\n  MovesSimply.prototype.moveUp = function(d, _excess) {\n    if ((d != null) && !this.allowsSimpleMoveArguments) {\n      throw new ArgumentError(\"\", \"moveUp\", \"\", \"\", \"\", 0, \"Don't add \" + d + \".\");\n    }\n    if ((d != null) && typeof d !== 'number') {\n      throw new ArgumentError(\"Type the number of moves to make (default 1 move, which is \" + this.simpleMoveDistance + \"m).\", \"moveUp\", \"distance\", \"number\", d);\n    }\n    if (_excess != null) {\n      throw new ArgumentError(\"\", \"moveUp\", \"_excess\", \"\", \"\", 1);\n    }\n    return this.moveSimply(0, (d != null ? d : 1) * this.simpleMoveDistance, 'moveUp', d);\n  };\n\n  MovesSimply.prototype.moveDown = function(d, _excess) {\n    if ((d != null) && !this.allowsSimpleMoveArguments) {\n      throw new ArgumentError(\"\", \"moveDown\", \"\", \"\", \"\", 0, \"Don't add \" + d + \".\");\n    }\n    if ((d != null) && typeof d !== 'number') {\n      throw new ArgumentError(\"Type the number of moves to make (default 1 move, which is \" + this.simpleMoveDistance + \"m).\", \"moveDown\", \"distance\", \"number\", d);\n    }\n    if (_excess != null) {\n      throw new ArgumentError(\"\", \"moveDown\", \"_excess\", \"\", \"\", 1);\n    }\n    return this.moveSimply(0, -((d != null ? d : 1) * this.simpleMoveDistance), 'moveDown', d);\n  };\n\n  MovesSimply.prototype.returnToNearestSnapPoint = function() {\n    var nearest, _ref1, _ref2,\n      _this = this;\n    if (!((_ref1 = this.snapPoints) != null ? _ref1.length : void 0)) {\n      return false;\n    }\n    nearest = _.min(this.snapPoints, function(p) {\n      return _this.pos.distanceSquared(p);\n    });\n    if (!((this.moveThreshold < (_ref2 = this.pos.distanceSquared(nearest)) && _ref2 < 2 * Math.pow(this.simpleMoveDistance, 2)))) {\n      return false;\n    }\n    nearest = new Vector(nearest.x, nearest.y);\n    this.setTargetPos(nearest, 'returnToNearestSnapPoint');\n    this.setAction('move');\n    this.intent = 'moveSimply';\n    this.movingSince = this.world.age;\n    this.returningSnap = true;\n    this.recentDistances = [];\n    return typeof this.block === \"function\" ? this.block() : void 0;\n  };\n\n  return MovesSimply;\n\n})(Component);\n",
	"commitMessage": "Fixes returns to snap point",
	"parent": "574e2f507a42c0ac49c01fb4",
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
			"allowsArguments": {
				"type": "boolean",
				"description": "Whether the simple move commands allow arguments (like moveRight(24) to go 24 meters) or throws a default no-parameter error."
			},
			"allowsSimpleMoveArguments": {
				"type": "boolean",
				"description": "Whether the simple move commands allow arguments (like moveRight(24) to go 24 meters) or throws a default no-parameter error."
			},
			"simpleMoveDistance": {
				"type": "number",
				"description": "Deprecated–Movement System configures instead. Distance to move by default in meters.",
				"default": 20,
				"minimum": 0,
				"exclusiveMinimum": true
			},
			"snapPoints": {
				"type": "array",
				"description": "Deprecated–Movement System configures instead. Array of {x, y} coordinates to which a simple move will snap if within snapThreshold.",
				"items": {
					"type": "object",
					"description": "An {x, y} coordinate for simple move snapping.",
					"properties": {
						"x": {
							"type": "number"
						},
						"y": {
							"type": "number"
						}
					},
					"additionalProperties": false,
					"format": "point2d"
				}
			},
			"snapThreshold": {
				"default": 2.5,
				"description": "Deprecated–Movement System configures instead. When snapPoints are set, any simple move which would have ended within snapThreshold of a snap point will go there instead.",
				"type": "number"
			}
		},
		"default": {
			"simpleMoveDistance": 12,
			"snapThreshold": 2.5,
			"snapPoints": [],
			"allowsSimpleMoveArguments": false
		},
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b7b8c7fc0f6d519000013",
			"majorVersion": 0
		},
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		},
		{
			"original": "524b7b7c7fc0f6d519000011",
			"majorVersion": 0
		}
	],
	"description": "This Thang can move simply in the four cardinal directions.",
	"system": "movement",
	"searchStrings": "moves simply m mo mov move moves movess movessi movessim movessimp",
	"i18nCoverage": [
		"-",
		"tr",
		"cs",
		"ru",
		"zh-HANS",
		"es-419",
		"nn",
		"gl",
		"fr",
		"nb",
		"lt",
		"de-DE",
		"es-ES",
		"zh-HANT",
		"pt-PT",
		"pt-BR",
		"sk",
		"hu",
		"it",
		"ja",
		"uk",
		"pl",
		"sv",
		"da",
		"el",
		"ca",
		"nl-NL",
		"fi"
	],
	"created": "2016-06-17T22:54:36.121Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 92,
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