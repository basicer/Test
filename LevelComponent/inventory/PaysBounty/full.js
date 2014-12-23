{
	"_id": "5499b8afa88ecca974d501d8",
	"index": true,
	"slug": "paysbounty",
	"name": "PaysBounty",
	"js": "var PaysBounty,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nPaysBounty = (function(_super) {\n  __extends(PaysBounty, _super);\n\n  PaysBounty.className = 'PaysBounty';\n\n  function PaysBounty(config) {\n    PaysBounty.__super__.constructor.call(this, config);\n    this.value = this.bountyGold;\n  }\n\n  PaysBounty.prototype.die = function() {\n    var inventory, _base, _ref, _ref1;\n    if (typeof this.addCurrentEvent === \"function\") {\n      this.addCurrentEvent('pay-bounty-gold');\n    }\n    if (((_ref = this.killer) != null ? _ref.team : void 0) && this.killer.team !== this.team && (inventory = this.world.getSystem('Inventory'))) {\n      inventory.addGoldForTeam(this.killer.team, (_ref1 = this.bountyGold) != null ? _ref1 : 0);\n      return typeof (_base = this.killer).showText === \"function\" ? _base.showText(\"+\" + (parseInt(this.bountyGold)), {\n        color: '#FFD700'\n      }) : void 0;\n    }\n  };\n\n  return PaysBounty;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "52f7f45d89fec100006eef81",
	"__v": 0,
	"commitMessage": "Adding \"value\" alias for \"bountyGold\".",
	"parent": "5420e70db278555105a76907",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"patches": [],
	"official": false,
	"configSchema": {
		"properties": {
			"bountyGold": {
				"type": "number",
				"minimum": 0,
				"description": "How much gold to give to the killer of this Thang.",
				"default": 5
			}
		},
		"id": "__base__",
		"additionalProperties": false,
		"type": "object",
		"default": {
			"bountyGold": 5
		}
	},
	"dependencies": [],
	"description": "This Component makes the Thang give gold to whoever kills it.",
	"system": "inventory",
	"searchStrings": "pays bounty p pa pay pays paysb paysbo paysbou paysboun",
	"created": "2014-12-23T18:47:11.320Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 14,
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