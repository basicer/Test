{
	"_id": "56fae185c88ef82400cad454",
	"searchStrings": "test component t te tes test testc testco testcom testcomp testcompo testcompon testcompone",
	"index": true,
	"slug": "testcomponent",
	"name": "TestComponent",
	"js": "var TestComponent, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nTestComponent = (function(_super) {\n  __extends(TestComponent, _super);\n\n  function TestComponent() {\n    _ref = TestComponent.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  TestComponent.className = 'TestComponent';\n\n  TestComponent.prototype.chooseAction = function() {\n    return this.attack(this);\n  };\n\n  return TestComponent;\n\n})(Component);\n",
	"system": "action",
	"creator": "537d01f484c54c6e05c05989",
	"original": "56f95f2b3d3c03250003cb0b",
	"watchers": [
		"537d01f484c54c6e05c05989",
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"commitMessage": "TestComponent",
	"parent": "56f95f2b3d3c03250003cb0b",
	"created": "2016-03-29T20:11:49.604Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 1,
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