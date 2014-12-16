{
	"_id": "549090ecb30e9eb7027fe203",
	"searchStrings": "colored c co col colo color",
	"index": true,
	"slug": "colored",
	"name": "Colored",
	"js": "var Colored, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nColored = (function(_super) {\n  __extends(Colored, _super);\n\n  function Colored() {\n    _ref = Colored.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Colored.className = 'Colored';\n\n  return Colored;\n\n})(Component);\n",
	"system": "display",
	"creator": "512ef4805a67a8c507000001",
	"original": "54908ffcb30e9eb7027fe202",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"description": "This Component lets the Thang use different colors configured in its ThangType, like skin color.",
	"configSchema": {
		"properties": {
			"colors": {
				"additionalProperties": {
					"type": "object",
					"additionalProperties": false,
					"format": "color-config",
					"properties": {
						"hue": {
							"type": "number",
							"minimum": 0,
							"maximum": 1
						},
						"saturation": {
							"type": "number",
							"minimum": 0,
							"maximum": 1
						},
						"lightness": {
							"type": "number",
							"minimum": 0,
							"maximum": 1
						}
					},
					"description": "Tints the Thang with this color name to this color config, if set up in the ThangType."
				}
			}
		}
	},
	"commitMessage": "Adding Colors config.",
	"parent": "54908ffcb30e9eb7027fe202",
	"created": "2014-12-16T20:07:08.592Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 1,
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