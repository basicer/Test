[
    {
        "description": "The arclength of the cleave wedge, in radians.",
        "type": "number",
        "name": "cleaveAngle"
    },
    {
        "description": "How much damage the cleave does to targets caught in its wedge.",
        "type": "number",
        "name": "cleaveDamage"
    },
    {
        "description": "The range of the cleave attack (the radius of its wedge), in meters.",
        "type": "number",
        "name": "cleaveRange"
    },
    {
        "description": "Whether the cleave attack hits friendly units as well as enemies.",
        "type": "boolean",
        "name": "cleaveFriendlyFire"
    },
    {
        "description": "How much mass momentum to impart to the cloven targets.",
        "type": "number",
        "name": "cleaveMass"
    },
    {
        "description": "At what angle from horizontal the cloven targets receive the `cleaveMass` knockback.",
        "type": "number",
        "name": "cleaveZAngle"
    },
    {
        "example": {
            "io": "if(isReady(\"cleave\")) then(\n    cleave(enemy)\n) else(\n    attack(enemy)\n)",
            "lua": "if self:isReady(\"cleave\") then\n    self:cleave(enemy)\nelse\n    self:attack(enemy)\nend",
            "clojure": "(if (.isReady this \"cleave\")\n    (.cleave this enemy)\n    (.attack this enemy))",
            "coffeescript": "if @isReady \"cleave\"\n    @cleave enemy\nelse\n    @attack enemy",
            "python": "if self.isReady(\"cleave\"):\n    self.cleave(enemy)\nelse:\n    self.attack(enemy)",
            "javascript": "if (this.isReady(\"cleave\")) {\n    this.cleave(enemy);\n} else {\n    this.attack(enemy);\n}"
        },
        "i18n": {
            "bg": {
                "name": "cleave",
                "description": "Разбива целта и всичко покрай #{spriteName} на #{cleaveRange} метра разстояние с #{cleaveDamage} поражения."
            },
            "sv": {
                "description": "Klyver ett mål och allt runt omkring #{spriteName} inom #{cleaveRange}m för #{cleaveDamage} skada."
            },
            "da": {
                "description": "Kløver et mål og alt andet indenfor #{spriteName}'s rækkevidde #{cleaveRange}m som gør #{cleaveDamage} skade."
            },
            "sr": {
                "description": "Cepa metu i sve sto se nalazi oko #{spriteName} unutar #{cleaveRange} nanoseci stetu u iznosu  od #{cleaveDamage}."
            },
            "nl-NL": {
                "description": "Klieft een doelwit en alles rondom de #{spriteName} binnen #{cleaveRange}m en doet #{cleaveDamage} schade"
            },
            "ca": {
                "description": "Realitza un atac partint l'objectiu i tot el voltant de #{spriteName} en un rang de #{cleaveRange}m i #{cleaveDamage} de dany."
            },
            "el": {
                "description": "Σχίζει τον στόχο και οτιδήποτε γύρω από τον ήρωα σε απόσταση #{cleaveRange}m προκαλώντας ζημιά #{cleaveDamage}"
            },
            "hu": {
                "description": "Széthasít egy célpontot és minden mást a #{spriteName} körül #{cleaveRange}m-es körben #{cleaveDamage} sebzéssel."
            },
            "es-419": {
                "description": "Cleaves un objetivo y cualquier cosa alrededor de la #{spriteName} dentro #{cleaveRange}m para #{cleaveDamage} daños."
            },
            "es-ES": {
                "description": "Ahuyenta un objetivo y cualquier cosa alrededor de #{spriteName} dentro de #{cleaveRange}m para #{cleaveDamage} daño."
            },
            "pl": {
                "description": "Rozrąbuje cel oraz wszystko dookoła w promieniu #{cleaveRange}m, zadając #{cleaveDamage} obrażeń."
            },
            "uk": {
                "description": "Розколює ціль та все навколо #{spriteName} у радіусі #{cleaveRange} м завдаючи #{cleaveDamage} ушкодження."
            },
            "ja": {
                "description": "クレーブ。#{spriteName} の#{cleaveRange}m以内のターゲットなどを、ダメージ #{cleaveDamage}で一刀両断する。"
            },
            "sk": {
                "description": "Rozseká cieľ a všetko okolo hrdinu v dosahu #{cleaveRadius}m s poškodením #{cleaveDamage}."
            },
            "it": {
                "description": "Esegue un fendente verso un bersaglio che colpisce tutto ciò che sta intorno a #{spriteName} in un raggio di #{cleaveRadius} metri per #{cleaveDamage} punti di danno."
            },
            "nb": {
                "description": "Kløyver et mål. Tildeler #{cleaveDamage} skade mot hvasomhelst rundt #{spriteName} innenfor #{cleaveRadius} meter."
            },
            "pt-BR": {
                "description": "Fende um alvo e qualquer coisa em volta do #{spriteName} dentro de #{cleaveRadius}m para #{cleaveDamage} de dano."
            },
            "zh-HANT": {
                "description": "砍掉目標敵人以及#{spriteName} #{cleaveRadius}公尺以內的東西#{cleaveDamage}命。"
            },
            "lt": {
                "description": "Kalavijas puola viską aplinkui #{spriteName} nurodytu splinduliu  #{cleaveRadius}m padarydamas  #{cleaveDamage} žalą."
            },
            "de-DE": {
                "description": "\"Spaltet\" ein Ziel und alles um #{spriteName} innerhalb von #{cleaveRadius}m für #{cleaveDamage} Schaden."
            },
            "fr": {
                "description": "Fends une cible et tout ce qui entoure le #{spriteName} dans le rayon de son #{cleaveAngle}, sur #{cleaveRange}m provoquant #{cleaveDamage} dommages."
            },
            "gl": {
                "description": "Pégase a un obxectivo e a calquera cousa no seu #{cleaveAngle}-radio, #{cleaveRadius}m cuña para #{cleaveDamage} dano."
            },
            "zh-HANS": {
                "description": "攻击一个目标和任何在该目标周围#{cleaveAngle}度，半径#{cleaveRadius}米范围内的目标，造成#{cleaveDamage}点伤害"
            },
            "ru": {
                "description": "Разрубает цель и всё вокруг  #{spriteName} в радиусе #{cleaveRange} м, нанося #{cleaveDamage} очков урона."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "cleave",
                "code": "cleave(${1:enemy})"
            },
            "lua": {
                "tab": "cleave",
                "code": "self:cleave(${1:enemy})"
            },
            "clojure": {
                "tab": "cleave",
                "code": "(.cleave this ${1:enemy})"
            },
            "python": {
                "tab": "cleave",
                "code": "self.cleave(${1:enemy})"
            },
            "coffeescript": {
                "tab": "cleave",
                "code": "@cleave ${1:enemy}"
            },
            "javascript": {
                "tab": "cleave",
                "code": "this.cleave(${1:enemy})"
            }
        },
        "args": [
            {
                "description": "Optional: a target (unit) or targetPos ({x, y} coordinate) to cleave toward, or straight in front if unspecified.",
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
        "description": "Cleaves a target and anything around the #{spriteName} within #{cleaveRange}m for #{cleaveDamage} damage.",
        "type": "function",
        "name": "cleave"
    }
]