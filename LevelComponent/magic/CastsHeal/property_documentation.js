[
    {
        "i18n": {
            "bg": {
                "description": "Прави магия `\"heal\"` на мишена `target`, ако тя е на разстояние до #{spells.heal.range} метра. Магията лекува целта с до #{spells.heal.health} точки живот."
            },
            "da": {
                "description": "Kaster en `\"heal\"` besværgelse på `target`. Hvis målet er indenfor #{spells.heal.range}m helbredes det med op til #{spells.heal.health} livspoint."
            },
            "sr": {
                "description": "Baci \"heal\" magiju na \"target\" ako unutar  #{spells.heal.range}m, lececi ga  do #{spells.heal.health} hit poena."
            },
            "hu": {
                "description": "Használj \"heal\" (gyógyító) varázst a \"target\"-en (célon), ha #{spells.heal.range}m adott távolságon belül van, a gyógyítás egészen a #{spells.heal.health}-ben megadott pontig lehetséges. "
            },
            "el": {
                "description": "Ρίχνει ένα ξόρκι `Θεραπείας` στον στόχο, εάν βρίσκεται σε απόσταση ως #{spells.heal.range}m, θεραπεύοντας  #{spells.heal.health} πόντους ζωτικής ενέργειας."
            },
            "it": {
                "description": "Lancia un incantesimo `\"heal\"` su `target` se entro #{spells.heal.range}m, guarendolo fino a #{spells.heal.health} punti."
            },
            "uk": {
                "description": "Накладає заклинання `\"heal\"` на ціль `target`, якщо вона в радіусі #{spells.heal.range} метрів, зцілюючи її до #{spells.heal.health} хіт-пойнтів."
            },
            "pl": {
                "description": "Rzuć  czar \"uzdrawiający\" na \"cel\" jeżeli znajduje się w #{spells.heal.range}m, uleczajac go do #{spells.heal.health} punktów życia"
            },
            "pt-BR": {
                "description": "Lança um feitiço `\"heal\"` no `target` se dentro de #{spells.heal.range}m, curando até #{spells.heal.health} pontos de vida."
            },
            "sk": {
                "description": "Kúzli `\"heal\"` na `target` v dosahu #{spells.heal.range}m. Lieči do hodnoty #{spells.heal.health} HP."
            },
            "nl-NL": {
                "description": "Spreekt een `\"helen\"` spreuk uit over `doelwit` als het zich binnen #{spells.heal.range}m bevindt en geneest het met #{spells.heal.health} levenspunten."
            },
            "zh-HANS": {
                "description": "如果`target`在#{spells.heal.range}公尺的范围内, 对`target`施放`\"heal\"`技能, 恢复它#{spells.heal.health}点的生命值."
            },
            "es-419": {
                "description": "Lanza un hechizo '\"Curar\"' sobre el objetivo a una distancia de #{spells.heal.range}m, curándole hasta #{healAmount} puntos de vida."
            },
            "es-ES": {
                "description": "Lanza un hechizo '\"Curar\"' sobre el objetivo a una distancia de #{spells.heal.range}m, curándole hasta #{healAmount} puntos de vida."
            },
            "de-DE": {
                "description": "Wendet die Fähigkeit `heal`(heilen) auf `target` (Ziel) an, sofern `target` sich innerhalb von #{spells.heal.range}m befindet. Das Ziel wird auf #{healAmount} Trefferpunkte geheilt. "
            },
            "sv": {
                "description": "Kastar en `\"heal\"`-besvärjelse mot `target` inom #{spells.heal.range}m, läker up till #{spells.heal.health} hälsa."
            },
            "fr": {
                "description": "Lance un sort `\"heal\"` sur une `target` si à portée de #{spells.heal.range}m, soignant jusqu'à #{healAmount} pdv."
            },
            "gl": {
                "description": "Invocar feitizo `\"curación\"`en `target` si está dentro de #{spells.heal.range]m, curandoo ata #{healAmount] puntos de éxito."
            },
            "ru": {
                "description": "Произносит оздоровительное заклинание для `цели` если она в пределах #{spells.heal.range} метров, оздаравливает её на #{healAmount} очков."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "heal",
                "code": "cast(\"heal\", ${1:target})"
            },
            "lua": {
                "tab": "heal",
                "code": "self:cast(\"heal\", ${1:target})"
            },
            "clojure": {
                "tab": "heal",
                "code": "(.cast this \"heal\" ${1:target})"
            },
            "python": {
                "tab": "heal",
                "code": "self.cast(\"heal\", ${1:target})"
            },
            "javascript": {
                "tab": "heal",
                "code": "this.cast(\"heal\", ${1:target})"
            },
            "coffeescript": {
                "tab": "heal",
                "code": "@cast \"heal\", ${1:target}"
            }
        },
        "args": [
            {
                "i18n": {
                    "bg": {
                        "description": "Мишената, на която да се направи \"heal\" магия."
                    },
                    "da": {
                        "description": "Mål at kaste \"heal\" på."
                    },
                    "sr": {
                        "description": "Meta na koju se baca \"heal:."
                    },
                    "hu": {
                        "description": "A cél, melyen a \"heal\" (gyógyítás) hatással van."
                    },
                    "el": {
                        "description": "Ο στόχος στο οποίον θα κάνουμε το ξόρκι `Θεραπεία` "
                    },
                    "it": {
                        "description": "L'obiettivo su cui lanciare \"heal\"."
                    },
                    "uk": {
                        "description": "Ціль, до якої буде застосовано \"heal\"."
                    },
                    "pl": {
                        "description": "Celk tóry chcesz \"uzdrowić\""
                    },
                    "pt-BR": {
                        "description": "O alvo que receberá o feitiço \"heal\"."
                    },
                    "sk": {
                        "description": "Cieľ liečivého kúzla \"heal\"."
                    },
                    "nl-NL": {
                        "description": "Het doelwit waarop een \"helen\" spreuk moet worden uitgesproken."
                    },
                    "zh-HANS": {
                        "description": "被施放\"heal\"的目标."
                    },
                    "pt-PT": {
                        "description": "O alvo no qual conjurar \"heal\"."
                    },
                    "es-419": {
                        "description": "El objetivo sobre el que lanzar \"Curar\"."
                    },
                    "es-ES": {
                        "description": "El objetivo sobre el que lanzar \"Curar\"."
                    },
                    "de-DE": {
                        "description": "Das Ziel auf das `heal` (heilen) angewendet werden soll."
                    },
                    "sv": {
                        "description": "Målet som \"heal\" skall kastas mot."
                    },
                    "fr": {
                        "description": "La cible sur laquelle lancer \"heal\"."
                    },
                    "gl": {
                        "description": "O destinatario sobre o que invocar \"curación\"."
                    },
                    "ru": {
                        "description": "Цель на которую надо наложить заклинание оздоровления."
                    },
                    "-": {
                        "-": "-"
                    }
                },
                "default": "",
                "description": "The target on which to cast \"heal\".",
                "example": {
                    "io": "findNearestFriend",
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
        "description": "Casts a `\"heal\"` spell on `target` if within #{spells.heal.range}m, healing it up to #{spells.heal.health} hit points.",
        "type": "function",
        "name": "castHeal"
    }
]