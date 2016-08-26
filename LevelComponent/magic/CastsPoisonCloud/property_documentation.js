[
    {
        "i18n": {
            "hu": {
                "description": "Méregfelhőt (`\"poison-cloud\"`) varázsol a célponton (`target`), ha az #{spells.poison-cloud.range}m -en belül van. Megmérgez minden egységet #{spells.poison-cloud.radius} egységen belül.",
                "name": "MeregFelhoVarazslat"
            },
            "bg": {
                "description": "Прави магия `\"poison-cloud\"` на мишена `target`, ако тя е на разстояние до #{spells.poison-cloud.range} метра. Магията отравя всяка единица в радиус от #{spells.poison-cloud.radius} метра."
            },
            "sr": {
                "description": "Izvodi 'otrovni oblak' caroliju na metu ako je u opsegu #{spells.poison-cloud.range}, sve jedinice u radiusu od #{spells.poison-cloud.radius} bice otrovane"
            },
            "es-419": {
                "description": "Arroja un `\"poison-cloud\"` hechizo sobre `target` si dentro de #{spells.poison-cloud.range}m, envenenando cada unidad dentro de un radio de #{spells.poison-cloud.radius}."
            },
            "el": {
                "description": "Ρίχνει ένα ξόρκι `Δηλητηριασμένου Συννέφου` στον στόχο, εάν βρίσκεται σε απόσταση ως #{spells.poison-cloud.range}m, δηλητηριάζοντας οτιδήποτε σε ακτίνα #{spells.poison-cloud.radius}."
            },
            "nl-NL": {
                "description": "Werp een 'poison-cloud' spreuk over je 'target' als hij binnen #{spells.poison-cloud.range}m, hiermee vergiftig je iedere unit binnen de straal van #{spells.poison-cloud.radius}."
            },
            "it": {
                "description": "Lancia un incantesimo `\"poison-cloud\"` su `target` se entro #{spells.poison-cloud.range}m, avvelenando ogni unita dentro un raggio di #{spells.poison-cloud.radius}."
            },
            "pl": {
                "description": "Rzuca zaklęcie '\"posion-cloud\"' na 'target' jeżeli jest w zasięgu #{spells.poison-cloud.range}m, zatruwając każdą jednostkę w promieniu #{spells.poison-cloud.radius}."
            },
            "uk": {
                "description": "Накладає заклинання `\"poison-cloud\"` на ціль `target`, якщо вона в радіусі #{spells.poison-cloud.range} метрів, отруюючи всі цілі в радіусі #{spells.poison-cloud.radius}."
            },
            "sv": {
                "description": "Kastar en `\"poison-cloud\"`-besvärjelse mot `target` inom #{spells.poison-cloud.range}m, alla inom en #{spells.poison-cloud.radius} radie blir förgiftade."
            },
            "pt-BR": {
                "description": "Lança um feitiço `\"poison-cloud\"` no `target` se dentro de #{spells.poison-cloud.range}m, envenenando todas as unidades dentro de um raio de #{spells.poison-cloud.radius}m."
            },
            "sk": {
                "description": "Kúzli `\"poison-cloud\"` na `target` v dosahu #{spells.poison-cloud.range}m. Otrávi všetko v okruhu #{spells.poison-cloud.radius}."
            },
            "es-ES": {
                "description": "Lanza el echizo `\"poison-cloud\"` sobre un `target` si se encuentra dentro de #{spells.poison-cloud.range}m, envenena cada unidad dentro de un radio de  #{spells.poison-cloud.radius}."
            },
            "zh-HANS": {
                "description": "如果`target`在#{spells.poison-cloud.range}公尺的范围内, 对`target`施放`\"poison-cloud\"`技能, 使每一个在#{spells.poison-cloud.radius}范围内的单位中毒."
            },
            "ru": {
                "description": "Применить заклинание `\"poison-cloud\"` на `target` если она находится в пределах #{spells.poison-cloud.range}m. Отравляет каждого юнита в пределах радиуса #{spells.poison-cloud.radius} "
            },
            "fr": {
                "description": "Lance un sort `\"poison-cloud\"` sur `target` si située à moins de #{spells.poison-cloud.range}m, empoisonnant toute unité dans un rayon de #{poisonCloudRadius}m."
            },
            "de-DE": {
                "description": "Wirkt einen `\"poison-cloud\"` Spruch auf `target` innerhalb von #{spells.poison-cloud.range}m. Vergiftet jede Einheit innerhalb eines Radius von #{poisonCloudRadius}m."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "poison-cloud",
                "code": "cast(\"poison-cloud\", ${1:target})"
            },
            "lua": {
                "tab": "poison-cloud",
                "code": "self:cast(\"poison-cloud\", ${1:target})"
            },
            "clojure": {
                "tab": "poison-cloud",
                "code": "(.cast this \"poison-cloud\" ${1:target})"
            },
            "python": {
                "tab": "poison-cloud",
                "code": "self.cast(\"poison-cloud\", ${1:target})"
            },
            "javascript": {
                "tab": "poison-cloud",
                "code": "this.cast(\"poison-cloud\", ${1:target})"
            },
            "coffeescript": {
                "tab": "poison-cloud",
                "code": "@cast \"poison-cloud\", ${1:target}"
            }
        },
        "args": [
            {
                "default": "",
                "description": "The target unit or position to poison.",
                "example": {
                    "python": "self.getNearestEnemy()",
                    "javascript": "this.getNearestEnemy()"
                },
                "type": "Thang",
                "name": "target"
            }
        ],
        "description": "Casts a `\"poison-cloud\"` spell on `target` if within #{spells.poison-cloud.range}m, poisoning every unit within a radius of #{spells.poison-cloud.radius}.",
        "type": "function",
        "name": "castPoisonCloud"
    }
]