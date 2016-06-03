{
	"_id": "5751b5a527adf1760041d137",
	"searchStrings": "referee r re ref refe refer",
	"index": true,
	"slug": "referee",
	"name": "Referee",
	"js": "var Ellipse, Rectangle, Referee, Vector,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };\n\nRectangle = require('lib/world/rectangle');\n\nEllipse = require('lib/world/ellipse');\n\nVector = require('lib/world/vector');\n\nReferee = (function(_super) {\n  __extends(Referee, _super);\n\n  Referee.className = 'Referee';\n\n  function Referee(config) {\n    Referee.__super__.constructor.call(this, config);\n    if (this.rectangles == null) {\n      this.rectangles = {};\n    }\n    if (this.ellipses == null) {\n      this.ellipses = {};\n    }\n    if (this.points == null) {\n      this.points = {};\n    }\n    this.warnedBuildTypeTypos = {};\n    this.timeouts = {};\n  }\n\n  Referee.prototype.attach = function(thang) {\n    var e, extraProperties, js, key, oldValue, value, _results;\n    if (this.extraCode) {\n      try {\n        js = CoffeeScript.compile(this.extraCode, {\n          bare: true\n        });\n        try {\n          extraProperties = eval(js);\n        } catch (_error) {\n          e = _error;\n          console.log(\"Referee \" + thang.id + \" couldn't eval\\n\" + js + \"\\nbecause\", e);\n        }\n      } catch (_error) {\n        e = _error;\n        console.log(\"Referee \" + thang.id + \" couldn't compile\\n\" + this.extraCode + \"\\nbecause\", e);\n      }\n      delete this.extraCode;\n    }\n    Referee.__super__.attach.call(this, thang);\n    if (extraProperties != null) {\n      _results = [];\n      for (key in extraProperties) {\n        value = extraProperties[key];\n        oldValue = thang[key];\n        if (typeof oldValue === 'function') {\n          _results.push(thang.appendMethod(key, value));\n        } else {\n          _results.push(thang[key] = value);\n        }\n      }\n      return _results;\n    }\n  };\n\n  Referee.prototype.initialize = function() {\n    var height, midX, midY, name, point, rect, region, regionsToInitialize, width, _i, _len, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;\n    regionsToInitialize = [];\n    _ref1 = (_ref = this.rectangles) != null ? _ref : {};\n    for (name in _ref1) {\n      rect = _ref1[name];\n      if (!rect.containsPoint) {\n        regionsToInitialize.push({\n          name: name,\n          rect: rect,\n          shape: 'rectangle',\n          klass: Rectangle,\n          container: this.rectangles\n        });\n      }\n    }\n    _ref3 = (_ref2 = this.ellipses) != null ? _ref2 : {};\n    for (name in _ref3) {\n      rect = _ref3[name];\n      if (!rect.containsPoint) {\n        regionsToInitialize.push({\n          name: name,\n          rect: rect,\n          shape: 'ellipse',\n          klass: Ellipse,\n          container: this.ellipses\n        });\n      }\n    }\n    for (_i = 0, _len = regionsToInitialize.length; _i < _len; _i++) {\n      region = regionsToInitialize[_i];\n      rect = region.rect;\n      if (rect.width) {\n        region.container[region.name] = new region.klass(rect.x, rect.y, rect.width, rect.height);\n      } else {\n        midX = (rect[0].x + rect[1].x) / 2;\n        midY = (rect[0].y + rect[1].y) / 2;\n        width = Math.abs(rect[1].x - rect[0].x);\n        height = Math.abs(rect[1].y - rect[0].y);\n        region.container[region.name] = new region.klass(midX, midY, width, height);\n      }\n    }\n    _ref5 = (_ref4 = this.points) != null ? _ref4 : {};\n    for (name in _ref5) {\n      point = _ref5[name];\n      if (!point.isVector) {\n        this.points[name] = new Vector(point.x, point.y);\n      }\n    }\n    return this.setUpLevel();\n  };\n\n  Referee.prototype.setUpLevel = function() {\n    this.hero = this.world.getThangByID('Hero Placeholder');\n    this.hero2 = this.world.getThangByID('Hero Placeholder 1');\n    if (this.coinSpawn) {\n      this.setUpCoins();\n    }\n    if (this.waves) {\n      return this.setUpWaves();\n    }\n  };\n\n  Referee.prototype.onFirstFrame = function() {\n    return this.onFirstFrameRan = true;\n  };\n\n  Referee.prototype.setUpCoins = function() {\n    var coin, totalChance, value, _i, _len, _ref, _ref1;\n    this.averageCoinValue = 0;\n    totalChance = 0;\n    _ref = this.coinSpawn.spawnChances;\n    for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n      coin = _ref[_i];\n      value = (_ref1 = {\n        'bronze-coin': 1,\n        'silver-coin': 2,\n        'gold-coin': 3,\n        'gem': 5\n      }[coin.buildType]) != null ? _ref1 : 1;\n      this.averageCoinValue += coin.spawnChance * value;\n      totalChance += coin.spawnChance;\n    }\n    this.averageCoinValue /= totalChance;\n    return this.totalCoinValue = 0;\n  };\n\n  Referee.prototype.setUpWaves = function() {\n    var maxSeedBucket, seedBucket, spawnChance, wave, _i, _j, _k, _l, _len, _len1, _len2, _len3, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _results;\n    this.waves = _.filter(this.waves);\n    maxSeedBucket = 0;\n    _ref = this.waves;\n    for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n      wave = _ref[_i];\n      if (wave.seedBuckets) {\n        _ref1 = wave.seedBuckets;\n        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {\n          seedBucket = _ref1[_j];\n          maxSeedBucket = Math.max(maxSeedBucket, seedBucket);\n        }\n      }\n    }\n    if (maxSeedBucket) {\n      seedBucket = this.world.rand.randf() % (maxSeedBucket + 1);\n    }\n    this.waves = (function() {\n      var _k, _len2, _ref2, _results;\n      _ref2 = this.waves;\n      _results = [];\n      for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {\n        wave = _ref2[_k];\n        if (!wave.seedBuckets || (__indexOf.call(wave.seedBuckets, seedBucket) >= 0)) {\n          _results.push(wave);\n        }\n      }\n      return _results;\n    }).call(this);\n    _ref2 = this.waves;\n    _results = [];\n    for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {\n      wave = _ref2[_k];\n      wave.scaledPower = wave.scalesWithDifficulty ? wave.power * Math.pow(2, (_ref3 = this.world.difficulty) != null ? _ref3 : 0) : wave.power;\n      _ref5 = (_ref4 = wave.spawnChances) != null ? _ref4 : [];\n      for (_l = 0, _len3 = _ref5.length; _l < _len3; _l++) {\n        spawnChance = _ref5[_l];\n        if (!spawnChance) {\n          console.warn(\"Missing spawnChance in wave\", (_ref6 = wave.name) != null ? _ref6 : wave);\n          continue;\n        }\n        spawnChance.power = this.getBuildTypePower(spawnChance.buildType, wave);\n      }\n      if (this.world.difficulty != null) {\n        _results.push(console.log(\"Assigned power \" + wave.scaledPower + \" to wave \" + wave.name + \" with difficulty \" + this.world.difficulty));\n      } else {\n        _results.push(void 0);\n      }\n    }\n    return _results;\n  };\n\n  Referee.prototype.chooseAction = function() {\n    var t, team, teams, thangs, _i, _j, _len, _len1, _name, _ref, _ref1;\n    if (!this.onFirstFrameRan) {\n      this.onFirstFrame();\n    }\n    this.spawnCoins();\n    this.spawnWaves();\n    this.processTimeouts();\n    teams = ['humans', 'ogres', 'neutral'];\n    this.surviving = {};\n    for (_i = 0, _len = teams.length; _i < _len; _i++) {\n      team = teams[_i];\n      this.surviving[team] = (function() {\n        var _j, _len1, _ref, _results;\n        _ref = this.world.thangs;\n        _results = [];\n        for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {\n          t = _ref[_j];\n          if (t.team === team && t.health > 0) {\n            _results.push(t);\n          }\n        }\n        return _results;\n      }).call(this);\n      _ref = this.surviving[team];\n      for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {\n        t = _ref[_j];\n        this.controlMinionWaypoints(t);\n      }\n    }\n    _ref1 = this.surviving;\n    for (team in _ref1) {\n      thangs = _ref1[team];\n      if (typeof this[_name = 'control' + _.string.capitalize(team)] === \"function\") {\n        this[_name](thangs);\n      }\n    }\n    this.fixUpDynamicKillGoals();\n    if (!((this.victory != null) || this.world.age === 0)) {\n      return typeof this.checkVictory === \"function\" ? this.checkVictory() : void 0;\n    }\n  };\n\n  Referee.prototype.spawnCoins = function() {\n    var buildType, coin, coinSpawnChance, name, targetPos, _results;\n    if (!this.coinSpawn) {\n      return;\n    }\n    if (this.coinSpawn.startingGold && this.totalCoinValue < this.coinSpawn.startingGold) {\n      coinSpawnChance = this.coinSpawn.startingGold;\n    } else {\n      if (this.coinSpawn.startTime && this.world.age < this.coinSpawn.startTime) {\n        return;\n      }\n      if (this.coinSpawn.endTime && this.world.age > this.coinSpawn.endTime) {\n        return;\n      }\n      coinSpawnChance = this.coinSpawn.goldPerSecond / this.averageCoinValue * this.world.dt;\n    }\n    _results = [];\n    while (coinSpawnChance > 0) {\n      if (this.world.rand.randf() < coinSpawnChance) {\n        buildType = this.pickBuildType(this.coinSpawn.spawnChances);\n        targetPos = this.pickPointFromRegions((function() {\n          var _i, _len, _ref, _results1;\n          _ref = this.coinSpawn.regions;\n          _results1 = [];\n          for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n            name = _ref[_i];\n            _results1.push(this.rectangles[name] || this.ellipses[name]);\n          }\n          return _results1;\n        }).call(this));\n        coin = this.instabuild(buildType, targetPos.x, targetPos.y);\n        this.totalCoinValue += coin.bountyGold;\n      }\n      _results.push(--coinSpawnChance);\n    }\n    return _results;\n  };\n\n  Referee.prototype.spawnWaves = function() {\n    var buildType, nPointChoices, nRegionChoices, name, path, powerUsed, sc, spawn, spawnChances, spawnPoint, spawnTime, t, thang, wave, waypoints, _i, _len, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _results;\n    if (!this.waves) {\n      return;\n    }\n    if (this.spawnsWaiting == null) {\n      this.spawnsWaiting = [];\n    }\n    t = this.world.age;\n    _ref1 = (_ref = this.waves) != null ? _ref : [];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      wave = _ref1[_i];\n      if (wave.startTime == null) {\n        continue;\n      }\n      if (wave.ended) {\n        continue;\n      }\n      if (wave.startTime && t < wave.startTime) {\n        continue;\n      }\n      if (wave.endTime && t > wave.endTime) {\n        continue;\n      }\n      wave.ended = true;\n      powerUsed = 0;\n      while (true) {\n        spawnChances = (function() {\n          var _j, _len1, _ref2, _results;\n          _ref2 = wave.spawnChances;\n          _results = [];\n          for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {\n            sc = _ref2[_j];\n            if (powerUsed + sc.power <= wave.scaledPower) {\n              _results.push(sc);\n            }\n          }\n          return _results;\n        })();\n        if (!spawnChances.length) {\n          break;\n        }\n        buildType = this.pickBuildType(spawnChances);\n        powerUsed += this.getBuildTypePower(buildType, wave);\n        spawnTime = this.world.rand.randf2((_ref2 = wave.startTime) != null ? _ref2 : 0, (_ref3 = (_ref4 = wave.endTime) != null ? _ref4 : wave.startTime) != null ? _ref3 : 0);\n        this.spawnsWaiting.push({\n          buildType: buildType,\n          spawnTime: spawnTime,\n          wave: wave\n        });\n      }\n      this.spawnsWaiting.sort(function(a, b) {\n        return a.spawnTime - b.spawnTime;\n      });\n    }\n    _results = [];\n    while (((_ref9 = this.spawnsWaiting[0]) != null ? _ref9.spawnTime : void 0) <= this.world.age) {\n      spawn = this.spawnsWaiting.shift();\n      wave = spawn.wave;\n      if (spawnPoint = wave.sharedSpawnPoint) {\n        waypoints = wave.sharedWaypoints;\n      } else {\n        nPointChoices = (_ref5 = (_ref6 = wave.points) != null ? _ref6.length : void 0) != null ? _ref5 : 0;\n        nRegionChoices = (_ref7 = (_ref8 = wave.regions) != null ? _ref8.length : void 0) != null ? _ref7 : 0;\n        if (this.world.rand.rand(nPointChoices + nRegionChoices) < nPointChoices) {\n          path = (function() {\n            var _j, _len1, _ref9, _results1;\n            _ref9 = wave.points[this.world.rand.rand(wave.points.length)];\n            _results1 = [];\n            for (_j = 0, _len1 = _ref9.length; _j < _len1; _j++) {\n              name = _ref9[_j];\n              _results1.push(this.points[name]);\n            }\n            return _results1;\n          }).call(this);\n          if (!_.every(path)) {\n            console.log(\"Error: missing at least one configured waypoint for wave\", wave.name);\n          }\n          spawnPoint = path[0];\n          waypoints = path.slice(1);\n        } else {\n          spawnPoint = this.pickPointFromRegions((function() {\n            var _j, _len1, _ref9, _results1;\n            _ref9 = wave.regions;\n            _results1 = [];\n            for (_j = 0, _len1 = _ref9.length; _j < _len1; _j++) {\n              name = _ref9[_j];\n              _results1.push(this.rectangles[name] || this.ellipses[name]);\n            }\n            return _results1;\n          }).call(this));\n          waypoints = null;\n        }\n        if (wave.sharesSpawnPoint) {\n          wave.sharedSpawnPoint = spawnPoint;\n          wave.sharedWaypoints = waypoints;\n        }\n      }\n      thang = this.instabuild(spawn.buildType, spawnPoint.x, spawnPoint.y);\n      if (thang) {\n        if (waypoints) {\n          _results.push(thang.waypoints = waypoints.slice());\n        } else {\n          _results.push(void 0);\n        }\n      } else {\n        _results.push(void 0);\n      }\n    }\n    return _results;\n  };\n\n  Referee.prototype.spawnWaveNamed = function(name) {\n    var wave;\n    wave = _.find(this.waves, {\n      name: name\n    });\n    if (!wave) {\n      return console.log(\"Couldn't find wave named \" + name + \".\");\n    }\n    wave.ended = false;\n    wave.startTime = this.world.age;\n    if (wave.endTime < this.world.age) {\n      delete wave.endTime;\n    }\n    return this.spawnWaves();\n  };\n\n  Referee.prototype.pickBuildType = function(spawns) {\n    var n, spawn, totalChance, _i, _j, _len, _len1, _ref, _ref1;\n    totalChance = 0;\n    for (_i = 0, _len = spawns.length; _i < _len; _i++) {\n      spawn = spawns[_i];\n      totalChance += (_ref = spawn.spawnChance) != null ? _ref : 1;\n    }\n    n = this.world.rand.randf() * totalChance;\n    for (_j = 0, _len1 = spawns.length; _j < _len1; _j++) {\n      spawn = spawns[_j];\n      if (n <= ((_ref1 = spawn.spawnChance) != null ? _ref1 : 1)) {\n        return spawn.buildType;\n      }\n      n -= spawn.spawnChance;\n    }\n    console.error(\"Programming mistake finding a build type!\", n, totalChance, spawns);\n    return spawn.buildType;\n  };\n\n  Referee.prototype.pickPointFromRegions = function(regions) {\n    var attempts, maxX, maxY, minX, minY, p, region, _i, _j, _len, _len1, _ref;\n    _ref = [Infinity, Infinity, -Infinity, -Infinity], minX = _ref[0], minY = _ref[1], maxX = _ref[2], maxY = _ref[3];\n    for (_i = 0, _len = regions.length; _i < _len; _i++) {\n      region = regions[_i];\n      minX = Math.min(minX, region.x - region.width);\n      minY = Math.min(minY, region.y - region.height);\n      maxX = Math.max(maxX, region.x + region.width);\n      maxY = Math.max(maxY, region.y + region.height);\n    }\n    attempts = 0;\n    while (attempts < 1000) {\n      p = new Vector(this.world.rand.randf2(minX, maxX), this.world.rand.randf2(minY, maxY));\n      for (_j = 0, _len1 = regions.length; _j < _len1; _j++) {\n        region = regions[_j];\n        if (!(region != null ? region.containsPoint : void 0)) {\n          console.log('region is not a rectangle/ellipse', region, 'with cp', region.containsPoint, 'and all keys', _.keys(region));\n        }\n        if (region.containsPoint(p)) {\n          return p;\n        }\n      }\n      ++attempts;\n    }\n    console.error(\"Couldn't find a random point within given regions in \" + attempts + \" tries.\");\n    return new Vector(regions[0].x, regions[0].y);\n  };\n\n  Referee.prototype.instabuild = function(buildType, x, y, poolName) {\n    var thang;\n    if (poolName == null) {\n      poolName = void 0;\n    }\n    if (!this.buildXY) {\n      console.error(this.id, \"didn't have buildXY method for use in Referee's instabuild at time\", this.world.age, \"for\", buildType, \"at\", x, y, \"with buildTypes\", this.buildTypes);\n      return null;\n    }\n    this.buildXY(buildType, x, y);\n    thang = this.performBuild(poolName);\n    return thang;\n  };\n\n  Referee.prototype.controlMinionWaypoints = function(thang) {\n    var waypoint, _ref;\n    if (thang.dead) {\n      return false;\n    }\n    if (!((_ref = thang.waypoints) != null ? _ref.length : void 0)) {\n      return false;\n    }\n    waypoint = thang.waypoints[0];\n    thang.move(waypoint);\n    if (thang.distance(waypoint) < 4) {\n      thang.waypoints.shift();\n      thang.setAction('idle');\n      thang.setTargetPos(null);\n    }\n    return true;\n  };\n\n  Referee.prototype.fixUpDynamicKillGoals = function() {\n    var _ref, _ref1;\n    if (this.world.goalManager.goalStates['ogres-die'] == null) {\n      return;\n    }\n    if (!_.every(this.waves, 'ended')) {\n      return;\n    }\n    if ((_ref = this.spawnsWaiting) != null ? _ref.length : void 0) {\n      return;\n    }\n    if ((_ref1 = this.surviving.ogres) != null ? _ref1.length : void 0) {\n      return;\n    }\n    return this.world.setGoalState('ogres-die', 'success');\n  };\n\n  Referee.prototype.getBuildTypePower = function(buildType, wave) {\n    var buildTypePower;\n    buildTypePower = this.world.getSystem('Existence').buildTypePower;\n    if (!(buildTypePower[buildType] || this.warnedBuildTypeTypos[buildType])) {\n      console.log(\"Warning: no power estimate for unknown buildType \" + buildType + \". Check bottom of Existence System code for known buildType strings.\");\n      this.warnedBuildTypeTypos[buildType] = true;\n    }\n    return buildTypePower[buildType] || wave.power / 15;\n  };\n\n  Referee.prototype.setTimeout = function(callback, delay) {\n    var key;\n    key = _.uniqueId();\n    this.timeouts[key] = {\n      time: this.world.age + delay,\n      callback: callback\n    };\n    return key;\n  };\n\n  Referee.prototype.setInterval = function(callback, interval) {\n    var key;\n    key = _.uniqueId();\n    this.timeouts[key] = {\n      time: this.world.age + interval,\n      callback: callback,\n      repeat: interval\n    };\n    return key;\n  };\n\n  Referee.prototype.processTimeouts = function() {\n    var callback, key, obj, _ref, _results;\n    _ref = this.timeouts;\n    _results = [];\n    for (key in _ref) {\n      obj = _ref[key];\n      if (this.world.age >= obj.time) {\n        callback = obj.callback;\n        callback();\n        if (obj.repeat != null) {\n          _results.push(this.timeouts[key] = {\n            time: obj.time + obj.repeat,\n            callback: obj.callback,\n            repeat: obj.repeat\n          });\n        } else {\n          _results.push(delete this.timeouts[key]);\n        }\n      } else {\n        _results.push(void 0);\n      }\n    }\n    return _results;\n  };\n\n  Referee.prototype.clearTimeout = function(key) {\n    if (this.timeouts[key] != null) {\n      return delete this.timeouts[key];\n    }\n  };\n\n  return Referee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "537d01f484c54c6e05c05989",
	"original": "54977ce657e90bd1903dea72",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274",
		"52dcc798acbf5e120a00291d"
	],
	"__v": 0,
	"description": "This Component serves as a base for other specialized Referee Components.",
	"commitMessage": "Adds timeouts and intervals to the referee",
	"parent": "56a2d10f5e68c12000b69f08",
	"configSchema": {
		"properties": {
			"coinSpawn": {
				"properties": {
					"startTime": {
						"type": "number",
						"description": "When coins start spawning.",
						"minimum": 0,
						"format": "seconds"
					},
					"endTime": {
						"type": "number",
						"description": "When coins stop spawning.",
						"minimum": 0,
						"format": "seconds"
					},
					"goldPerSecond": {
						"type": "number",
						"minimum": 0,
						"description": "The amount of gold value to spawn per second, on average."
					},
					"startingGold": {
						"type": "number",
						"description": "The amount of gold that starts in the coin spawn rectangles.",
						"minimum": 0
					},
					"spawnChances": {
						"type": "array",
						"default": [
							{
								"buildType": "bronze-coin",
								"spawnChance": 65
							},
							{
								"buildType": "silver-coin",
								"spawnChance": 30
							},
							{
								"buildType": "gold-coin",
								"spawnChance": 15
							}
						],
						"items": {
							"properties": {
								"buildType": {
									"type": "string",
									"description": "Like 'gold-coin' or 'silver-coin'; must match Builds config."
								},
								"spawnChance": {
									"type": "number",
									"minimum": 0,
									"description": "Relative likelihood of spawning this type, when any coin is spawned."
								}
							},
							"type": "object"
						},
						"description": "Chance of spawning each type of coin."
					},
					"regions": {
						"type": "array",
						"description": "Names of rectangles that coins can spawn in.",
						"items": {
							"type": "string",
							"description": "Name of a rectangle that coins can spawn in."
						}
					}
				},
				"default": {
					"spawnChances": [
						{
							"buildType": "bronze-coin",
							"spawnChance": 65
						},
						{
							"buildType": "silver-coin",
							"spawnChance": 30
						},
						{
							"buildType": "gold-coin",
							"spawnChance": 15
						}
					]
				}
			},
			"ellipses": {
				"type": "object",
				"additionalProperties": {
					"type": "array",
					"items": {
						"type": "object",
						"additionalProperties": false,
						"properties": {
							"x": {
								"title": "x",
								"description": "The x coordinate.",
								"type": "number"
							},
							"y": {
								"title": "y",
								"description": "The y coordinate.",
								"type": "number"
							}
						},
						"title": "Point",
						"description": "An {x, y} coordinate point.",
						"format": "point2d",
						"default": {
							"x": 15,
							"y": 20
						}
					},
					"maxItems": 2,
					"minItems": 2,
					"default": [
						{
							"x": 0,
							"y": 0
						},
						{
							"x": 46,
							"y": 39
						}
					],
					"format": "bounds"
				}
			},
			"extraCode": {
				"type": "string",
				"format": "coffee",
				"description": "Define an object containing more methods and properties, which will be attached to this Thang so you don't need a custom Referee.",
				"default": "{\n  #setUpLevel: ->\n    \n  #onFirstFrame: ->\n    \n  #chooseAction: ->\n    \n  #checkVictory: ->\n    \n}"
			},
			"points": {
				"type": "object",
				"additionalProperties": {
					"type": "object",
					"additionalProperties": false,
					"properties": {
						"x": {
							"title": "x",
							"description": "The x coordinate.",
							"type": "number"
						},
						"y": {
							"title": "y",
							"description": "The y coordinate.",
							"type": "number"
						}
					},
					"description": "An {x, y} coordinate point.",
					"format": "point2d",
					"default": {
						"x": 15,
						"y": 20
					}
				}
			},
			"rectangles": {
				"type": "object",
				"additionalProperties": {
					"type": "array",
					"items": {
						"type": "object",
						"additionalProperties": false,
						"properties": {
							"x": {
								"title": "x",
								"description": "The x coordinate.",
								"type": "number"
							},
							"y": {
								"title": "y",
								"description": "The y coordinate.",
								"type": "number"
							}
						},
						"title": "Point",
						"description": "An {x, y} coordinate point.",
						"format": "point2d",
						"default": {
							"x": 15,
							"y": 20
						}
					},
					"maxItems": 2,
					"minItems": 2,
					"default": [
						{
							"x": 0,
							"y": 0
						},
						{
							"x": 46,
							"y": 39
						}
					],
					"format": "bounds"
				}
			},
			"waves": {
				"type": "array",
				"description": "Configuration for automatically spawning waves.",
				"items": {
					"type": "object",
					"properties": {
						"seedBuckets": {
							"type": "array",
							"description": "Which seed buckets (0, 1, 2, etc.) this wave can spawn in.",
							"items": {
								"type": "integer",
								"minimum": 0
							}
						},
						"spawnChances": {
							"type": "array",
							"items": {
								"properties": {
									"buildType": {
										"type": "string",
										"description": "Like 'ogre-scout-m' or 'ogre-m'; must match Builds config."
									},
									"spawnChance": {
										"type": "number",
										"minimum": 0,
										"description": "Relative likelihood of spawning this type, when any Thang is spawned."
									}
								},
								"type": "object"
							},
							"description": "Chance of spawning each type of Thang."
						},
						"startTime": {
							"type": "number",
							"description": "When this wave can start spawning. Omit for no auto-spawn.",
							"minimum": 0,
							"format": "seconds"
						},
						"endTime": {
							"type": "number",
							"description": "When this wave can stop spawning. Omit for instant spawn of entire wave at startTime.",
							"minimum": 0,
							"format": "seconds"
						},
						"points": {
							"type": "array",
							"description": "Names of points that Thangs can spawn at, possibly including waypoints.",
							"items": {
								"type": "array",
								"items": {
									"type": "string",
									"description": "Waypoints for this path (just one for a spawn location with no waypoints)."
								}
							}
						},
						"regions": {
							"type": "array",
							"description": "Names of rectangles that Thangs can spawn in.",
							"items": {
								"type": "string",
								"description": "Name of a rectangle that Thangs can spawn in."
							}
						},
						"triggerLocations": {
							"type": "array",
							"description": "Locations (names of rectangles or points) that will trigger this spawn if the hero touches them.",
							"items": {
								"type": "object",
								"properties": {
									"name": {
										"type": "string",
										"description": "Name of trigger rectangle or point."
									},
									"type": {
										"type": "string",
										"enum": [
											"rectangle",
											"point"
										],
										"description": "Whether it's the name of a rectangle or point trigger."
									},
									"triggerDistance": {
										"type": "number",
										"description": "How far away from a trigger point (not rectangle) the hero can get before the wave will spawn."
									}
								}
							}
						},
						"power": {
							"type": "number",
							"minimum": 0,
							"description": "How much total power to spawn in a wave, where one power unit is roughly calculated as the strength of one munchkin."
						},
						"sharesSpawnPoint": {
							"type": "boolean",
							"description": "Whether each spawn in this wave will spawn in the same spawn point, or whether they'll each choose a fresh spawn point."
						},
						"scalesWithDifficulty": {
							"type": "boolean",
							"description": "Whether this wave will scale up its power to match the increased difficulty setting on replayable levels."
						},
						"name": {
							"type": "string",
							"description": "Optional name of wave, for use in programmatically triggering waves or just eyeballing things."
						}
					},
					"description": "Configuration for a single wave."
				}
			}
		}
	},
	"dependencies": [
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		},
		{
			"original": "52d9a6773cf02dcf26000dc4",
			"majorVersion": 0
		}
	],
	"patches": [],
	"created": "2016-06-03T16:51:49.886Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 44,
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