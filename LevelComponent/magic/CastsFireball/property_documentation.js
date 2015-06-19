[
    {
        "snippets": {
            "io": {
                "tab": "fireball",
                "code": "cast(\"fireball\", ${1:target})"
            },
            "lua": {
                "tab": "fireball",
                "code": "self:cast(\"fireball\", ${1:target})"
            },
            "clojure": {
                "tab": "fireball",
                "code": "(.cast this \"fireball\" ${1:target})"
            },
            "python": {
                "tab": "fireball",
                "code": "self.cast(\"fireball\", ${1:target})"
            },
            "javascript": {
                "tab": "fireball",
                "code": "this.cast(\"fireball\", ${1:target})"
            },
            "coffeescript": {
                "tab": "fireball",
                "code": "@cast \"fireball\", ${1:target}"
            }
        },
        "args": [
            {
                "default": "",
                "description": "The target on which to cast \"fireball\".",
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
        "description": "Casts a `\"fireball\"` spell on `target` causing #{spells.fireball.damage} if within #{spells.fireball.range}m, causes splash damage to targets within #{spells.fireball.radius}m of `target`.",
        "type": "function",
        "name": "castFireball"
    }
]