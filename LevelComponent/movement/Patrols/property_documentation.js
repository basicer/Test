[
    {
        "snippets": {
            "python": {
                "tab": "patrol",
                "code": "self.patrol(${1:points})"
            },
            "javascript": {
                "tab": "patrol",
                "code": "this.patrol(${1:points})"
            }
        },
        "args": [
            {
                "default": "",
                "description": "An array of positions to move between.",
                "example": "[{x: 15, y: 45}, {x: 30, y: 40}, {x: 25, y: 35}]",
                "type": "array",
                "name": "patrolPoints"
            }
        ],
        "description": "The `patrol` method causes the #{spriteName} to move between the given waypoints in a loop. When combined with code to `attack` nearby enemies, you can use it to guard an area.",
        "type": "function",
        "name": "patrol"
    }
]