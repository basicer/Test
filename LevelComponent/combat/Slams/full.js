{
	"_id": "573fa0ad3e910f115e5e4647",
	"slug": "slams",
	"searchStrings": "slams s sl sla",
	"name": "Slams",
	"js": "var ArgumentError, Slams, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nArgumentError = require('lib/world/errors').ArgumentError;\n\nSlams = (function(_super) {\n  __extends(Slams, _super);\n\n  function Slams() {\n    _ref = Slams.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Slams.className = 'Slams';\n\n  Slams.prototype.attach = function(thang) {\n    var slamAction;\n    this.slamRange = 10;\n    this.impulseRange = 20;\n    slamAction = {\n      name: 'slam',\n      cooldown: 1,\n      specificCooldown: 10\n    };\n    Slams.__super__.attach.call(this, thang);\n    return thang.addActions(slamAction);\n  };\n\n  Slams.prototype.slam = function(target) {\n    var _ref1;\n    if (target == null) {\n      throw new ArgumentError(\"Target is null. Is there always a target to slam? (Use if?)\", \"slam\", \"target\", \"object\", target);\n    }\n    this.setTarget(target);\n    if (!this.target) {\n      return 'done';\n    }\n    if (this.actions.move && this.distanceTo(this.target, false) > this.slamRange) {\n      this.setAction('move');\n    } else {\n      this.setAction('slam');\n    }\n    if (this.distanceTo(this.target, false) <= this.slamRange && this.getCooldown('slam') > 1) {\n      return \"done\";\n    } else if (this.slammedOnce || ((_ref1 = this.target) != null ? _ref1.health : void 0) <= 0) {\n      this.slammedOnce = false;\n      this.setAction('idle');\n      return \"done\";\n    } else {\n      return \"slam\";\n    }\n  };\n\n  Slams.prototype.getSlamMomentum = function(targetPos) {\n    var dir;\n    dir = targetPos.copy().subtract(this.pos).normalize();\n    dir.z = Math.sin(Math.PI / 8);\n    dir.multiply(this.bashMass, true);\n    return dir;\n  };\n\n  Slams.prototype.getSecondaryMomentum = function(targetPos, targetPos2) {\n    var a, b, dir, vDot, vRej;\n    a = targetPos2.copy().subtract(this.pos);\n    b = targetPos.copy().subtract(this.pos);\n    vDot = a.dot(b.copy().normalize(), true);\n    if (vDot < 0 || (vDot > b.magnitude() && targetPos.distance(targetPos2) > this.impulseRange)) {\n      return;\n    }\n    vRej = a.copy().subtract(a.copy().projectOnto(b.copy().normalize(), false));\n    if (vRej.magnitude() > this.impulseRange) {\n      return;\n    }\n    dir = vRej.copy().normalize();\n    dir.z = Math.sin(Math.PI / 8);\n    dir.multiply(this.bashMass * (1 - vRej.magnitude() / this.impulseRange), true);\n    return dir;\n  };\n\n  Slams.prototype.update = function(target) {\n    var enemy, tMom, _base, _i, _len, _ref1;\n    if (!(this.action === 'slam' && this.target && this.distanceTo(this.target, false) <= this.slamRange && this.act())) {\n      return;\n    }\n    if (typeof this.sayWithoutBlocking === \"function\") {\n      this.sayWithoutBlocking(\"Slam!\");\n    }\n    this.rotation = Vector.subtract(this.target.pos, this.pos).heading();\n    if (typeof (_base = this.target).takeDamage === \"function\") {\n      _base.takeDamage(this.bashDamage, this, this.getSlamMomentum(this.target.pos));\n    }\n    _ref1 = this.findEnemies();\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      enemy = _ref1[_i];\n      if (!(enemy !== this.target)) {\n        continue;\n      }\n      tMom = this.getSecondaryMomentum(this.target.pos, enemy.pos);\n      if (tMom != null) {\n        if (typeof enemy.takeDamage === \"function\") {\n          enemy.takeDamage(this.bashDamage, this, tMom);\n        }\n      }\n    }\n    if (typeof this.brake === \"function\") {\n      this.brake();\n    }\n    if (this.hidden) {\n      if (typeof this.unhide === \"function\") {\n        this.unhide();\n      }\n    }\n    if (this.plan) {\n      return this.slammedOnce = true;\n    }\n  };\n\n  /*\n  bash: (target) ->\n    unless target?\n      throw new ArgumentError \"Target is null. Is there always a target to bash? (Use if?)\", \"bash\", \"target\", \"object\", target\n      \n    @setTarget target, 'bash'\n    return \"done\" unless @target  # If Naria's hide ability has nulled out our target while we were chasing, we are done.\n  \n    if @actions.move and @distance(@target, true) > @bashRange\n      @setAction 'move'\n    else\n      @setAction 'bash'\n    if @distance(@target, true) <= @bashRange and @getCooldown('bash') > 1  # TODO: test only doing this after one frame, so that we don't infinitely loop?\n      \"done\"\n    else if @bashedOnce or @target?.health <= 0\n      @bashedOnce = false\n      @setAction 'idle'\n      \"done\"\n    else\n      \"bash\"\n  \n  getBashMomentum: (targetPos) ->\n    dir = targetPos.copy().subtract(@pos).normalize()\n    dir.z = Math.sin Math.PI / 8\n    dir.multiply @bashMass, true\n    dir\n  \n  update: ->\n    return unless @action is 'bash' and @target and @distance(@target, true) <= @bashRange and @act()\n    @say? 'Bash!'\n    @rotation = Vector.subtract(@target.pos, @pos).heading()  # Face target\n    momentum = @getBashMomentum(@target.pos)\n    @target.takeDamage? @bashDamage, @, momentum\n    @brake?()\n    @unhide?() if @hidden\n    @bashedOnce = true if @plan\n  */\n\n\n  return Slams;\n\n})(Component);\n",
	"system": "combat",
	"creator": "512ef4805a67a8c507000001",
	"original": "568ac3cb9b9fe146007fb0b6",
	"watchers": [
		"537d01f484c54c6e05c05989",
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"commitMessage": "sayWithoutBlocking",
	"index": true,
	"parent": "56f5d2c7db0216900f08a25b",
	"created": "2016-05-20T23:41:33.530Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 5,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "537d01f484c54c6e05c05989"
		},
		{
			"access": "read",
			"target": "public"
		}
	]
}