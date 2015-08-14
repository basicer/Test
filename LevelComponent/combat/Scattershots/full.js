{
	"_id": "55ce32dd052f38133bd8bea4",
	"searchStrings": "scattershots s sc sca scat scatt scatte scatter scatters scattersh scattersho",
	"index": true,
	"slug": "scattershots",
	"name": "Scattershots",
	"codeLanguage": "coffeescript",
	"js": "var ArgumentError, Scattershots, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nArgumentError = require('lib/world/errors').ArgumentError;\n\nScattershots = (function(_super) {\n  __extends(Scattershots, _super);\n\n  function Scattershots() {\n    _ref = Scattershots.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Scattershots.className = 'Scattershots';\n\n  Scattershots.prototype.attach = function(thang) {\n    var scattershotAction;\n    scattershotAction = {\n      name: 'scattershot',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    Scattershots.__super__.attach.call(this, thang);\n    return thang.addActions(scattershotAction);\n  };\n\n  Scattershots.prototype.scattershot = function(targetOrPos) {\n    var _ref1;\n    if (!targetOrPos) {\n      this.setTargetPos(new Vector(20, 0).rotate(this.rotation).add(this.pos, 'scattershot'));\n    } else if (targetOrPos.id != null) {\n      this.setTarget(targetOrPos, 'scattershot');\n    } else if (targetOrPos.pos != null) {\n      this.setTargetPos(targetOrPos.pos, 'scattershot');\n    } else if ((targetOrPos.x != null) && (targetOrPos.y != null)) {\n      this.setTargetPos(targetOrPos, 'scattershot');\n    } else if (typeof targetOrPos === 'number') {\n      this.setTargetPos(new Vector(targetOrPos, 0).rotate(this.rotation).add(this.pos, 'scattershot'));\n    } else {\n      throw new ArgumentError(\"target isn't a unit or position.\", \"scattershot\", \"target\", \"object\", targetOrPos);\n    }\n    if (this.actions.move && this.distance(this.target || this.getTargetPos(), true) > this.attackRange) {\n      this.setAction('move');\n    } else if (this.getCooldown('scattershot')) {\n      this.setAction('attack');\n    } else {\n      this.setAction('scattershot');\n    }\n    if (this.scattershottedOnce || ((_ref1 = this.target) != null ? _ref1.health : void 0) <= 0) {\n      this.scattershottedOnce = false;\n      this.setAction('idle');\n      return \"done\";\n    } else {\n      return \"scattershot\";\n    }\n  };\n\n  Scattershots.prototype.update = function() {\n    var dir, missile, shotDistance, targetPos, theta, _i, _ref1, _ref2, _ref3;\n    if (!(this.action === 'scattershot' && this.act())) {\n      return;\n    }\n    if (this.hidden) {\n      if (typeof this.unhide === \"function\") {\n        this.unhide();\n      }\n    }\n    targetPos = this.getTargetPos() || new Vector(this.attackRange, 0).rotate(this.rotation).add(this.pos);\n    shotDistance = this.distance(targetPos);\n    dir = Vector.subtract(targetPos, this.pos).normalize();\n    if (dir.isZero()) {\n      console.log(\"Whoa no, got a zero vector difference when scattershooting! Let's just shoot to the right.\");\n      dir = new Vector(1, 0);\n    }\n    dir.multiply(shotDistance);\n    for (theta = _i = _ref1 = -this.scattershotArcLength / 2, _ref2 = this.scattershotArcLength / 2, _ref3 = this.scattershotArcLength / (this.scattershotCount - 1); _ref3 > 0 ? _i <= _ref2 : _i >= _ref2; theta = _i += _ref3) {\n      this.setTargetPos(Vector.add(this.pos, Vector.rotate(dir, theta)));\n      if (targetPos != null ? targetPos.z : void 0) {\n        this.targetPos.z = targetPos.z;\n      }\n      this.performAttack();\n      missile = this.lastMissileShot;\n      missile.pos.add(Vector.normalize(missile.velocity, true).multiply(3, true), true);\n    }\n    this.setTargetPos(targetPos);\n    if (this.plan) {\n      return this.scattershottedOnce = true;\n    }\n  };\n\n  return Scattershots;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "53c9b28bebba77000033aead",
	"watchers": [
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"commitMessage": "Updating scattershots to deal with targets who hide.",
	"parent": "558452234bed1b6c2a2caac0",
	"official": false,
	"configSchema": {
		"properties": {
			"cooldown": {
				"type": "number",
				"description": "How many seconds each scattershot takes.",
				"default": 2,
				"minimum": 0,
				"format": "seconds"
			},
			"specificCooldown": {
				"type": "number",
				"description": "How many seconds before this specific scattershot can be done again, if longer than normal cooldown.",
				"minimum": 0,
				"format": "seconds"
			},
			"scattershotArcLength": {
				"type": "number",
				"description": "From 0 to 2 PI, how wide should the arc be in which to fire the projectiles?",
				"format": "radians",
				"default": 1.5708
			},
			"scattershotCount": {
				"type": "integer",
				"description": "How many projectiles should be fired?",
				"minimum": 0,
				"exclusiveMinimum": true,
				"default": 10
			}
		},
		"default": {
			"cooldown": 1,
			"specificCooldown": 15,
			"scattershotArcLength": 1.5708,
			"scattershotCount": 10
		},
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b7bc67fc0f6d51900001a",
			"majorVersion": 0
		}
	],
	"description": "This Component gives the Thang a scattershot ability, shooting multiple projectiles.",
	"system": "combat",
	"patches": [],
	"created": "2015-08-14T18:26:37.399Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 13,
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