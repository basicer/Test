{
	"_id": "573f9a393e910f115e5e461e",
	"searchStrings": "announces actions a an ann anno annou announ announc announce announces announcesa announcesac announcesact announcesacti announcesactio",
	"index": true,
	"slug": "announcesactions",
	"name": "AnnouncesActions",
	"js": "var AnnouncesActions, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };\n\nAnnouncesActions = (function(_super) {\n  __extends(AnnouncesActions, _super);\n\n  function AnnouncesActions() {\n    _ref = AnnouncesActions.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  AnnouncesActions.className = 'AnnouncesActions';\n\n  AnnouncesActions.prototype.attach = function(thang) {\n    AnnouncesActions.__super__.attach.call(this, thang);\n    return thang.announcedActionMessages = [];\n  };\n\n  AnnouncesActions.prototype.announceAction = function(action, force) {\n    var message, messages, oldAction, _ref1;\n    if (force == null) {\n      force = false;\n    }\n    oldAction = this.action;\n    if (action == null) {\n      action = this.action;\n    }\n    if (!action || action === 'idle') {\n      return;\n    }\n    if (!this.say) {\n      return;\n    }\n    if (this.sayMessage && !(_ref1 = this.sayMessage, __indexOf.call(this.announcedActionMessages, _ref1) >= 0) && !force) {\n      return;\n    }\n    message = action;\n    if (this.target) {\n      message += ' ' + this.target.id;\n    }\n    if (message === 'attack Hero Placeholder') {\n      if (__indexOf.call(this.announcedActionMessages, message) >= 0) {\n        return;\n      }\n      if (!force) {\n        this.announcedActionMessages.push(message);\n      }\n      messages = ['For Thoktar!', 'Bones!', 'Behead!', 'Destroy!', 'Die, humans!'];\n      if (this.actionAnnounceRandomSeed == null) {\n        this.actionAnnounceRandomSeed = this.world.rand.randn();\n      }\n      message = messages[this.actionAnnounceRandomSeed % messages.length];\n    } else {\n      if (!force) {\n        this.announcedActionMessages.push(message);\n      }\n    }\n    this.clearSpeech();\n    this.sayWithoutBlocking(message, 2);\n    return this.action = oldAction;\n  };\n\n  return AnnouncesActions;\n\n})(Component);\n",
	"system": "hearing",
	"creator": "512ef4805a67a8c507000001",
	"original": "5454edabd351b630bfcd2588",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Use new method of engine-based say()ing without block()ing.",
	"parent": "5483ca16221d78630cd49c54",
	"description": "This Component makes the Thang announce its own actions.",
	"dependencies": [
		{
			"original": "524b7b9f7fc0f6d519000015",
			"majorVersion": 0
		}
	],
	"created": "2016-05-20T23:14:01.431Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 9,
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