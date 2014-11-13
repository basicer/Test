{
	"_id": "54641be16eda1e96fb0fbc5a",
	"index": true,
	"slug": "quicksortreferee",
	"name": "QuickSortReferee",
	"codeLanguage": "coffeescript",
	"js": "var QuickSortReferee,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nQuickSortReferee = (function(_super) {\n  var shuffle;\n\n  __extends(QuickSortReferee, _super);\n\n  QuickSortReferee.className = \"QuickSortReferee\";\n\n  function QuickSortReferee(config) {\n    QuickSortReferee.__super__.constructor.call(this, config);\n    this.swapMoveThreshold = 2.0;\n    this.swapTimeThreshold = 0.25;\n    this.compareTimeThreshold = 0.5;\n    this.executedSwaps = 0;\n    this.executedCompares = 0;\n  }\n\n  QuickSortReferee.prototype.attach = function(thang) {\n    QuickSortReferee.__super__.attach.call(this, thang);\n    if (typeof thang.addActions === \"function\") {\n      thang.addActions({\n        name: 'swap',\n        cooldown: 1\n      });\n    }\n    return typeof thang.addActions === \"function\" ? thang.addActions({\n      name: 'compare',\n      cooldown: 0\n    }) : void 0;\n  };\n\n  QuickSortReferee.prototype.isBigger = function(item1, item2) {\n    if (this.comparing) {\n      if (this.comparingDoneSince && this.world.age - this.comparingDoneSince >= this.compareTimeThreshold) {\n        this.comparing = false;\n        this.comparingDoneSince = null;\n        return \"done\";\n      }\n      if (!item1.isGrounded()) {\n        item1.setAction('idle');\n        item2.setAction('idle');\n      }\n      if (this.comparingDoneSince) {\n        return \"compare\";\n      } else {\n        this.comparingDoneSince = this.world.age;\n      }\n      return \"compare\";\n    }\n    this.setAction(\"compare\");\n    this.comparing = true;\n    item1.velocity.z = 10;\n    item1.pos.z += 5;\n    if (item1 !== item2) {\n      item2.velocity.z = 10;\n      item2.pos.z += 5;\n    }\n    this.executedCompares++;\n    if (item1.scaleFactor && item2.scaleFactor) {\n      return item1.scaleFactor > item2.scaleFactor;\n    } else {\n      return false;\n    }\n  };\n\n  QuickSortReferee.prototype.isSmaller = function(item1, item2) {\n    if (this.comparing) {\n      if (this.comparingDoneSince && this.world.age - this.comparingDoneSince >= this.compareTimeThreshold) {\n        this.comparing = false;\n        this.comparingDoneSince = null;\n        return \"done\";\n      }\n      if (!item1.isGrounded()) {\n        item1.setAction('idle');\n        item2.setAction('idle');\n      }\n      if (this.comparingDoneSince) {\n        return \"compare\";\n      } else {\n        this.comparingDoneSince = this.world.age;\n      }\n      return \"compare\";\n    }\n    this.setAction(\"compare\");\n    this.comparing = true;\n    item1.velocity.z = 10;\n    item1.pos.z += 5;\n    if (item1 !== item2) {\n      item2.velocity.z = 10;\n      item2.pos.z += 5;\n    }\n    this.executedCompares++;\n    if (item1.scaleFactor && item2.scaleFactor) {\n      return item1.scaleFactor < item2.scaleFactor;\n    } else {\n      return false;\n    }\n  };\n\n  QuickSortReferee.prototype.swapItems = function(array, firstElement, secondElement) {\n    if (this.instantSwap) {\n      this.instantSwap = false;\n      return \"done\";\n    }\n    if (this.swapping) {\n      if ((this.swappingDoneSince && this.world.age - this.swappingDoneSince >= this.swapTimeThreshold) || this.getFriends().length > array.length) {\n        this.swapping = false;\n        this.swappingDoneSince = null;\n        this.swapElement1.setAction('idle');\n        this.swapElement2.setAction('idle');\n        this.swapElement1.targetPos = null;\n        this.swapElement2.targetPos = null;\n        return \"done\";\n      }\n      if (this.swappingDoneSince) {\n        return \"swap\";\n      }\n      if (this.swapElement1.distance(this.swapTargetPos1) < this.swapMoveThreshold && this.swapElement2.distance(this.swapTargetPos2) < this.swapMoveThreshold) {\n        this.swappingDoneSince = this.world.age;\n      }\n      if (!this.swapElement1.isGrounded()) {\n        this.swapElement1.setAction('move');\n        this.swapElement2.setAction('move');\n        this.swapElement1.jumpHeight = 10;\n        this.swapElement1.updateJumpTime();\n      }\n      return \"swap\";\n    }\n    this.swapElement1 = array[firstElement];\n    this.swapElement2 = array[secondElement];\n    array[firstElement] = this.swapElement2;\n    array[secondElement] = this.swapElement1;\n    this.executedSwaps++;\n    if (array.length > 10) {\n      if (this.checkSorted(array)) {\n        this.setGoalState(\"stage2\", \"success\");\n      }\n    }\n    if (firstElement !== secondElement) {\n      this.setAction('swap');\n      this.swapping = true;\n      this.swapTargetPos1 = this.swapElement2.pos.copy();\n      this.swapTargetPos2 = this.swapElement1.pos.copy();\n      this.swapElement1.jumpHeight = 20;\n      this.swapElement1.updateJumpTime();\n      this.swapElement1.jumpTo(this.swapTargetPos1);\n      this.swapElement2.jumpTo(this.swapTargetPos2);\n    } else {\n      this.instantSwap = true;\n    }\n    delete array.__aetherAPIClone;\n    return array;\n  };\n\n  shuffle = function(a) {\n    var i, j, _i, _ref, _ref1, _results;\n    _results = [];\n    for (i = _i = _ref = a.length - 1; _ref <= 1 ? _i <= 1 : _i >= 1; i = _ref <= 1 ? ++_i : --_i) {\n      j = Math.floor(this.world.rand.randf() * (i + 1));\n      _results.push((_ref1 = [a[j], a[i]], a[i] = _ref1[0], a[j] = _ref1[1], _ref1));\n    }\n    return _results;\n  };\n\n  QuickSortReferee.prototype.checkSorted = function(array) {\n    var i, _i, _ref;\n    for (i = _i = 0, _ref = array.length - 1; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {\n      if (array[i].scaleFactor > array[i + 1].scaleFactor) {\n        return false;\n      }\n    }\n    return true;\n  };\n\n  QuickSortReferee.prototype.generateSpiral = function() {\n    var a, angle, b, centerx, centery, friend, friends, i, lastPos, scaleList, thang, thisPos, x, y, _i, _j, _k, _len, _results;\n    friends = this.getFriends();\n    for (_i = 0, _len = friends.length; _i < _len; _i++) {\n      friend = friends[_i];\n      friend.setExists(false);\n    }\n    scaleList = [];\n    for (i = _j = 0; _j < 35; i = ++_j) {\n      scaleList.push(0.5 + 1 / 35 * i);\n    }\n    shuffle(scaleList);\n    centerx = 15;\n    centery = 40;\n    a = 5;\n    b = 30;\n    lastPos = new Vector(centerx, centery);\n    _results = [];\n    for (i = _k = 0; _k < 720; i = ++_k) {\n      angle = i * Math.PI / 180;\n      x = centerx + (a + b * i / 720) * Math.cos(angle);\n      y = centery + (a + b * i / 720) * Math.sin(angle);\n      thisPos = new Vector(x, y);\n      if (thisPos.distance(lastPos) > 7 * (0.5 + i / 720)) {\n        this.toBuild = this.buildables.ogre;\n        thang = this.performBuild();\n        thang.pos.x = x;\n        thang.pos.y = y;\n        thang.scaleFactor = scaleList.pop();\n        thang.keepTrackedProperty('scaleFactor');\n        thang.hasMoved = true;\n        _results.push(lastPos = thisPos);\n      } else {\n        _results.push(void 0);\n      }\n    }\n    return _results;\n  };\n\n  return QuickSortReferee;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "53ab6e2823798d3605a83be1",
	"watchers": [
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"commitMessage": "Changed a non-deterministic random call to a deterministic one.",
	"parent": "53ea8f3a1a100989a40ce45e",
	"patches": [],
	"official": false,
	"configSchema": {
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [],
	"description": "This Component is a one-off to support the quicksort level.",
	"system": "misc",
	"searchStrings": "quick sort referee q qu qui quic quick quicks quickso quicksor quicksort quicksortr quicksortre quicksortref quicksortrefe quicksortrefer",
	"created": "2014-11-13T02:48:01.308Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 21,
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