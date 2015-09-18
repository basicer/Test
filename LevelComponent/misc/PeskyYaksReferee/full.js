{
	"_id": "55fb9aa96eec8f86050d7128",
	"searchStrings": "pesky yaks referee p pe pes pesk pesky peskyy peskyya peskyyak peskyyaks peskyyaksr peskyyaksre peskyyaksref peskyyaksrefe peskyyaksrefer",
	"index": true,
	"slug": "peskyyaksreferee",
	"name": "PeskyYaksReferee",
	"js": "var PeskyYaksReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nPeskyYaksReferee = (function(_super) {\n  __extends(PeskyYaksReferee, _super);\n\n  function PeskyYaksReferee() {\n    _ref = PeskyYaksReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  PeskyYaksReferee.className = 'PeskyYaksReferee';\n\n  PeskyYaksReferee.prototype.beginPath = function(_x, _y) {\n    this.stack.push({\n      x: _x,\n      y: _y\n    });\n    this.removeItem();\n    this.stack.pop();\n    this.stack.push({\n      x: _x + 1,\n      y: _y\n    });\n    this.removeItem();\n    return this.progressStack();\n  };\n\n  PeskyYaksReferee.prototype.progressStack = function() {\n    var index, potential, selectedIndex, xVal, yVal;\n    potential = [];\n    xVal = this.stack[this.stack.length - 1].x;\n    yVal = this.stack[this.stack.length - 1].y;\n    index = yVal * this.xWidth + xVal;\n    if (xVal - 2 >= 0 && this.mineArray[index - 2] !== 0) {\n      potential.push([\n        {\n          x: xVal - 2,\n          y: yVal\n        }, {\n          x: xVal - 1,\n          y: yVal\n        }\n      ]);\n    }\n    if (xVal + 2 < this.xWidth && this.mineArray[index + 2] !== 0) {\n      potential.push([\n        {\n          x: xVal + 2,\n          y: yVal\n        }, {\n          x: xVal + 1,\n          y: yVal\n        }\n      ]);\n    } else if (xVal + 2 === this.xWidth) {\n      if (this.potentialExits.indexOf({\n        x: xVal + 1,\n        y: yVal\n      }) === -1) {\n        this.potentialExits.push({\n          x: xVal + 1,\n          y: yVal\n        });\n      } else {\n        console.log(\":((\");\n      }\n    }\n    if (yVal - 2 > 0 && this.mineArray[index - this.xWidth * 2] !== 0) {\n      potential.push([\n        {\n          x: xVal,\n          y: yVal - 2\n        }, {\n          x: xVal,\n          y: yVal - 1\n        }\n      ]);\n    }\n    if (yVal + 2 < (this.yHeight - 1) && this.mineArray[index + this.xWidth * 2] !== 0) {\n      potential.push([\n        {\n          x: xVal,\n          y: yVal + 2\n        }, {\n          x: xVal,\n          y: yVal + 1\n        }\n      ]);\n    }\n    if (potential.length !== 0) {\n      selectedIndex = Math.floor(Math.random() * potential.length);\n      this.stack.push(potential[selectedIndex][0]);\n      this.removeItem();\n      this.stack.push(potential[selectedIndex][1]);\n      this.removeItem();\n      this.stack.pop();\n      this.progressStack();\n      return potential = [];\n    } else {\n      if (this.stack.length > 1) {\n        this.stack.pop();\n        return this.progressStack();\n      } else {\n        this.exitLocale = this.potentialExits[Math.floor(Math.random() * this.potentialExits.length)];\n        this.stack.push(this.exitLocale);\n        return this.removeItem();\n      }\n    }\n  };\n\n  PeskyYaksReferee.prototype.removeItem = function() {\n    var xVal, yVal;\n    xVal = this.stack[this.stack.length - 1].x;\n    yVal = this.stack[this.stack.length - 1].y;\n    return this.mineArray[yVal * this.xWidth + xVal] = 0;\n  };\n\n  PeskyYaksReferee.prototype.setUpLevel = function() {\n    var i, j, _i, _j, _k, _ref1, _ref2, _ref3;\n    this.world.seed = Math.random();\n    this.exitLocale = null;\n    this.potentialExits = [];\n    this.stack = [];\n    this.mineArray = [];\n    this.xWidth = 15;\n    this.yHeight = 18;\n    for (i = _i = 0, _ref1 = this.xWidth; 0 <= _ref1 ? _i < _ref1 : _i > _ref1; i = 0 <= _ref1 ? ++_i : --_i) {\n      for (j = _j = 0, _ref2 = this.yHeight; 0 <= _ref2 ? _j < _ref2 : _j > _ref2; j = 0 <= _ref2 ? ++_j : --_j) {\n        this.mineArray.push(1);\n      }\n    }\n    this.beginPath(0, 1 + Math.floor((this.yHeight - 2) * Math.random()));\n    for (i = _k = 0, _ref3 = this.mineArray.length; 0 <= _ref3 ? _k < _ref3 : _k > _ref3; i = 0 <= _ref3 ? ++_k : --_k) {\n      if (this.mineArray[i] === 1) {\n        this.instabuild(\"fire-trap\", 16 + 4 * (i % 15), 68 - 4 * (i - (i % 15)) / 15);\n      }\n    }\n    this.instabuild(\"x-marker\", 16 + 4 * this.exitLocale.x, 68 - 4 * this.exitLocale.y);\n    return this.isSetup = true;\n  };\n\n  PeskyYaksReferee.prototype.chooseAction = function() {\n    if (!this.isSetup) {\n      return this.setUpLevel();\n    }\n  };\n\n  return PeskyYaksReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "537d01f484c54c6e05c05989",
	"original": "552eb3f7553595320fdd6f0e",
	"watchers": [
		"537d01f484c54c6e05c05989"
	],
	"__v": 0,
	"commitMessage": "Freshening up.",
	"parent": "553216e07591174b11a2ba28",
	"created": "2015-09-18T05:01:29.713Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 7,
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