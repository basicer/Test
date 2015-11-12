[
    {
        "snippets": {
            "lua": {
                "tab": "toggleFlowers",
                "code": "self:toggleFlowers(${1:true})"
            },
            "clojure": {
                "tab": "toggleFlowers",
                "code": "(.toggleFlowers this ${1:true})"
            },
            "coffeescript": {
                "tab": "toggleFlowers",
                "code": "@toggleFlowers ${1:true}"
            },
            "python": {
                "tab": "toggleFlowers",
                "code": "self.toggleFlowers(${1:True})"
            },
            "javascript": {
                "tab": "toggleFlowers",
                "code": "this.toggleFlowers(${1:true})"
            }
        },
        "args": [
            {
                "description": "Boolean for whether flowers are on or not.",
                "example": {
                    "io": "true",
                    "lua": "true",
                    "clojure": "true",
                    "coffeescript": "true",
                    "python": "True",
                    "javascript": "true"
                },
                "type": "boolean",
                "name": "grow"
            }
        ],
        "description": "Toggles whether flowers are grown or not.",
        "type": "function",
        "name": "toggleFlowers"
    },
    {
        "snippets": {
            "io": {
                "tab": "setFlowerColor",
                "code": "setFlowerColor(\"${1:red}\")"
            },
            "lua": {
                "tab": "setFlowerColor",
                "code": "self:setFlowerColor(\"${1:red}\")"
            },
            "clojure": {
                "tab": "setFlowerColor",
                "code": "(.setFlowerColor this \"${1:red}\")"
            },
            "coffeescript": {
                "tab": "setFlowerColor",
                "code": "@setFlowerColor \"${1:red}\""
            },
            "python": {
                "tab": "setFlowerColor",
                "code": "self.setFlowerColor(\"${1:red}\")"
            },
            "javascript": {
                "tab": "setFlowerColor",
                "code": "this.setFlowerColor(\"${1:red}\")"
            }
        },
        "args": [
            {
                "description": "The color you want the flowers to be.",
                "example": "\"red\"",
                "type": "string",
                "name": "color"
            }
        ],
        "description": "Sets the color of the flowers.  Options are pink, red, yellow, blue, purple, white, or random.",
        "type": "function",
        "name": "setFlowerColor"
    }
]