[
    {
        "i18n": {
            "fi": {
                "description": "Taikoo `\"drain-life\"` taijan `target`in jos se on #{spells.drain-life.range}metrin etäisyydellä. Taika varastaa #{spells.drain-life.damage} terveyttä ja parantaa saman verran #{spriteName}.",
                "name": "terveydenImu"
            },
            "da": {
                "description": "Kaster en `\"drain-life\"` besværgelse på `target`. Hvis målet er indenfor #{spells.drain-life.range}m stjæles der #{spells.drain-life.damage} liv fra det som gives til #{spriteName}."
            },
            "sr": {
                "description": "Izvodi 'isisavanje zivota' caroliju na metu ako je u opsegu #{spells.drain-life.range}, isisavajuci #{spells.drain-life.damage} zivotnu energiju iz mete i davajuci istu #{spriteName}."
            },
            "es-419": {
                "description": "Proyecta un ´\"drain-life\"` hechizo sobre `target` si dentro de #{spells.drain-life.range} m, robar #{spells.drain-life.damage} la salud de ella y dándole a la # {spriteName}."
            },
            "id": {
                "description": "AST a ` \" menguras kehidupan \" ` mantra ` target` jika dalam # { spells.drain - life.range } m , mencuri # { spells.drain - life.damage } kesehatan dari itu dan memberikan ke # { spriteName } ."
            },
            "bg": {
                "description": "Прави `\"drain-life\"` магия върху мишена, ако е в близост  от #{spells.drain-life.range}m  разстояние, като взима #{spells.drain-life.damage} кръв от нея и я предава на #{spriteName}."
            },
            "ro": {
                "description": "Pune o vraja \"drain-life\" pe o \"target\" folosind #{spells.drain-life.range}m, furand #{spells.drain-life.damage} viata de la el si dandu-io lui #{spiriteName}."
            },
            "el": {
                "description": "Ρίχνει ένα ξόρκι `Απορρόφησης Ζωής` στον στόχο, εάν είμαστε σε απόσταση #{spells.drain-life.range}m ,κλέβουμε #{spells.drain-life.damage} ζωτική ενέργεια από τον εχθρό."
            },
            "hu": {
                "description": "Kivet egy `\"drain-life\"` varázslatot a `target` célpontra, ha az #{spells.drain-life.range}m-en belül van, és ellop tőle #{spells.drain-life.damage} életpontot, amit átad a #{spriteName}nak."
            },
            "it": {
                "description": "Lancia un incantesimo `\"drain-life\"` su `target` se entro #{spells.drain-life.range}m, rubandogli #{spells.drain-life.damage} salute e dandola al #{spriteName}."
            },
            "pl": {
                "description": "Rzuca czar `\"drain-life\"` na `target`. Jeżeli cel jest w zasięgu #{spells.drain-life.range}m, zabiera #{spells.drain-life.damage} punktów życia i przekazuje je #{spriteName}."
            },
            "uk": {
                "description": "Накладає заклинання `\"drain-life\"` на ціль `target`, якщо вона в радіусі #{spells.drain-life.range} метрів, крадучи #{spells.drain-life.damage} здоров'я у неї та передаючи його #{spriteName}."
            },
            "sv": {
                "description": "Kastar en `\"drain-life\"`-besvärjelse mot `target` inom #{spells.drain-life.range}m, stjäl #{spells.drain-life.damage} hälsa från målet och ger det till #{spriteName}."
            },
            "nl-NL": {
                "description": "Spreekt de betovering \"drain-life\" uit over `target` als deze binnen #{spells.drain-life.range}m, stealing #{spells.drain-life.damage} is en geeft deze aan #{spriteName}."
            },
            "sk": {
                "description": "Použije kúzlo `\"drain-life\"` na cieľ v dosahu  #{spells.drain-life.range}m, odoberajúc cieľu  #{spells.drain-life.damage} zdravia. Zdravie sa pridá hrdinovi."
            },
            "pt-BR": {
                "description": "Conjura uma magia de `\"drain-life\"` no `target` se estiver #{spells.drain-life.range}m próximo, roubando #{spells.drain-life.damage} de vida e dando ao #{spriteName}."
            },
            "zh-HANS": {
                "description": "如果对目标在使用技能范围内使用“吸取生命”技能，将从目标中吸取相应血量"
            },
            "nb": {
                "description": "Kaster trylleformularet _tapp liv_ (`\"drain-life\"`) mot `target`, hvis man er innenfor #{spells.drain-life.range} meter. Den stjeler #{spells.drain-life.damage} helse fra den og gir dem til #{spriteName}."
            },
            "ru": {
                "description": "Накладывает \"drain-life\" заклинание на `target`, если в #{spells.drain-life.range}м, крадя #{spells.drain-life.damage} очков здоровья у цели, и отдавая его #{spriteName}."
            },
            "es-ES": {
                "description": "Lanza el hechizo '\"Drenar Vida\"' al 'objetivo' en un radio de #{spells.drain-life.range}m, robándole #{drainLifeDamage} de vida y devolviendola a #{spriteName}."
            },
            "fr": {
                "description": "Lance un sort `\"drain-life\"` sur `target` si située à moins de #{spells.drain-life.range}m, lui volant #{drainLifeDamage} points de vie et les donnants au #{spriteName}."
            },
            "de-DE": {
                "description": "Wirkt einen `\"drain-life\"` Spruch auf ein `target` innerhalb der #{spells.drain-life.range}m, und stiehlt #{drainLifeDamage} Lebenspunkte vom Ziel und addiert sie zu #{spriteName}."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "drain-life",
                "code": "cast(\"drain-life\", ${1:target})"
            },
            "lua": {
                "tab": "drain-life",
                "code": "self:cast(\"drain-life\", ${1:target})"
            },
            "clojure": {
                "tab": "drain-life",
                "code": "(.cast this \"drain-life\" ${1:target})"
            },
            "python": {
                "tab": "drain-life",
                "code": "self.cast(\"drain-life\", ${1:target})"
            },
            "javascript": {
                "tab": "drain-life",
                "code": "this.cast(\"drain-life\", ${1:target})"
            },
            "coffeescript": {
                "tab": "drain-life",
                "code": "@cast \"drain-life\", ${1:target}"
            }
        },
        "args": [
            {
                "default": "",
                "description": "The target on which to cast \"drain-life\".",
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
        "description": "Casts a `\"drain-life\"` spell on `target` if within #{spells.drain-life.range}m, stealing #{spells.drain-life.damage} health from it and giving it to the #{spriteName}.",
        "type": "function",
        "name": "castDrainLife"
    }
]