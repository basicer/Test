[
    {
        "i18n": {
            "zh-HANT": {
                "description": "`猛擲`將投擲遠在#{sprite Name}的頭之後的目標。",
                "name": "猛擲"
            },
            "hu": {
                "description": "A `hurl` mozdulat eldobja a céltárgyat, messze a #{spriteName} feje mögé."
            },
            "da": {
                "description": "`hurl` kaster målet langt bagover hovedet på #{spriteName}."
            },
            "nl-NL": {
                "description": "De 'hurl' actie slingert het doel ver over het hoofd van de #{spriteName}."
            },
            "es-419": {
                "description": "El movimiento \"Lanzar\", lanza al objetivo."
            },
            "pt-BR": {
                "description": "O movimento `hurl` arremessa o alvo para trás da cabeça do #{spriteName}."
            },
            "el": {
                "description": "Το `hurl` εκσφενδονίζει το στόχο πολύ πίσω από το # {spriteName}."
            },
            "de-DE": {
                "description": "Die 'hurl' Aktion schleudert das Ziel weit hinter #{spriteName}'s Kopf."
            },
            "es-ES": {
                "description": "El movimiento `hurl` lanza al objetivo muy atrás de la cabeza de #{spriteName}."
            },
            "it": {
                "description": "La mossa `hurl` scaglia il bersaglio molto indietro la testa di #{spriteName}."
            },
            "fr": {
                "description": "`hurl`jette la cible loin derrière la tete de #{spriteName}."
            },
            "ru": {
                "description": "Действие 'hurl' бросает цель далеко за пределы головы(вершины) #{spriteName}."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "python": {
                "tab": "hurl",
                "code": "self.hurl(${1:target})"
            },
            "javascript": {
                "tab": "hurl",
                "code": "this.hurl(${1:target})"
            }
        },
        "args": [
            {
                "i18n": {
                    "zh-HANT": {
                        "description": "投擲的目標單位。"
                    },
                    "sk": {
                        "description": "Cieľ pre hodenie."
                    },
                    "hu": {
                        "description": "A céltárgy eldobása"
                    },
                    "da": {
                        "description": "Mål at kaste bagover."
                    },
                    "nl-NL": {
                        "description": "Het doelwit om weg te slingeren."
                    },
                    "pt-BR": {
                        "description": "A unidade alvo a arremeçar."
                    },
                    "el": {
                        "description": "Η μονάδα που στοχεύει το `hurl`."
                    },
                    "de-DE": {
                        "description": "Die Zieleinheit zum Schleudern."
                    },
                    "es-ES": {
                        "description": "El objetivo que lanza."
                    },
                    "it": {
                        "description": "L'unità bersaglio che viene spinta."
                    },
                    "fr": {
                        "description": "La cible à jeter."
                    },
                    "es-419": {
                        "description": "La unidad objetivo para lanzar"
                    },
                    "ru": {
                        "description": "Цель для броска."
                    },
                    "-": {
                        "-": "-"
                    }
                },
                "description": "The target unit to hurl.",
                "example": "this.getNearestEnemy()",
                "type": "object",
                "name": "target"
            },
            {
                "i18n": {
                    "zh-HANT": {
                        "description": "選擇性的:朝著目標位置投擲目標，或是正好在某個目標的後面。"
                    },
                    "hu": {
                        "description": "Választható: a "
                    },
                    "da": {
                        "description": "Valgfrit: Position at kaste målet hen til til, eller lige bagved hvis position ikke er angivet. "
                    },
                    "nl-NL": {
                        "description": "Optioneel: de plek om het doelwit naartoe te slingeren, of gewoonweg naar achteren als het niet specifiek wordt aangegeven."
                    },
                    "pt-BR": {
                        "description": "Opcional: a posição para se arremeçar o alvo, ou apenas atrás, se não especificado."
                    },
                    "el": {
                        "description": "Προαιρετικά: Ορίζουμε τη θέση  προς την οποία θα εσφενδονίσουμε τον στόχο, ή απλά πίσω από την πλάτη κάποιου, αν η θέση παραμένει απροσδιόριστη."
                    },
                    "de-DE": {
                        "description": "Optional: Die Zielposition, zu welcher das Ziel geschleudert werden soll, oder einfach hinter den Rücken von jemandem, wenn nicht angegeben."
                    },
                    "es-ES": {
                        "description": "Opcional: la posición del objetivo en contra de la cual se lanza el objetivo, o solamente detras de la espalda de uno mismo si no se especificó."
                    },
                    "it": {
                        "description": "Opzionale: la posizione dell'obiettivo verso la quale spingere il bersaglio, o solamente alle spalle se non specificato."
                    },
                    "es-419": {
                        "description": "Opcional: la posicion hacia la cual se quiere lanzar al objetivo, o solo detrás tuyo si no se especifica."
                    },
                    "fr": {
                        "description": "Optionnel : la position vers laquelle jeter la cible, ou juste derrière son dos si rien n'est spécifié."
                    },
                    "ru": {
                        "description": "Необязательно: искомое(ая) положение(позиция), в направлении которого(ой) нужно бросить цель, или просто за чью-либо спину, если не указано. "
                    },
                    "-": {
                        "-": "-"
                    }
                },
                "description": "Optional: the target position toward which to hurl the target, or just behind one's back if unspecified.",
                "example": {
                    "lua": "{x=20, y=40}",
                    "coffeescript": "{x: 20, y: 40}",
                    "python": "{\"x\": 20, \"y\": 40}",
                    "javascript": "{x: 20, y: 40}"
                },
                "type": "object",
                "name": "toPos"
            }
        ],
        "description": "The `hurl` move hurls the target far behind the #{spriteName}'s head.",
        "type": "function",
        "name": "hurl"
    }
]