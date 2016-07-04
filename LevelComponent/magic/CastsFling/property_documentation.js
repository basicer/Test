[
    {
        "i18n": {
            "bg": {
                "description": "Прави магия `\"fling\"` върху мишена `target`, ако тя е на разстояние до #{spells.fling.range} метра. Магията захвърля целта надалеч от #{spriteName}."
            },
            "da": {
                "description": "Kaster en `\"fling\"` besværgelse på `target`. Hvis målet er indenfor #{spells.fling.range}m kastes det væk fra #{spriteName}."
            },
            "sr": {
                "description": "Izvodi 'terevenka' caroliju na metu ako je u opsegu #{spells.fling.range}, cineci da meta terevenci udaljavajuci se od #{spriteName}."
            },
            "es-419": {
                "description": "Proyecta un `\"fling\"` hechizo sobre `target` si dentro de #{spells.fling.range}m, arrojándola lejos del #{spriteName}."
            },
            "hu": {
                "description": "Ha `target` #{spells.fling.range} méteren belül van, a `\"fling\"`(dobás) varázsigét használja `target` rajta, ellökve őt #{spriteName}-tól."
            },
            "el": {
                "description": "Ρίχνει ένα ξόρκι `εκτίναξης` στον στόχο εάν βρίστεται σε απόσταση #{spells.fling.range}m, εκτινάσοντας τον στόχο μακριά από τον ήρωα."
            },
            "it": {
                "description": "Lancia un incantesimo `\"fling\"` su `target` se entro #{spells.fling.range}m, lanciandolo via dal #{spriteName}."
            },
            "nl-NL": {
                "description": "Stuur een 'smijt' vloek uit over een 'doelwit' if within #{spells.fling.range}m, flingen it away from the #{SpiriteName}."
            },
            "pl": {
                "description": "Rzuca czar `\"fling\"` na `target`. Jeżeli cel jest w zasięgu #{spells.fling.range}m, odrzuca go od #{spriteName}."
            },
            "uk": {
                "description": "Накладає заклинання `\"fling\"` на ціль `target`, якщо вона в радіусі #{spells.fling.range} метрів, жбурляючи її геть від #{spriteName}."
            },
            "sv": {
                "description": "Kastar en `\"fling\"`-besvärjelse mot `target` inom #{spells.fling.range}m, slänger iväg målet från #{spriteName}."
            },
            "pt-BR": {
                "description": "Lança um feitiço `\"fling\"` no `target` se dentro de #{spells.fling.range}m, lançando-o para longe de #{spriteName}."
            },
            "sk": {
                "description": "Kúzli `\"fling\"` na `target` v dosahu #{spells.fling.range}m. Kúzlo odhadzuje cieľ od hrdinu."
            },
            "zh-HANS": {
                "description": "如果`target`在#{spells.fling.range}公尺的范围内, 对`target`施放`\"fling\"`技能, 将他打离#{spriteName}."
            },
            "nb": {
                "description": "Kaster trylleformelen `\"fling\"` (sleng) mot `target`, om innenfor #{spells.fling.range} meter, som slenger den bort fra #{spriteName}."
            },
            "es-ES": {
                "description": "invoca un echizo de `\"fling\"` sobre un `target` dentro de #{spells.fling.range}m, lanzandolo lejos del  #{spriteName}."
            },
            "ru": {
                "description": "Накладывает `\"fling\"` заклинание на `target` если в радиусе #{spells.fling.range}м, отбрасывая его от #{spriteName}."
            },
            "fr": {
                "description": "Lance un sort `\"fling\"` sur `target` si située à moins de #{spells.fling.range}m, la lançant loin du #{spriteName}."
            },
            "de-DE": {
                "description": "Wirkt einen`\"fling\"` Spruch auf ein `target` innerhalb von #{spells.fling.range}m. Stößt das Ziel zurück von #{spriteName}."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "fling",
                "code": "cast(\"fling\", ${1:target})"
            },
            "lua": {
                "tab": "fling",
                "code": "self:cast(\"fling\", ${1:target})"
            },
            "clojure": {
                "tab": "fling",
                "code": "(.cast this \"fling\" ${1:target})"
            },
            "python": {
                "tab": "fling",
                "code": "self.cast(\"fling\", ${1:target})"
            },
            "javascript": {
                "tab": "fling",
                "code": "this.cast(\"fling\", ${1:target})"
            },
            "coffeescript": {
                "tab": "fling",
                "code": "@cast \"fling\", ${1:target}"
            }
        },
        "args": [
            {
                "default": "",
                "description": "The target on which to cast \"fling\".",
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
        "description": "Casts a `\"fling\"` spell on `target` if within #{spells.fling.range}m, flinging it away from the #{spriteName}.",
        "type": "function",
        "name": "castFling"
    }
]