{
	"_id": "57ab17fde5636725008bd6e7",
	"slug": "attacks",
	"creator": "57a9b7c0e563672500865ec4",
	"name": "Attacks",
	"original": "524b7ba57fc0f6d519000016",
	"__v": 0,
	"js": "var ArgumentError, Attacks, allTimeDefenderCount,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nArgumentError = require('lib/world/errors').ArgumentError;\n\nallTimeDefenderCount = 0;\n\nAttacks = (function(_super) {\n  __extends(Attacks, _super);\n\n  Attacks.className = 'Attacks';\n\n  function Attacks(config) {\n    Attacks.__super__.constructor.call(this, config);\n    this._attackAction = {\n      name: 'attack',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    this.usesRangedAttack = this.attackRange >= 10;\n  }\n\n  Attacks.prototype.attach = function(thang) {\n    this.attackDamage *= thang.attackDamageFactor || 1;\n    Attacks.__super__.attach.call(this, thang);\n    if (thang.acts) {\n      return thang.addActions(this._attackAction);\n    }\n  };\n\n  Attacks.prototype.canAttack = function() {\n    var distance, _ref, _ref1;\n    if (!this.canAct()) {\n      return false;\n    }\n    if (!(((_ref = this.target) != null ? _ref.isAttackable : void 0) || this.targetPos)) {\n      return false;\n    }\n    if (this.attacksWhenOutOfRange) {\n      return true;\n    }\n    distance = this.distance((_ref1 = this.target) != null ? _ref1 : this.targetPos, !this.usesRangedAttack);\n    if (distance - 0.5 <= this.attackRange) {\n      return true;\n    }\n    if (!this.attackedWhenOutOfRange) {\n      this.publishNote('thang-attacked-when-out-of-range', {});\n      this.attackedWhenOutOfRange = true;\n    }\n    if (this.complainsWhenAttackingOutOfRange) {\n      this.sayWithoutBlocking(\"\" + (this.target || this.targetPos) + \" out of range\\n(distance \" + (distance.toFixed(0)) + \" / range \" + (this.attackRange.toFixed(0)) + \")\");\n    }\n    return false;\n  };\n\n  Attacks.prototype.getAttackMomentum = function(targetPos) {\n    var dir;\n    if (!this.attackMass) {\n      return null;\n    }\n    dir = targetPos.copy().subtract(this.pos).normalize();\n    dir.z = this.attackZAngle ? Math.sin(this.attackZAngle) : 0;\n    return dir.normalize().multiply(this.attackMass, true);\n  };\n\n  Attacks.prototype.performAttack = function(target, damageRatio, momentum) {\n    var _ref;\n    if (damageRatio == null) {\n      damageRatio = 1;\n    }\n    if (momentum == null) {\n      momentum = null;\n    }\n    if (momentum == null) {\n      momentum = this.getAttackMomentum((_ref = target.pos) != null ? _ref : target);\n    }\n    if (typeof target.takeDamage === \"function\") {\n      target.takeDamage(this.attackDamage * damageRatio, this, momentum);\n    }\n    if (!(this.missileSpriteName || this.health <= 0)) {\n      return typeof this.brake === \"function\" ? this.brake() : void 0;\n    }\n  };\n\n  Attacks.prototype.clearAttack = function() {\n    this.setAction('idle');\n    this.setTarget(null);\n    return this.intent = void 0;\n  };\n\n  Attacks.prototype.finishUnblocking = function() {\n    var finishedAttacking, target, _ref;\n    if (this.intent !== 'attack') {\n      return;\n    }\n    this.intent = void 0;\n    target = this.target;\n    finishedAttacking = this.plan && ((this.targetPos != null) || ((_ref = this.target) != null ? _ref.health : void 0) <= 0);\n    if (finishedAttacking) {\n      this.clearAttack();\n    }\n    if ((target != null ? target.health : void 0) <= 0) {\n      return typeof this.returnToNearestSnapPoint === \"function\" ? this.returnToNearestSnapPoint() : void 0;\n    }\n  };\n\n  Attacks.prototype.updateAttack = function() {\n    var _ref, _ref1, _ref2, _ref3;\n    if (!(this.target || this.targetPos)) {\n      this.setAction('idle');\n      this.setTarget(null);\n      if (typeof this.unblock === \"function\") {\n        this.unblock();\n      }\n      return false;\n    }\n    if (this.singleFrameAttack) {\n      if (typeof this.unblock === \"function\") {\n        this.unblock();\n      }\n      this.singleFrameAttack = false;\n      return false;\n    }\n    if (this.actions.move && this.chasesWhenAttackingOutOfRange && this.distance((_ref = this.target) != null ? _ref : this.targetPos, !this.usesRangedAttack) > this.attackRange && (!((_ref1 = this.target) != null ? _ref1.dead : void 0) || this.announceAction)) {\n      this.currentSpeedRatio = 1;\n      this.setAction('move');\n      return true;\n    } else if (this.plan && ((_ref2 = this.target) != null ? _ref2.health : void 0) <= 0 && ((_ref3 = this.target.id) !== 'Door' && _ref3 !== 'Chest' && _ref3 !== 'Cupboard')) {\n      if (typeof this.clearSpeech === \"function\") {\n        this.clearSpeech();\n      }\n      if (typeof this.sayWithoutBlocking === \"function\") {\n        this.sayWithoutBlocking(\"... but it's dead!\");\n      }\n      if (typeof this.unblock === \"function\") {\n        this.unblock();\n      }\n      return false;\n    } else {\n      this.setAction('attack');\n      return true;\n    }\n  };\n\n  Attacks.prototype.attack = function(target) {\n    var shouldBlock;\n    if (typeof target === 'undefined' || ((target == null) && this.hasEnemies())) {\n      if (this.inventoryIDs && this.inventoryIDs[\"programming-book\"] === \"Programmaticon I\") {\n        throw new ArgumentError(\"There is no target. Check to see if there is an enemy within your line-of-sight.\", \"attack\", \"target\", \"object\", target);\n      } else {\n        throw new ArgumentError(\"Target is null. Is there always a target to attack? (Use if?)\", \"attack\", \"target\", \"object\", target);\n      }\n    }\n    if (!target) {\n      if (_.isString(target && _.isEmpty(target))) {\n        throw new ArgumentError('Target an enemy by name, like \"Treg\".', \"attack\", \"target\", \"unit\", target);\n      }\n      return;\n    }\n    this.setTarget(target, 'attack');\n    this.hasAttacked = true;\n    if (typeof this.announceAction === \"function\") {\n      this.announceAction('attack');\n    }\n    if (this.commander) {\n      this.specificAttackTarget = this.target;\n    }\n    this.intent = \"attack\";\n    shouldBlock = this.updateAttack();\n    if (this.attackMovesIncrementally) {\n      this.singleFrameAttack = true;\n      return typeof this.block === \"function\" ? this.block() : void 0;\n    }\n    if (shouldBlock) {\n      if (!this.commander) {\n        return typeof this.block === \"function\" ? this.block() : void 0;\n      }\n    } else {\n      if (typeof this.returnToNearestSnapPoint === \"function\") {\n        this.returnToNearestSnapPoint();\n      }\n      return null;\n    }\n  };\n\n  Attacks.prototype.attackPos = function(targetPos) {\n    if (typeof targetPos === 'undefined') {\n      throw new ArgumentError(\"You need a position to attack.\", 'attackPos', \"targetPos\", \"object\", targetPos);\n    }\n    this.setTargetPos(targetPos, \"attackPos\");\n    this.intent = \"attack\";\n    this.targetPos.z = 0;\n    if (this.actions.move && this.chasesWhenAttackingOutOfRange && this.distance(targetPos, !this.usesRangedAttack) > this.attackRange) {\n      this.currentSpeedRatio = 1;\n      this.setAction('move');\n    } else {\n      this.setAction('attack');\n    }\n    return typeof this.block === \"function\" ? this.block() : void 0;\n  };\n\n  Attacks.prototype.attackXY = function(x, y, z) {\n    var k, _i, _len, _ref;\n    _ref = [[\"x\", x], [\"y\", y], [\"z\", z]];\n    for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n      k = _ref[_i];\n      if (!((_.isNumber(k[1]) && !_.isNaN(k[1]) && k[1] !== Infinity) || (k[0] === \"z\" && (k[1] == null)))) {\n        throw new ArgumentError(\"Attack an {x: number, y: number} position.\", \"attackXY\", k[0], \"number\", k[1]);\n      }\n    }\n    return this.attackPos(new Vector(x, y, z));\n  };\n\n  Attacks.prototype.attackNearestEnemy = function() {\n    var distance, enemy, killed, lastAttackTarget, _ref;\n    if (arguments[0] != null) {\n      throw new ArgumentError('', \"attackNearestEnemy\", \"\", \"\", arguments[0]);\n    }\n    lastAttackTarget = ((_ref = this.target) != null ? _ref.health : void 0) != null ? this.target : null;\n    killed = (lastAttackTarget != null ? lastAttackTarget.health : void 0) < 0;\n    if (killed) {\n      this.setTarget(null);\n      return \"done\";\n    }\n    enemy = this.getNearestEnemy();\n    if (enemy) {\n      distance = this.distance(enemy, !this.usesRangedAttack);\n      if (this.actions.move && distance > this.attackRange) {\n        this.follow(enemy);\n      } else {\n        this.attack(enemy);\n      }\n    } else {\n      this.setTarget(null);\n    }\n    return this.action;\n  };\n\n  Attacks.prototype.chaseAndAttack = function(target) {\n    if (!target.isAttackable) {\n      return;\n    }\n    if (this.distance(target, !this.usesRangedAttack) <= this.attackRange) {\n      return this.attack(target);\n    } else {\n      this.currentSpeedRatio = 1;\n      return this.follow(target);\n    }\n  };\n\n  Attacks.prototype.update = function() {\n    if (this.intent === 'defend') {\n      return this.updateDefend();\n    }\n  };\n\n  Attacks.prototype.updateDefend = function() {\n    var distToEnemy, distToTarget, enemy, enemyToTarget, guardMagnitude, intercept, leeway, offsetMagnitude, pos;\n    if (this.defenderOffsetPriority == null) {\n      this.defenderOffsetPriority = allTimeDefenderCount++;\n      this.defenderOffsetPriority += this.attackRange * 1000000;\n      this.defenderOffsetPriority -= this.maxHealth * 1000;\n    }\n    offsetMagnitude = this.width / 2;\n    if (this.defendPriorityTarget.isVector) {\n      pos = this.defendPriorityTarget;\n    } else if (this.defendPriorityTarget.isThang) {\n      pos = this.defendPriorityTarget.pos.copy();\n      offsetMagnitude = Math.max(offsetMagnitude, (this.width / 2) + (this.defendPriorityTarget.width / 2));\n      enemy = this.defendPriorityTarget.getNearestEnemy();\n    } else if (!_.isNaN(this.defendPriorityTarget.x + this.defendPriorityTarget.y)) {\n      pos = new Vector(this.defendPriorityTarget.x, this.defendPriorityTarget.y);\n    } else {\n      throw new ArgumentError('Must defend a target or an {x,y} position', 'defend');\n    }\n    if (this.commander) {\n      this.defendTarget = this.defendPriorityTarget;\n    }\n    if (this.attackRange < 10) {\n      guardMagnitude = Math.max(offsetMagnitude, this.maxSpeed / 2);\n    } else {\n      guardMagnitude = Math.max(offsetMagnitude, 5 - this.attackRange / 10);\n    }\n    distToTarget = this.distance(pos, true);\n    leeway = this.attackRange;\n    if (!(this.attackRange > 10)) {\n      leeway += 1;\n    }\n    if (enemy == null) {\n      enemy = this.getNearestEnemy();\n    }\n    if (enemy) {\n      enemyToTarget = enemy.distance(pos, true);\n      distToEnemy = this.distance(enemy, true);\n      leeway = Math.max(leeway, enemy.attackRange + 1);\n    }\n    if (!enemy && distToTarget > offsetMagnitude && this.move) {\n      this.setTargetPos(pos);\n      return this.setAction('move');\n    } else if (enemy && (distToTarget > guardMagnitude + leeway) && this.move) {\n      this.setTargetPos(pos);\n      return this.setAction('move');\n    } else if (enemy && (enemyToTarget > guardMagnitude + leeway) && this.move) {\n      intercept = enemy.pos.copy().subtract(pos).normalize().multiply(guardMagnitude);\n      if (this.defendTarget) {\n        this.adjustDefendInterceptForFormation(intercept);\n      }\n      this.setTargetPos(pos.copy().add(intercept));\n      if (this.targetPos.distance(enemy.pos) - this.width / 2 - enemy.width / 2 <= this.attackRange) {\n        return this.attack(enemy);\n      } else {\n        return this.setAction('move');\n      }\n    } else if (enemy && (enemyToTarget <= guardMagnitude + leeway)) {\n      this.attack(enemy);\n      return this.intent = 'defend';\n    } else if (enemy && this.distance(enemy) < this.attackRange) {\n      this.attack(enemy);\n      return this.intent = 'defend';\n    } else {\n      if (typeof this.brake === \"function\") {\n        this.brake();\n      }\n      return this.setAction('idle');\n    }\n  };\n\n  Attacks.prototype.defend = function(target) {\n    this.intent = \"defend\";\n    this.defendPriorityTarget = target;\n    if (!target) {\n      throw new ArgumentError('Must defend a target or an {x,y} position', 'defend');\n    }\n    return this.updateDefend();\n  };\n\n  Attacks.prototype.adjustDefendInterceptForFormation = function(intercept) {\n    var alliedDefenders, angle, thisDefenderIndex,\n      _this = this;\n    alliedDefenders = _.filter(this.getFriends(), function(f) {\n      return f.defendTarget && ((f.defendTarget.id && f.defendTarget.id === _this.defendTarget.id) || (f.defendTarget.x === _this.defendTarget.x && f.defendTarget.y === _this.defendTarget.y));\n    }).concat(this);\n    alliedDefenders = _.sortBy(alliedDefenders, 'defenderOffsetPriority');\n    thisDefenderIndex = alliedDefenders.indexOf(this);\n    angle = thisDefenderIndex / alliedDefenders.length * Math.PI;\n    if (thisDefenderIndex % 2) {\n      angle *= -1;\n    }\n    intercept.rotate(angle);\n    if (alliedDefenders.length > 6) {\n      intercept.multiply(1 + alliedDefenders.length / 6 / Math.PI);\n    }\n    return intercept;\n  };\n\n  return Attacks;\n\n})(Component);\n",
	"commitMessage": "Diplomat submission for lang tr: 1 change(s).",
	"parent": "5785794aef26d21f00c2c317",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274",
		"5573f96cffa0f4e805716e7b"
	],
	"codeLanguage": "coffeescript",
	"patches": [],
	"official": false,
	"configSchema": {
		"properties": {
			"attackDamage": {
				"type": "number",
				"description": "How much damage each attack does.",
				"default": 3
			},
			"attackMass": {
				"type": "number",
				"description": "How much mass to impart to the momentum of the attack.",
				"format": "kilograms",
				"default": 0
			},
			"attackRange": {
				"type": "number",
				"description": "How many meters this attack can reach.",
				"minimum": 0,
				"exclusiveMinimum": true,
				"default": 3,
				"format": "meters"
			},
			"attackZAngle": {
				"type": "number",
				"description": "What angle from horizontal to apply the attackMass momentum at.",
				"format": "radians",
				"default": 0
			},
			"attacksWhenOutOfRange": {
				"type": "boolean",
				"default": false,
				"description": "Whether this Thang performs an ineffectual attack when out of range."
			},
			"chasesWhenAttackingOutOfRange": {
				"type": "boolean",
				"default": true,
				"description": "Whether this Thang actually does chaseAndAttack when attacking instead."
			},
			"complainsWhenAttackingOutOfRange": {
				"type": "boolean",
				"default": false,
				"description": "Whether this Thang says a warning when not attacking because target is too far away."
			},
			"cooldown": {
				"type": "number",
				"description": "How many seconds each attack takes.",
				"default": 1,
				"minimum": 0,
				"format": "seconds"
			},
			"specificCooldown": {
				"type": "number",
				"description": "How many seconds before this specific attack can be done again, if longer than normal cooldown.",
				"minimum": 0,
				"format": "seconds",
				"default": 0
			},
			"attackMovesIncrementally": {
				"type": "boolean",
				"default": false
			}
		},
		"default": {
			"attackDamage": 3,
			"attackRange": 3,
			"cooldown": 1,
			"specificCooldown": 0,
			"attacksWhenOutOfRange": false,
			"complainsWhenAttackingOutOfRange": false,
			"chasesWhenAttackingOutOfRange": true,
			"attackMass": 0,
			"attackZAngle": 0,
			"attackMovesIncrementally": false
		},
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b457bff92f1f4f8000031",
			"majorVersion": 0
		},
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		},
		{
			"original": "524b7b7c7fc0f6d519000011",
			"majorVersion": 0
		},
		{
			"original": "524b75ad7fc0f6d519000001",
			"majorVersion": 0
		}
	],
	"description": "This Thang can attack.",
	"system": "combat",
	"searchStrings": "attacks a at att atta attac",
	"i18nCoverage": [
		"tr",
		"cs",
		"sv",
		"pt-BR",
		"fr",
		"es-ES",
		"ru",
		"zh-HANS",
		"es-419",
		"nl-NL",
		"de-DE",
		"nb",
		"lt",
		"it",
		"ro",
		"id",
		"uk",
		"sk",
		"ar",
		"pl",
		"el",
		"hu",
		"ja",
		"da",
		"he",
		"fi",
		"ko",
		"ca",
		"bg",
		"sr"
	],
	"index": true,
	"created": "2016-08-10T12:03:09.067Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 238,
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