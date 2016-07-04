{
	"_id": "577a0adfa889601f00004de6",
	"searchStrings": "casts summon burl c ca cas cast casts castss castssu castssum castssumm castssummo castssummon castssummonb castssummonbu",
	"index": true,
	"slug": "castssummonburl",
	"name": "CastsSummonBurl",
	"js": "var CastsSummonBurl,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nCastsSummonBurl = (function(_super) {\n  __extends(CastsSummonBurl, _super);\n\n  CastsSummonBurl.className = 'CastsSummonBurl';\n\n  function CastsSummonBurl(config) {\n    CastsSummonBurl.__super__.constructor.call(this, config);\n    this._summonBurlSpell = {\n      name: 'summon-burl',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      duration: this.duration,\n      count: this.count\n    };\n    delete this.count;\n    delete this.duration;\n    delete this.cooldown;\n    delete this.specificCooldown;\n  }\n\n  CastsSummonBurl.prototype.attach = function(thang) {\n    var _ref, _ref1, _ref2;\n    this.burlThangType = ((_ref = this.requiredThangTypes) != null ? _ref : [])[0];\n    thang.requiredThangTypes = ((_ref2 = thang.requiredThangTypes) != null ? _ref2 : []).concat((_ref1 = this.requiredThangTypes) != null ? _ref1 : []);\n    if (this.burlThangType) {\n      thang.componentsForThangType(this.burlThangType);\n    }\n    delete this.requiredThangTypes;\n    CastsSummonBurl.__super__.attach.call(this, thang);\n    return thang.addSpell(this._summonBurlSpell);\n  };\n\n  CastsSummonBurl.prototype['getTarget_summon-burl'] = function() {\n    return this.getNearestEnemy();\n  };\n\n  CastsSummonBurl.prototype['perform_summon-burl'] = function() {\n    var angle, burl, distance, i, placementAttempts, targetPos, z, _i, _ref, _results;\n    if (!this.burlComponents) {\n      this.configureBurl();\n    }\n    if (!this.burlComponents) {\n      throw new ArgumentError(\"There was a problem loading the burl Thang Components.\");\n    }\n    _results = [];\n    for (i = _i = 0, _ref = this.spells['summon-burl'].count; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {\n      burl = this.spawn(this.burlSpriteName, this.burlComponents);\n      burl.keepTrackedProperty('pos');\n      if (this.aiSystem == null) {\n        this.aiSystem = this.world.getSystem(\"AI\");\n      }\n      angle = this.world.rand.randf() * 2 * Math.PI;\n      distance = this.world.rand.randf2(4, 8);\n      placementAttempts = 8;\n      while (placementAttempts--) {\n        targetPos = new Vector(this.pos.x + distance * Math.cos(angle), this.pos.y + distance * Math.sin(angle));\n        if (this.aiSystem.isPathClear(this.pos, targetPos, this, true)) {\n          break;\n        }\n        angle += Math.PI / 4;\n        distance *= 0.8;\n      }\n      z = burl.pos.z;\n      burl.pos = targetPos;\n      burl.pos.z = z + 1;\n      burl.velocity = new Vector(8, 0, 2).rotate(angle);\n      _results.push(typeof this.brake === \"function\" ? this.brake() : void 0);\n    }\n    return _results;\n  };\n\n  CastsSummonBurl.prototype.configureBurl = function() {\n    var allied, _ref, _ref1, _ref2;\n    if (this.burlThangType) {\n      this.burlComponents = _.cloneDeep(this.componentsForThangType(this.burlThangType));\n      this.burlSpriteName = (_ref = (_ref1 = _.find(this.world.thangTypes, {\n        original: this.burlThangType\n      })) != null ? _ref1.name : void 0) != null ? _ref : this.burlThangType;\n      if ((_ref2 = this.burlComponents) != null ? _ref2.length : void 0) {\n        if (allied = _.find(this.burlComponents, function(c) {\n          return c[1].team;\n        })) {\n          return allied[1].team = this.team;\n        }\n      } else {\n        return console.log(this.id, \"CastsSummonBurl problem: couldn't find burl to summon for type\", this.burlThangType);\n      }\n    } else {\n      return console.log(\"Couldn't find burlThangType!\");\n    }\n  };\n\n  return CastsSummonBurl;\n\n})(Component);\n",
	"system": "magic",
	"creator": "57261bee23fccb2f009093c1",
	"original": "5462e0843839c6e02811d1b6",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"__v": 0,
	"commitMessage": "Diplomat submission for lang bg: 1 change(s).",
	"parent": "5706979f2d457f2f00ca984d",
	"description": "This Component gives the Thang a summon burl spell.",
	"codeLanguage": "coffeescript",
	"dependencies": [
		{
			"original": "52f13c37528baa731827408d",
			"majorVersion": 0
		},
		{
			"original": "524cbdc03ea855e0ab0000bb",
			"majorVersion": 0
		}
	],
	"configSchema": {
		"properties": {
			"cooldown": {
				"type": "number",
				"minimum": 0,
				"format": "seconds"
			},
			"count": {
				"type": "number",
				"description": "Number of burls spawned.",
				"minimum": 1
			},
			"requiredThangTypes": {
				"type": "array",
				"description": "Contains a single element: the ThangType to use as a template for this Thang's burl.",
				"additionalProperties": true,
				"items": {
					"description": "The ThangType to use as a template for this Thang's burl.",
					"format": "thang-type",
					"type": "string"
				}
			},
			"specificCooldown": {
				"type": "number",
				"minimum": 0,
				"format": "seconds"
			}
		},
		"additionalProperties": false,
		"type": "object",
		"default": {
			"cooldown": 0.75,
			"specificCooldown": 12,
			"count": 1,
			"requiredThangTypes": [
				"530e5926c06854403ba68693"
			]
		}
	},
	"i18nCoverage": [
		"-",
		"de-DE",
		"fr",
		"ru",
		"zh-HANS",
		"sk",
		"pt-BR",
		"uk",
		"es-ES",
		"pl",
		"tr",
		"it",
		"el",
		"nl-NL",
		"es-419",
		"sr",
		"sv",
		"bg"
	],
	"patches": [],
	"created": "2016-07-04T07:06:07.456Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 26,
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