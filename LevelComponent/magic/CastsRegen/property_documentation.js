[
    {
        "i18n": {
            "hu": {
                "description": "Elsüt egy `\"regeneráció\"` varázslatot a célponton, ha az #{spells.regen.range}m távolságon belül van, #{spells.regen.repeatsEvery} másodpercenként visszaadva neki #{spells.regen.health} HP-t, #{spells.regen.duration} ideig.",
                "name": "castRegen"
            },
            "bg": {
                "description": "Прави магия `\"regen\"` на мишена `target`, ако тя на разстояние до #{spells.regen.range} метра. Магията дава допълнителни #{spells.regen.health} HP всеки #{spells.regen.repeatsEvery} секунди за общо #{spells.regen.duration} секунди."
            },
            "sr": {
                "description": "Izvodi 'oporavak' caroliju na metu ako je u opsegu #{spells.regen.range}, davajuci meti dodatne #{spells.regen.health} zivotne bodove svake sekunde #{spells.regen.repeatsEvery} narednih #{spells.regen.duration} sekundi."
            },
            "nl-NL": {
                "description": "Voer een \"regen\" (herstel) spreuk uit op \"target\" (doelwit), indien binnen #{spells.regen.range}m, geeft het doelwit een extra #spells.regen.health} HP iedere #spells.regen.repeartsEvery)s for #{spells.regen.duration} seconden."
            },
            "el": {
                "description": "Ρίχνει ένα ξόρκι `Αναγέννησης` στον στόχο εάν βρίσκεται σε ακτίνα  ως #{spells.regen.range}m , προσθέτοντας πόντους ζωτικής ενέργειας #{spells.regen.health} για  #{spells.regen.duration} δευτερόλεπτα. "
            },
            "it": {
                "description": "Lancia un incantesimo `\"regen\"` su `target` se entro #{spells.regen.range}m, dandogli #{spells.regen.health} HP extra ogni #{spells.regen.repeatsEvery}s per #{spells.regen.duration} secondi."
            },
            "pl": {
                "description": "Rzuć zaklęcie `\"regen\"` na `target` o ile znajduje się w zasięgu #{spells.regen.range}m , dając celowi dodatkowe #{spells.regen.health} HP co #{spells.regen.repeatsEvery}s przez #{spells.regen.duration} sekund."
            },
            "uk": {
                "description": "Накладає заклинання `\"regen\"` на ціль `target`, якщо вона в радіусі #{spells.regen.range} метрів, даючи цілі додатково #{spells.regen.health} HP (хіт-пойнтів) кожні #{spells.regen.repeatsEvery} с протягом #{spells.regen.duration} секунд."
            },
            "sv": {
                "description": "Kasta en `\"regen\"`-besvärjelse mot `target` inom #{spells.regen.range}m, ger målet #{spells.regen.health} hälsa var #{spells.regen.repeatsEvery}s under #{spells.regen.duration} sekunder."
            },
            "pt-BR": {
                "description": "Lança um feitiço `\"regen\"` no `target`se estiver dentro de #{spells.regen.range}m, dando ao alvo uma recuperação extra de HP de #{spells.regen.health} a cada #{spells.regen.repeatsEvery}s por #{spells.regen.duration} segundos."
            },
            "es-419": {
                "description": "Lanza un `\"regen\"` hechizo sobre `target` si dentro de #{spels.regen.range}m, dando al objetivo un extra #{spells.regen.health} HP para #{spells.regen.repeatsEvery}s cada {spells.regen.duration} segundos."
            },
            "sk": {
                "description": "Kúzli `\"regen\"` na `target` v dosahu #{spells.regen.range}m. Pridáva cieľu extra #{spells.regen.health} HP každých #{spells.regen.repeatsEvery}s po dobu #{spells.regen.duration} sekúnd."
            },
            "zh-HANS": {
                "description": "在`目标单位`上执行 `”恢复”`法术，如果在 #{spells.regen.range}米内，持续#{spells.regen.duration} 秒，每秒恢复目标#{spells.regen.health} 血量。"
            },
            "ru": {
                "description": "Накладывает заклинание '\"regen\"' на `target` если в #{spells.regen.range}м, восстанавливая #{spells.drain-life.damage} очков здоровья каждые #{spells.regen.repeatsEvery} в течение #{spells.regen.duration} секунд."
            },
            "fr": {
                "description": "Lance un sort `\"regen\"` sur `target` si située à moins de #{spells.regen.range}m, rendant à la cible #{regenAddend} HP toutes les #{regenRepeatsEvery}s pendant #{regenDuration} secondes."
            },
            "de-DE": {
                "description": "Wirkt einen `\"regen\"` Spruch auf `target` innerhalb von #{spells.regen.range}m, welcherg dem Ziel #{regenAddend} HP alle #{regenRepeatsEvery}s für #{regenDuration}s gibt."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "regen",
                "code": "cast(\"regen\", ${1:target})"
            },
            "lua": {
                "tab": "regen",
                "code": "self:cast(\"regen\", ${1:target})"
            },
            "clojure": {
                "tab": "regen",
                "code": "(.cast this \"regen\" ${1:target})"
            },
            "python": {
                "tab": "regen",
                "code": "self.cast(\"regen\", ${1:target})"
            },
            "javascript": {
                "tab": "regen",
                "code": "this.cast(\"regen\", ${1:target})"
            },
            "coffeescript": {
                "tab": "regen",
                "code": "@cast \"regen\", ${1:target}"
            }
        },
        "args": [
            {
                "default": "",
                "description": "The target to regenerate.",
                "example": {
                    "python": "self",
                    "javascript": "this"
                },
                "type": "Thang",
                "name": "target"
            }
        ],
        "description": "Casts a `\"regen\"` spell on `target` if within #{spells.regen.range}m, giving the target an extra #{spells.regen.health} HP every #{spells.regen.repeatsEvery}s for #{spells.regen.duration} seconds.",
        "type": "function",
        "name": "castRegen"
    }
]