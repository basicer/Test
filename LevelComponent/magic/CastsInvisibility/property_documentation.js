[
    {
        "i18n": {
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "invisibility",
                "code": "cast(\"invisibility\", ${1:target})"
            },
            "lua": {
                "tab": "invisibility",
                "code": "self:cast(\"invisibility\", ${1:target})"
            },
            "clojure": {
                "tab": "invisibility",
                "code": "(.cast this \"invisibility\" ${1:target})"
            },
            "python": {
                "tab": "invisibility",
                "code": "self.cast(\"invisibility\", ${1:target})"
            },
            "javascript": {
                "tab": "invisibility",
                "code": "this.cast(\"invisibility\", ${1:target})"
            },
            "coffeescript": {
                "tab": "invisibility",
                "code": "@cast \"invisibility\", ${1:target}"
            }
        },
        "args": [
            {
                "default": "",
                "description": "The target on which to cast \"invisibility\".",
                "example": {
                    "io": "self",
                    "lua": "self",
                    "clojure": "this",
                    "coffeescript": "@",
                    "python": "self",
                    "javascript": "this"
                },
                "type": "object",
                "name": "target"
            }
        ],
        "description": "Casts a `\"invisibility\"` spell on `target` if within #{spells.invisibility.range}m, causes `target` to not be seen by any enemy for #{spells.invisibility.duration} seconds, or until the target attacks.\n\nTo see if the target is still invisible, use the `hasEffect` method to see if it has a `\"hide\"` effect.",
        "type": "function",
        "name": "castInvisibility"
    }
]