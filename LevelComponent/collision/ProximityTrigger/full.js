{
	"_id": "55b6f1212be65f850505088e",
	"searchStrings": "proximity trigger p pr pro prox proxi proxim proximi proximit proximity proximityt proximitytr proximitytri proximitytrig proximitytrigg",
	"index": true,
	"slug": "proximitytrigger",
	"name": "ProximityTrigger",
	"js": "var ProximityTrigger, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nProximityTrigger = (function(_super) {\n  __extends(ProximityTrigger, _super);\n\n  function ProximityTrigger() {\n    _ref = ProximityTrigger.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  ProximityTrigger.className = 'ProximityTrigger';\n\n  ProximityTrigger.prototype.attach = function(thang) {\n    ProximityTrigger.__super__.attach.call(this, thang);\n    return thang.triggerRangeSquared = thang.triggerRange * thang.triggerRange;\n  };\n\n  ProximityTrigger.prototype.chooseAction = function() {\n    var thang, _i, _len, _ref1;\n    if (this.extantColliders == null) {\n      this.extantColliders = this.world.getSystem('Collision').extantColliders;\n    }\n    _ref1 = this.extantColliders;\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      thang = _ref1[_i];\n      if (thang.collisionCategory !== 'none' && thang.isMovable && thang !== this && this.distanceSquared(thang) < this.triggerRangeSquared && this.shouldInteractWith(thang) && !this.dud) {\n        if (typeof this.wasTriggeredBy === \"function\") {\n          this.wasTriggeredBy(thang);\n        }\n      }\n    }\n    return null;\n  };\n\n  ProximityTrigger.prototype.shouldInteractWith = function(thang) {\n    var ok;\n    ok = true;\n    if (this.groundOnly && !(typeof thang.isGrounded === \"function\" ? thang.isGrounded() : void 0)) {\n      ok = false;\n    }\n    return ok;\n  };\n\n  ProximityTrigger.prototype.wasTriggeredBy = function(thang) {};\n\n  return ProximityTrigger;\n\n})(Component);\n",
	"system": "collision",
	"creator": "531c8c3ccf439d790a23af04",
	"original": "54de359ce7b94b530575350a",
	"watchers": [
		"54b1773a75e3055205e5a449",
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "Triggers a method call when approached.",
	"codeLanguage": "coffeescript",
	"dependencies": [
		{
			"original": "524b75ad7fc0f6d519000001",
			"majorVersion": 0
		},
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		}
	],
	"commitMessage": "Now it is a dud!",
	"parent": "55b6e6564878d887056a7ce5",
	"configSchema": {
		"properties": {
			"dud": {
				"description": "Is this proximity trigger a dud?",
				"additionalProperties": false,
				"default": false,
				"type": "boolean"
			},
			"groundOnly": {
				"type": "boolean",
				"default": false,
				"description": "Only triggered by thangs on the ground?"
			},
			"triggerRange": {
				"type": "number",
				"description": "The distance at which this will trigger.",
				"additionalProperties": false,
				"default": 2
			}
		},
		"default": {
			"triggerRange": 2,
			"groundOnly": false
		}
	},
	"created": "2015-07-28T03:04:01.627Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 7,
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