{
	"_id": "53a9efeb2a7292216d17d14f",
	"slug": "drawsbounds",
	"name": "DrawsBounds",
	"js": "var DrawsBounds, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nDrawsBounds = (function(_super) {\n  __extends(DrawsBounds, _super);\n\n  function DrawsBounds() {\n    _ref = DrawsBounds.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  DrawsBounds.className = \"DrawsBounds\";\n\n  DrawsBounds.prototype.drawsBounds = true;\n\n  DrawsBounds.prototype.attach = function(thang) {\n    var _ref1;\n    DrawsBounds.__super__.attach.call(this, thang);\n    thang.addTrackedProperties(['drawsBoundsIndex', 'number']);\n    thang.keepTrackedProperty('drawsBoundsIndex');\n    thang.displaySystem = thang.world.getSystem(\"Display\");\n    thang.updateRegistration();\n    return thang.drawsBoundsIndex != null ? thang.drawsBoundsIndex : thang.drawsBoundsIndex = ((_ref1 = thang.displaySystem) != null ? _ref1.nextDrawsBoundsIndex() : void 0) != null ? _ref1.nextDrawsBoundsIndex() : 1;\n  };\n\n  return DrawsBounds;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "52ae3ceda4dcd44152000002",
	"__v": 0,
	"commitMessage": "Working on visualizing the tile group numbers.",
	"parent": "538755f5cb18e7000071228d",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"official": false,
	"configSchema": {
		"id": "__base__",
		"additionalProperties": false,
		"type": "object",
		"properties": {
			"drawsBoundsStyle": {
				"type": "string",
				"default": "border-text"
			},
			"drawsBoundsIndex": {
				"type": "integer"
			}
		},
		"default": {
			"drawsBoundsStyle": "border-text",
			"drawsBoundsIndex": 0
		}
	},
	"dependencies": [
		{
			"original": "524b4150ff92f1f4f8000024",
			"majorVersion": 0
		}
	],
	"description": "This Component makes the Thang draw its bounds when displayed.",
	"system": "display",
	"searchStrings": "draws bounds d dr dra draw draws drawsb drawsbo drawsbou drawsboun",
	"created": "2014-06-24T21:38:51.200Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 33,
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