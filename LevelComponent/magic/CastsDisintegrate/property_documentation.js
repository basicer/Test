[
    {
        "snippets": {
            "io": {
                "tab": "castDisintegrate",
                "code": "cast(\"disintegrate\", ${1:target})"
            },
            "lua": {
                "tab": "castDisintegrate",
                "code": "self:cast(\"disintegrate\", ${1:target})"
            },
            "clojure": {
                "tab": "castDisintegrate",
                "code": "(.cast this \"disintegrate\" ${1:target})"
            },
            "python": {
                "tab": "castDisintegrate",
                "code": "self.cast(\"disintegrate\", ${1:target})"
            },
            "javascript": {
                "tab": "castDisintegrate",
                "code": "this.cast(\"disintegrate\", ${1:target})"
            },
            "coffeescript": {
                "tab": "castDisintegrate",
                "code": "@cast \"disintegrate\", ${1:target}"
            }
        },
        "args": [
            {
                "default": "",
                "description": "The target on which to cast \"disintegrate\".",
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
        "description": "Casts a `\"disintegrate\"` spell on `target` if within #{spells.disintegrate.range}m, doing #{spells.disintegrate.damage} over one second.",
        "type": "function",
        "name": "castDisintegrate"
    }
]