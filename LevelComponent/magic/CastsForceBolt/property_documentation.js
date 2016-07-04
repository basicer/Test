[
    {
        "i18n": {
            "bg": {
                "description": "Прави магия `\"force-bolt\"` на мишена `target`, ако тя е на разстояние до #{spells.force-bolt.range} метра. Магията поразява целта с #{spells.force-bolt.damage} и преминава през нея, за да удари още цели в права линия."
            },
            "da": {
                "description": "Kaster en `\"force-bolt\"` besværgelse på `target`. Hvis målet er indenfor #{spells.force-bolt.range}m rammes det med #{spells.force-bolt.damage} skade. Besværgelsen kan ramme flere mål, da det fortsætter i en lige linje."
            },
            "sr": {
                "description": "Izvodi 'silovita munja' caroliju na metu ako je u opstegu #{spells.force-bolt.range}, dodeljujuci stetu od #{spells.force-bolt.damage} i nastavlja svoju putanju da bi pogodila dodatnu metu koja je se nalazi u pravoj liniji."
            },
            "es-419": {
                "description": "Proyecta un ´\"force-bolt\"` hechizo sobre `target` si dentro de #{spells.force-bolt.range}m, golpeándola para #{spells.force-bolt.damage} y que pasa a través de golpear objetivos adicionales en una línea recta."
            },
            "id": {
                "description": "Melemparkan ` \" kekuatan - baut \" ` mantra ` target` jika dalam # { spells.force - bolt.range } m , mencolok untuk # { spells.force - bolt.damage } dan melewati untuk mencapai target tambahan dalam garis lurus."
            },
            "hu": {
                "description": "Ha `target` #{spells.force-bolt.range} méteren belül van, a \"`force-bolt`\"(erődárda) varázsigét használja rajta #{spell.force-bolt.damage} sebzést okozva neki és a vele egy vonalban lévő célpontoknak."
            },
            "el": {
                "description": "Ρίχνει ένα ξόρκι `αστραπής` στον στόχο εάν βρίστεται σε απόσταση #{spells.force-bolt.range}m, προκαλώντας στον στόχο  #{spells.force-bolt.damage} και διαπερνώντας τον για να χτυπήσει προσθετούς στόχους που βρίσκονται σε ευθεία γραμμή."
            },
            "nl-NL": {
                "description": "Vuur een 'force-bolt' spreuk af op 'target' als hij binnen #{spells.force-bolt.range}m is, om hem met #{spells.force-bolt.damage} te raken. Hierna gaat deze spreuk in een rechte lijn door om overige doelen te raken."
            },
            "it": {
                "description": "Lancia un incantesimo `\"force-bolt\" su `target` se entro #{spells.force-bolt.range}m, colpendolo per #{spells.force-bolt.damage} ed attraversandolo per colpire ulteriori obiettivi in linea retta."
            },
            "pl": {
                "description": "Rzuca czar `\"force-bolt\"` na `target`. Jeżeli cel jest w zasięgu #{spells.force-bolt.range}m, zadaje #{spells.force-bolt.damage} obrażeń i leci dalej, zadając takie same obrażenia każdemu celowi na jego drodze."
            },
            "uk": {
                "description": "Накладає заклинання на ціль `target`, якщо вона в радіусі #{spells.force-bolt.range} метрів, вражаючи її на #{spells.force-bolt.damage} та проходячи навскрізь, завдаючи пошкодження іншим цілям, що знаходяться на одній прямій."
            },
            "sv": {
                "description": "Kastar en `\"force-bolt\"`-besvärjelse mot `target` inom #{spells.force-bolt.range}m, skadar det #{spells.force-bolt.damage} och går igenom för att skada ytterligare mål i en rak linje."
            },
            "pt-BR": {
                "description": "Lança um feitiço `\"force-bolt\"` no `target` se dentro de #{spells.force-bolt.range}m, golpeando-o por #{spells.force-bolt.damage} e atravessando para acertar alvos adicionais em uma linha reta."
            },
            "sk": {
                "description": "Kúzli `\"force-bolt\"` na `target` v dosahu #{spells.force-bolt.range}m s újmou #{spells.force-bolt.damage}. Bleskové kúzlo prechádza cieľom a zasahuje ďalšie ciele v línii."
            },
            "zh-HANS": {
                "description": "如果`target`在#{spells.force-bolt.range}公尺的范围内, 对`target`施放`\"force-bolt\"`技能, 造成#{spells.force-bolt.damage}的敲打伤害, 然后穿越它以攻击在同一直线内的其他目标."
            },
            "nb": {
                "description": "Kaster en `\"force-bolt\"` trylleformel mot målet `target`, om den er innenfor #{spells.force-bolt.range} meter, treffer denne med #{spells.force-bolt.damage} skade og fortsetter gjennom den for å treffe flere mål i en rett linje."
            },
            "es-ES": {
                "description": "Invoca un echizo de `\"force-bolt\"` sobre un `target` dentro de #{spells.force-bolt.range}m, golpeandolo para #{spells.force-bolt.damage} y atravezandolos para golpear enemigos adicionales en una linea recta "
            },
            "ru": {
                "description": "Накладывает `\"force-bolt\"` заклинание на `target` если в радиусе #{spells.force-bolt.range}м, поражая его на #{spells.force-bolt.damage}, и проходя насквозь, чтобы ударить другие цели, находящиеся в той же линии."
            },
            "fr": {
                "description": "Lance un sort `\"force-bolt\"` sur `target` si située à moins de #{spells.force-bolt.range}m, la frappant à hauteur de #{forceBoltDamage} dommages et la traversant pour toucher davantage de cibles en ligne droite."
            },
            "de-DE": {
                "description": "Wirkt einen `\"force-bolt\"` Spruch auf `target` innerhalb von #{spells.force-bolt.range}m, und verursacht #{forceBoltDamage} Schaden. Durchschlägt es dabi, um weitere Ziele in Schußrichtung zu treffen."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "force-bolt",
                "code": "cast(\"force-bolt\", ${1:target})"
            },
            "lua": {
                "tab": "force-bolt",
                "code": "self:cast(\"force-bolt\", ${1:target})"
            },
            "clojure": {
                "tab": "force-bolt",
                "code": "(.cast this \"force-bolt\" ${1:target})"
            },
            "python": {
                "tab": "force-bolt",
                "code": "self.cast(\"force-bolt\", ${1:target})"
            },
            "javascript": {
                "tab": "force-bolt",
                "code": "this.cast(\"force-bolt\", ${1:target})"
            },
            "coffeescript": {
                "tab": "force-bolt",
                "code": "@cast \"force-bolt\", ${1:target}"
            }
        },
        "args": [
            {
                "default": "",
                "description": "The target on which to cast \"force-bolt\".",
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
        "description": "Casts a `\"force-bolt\"` spell on `target` if within #{spells.force-bolt.range}m, striking it for #{spells.force-bolt.damage} and passing through to hit additional targets in a straight line.",
        "type": "function",
        "name": "castForceBolt"
    }
]