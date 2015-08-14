[
    {
        "snippets": {
            "io": {
                "tab": "scattershot",
                "code": "scattershot ${1:enemy}"
            },
            "lua": {
                "tab": "scattershot",
                "code": "self:scattershot(${1:enemy})"
            },
            "clojure": {
                "tab": "scattershot",
                "code": "(.scattershot this ${1:enemy})"
            },
            "python": {
                "tab": "scattershot",
                "code": "self.scattershot(${1:enemy})"
            },
            "coffeescript": {
                "tab": "scattershot",
                "code": "@scattershot ${1:enemy}"
            },
            "javascript": {
                "tab": "scattershot",
                "code": "this.scattershot(${1:enemy})"
            }
        },
        "args": [
            {
                "description": "Optional: the target (unit) or targetPos ({x:, y} coordinate) to center the scattershot toward.",
                "example": "this.getNearestEnemy()",
                "type": "object",
                "name": "target"
            }
        ],
        "description": "The `scattershot` ability releases a spray of #{scattershotCount} missiles within an arc of #{scattershotArcLength} radians towards an optional target, or straight in front of the #{spriteName}.",
        "type": "function",
        "name": "scattershot"
    }
]