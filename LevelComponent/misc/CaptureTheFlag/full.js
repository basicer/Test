{
	"_id": "560956f779289880a101d605",
	"slug": "capturetheflag",
	"searchStrings": "capture the flag c ca cap capt captu captur capture capturet captureth capturethe capturethef capturethefl",
	"name": "CaptureTheFlag",
	"js": "var CaptureTheFlag, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCaptureTheFlag = (function(_super) {\n  __extends(CaptureTheFlag, _super);\n\n  function CaptureTheFlag() {\n    _ref = CaptureTheFlag.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  CaptureTheFlag.className = 'CaptureTheFlag';\n\n  CaptureTheFlag.prototype.top = 115;\n\n  CaptureTheFlag.prototype.bottom = 5;\n\n  CaptureTheFlag.prototype.left = 5;\n\n  CaptureTheFlag.prototype.right = 135;\n\n  CaptureTheFlag.prototype.boundary = 70;\n\n  CaptureTheFlag.prototype.flagVisibleDistance = 10;\n\n  CaptureTheFlag.prototype.flagCaptureDistance = 3;\n\n  CaptureTheFlag.prototype.placeFlag = function(pos) {\n    var f, flag, x, y;\n    x = pos.x;\n    y = pos.y;\n    if (!(this.world.age < 2)) {\n      return;\n    }\n    flag = ((function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.world.thangs;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        f = _ref1[_i];\n        if (f.type === 'flag' && f.team === this.team && !f.placed) {\n          _results.push(f);\n        }\n      }\n      return _results;\n    }).call(this))[0];\n    if (!flag) {\n      return;\n    }\n    if (flag.team === 'humans') {\n      x = Math.max(this.left, Math.min(x, this.boundary));\n    } else {\n      x = Math.max(this.boundary + 1, Math.min(x, this.right));\n    }\n    y = Math.max(this.bottom, Math.min(this.top, y));\n    if (x && y) {\n      flag.pos.x = x;\n      flag.pos.y = y;\n      flag.placed = true;\n      return flag.hasMoved = true;\n    }\n  };\n\n  CaptureTheFlag.prototype.findMyFlags = function() {\n    var f, _i, _len, _ref1, _results;\n    _ref1 = this.world.thangs;\n    _results = [];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      f = _ref1[_i];\n      if (f.type === 'flag' && f.team === this.team) {\n        _results.push(f);\n      }\n    }\n    return _results;\n  };\n\n  CaptureTheFlag.prototype.findEnemyFlags = function() {\n    var f, _i, _len, _ref1, _results;\n    _ref1 = this.world.thangs;\n    _results = [];\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      f = _ref1[_i];\n      if (f.type === 'flag' && f.team !== this.team && this.distanceTo(f) < this.flagVisibleDistance && !f.complete) {\n        _results.push(f);\n      }\n    }\n    return _results;\n  };\n\n  CaptureTheFlag.prototype.captureFlag = function(flag) {\n    if (flag && this.distanceTo(flag) < this.flagCaptureDistance && flag.team !== this.team && !flag.complete && !this.carryingFlag) {\n      flag.capturedBy = this;\n      return this.carryingFlag = flag;\n    }\n  };\n\n  return CaptureTheFlag;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "55feafe9b9c84c8605391738",
	"watchers": [
		"531c8c3ccf439d790a23af04"
	],
	"__v": 0,
	"commitMessage": "Simplified flag capture logic.",
	"index": true,
	"parent": "56094c1b8bd945860526cdbc",
	"created": "2015-09-28T15:04:23.028Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 36,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "531c8c3ccf439d790a23af04"
		},
		{
			"access": "read",
			"target": "public"
		}
	]
}