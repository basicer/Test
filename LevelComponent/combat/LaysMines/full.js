{
	"_id": "53cc987a42d759d64be8ac66",
	"index": true,
	"slug": "laysmines",
	"name": "LaysMines",
	"codeLanguage": "coffeescript",
	"js": "var LaysMines, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nLaysMines = (function(_super) {\n  __extends(LaysMines, _super);\n\n  function LaysMines() {\n    _ref = LaysMines.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  LaysMines.className = 'LaysMines';\n\n  LaysMines.prototype.attach = function(thang) {\n    var layMineAction;\n    layMineAction = {\n      name: 'lay-mine',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown\n    };\n    delete this.cooldown;\n    delete this.specificCooldown;\n    LaysMines.__super__.attach.call(this, thang);\n    return thang.addActions(layMineAction);\n  };\n\n  LaysMines.prototype.layMine = function(targetPos) {\n    if (targetPos && !((targetPos.x != null) && (targetPos.y != null))) {\n      throw new ArgumentError(\"\" + this.id + \" needs an {x, y} position at which to lay a mine.\", \"layMine\", \"targetPos\", \"object\", targetPos);\n    }\n    this.setTargetPos(targetPos != null ? targetPos : Vector.add(this.pos, new Vector(this.mineLayingRange, 0).rotate(this.rotation)), 'layMine');\n    if (this.actions.move && this.distance(this.targetPos) > this.mineLayingRange) {\n      return this.setAction('move');\n    } else {\n      return this.setAction('lay-mine');\n    }\n  };\n\n  LaysMines.prototype.update = function() {\n    var mine, mineThang;\n    if (this.action === 'lay-mine' && !this.targetPos) {\n      return this.setAction('idle');\n    }\n    if (!(this.action === 'lay-mine' && this.distance(this.targetPos) < this.mineLayingRange && this.act())) {\n      return;\n    }\n    if (!this.mineSpriteName) {\n      mineThang = this.world.getThangByID(this.mineThangID);\n      if (!mineThang) {\n        console.log(this.id, \"LaysMines problem: couldn't find mine to lay for ID\", this.mineThangID);\n        return;\n      }\n      this.mineSpriteName = mineThang.spriteName;\n      this.mineComponents = _.cloneDeep(mineThang.components);\n    }\n    if (!this.mineSpriteName) {\n      return;\n    }\n    mine = this.spawn(this.mineSpriteName, this.mineComponents);\n    mine.pos = this.targetPos;\n    mine.addTrackedProperties(['pos', 'Vector']);\n    mine.keepTrackedProperty('pos');\n    this.setTargetPos(null);\n    mine.setExists(true);\n    this.hidden = false;\n    return this.alpha = 1;\n  };\n\n  return LaysMines;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "53c9ec0003039b0439ee74c9",
	"watchers": [
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"commitMessage": "Fixed bug with mines not laying.",
	"parent": "53cc57ef42d759d64be8ac4b",
	"official": false,
	"configSchema": {
		"properties": {
			"mineThangID": {
				"type": "string",
				"description": "ID of the template Mine Thang to lay.",
				"default": "Mine"
			},
			"mineLayingRange": {
				"type": "number",
				"minimum": 0,
				"format": "meters",
				"default": "8"
			},
			"cooldown": {
				"type": "number",
				"minimum": 0,
				"format": "seconds",
				"default": 0.5
			},
			"specificCooldown": {
				"type": "number",
				"format": "seconds",
				"minimum": 0
			}
		},
		"default": {
			"mineThangID": "Mine",
			"mineLayingRange": 8,
			"cooldown": 0.5,
			"specificCooldown": 0
		},
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [
		{
			"original": "524cbdc03ea855e0ab0000bb",
			"majorVersion": 0
		},
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		}
	],
	"description": "This Component lets the Thang lay mines.",
	"system": "combat",
	"searchStrings": "lays mines l la lay lays laysm laysmi laysmin",
	"created": "2014-07-21T04:35:06.944Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 6,
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