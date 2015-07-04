{
	"_id": "5597fd54f935758905fbbdad",
	"slug": "givesinstructions",
	"searchStrings": "gives instructions g gi giv give gives givesi givesin givesins givesinst givesinstr givesinstru givesinstruc givesinstruct givesinstructi givesinstructio",
	"name": "GivesInstructions",
	"js": "var GivesInstructions, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nGivesInstructions = (function(_super) {\n  __extends(GivesInstructions, _super);\n\n  function GivesInstructions() {\n    _ref = GivesInstructions.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  GivesInstructions.className = 'GivesInstructions';\n\n  GivesInstructions.prototype.chooseAction = function() {\n    this.hero = this.world.getThangByID('Hero Placeholder');\n    if (this.distanceSquared(this.hero) < this.range) {\n      return this.say(this.message);\n    }\n  };\n\n  return GivesInstructions;\n\n})(Component);\n",
	"system": "ai",
	"creator": "531c8c3ccf439d790a23af04",
	"original": "55913e3d3b4c5eda0d8ca2e4",
	"watchers": [
		"531c8c3ccf439d790a23af04"
	],
	"__v": 0,
	"description": "This Component makes the Thang say a message if the hero is close enough.",
	"codeLanguage": "coffeescript",
	"dependencies": [
		{
			"original": "524b7b9f7fc0f6d519000015",
			"majorVersion": 0
		}
	],
	"configSchema": {
		"properties": {
			"message": {
				"additionalProperties": false,
				"type": "string",
				"description": "Message the thang will say.",
				"default": "I have nothing to say."
			},
			"range": {
				"type": "number",
				"minimum": 0,
				"default": 10,
				"description": "How close the hero must come before the message is spoken."
			}
		}
	},
	"commitMessage": "",
	"parent": "5597f94c8dc42d86056a16b3",
	"index": true,
	"created": "2015-07-04T15:35:48.071Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 18,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "531c8c3ccf439d790a23af04"
		},
		{
			"access": "read",
			"target": "public"
		}
	]
}