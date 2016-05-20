[
    {
        "snippets": {
            "io": {
                "tab": "devour",
                "code": "devour ${1:enemy}"
            },
            "lua": {
                "tab": "devour",
                "code": "self:devour(${1:enemy})"
            },
            "coffeescript": {
                "tab": "devour",
                "code": "@devour ${1:enemy}"
            },
            "clojure": {
                "tab": "devour",
                "code": "(.devour this ${1:enemy})"
            },
            "python": {
                "tab": "devour",
                "code": "self.devour(${1:enemy})"
            },
            "javascript": {
                "tab": "devour",
                "code": "this.devour(${1:enemy})"
            }
        },
        "args": [
            {
                "description": "The target of this function, friend or foe.",
                "example": "this.getNearestEnemy()",
                "type": "object",
                "name": "target"
            }
        ],
        "description": "The #{spriteName} can devour a target, dealing #{devourDamage} damage to it. If this kills the target, then the devour succeeds and the #{spriteName} gains its target's remaining hit points.",
        "type": "function",
        "name": "devour"
    },
    {
        "description": "How many units the #{spriteName} has successfully devoured, possibly for use with the `hatch` action.",
        "type": "number",
        "name": "devouredCount"
    },
    {
        "description": "How much damage the `devour` attack does.",
        "type": "number",
        "name": "devourDamage"
    }
]