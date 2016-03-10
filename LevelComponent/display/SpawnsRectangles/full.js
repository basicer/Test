{
	"_id": "56e2067b6fccab2400c5d42c",
	"slug": "spawnsrectangles",
	"name": "SpawnsRectangles",
	"js": "var SpawnsRectangles, Vector,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nVector = require('lib/world/vector');\n\nSpawnsRectangles = (function(_super) {\n  __extends(SpawnsRectangles, _super);\n\n  SpawnsRectangles.className = 'SpawnsRectangles';\n\n  function SpawnsRectangles(config) {\n    SpawnsRectangles.__super__.constructor.call(this, config);\n    this._rectAction = {\n      name: 'addRect',\n      cooldown: 1,\n      specificCooldown: 2\n    };\n  }\n\n  SpawnsRectangles.prototype.attach = function(thang) {\n    SpawnsRectangles.__super__.attach.call(this, thang);\n    thang.spawnedRectangles = [];\n    return thang.addActions(this._rectAction);\n  };\n\n  SpawnsRectangles.prototype.addRect = function(x, y, width, height) {\n    var rect, rectangleThang, thang, xPos, yPos, _i, _len, _ref;\n    x = x * 4;\n    y = (y + height) * 4;\n    width *= 4;\n    height *= 4;\n    rectangleThang = this.world.getThangByID(this.rectangleThangID);\n    if (!rectangleThang) {\n      console.log(this.id, \"SpawnsRectangles problem: couldn't find rectangle template for ID\", this.rectangleThangID);\n      return;\n    }\n    rectangleThang.setExists(false);\n    this.rectangleSpriteName = rectangleThang.spriteName;\n    this.rectangleComponents = _.cloneDeep(rectangleThang.components);\n    if (!this.rectangleSpriteName) {\n      return;\n    }\n    rect = this.spawn(this.rectangleSpriteName, this.rectangleComponents);\n    rect.pos.x = x + width / 2;\n    rect.pos.y = y - height / 2;\n    rect.width = width;\n    rect.height = height;\n    rect.scaleFactorX = 1 / 5 * width;\n    rect.scaleFactorY = 1 / 6.7 * height;\n    rect.keepTrackedProperty('scaleFactorX');\n    rect.keepTrackedProperty('scaleFactorY');\n    rect.addTrackedProperties(['pos', 'Vector'], ['width', 'number'], ['height', 'number']);\n    rect.keepTrackedProperty('pos');\n    rect.keepTrackedProperty('width');\n    rect.keepTrackedProperty('height');\n    this.spawnedRectangles.push(rect);\n    if (typeof rect.addCurrentEvent === \"function\") {\n      rect.addCurrentEvent('spawned');\n    }\n    _ref = this.world.thangs;\n    for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n      thang = _ref[_i];\n      if (thang.spriteName === 'Coin') {\n        if (rect.contains(thang)) {\n          if (thang.rectArray === void 0 || thang.rectArray === null) {\n            thang.rectArray = [];\n          }\n          thang.rectArray.push(rect.id);\n          thang.setExists(false);\n          xPos = (thang.pos.x - 2) / 4;\n          yPos = (thang.pos.y - 2) / 4;\n          if (this.navGrid != null) {\n            this.navGrid[xPos][yPos] = \"Rectangle\";\n          }\n        }\n      }\n    }\n    return rect;\n  };\n\n  SpawnsRectangles.prototype.removeRectAt = function(x, y) {\n    var rect, thang, xPos, yPos, _i, _j, _len, _len1, _ref, _ref1;\n    _ref = this.spawnedRectangles;\n    for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n      rect = _ref[_i];\n      if (rect.contains({\n        pos: new Vector(x, y)\n      })) {\n        if (typeof rect.addCurrentEvent === \"function\") {\n          rect.addCurrentEvent('removed');\n        }\n        _ref1 = this.world.thangs;\n        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {\n          thang = _ref1[_j];\n          if (!thang.exists && thang.spriteName === 'Coin') {\n            if ((thang.rectArray != null) && thang.rectArray.indexOf(rect.id) !== -1) {\n              thang.rectArray.splice(thang.rectArray.indexOf(rect.id), 1);\n              if (thang.rectArray.length === 0) {\n                thang.setExists(true);\n                xPos = (thang.pos.x - 2) / 4;\n                yPos = (thang.pos.y - 2) / 4;\n                if (this.navGrid != null) {\n                  this.navGrid[xPos][yPos] = \"Coin\";\n                }\n              }\n            }\n          }\n        }\n        rect.setExists(false);\n        this.spawnedRectangles = _.without(this.spawnedRectangles, rect);\n        break;\n      }\n    }\n    return rect;\n  };\n\n  return SpawnsRectangles;\n\n})(Component);\n",
	"creator": "537d01f484c54c6e05c05989",
	"original": "52ae5aa7a4dcd44152000020",
	"__v": 0,
	"commitMessage": "Makes the navGrid update coin positions into 'rectangle' positions when placing coins, fixes removeRectangleAt",
	"parent": "56e1fe9a3bf8cd1f00619565",
	"index": true,
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"patches": [],
	"official": false,
	"configSchema": {
		"properties": {
			"rectangleThangID": {
				"type": "string",
				"description": "The ID of a Thang to use as a template for this Thang's rectangles, like \"Rectangle1\".",
				"format": "thang"
			}
		},
		"id": "__base__",
		"additionalProperties": false,
		"type": "object",
		"default": {
			"rectangleThangID": ""
		}
	},
	"dependencies": [
		{
			"original": "524cbdc03ea855e0ab0000bb",
			"majorVersion": 0
		}
	],
	"description": "This Component lets the Thang create new rectangles for display.",
	"system": "display",
	"searchStrings": "spawns rectangles s sp spa spaw spawn spawns spawnsr spawnsre spawnsrec spawnsrect spawnsrecta spawnsrectan spawnsrectang spawnsrectangl",
	"created": "2016-03-10T23:42:51.034Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 31,
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