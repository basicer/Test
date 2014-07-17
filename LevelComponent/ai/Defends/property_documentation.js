[
    {
        "snippets": {
            "python": {
                "tab": "defend",
                "code": "self.defend(${1:target})"
            },
            "javascript": {
                "tab": "defend",
                "code": "this.defend(${1:target})"
            }
        },
        "args": [
            {
                "description": "The target unit to defend.",
                "example": {
                    "coffeescript": "@getNearestFriend()",
                    "python": "self.getNearestFriend()",
                    "javascript": "this.getNearestFriend()"
                },
                "type": "object",
                "name": "target"
            }
        ],
        "description": "The `defend` method makes the #{spriteName} follow and defend a target unit, attacking other enemy units that come within `attackRange` of #{attackRange}.",
        "type": "function",
        "name": "defend"
    },
    {
        "snippets": {
            "python": {
                "tab": "defendPos",
                "code": "self.defendPos(${1:targetPos})"
            },
            "javascript": {
                "tab": "defendPos",
                "code": "this.defendPos(${1:targetPos})"
            }
        },
        "args": [
            {
                "description": "The target position to defend.",
                "example": {
                    "coffeescript": "{x: 10, y: 20}",
                    "python": "{\"x\": 10, \"y\": 20}",
                    "javascript": "{x: 10, y: 20}"
                },
                "type": "object",
                "name": "targetPos"
            }
        ],
        "description": "The `defendPos` method makes the #{spriteName} move to and defend a target position, attacking other enemy units that come within `attackRange` of #{attackRange}.",
        "type": "function",
        "name": "defendPos"
    }
]