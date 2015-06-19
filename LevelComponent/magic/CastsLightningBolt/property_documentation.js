[
    {
        "i18n": {
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "lightning-bolt",
                "code": "cast(\"lightning-bolt\", ${1:target})"
            },
            "lua": {
                "tab": "lightning-bolt",
                "code": "self:cast(\"lightning-bolt\", ${1:target})"
            },
            "clojure": {
                "tab": "lightning-bolt",
                "code": "(.cast this \"lightning-bolt\" ${1:target})"
            },
            "python": {
                "tab": "lightning-bolt",
                "code": "self.cast(\"lightning-bolt\", ${1:target})"
            },
            "javascript": {
                "tab": "lightning-bolt",
                "code": "this.cast(\"lightning-bolt\", ${1:target})"
            },
            "coffeescript": {
                "tab": "lightning-bolt",
                "code": "@cast \"lightning-bolt\", ${1:target}"
            }
        },
        "args": [
            {
                "default": "",
                "description": "The target on which to cast \"lightning-bolt\".",
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
        "description": "Casts a `\"lightning-bolt\"` spell on `target`. Causes #{spells['lightning-bolt'].damage} damage to `target` and #{spells['lightning-bolt'].splashFactor}x splash damage to other enemies if within #{spells['lightning-bolt'].splashRange}m.",
        "type": "function",
        "name": "castLightningBolt"
    }
]