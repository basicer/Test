[
    {
        "i18n": {
            "bg": {
                "description": "Прави магия `\"shockwave\"` на мишена `target`, ако тя е на разстояние до #{spells.shockwave.range} метра. Магията изхвърля целта назад надалеч от изричащия магията като нанася до #{spells.shockwave.damage} точки поражения на единици в епицентъра ѝ."
            },
            "sr": {
                "description": "Izvodi ' udarni talas ' caroliju na metu ako je u opsegu #{spells.shockwave.range}, minira zeljenu povrsinu koja moze biti udaljena od Izvodjaca i dodeljuje stetu do #{spells.shockwave.damage} jedinicama koje se nalaze u epicentru."
            },
            "nl-NL": {
                "description": "Voert een \"shockwave\" (schokgolf) spreak uit op het doelwit, indien binnen #{spells.shockwave.range}m, wat alles wegblaast van de tovernaar en een schade tot wel #{spells.shockwave.damage} veroorzaakt aan eenheden die worden getroffen."
            },
            "el": {
                "description": "Ρίχνει ένα ξόρκι `Κρουστικού Κύματος` σε στόχο που βρίσκεται σε ακτίνα ως #{spells.shockwave.range}m, απομακρύνοντας τον από τον μάγο και προκαλώντας #{spells.shockwave.damage} σε όσους βρίσκονται στο επίκεντρο του κύματος."
            },
            "it": {
                "description": "Lancia un incantesimo `\"shockwave\"` su `target` se dentro  #{spells.shockwave.range}m, sparandolo lontano dal lanciatore e portando fino a #{spells.shockwave.damage} danni alle unità trovatesi nell'epicentro."
            },
            "sv": {
                "description": "Lägger en `\"shockwave\"`-besvärjelse på `target` om inom #{spells.shockwave.range}m, kastar målet bort från besvärjaren och orsakar upp till #{spells.shockware.damage} i skada på enheter fångade i epicentrum."
            },
            "pl": {
                "description": "Rzuć zaklęcie `\"shockwave\"` na `target` o ile znajduje się w #{spells.shockwave.range}m, odpychające wroga od rzucającego i zadające do #{spells.shockwave.damage} jednostkom znajdujcym się w centrum zaklęcia.\n"
            },
            "es-419": {
                "description": "Proyecta una `\" onda de choque \"` `deletrear en target` si dentro # {spells.shockwave.range} m, voladura de nuevo lejos del lanzador y hacer frente a # {spells.shockwave.damage} a unidades atrapadas en el epicentro\n"
            },
            "uk": {
                "description": "Накладає заклинання `\"shockwave\"` на ціль `target`, якщо вона в радіусі #{spells.shockwave.range} метрів, відкидаючи її від чаклуна та завдаючи до #{spells.shockwave.damage} ушкоджень об'єктам, застигнутим у епіцентрі."
            },
            "pt-BR": {
                "description": "Lança um feitiço `\"shockwave\"` (onda de choque) no `target` se estiver dentro de #{spells.shockwave.range}m, explodindo para longe do feiticeiro e causando até #{spells.shockwave.damage} nas unidades pegas no epicentro."
            },
            "sk": {
                "description": "Kúzli `\"shockwave\"` na `target`, ak je v dosahu #{spells.shockwave.range}m. Odhodí súpera dozadu s újmou až #{spells.shockwave.damage}, ak je súper v epicentre kúzla."
            },
            "zh-HANS": {
                "description": "在`目标单位`上执行 `”冲击波”`法术，如果在 #{spells.shockwave.range}米内，将目标冲远离施法者，并造成震中目标#{spells.shockwave.damage}点伤害。"
            },
            "ru": {
                "description": "Кастуйте `\"shockwave\"` на `target` если цель в зоне досягаемости #{spells.shockwave.range}m, волна распространяется от заклинателя и наносит урон #{spells.shockwave.damage} целям находящимся в радиусе поражения"
            },
            "fr": {
                "description": "Lance un sort `\"shockwave\"` sur `target` si située à moins de #{spells.shockwave.range}m, envoyant voler la cible loin du lanceur et provoquant jusqu'à #{shockwaveDamage} aux unités prises dans l'épicentre."
            },
            "de-DE": {
                "description": "Wirkt einen `\"shockwave\"` Spruch auf `target` innerhalb von #{spells.shockwave.range}m, welcher das Ziel zurückstößt und #{shockwaveDamage} Schaden an Einheiten im Epiczentrum des Effekts bewirkt."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "shockwave",
                "code": "cast(\"shockwave\", ${1:target})"
            },
            "lua": {
                "tab": "shockwave",
                "code": "self:cast(\"shockwave\", ${1:target})"
            },
            "clojure": {
                "tab": "shockwave",
                "code": "(.cast this \"shockwave\" ${1:target})"
            },
            "python": {
                "tab": "shockwave",
                "code": "self.cast(\"shockwave\", ${1:target})"
            },
            "javascript": {
                "tab": "shockwave",
                "code": "this.cast(\"shockwave\", ${1:target})"
            },
            "coffeescript": {
                "tab": "shockwave",
                "code": "@cast \"shockwave\", ${1:target}"
            }
        },
        "args": [
            {
                "default": "",
                "description": "Optional: the target on which to cast \"shockwave\", if not centered on caster.",
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
        "description": "Casts a `\"shockwave\"` spell on `target` if within #{spells.shockwave.range}m, blasting it back away from the caster and dealing up to #{spells.shockwave.damage} to units caught in the epicenter.\n\n",
        "type": "function",
        "name": "castShockwave"
    }
]