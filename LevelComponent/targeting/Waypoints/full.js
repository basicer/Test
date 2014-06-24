{
	"_id": "53a91253482db50000568c4d",
	"creator": "512ef4805a67a8c507000001",
	"slug": "waypoints",
	"name": "Waypoints",
	"js": "var Waypoints,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nWaypoints = (function(_super) {\n  __extends(Waypoints, _super);\n\n  Waypoints.className = \"Waypoints\";\n\n  function Waypoints(config) {\n    var _ref, _ref1;\n    Waypoints.__super__.constructor.call(this, config);\n    this.waypoints = (_ref = (_ref1 = this.waypoints) != null ? _ref1.slice() : void 0) != null ? _ref : [];\n  }\n\n  Waypoints.prototype.setWaypoints = function(waypoints) {\n    this.waypoints = waypoints.slice();\n    return this.finishedWaypoints = false;\n  };\n\n  Waypoints.prototype.update = function() {\n    var switchTargets, targetPos;\n    targetPos = this.getTargetPos();\n    if (targetPos) {\n      switchTargets = this.pos.distance(targetPos) < 1;\n    } else {\n      switchTargets = !this.finishedWaypoints;\n    }\n    if (!switchTargets) {\n      return;\n    }\n    if (this.waypoints.length) {\n      this.setTargetPos(this.waypoints.shift());\n      if (!this.waypoints.length) {\n        return this.finishedWaypoints = true;\n      }\n    } else if (this.finishedWaypoints) {\n      return this.setTarget(null);\n    }\n  };\n\n  return Waypoints;\n\n})(Component);\n",
	"original": "524d934d3ea855e0ab00023a",
	"__v": 0,
	"commitMessage": "Added a setWaypoints method, and reduced waypoint distance threshold from 5 to 1.",
	"parent": "538755f6cb18e70000712297",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"official": false,
	"configSchema": {
		"properties": {
			"waypoints": {
				"type": "array",
				"items": {
					"type": "object",
					"additionalProperties": false,
					"properties": {
						"x": {
							"type": "number"
						},
						"y": {
							"type": "number"
						}
					},
					"description": "An {x, y} position in meters from the left and bottom edges of the map."
				},
				"description": "Array of {x, y} points to visit in order."
			}
		},
		"default": {
			"waypoints": []
		},
		"id": "__base__",
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b7b7c7fc0f6d519000011",
			"majorVersion": 0
		},
		{
			"original": "524b7b8c7fc0f6d519000013",
			"majorVersion": 0
		}
	],
	"description": "This Thang visits a list of waypoints in order.",
	"system": "targeting",
	"created": "2014-06-24T05:53:23.355Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 16,
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