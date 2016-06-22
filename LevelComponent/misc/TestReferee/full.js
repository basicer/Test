{
	"_id": "576aaf76d03cdb2500de41e2",
	"searchStrings": "test referee t te tes test testr testre testref testrefe testrefer",
	"index": true,
	"slug": "testreferee",
	"name": "TestReferee",
	"js": "var TestReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nTestReferee = (function(_super) {\n  __extends(TestReferee, _super);\n\n  function TestReferee() {\n    _ref = TestReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  TestReferee.className = 'TestReferee';\n\n  TestReferee.prototype.attach = function(thang) {\n    TestReferee.__super__.attach.call(this, thang);\n    return thang.testsPassing = true;\n  };\n\n  TestReferee.prototype.assertTrue = function(bool) {\n    if (!bool) {\n      if (!bool) {\n        this.testsPassing = false;\n      }\n      return console.log(\"FAILED assertion: expected\", bool, \"to be true\");\n    }\n  };\n\n  TestReferee.prototype.assertFalse = function(bool) {\n    if (bool) {\n      console.log(\"FAILED assertion: expected\", bool, \"to be false\");\n      if (bool) {\n        return this.testsPassing = false;\n      }\n    }\n  };\n\n  TestReferee.prototype.finishTests = function() {\n    var state;\n    state = (this.testsPassing ? 'success' : 'failure');\n    console.log(\"Tests finished:\", state);\n    return this.setGoalState('pass-tests', state);\n  };\n\n  return TestReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "54b1773a75e3055205e5a449",
	"original": "5769a8955d4c762000bdb399",
	"watchers": [
		"54b1773a75e3055205e5a449",
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"commitMessage": "it(\"should actually work\")",
	"parent": "5769b63f5d4c762000bdc18c",
	"created": "2016-06-22T15:32:06.858Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 5,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "54b1773a75e3055205e5a449"
		},
		{
			"access": "read",
			"target": "public"
		}
	]
}