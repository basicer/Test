{
	"_id": "5589d7704bed1b6c2a2cab64",
	"searchStrings": "chieftains c ch chi chie chief chieft chiefta chieftai",
	"index": true,
	"slug": "chieftains",
	"name": "Chieftains",
	"js": "var Chieftains, Vector, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };\n\nVector = require('lib/world/vector');\n\nChieftains = (function(_super) {\n  __extends(Chieftains, _super);\n\n  function Chieftains() {\n    _ref = Chieftains.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Chieftains.className = 'Chieftains';\n\n  Chieftains.prototype.chooseAction = function() {\n    var d2, dir, dx, dy, e, enemies, fleePos, hero, maxZ, missile, t, _ref1;\n    if (this.isProgrammable && (this.programmableMethods.chooseAction || this.programmableMethods.plan)) {\n      return;\n    }\n    enemies = (function() {\n      var _i, _len, _ref1, _ref2, _ref3, _results;\n      _ref1 = this.getEnemies();\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        e = _ref1[_i];\n        if (((_ref2 = e.type) !== 'ice-yak' && _ref2 !== 'sand-yak' && _ref2 !== 'cow') || ((_ref3 = e.target) != null ? _ref3.team : void 0) === this.team) {\n          _results.push(e);\n        }\n      }\n      return _results;\n    }).call(this);\n    hero = this.getNearest((function() {\n      var _i, _len, _results;\n      _results = [];\n      for (_i = 0, _len = enemies.length; _i < _len; _i++) {\n        t = enemies[_i];\n        if (/Hero Placeholder/.test(t.id)) {\n          _results.push(t);\n        }\n      }\n      return _results;\n    })());\n    this.mainEnemy = this.getNearest(enemies) || this.mainEnemy;\n    if (this.mainEnemy && hero && this.distance(hero) < 1.1 * this.distance(this.mainEnemy) + 2) {\n      this.mainEnemy = hero;\n    }\n    missile = this.getNearest(this.getEnemyMissiles());\n    if (missile && missile.type === 'shell' && ((_ref1 = missile.shooter) != null ? _ref1.type : void 0) === 'artillery') {\n      dir = new Vector(0, 0, 0);\n      dx = (this.pos.x - missile.targetPos.x) || 0.1;\n      dy = (this.pos.y - missile.targetPos.y) || 0.1;\n      d2 = this.pos.distanceSquared(missile.targetPos) || 0.01;\n      if (d2 < 120 && missile.velocity.z < 0) {\n        maxZ = 16;\n        dir.x += 10 * dx / d2 * (maxZ - missile.pos.z) / maxZ;\n        dir.y += 10 * dy / d2 * (maxZ - missile.pos.z) / maxZ;\n        if (dir.magnitude() > 1) {\n          fleePos = this.pos.copy().add(dir.normalize().multiply(5));\n          if (this.isPathClear(this.pos, fleePos)) {\n            this.move(fleePos);\n            return;\n          }\n        }\n      }\n    }\n    if (this.mainEnemy) {\n      this.battleHasStarted = true;\n      if (this.isReady('warcry')) {\n        return this.warcry();\n      } else {\n        return this.attack(this.mainEnemy);\n      }\n    }\n  };\n\n  Chieftains.prototype.update = function() {\n    var attackRangeSq, canFlee, enemy, enemyDistanceSq, fleePos, friend, friendDistanceSq, friends, gettingGrown, mainEnemyDistanceSq, needsHeal, nextMainEnemy, nextMainEnemyDistanceSq, t, witches, _i, _j, _len, _len1, _ref1, _ref2, _ref3, _ref4, _ref5;\n    if (this.dead) {\n      return;\n    }\n    if (this.isProgrammable && (this.programmableMethods.chooseAction || this.programmableMethods.plan)) {\n      return;\n    }\n    if ((_ref1 = this.mainEnemy) != null ? _ref1.dead : void 0) {\n      this.mainEnemy = null;\n    }\n    friends = this.getFriends();\n    if (!this.battleHasStarted) {\n      for (_i = 0, _len = friends.length; _i < _len; _i++) {\n        friend = friends[_i];\n        if ((friend.action !== 'idle' || friend.health < friend.maxHealth) && this.canSee(friend)) {\n          this.battleHasStarted = true;\n          break;\n        }\n      }\n    }\n    if (!this.battleHasStarted) {\n      return;\n    }\n    witches = (function() {\n      var _j, _len1, _results;\n      _results = [];\n      for (_j = 0, _len1 = friends.length; _j < _len1; _j++) {\n        t = friends[_j];\n        if (t.type === 'witch') {\n          _results.push(t);\n        }\n      }\n      return _results;\n    })();\n    gettingGrown = false;\n    nextMainEnemy = null;\n    nextMainEnemyDistanceSq = Infinity;\n    for (_j = 0, _len1 = friends.length; _j < _len1; _j++) {\n      friend = friends[_j];\n      if (!(_ref2 = friend.type, __indexOf.call(this.commandableTypes, _ref2) >= 0)) {\n        continue;\n      }\n      friendDistanceSq = this.distanceSquared(friend);\n      enemy = friend.getNearestEnemy() || this.mainEnemy;\n      if (enemy) {\n        enemyDistanceSq = friend.distanceSquared(enemy);\n      }\n      if (this.mainEnemy) {\n        mainEnemyDistanceSq = friend.distanceSquared(this.mainEnemy);\n      }\n      if (!this.mainEnemy && enemyDistanceSq < nextMainEnemyDistanceSq && this.canSee(friend)) {\n        nextMainEnemy = enemy;\n        nextMainEnemyDistanceSq = enemyDistanceSq;\n      }\n      attackRangeSq = friend.attackRange * friend.attackRange;\n      canFlee = !enemy || friend.maxSpeed > enemy.maxSpeed + 1;\n      needsHeal = friend.maxHealth > 50 && friend.health < friend.maxHealth / 5;\n      if (canFlee && needsHeal) {\n        this.command(friend, 'defend', friend.getNearest(witches) || this);\n      } else if (!gettingGrown && !this.hasEffect('grow') && (0.5 * this.maxHealth < (_ref3 = this.health) && _ref3 < 0.8 * this.maxHealth) && friend.type === 'shaman' && friend.canCast('grow', this) && friendDistanceSq < Math.pow(friend.spells.grow.range, 2)) {\n        this.command(friend, 'cast', 'grow', this);\n        gettingGrown = true;\n      } else if (enemy && canFlee && enemy.target === friend && ((_ref4 = friend.type) === 'munchkin' || _ref4 === 'thrower' || _ref4 === 'fangrider' || _ref4 === 'shaman') && enemyDistanceSq < 64) {\n        fleePos = friend.pos.copy().subtract(enemy.pos).normalize().multiply(4);\n        if (this.isPathClear(friend.pos, fleePos)) {\n          this.command(friend, 'move', fleePos);\n        } else if (friendDistanceSq < this.distanceSquared(enemy)) {\n          this.command(friend, 'defend', this);\n        } else {\n          this.command(friend, 'attack', enemy);\n        }\n      } else if ((this.world.dt < (_ref5 = this.getCooldown('warcry')) && _ref5 <= 1) && (Math.pow(this.warcryRange, 2) < friendDistanceSq && friendDistanceSq <= Math.pow(this.warcryRange + (this.getCooldown('warcry') - this.world.dt) * friend.maxSpeed, 2))) {\n        this.command(friend, 'move', this.pos);\n      } else if (this.mainEnemy && mainEnemyDistanceSq < attackRangeSq * 1.1) {\n        this.command(friend, 'attack', this.mainEnemy);\n      } else if (enemy) {\n        this.command(friend, 'attack', enemy);\n      }\n    }\n    return this.mainEnemy != null ? this.mainEnemy : this.mainEnemy = nextMainEnemy;\n  };\n\n  Chieftains.prototype.performAttack = function(thang) {\n    var enemies, enemy, momentum, _i, _len;\n    enemies = this.getEnemies();\n    for (_i = 0, _len = enemies.length; _i < _len; _i++) {\n      enemy = enemies[_i];\n      if (!(enemy !== thang && this.distance(enemy, true) < this.attackRange + 1)) {\n        continue;\n      }\n      momentum = this.getAttackMomentum(enemy.pos);\n      if (typeof enemy.takeDamage === \"function\") {\n        enemy.takeDamage(this.attackDamage, this, momentum);\n      }\n    }\n    return null;\n  };\n\n  return Chieftains;\n\n})(Component);\n",
	"system": "ai",
	"creator": "512ef4805a67a8c507000001",
	"original": "55370c74428ddac5686fd027",
	"watchers": [
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"description": "This Component makes the Thang take charge of nearby ogres (for the Ogre Chieftain).",
	"dependencies": [
		{
			"original": "5356f7c21bfa9bba14b5e038",
			"majorVersion": 0
		},
		{
			"original": "524b7ba57fc0f6d519000016",
			"majorVersion": 0
		},
		{
			"original": "53178759a508f6e7b3464001",
			"majorVersion": 0
		},
		{
			"original": "524b7b8c7fc0f6d519000013",
			"majorVersion": 0
		}
	],
	"commitMessage": "Don't attack yaks first.",
	"parent": "5538172e48fe54ea22e11e83",
	"created": "2015-06-23T22:02:24.658Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 5,
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