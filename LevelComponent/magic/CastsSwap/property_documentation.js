[
    {
        "i18n": {
            "bg": {
                "description": "Прави магия `\"swap\"` на мишена `target`, ако тя е на разстояние до #{spells.swap.range} метра. Магията разменя позицията на целта с твоята."
            },
            "sv": {
                "description": "Kasta besvärjelsen `\"swap\"` på `target` om inom #{spells.swap.range}m, för att byta dess position med din."
            },
            "sr": {
                "description": "Izvodi 'Zamena' caroliju na zadatu metu ako je u opsegu within #{spells.swap.range}, zamenjujuci njegu poziciju sa tvojom."
            },
            "nl-NL": {
                "description": "Voert een \"swap\" (verwissel) spreuk uit op het 'target' (doelwit), indien binnen @{spells.swap.range}m, waardoor de positie van het doelwit met wordt verwisseld met die van jou. "
            },
            "el": {
                "description": "Ρίχνει ένα ξόρκι `Ανταλλαγής`, σε στόχο που βρίσκεται σε ακτίνα ως #{spells.swap.range}m, αλλάζοντας τη θέση του με του ήρωα σου."
            },
            "it": {
                "description": "Lancia un incantesimo `\"swap\"` su `target` se dentro #{spells.swap.range}m, scambiando la sua posizione con la tua."
            },
            "es-419": {
                "description": "Lanza un hechizo de 'Intercambio' en el 'objetivo' if within #{spells.swap.range}m , intercambiando su posición con la tuya."
            },
            "pl": {
                "description": "Rzucenie czaru `\"swap\"` na `cel` jest możliwe jeśli znajduje się on w zasigu #{spells.swap.range}m, czar zamienia Twoją pozycję z pozycją `cel`'u ."
            },
            "pt-BR": {
                "description": "Conjura a habilidade `\"swap\"` no `target` dentro de #{spells.swap.range}m, trocando sua posição com a dele."
            },
            "uk": {
                "description": "Накладає заклинання `\"swap\"` на ціль `target`, якщо вона в радіусі #{spells.swap.range} метрів, міняючи її з вами місцями."
            },
            "sk": {
                "description": "Kúzli `\"swap\"` na `target`, ak je  v dosahu  #{spells.swap.range}m. Kúzlo vymieňa tvoju pozíciu s cieľom."
            },
            "zh-HANS": {
                "description": "如果`目标单位`在 #{spells.swap.range}米内，在`目标单位`上执行 `”交换”`法术，交换它和你的位置。"
            },
            "ru": {
                "description": "Кастуйте `\"swap\"` на `target` если цель в зоне действия #{spells.swap.range}m, меняет местами заклинателя и цель."
            },
            "fr": {
                "description": "Lance un sort `\"swap\"` sur `target` si située à moins de #{spells.swap.range}m, échangeant sa position avec la votre."
            },
            "de-DE": {
                "description": "Wirkt einen `\"swap\"` Spruch auf `target` innerhalb von #{spells.swap.range}m, welcher die Position von Zauberer und Ziel vertauscht."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "swap",
                "code": "cast(\"swap\", ${1:target})"
            },
            "lua": {
                "tab": "swap",
                "code": "self:cast(\"swap\", ${1:target})"
            },
            "clojure": {
                "tab": "swap",
                "code": "(.cast this \"swap\" ${1:target})"
            },
            "python": {
                "tab": "swap",
                "code": "self.cast(\"swap\", ${1:target})"
            },
            "javascript": {
                "tab": "swap",
                "code": "this.cast(\"swap\", ${1:target})"
            },
            "coffeescript": {
                "tab": "swap",
                "code": "@cast \"swap\", ${1:target}"
            }
        },
        "args": [
            {
                "default": "",
                "description": "The target on which to cast \"swap\".",
                "example": {
                    "io": "findNearestEnemy",
                    "lua": "self:findNearestEnemy()",
                    "clojure": "(.findNearestEnemy this)",
                    "coffeescript": "@findNearestEnemy()",
                    "python": "self.findNearestEnemy()",
                    "javascript": "this.findNearestEnemy()"
                },
                "type": "object",
                "name": "target"
            }
        ],
        "description": "Casts a `\"swap\"` spell on `target` if within #{spells.swap.range}m, swapping its position with yours.",
        "type": "function",
        "name": "castSwap"
    }
]