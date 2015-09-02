[
    {
        "snippets": {
            "io": {
                "tab": "flame-armor",
                "code": "cast(\"flame-armor\", ${1:target})"
            },
            "lua": {
                "tab": "flame-armor",
                "code": "self:cast(\"flame-armor\", ${1:target})"
            },
            "clojure": {
                "tab": "flame-armor",
                "code": "(.cast this \"flame-armor\" ${1:target})"
            },
            "python": {
                "tab": "flame-armor",
                "code": "self.cast(\"flame-armor\", ${1:target})"
            },
            "javascript": {
                "tab": "flame-armor",
                "code": "this.cast(\"flame-armor\", ${1:target})"
            },
            "coffeescript": {
                "tab": "flame-armor",
                "code": "@cast \"flame-armor\", ${1:target}"
            }
        },
        "args": [
            {
                "default": "",
                "description": "The target on which to cast \"flame-armor\".",
                "example": {
                    "io": "findNearestEnemy",
                    "lua": "self",
                    "clojure": "(.findNearestEnemy this)",
                    "coffeescript": "@",
                    "python": "self",
                    "javascript": "this"
                },
                "type": "object",
                "name": "target"
            }
        ],
        "description": "Casts a `\"flame-armor\"` spell on `target` if within #{spells[flame-armor].range}m, granting #{spells[flame-armor].healthFactor}x `health` and `maxHealth` for #{spells['flame-armor'].duration} seconds.  During that time, any enemy that attacks with a melee weapon takes #{spells['flame-armor'].damage} damage each time they attack.",
        "type": "function",
        "name": "castFlameArmor"
    }
]