[
    {
        "i18n": {
            "hu": {
                "description": "Elsüt egy `\"gyökerek\"` varázslatot a célponton, ha az #{spells.root.range}m távolságon belül van, mozgását #{spells.root.duration} másodpercig megakadályozva.",
                "name": "castRoot"
            },
            "bg": {
                "description": "Прави магия `\"root\"` на мишена `target`, ако тя е на разстояние до #{spells.root.range} метра. Магията пречи на целта да се движи за #{spells.root.duration} секунди."
            },
            "sr": {
                "description": "Izvedi 'korenje' caroliju na metu ako je u opsegu #{spells.root.range}, onemogucujuci da se pomera za vreme od #{spells.root.duration} sekundi."
            },
            "es-419": {
                "description": "`Proyecta un ´\"root\"` hechizo sobre `target` si dentro de #{spells.root.range}m, evitando que se mueva durante #{spells.root.duration} segundos."
            },
            "nl-NL": {
                "description": "Voer een \"root\" (wortel) spreuk uit op \"target\" (doelwit), indien binnen #{spells.root.range}m, waardoor bewegen niet mogelijk is voor #spells.root.duration} seconden."
            },
            "el": {
                "description": "Ρίχνει ένα ξόρκι `Ακινησίας` στον στόχο εάν βρίσκεται σε ακτίνα ως #{spells.root.range}m, εμποδίζοντας τον να κινηθεί για #{spells.root.duration} δευτερόλεπτα. "
            },
            "it": {
                "description": "Lancia un incantesimo '\"root\"' su 'target' se dentro #{spells.root.range}m, non permettendogli di muoversi per #{spells.root.duration} secondi."
            },
            "da": {
                "description": "Kaster en `\"root\"` fortryllelse på `target` hvis målet er inden for #{spells.root.range}m, (rækkevidde) hvilket forhindrer målet i at flytte sig i #{spells.root.duration} sekunder."
            },
            "pl": {
                "description": "Rzuć zaklęcie `\"root\"` na `target` o ile znajduje się w #{spells.root.range}m, uniemożliwiając mu ruch przez #{spells.root.duration} sekund."
            },
            "uk": {
                "description": "Накладає заклинання `\"root\"` на ціль `target`, якщо вона в радіусі #{spells.root.range} метрів, не дозволяючи їй рухатись протягом #{spells.root.duration} секунд."
            },
            "sv": {
                "description": "Kasta en `\"root\"`-besvärjelse mot `target` inom #{spells.root.range}m. Målet blir orörligt under #{spells.root.duration} sekunder."
            },
            "es-ES": {
                "description": "Conjura un hechizo \"raíz\" en el \"objetivo\" si se encuentra dentro de #{speels.root.range}m, previniéndolo de moverse por #{spells.root.duration} segundos."
            },
            "pt-BR": {
                "description": "Lança um feitiço `\"root\"` no `target`se estiver dentro de #{spells.root.range}m, impedindo que se mova por #{spells.root.duration} segundos."
            },
            "sk": {
                "description": "Kúzli `\"root\"` na `target`, ak je cieľ v dosahu #{spells.root.range}m. Zabraňuje pohybu počas #{spells.root.duration} sekúnd."
            },
            "zh-HANS": {
                "description": "在`目标单位`上执行 `”裹足不前”`法术，如果在 #{spells.root.range}米内，阻止目标移动 #{spells.root.duration} 秒。"
            },
            "ru": {
                "description": "Кастуйте`\"root\"` на `target` если цель в зоне досигаемости #{spells.root.range}m, лишает цель двигаться на время #{spells.root.duration} "
            },
            "fr": {
                "description": "Lance un sort `\"root\"` sur `target` si située à moins de #{spells.root.range}m, l'empêchant de se déplacer pendant #{rootDuration} secondes."
            },
            "de-DE": {
                "description": "Wirkt einen `\"root\"` Spruch auf `target` innerhalb von #{spells.root.range}m, welcher es für #{rootDuration}s verwurzelt."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "root",
                "code": "cast(\"root\", ${1:target})"
            },
            "lua": {
                "tab": "root",
                "code": "self:cast(\"root\", ${1:target})"
            },
            "clojure": {
                "tab": "root",
                "code": "(.cast this \"root\" ${1:target})"
            },
            "python": {
                "tab": "root",
                "code": "self.cast(\"root\", ${1:target})"
            },
            "javascript": {
                "tab": "root",
                "code": "this.cast(\"root\", ${1:target})"
            },
            "coffeescript": {
                "tab": "root",
                "code": "@cast \"root\", ${1:target}"
            }
        },
        "args": [
            {
                "default": "",
                "description": "The target on which to cast \"root\".",
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
        "description": "Casts a `\"root\"` spell on `target` if within #{spells.root.range}m, preventing it from moving for #{spells.root.duration} seconds.",
        "type": "function",
        "name": "castRoot"
    }
]