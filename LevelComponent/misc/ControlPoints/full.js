{
	"_id": "572f547f5e6478400213458c",
	"searchStrings": "control points c co con cont contr contro control controlp controlpo controlpoi controlpoin",
	"index": true,
	"slug": "controlpoints",
	"name": "ControlPoints",
	"js": "var ControlPoints, _controlPoints,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\n_controlPoints = [];\n\nControlPoints = (function(_super) {\n  __extends(ControlPoints, _super);\n\n  ControlPoints.className = 'ControlPoints';\n\n  function ControlPoints(config) {\n    ControlPoints.__super__.constructor.call(this, config);\n    this.captureRadiusSquared = this.captureRadius * this.captureRadius;\n    if (this.manager) {\n      this.sprites = [];\n    }\n  }\n\n  ControlPoints.prototype.addControlPoint = function(id, pos, team, namesByTeam) {\n    var h, n, o, sprite, _i, _len, _ref;\n    if (!this.manager) {\n      return;\n    }\n    this.sprites.push(h = this.instabuild('control-point-humans', pos.x, pos.y));\n    this.sprites.push(o = this.instabuild('control-point-ogres', pos.x, pos.y));\n    this.sprites.push(n = this.instabuild('control-point', pos.x, pos.y));\n    h.team = 'humans';\n    o.team = 'ogres';\n    n.team = void 0;\n    h.id = \"\" + id + \" Control Point (Humans)\";\n    o.id = \"\" + id + \" Control Point (Ogres)\";\n    n.id = \"\" + id + \" Control Point\";\n    h.pos = o.pos = n.pos = pos.copy();\n    _ref = [h, o, n];\n    for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n      sprite = _ref[_i];\n      sprite.setExists(sprite.team === team);\n      sprite.addTrackedProperties(['pos', 'Vector']);\n      sprite.keepTrackedProperty('pos');\n    }\n    return _controlPoints.push({\n      id: id,\n      pos: pos.copy(),\n      team: team || null,\n      namesByTeam: namesByTeam,\n      toString: (function() {\n        return this.id;\n      })\n    });\n  };\n\n  ControlPoints.prototype.getControlPoints = function() {\n    var corner, point, points, _i, _len, _ref;\n    points = (function() {\n      var _i, _len, _results;\n      _results = [];\n      for (_i = 0, _len = _controlPoints.length; _i < _len; _i++) {\n        point = _controlPoints[_i];\n        _results.push(_.clone(point));\n      }\n      return _results;\n    })();\n    for (_i = 0, _len = points.length; _i < _len; _i++) {\n      point = points[_i];\n      point.name = ((_ref = point.namesByTeam) != null ? _ref[this.team] : void 0) || point.id;\n      delete point.namesByTeam;\n    }\n    corner = this.team === 'humans' ? new Vector(4, 4) : new Vector(116, 96);\n    points = _.sortBy(points, function(p) {\n      return corner.distanceSquared(p.pos);\n    });\n    return points;\n  };\n\n  ControlPoints.prototype.getControlPointsMap = function() {\n    return _.indexBy(this.getControlPoints(), 'name');\n  };\n\n  ControlPoints.prototype.updateControlPoints = function() {\n    var attackables, income, incomes, index, nearest, point, sprite, t, team, _i, _j, _len, _len1, _ref, _results;\n    if (!this.manager) {\n      return;\n    }\n    attackables = (function() {\n      var _i, _len, _ref, _results;\n      _ref = this.world.getSystem(\"Combat\").attackables;\n      _results = [];\n      for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n        t = _ref[_i];\n        if (t.team !== 'neutral') {\n          _results.push(t);\n        }\n      }\n      return _results;\n    }).call(this);\n    incomes = {\n      humans: 0,\n      ogres: 0\n    };\n    for (index = _i = 0, _len = _controlPoints.length; _i < _len; index = ++_i) {\n      point = _controlPoints[index];\n      team = void 0;\n      nearest = _.min(attackables, function(thang) {\n        return point.pos.distanceSquared(thang.pos);\n      });\n      if (nearest && nearest.pos && point.pos.distanceSquared(nearest.pos) < this.captureRadiusSquared) {\n        team = nearest.team;\n        incomes[team] += this.income;\n      }\n      _controlPoints[index].team = team || null;\n      _ref = this.sprites;\n      for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {\n        sprite = _ref[_j];\n        if (sprite.pos.equals(point.pos)) {\n          sprite.setExists(sprite.team === team);\n        }\n      }\n    }\n    _results = [];\n    for (team in incomes) {\n      income = incomes[team];\n      _results.push(this.world.getSystem(\"Inventory\").teamGold[team].income = income);\n    }\n    return _results;\n  };\n\n  ControlPoints.prototype.chooseAction = function() {\n    return this.updateControlPoints();\n  };\n\n  return ControlPoints;\n\n})(Component);\n",
	"system": "misc",
	"creator": "572f0418b88c6ee901f49d86",
	"original": "55e75c673bd1548605ab4ecd",
	"watchers": [
		"547acbb2af18b03c0563fdb3"
	],
	"__v": 0,
	"configSchema": {
		"properties": {
			"captureRadius": {
				"type": "number",
				"default": 10,
				"minimum": 0,
				"description": "Capture radius of a Control Point."
			},
			"income": {
				"type": "number",
				"minimum": 0,
				"additionalProperties": false,
				"default": 3,
				"description": "Income earned per Control Point captured."
			},
			"manager": {
				"type": "boolean",
				"default": false,
				"description": "Whether this Thang should manage the Control Points."
			}
		},
		"default": {
			"captureRadius": 10,
			"income": 3,
			"manager": false
		}
	},
	"commitMessage": "Diplomat submission for lang pl: 3 change(s).",
	"parent": "56d350559bd91e3500c1b4b6",
	"description": "This Component interacts with Control Points.",
	"codeLanguage": "coffeescript",
	"i18nCoverage": [
		"-",
		"es-419",
		"fr",
		"ru",
		"pt-BR",
		"it",
		"uk",
		"el",
		"de-DE",
		"zh-HANS",
		"sk",
		"nl-NL",
		"pl"
	],
	"patches": [],
	"created": "2016-05-08T15:00:15.374Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 30,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "547acbb2af18b03c0563fdb3"
		},
		{
			"access": "read",
			"target": "public"
		}
	]
}