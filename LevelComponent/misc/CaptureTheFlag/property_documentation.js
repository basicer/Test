[
    {
        "snippets": {
            "io": {
                "code": "placeFlag(${1:targetPos})",
                "tab": "placeFlag"
            },
            "lua": {
                "tab": "placeFlag",
                "code": "self:placeFlag(${1:targetPos})"
            },
            "clojure": {
                "tab": "placeFlag",
                "code": "(.placeFlag this ${1:targetPos})"
            },
            "python": {
                "tab": "placeFlag",
                "code": "self.placeFlag(${1:targetPos})"
            },
            "coffeescript": {
                "tab": "placeFlag",
                "code": "@placeFlag ${1:targetPos}"
            },
            "javascript": {
                "tab": "placeFlag",
                "code": "this.placeFlag(${1:targetPos})"
            }
        },
        "args": [
            {
                "description": "The location for placing the flag.",
                "example": "targetPos",
                "type": "object",
                "name": "target"
            }
        ],
        "description": "The `placeFlag` method will place your next flag, can be called 3 times, but only in the first 2 seconds of the game.",
        "type": "function",
        "name": "placeFlag"
    },
    {
        "snippets": {
            "python": {
                "tab": "findEnemyFlags",
                "code": "self.findEnemyFlags()"
            },
            "coffeescript": {
                "tab": "findEnemyFlags",
                "code": "@findEnemyFlags()"
            },
            "javascript": {
                "tab": "findEnemyFlags",
                "code": "this.findEnemyFlags()"
            }
        },
        "description": "Returns a list of all enemy flags that have not yet been moved to your side, but only if they are within 5 units of you.",
        "type": "function",
        "name": "findEnemyFlags"
    },
    {
        "snippets": {
            "python": {
                "tab": "captureFlag",
                "code": "self.captureFlag(${1:flag})"
            },
            "javascript": {
                "tab": "captureFlag",
                "code": "this.captureFlag(${1:flag})"
            }
        },
        "args": [
            {
                "description": "The flag you are going to capture.",
                "example": "this.getNearestEnemy(this.findEnemyFlags())",
                "type": "object",
                "name": "flag"
            }
        ],
        "description": "Claims an enemy flag if within 3 units of you, this will move the flag with you.  Can only carry one flag at a time.",
        "type": "function",
        "name": "captureFlag"
    }
]