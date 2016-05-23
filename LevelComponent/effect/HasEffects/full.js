{
	"_id": "57437ee0f2770320c70fb494",
	"slug": "haseffects",
	"name": "HasEffects",
	"js": "var HasEffects, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };\n\nHasEffects = (function(_super) {\n  __extends(HasEffects, _super);\n\n  function HasEffects() {\n    _ref = HasEffects.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  HasEffects.className = \"HasEffects\";\n\n  HasEffects.prototype.attach = function(thang) {\n    HasEffects.__super__.attach.call(this, thang);\n    thang.effects = [];\n    thang.effectNames = [];\n    thang.addTrackedProperties(['effectNames', 'array']);\n    thang.hasEffects = true;\n    thang.basePropertyValues = {};\n    return thang.effectSystem = thang.world.getSystem('Effect');\n  };\n\n  HasEffects.prototype.addEffect = function(effect) {\n    var name, res, _base, _name;\n    if (!(this[effect.targetProperty] !== void 0 || effect.setTo)) {\n      return;\n    }\n    effect = _.clone(effect);\n    if (effect.duration) {\n      if (effect.timeSinceStart == null) {\n        effect.timeSinceStart = 0;\n      }\n    }\n    if (effect.repeatsEvery) {\n      if (effect.timeSinceRepeat == null) {\n        effect.timeSinceRepeat = 0;\n      }\n    }\n    name = \"effect-begin:\" + effect.name;\n    if (__indexOf.call(this.currentEvents, name) < 0) {\n      this.addCurrentEvent(name);\n    }\n    if (effect.reverts || effect.repeatsEvery || effect.duration) {\n      this.effects.push(effect);\n      this.updateRegistration();\n    }\n    if (effect.reverts) {\n      if (effect.reverts) {\n        if ((_base = this.basePropertyValues)[_name = effect.targetProperty] == null) {\n          _base[_name] = this[effect.targetProperty];\n        }\n      }\n      this.updateProperty(effect.targetProperty);\n    } else {\n      this.applyEffect(effect);\n    }\n    this.updateEffectNames();\n    this.keepTrackedProperty('effectNames');\n    return res = this.keepTrackedProperty(effect.targetProperty);\n  };\n\n  HasEffects.prototype.updateEffectNames = function() {\n    var e;\n    return this.effectNames = _.uniq((function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.effects;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        e = _ref1[_i];\n        _results.push(e.name);\n      }\n      return _results;\n    }).call(this));\n  };\n\n  HasEffects.prototype.applyEffect = function(effect) {\n    var value;\n    value = this[effect.targetProperty];\n    return this[effect.targetProperty] = this.operate(value, [effect]);\n  };\n\n  HasEffects.prototype.updateProperty = function(targetProperty) {\n    var e, effects, value;\n    effects = (function() {\n      var _i, _len, _ref1, _results;\n      _ref1 = this.effects;\n      _results = [];\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        e = _ref1[_i];\n        if (e.targetProperty === targetProperty) {\n          _results.push(e);\n        }\n      }\n      return _results;\n    }).call(this);\n    value = this.basePropertyValues[targetProperty];\n    return this[targetProperty] = this.operate(value, effects);\n  };\n\n  HasEffects.prototype.operate = function(value, effects) {\n    var effect, _i, _j, _k, _len, _len1, _len2;\n    for (_i = 0, _len = effects.length; _i < _len; _i++) {\n      effect = effects[_i];\n      if (effect.setTo != null) {\n        value = effect.setTo;\n      }\n    }\n    for (_j = 0, _len1 = effects.length; _j < _len1; _j++) {\n      effect = effects[_j];\n      if (effect.addend) {\n        if (effect.addend < 0 && effect.targetProperty === 'health') {\n          value += effect.addend * this.damageMitigationFactor;\n        } else {\n          value += effect.addend;\n        }\n      }\n    }\n    for (_k = 0, _len2 = effects.length; _k < _len2; _k++) {\n      effect = effects[_k];\n      if (effect.factor != null) {\n        value *= effect.factor;\n      }\n    }\n    return value;\n  };\n\n  HasEffects.prototype.updateEffects = function(specificEffectName) {\n    var delta, effect, effects, endingEffects, index, propertiesToUpdate, property, _i, _j, _k, _len, _len1, _len2, _ref1, _ref2;\n    if (specificEffectName == null) {\n      specificEffectName = null;\n    }\n    delta = this.world.dt;\n    propertiesToUpdate = [];\n    endingEffects = [];\n    effects = this.effects.slice();\n    for (_i = 0, _len = effects.length; _i < _len; _i++) {\n      effect = effects[_i];\n      if (specificEffectName && effect.name !== specificEffectName) {\n        continue;\n      }\n      if (effect.repeatsEvery && (!this.dead || effect.targetProperty === 'alpha')) {\n        effect.timeSinceRepeat += delta;\n        while (effect.repeatsEvery < effect.timeSinceRepeat) {\n          this.applyEffect(effect);\n          effect.timeSinceRepeat -= effect.repeatsEvery;\n        }\n      }\n      if (effect.duration) {\n        effect.timeSinceStart += delta;\n        if (effect.duration < effect.timeSinceStart || (this.dead && effect.targetProperty !== 'alpha')) {\n          if (typeof effect.onRevert === \"function\") {\n            effect.onRevert();\n          }\n          if (effect.reverts) {\n            propertiesToUpdate.push(effect.targetProperty);\n          }\n          endingEffects.push(effect.name);\n          if (effect.revertsProportionally) {\n            this.undoEffectProportionally(effect);\n          }\n          index = this.effects.indexOf(effect);\n          this.effects.splice(index, 1);\n        }\n      }\n    }\n    _ref1 = _.uniq(propertiesToUpdate);\n    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {\n      property = _ref1[_j];\n      this.updateProperty(property);\n    }\n    _ref2 = _.uniq(endingEffects);\n    for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {\n      effect = _ref2[_k];\n      this.addCurrentEvent(\"effect-end:\" + effect);\n    }\n    if (endingEffects.length) {\n      this.updateEffectNames();\n    }\n    if (!this.effects.length) {\n      return this.updateRegistration();\n    }\n  };\n\n  HasEffects.prototype.hasEffect = function(name) {\n    return Boolean(_.find(this.effects, {\n      name: name\n    }));\n  };\n\n  HasEffects.prototype.undoEffectProportionally = function(effect) {\n    var original, undoEffect;\n    original = this[effect.targetProperty];\n    undoEffect = {};\n    if (effect.addend) {\n      undoEffect.addend = -effect.addend;\n    }\n    if (effect.factor) {\n      undoEffect.factor = 1 / effect.factor;\n    }\n    return this[effect.targetProperty] = this.operate(this[effect.targetProperty], [undoEffect]);\n  };\n\n  /*\n  Things not handled because I couldn't think of good use cases for them:\n  \n  * mixing effects that do and do not revert for the same property\n  * other systems or components changing properties with effects that revert\n  * revert and repeatsEvery playing nice with one another\n  */\n\n\n  /*\n  @effectSchema =\n    type: 'object'\n    additionalProperties: false\n    properties:\n      name:\n        type: 'string'\n        description: 'Human readable name of the effect.'\n      duration:\n        type: 'number'\n        description: 'Time in seconds that the effect lasts.'\n      repeatsEvery:\n        type: 'number'\n        description: 'Repeats the effect every x seconds.'\n      reverts:\n        type: 'boolean'\n        description: 'Property change goes back once the effect ends.'\n      revertsProportionally:\n        type: 'boolean'\n        description: 'Property may change over time by outside forces.\n          Recalculate when effect is over, reversing the calculation.\n          So if factor is 0.5, initial value is 100, value goes to 50,\n          then decreases by outside forces to 40, revert goes to 80\n          instead of 100. This is mainly for health effects.'\n      onRevert:\n        type: 'function'\n        description: 'Called when the effect ends, right before it reverts.'\n      targetProperty:\n        type: 'string'\n        description: 'Property being affected.'\n      setTo:\n        description: 'Sets the property to this value.'\n      addend:\n        type: 'number'\n        description: 'Adds to the property value (after setTo).'\n      factor:\n        type: 'number'\n        description: 'Multiplies the property by the value (after setTo and any addends).'\n  */\n\n\n  return HasEffects;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "52e95818a3ca8546b7000001",
	"__v": 2,
	"commitMessage": "i18n patch(es)",
	"parent": "573faadb096b962600ff784f",
	"watchers": [
		"512ef4805a67a8c507000001",
		"5162fab9c92b4c751e000274"
	],
	"codeLanguage": "coffeescript",
	"patches": [
		"577a1736a889601f00006643",
		"577a1929ba80731f00d0579e"
	],
	"official": false,
	"configSchema": {
		"id": "__base__",
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [],
	"description": "This Component makes the Thang susceptible to effects.",
	"system": "effect",
	"searchStrings": "has effects h ha has hase hasef haseff haseffe haseffec",
	"i18nCoverage": [
		"-",
		"ru",
		"gl",
		"de-DE",
		"fr",
		"zh-HANS",
		"sk",
		"it",
		"uk",
		"sv",
		"es-419",
		"pt-BR",
		"pl"
	],
	"index": true,
	"created": "2016-05-23T22:06:24.918Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 82,
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