[
    {
        "snippets": {
            "io": {
                "tab": "castAntigravity",
                "code": "cast(\"antigravity\", ${1:target})"
            },
            "lua": {
                "tab": "castAntigravity",
                "code": "self:cast(\"antigravity\", ${1:target})"
            },
            "clojure": {
                "tab": "castAntigravity",
                "code": "(.cast this \"antigravity\" ${1:target})"
            },
            "python": {
                "tab": "castAntigravity",
                "code": "self.cast(\"antigravity\", ${1:target})"
            },
            "javascript": {
                "tab": "castAntigravity",
                "code": "this.cast(\"antigravity\", ${1:target})"
            },
            "coffeescript": {
                "tab": "castAntigravity",
                "code": "@cast \"antigravity\", ${1:target}"
            }
        },
        "args": [
            {
                "default": "",
                "description": "The target on which to cast \"antigravity\".",
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
        "description": "Casts an `\"antigravity\"` spell on `target` if within #{spells.antigravity.range}m, creating an `\"antigravity\"` field with a radius of #{spells.antigravity.radius}m around the target causing all ground units to drift into the sky and not be able to move for #{spells.antigravity.duration} seconds.",
        "type": "function",
        "name": "castAntigravity"
    }
]