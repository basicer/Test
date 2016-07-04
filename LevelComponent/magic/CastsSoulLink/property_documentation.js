[
    {
        "i18n": {
            "bg": {
                "description": "Прави магия `\"soul-link\"` на мишени `targets`, ако и двете мишени са на разстояние до #{spells.soul-link.range} метра. Магията свързва душите на двете цели. Тази магия може да бъде навързана във верига, така че да създаде soul-link групи с повече от 2 единици, като се свържат допълнителни цели към единици, които вече имат soul-link.\n\nВсички поражения се разделят между свързаните души във веригата."
            },
            "zh-HANT": {
                "description": "施放一個\"靈魂連結\"法術在\"複數目標\"上。若是兩個目標在 #{spells.soul-link.range}公尺內，連結兩個目標的靈魂。\n這個法術可以將具有靈魂連結狀態的目標單位連鎖，產生多於2個目標的靈魂連結群組。\n所有的傷害會分散在位於同一個連鎖上的全部靈魂。",
                "name": "施放靈魂連結"
            },
            "sv": {
                "description": "All skada är delad mellan alla sammankopplade själar i en kedja."
            },
            "sr": {
                "description": "Izvodi 'veza dusa' caroliju na datu metu ako su obe jedinice unutar opsega #{spells.soul-link.range}, vezivajuci im duse. Ova carolija se moze lancano nastaviti da bi stvorila grupu srodnih dusa koja je veca od samo dva clana, tako sto ce vezati naknadne jedinice u statusni efekat veze dusa.\n\nUkupna zadobijena steta se deli izmedju svih povezanih dusa u lancu."
            },
            "nl-NL": {
                "description": "Voert een \"soul-link\" spreuk uit op \"targets\" (doelen), indien beide doelen binnen een straal van #{spells.soul-link.range}m zijn, waardoor de zielen van beide doelen worden verbonden. Deze spreuk kan worden gekoppeld om ziel-link groepen te maken met meer dan 2 leden door aanvullende troepen te linken aan troepen die al een ziel-link status hebben.\n\nAlle schade wordt gedeelt door alle troepen die met elkaar gekoppeld zijn."
            },
            "es-419": {
                "description": "Proyecta una `\" alma-link \"` hechizo sobre `targets` si ambos objetivos están a # {spells.soul-link.range} m, conectando las almas de los dos objetivos. Este hechizo puede ser encadenado a crear grupos de alma-link con más de 2 miembros mediante la vinculación de objetivos adicionales para las unidades con el efecto de estado del alma enlace."
            },
            "fr": {
                "description": "Jette un `« soul-link \"` `sort sur targets` si les deux objectifs sont à # {spells.soul-link.range} m, reliant les âmes des deux cibles. Ce sort peut être enchaîné à créer des groupes soul-Link avec plus de 2 membres en reliant des cibles supplémentaires aux unités avec l'effet d'état d'âme lien.\n\nTout dommage est répartie entre toutes les âmes connectés en chaîne."
            },
            "de-DE": {
                "description": "Zaubere einen `\"soul-link\"` Spruch auf die `targets`, wenn beide Ziele innerhalb #{spells.soul-link.range}m sind, um die Seelen von zwei Zielen zu verbinden. Dieser Zauberspruch kann in Reihefolge genutzt werden, um soul-link Gruppen mit mehr als 2 Mitgliedern zu erstellen. Durch das Verknüpfen zusätzlicher Ziele zu Einheiten erhalten diese den soul-link Status Effekt.\n\nDer ganze Schaden wird unter allen in der Kette verbundenen Seelen aufgeteilt."
            },
            "ru": {
                "description": "Колдует связь-душ \"soul-link\", если обе цели находятся в пределах #{заклинания.связь-душ.дальность} #{spells.soul-link.range}, соединяя души двух целей. Это заклинания может организовывать сети из более чем двух заколжованных, объединением дополнительных целей к юнитам, которые уже имеют эффект связи-душ"
            },
            "sk": {
                "description": "Použi kúzlo spojenia duší `\"soul-link\"` na ciele `targets`, ak sú oba ciele v dosahu #{spells.soul-link.range}m. Toto kúzlo môže byť zreťazené a môžu sa tak vytvoriť skupiny spojených duší, ktoré majú viac ako dvoch členov."
            },
            "pt-BR": {
                "description": "Conjura um feitiço `\"soul-link\"` em `targets` se ambos alvos estiverem dentro de #{spells.soul-link.range}m, conectando as almas de dois alvos. Esse feitiço pode ser encadeado para criar grupos de almas vinculadas com mais de 2 membros ligando alvos adicionais à unidades com efeito de status almas vinculadas.\n\nTodo o dano é dividido entre todas as almas encadeadas."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "code": "cast(\"soul-link\", ${1:target1}, ${2:target2})",
                "tab": "soul-link"
            },
            "lua": {
                "code": "self:cast(\"soul-link\", ${1:target1}, ${2:target2})",
                "tab": ""
            },
            "clojure": {
                "code": "(.cast this \"soul-link\" ${1:target1} ${2:target2})",
                "tab": "soul-lin"
            },
            "python": {
                "code": "self.cast(\"soul-link\", ${1:target1}, ${2:target2})",
                "tab": "soul-link"
            },
            "coffeescript": {
                "tab": "soul-link",
                "code": "@cast \"soul-link\", ${1:target1}, ${2:target2}"
            },
            "javascript": {
                "tab": "soul-link",
                "code": "this.cast(\"soul-link\", ${1:target1}, ${2:target2})"
            }
        },
        "args": [
            {
                "i18n": {
                    "bg": {
                        "description": "Мишената на свързването."
                    },
                    "zh-HANT": {
                        "description": "連結中的目標。"
                    },
                    "sv": {
                        "description": "Målet för sammankoppling."
                    },
                    "sr": {
                        "description": "Meta vezivanja. "
                    },
                    "nl-NL": {
                        "description": "Het doelwit van de koppeling."
                    },
                    "es-419": {
                        "description": "El objetivo de la vinculación."
                    },
                    "fr": {
                        "description": "La cible de la liaison."
                    },
                    "de-DE": {
                        "description": "Das Ziel der Verbindung."
                    },
                    "ru": {
                        "description": "Цель связывания"
                    },
                    "sk": {
                        "description": "Cieľ spojenia duší."
                    },
                    "pt-BR": {
                        "description": "O alvo da ligação"
                    },
                    "-": {
                        "-": "-"
                    }
                },
                "description": "The target of the linking.",
                "example": {
                    "javascript": "this.findNearest(this.findFriends())"
                },
                "type": "object",
                "name": "target1"
            },
            {
                "i18n": {
                    "bg": {
                        "description": "Втората мишена на свързването или изричащия магията, ако няма втора мишена."
                    },
                    "zh-HANT": {
                        "description": "第2個連結中的目標，或是在沒有定義第2個目標時與施放者連結。"
                    },
                    "sv": {
                        "description": "Det andra målet för sammankoppling, eller besvärjelsekastaren om inget annat mål är valt."
                    },
                    "sr": {
                        "description": "Druga meta povezivanja, ili izvodjac ako druga meta nije izabrana."
                    },
                    "nl-NL": {
                        "description": "Het tweede doelwit van de koppeling, of de uitvoerder van de spreuk als er geen tweede doel is gedefinieerd. "
                    },
                    "es-419": {
                        "description": "El segundo objetivo de la vinculación o la máquina de colada, si no se define ningún segundo objetivo."
                    },
                    "fr": {
                        "description": "La deuxième cible de la liaison, ou le lanceur si aucune seconde cible est définie."
                    },
                    "de-DE": {
                        "description": "Das zweite Ziel der Verbindung oder der Zauberer, wenn kein zweites Ziel definiert ist."
                    },
                    "ru": {
                        "description": "Вторая цель связывания, если не определена, то колдующий."
                    },
                    "sk": {
                        "description": "Druhý cieľ spojenia duší alebo pôvodca kúzla, ak nie je druhý cieľ určený."
                    },
                    "pt-BR": {
                        "description": "O segundo alvo da ligação, ou o conjurador se não houver segundo alvo definido."
                    },
                    "-": {
                        "-": "-"
                    }
                },
                "description": "The second target of the linking, or the caster if no second target is defined.",
                "example": {
                    "javascript": "this"
                },
                "type": "object",
                "name": "target2"
            }
        ],
        "description": "Casts a `\"soul-link\"` spell on `targets` if both targets are within #{spells.soul-link.range}m, connecting the souls of the two targets. This spell can be chained to create soul-link groups with more than 2 members by linking additional targets to units with the soul-link status effect.\n\nAll damage is split amongst all connected souls in a chain.",
        "type": "function",
        "name": "castSoulLink"
    }
]