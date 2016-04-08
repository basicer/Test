[
    {
        "i18n": {
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "chain-lightning",
                "code": "cast(\"chain-lightning\", ${1:target})"
            },
            "lua": {
                "tab": "chain-lightning",
                "code": "self:cast(\"chain-lightning\", ${1:target})"
            },
            "clojure": {
                "tab": "chain-lightning",
                "code": "(.cast this \"chain-lightning\" ${1:target})"
            },
            "python": {
                "tab": "chain-lightning",
                "code": "self.cast(\"chain-lightning\", ${1:target})"
            },
            "javascript": {
                "tab": "chain-lightning",
                "code": "this.cast(\"chain-lightning\", ${1:target})"
            },
            "coffeescript": {
                "tab": "chain-lightning",
                "code": "@cast \"chain-lightning\", ${1:target}"
            }
        },
        "args": [
            {
                "default": "",
                "description": "The target on which to cast \"chain-lightning\".",
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
        "description": "Casts a `\"chain-lightning\"` spell on `target`. Causes #{spells['chain-lightning'].damage} damage to `target` and #{spells['chain-lightning'].splashFactor}x splash damage to other enemies if within #{spells['chain-lightning'].splashRange}m.",
        "type": "function",
        "name": "castChainLightning"
    }
]