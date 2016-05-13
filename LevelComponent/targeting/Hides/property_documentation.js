[
    {
        "snippets": {
            "io": {
                "tab": "hide",
                "code": "hide"
            },
            "lua": {
                "tab": "hide",
                "code": "self:hide()"
            },
            "clojure": {
                "tab": "hide",
                "code": "(.hide this)"
            },
            "python": {
                "tab": "hide",
                "code": "self.hide()"
            },
            "coffeescript": {
                "tab": "hide",
                "code": "@hide()"
            },
            "javascript": {
                "tab": "hide",
                "code": "this.hide()"
            }
        },
        "i18n": {
            "-": {
                "-": "-"
            }
        },
        "description": "Hide from sight for `hideDuration` of #{hideDuration}s, during which no one will be able to target the #{spriteName}. Hide ends on any sort of attack.",
        "type": "function",
        "name": "hide"
    },
    {
        "description": "How long the `hide` action lasts, in seconds (or until the #{spriteName} attacks).",
        "type": "number",
        "name": "hideDuration"
    },
    {
        "description": "Whether the {spriteName} is currently hidden.",
        "type": "boolean",
        "name": "hidden"
    }
]