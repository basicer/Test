[
    {
        "example": {
            "python": "container = self.findByType('stump')[0]\nself.pickUpItem(container)",
            "javascript": "var container = this.findByType('stump')[0];\nthis.pickUpItem(container);"
        },
        "args": [
            {
                "description": "The target of this function.",
                "example": "this.findByType(\"stump\")[0]",
                "type": "object",
                "name": "container"
            }
        ],
        "snippets": {
            "python": {
                "tab": "pickUpItem",
                "code": "self.pickUpItem(${1:container})"
            },
            "javascript": {
                "code": "this.pickUpItem(${1:container});",
                "tab": "pickUpItem"
            }
        },
        "description": "Use `pickUpItem` to take the top item off of another container's stack.",
        "type": "function",
        "name": "pickUpItem"
    },
    {
        "example": {
            "python": "container = self.findByType('stump')[0]\ndestination = self.findByType('stump')[1]\nself.pickUpItem(container)\nself.dropItem(destination)",
            "javascript": "var container = this.findByType('stump')[0];\nvar destination = this.findByType('stump')[1];\nthis.pickUpItem(container);\nthis.dropItem(destination);"
        },
        "args": [
            {
                "description": "The target of this function.",
                "example": "this.findByType(\"stump\")[0]",
                "type": "object",
                "name": "container"
            }
        ],
        "snippets": {
            "python": {
                "tab": "dropItem",
                "code": "self.dropItem(${1:container})"
            },
            "javascript": {
                "code": "this.dropItem(${1:container});",
                "tab": "dropItem"
            }
        },
        "description": "Use `dropItem` to drop the top item of your stack onto another container's stack.",
        "type": "function",
        "name": "dropItem"
    },
    {
        "example": {
            "python": "container = self.findByType('stump')[0]\nself.say(container.peekItem())\nself.pickUpItem(container)\nself.say(\"This should be the same: \" + self.peekItem())",
            "javascript": "var container = this.findByType('stump')[0];\nthis.say(container.peekItem());\nthis.pickUpItem(container);\nthis.say(\"This should be the same: \" + this.peekItem());"
        },
        "snippets": {
            "python": {
                "code": "self.peekItem()",
                "tab": "peekItem"
            },
            "javascript": {
                "code": "this.peekItem();",
                "tab": "peekItem"
            }
        },
        "description": "`peekItem` returns the top item of your stack.",
        "type": "function",
        "name": "peekItem"
    },
    {
        "example": {
            "python": "container = self.findByType('stump')[0]\nself.pickUpItem(container)\nself.say(\"I'm carrying: \" + self.viewStack())",
            "javascript": "var container = this.findByType('stump')[0];\nthis.pickUpItem(container);\nthis.say(\"I'm carrying: \" + this.viewStack());"
        },
        "snippets": {
            "python": {
                "tab": "viewStack",
                "code": "self.viewStack()"
            },
            "javascript": {
                "code": "this.viewStack();",
                "tab": "viewStack"
            }
        },
        "description": "`viewStack` returns an array of items in your stack, with index `length - 1` being the same as `peekItem`",
        "type": "function",
        "name": "viewStack"
    }
]