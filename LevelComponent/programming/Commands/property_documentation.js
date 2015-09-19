[
    {
        "i18n": {
            "pl": {
                "description": "Lista wszystkich poleceń (metod) jakie możesz wydać sprzymierzonym jednostkom, jakie Ci służą."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "commandableMethods",
                "code": "commandableMethods"
            },
            "lua": {
                "tab": "commandableMethods",
                "code": "self.commandableMethods"
            },
            "clojure": {
                "tab": "commandableMethods",
                "code": "(.commandableMethods this)"
            },
            "coffeescript": {
                "tab": "commandableMethods",
                "code": "@commandableMethods"
            },
            "python": {
                "tab": "commandableMethods",
                "code": "self.commandableMethods"
            },
            "javascript": {
                "tab": "commandableMethods",
                "code": "this.commandableMethods"
            }
        },
        "description": "These are all the method names that you can call on allied minion units.",
        "type": "array",
        "name": "commandableMethods"
    },
    {
        "i18n": {
            "pl": {
                "description": "Komenda `command` pozwala wydać jedno z poleceń `commandableMethods` (`#{commandableMethods}`) sprzymierzonej jednostce. Możesz wydawać polecenia jednostkom z listy `commandableTypes`: `#{commandableTypes}`\n\nUWAGA: możesz nie być w stanie przywołać (`summon`) wszystkich typów jednostek."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "clojure": {
                "tab": "command",
                "code": "(.command this ${1:friend} ${2:\"attack\"} ${3:target})"
            },
            "io": {
                "tab": "command",
                "code": "command(${1:friend}, ${2:\"attack\"}, ${3:target})"
            },
            "lua": {
                "tab": "command",
                "code": "self:command(${1:friend}, ${2:\"attack\"}, ${3:target})"
            },
            "coffeescript": {
                "tab": "command",
                "code": "@command ${1:friend}, ${2:\"attack\"}, ${3:target}"
            },
            "python": {
                "tab": "command",
                "code": "self.command(${1:friend}, ${2:\"attack\"}, ${3:target})"
            },
            "javascript": {
                "tab": "command",
                "code": "this.command(${1:friend}, ${2:\"attack\"}, ${3:target})"
            }
        },
        "example": {
            "python": "friend = self.getNearestFriend()\nself.command(friend, 'move', self.pos)",
            "javascript": "var friend = this.getNearestFriend();\nthis.command(friend, 'move', this.pos);"
        },
        "description": "`command` allows you to call any of `commandableMethods` (`#{commandableMethods}`) on allied minions. You can command minions of types in `commandableTypes`: `#{commandableTypes}`\n\n(You may not be able to summon all of these types.)",
        "type": "function",
        "name": "command"
    },
    {
        "i18n": {
            "pl": {
                "description": "Lista wszystkich sprzymierzonych jednostek, którym możesz wydawać polecenia: `#{commandableTypes}`\n\nUWAGA: możesz nie być w stanie przywołać (`summon`) wszystkich typów jednostek."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "commandableTypes",
                "code": "commandableTypes"
            },
            "lua": {
                "tab": "commandableTypes",
                "code": "self.commandableTypes"
            },
            "clojure": {
                "tab": "commandableTypes",
                "code": "(.commandableTypes this)"
            },
            "coffeescript": {
                "tab": "commandableTypes",
                "code": "@commandableTypes"
            },
            "python": {
                "tab": "commandableTypes",
                "code": "self.commandableTypes"
            },
            "javascript": {
                "tab": "commandableTypes",
                "code": "this.commandableTypes"
            }
        },
        "description": "These are all the allied minion types that you can command: `#{commandableTypes}`\n\n(You may not be able to summon all of these types.)",
        "type": "array",
        "name": "commandableTypes"
    }
]