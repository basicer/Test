[
    {
        "snippets": {
            "io": {
                "tab": "castIceRink",
                "code": "cast(\"ice-rink\", ${1:target})"
            },
            "lua": {
                "tab": "castIceRink",
                "code": "self:cast(\"ice-rink\", ${1:target})"
            },
            "clojure": {
                "tab": "castIceRink",
                "code": "(.cast this \"ice-rink\" ${1:target})"
            },
            "python": {
                "tab": "castIceRink",
                "code": "self.cast(\"ice-rink\", ${1:target})"
            },
            "javascript": {
                "tab": "castIceRink",
                "code": "this.cast(\"ice-rink\", ${1:target})"
            },
            "coffeescript": {
                "tab": "castIceRink",
                "code": "@cast \"ice-rink\", ${1:target}"
            }
        },
        "args": [
            {
                "default": "",
                "description": "The target on which to cast \"ice-rink\".",
                "example": {
                    "io": "findNearestEnemy",
                    "lua": "self:findNearestEnemy()",
                    "clojure": "(.findNearestEnemy this)",
                    "coffeescript": "@findNearestEnemy()",
                    "python": "self.findNearestEnemy()",
                    "javascript": "this.findNearestEnemy()"
                },
                "type": "object",
                "name": "target"
            }
        ],
        "description": "Casts an `\"ice-rink\"` spell on `target` if within #{spells.ice-rink.range}m, creating an `\"ice-rink\"` field with a radius of #{spells.ice-rink.radius}m around the target, causing all units to slide on the slippery ice for #{spells.ice-rink.duration} seconds.",
        "type": "function",
        "name": "castIceRink"
    }
]