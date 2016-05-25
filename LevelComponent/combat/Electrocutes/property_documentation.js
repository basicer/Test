[
    {
        "snippets": {
            "io": {
                "tab": "electrocute",
                "code": "electrocute ${1:target}"
            },
            "lua": {
                "tab": "electrocute",
                "code": "self:electrocute(${1:target})"
            },
            "clojure": {
                "tab": "electrocute",
                "code": "(.electrocute this ${1:target})"
            },
            "python": {
                "tab": "electrocute",
                "code": "self.electrocute(${1:target})"
            },
            "coffeescript": {
                "tab": "electrocute",
                "code": "@electrocute ${1:target}"
            },
            "javascript": {
                "tab": "electrocute",
                "code": "this.electrocute(${1:target})"
            }
        },
        "args": [
            {
                "default": "",
                "description": "The target on which to electrocute.",
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
        "description": "Electrocutes a target if within #{electrocuteRange} and slows their movement speed by a factor of #{electrocuteFactor} for #{electrocuteDuration} seconds.",
        "type": "function",
        "name": "electrocute"
    },
    {
        "snippets": {
            "io": {
                "tab": "canElectrocute",
                "code": "canElectrocute ${1:target}"
            },
            "lua": {
                "tab": "canElectrocute",
                "code": "self:canElectrocute(${1:target})"
            },
            "python": {
                "tab": "canElectrocute",
                "code": "self.canElectrocute(${1:target})"
            },
            "coffeescript": {
                "tab": "canElectrocute",
                "code": "@canElectrocute ${1:target}"
            },
            "javascript": {
                "tab": "canElectrocute",
                "code": "this.canElectrocute(${1:target})"
            },
            "clojure": {
                "tab": "canElectrocute",
                "code": "(.canElectrocute this ${1:target})"
            }
        },
        "args": [
            {
                "i18n": {
                    "-": {
                        "-": "-"
                    }
                },
                "example": "this.getNearestEnemy()",
                "description": "The target to check for susceptibility",
                "type": "object",
                "name": "target"
            }
        ],
        "description": "Check to see if a target is susceptible to being electrocuted.",
        "type": "function",
        "name": "canElectrocute"
    }
]