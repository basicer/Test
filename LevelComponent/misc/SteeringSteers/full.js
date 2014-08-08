{
	"_id": "53e4ecbf6c59f53405047c4c",
	"index": true,
	"slug": "steeringsteers",
	"name": "SteeringSteers",
	"codeLanguage": "coffeescript",
	"js": "var SteeringSteers, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nSteeringSteers = (function(_super) {\n  __extends(SteeringSteers, _super);\n\n  function SteeringSteers() {\n    _ref = SteeringSteers.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  SteeringSteers.className = 'SteeringSteers';\n\n  SteeringSteers.prototype.getCows = function() {\n    return this.getByType('cow');\n  };\n\n  SteeringSteers.prototype.getFarms = function() {\n    return this.getByType('farm');\n  };\n\n  return SteeringSteers;\n\n})(Component);\n",
	"creator": "5310e4e562b398ee3ca23325",
	"original": "53e4d80eae44ec37059fd2b3",
	"watchers": [
		"5310e4e562b398ee3ca23325"
	],
	"__v": 0,
	"commitMessage": "",
	"parent": "53e4ec746c59f53405047c36",
	"official": false,
	"configSchema": {
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [],
	"description": "Methods for use in Steering the Steers level",
	"system": "misc",
	"searchStrings": "steering steers s st ste stee steer steeri steerin steering steerings steeringst steeringste steeringstee",
	"created": "2014-08-08T15:29:03.700Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 17,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "5310e4e562b398ee3ca23325"
		},
		{
			"access": "read",
			"target": "public"
		}
	]
}