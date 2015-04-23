[
    {
        "i18n": {
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "teleport",
                "code": "cast(\"teleport\", ${1:targetPos})"
            },
            "lua": {
                "tab": "teleport",
                "code": "self:cast(\"teleport\", ${1:targetPos})"
            },
            "clojure": {
                "tab": "teleport",
                "code": "(.cast this \"teleport\" ${1:targetPos})"
            },
            "python": {
                "tab": "teleport",
                "code": "self.cast(\"teleport\", ${1:targetPos})"
            },
            "javascript": {
                "tab": "teleport",
                "code": "this.cast(\"teleport\", ${1:targetPos})"
            },
            "coffeescript": {
                "tab": "teleport",
                "code": "@cast \"teleport\", ${1:targetPos}"
            }
        },
        "args": [
            {
                "default": "",
                "description": "The target position to teleport to.",
                "example": {
                    "io": "findNearestEnemy pos",
                    "lua": "self:findNearestEnemy().pos",
                    "clojure": "(.pos (.findNearestEnemy this))",
                    "coffeescript": "@findNearestEnemy().pos",
                    "python": "self.findNearestEnemy().pos",
                    "javascript": "this.findNearestEnemy().pos"
                },
                "type": "object",
                "name": "targetPos"
            }
        ],
        "description": "Casts a `\"teleport\"` spell, teleporting caster to a position within #{spells.teleport.range}m.",
        "type": "function",
        "name": "castTeleport"
    }
]