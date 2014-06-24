{
	"_id": "53a8c3af482db50000568c39",
	"index": true,
	"slug": "showstext",
	"name": "ShowsText",
	"js": "var ShowsText, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nShowsText = (function(_super) {\n  __extends(ShowsText, _super);\n\n  function ShowsText() {\n    _ref = ShowsText.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  ShowsText.className = \"ShowsText\";\n\n  ShowsText.prototype.showText = function(text, displayOptions) {\n    displayOptions = _.pick(displayOptions, 'color', 'size');\n    displayOptions.text = text;\n    return this.addCurrentEvent(\"text-\" + (JSON.stringify(displayOptions)));\n  };\n\n  return ShowsText;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "537790abca4464264eb08d72",
	"watchers": [
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Described",
	"parent": "538755f9cb18e700007122cb",
	"codeLanguage": "coffeescript",
	"official": false,
	"configSchema": {
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524b3e3fff92f1f4f800000d",
			"majorVersion": 0
		}
	],
	"description": "This Component lets the Thang flash animated text above its head",
	"system": "display",
	"searchStrings": "shows text s sh sho show shows showst showste",
	"created": "2014-06-24T00:17:51.129Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 4,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "5162fab9c92b4c751e000274"
		},
		{
			"access": "read",
			"target": "public"
		}
	]
}