[
    {
        "i18n": {
            "bg": {
                "description": "Направи магия `\"fear\"` на целта, ако тя е на разстояние до #{spells.fear.range} метра. Магията ще накара целта да бяга от ужас за #{spells.fear.duration} секунди."
            },
            "sr": {
                "description": "Izvodi 'strah' caroliju na metu ako je u opsegu #{spells.fear.range}, prouzrokavajuci da meta trci u strahu u trajanju od #{spells.fear.duration} sekundi."
            },
            "id": {
                "description": "Melemparkan ` \" ketakutan \" ` mantra ` target` jika dalam # { spells.fear.range } m , menyebabkan ia berjalan di teror untuk # { spells.fear.duration } detik ."
            },
            "ro": {
                "description": "pune o vraja \"fear\" (frica) pe o \"target\" (tinta) cu ajutorul #{spells.fear.range}m, cauzand-o sa fuga de frica pentru #{spells.fear.duration} secunde."
            },
            "da": {
                "description": "Kaster en `\"fear\"` besværgelse på `target` hvis indefor #[spells.fear.range}m, hvilket foresager at personen flygter i #{spells.fear.duration} sekunder."
            },
            "el": {
                "description": "Ρίχνει ένα ξόρκι `Φόβου` στον στόχο , εάν βρίσκεται σε απόσταση #{spells.fear.range}m προκαλώντας τη άτακτη φυγή του για #{spells.fear.duration} δευτερόλεπτα."
            },
            "hu": {
                "description": "Kivet egy `\"fear\"` varázslatot a `target` célpontra, ha az #{spells.fear.range}m-en belül van, amitől az rettegve elszalad #{spells.fear.duration} másodpercig."
            },
            "it": {
                "description": "Lancia un incantesimo `\"fear\"` (paura) su `target` se entro #{spells.fear.range}m, facendolo correre terrorizzato per #{spells.fear.duration} secondi."
            },
            "uk": {
                "description": "Накладає заклинання на ціль `target`, якщо вона в радіусі #{spells.fear.range} метрів, примушуючи її перелякано тікати протягом #{spells.fear.duration} секунд."
            },
            "sv": {
                "description": "Kastar en `\"fear\"`-besvärjelse mot `target` inom #{spells.fear.range}m, målet flyr i skräck under #{spells.fear.duration} sekunder."
            },
            "nl-NL": {
                "description": "Spreekt de betovering `\"fear\"` uit over `target` als deze binnen #{speels.fear.range}m, is. Wat er voor zorgt dat deze in angst wegrent voor de periode van #{spells.fear.duration} seconden."
            },
            "pl": {
                "description": "Rzuca czar \"strach\" na \"cel\" jeżeli w zasięgu #{spells.fear.range}m, sprawiając że będzie uciekać w przerażeniu przez #{spells.fear.duration} sekund"
            },
            "sk": {
                "description": "Kúzli strach `\"fear\"` na `target` do vzdialenosti #{spells.fear.range}m. Cieľ zdesene pobehuje #{spells.fear.duration} sekúnd."
            },
            "pt-BR": {
                "description": "Lança um feitiço de `\"fear\"` no `target` se este estiver dentro de #{spells.fear.range}m, fazendo com que ele corra em terror por #{spells.fear.duration} segundos."
            },
            "nb": {
                "description": "Kaster trylleformularet _frykt_ (`\"fear\"`) mot `target` hvis man er innenfor #{spells.fear.range} meter, som får den til å løpe rundt i #{spells.fear.duration} sekunder."
            },
            "zh-HANS": {
                "description": "如果与目标距离小于#{spells.fear.range}米，使用技能\"恐惧\"，使目标在#{spells.fear.duration}秒内因恐惧而乱跑。"
            },
            "es-419": {
                "description": "Lanza un hechizo `\"fear\"` sobre el `target` si esta dentro de #{spells.fear.range}m, causandole correr en terrorr por #{spells.fear.duration} segundos."
            },
            "ru": {
                "description": "Накладывает `\"fear\"` заклинание на `target` если в пределах #{spells.fear.range}м, заставляет его бежать в страхе на протяжении #[spells.fear.duration} секунд."
            },
            "lt": {
                "description": "Burtas baimė `\"fear\"` burti `target` jei priešas yra  #{spells.fear.range}m, priverčia bėgti apimtą baimės (baimės laikas)  #{fearDuration} sekundes."
            },
            "fr": {
                "description": "Lance un sort `\"fear\"` sur `target` si située à moins de #{spells.fear.range}m, la faisant s'enfuir de terreur pendant #{fearDuration} secondes."
            },
            "de-DE": {
                "description": "Wirkt einen `\"fear\"` Spruch auf ein `target` innerhalb von #{spells.fear.range}m, welches in Panik für #{fearDuration} Sekunden wegrennt."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "fear",
                "code": "cast(\"fear\", ${1:target})"
            },
            "lua": {
                "tab": "fear",
                "code": "self:cast(\"fear\", ${1:target})"
            },
            "clojure": {
                "tab": "fear",
                "code": "(.cast this \"fear\" ${1:target})"
            },
            "python": {
                "tab": "fear",
                "code": "self.cast(\"fear\", ${1:target})"
            },
            "javascript": {
                "tab": "fear",
                "code": "this.cast(\"fear\", ${1:target})"
            },
            "coffeescript": {
                "tab": "fear",
                "code": "@cast \"fear\", ${1:target}"
            }
        },
        "args": [
            {
                "default": "",
                "description": "The target on which to cast \"fear\".",
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
        "description": "Casts a `\"fear\"` spell on `target` if within #{spells.fear.range}m, causing it to run in terror for #{spells.fear.duration} seconds.",
        "type": "function",
        "name": "castFear"
    }
]