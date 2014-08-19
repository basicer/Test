{
	"_id": "53f3c94f9ca49ad96d60afd1",
	"index": true,
	"slug": "layers",
	"name": "Layers",
	"codeLanguage": "coffeescript",
	"js": "var Layers, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nLayers = (function(_super) {\n  __extends(Layers, _super);\n\n  function Layers() {\n    _ref = Layers.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Layers.className = 'Layers';\n\n  return Layers;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "53f3c73b9ca49ad96d60afcd",
	"watchers": [
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"commitMessage": "layerPriority, not layerIndex.",
	"parent": "53f3c7de9ca49ad96d60afce",
	"official": false,
	"configSchema": {
		"properties": {
			"layerPriority": {
				"type": "number",
				"description": "The layerPriority determines what layer the child will be drawn upon. See SpriteBoss.coffee.",
				"default": 0
			}
		},
		"additionalProperties": false,
		"type": "object",
		"default": {
			"layerPriority": 0
		}
	},
	"dependencies": [
		{
			"original": "524b75ad7fc0f6d519000001",
			"majorVersion": 0
		}
	],
	"description": "This Component lets the Thang override its default layer when its sprite is drawn.",
	"system": "display",
	"searchStrings": "layers l la lay laye",
	"created": "2014-08-19T22:01:51.884Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 2,
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