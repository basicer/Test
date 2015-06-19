[
    {
        "snippets": {
            "python": {
                "tab": "throw",
                "code": "self.throw(${1:target})"
            },
            "javascript": {
                "tab": "throw",
                "code": "this.throw(${1:target})"
            }
        },
        "args": [
            {
                "description": "The target unit to throw.",
                "example": "this.getNearestEnemy()",
                "type": "object",
                "name": "target"
            },
            {
                "description": "Optional: the target position toward which to throw the target, or just behind one's back if unspecified.",
                "example": {
                    "lua": "{x=20, y=40}",
                    "coffeescript": "{x: 20, y: 40}",
                    "python": "{\"x\": 20, \"y\": 40}",
                    "javascript": "{x: 20, y: 40}"
                },
                "type": "object",
                "name": "toPos"
            }
        ],
        "description": "The `throw` move doesn't do any damage, but hurls the target far behind the #{spriteName}'s head.",
        "type": "function",
        "name": "throw"
    }
]