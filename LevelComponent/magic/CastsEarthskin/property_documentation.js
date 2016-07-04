[
    {
        "i18n": {
            "bg": {
                "description": "Направи магия `\"earthskin\"` на `target`, ако целта е на разстояние #{spells.earthskin.range} метра. Магията ще увеличи живота на целта #{spells.earthskin.factor} пъти за #{spells.earthskin.duration} секунди.",
                "name": "castEarthskin"
            },
            "da": {
                "description": "Kaster en `\"earthskin\"` besværgelse på `target`, hvis målet er indenfor #{spells.earthskin.range}m, og øger målets liv med en faktor #{spells.earthskin.factor} i #{spells.earthskin.duration} sekunder."
            },
            "sr": {
                "description": "Izvodi `\"zemljina kora\"` caroliju na metu ako je u opsegu #{spells.earthskin.range}, povecavajuci mu zivotnu energiju za faktor od #{spells.earthskin.factor} za vreme trajanja #{spells.earthskin.duration} "
            },
            "hu": {
                "description": "A `\"earthskin\"`(sziklabőr) varázsigét használja `target`-en, ha #{spells.earthskin.range}méteren belül van, az életét #{spells.earthskin.factor} növeli #{spells.earthskin.duration} másodpercig."
            },
            "el": {
                "description": "Ρίχνει ένα ξόρκι `Προστασίας` στον στόχο, εάν είμαστε σε απόσταση #{spells.earthskin.range}m ,αυξάνουμε την υγεία του κατά  #{spells.earthskin.factor} για #{spells.earthskin.duration} δευτερόλεπτα."
            },
            "it": {
                "description": "Lancia un incantesimo `\"earthskin\"`su `target` se entro #{spells.earthskin.range}m, aumentando la sua salute di #{spells.earthskin.factor} per #{spells.earthskin.duration} secondi."
            },
            "ja": {
                "description": "\"earthskin\"という呪文を\"target\"にかける。\"target\"は#{spells.earthskin.range}メートル以内にいなければならない。\"target\"のヘルスは#{spells.earthskin.factor}倍増幅する。持ち期間は#{spells.earthskin.duration}秒である。"
            },
            "pl": {
                "description": "Rzuca czar `\"earthskin\"` na `target`. Jeżeli cel jest w zasięgu #{spells.earthskin.range}m, mnoży punkty życia o #{spells.earthskin.factor} na #{spells.earthskin.duration} sekund."
            },
            "uk": {
                "description": "Накладає заклинання `\"earthskin\"` на ціль `target`, якщо вона в радіусі #{spells.earthskin.range} метрів, збільшуючи її здоров'я на коефіцієнт #{spells.earthskin.factor} протягом #{spells.earthskin.duration} секунд."
            },
            "sv": {
                "description": "Kastar en `\"earthskin\"`-besvärjelse på `target` inom #{spells.earthskin.range}m, ökar dess hälsa med #{spells.earthskin.factor} under #{spells.earthskin.duration} sekunder."
            },
            "nl-NL": {
                "description": "Spreekt een `\"earthskin\"` spreuk uit over `target` als deze binnen #{spells.earthskin.range}m, is. Verhoogt zijn/haar leven met een factor #{spells.earthskin.factor} gedurende #{spells.earthskin.duration} seconden."
            },
            "pt-BR": {
                "description": "Lança um feitiço `\"earthskin\"` no `target` se dentro #{spells.earthskin.range}m, aumentando sua vida por um fator de #{spell.earthskin.factor} por #{spells.earthskin.duration} segundos."
            },
            "sk": {
                "description": "Kúzli `\"earthskin\"` na `target` do vzdialenosti #{spells.earthskin.range}m, zvyšujúc jeho zdravie koeficientom #{spells.earthskin.factor}počas #{spells.earthskin.duration} sekúnd."
            },
            "zh-HANS": {
                "description": "如果`target`在#{spells.earthskin.range}米的范围内, 释放`\"earthskin\"`技能, 以#{spells.earthskin.factor}为因数增加它的生命值长达#{spells.earthskin.duration}秒."
            },
            "nb": {
                "description": "Forhekser `target` med `\"earthskin\"` dersom man er innenfor #{spells.earthskin.range} meter, mens helsen økes med faktor #{spells.earthskin.factor}, i #{spells.earthskin.duration} skunder."
            },
            "ru": {
                "description": "Накладывает \"earthskin\" заклинание на `target` если в #{spells.earthskin.range}m, увеличивая его жизнь при помощи #{spells.earthskin.factor} на #{spells.earthskin.duration} секунд."
            },
            "es-419": {
                "description": "Crea una `\"Piel de tierra\"` sobre el `objetivo` a una distancia de #{spells.earthskin.range}m, incrementando su salud en #{earthskinFactor} durante #{earthskinDuration} segundos."
            },
            "es-ES": {
                "description": "Crea una `\"Piel de tierra\"` sobre el `objetivo` a una distancia de #{spells.earthskin.range}m, incrementando su salud en #{earthskinFactor} durante #{earthskinDuration} segundos."
            },
            "fr": {
                "description": "Lance un sort `\"earthskin\"` sur `target` si située à moins de #{spells.earthskin.range}m, augmentant sa santé via un facteur de #{earthskinFactor} pour #{earthskinDuration} secondes."
            },
            "de-DE": {
                "description": "Wirkt einen `\"earthskin\"` Spruch auf ein `target` innerhalb von #{spells.earthskin.range}m. Dabei erhöhen sich die Lebenspunkte um den Faktor #{earthskinFactor} für #{earthskinDuration} Sekunden."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "earthskin",
                "code": "cast(\"earthskin\", ${1:target})"
            },
            "lua": {
                "tab": "earthskin",
                "code": "self:cast(\"earthskin\", ${1:target})"
            },
            "clojure": {
                "tab": "earthskin",
                "code": "(.cast this \"earthskin\" ${1:target})"
            },
            "python": {
                "tab": "earthskin",
                "code": "self.cast(\"earthskin\", ${1:target})"
            },
            "javascript": {
                "tab": "earthskin",
                "code": "this.cast(\"earthskin\", ${1:target})"
            },
            "coffeescript": {
                "tab": "earthskin",
                "code": "@cast \"earthskin\", ${1:target}"
            }
        },
        "args": [
            {
                "default": "",
                "description": "The target on which to cast \"earthskin\".",
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
        "description": "Casts a `\"earthskin\"` spell on `target` if within #{spells.earthskin.range}m, increasing its health by a factor of #{spells.earthskin.factor} for #{spells.earthskin.duration} seconds.",
        "type": "function",
        "name": "castEarthskin"
    }
]