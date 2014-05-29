{
	"_id": "538755f9cb18e700007122c5",
	"index": true,
	"slug": "worldzoom",
	"name": "WorldZoom",
	"js": "var WorldZoom, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nWorldZoom = (function(_super) {\n  __extends(WorldZoom, _super);\n\n  function WorldZoom() {\n    _ref = WorldZoom.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  WorldZoom.className = \"WorldZoom\";\n\n  WorldZoom.prototype.attach = function(thang) {\n    thang.world.defaultSurfaceFocusZoom = this.defaultSurfaceFocusZoom;\n    return thang.world.defaultSurfaceFocusTarget = this.defaultSurfaceFocusTarget;\n  };\n\n  return WorldZoom;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "525c869458a087902c000001",
	"__v": 1,
	"commitMessage": "",
	"parent": "538697ddcb18e70000712263",
	"patches": [],
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"official": false,
	"configSchema": {
		"properties": {
			"defaultSurfaceFocusZoom": {
				"type": "number",
				"default": 1,
				"description": "The default zoom level to which the Surface will return when no scripts are running.",
				"minimum": 0,
				"exclusiveMinimum": true,
				"maximum": 64
			},
			"defaultSurfaceFocusTarget": {
				"anyOf": [
					{
						"type": "null"
					},
					{
						"default": {
							"y": "39.2666666667",
							"x": 46.2
						},
						"required": [
							"x",
							"y"
						],
						"properties": {
							"y": {
								"type": "number"
							},
							"x": {
								"type": "number"
							}
						},
						"additionalProperties": false,
						"format": "point2d",
						"type": "object"
					}
				],
				"description": "The default target to which the Surface will return when no scripts are running, or the center if null.",
				"default": null
			}
		},
		"default": {
			"defaultSurfaceFocusZoom": 1,
			"defaultSurfaceFocusTarget": null
		},
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [],
	"description": "This Component is deprecated; use the UI System config instead.",
	"system": "ui",
	"codeLanguage": "coffeescript",
	"searchStrings": "world zoom w wo wor worl world worldz worldzo",
	"created": "2014-05-29T15:44:57.565Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 4,
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