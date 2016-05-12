[
    {
        "i18n": {
            "hu": {
                "description": "Tovább ugrik az adott célpontra, vagy pozícióra."
            },
            "da": {
                "description": "Hop imod det givne mål eller position."
            },
            "nl-NL": {
                "description": "Spring naar de bepaalde unit of positie. "
            },
            "el": {
                "description": "Μετάβαση με άλμα προς τη συγκεκριμένη μονάδα ή θέση."
            },
            "zh-HANT": {
                "description": "跳往指定的目標或位置。"
            },
            "ro": {
                "description": "Sari la unitatea tinta sau pozitie data."
            },
            "pl": {
                "description": "Skocz w stronę podanej jednostki bądź pozycji."
            },
            "pt-BR": {
                "description": "Salta em direção à unidade alvo ou posição dada."
            },
            "uk": {
                "description": "Стрибнути до вказаного цільового об'єкту або позиції"
            },
            "ja": {
                "description": "指示されたターゲットや位置にジャンプする"
            },
            "cs": {
                "description": "Skok směrem na zadanou jednotku nebo pozici."
            },
            "it": {
                "description": "Salta verso l'unità o posizione bersaglio data."
            },
            "es-419": {
                "description": "Salta hacia la unidad de objetivo o posición."
            },
            "es-ES": {
                "description": "Salta hacia la unidad o posición especificada."
            },
            "sk": {
                "description": "Skočí smerom k zadanému cieľu alebo pozícii."
            },
            "ru": {
                "description": "Придти к отмеченному юниту или позиции"
            },
            "zh-HANS": {
                "description": "向指定的目标或位置跳跃。"
            },
            "fr": {
                "description": "Saute jusqu'à la cible ou la position donnée."
            },
            "de-DE": {
                "description": "Springe zur Zieleinheit oder -position."
            },
            "nb": {
                "description": "Hopp mot den angitte enheten eller posisjonen."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "jumpTo",
                "code": "jumpTo(${1:target})"
            },
            "lua": {
                "tab": "jumpTo",
                "code": "self:jumpTo(${1:target})"
            },
            "clojure": {
                "tab": "jumpTo",
                "code": "(.jumpTo this ${1:target})"
            },
            "coffeescript": {
                "tab": "jumpTo",
                "code": "@jumpTo ${1:target}"
            },
            "python": {
                "tab": "jumpTo",
                "code": "self.jumpTo(${1:target})"
            },
            "javascript": {
                "tab": "jumpTo",
                "code": "this.jumpTo(${1:target})"
            }
        },
        "args": [
            {
                "description": "The target unit or position to jump to.",
                "example": {
                    "io": "findNearestItem pos",
                    "clojure": "(clj->js { :x 24, :y 35 })",
                    "lua": "{x=24, y=35}",
                    "coffeescript": "{x: 24, y: 35}",
                    "python": "{\"x\": 24, \"y\": 35}",
                    "javascript": "{x: 24, y: 35}"
                },
                "type": "object",
                "name": "target"
            }
        ],
        "description": "Jump toward the given target unit or position.",
        "type": "function",
        "name": "jumpTo"
    }
]