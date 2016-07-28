[
    {
        "i18n": {
            "hu": {
                "description": "Elsüt egy `\"áldozat\"` varázslatot egy szövetséges játékoson, ha az #{spells.sacrifice.range}m távolságon belül van, ezzel a játékost megöli, életerejének, sebzésének és sebességének egy részét pedig átadja a kedvezményezett játékosnak.",
                "name": "castSacrifice"
            },
            "bg": {
                "description": "Прави магия `\"sacrifice\"` на съюзническа мишена `target`, ако тя е на разстояние до #{spells.sacrifice.range} метра. Магията убива целта и прехвърля част от нейния живот, сила на атака и скорост към 'recipient'."
            },
            "pl": {
                "description": "Rzuca czar poświęcenia (`\"sacrifice\"`) na sprzymierzony z tobą cel jeśli jest w zasięgu #{spells.sacrifice.range}m, zabijając cel i przekazując część jego punktów zdrowia, zniszczenia i szybkości rzucającemu czar."
            },
            "sv": {
                "description": "Kastar en `\"sacrifice\"`-besvärjelse på ett alierat `target` om inom #{spells.sacrifice.range}m, besegra 'target' och ge en del av dess hälsa, skada, och hastighet till 'recipient'."
            },
            "sr": {
                "description": "Izvodi 'zrtvovanje' caroliju na prijateljsku metu ako je u opsegu #{spell.sacrifice.range}, ubijajuci metu i prosledjivajuci deo zivotnih bodovam, snage i brzine na primaoca."
            },
            "es-419": {
                "description": "Arroja un `\"sacrifice\"` hechizo en un aliado 'target` si dentro de #{spells.sacrifice.range}m, matando al 'target' y que pasa una parte de su salud, daños, y la velocidad al 'recipiente'."
            },
            "nl-NL": {
                "description": "Voert een \"sacrifice\" (opoffer) spreuk uit op een vriendschappelijk \"target\" (doelwit), indien binnen #{spells.sacrifice.range}m, waardoor het doelwit dood gaat en een deel van zijn gezondheid, schade en snelheid wordt overgedragen aan de ontvanger."
            },
            "sk": {
                "description": "Použije obetné kúzlo \"sacrifice\"` na spojenecký cieľ `target` , ak sa nachádza v dosahu #{spells.sacrifice.range}m. Cieľ bude usmrtený a časť jeho zdravia, ujmy a rýchlosti prejde na príjemcu."
            },
            "zh-HANS": {
                "description": "111"
            },
            "el": {
                "description": "Ρίχνει ένα ξόρκι `Θυσίας` σε ένα φιλικό στόχο εάν βρίσκεται σε ακτίνα ως #{spells.sacrifice.range}m, σκοτωνώντας το στόχο και μεταφέροντας ένα κομμάτι της ζωτικήε του ενέργεια και ταχύτητας στον μάγο. "
            },
            "es-ES": {
                "description": "Castea el hechizo `\"sacrifice\"` a un aliado `target` si está en un radio #{spells.sacrifice.range}m,mata al 'target' y transfiera una porción de la vida, daño, y velocidad al 'recipient'."
            },
            "it": {
                "description": "Lancia un incantesimo`\"sacrifice\"`su un `target` alleato se dentro #{spells.sacrifice.range}m, uccidendo 'target' e passando una porzione della sua vita, del valore di attacco e della velocità al 'recipient'."
            },
            "de-DE": {
                "description": "Belegt ein verbündetes `target` mit einem `\"sacrifice\"` Zauber, wenn innerhalb #{spess.sacrifice.range}m wird 'target' getötet und einen Teil Lebensenergie, Schaden und Geschwindigkeit wird auf den 'recipient' übertragen."
            },
            "pt-BR": {
                "description": "Lança a magia `\"sacrifice\"` em um `target` aliado dentro de #{spells.sacrifice.range}m, matando o 'target' e transferindo parte de sua vida, dano e velocidade para o 'recipient'."
            },
            "fr": {
                "description": "Lancez un sort `\"sacrifice\"` sur une `cible` alliée si elle se trouve dans les #{spells.sacrifice.range}m, tuant la 'cible' et transférant une portion de sa santé, dégats, et vitesse au 'récipient'."
            },
            "ru": {
                "description": "Произносит заклинание \"Жертва\" (`\"sacrifice\"`) на союзную цель (`target`) в радиусе #{spells.sacrifice.range}м, убивая ее ('target') передает все значения здоровья, урона и скорости получателю ('recipient')."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "code": "cast(\"sacrifice\", ${1:target}, ${2:recipient})",
                "tab": "sacrifice"
            },
            "lua": {
                "code": "self:cast(\"sacrifice\", ${1:target}, ${2:recipient})",
                "tab": "sacrifice"
            },
            "clojure": {
                "code": "(.cast this \"sacrifice\" ${1:target} ${2:recipient})",
                "tab": "sacrifice"
            },
            "coffeescript": {
                "tab": "sacrifice",
                "code": "@cast \"sacrifice\", ${1:target}, ${2:recipient}"
            },
            "javascript": {
                "code": "this.cast(\"sacrifice\", ${1:target}, ${2:recipient})",
                "tab": "sacrifice"
            },
            "python": {
                "tab": "sacrifice",
                "code": "self.cast(\"sacrifice\", ${1:target}, ${2:recipient})"
            }
        },
        "args": [
            {
                "description": "This is a friend that will be killed in order to increase the stats of the target.",
                "example": {
                    "io": "findNearest(findFriends)",
                    "lua": "self:findNearest(self:findFriends())",
                    "clojure": "(.findNearest this (.findFriends this))",
                    "coffeescript": "@findNearest(@findFriends())",
                    "javascript": "this.findNearest(this.findFriends())",
                    "python": "self.findNearest(self.findFriends())"
                },
                "type": "object",
                "name": "target"
            },
            {
                "description": "The recipient of the spell.  This unit will receive a buff based on the stats of the victim..",
                "example": {
                    "io": "self",
                    "lua": "self",
                    "clojure": "this",
                    "coffeescript": "@",
                    "python": "self",
                    "javascript": "this"
                },
                "type": "object",
                "name": "recipient"
            }
        ],
        "description": "Casts a `\"sacrifice\"` spell on an allied `target` if within #{spells.sacrifice.range}m, killing the 'target' and passing a portion of its health, damage, and speed to the 'recipient'.",
        "type": "function",
        "name": "castSacrifice"
    }
]