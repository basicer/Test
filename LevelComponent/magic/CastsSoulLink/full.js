{
	"_id": "577a0a96a889601f00004d94",
	"slug": "castssoullink",
	"searchStrings": "casts soul link c ca cas cast casts castss castsso castssou castssoul castssoull castssoulli",
	"name": "CastsSoulLink",
	"js": "var ArgumentError, CastsSoulLink,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };\n\nArgumentError = require('lib/world/errors').ArgumentError;\n\nCastsSoulLink = (function(_super) {\n  var SOUL_LINK_RANGE, forbiddenLinkers;\n\n  __extends(CastsSoulLink, _super);\n\n  CastsSoulLink.className = 'CastsSoulLink';\n\n  forbiddenLinkers = [];\n\n  SOUL_LINK_RANGE = 10;\n\n  function CastsSoulLink(config) {\n    CastsSoulLink.__super__.constructor.call(this, config);\n    this._soulLinkSpell = {\n      name: 'soul-link',\n      cooldown: this.cooldown,\n      specificCooldown: this.specificCooldown,\n      range: this.range\n    };\n    SOUL_LINK_RANGE = this.range;\n    delete this.cooldown;\n    delete this.specificCooldown;\n    delete this.range;\n  }\n\n  CastsSoulLink.prototype.attach = function(thang) {\n    CastsSoulLink.__super__.attach.call(this, thang);\n    return thang.addSpell(this._soulLinkSpell);\n  };\n\n  CastsSoulLink.prototype['perform_soul-link'] = function() {\n    var _ref, _ref1, _ref2;\n    this.linkB = ((_ref = this.castArguments) != null ? _ref[0] : void 0) || this;\n    this.linkA = this.target;\n    if (this.linkA === this.linkB) {\n      return;\n    }\n    if (this.linkB.team !== this.team || this.linkA.team !== this.team) {\n      return;\n    }\n    if (this.linkB.health <= 0 || this.linkA.health <= 0) {\n      return;\n    }\n    if ((_ref1 = this.linkA.type, __indexOf.call(forbiddenLinkers, _ref1) >= 0) || (_ref2 = this.linkB.type, __indexOf.call(forbiddenLinkers, _ref2) >= 0)) {\n      return;\n    }\n    if (this.distanceTo(this.linkA) > SOUL_LINK_RANGE || this.distance(this.linkB) > SOUL_LINK_RANGE) {\n      return;\n    }\n    return this.applySoulLink();\n  };\n\n  CastsSoulLink.prototype.applySoulLink = function() {\n    var e, link, _i, _len, _ref;\n    this.linkA.originalTakeDamage = this.linkA.originalTakeDamage || this.linkA.takeDamage;\n    this.linkB.originalTakeDamage = this.linkB.originalTakeDamage || this.linkB.takeDamage;\n    this.linkA.linkTargets = _.union(this.linkA.linkTargets || [this.linkA], this.linkB.linkTargets || [this.linkB]);\n    _ref = this.linkA.linkTargets;\n    for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n      link = _ref[_i];\n      link.linkTargets = this.linkA.linkTargets;\n    }\n    this.linkA.effects = (function() {\n      var _j, _len1, _ref1, _results;\n      _ref1 = this.linkA.effects;\n      _results = [];\n      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {\n        e = _ref1[_j];\n        if (e.name !== 'soul-link') {\n          _results.push(e);\n        }\n      }\n      return _results;\n    }).call(this);\n    this.linkB.effects = (function() {\n      var _j, _len1, _ref1, _results;\n      _ref1 = this.linkB.effects;\n      _results = [];\n      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {\n        e = _ref1[_j];\n        if (e.name !== 'soul-link') {\n          _results.push(e);\n        }\n      }\n      return _results;\n    }).call(this);\n    this.linkA.addEffect({\n      name: 'soul-link',\n      duration: 9001,\n      reverts: true,\n      setTo: this.linkedTakeDamage,\n      targetProperty: 'takeDamage'\n    });\n    this.linkB.addEffect({\n      name: 'soul-link',\n      duration: 9001,\n      reverts: true,\n      setTo: this.linkedTakeDamage,\n      targetProperty: 'takeDamage'\n    });\n    this.linkA.effects = (function() {\n      var _j, _len1, _ref1, _results;\n      _ref1 = this.linkA.effects;\n      _results = [];\n      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {\n        e = _ref1[_j];\n        if (e.name !== 'heal') {\n          _results.push(e);\n        }\n      }\n      return _results;\n    }).call(this);\n    this.linkB.effects = (function() {\n      var _j, _len1, _ref1, _results;\n      _ref1 = this.linkB.effects;\n      _results = [];\n      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {\n        e = _ref1[_j];\n        if (e.name !== 'heal') {\n          _results.push(e);\n        }\n      }\n      return _results;\n    }).call(this);\n    this.linkA.addEffect({\n      name: 'fear',\n      duration: 9001,\n      reverts: true,\n      setTo: true,\n      targetProperty: 'soulLinked'\n    });\n    return this.linkB.addEffect({\n      name: 'fear',\n      duration: 9001,\n      reverts: true,\n      setTo: true,\n      targetProperty: 'soulLinked'\n    });\n  };\n\n  CastsSoulLink.prototype.linkedTakeDamage = function(damage, attacker, momentum, fromSource) {\n    var linkTarget, liveLinks, _i, _len, _ref, _results;\n    if (momentum == null) {\n      momentum = null;\n    }\n    if (fromSource == null) {\n      fromSource = true;\n    }\n    liveLinks = _.filter(this.linkTargets, function(_l) {\n      return (_l != null ? _l.health : void 0) > 0;\n    });\n    if (fromSource) {\n      _ref = this.linkTargets;\n      _results = [];\n      for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n        linkTarget = _ref[_i];\n        _results.push(linkTarget != null ? linkTarget.takeDamage(damage / liveLinks.length, attacker, momentum, false) : void 0);\n      }\n      return _results;\n    } else {\n      return this.originalTakeDamage(damage, attacker, momentum);\n    }\n  };\n\n  return CastsSoulLink;\n\n})(Component);\n",
	"system": "magic",
	"creator": "57261bee23fccb2f009093c1",
	"original": "55fdadd16eec8f86050f0020",
	"watchers": [
		"537d01f484c54c6e05c05989"
	],
	"__v": 0,
	"commitMessage": "Diplomat submission for lang bg: 3 change(s).",
	"index": true,
	"parent": "57437ee2f2770320c70fb4a3",
	"dependencies": [
		{
			"original": "52f13c37528baa731827408d",
			"majorVersion": 0
		}
	],
	"description": "This gives the thang the ability to cast a soul linking spell.",
	"codeLanguage": "coffeescript",
	"configSchema": {
		"default": {
			"cooldown": 0.25,
			"specificCooldown": 10,
			"range": 25
		},
		"properties": {
			"cooldown": {
				"type": "number",
				"format": "seconds",
				"description": "The cast time, in seconds."
			},
			"range": {
				"format": "meters",
				"type": "number",
				"minimum": 0,
				"description": "The distance the spell can be cast over. Both targets must be within this range."
			},
			"specificCooldown": {
				"format": "seconds",
				"type": "number",
				"description": "The cooldown, in seconds."
			}
		}
	},
	"i18nCoverage": [
		"-",
		"pt-BR",
		"sk",
		"ru",
		"de-DE",
		"fr",
		"es-419",
		"nl-NL",
		"sr",
		"sv",
		"zh-HANT",
		"bg"
	],
	"patches": [],
	"created": "2016-07-04T07:04:54.981Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 26,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "537d01f484c54c6e05c05989"
		},
		{
			"access": "read",
			"target": "public"
		}
	]
}