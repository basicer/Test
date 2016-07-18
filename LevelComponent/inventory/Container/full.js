{
	"_id": "578d0fd91c187c6500f5b23c",
	"searchStrings": "container c co con cont conta contai contain",
	"index": true,
	"slug": "container",
	"name": "Container",
	"js": "var Container, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nContainer = (function(_super) {\n  __extends(Container, _super);\n\n  function Container() {\n    _ref = Container.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  Container.className = 'Container';\n\n  Container.prototype.attach = function(thang) {\n    var dropAction, pickUpAction;\n    pickUpAction = {\n      name: 'pickUpItem',\n      cooldown: 0,\n      specificCooldown: 0\n    };\n    dropAction = {\n      name: 'dropItem',\n      cooldown: 0,\n      specificCooldown: 0\n    };\n    Container.__super__.attach.call(this, thang);\n    thang.containerStack = [];\n    thang.addActions(pickUpAction);\n    return thang.addActions(dropAction);\n  };\n\n  Container.prototype.update = function() {\n    if (!this.exists) {\n      return;\n    }\n    if (!((this.intent === \"pickUpItem\" || this.intent === \"dropItem\") && this.distance(this.getTargetPos()) <= 5.01 && this.act())) {\n      return;\n    }\n    if (this.intent === \"pickUpItem\") {\n      this.doPickUpItem();\n    } else if (this.intent === \"dropItem\") {\n      this.doDropItem();\n    }\n    if (typeof this.unblock === \"function\") {\n      this.unblock();\n    }\n    this.intent = void 0;\n    this.setTarget(null);\n    return this.setAction('idle');\n  };\n\n  Container.prototype.pickUpItem = function(object) {\n    if (object == null) {\n      return;\n    }\n    this.setTarget(object);\n    this.intent = \"pickUpItem\";\n    if (this.distance(object) >= 5) {\n      this.setTarget(object);\n      this.setAction(\"move\");\n    } else {\n      this.setAction(\"pickUpItem\");\n    }\n    return typeof this.block === \"function\" ? this.block() : void 0;\n  };\n\n  Container.prototype.dropItem = function(object) {\n    if (this.peekItem() == null) {\n      this.sayWithoutBlocking(\"I don't have an item to drop!\");\n      return;\n    }\n    this.intent = \"dropItem\";\n    if ((object != null) && (object.pushItem != null) && (object.popItem != null)) {\n      this.setTarget(object);\n    } else if ((object != null) && (object.pos != null)) {\n      this.setTarget(object);\n    } else if ((object != null) && typeof object.x === 'number' && typeof object.y === 'number') {\n      this.setTargetPos({\n        x: object.x,\n        y: object.y\n      });\n    } else {\n      this.setTargetPos(this.pos);\n    }\n    if (this.distance(this.getTargetPos()) >= 5) {\n      this.setAction('move');\n    }\n    return typeof this.block === \"function\" ? this.block() : void 0;\n  };\n\n  Container.prototype.doPickUpItem = function() {\n    var item;\n    if (this.containerStack.length >= this.stackSize) {\n      this.sayWithoutBlocking(\"I can't carry any more items!\");\n      return;\n    }\n    if ((this.target.pushItem != null) && (this.target.popItem != null)) {\n      item = this.target.popItem();\n      return this.pushItem(item);\n    } else if ((this.target.setParent != null) && (this.target.removeParent != null)) {\n      if (this.target.parent == null) {\n        return this.pushItem(this.target);\n      } else {\n        return this.sayWithoutBlocking(\"That item is already in a container!\");\n      }\n    } else {\n      return this.sayWithoutBlocking(\"I don't think that is an item, or a container!\");\n    }\n  };\n\n  Container.prototype.doDropItem = function() {\n    var item;\n    if (typeof this.brake === \"function\") {\n      this.brake();\n    }\n    if (this.target != null) {\n      if ((this.target.pushItem != null) && (this.target.popItem != null)) {\n        item = this.popItem();\n        return this.target.pushItem(item);\n      } else {\n        item = this.popItem();\n        item.pos.x = this.getTargetPos().x;\n        return item.pos.y = this.getTargetPos().y;\n      }\n    } else {\n      item = this.popItem();\n      item.pos.x = this.getTargetPos().x;\n      return item.pos.y = this.getTargetPos().y;\n    }\n  };\n\n  Container.prototype.pushItem = function(object) {\n    var item, zPos, _i, _len, _ref1;\n    if ((object.setParent != null) && (object.removeParent != null)) {\n      zPos = this.height * (this.scaleFactorY || 1);\n      _ref1 = this.containerStack;\n      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n        item = _ref1[_i];\n        zPos += (item.scaleFactorY || 1) * item.height * 3;\n      }\n      zPos += (object.scaleFactorY || 1) * object.height;\n      this.containerStack.push(object);\n      object.anchorHeight = zPos;\n      object.setParent(this);\n      return object;\n    } else {\n      return null;\n    }\n  };\n\n  Container.prototype.popItem = function() {\n    var item;\n    item = this.containerStack[this.containerStack.length - 1];\n    item.removeParent();\n    item.pos.z = 0;\n    item.anchorHeight = null;\n    this.containerStack.pop();\n    return item;\n  };\n\n  Container.prototype.peekItem = function() {\n    var item;\n    item = this.containerStack[this.containerStack.length - 1];\n    return item;\n  };\n\n  Container.prototype.viewStack = function() {\n    var item, stack, _i, _len, _ref1;\n    stack = [];\n    _ref1 = this.containerStack;\n    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {\n      item = _ref1[_i];\n      stack.push(item);\n    }\n    return stack;\n  };\n\n  return Container;\n\n})(Component);\n",
	"system": "inventory",
	"creator": "54b1773a75e3055205e5a449",
	"original": "56f460b37af7e626020b92bf",
	"watchers": [
		"537d01f484c54c6e05c05989",
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"commitMessage": "Brake when dropping items",
	"parent": "5755c0c2d63ca4440019b4ba",
	"dependencies": [
		{
			"original": "524b85837fc0f6d519000020",
			"majorVersion": 0
		}
	],
	"configSchema": {
		"default": {
			"stackSize": 8,
			"sizeLimit": false
		},
		"properties": {
			"stackSize": {
				"type": "integer",
				"minimum": 1,
				"additionalProperties": false,
				"format": "items",
				"default": 8,
				"description": "The maximum amount of items the stack can hold"
			},
			"sizeLimit": {
				"type": "boolean",
				"default": false,
				"description": "Checks the Size property of the items being funneled in and prevents anything being placed which is large than the top of the stack"
			}
		}
	},
	"description": "This allows the component to pick up and drop items.",
	"codeLanguage": "coffeescript",
	"created": "2016-07-18T17:20:25.280Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 15,
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