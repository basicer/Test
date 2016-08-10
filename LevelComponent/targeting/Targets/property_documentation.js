[
    {
        "i18n": {
            "tr": {
                "name": "Hedef"
            },
            "es-ES": {
                "description": "El objetivo actual en la que el #{spriteName} esta ejecutando la `action` (`\"#{action}\"`). Si `target` se establece, entonces `targetPos`es nulo. ",
                "name": "El objetivo"
            },
            "da": {
                "description": "Det nuværende mål for #{spriteName}'s handling `action` (`\"#{action}\"`). Hvis `target` er sat, så er `targetPos` null."
            },
            "nl-NL": {
                "description": "Het huidige doelwit waarop de #{spriteName} zijn 'actie' ('#{action}\"') toepast. Als 'doelwit' is vastgesteld, dan is 'targetPos' gelijk aan null."
            },
            "ja": {
                "description": "現在の目標は、その上に＃{spriteName}はその`action`（` \"＃{アクション}を\" `）が実行されています。 target`が設定されている`場合は、` targetPos`はnullです。"
            },
            "pl": {
                "description": "Cel, dla którego #{spriteName} wykonuje akcję (`\"#{action}\"`). Gdy cel `target` jest ustawiony, `targetPos` przyjmuje wartość null."
            },
            "uk": {
                "description": "Поточна ціль, щодо якої #{spriteName} виконує дію `action` (`\"#{action}\"`). Якщо `target` задано, то `targetPos` має значення null."
            },
            "pt-BR": {
                "description": "O alvo atual em que a #{spriteName} está executando sua `action` (`\"#{action}\"`). Se `target` estiver selecionado, então `targetPos` é nulo."
            },
            "it": {
                "description": "L'attuale bersaglio contro cui #{spriteName} sta compiendo la sua azione `action` (`\"#{action}\"`). Se `target` è impostato, allora `targetPos` è nullo."
            },
            "hu": {
                "description": "Az aktuális célpont az, amin a hősöd eljárásának `akciója` (`\"#{action}\"`) fut. Ha a célpont (`target`) meg van adva, akkor `targetPos` üres (null)."
            },
            "sk": {
                "description": "Aktuálny cieľ akcie (`\"#{action}\"`) hrdinu. Ak je `target` určený, `targetPos` je null."
            },
            "es-419": {
                "description": "El objetivo actual en la que el #{spriteName} está ejecutando su `accion` (`\"#{action}\"`). Si `target` se establece, entonces `targetPos` es nulo."
            },
            "zh-HANS": {
                "description": "#{spriteName} 执行 `action` (`\"#{action}\"`) 时针对的目标。 如果`target`被设置了，那么`targetPos`就是空。"
            },
            "de-DE": {
                "description": "Das Ziel von #{spriteName}s momentaner `action` (`\"#{action}\"`). Wenn `target` gesetzt ist, ist `targetPos` null."
            },
            "nb": {
                "description": "Gjeldende mål som #{spriteName} gjør sin `action` (`\"#{action}\"`) mot. Hvis `target` er satt så er `targetPos` null."
            },
            "fr": {
                "description": "La cible vers laquelle le #{spriteName} exécute sont `action` (`\"#{action}\"`). Si `target` est définie, alors `targetPos` est null."
            },
            "ru": {
                "description": "Текущая цель по отношению к которой #{spriteName} производит своё действие (`\"#{action}\"`). Если `target` (цель) установленна, то `targetPos` будет null."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "target",
                "code": "target"
            },
            "lua": {
                "tab": "target",
                "code": "self.target"
            },
            "clojure": {
                "tab": "target",
                "code": "(.target this)"
            },
            "coffeescript": {
                "tab": "target",
                "code": "@target"
            },
            "python": {
                "tab": "target",
                "code": "self.target"
            },
            "javascript": {
                "tab": "target",
                "code": "this.target"
            }
        },
        "description": "The current target upon which the #{spriteName} is running its `action` (`\"#{action}\"`). If `target` is set, then `targetPos` is null.",
        "type": "object",
        "name": "target"
    },
    {
        "snippets": {
            "python": {
                "tab": "setTarget",
                "code": "self.setTarget(${1:target})"
            },
            "javascript": {
                "code": "this.setTarget(${1:target})",
                "tab": "setTarget"
            },
            "coffeescript": {
                "tab": "setTarget",
                "code": "@setTarget ${1:target}"
            }
        },
        "args": [
            {
                "default": "",
                "description": "",
                "example": "this.getNearestEnemy()",
                "type": "object",
                "name": "target"
            }
        ],
        "description": "Sets what the #{spriteName} is targeting with its current `action`, such as an enemy to attack.",
        "type": "function",
        "name": "setTarget"
    },
    {
        "i18n": {
            "es-ES": {
                "description": "La posición actual del blanco hacia el cual #{spriteName} esta ejecutando la `action` (`\"#{action}\"`). Si `target` se establece, entonces `targetPos`es nulo. ",
                "name": "Posición del objetivo"
            },
            "da": {
                "description": "Position af det nuværende mål for #{spriteName}'s handling `action` (`\"#{action}\"`). Hvis `targetPos` er sat, så er `target` null."
            },
            "nl-NL": {
                "description": "De huidige doelwit-positie waarop de #{spriteName} zijn 'actie' ('#{action}\"') toepast. Als 'doelwit' is vastgesteld, dan is 'targetPos' gelijk aan null."
            },
            "ja": {
                "description": "現在の目標位置は向かって＃{spriteName}はその`action`（` \"＃{アクション}を\" `）が実行されています。 `targetPos`が設定されている場合、` target`はnullです。"
            },
            "pl": {
                "description": "Pozycja celu, do którego porusza się #{spriteName} aby wykonać akcję (`\"#{action}\"`). Gdy pozycja celu `targetPos` jest ustawiona, `target` przyjmuje wartość null."
            },
            "uk": {
                "description": "Поточна позиція цілі, щодо якої #{spriteName} виконує дію `action` (`\"#{action}\"`). Якщо `targetPos` задано, то `target` має значення null."
            },
            "pt-BR": {
                "description": "A atual posição do alvo em direção ao #{spriteName} está executando sua `action`(`\"#{action}\"`). Se `targetPos` estiver selecionada, então `target` é nulo."
            },
            "it": {
                "description": "La posizione corrente del bersaglio contro cui #{spriteName} sta compiendo la sua azione `action` (`\"#{action}\"`). Se `targetPos` è impostato, allora `target` è nullo."
            },
            "hu": {
                "description": "Az aktuális célpont pozíciója, amerre a hősöd az eljárásának `akciója` (`\"#{action}\"`) fut. Ha `targetPos` meg van adva, akkor a célpont (`target`) üres (null)."
            },
            "sk": {
                "description": "Pozícia cieľa akcie (`\"#{action}\"`). Ak je `target` určený, `targetPos` je null."
            },
            "es-419": {
                "description": "La posición actual del blanco hacia el cual el #{spriteName} está ejecutando su `accion` (`\"#{action}\"`). Si `targetPos` se establece, entonces `target` es nulo."
            },
            "zh-HANS": {
                "description": "#{spriteName} 执行 `action` (`\"#{action}\"`) 时的目的地。 如果`targetPos`被设置了，那么`target`就是空。"
            },
            "de-DE": {
                "description": "Die momentane Zielposition auf welche #{spriteName}s `action` (`\"#{action}\"`) gerichtet ist. Wenn `targetPos` gesetzt ist, ist `target` null."
            },
            "nb": {
                "description": "jeldende målposisjon som #{spriteName} gjør sin `action` (`\"#{action}\"`) mot. Hvis `targetPos` er satt så er `target` null."
            },
            "fr": {
                "description": "La position vers laquelle le #{spriteName} exécute son `action` (`\"#{action}\"`). Si `targetPos` est définie, alors `target` est null."
            },
            "ru": {
                "description": "Координаты цели по отношению к которой #{spriteName} производит своё действие (`\"#{action}\"`). Если `target` (цель) установленна, то `targetPos` будет null."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "targetPos",
                "code": "targetPos"
            },
            "lua": {
                "tab": "targetPos",
                "code": "self.targetPos"
            },
            "clojure": {
                "code": "(.targetPos this)"
            },
            "coffeescript": {
                "tab": "targetPos",
                "code": "@targetPos"
            },
            "python": {
                "tab": "targetPos",
                "code": "self.targetPos"
            },
            "javascript": {
                "tab": "targetPos",
                "code": "this.targetPos"
            }
        },
        "description": "The current target position toward which the #{spriteName} is running its `action` (`\"#{action}\"`). If `targetPos` is set, then `target` is null.",
        "type": "object",
        "name": "targetPos"
    },
    {
        "snippets": {
            "python": {
                "tab": "setTargetPos",
                "code": "self.setTargetPos(${1:targetPos})"
            },
            "coffeescript": {
                "tab": "setTargetPos",
                "code": "@setTargetPos ${1:targetPos}"
            },
            "javascript": {
                "tab": "setTargetPos",
                "code": "this.setTargetPos(${1:targetPos})"
            }
        },
        "args": [
            {
                "default": "",
                "description": "",
                "example": "{x: 30, y: 45}",
                "type": "object",
                "name": "targetPos"
            }
        ],
        "description": "Sets where the #{spriteName} is targeting with its current `action`.",
        "type": "function",
        "name": "setTargetPos"
    },
    {
        "snippets": {
            "python": {
                "tab": "setTargetPos",
                "code": "self.setTargetPos(${1:x},${2:y})"
            },
            "coffeescript": {
                "tab": "setTargetXY",
                "code": "@setTargetXY ${1:x}, ${2:y}"
            },
            "javascript": {
                "tab": "setTargetPos",
                "code": "this.setTargetPos(${1:x},${2:y})"
            }
        },
        "args": [
            {
                "default": "",
                "description": "",
                "example": "30",
                "type": "number",
                "name": "x"
            },
            {
                "default": "",
                "description": "",
                "example": "45",
                "type": "number",
                "name": "y"
            }
        ],
        "description": "Sets where the #{spriteName} is targeting with its current `action`.",
        "type": "function",
        "name": "setTargetXY"
    }
]