{
	"_id": "541733ad571f116c0b1f0089",
	"index": true,
	"slug": "crisscrossreferee",
	"name": "CrissCrossReferee",
	"codeLanguage": "coffeescript",
	"js": "var CrissCrossReferee, p, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  __slice = [].slice;\n\np = function(x, y) {\n  return \"\" + x + \".\" + y;\n};\n\nCrissCrossReferee = (function(_super) {\n  __extends(CrissCrossReferee, _super);\n\n  function CrissCrossReferee() {\n    _ref = CrissCrossReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  CrissCrossReferee.className = \"CrissCrossReferee\";\n\n  CrissCrossReferee.prototype.ASKING_STATE = 'asking';\n\n  CrissCrossReferee.prototype.HEARING_STATE = 'hearing';\n\n  CrissCrossReferee.prototype.WATCHING_STATE = 'watching';\n\n  CrissCrossReferee.prototype.CROSSING_STATE = 'crossing';\n\n  CrissCrossReferee.prototype.ALL_DONE_STATE = 'done';\n\n  CrissCrossReferee.prototype.HEIGHT = 7;\n\n  CrissCrossReferee.prototype.WIDTH = 7;\n\n  CrissCrossReferee.prototype.TILE_GROUP_SIZE = 7;\n\n  CrissCrossReferee.prototype.NUM_ROUNDS = 5;\n\n  CrissCrossReferee.prototype.MAX_TURNS = 40;\n\n  CrissCrossReferee.prototype.tileGroupLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];\n\n  CrissCrossReferee.prototype.map = null;\n\n  CrissCrossReferee.prototype.tileGroups = null;\n\n  CrissCrossReferee.prototype.currentTileGroup = 'A';\n\n  CrissCrossReferee.prototype.turn = 0;\n\n  CrissCrossReferee.prototype.round = 0;\n\n  CrissCrossReferee.prototype.turnsSinceChange = 0;\n\n  CrissCrossReferee.prototype.turnState = null;\n\n  CrissCrossReferee.prototype.roundScores = {\n    humans: 0,\n    ogres: 0\n  };\n\n  CrissCrossReferee.prototype.turns = [];\n\n  CrissCrossReferee.prototype.durationForWatching = 1;\n\n  CrissCrossReferee.prototype.durationBetweenTurns = 1;\n\n  CrissCrossReferee.prototype.durationForCrossingReset = 2;\n\n  CrissCrossReferee.prototype.humanID = 'Anya';\n\n  CrissCrossReferee.prototype.ogreID = 'Junior';\n\n  CrissCrossReferee.prototype.thangTemplates = {\n    humans: [\n      {\n        type: 'librarian-champion',\n        goldCost: 64\n      }, {\n        type: 'librarian',\n        goldCost: 16\n      }, {\n        type: 'sniper',\n        goldCost: 4\n      }, {\n        type: 'archer',\n        goldCost: 1\n      }\n    ],\n    ogres: [\n      {\n        type: 'shaman-champion',\n        goldCost: 64\n      }, {\n        type: 'shaman',\n        goldCost: 16\n      }, {\n        type: 'assassin',\n        goldCost: 4\n      }, {\n        type: 'thrower',\n        goldCost: 1\n      }\n    ]\n  };\n\n  CrissCrossReferee.prototype.treasureChestIDs = {\n    humans: 'Human Treasure Chest',\n    ogres: 'Ogre Treasure Chest'\n  };\n\n  CrissCrossReferee.prototype.gemIDs = {\n    humans: 'Gem 2',\n    ogres: 'Gem'\n  };\n\n  CrissCrossReferee.prototype.gemTemplates = {\n    humans: 'human-gem',\n    ogres: 'ogre-gem'\n  };\n\n  CrissCrossReferee.prototype.teamColors = {\n    humans: '#ff0000',\n    ogres: '#0000ff'\n  };\n\n  CrissCrossReferee.prototype.chooseAction = function() {\n    return this.gameLoop();\n  };\n\n  CrissCrossReferee.prototype.gameLoop = function() {\n    var biddingOver, _ref1;\n    if (this.turnState === this.ALL_DONE_STATE) {\n      return;\n    }\n    if (!this.map) {\n      this.initRound();\n    }\n    this.teamWinningRound = this.roundOver();\n    if (this.teamWinningRound) {\n      if (!((_ref1 = this.teamWinningRound) === 'humans' || _ref1 === 'ogres')) {\n        this.finishRound();\n        return;\n      }\n      if (this.turnState === this.CROSSING_STATE) {\n        if (!this.crossingIsOver()) {\n          return;\n        }\n        this.resetCrossing();\n        this.turnState = null;\n        this.finishRound();\n        this.wait(this.durationForCrossingReset);\n      } else {\n        this.turnState = this.CROSSING_STATE;\n        this.beginCrossing();\n      }\n      return;\n    }\n    if (!this.turnState) {\n      this.say(\"Bid for tile group \" + this.currentTileGroup + \".\", this);\n      this.showAvailableTileGroup();\n      this.turnState = this.ASKING_STATE;\n      this.askingSince = this.world.age;\n      return;\n    }\n    if (this.turnState === this.ASKING_STATE) {\n      biddingOver = this.humansBid && this.ogresBid || (this.world.age - this.askingSince > this.turnTime + this.world.dt);\n      if (biddingOver) {\n        this.handleSubmissions();\n        this.turnState = this.WATCHING_STATE;\n        this.askingSince = null;\n        this.assignTiles();\n        this.recordTurn();\n        this.wait(this.durationForWatching);\n        return;\n      }\n    }\n    if (this.turnState === this.WATCHING_STATE) {\n      this.goToNextTurn();\n      this.turnState = this.humansBid = this.ogresBid = null;\n      this.wait(this.durationBetweenTurns);\n    }\n  };\n\n  CrissCrossReferee.prototype.initRound = function() {\n    var hearer, _i, _len, _ref1;\n    this.human = this.world.getThangByID(this.humanID);\n    this.ogre = this.world.getThangByID(this.ogreID);\n    if (this.round > 0) {\n      this.durationBetweenTurns = this.world.dt;\n      this.durationForWatching = this.world.dt;\n      _ref1 = [this, this.human, this.ogre];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        hearer = _ref1[_i];\n        hearer.hearingDelay = hearer.hearingDelayMinimum = hearer.hearingDelayMaximum = 2 * this.world.dt;\n      }\n    }\n    this.turnTime = this.hearingDelayMaximum + Math.max(this.human.hearingDelayMaximum, this.ogre.hearingDelayMaximum) + this.durationBetweenTurns + this.durationForWatching;\n    this.turn = this.turnsSinceChange = 0;\n    this.turns = [];\n    this.human.setTurns(this.turns);\n    this.ogre.setTurns(this.turns);\n    this.currentTileGroup = this.tileGroupLetters[this.turn];\n    this.inventorySystem = this.world.getSystem(\"Inventory\");\n    this.inventorySystem.reset();\n    this.initMapAndTileGroups();\n    this.initControllableUnits();\n    return this.initTiles();\n  };\n\n  CrissCrossReferee.prototype.initMapAndTileGroups = function() {\n    var d, i, j, map, node, nodeID, numNodes, tile, tileGroupNumber, tileGroupNumbers, _base, _i, _j, _k, _l, _len, _len1, _len2, _name, _ref1, _ref2, _ref3, _results;\n    tileGroupNumbers = [];\n    numNodes = this.HEIGHT * this.WIDTH;\n    for (i = _i = 0; 0 <= numNodes ? _i < numNodes : _i > numNodes; i = 0 <= numNodes ? ++_i : --_i) {\n      tileGroupNumber = Math.floor(i / this.TILE_GROUP_SIZE);\n      tileGroupNumbers.splice(this.world.rand.rand2(0, tileGroupNumbers.length), 0, tileGroupNumber);\n    }\n    map = {};\n    this.tileGroups = {};\n    _ref1 = _.range(this.WIDTH);\n    for (_j = 0, _len = _ref1.length; _j < _len; _j++) {\n      i = _ref1[_j];\n      _ref2 = _.range(this.HEIGHT);\n      for (_k = 0, _len1 = _ref2.length; _k < _len1; _k++) {\n        j = _ref2[_k];\n        node = {\n          owner: null,\n          x: i,\n          y: j,\n          id: p(i, j),\n          apiProperties: ['owner', 'id', 'x', 'y', 'tileGroupLetter', 'neighbors']\n        };\n        tileGroupNumber = tileGroupNumbers.pop();\n        node.tileGroupLetter = this.tileGroupLetters[tileGroupNumber];\n        if ((_base = this.tileGroups)[_name = node.tileGroupLetter] == null) {\n          _base[_name] = [];\n        }\n        this.tileGroups[node.tileGroupLetter].push(node);\n        map[p(i, j)] = node;\n        tile = this.getThangForNodeID(node.id);\n        tile.drawsBoundsIndex = tileGroupNumber;\n      }\n    }\n    this.map = map;\n    _ref3 = _.range(this.WIDTH);\n    _results = [];\n    for (_l = 0, _len2 = _ref3.length; _l < _len2; _l++) {\n      i = _ref3[_l];\n      _results.push((function() {\n        var _len3, _m, _ref4, _results1;\n        _ref4 = _.range(this.HEIGHT);\n        _results1 = [];\n        for (_m = 0, _len3 = _ref4.length; _m < _len3; _m++) {\n          j = _ref4[_m];\n          d = [];\n          if (j < this.HEIGHT - 1) {\n            d.push(p(i, j + 1));\n          }\n          if (j < this.HEIGHT - 1 && i < this.WIDTH - 1) {\n            d.push(p(i + 1, j + 1));\n          }\n          if (i < this.WIDTH - 1) {\n            d.push(p(i + 1, j));\n          }\n          if (j > 0 && i < this.WIDTH - 1) {\n            d.push(p(i + 1, j - 1));\n          }\n          if (j > 0) {\n            d.push(p(i, j - 1));\n          }\n          if (j > 0 && i > 0) {\n            d.push(p(i - 1, j - 1));\n          }\n          if (i > 0) {\n            d.push(p(i - 1, j));\n          }\n          if (j < this.HEIGHT - 1 && i > 0) {\n            d.push(p(i - 1, j + 1));\n          }\n          _results1.push(map[p(i, j)].neighbors = (function() {\n            var _len4, _n, _results2;\n            _results2 = [];\n            for (_n = 0, _len4 = d.length; _n < _len4; _n++) {\n              nodeID = d[_n];\n              _results2.push(this.map[nodeID]);\n            }\n            return _results2;\n          }).call(this));\n        }\n        return _results1;\n      }).call(this));\n    }\n    return _results;\n  };\n\n  CrissCrossReferee.prototype.initControllableUnits = function() {\n    var gem, player, _base, _i, _len, _name, _ref1, _results;\n    this.players = [this.human, this.ogre];\n    if (this.captainStartingPositions == null) {\n      this.captainStartingPositions = {};\n    }\n    if (this.captainStartingScales == null) {\n      this.captainStartingScales = {\n        humans: this.human.scaleFactor,\n        ogres: this.ogre.scaleFactor\n      };\n    }\n    _ref1 = this.players;\n    _results = [];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      player = _ref1[_i];\n      player.setMap(this.map);\n      player.setTileGroups(this.tileGroups);\n      player.setRound(this.round);\n      player.updateAPIs();\n      gem = this.world.getThangByID(this.gemIDs[player.team]);\n      gem.setExists(true);\n      if ((_base = this.captainStartingPositions)[_name = player.team] == null) {\n        _base[_name] = player.pos.copy();\n      }\n      player.setAction('idle');\n      player.rotation = Vector.subtract(gem.pos, player.pos).heading();\n      player.scaleFactor = this.captainStartingScales[player.team];\n      _results.push(player.alpha = 1);\n    }\n    return _results;\n  };\n\n  CrissCrossReferee.prototype.initTiles = function() {\n    var tile, _i, _j, _len, _len1, _ref1, _ref2, _results;\n    if (!this.tileThangs) {\n      this.tileThangs = this.getByType(\"tile\");\n      _ref1 = this.tileThangs;\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        tile = _ref1[_i];\n        if (!tile.actions[\"flip-human\"]) {\n          tile.addActions({\n            name: \"flip-human\",\n            cooldown: 0\n          }, {\n            name: \"flip-ogre\",\n            cooldown: 0\n          }, {\n            name: \"die\",\n            cooldown: 0\n          });\n        }\n      }\n    }\n    _ref2 = this.tileThangs;\n    _results = [];\n    for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {\n      tile = _ref2[_j];\n      tile.setAction(\"idle\");\n      tile.alpha = 0.99;\n      _results.push(tile.keepTrackedProperty('alpha'));\n    }\n    return _results;\n  };\n\n  CrissCrossReferee.prototype.showAvailableTileGroup = function() {\n    var letter, node, nodeThang, otherTileGroup, tile, _i, _len, _ref1, _ref2, _results;\n    _ref1 = this.tileGroups[this.currentTileGroup];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      node = _ref1[_i];\n      nodeThang = this.getThangForNodeID(node.id);\n      if (node.owner) {\n        continue;\n      }\n      if (!nodeThang) {\n        continue;\n      }\n      nodeThang.alpha = 1;\n    }\n    _ref2 = this.tileGroups;\n    _results = [];\n    for (letter in _ref2) {\n      otherTileGroup = _ref2[letter];\n      if (letter !== this.currentTileGroup) {\n        _results.push((function() {\n          var _j, _len1, _results1;\n          _results1 = [];\n          for (_j = 0, _len1 = otherTileGroup.length; _j < _len1; _j++) {\n            node = otherTileGroup[_j];\n            tile = this.getThangForNodeID(node.id);\n            _results1.push(tile.alpha = 0.99);\n          }\n          return _results1;\n        }).call(this));\n      }\n    }\n    return _results;\n  };\n\n  CrissCrossReferee.prototype.handleSubmissions = function() {\n    if (this.humansBid == null) {\n      this.humansBid = {\n        team: 'humans'\n      };\n    }\n    if (this.ogresBid == null) {\n      this.ogresBid = {\n        team: 'ogres'\n      };\n    }\n    this.winningSubmission = this.chooseWinnerFromSubmissions([this.humansBid, this.ogresBid]);\n    if (this.winningSubmission) {\n      return this.winningSubmission.won = true;\n    }\n  };\n\n  CrissCrossReferee.prototype.chooseWinnerFromSubmissions = function(submissions) {\n    var funds, s, _i, _len;\n    for (_i = 0, _len = submissions.length; _i < _len; _i++) {\n      s = submissions[_i];\n      funds = this.inventorySystem.goldForTeam(s.team);\n      s.invalidBid = false;\n      if (!_.isNumber(s.bid)) {\n        s.invalidBid = true;\n      }\n      if (s.bid > funds) {\n        s.invalidBid = true;\n      }\n      if (!(s.bid > 0)) {\n        s.invalidBid = true;\n      }\n      if (s.bid % 1 !== 0) {\n        s.invalidBid = true;\n      }\n      s.invalidTile = !Boolean(this.getValidTileForSubmission(s));\n    }\n    submissions = (function() {\n      var _j, _len1, _results;\n      _results = [];\n      for (_j = 0, _len1 = submissions.length; _j < _len1; _j++) {\n        s = submissions[_j];\n        if (!(s.invalidBid || s.invalidTile)) {\n          _results.push(s);\n        }\n      }\n      return _results;\n    })();\n    if (!submissions.length) {\n      return null;\n    }\n    submissions = _.sortBy(submissions, 'bid');\n    if (this.tieBreaker == null) {\n      this.tieBreaker = this.world.rand.randf() < 0.5;\n    }\n    if (submissions.length === 2 && submissions[0].bid === submissions[1].bid) {\n      if (this.tieBreaker) {\n        submissions.reverse();\n      }\n      this.tieBreaker = !this.tieBreaker;\n    }\n    return _.last(submissions);\n  };\n\n  CrissCrossReferee.prototype.getValidTileForSubmission = function(submission) {\n    var desiredTile, _ref1;\n    if (!_.isString((_ref1 = submission.desiredTile) != null ? _ref1.id : void 0)) {\n      return;\n    }\n    if (!(desiredTile = this.map[submission.desiredTile.id])) {\n      return;\n    }\n    if (desiredTile.tileGroupLetter !== this.currentTileGroup) {\n      return;\n    }\n    if (desiredTile.owner) {\n      return;\n    }\n    return desiredTile;\n  };\n\n  CrissCrossReferee.prototype.awardWinningSubmission = function(submission) {\n    var chest, desiredTile;\n    this.inventorySystem.subtractGoldForTeam(submission.team, submission.bid);\n    chest = this.world.getThangByID(this.treasureChestIDs[submission.team]);\n    if (!chest.actions[\"open-full\"]) {\n      chest.addActions({\n        name: \"open-full\",\n        cooldown: 0\n      }, {\n        name: \"open-empty\",\n        cooldown: 0\n      });\n    }\n    chest.setAction('open-full');\n    chest.act();\n    chest.showText(\"-\" + submission.bid, {\n      color: '#FFD700'\n    });\n    desiredTile = this.getValidTileForSubmission(submission);\n    if (desiredTile) {\n      this.setOwner(desiredTile.x, desiredTile.y, submission.team);\n    }\n    return desiredTile;\n  };\n\n  CrissCrossReferee.prototype.setOwner = function(x, y, team) {\n    this.map[p(x, y)].owner = team;\n    return this.map[p(x, y)].turnWon = this.turn;\n  };\n\n  CrissCrossReferee.prototype.assignTiles = function() {\n    var message, node, tile, tileID, winningSubmission, _i, _len, _ref1;\n    _ref1 = this.tileThangs;\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      tile = _ref1[_i];\n      tile.alpha = 0.99;\n    }\n    winningSubmission = this.winningSubmission;\n    if (!(winningSubmission && (node = this.awardWinningSubmission(winningSubmission)))) {\n      this.turnsSinceChange++;\n      this.say(\"No valid bids.\", null);\n      return;\n    }\n    this.turnsSinceChange = 0;\n    message = winningSubmission.desiredTile.id + \" to \" + winningSubmission.team + \" for \" + winningSubmission.bid + \".\";\n    this.say(message, null);\n    tileID = \"Tile \" + node.id;\n    tile = this.world.getThangByID(tileID);\n    if (node.owner === \"humans\") {\n      tile.setAction(\"flip-human\");\n      return tile.act();\n    } else if (node.owner === \"ogres\") {\n      tile.setAction(\"flip-ogre\");\n      return tile.act();\n    } else {\n      return this.debug(\"Huh, we just awarded a node to\", node.owner);\n    }\n  };\n\n  CrissCrossReferee.prototype.recordTurn = function() {\n    var turn;\n    if (!_.string) {\n      return;\n    }\n    turn = {\n      number: this.turn,\n      tileGroup: this.currentTileGroup,\n      humanGold: this.inventorySystem.goldForTeam('humans'),\n      ogreGold: this.inventorySystem.goldForTeam('ogres'),\n      humanBid: this.humansBid,\n      ogreBid: this.ogresBid\n    };\n    return this.turns.push(turn);\n  };\n\n  CrissCrossReferee.prototype.goToNextTurn = function() {\n    var player, _i, _len, _ref1;\n    this.winningSubmission = null;\n    this.turn += 1;\n    this.currentTileGroup = this.tileGroupLetters[(this.tileGroupLetters.indexOf(this.currentTileGroup) + 1) % this.tileGroupLetters.length];\n    _ref1 = this.players;\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      player = _ref1[_i];\n      player.updateAPIs();\n    }\n    this.world.getThangByID(this.treasureChestIDs.humans).setAction('idle');\n    return this.world.getThangByID(this.treasureChestIDs.ogres).setAction('idle');\n  };\n\n  CrissCrossReferee.prototype.beginCrossing = function() {\n    var captain, fadeDuration, fadeOut, gem, path, tile, tileID, tileThang, tp, waypoints, winning, _i, _j, _len, _len1, _ref1, _ref2, _ref3, _results;\n    _ref1 = [this.human, this.ogre];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      captain = _ref1[_i];\n      if (captain.erroredOut) {\n        continue;\n      }\n      gem = this.world.getThangByID(this.gemIDs[captain.team]);\n      captain.setAction('move');\n      path = this.pathAcross(captain.team);\n      winning = path;\n      if (!path) {\n        path = [];\n        _ref2 = [[0, 3], [1, 4], [2, 3], [3, 2], [4, 3], [5, 4], [6, 3]];\n        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {\n          tp = _ref2[_j];\n          if (captain.team === 'ogres') {\n            tp.reverse();\n          }\n          tile = this.map[p(tp[0], tp[1])];\n          path.push(tile);\n          if (tile.owner !== captain.team) {\n            break;\n          }\n        }\n      }\n      waypoints = (function() {\n        var _k, _len2, _results;\n        _results = [];\n        for (_k = 0, _len2 = path.length; _k < _len2; _k++) {\n          tile = path[_k];\n          _results.push(this.getThangForNodeID(tile.id).pos);\n        }\n        return _results;\n      }).call(this);\n      if (winning) {\n        if (captain === this.human) {\n          waypoints.unshift({\n            x: 7,\n            y: waypoints[0].y,\n            z: 0\n          });\n          waypoints.push({\n            x: 70,\n            y: waypoints[waypoints.length - 1].y,\n            z: 0\n          });\n        } else {\n          waypoints.unshift({\n            x: waypoints[0].x,\n            y: 12,\n            z: 0\n          });\n          waypoints.push({\n            x: waypoints[waypoints.length - 1].x,\n            y: 68,\n            z: 0\n          });\n        }\n      }\n      waypoints.push(gem.pos);\n      captain.setWaypoints(waypoints);\n    }\n    _ref3 = this.map;\n    _results = [];\n    for (tileID in _ref3) {\n      tile = _ref3[tileID];\n      if (tile.owner === this.teamWinningRound) {\n        continue;\n      }\n      tileThang = this.getThangForNodeID(tileID);\n      fadeDuration = 0.5;\n      fadeOut = {\n        name: 'fade-out',\n        targetProperty: 'alpha',\n        repeatsEvery: this.world.dt,\n        addend: -1 * this.world.dt / fadeDuration,\n        duration: fadeDuration\n      };\n      _results.push(tileThang.addEffect(fadeOut));\n    }\n    return _results;\n  };\n\n  CrissCrossReferee.prototype.crossingIsOver = function() {\n    var captain, fall, fallDuration, fallHide, gem, _i, _len, _ref1;\n    _ref1 = [this.human, this.ogre];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      captain = _ref1[_i];\n      if (captain.finishedWaypoints && captain.team !== this.teamWinningRound) {\n        fallDuration = 1;\n        fall = {\n          name: 'fall',\n          targetProperty: 'scaleFactor',\n          repeatsEvery: this.world.dt,\n          addend: -captain.scaleFactor * fallDuration * this.world.dt,\n          duration: fallDuration,\n          reverts: false\n        };\n        fallHide = {\n          name: 'fall-hide',\n          targetProperty: 'alpha',\n          repeatsEvery: this.world.dt,\n          addend: -1 * fallDuration / 2 * this.world.dt,\n          duration: fallDuration * 2,\n          reverts: false\n        };\n        captain.addEffect(fall);\n        captain.addEffect(fallHide);\n        captain.addCurrentEvent('fall');\n        captain.maxAcceleration = 0;\n        captain.finishedWaypoints = false;\n        captain.velocity.limit(10);\n      } else {\n        gem = this.world.getThangByID(this.gemIDs[captain.team]);\n        if (!gem.exists) {\n          return true;\n        }\n      }\n    }\n    return false;\n  };\n\n  CrissCrossReferee.prototype.resetCrossing = function() {\n    var captain, start, thang, _i, _j, _len, _len1, _ref1, _ref2, _results;\n    _ref1 = [this.human, this.ogre];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      captain = _ref1[_i];\n      if (captain.alpha > 0) {\n        captain.addCurrentEvent('leap');\n      }\n      captain.setExists(true);\n      start = this.captainStartingPositions[captain.team];\n      captain.velocity = Vector.subtract(start, captain.pos);\n      captain.velocity.z = 30;\n      captain.setTargetPos(start);\n      captain.maxAcceleration = 100;\n      captain.rotation = Vector.subtract(start, captain.pos).heading();\n      captain.finishedWaypoints = false;\n    }\n    _ref2 = this.world.thangs.slice();\n    _results = [];\n    for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {\n      thang = _ref2[_j];\n      if (thang.exists && (thang.health != null)) {\n        _results.push(thang.setExists(false));\n      }\n    }\n    return _results;\n  };\n\n  CrissCrossReferee.prototype.roundOver = function() {\n    if (this.turn > this.MAX_TURNS) {\n      return true;\n    }\n    if (this.turnsSinceChange >= 7) {\n      return true;\n    }\n    if (this.pathAcross('humans')) {\n      return 'humans';\n    }\n    if (this.pathAcross('ogres')) {\n      return 'ogres';\n    }\n  };\n\n  CrissCrossReferee.prototype.pathAcross = function(team) {\n    var closed, currentNode, direction, hasNeighbors, i, neighbor, node, nodeKey, open, path, previousNode, starterNodes, _i, _j, _len, _len1, _ref1;\n    direction = {\n      humans: 'horizontal',\n      ogres: 'vertical'\n    }[team];\n    if (direction === 'vertical') {\n      starterNodes = (function() {\n        var _i, _len, _ref1, _results;\n        _ref1 = _.range(this.WIDTH);\n        _results = [];\n        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n          i = _ref1[_i];\n          _results.push(p(i, 0));\n        }\n        return _results;\n      }).call(this);\n    } else {\n      starterNodes = (function() {\n        var _i, _len, _ref1, _results;\n        _ref1 = _.range(this.HEIGHT);\n        _results = [];\n        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n          i = _ref1[_i];\n          _results.push(p(0, i));\n        }\n        return _results;\n      }).call(this);\n    }\n    open = [];\n    closed = {};\n    for (_i = 0, _len = starterNodes.length; _i < _len; _i++) {\n      nodeKey = starterNodes[_i];\n      if (this.map[nodeKey].owner === team) {\n        open.push(nodeKey);\n      }\n      closed[nodeKey] = true;\n    }\n    while (open.length) {\n      nodeKey = open.pop();\n      node = this.map[nodeKey];\n      hasNeighbors = false;\n      _ref1 = node.neighbors;\n      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {\n        neighbor = _ref1[_j];\n        if (neighbor.owner === team) {\n          if ((direction === 'vertical' && neighbor.y === this.HEIGHT - 1) || (direction === 'horizontal' && neighbor.x === this.WIDTH - 1)) {\n            path = [neighbor];\n            closed[neighbor.id] = nodeKey;\n            while (true) {\n              currentNode = path[0];\n              previousNode = this.map[closed[currentNode.id]];\n              if (!previousNode) {\n                break;\n              }\n              path.unshift(previousNode);\n            }\n            return path;\n          }\n          if (!closed[neighbor.id]) {\n            open.push(neighbor.id);\n            hasNeighbors = true;\n            closed[neighbor.id] = nodeKey;\n          }\n        }\n      }\n    }\n    return false;\n  };\n\n  CrissCrossReferee.prototype.finishRound = function() {\n    var chest, offset, score, scoreGem, turns;\n    if (this.turns.length) {\n      turns = this.stringifyTurns();\n      turns.unshift('Turn | Group | H-Gold | O-Gold | H-Bid       | O-Bid');\n      turns.unshift(\"ROUND \" + this.round);\n      this.debug(turns.join('\\n'));\n      this.turns = [];\n    }\n    if (this.teamWinningRound !== true) {\n      score = ++this.roundScores[this.teamWinningRound];\n      this.toBuild = this.buildables[this.gemTemplates[this.teamWinningRound]];\n      scoreGem = this.performBuild();\n      chest = this.world.getThangByID(this.treasureChestIDs[this.teamWinningRound]);\n      offset = [-4 - (2 * (score - 1)), 0];\n      scoreGem.pos = Vector.add(chest.pos, {\n        x: offset[0],\n        y: offset[1]\n      });\n      scoreGem.hasMoved = true;\n    }\n    this.teamWinningRound = null;\n    this.map = null;\n    this.turnState = this.humansBid = this.ogresBid = null;\n    if (++this.round === this.NUM_ROUNDS || this.roundScores.humans >= 3 || this.roundScores.ogres >= 3) {\n      return this.finishGame();\n    }\n  };\n\n  CrissCrossReferee.prototype.stringifyTurns = function() {\n    var args, i, turn, turns, _i, _len, _ref1;\n    turns = this.turns.slice(0);\n    for (i = _i = 0, _len = turns.length; _i < _len; i = ++_i) {\n      turn = turns[i];\n      args = [turn.number, turn.tileGroup, turn.humanGold, turn.ogreGold, this.submissionToString(turn.humanBid), this.submissionToString(turn.ogreBid)];\n      turns[i] = (_ref1 = _.string).sprintf.apply(_ref1, ['%4d |   %s   | %6d | %6d | %-11s | %-11s '].concat(__slice.call(args)));\n    }\n    return turns;\n  };\n\n  CrissCrossReferee.prototype.submissionToString = function(submission) {\n    var bidString, markString, tileString;\n    if (submission.invalidBid && submission.invalidTile) {\n      return '     -';\n    }\n    if (submission.invalidBid) {\n      bidString = '???';\n    } else {\n      bidString = _.string.sprintf('%-3d', submission.bid);\n    }\n    if (submission.invalidTile) {\n      tileString = '(?,?)';\n    } else {\n      tileString = _.string.sprintf('(%d,%d)', submission.desiredTile.x, submission.desiredTile.y);\n    }\n    if (submission === this.winningSubmission) {\n      markString = '*';\n    } else {\n      markString = ' ';\n    }\n    return _.string.sprintf('%s %s %s', bidString, tileString, markString);\n  };\n\n  CrissCrossReferee.prototype.finishGame = function() {\n    var winner;\n    this.turnState = this.ALL_DONE_STATE;\n    this.wait(3);\n    winner = null;\n    if (this.roundScores.humans > this.roundScores.ogres) {\n      this.say(\"Game over, humans win!\");\n      winner = 'humans';\n    } else if (this.roundScores.ogres > this.roundScores.humans) {\n      this.say(\"Game over, ogres win!\");\n      winner = 'ogres';\n    } else {\n      this.say(\"Game over, no one wins!\");\n      this.setGoalState(\"horizontal-path\", \"failure\");\n      this.setGoalState(\"vertical-path\", \"failure\");\n    }\n    if (winner === \"ogres\") {\n      this.setGoalState(\"vertical-path\", \"success\");\n      return this.setGoalState(\"horizontal-path\", \"failure\");\n    } else if (winner === \"humans\") {\n      this.setGoalState(\"vertical-path\", \"failure\");\n      return this.setGoalState(\"horizontal-path\", \"success\");\n    }\n  };\n\n  CrissCrossReferee.prototype.getThangForNodeID = function(nodeID) {\n    return this.world.getThangByID(\"Tile \" + nodeID);\n  };\n\n  return CrissCrossReferee;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "539f9dbd64edb6fa0bf60bf4",
	"watchers": [
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Fixed assigning \"won\" property to winning bids.",
	"parent": "53f5020bbd9109f6a0f059f7",
	"official": false,
	"configSchema": {
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b7b9f7fc0f6d519000015",
			"majorVersion": 0
		},
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		},
		{
			"original": "5275cf1c46419d8623008386",
			"majorVersion": 0
		},
		{
			"original": "524b7b977fc0f6d519000014",
			"majorVersion": 0
		},
		{
			"original": "524b7b747fc0f6d519000010",
			"majorVersion": 0
		}
	],
	"description": "This Component is a single-use Component encapsulating the logic for the Criss-Cross level.",
	"system": "misc",
	"searchStrings": "criss cross referee c cr cri cris criss crissc crisscr crisscro crisscros crisscross crisscrossr crisscrossre crisscrossref crisscrossrefe crisscrossrefer",
	"created": "2014-09-15T18:45:01.038Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 87,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "5162fab9c92b4c751e000274"
		},
		{
			"access": "read",
			"target": "public"
		}
	]
}