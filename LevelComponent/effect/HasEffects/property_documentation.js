[
    {
        "userShouldCaptureReturn": {
            "variableName": "affected"
        },
        "returns": {
            "type": "boolean"
        },
        "i18n": {
            "hu": {
                "description": "Visszatér, amennyiben a `spriteName` éppen érintett az adott hatás által."
            },
            "da": {
                "description": "Returnérer hvorvidt `spriteName` ligenu er påvirket af den givne virkning."
            },
            "pl": {
                "description": "Zwraca czy dany efekt ma teraz wpływ na `spriteName`."
            },
            "nl-NL": {
                "name": "heeftEffect",
                "description": "Vertelt of de `spriteName` momenteel wordt beinvloed door het gegeven effect."
            },
            "el": {
                "description": "Επιστρέφει  αν η επιλεγόμενη μορφή επηρεάζεται από τη συγκεκριμένη δράση."
            },
            "pt-PT": {
                "description": "Retorna se `spriteName` é atualmente afetado pelo dado efeito."
            },
            "es-419": {
                "description": "Devuelve si el `spriteName` está actualmente afectada por el efecto dado."
            },
            "sv": {
                "description": "Returnerar huruvida `spriteName` är påverkad av den givna effekten just nu."
            },
            "pt-BR": {
                "description": "Retorne se o `spriteName` estiver sendo afetado pelo efeito dado."
            },
            "uk": {
                "description": "Визначає, чи знаходиться `spriteName` у даний час під впливом зазначеного ефекту."
            },
            "it": {
                "description": "Restituisce se `spriteName` è attualmente influenzato dall'effetto dato."
            },
            "zh-HANS": {
                "description": "返回 `spriteName`是否受到给出的效果的影响。"
            },
            "sk": {
                "description": "Je alebo nie je hrdina práve ovplyvnený zadaným efektom ?"
            },
            "es-ES": {
                "description": "Retorna si el 'spriteName'(Nombre del Sprite) es actualmente afectado por el efecto indicado."
            },
            "de-DE": {
                "description": "Gibt zurück, ob `spriteName` momentan durch einen Effekt beeinflußt wird"
            },
            "nb": {
                "description": "Returnerer sant hvis denne enheten (`spriteName`) er påvirket av den angitte effekten for øyeblikket."
            },
            "fr": {
                "description": "Affiche si le `spriteName` est actuellement affecté par l'effet donné."
            },
            "gl": {
                "description": "Indica se `spriteName`se ve afectado neste momento polo efecto indicado."
            },
            "ru": {
                "description": "Возвращает состояние находится ли `spriteName` под заданным эффектом."
            },
            "tr": {
                "description": "`spriteName` belirtilen efektten şu anda etkilenip etkilenmediğini döndürür."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "hasEffect",
                "code": "hasEffect(\"${1:effect}\")"
            },
            "lua": {
                "tab": "hasEffect",
                "code": "self:hasEffect(\"${1:effect}\")"
            },
            "coffeescript": {
                "tab": "hasEffect",
                "code": "@hasEffect \"${1:effect}\""
            },
            "clojure": {
                "tab": "hasEffect",
                "code": "(.hasEffect this \"${1:effect}\")"
            },
            "python": {
                "tab": "hasEffect",
                "code": "self.hasEffect(\"${1:effect}\")"
            },
            "javascript": {
                "tab": "hasEffect",
                "code": "this.hasEffect(\"${1:effect}\")"
            }
        },
        "owner": "this",
        "args": [
            {
                "i18n": {
                    "pl": {
                        "description": " "
                    },
                    "pt-BR": {
                        "description": " "
                    },
                    "es-419": {
                        "description": ""
                    },
                    "sv": {
                        "description": " "
                    },
                    "uk": {
                        "description": "Ефект, щодо якого здійснюється перевірка"
                    },
                    "it": {
                        "description": ""
                    },
                    "sk": {
                        "description": " "
                    },
                    "zh-HANS": {
                        "description": "  "
                    },
                    "fr": {
                        "description": "Nom du personnage pour lequel vous voulez vérifier l'état."
                    },
                    "de-DE": {
                        "description": ""
                    },
                    "gl": {
                        "description": ""
                    },
                    "ru": {
                        "description": ""
                    },
                    "-": {
                        "-": "-"
                    }
                },
                "description": "",
                "example": "\"shrink\"",
                "type": "string",
                "name": "effect"
            }
        ],
        "description": "Returns whether the `spriteName` is currently affected by the given effect.",
        "type": "function",
        "name": "hasEffect"
    }
]