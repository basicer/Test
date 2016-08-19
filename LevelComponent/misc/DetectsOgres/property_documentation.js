[
    {
        "i18n": {
            "de-DE": {
                "description": "Gibt typenbasiert zurück, ob das gegebene Ziel angegriffen werden sollte.",
                "name": "sollteAngreifen"
            },
            "pt-BR": {
                "name": "deveAtacar",
                "description": "Retorna se um determinado alvo deve ser atacado, baseado no seu tipo."
            },
            "uk": {
                "name": "shouldAttack",
                "description": "Повертає чи буде атакована дана ціль, грунтуючись на її типі."
            },
            "es-ES": {
                "name": "debeAtacar",
                "description": "Devuelve si el objetivo dado debe ser atacado, en función de su tipo."
            },
            "zh-HANT": {
                "name": "應該攻擊",
                "description": "判斷目標類型是否可以攻擊"
            },
            "zh-HANS": {
                "name": "考虑攻击",
                "description": "根据目标类型决定是否攻击"
            },
            "es-419": {
                "description": "Indica si el objetivo dado debe ser atacado, en función de su tipo.",
                "name": "debeAtacar"
            },
            "ru": {
                "description": "Возвращает ответ, стоит ли атаковать данную цель, основываясь на ее типе.",
                "name": "shouldAttack"
            },
            "fr": {
                "description": "Informe si la cible donnée devrait être attaquée, selon son type.",
                "name": "devraitAttaquer"
            },
            "-": {
                "-": "-"
            }
        },
        "returns": {
            "i18n": {
                "-": {
                    "-": "-"
                }
            },
            "type": "boolean"
        },
        "snippets": {
            "python": {
                "tab": "shouldAttack",
                "code": "hero.shouldAttack(${1:target})"
            },
            "javascript": {
                "tab": "shouldAttack",
                "code": "hero.shouldAttack(${1:target})"
            }
        },
        "example": {
            "python": "if hero.shouldAttack(target):\n    hero.attack(target)",
            "javascript": "if (hero.shouldAttack(target)) {\n    hero.attack(target);\n}"
        },
        "args": [
            {
                "i18n": {
                    "de-DE": {
                        "description": "Das Ziel könnte ein Oger sein."
                    },
                    "pt-BR": {
                        "description": "O alvo pode ser um ogro."
                    },
                    "uk": {
                        "description": "Ціль, яка може бути Огром."
                    },
                    "es-ES": {
                        "description": "El objetivo que podría ser un ogro."
                    },
                    "zh-HANT": {
                        "description": "目標可能是食人魔"
                    },
                    "zh-HANS": {
                        "description": "目标可能是食人魔哦"
                    },
                    "es-419": {
                        "description": "El objetivo que puede ser un ogro."
                    },
                    "ru": {
                        "description": "Цель, которая возможна является огром."
                    },
                    "fr": {
                        "description": "La cible qui pourrait être un Ogre."
                    },
                    "-": {
                        "-": "-"
                    }
                },
                "description": "The target that may be an Ogre.",
                "example": "target",
                "type": "object",
                "name": "target"
            }
        ],
        "description": "Returns whether the given target should be attacked, based on its type.",
        "type": "function",
        "name": "shouldAttack"
    },
    {
        "i18n": {
            "de-DE": {
                "description": "Gibt zurück ob das Ziel nah genug ist um es sicher angreifen zu können.",
                "name": "istNah"
            },
            "pt-BR": {
                "description": "Retorna se um determinado alvo está perto o suficiente para atacar com segurança.",
                "name": "Está perto."
            },
            "uk": {
                "description": "Повертає чи дана ціль знаходиться на відстані для безпечної атаки.",
                "name": "isClose"
            },
            "es-ES": {
                "name": "estaCerca",
                "description": "Devuelve si el objetivo dado está lo suficientemente cerca para atacarle de manera segura."
            },
            "zh-HANT": {
                "name": "靠近一點",
                "description": "判斷目標是否足夠近可以攻擊"
            },
            "zh-HANS": {
                "description": "回到可安全攻击范围内",
                "name": "接近攻击范围"
            },
            "es-419": {
                "description": "Indica si el objetivo dado está lo suficientemente cerca para un ataque seguro.",
                "name": "estaCerca"
            },
            "ru": {
                "description": "Возвращает ответ, достаточно ли близко цель, чтобы атаковать ее без опаски.",
                "name": "isClose"
            },
            "fr": {
                "description": "Informe si la cible donnée est assez proche pour être attaquée sereinement.",
                "name": "estProche"
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "lua": {
                "code": "hero:isClose(target)",
                "tab": "isClose"
            },
            "coffeescript": {
                "code": "hero.isClose(${1:target})",
                "tab": "isClose"
            },
            "python": {
                "code": "hero.isClose(${1:target})",
                "tab": "isClose"
            },
            "javascript": {
                "code": "hero.isClose(${1:target})",
                "tab": "isClose"
            }
        },
        "returns": {
            "i18n": {
                "-": {
                    "-": "-"
                }
            },
            "type": "boolean"
        },
        "example": {
            "lua": "if hero:isClose(target) then\n    hero:attack(target)\nend",
            "coffeescript": "if hero.isClose target\n    hero.attack target",
            "python": "if hero.isClose(target):\n    hero.attack(target)",
            "javascript": "if (hero.isClose(target)) {\n    hero.attack(target);\n}"
        },
        "description": "Returns whether the given target is close enough to safely attack.",
        "type": "function",
        "name": "isClose"
    }
]