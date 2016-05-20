[
    {
        "snippets": {
            "io": {
                "tab": "confuse",
                "code": "cast(\"confuse\", ${1:target})"
            },
            "lua": {
                "tab": "confuse",
                "code": "self:cast(\"confuse\", ${1:target})"
            },
            "clojure": {
                "tab": "confuse",
                "code": "(.cast this \"confuse\" ${1:target})"
            },
            "python": {
                "tab": "confuse",
                "code": "self.cast(\"confuse\", ${1:target})"
            },
            "javascript": {
                "tab": "confuse",
                "code": "this.cast(\"confuse\", ${1:target})"
            },
            "coffeescript": {
                "tab": "confuse",
                "code": "@cast \"confuse\", ${1:target}"
            }
        },
        "args": [
            {
                "default": "",
                "description": "The target on which to cast \"confuse\".",
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
        "description": "Casts a `\"confuse\"` spell on `target` if within #{spells.confuse.range}m, causing it to attack the nearest nearby unit without discrimination or run in a random direction. Lasts #{spells.confuse.duration} seconds.",
        "type": "function",
        "name": "castConfuse"
    }
]