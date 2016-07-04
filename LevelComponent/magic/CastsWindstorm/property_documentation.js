[
    {
        "i18n": {
            "bg": {
                "description": "Прави магия `\"windstorm\"` центрирана върху мишена `target`, ако тя е на разстояние до #{spells.windstorm.range} метра. Магията отблъсква назад всички физически ракети и бойни единици надалеч от епицентъра."
            },
            "sv": {
                "description": "Kastar en `\"windstorm\"` besvärjelse centrerad på `target` om inom #{spells.windstorm.range}m, vilket slår tillbaka alla fysiska missiler och knuffar enheter from dess epicenter."
            },
            "sr": {
                "description": "Izvodi 'Oluja' caroliju, centralizovanu na meti ako je unutar opsega #{spells.windstorm.range}, ponistavajuci sve fizicke projektile i samarajuci sve jedinice od epicentra ka spolja."
            },
            "nl-NL": {
                "description": "Voert een \"windstorm\" spreuk uit op het \"target\" (doelwit), indien binnen een straal van #{spells.windstorm.range}m, waardoor alle physieke raketten worden teruggeblazen en troepen worden weggeschud. "
            },
            "el": {
                "description": "Ρίχνει ένα `Ανεμοθύελλας`, με επίκεντρο στόχο που βρίσκεται σε ακτίνα ως #{spells.windstorm.range}m, απομακρύνοντας από το επίκεντρο πύραυλους και οτιδήποτε άλλο βρεί στο δρόμο του."
            },
            "it": {
                "description": "Lancia un incantesimo `\"windstorm\"` centrato su `target` se entro #{spells.windstorm.range}m, respingendo ogni missile fisico ed allontando le unità lontano dall'epicentro."
            },
            "es-419": {
                "description": "Proyecta una `\"tormenta\"` de hechizo centrado en el `objetivo` si dentro #{spells.windstorm.range}m, derribando a cualquier misil físico y unidades combate de distancia del epicentro."
            },
            "pt-BR": {
                "description": "Conjura a magia `\"windstorm\"` centrada no `target` dentro de #{spells.windstorm.range}m, rebatendo qualquer míssel físico e empurrando unidades para longe do epicentro."
            },
            "uk": {
                "description": "Накладає заклинання `\"windstorm\"` центроване на цілі `target`, якщо вона в радіусі #{spells.windstorm.range} метрів, відкидаючи будь-які фізичні ракети та об'єкти від епіцентру."
            },
            "sk": {
                "description": "Kúzli `\"windstorm\"` na `target`, ak je cieľ v dosahu #{spells.windstorm.range}m. Odráža strely od epicentra."
            },
            "zh-HANS": {
                "description": "如果`目标单位`在 #{spells.windstorm.range}米内，在`目标单位`上执行 `”风暴”`法术，从震中挡回任何物理炮弹，和敌方单位。"
            },
            "ru": {
                "description": "Кастует `\"windstorm\"` с центром в `target` и радиусом #{spells.windstorm.range}m, отбрасывает назад все не магические снаряды и отбрасывает врагов от эпицентра."
            },
            "fr": {
                "description": "Lance un sort `\"windstorm\"` centré sur `target` si à #{spells.windstorm.range}m, repoussant tous missiles et unités loin de l'épicentre."
            },
            "de-DE": {
                "description": "Wirkt einen`\"windstorm\"` Spruch, zentriert auf `target` wenn innerhalb von #{spells.windstorm.range}m. Physische Geschosse und Einheiten werden vom Epizentrum zurück geworfen."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "windstorm",
                "code": "cast(\"windstorm\", ${1:target})"
            },
            "lua": {
                "tab": "windstorm",
                "code": "self:cast(\"windstorm\", ${1:target})"
            },
            "clojure": {
                "tab": "windstorm",
                "code": "(.cast this \"windstorm\" ${1:target})"
            },
            "python": {
                "tab": "windstorm",
                "code": "self.cast(\"windstorm\", ${1:target})"
            },
            "javascript": {
                "tab": "windstorm",
                "code": "this.cast(\"windstorm\", ${1:target})"
            },
            "coffeescript": {
                "tab": "windstorm",
                "code": "@cast \"windstorm\", ${1:target}"
            }
        },
        "args": [
            {
                "default": "",
                "description": "The target on which to cast \"windstorm\", if not the caster.",
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
        "description": "Casts a `\"windstorm\"` spell centered on `target` if within #{spells.windstorm.range}m, knocking back any physical missiles and buffeting units away from the epicenter.",
        "type": "function",
        "name": "castWindstorm"
    }
]