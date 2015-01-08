{
	"_id": "54ade22008ed77bca5e7b4c7",
	"searchStrings": "copper meadows referee c co cop copp coppe copper copperm copperme coppermea coppermead coppermeado coppermeadow coppermeadows coppermeadowsr coppermeadowsre coppermeadowsref coppermeadowsrefe coppermeadowsrefer",
	"index": true,
	"slug": "coppermeadowsreferee",
	"name": "CopperMeadowsReferee",
	"js": "var CopperMeadowsReferee, mazes, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nmazes = [];\n\nmazes.push(\"############\\n#    #######\\n#    ##  ###\\n#    #   ###\\n# ####     #\\n#    ##  # #\\n#### ##### #\\n#    #     #\\n#      #   #\\n############\");\n\nmazes.push(\"############\\n###     ## #\\n#   ###    #\\n#    ##    #\\n#  ##### ###\\n####   #  ##\\n###  # ##  #\\n#   ## #   #\\n#   ##     #\\n############\");\n\nmazes.push(\"############\\n#    ##   ##\\n#    ##   ##\\n#### ##    #\\n####  #### #\\n#  ## #### #\\n#   #   #  #\\n#   ###    #\\n###        #\\n############\");\n\nmazes.push(\"############\\n#   #    ###\\n#   # #    #\\n#     ##   #\\n######   ###\\n##     #####\\n#    #######\\n#   ##    ##\\n###       ##\\n############\");\n\nmazes.push(\"############\\n#     #  ###\\n#   #      #\\n#   ###### #\\n## ###     #\\n#  ####  # #\\n# #   #### #\\n#   #    # #\\n#   #      #\\n############\");\n\nCopperMeadowsReferee = (function(_super) {\n  __extends(CopperMeadowsReferee, _super);\n\n  function CopperMeadowsReferee() {\n    _ref = CopperMeadowsReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  CopperMeadowsReferee.className = 'CopperMeadowsReferee';\n\n  CopperMeadowsReferee.prototype.mapWidth = 120;\n\n  CopperMeadowsReferee.prototype.mapHeight = 102;\n\n  CopperMeadowsReferee.prototype.chooseAction = function() {\n    if (!this.meadowsSetUp) {\n      this.setUpMeadows();\n    }\n    return this.checkMeadowsVictory();\n  };\n\n  CopperMeadowsReferee.prototype.setUpMeadows = function() {\n    var buildType, buildTypes, coin, coinPos, coinSize, coinSpawnChances, coins, i, maze, mazeScaleFactor, mazeX, mazeY, n, nCoins, ogre, ogreGroups, ogreSize, ogres, overlap, spawnChance, tree, treePos, treeSize, treeSpacing, trees, type, x, y, _i, _j, _k, _l, _len, _len1, _m, _n, _o, _ref1, _ref10, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;\n    this.meadowsSetUp = true;\n    coinSpawnChances = [[0, 'bronze'], [75, 'silver'], [95, 'gold']];\n    ogreGroups = [['ogre-munchkin-m', 'ogre-munchkin-f', 'ogre-thrower'], ['ogre-munchkin-m', 'ogre-munchkin-f', 'ogre-munchkin-f'], ['ogre-munchkin-m', 'ogre-munchkin-f', 'ogre-munchkin-m', 'ogre-munchkin-f', 'ogre-thrower'], ['ogre-munchkin-m', 'ogre-munchkin-f', 'ogre-shaman'], ['ogre-thrower', 'ogre-munchkin-f']];\n    maze = mazes[this.world.rand.seed % mazes.length].split('\\n');\n    maze.reverse();\n    trees = [];\n    coins = [];\n    ogres = [];\n    mazeScaleFactor = maze[0].length / this.mapWidth;\n    treeSize = 10;\n    treeSpacing = 8;\n    coinSize = 4;\n    ogreSize = 8;\n    for (x = _i = _ref1 = -treeSpacing / 2, _ref2 = this.mapWidth + treeSpacing / 2; treeSpacing > 0 ? _i <= _ref2 : _i >= _ref2; x = _i += treeSpacing) {\n      for (y = _j = _ref3 = -treeSpacing / 2, _ref4 = this.mapHeight + treeSpacing / 2; treeSpacing > 0 ? _j <= _ref4 : _j >= _ref4; y = _j += treeSpacing) {\n        treePos = new Vector(x + (-0.5 + this.world.rand.randf()) * (treeSize - treeSpacing) / 2, y + (-0.5 + this.world.rand.randf()) * (treeSize - treeSpacing) / 2, 6);\n        overlap = 0;\n        for (mazeX = _k = _ref5 = x - treeSize / 2, _ref6 = x + treeSize / 2; _ref5 <= _ref6 ? _k < _ref6 : _k > _ref6; mazeX = _ref5 <= _ref6 ? ++_k : --_k) {\n          for (mazeY = _l = _ref7 = y - treeSize / 2, _ref8 = y + treeSize / 2; _ref7 <= _ref8 ? _l < _ref8 : _l > _ref8; mazeY = _ref7 <= _ref8 ? ++_l : --_l) {\n            if (((_ref9 = maze[Math.floor(mazeY * mazeScaleFactor)]) != null ? _ref9[Math.floor(mazeX * mazeScaleFactor)] : void 0) === ' ') {\n              ++overlap;\n            }\n          }\n        }\n        if (overlap < 60) {\n          this.build(\"tree-stand-\" + (this.world.rand.rand2(1, 7)));\n          tree = this.performBuild();\n          tree.pos = treePos;\n          tree.addTrackedProperties(['pos', 'Vector']);\n          tree.keepTrackedProperty('pos');\n          trees.push(tree);\n        } else if (overlap >= 100) {\n          nCoins = this.world.rand.rand2(1, 6);\n          for (i = _m = 0; 0 <= nCoins ? _m < nCoins : _m > nCoins; i = 0 <= nCoins ? ++_m : --_m) {\n            coinPos = new Vector(x + (-0.5 + this.world.rand.randf()) * coinSize, y + (-0.5 + this.world.rand.randf()) * coinSize, 0.5);\n            n = this.world.rand.randf() * 100;\n            for (_n = 0, _len = coinSpawnChances.length; _n < _len; _n++) {\n              _ref10 = coinSpawnChances[_n], spawnChance = _ref10[0], type = _ref10[1];\n              if (n >= spawnChance) {\n                buildType = type;\n              } else {\n                break;\n              }\n            }\n            this.build(buildType);\n            coin = this.performBuild();\n            coin.pos = coinPos;\n            coin.addTrackedProperties(['pos', 'Vector']);\n            coin.keepTrackedProperty('pos');\n            coins.push(coin);\n          }\n          if (this.spawnOgres) {\n            if (this.ogreSpawnPoints == null) {\n              this.ogreSpawnPoints = [];\n            }\n            if (!_.any(this.ogreSpawnPoints, function(p) {\n              return p.distance({\n                x: x,\n                y: y\n              }) < 30;\n            })) {\n              this.ogreSpawnPoints.push(new Vector(x, y));\n              console.log('spawning ogres at', x, y);\n              if (buildTypes = ogreGroups.shift()) {\n                for (_o = 0, _len1 = buildTypes.length; _o < _len1; _o++) {\n                  buildType = buildTypes[_o];\n                  this.build(buildType);\n                  ogre = this.performBuild();\n                  ogre.pos = new Vector(x + (-0.5 + this.world.rand.randf()) * ogreSize, y + (-0.5 + this.world.rand.randf()) * ogreSize, 0.5);\n                  ogre.hasMoved = true;\n                  ogres.push(ogre);\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    return this.world.getSystem('AI').onObstaclesChanged();\n  };\n\n  CopperMeadowsReferee.prototype.checkMeadowsVictory = function() {\n    var coinsLeft, ogresSurviving, t;\n    if (this.victoryChecked) {\n      return;\n    }\n    coinsLeft = this.world.getSystem('Inventory').collectables.length;\n    ogresSurviving = ((function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        t = _ref1[_i];\n        if (t.team === 'ogres' && t.health > 0) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this)).length;\n    if ((!coinsLeft && !ogresSurviving) || this.world.age > (this.spawnOgres ? 89.8 : 69)) {\n      this.victoryChecked = true;\n      if (!coinsLeft) {\n        this.setGoalState('collect-coins', 'success');\n      }\n      if (!(ogresSurviving || !this.spawnOgres)) {\n        this.setGoalState('ogres-die', 'success');\n      }\n      return this.world.endWorld(true, 1);\n    }\n  };\n\n  return CopperMeadowsReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "5467dd9cd8f7feec1b6c79d9",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "This Component makes the Thang o'ermaster the Copper Meadows level.",
	"dependencies": [
		{
			"original": "52d9a6773cf02dcf26000dc4",
			"majorVersion": 0
		}
	],
	"commitMessage": "Slightly reduced ogre spacing to make it less likely for an ogre to spawn in the trees.",
	"parent": "547fd26961b0f99e0fcaad9b",
	"configSchema": {
		"properties": {
			"spawnOgres": {
				"type": "boolean"
			}
		},
		"default": {
			"spawnOgres": false
		}
	},
	"created": "2015-01-08T01:49:20.986Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 14,
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