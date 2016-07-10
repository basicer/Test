[
    {
        "snippets": {
            "io": {
                "code": "throw(${1:enemy})",
                "tab": "throw"
            },
            "lua": {
                "code": "self:throw(${1:enemy})",
                "tab": "throw"
            },
            "clojure": {
                "code": "(.throw this ${1:enemy})",
                "tab": "throw"
            },
            "python": {
                "code": "self.throw(${1:enemy})",
                "tab": "throw"
            },
            "coffeescript": {
                "tab": "throw",
                "code": "@throw ${1:enemy}"
            },
            "javascript": {
                "tab": "throw",
                "code": "this.throw(${1:enemy})"
            }
        },
        "example": {
            "io": "enemy := findNearestEnemy\nif(isReady(\"throw\") and distanceTo(enemy) < attackRange,\n    throw(enemy))",
            "lua": "local enemy = self:findNearestEnemy()\nif self:isReady(\"throw\") and self:distanceTo(enemy) < self.attackRange then\n    self.throw(enemy)\nend",
            "clojure": "(let [enemy (.findNearestEnemy this)\n    (if (and (.isReady this \"throw\") (< (.distanceTo this (.pos enemy)) (.throwRange this)))\n        (.throw this enemy)))",
            "python": "enemy = self.findNearestEnemy()\nif self.isReady(\"throw\") and self.distanceTo(enemy.pos) < self.throwRange:\n    self.throw(enemy)",
            "coffeescript": "enemy = @findNearestEnemy()\nif @isReady(\"throw\") and @distanceTo(enemy) < @throwRange\n    @throw enemy",
            "javascript": "var enemy = this.findNearestEnemy();\nif (this.isReady(\"throw\") && this.distanceTo(enemy) < this.throwRange) {\n    this.throw(enemy);\n}"
        },
        "args": [
            {
                "i18n": {
                    "tr": {
                        "description": "Fırlatılacak hedef"
                    },
                    "da": {
                        "description": "Mål at kaste efter."
                    },
                    "cs": {
                        "description": "Cíl, na který střílíš."
                    },
                    "el": {
                        "description": "Ο στόχος στον οποίο θα ρίξουμε."
                    },
                    "sv": {
                        "description": "Målet att kasta mot"
                    },
                    "nl-NL": {
                        "description": "Het doelwit om naar te gooien."
                    },
                    "pl": {
                        "description": "Cel w który rzucić."
                    },
                    "pt-BR": {
                        "description": "O alvo a lançar."
                    },
                    "zh-HANT": {
                        "description": "欲投擲的目標"
                    },
                    "uk": {
                        "description": "Ціль для запуску ракети."
                    },
                    "it": {
                        "description": "Il bersaglio a cui lanciare."
                    },
                    "sk": {
                        "description": "Cieľ vrhu."
                    },
                    "es-419": {
                        "description": "El objetivo es por lanzarlo."
                    },
                    "zh-HANS": {
                        "description": "投掷目标"
                    },
                    "es-ES": {
                        "description": "El objetivo al que se lanza."
                    },
                    "ru": {
                        "description": "Мишень для метания."
                    },
                    "de-DE": {
                        "description": "Das Ziel auf das geworfen wird."
                    },
                    "nb": {
                        "description": "Målet for kastet."
                    },
                    "fr": {
                        "description": "La cible sur qui lancer."
                    },
                    "-": {
                        "-": "-"
                    }
                },
                "description": "The target to throw at.",
                "example": "this.findNearestEnemy()",
                "type": "object",
                "name": "target"
            }
        ],
        "i18n": {
            "tr": {
                "name": ""
            },
            "da": {
                "description": "Kast noget efter `target` hvis dette mål er indenfor `throwRange`."
            },
            "cs": {
                "description": "Vystřelí na nepřítele `target` pokud je blíž než `throwRange`."
            },
            "el": {
                "description": "Ρίχνει έναν πύραυλο σε ένα εχθρικό στόχο, αν είναι μέσα στη `Εμβέλεια Ρίψης - throwRange`."
            },
            "sv": {
                "description": "Kasta en projectil mot `target` fiende om inom kastavstånd `throwRange`"
            },
            "nl-NL": {
                "description": "Gooi een raket naar een 'target' vijand, als hij binnen \"throwRange' (gooi bereik)."
            },
            "pl": {
                "description": "Rzuca pociskiem we wrogi 'cel' jeśli jest w 'zasięguRzutu'."
            },
            "zh-HANT": {
                "description": "若`target`敵人位於`throwRange`內，則對它投擲一飛彈"
            },
            "pt-BR": {
                "description": "Lança um míssil em um `target` inimigo se dentro da `throwRange`."
            },
            "uk": {
                "description": "Запустити ракету на ворога `target`, якщо він на відстані до `throwRange`. "
            },
            "it": {
                "description": "Lancia un proiettile contro il nemico `target`, se è entro `throwRange`."
            },
            "sk": {
                "description": "Hodí vrhaciu zbraň na nepriateľský cieľ ak je v dosahu (throwRange`)."
            },
            "es-419": {
                "description": "Lanza un misil contra un enemigo `target` si dentro` throwRange`."
            },
            "zh-HANS": {
                "description": " 如果目标在攻击范围内，对目标扔出一枚炮弹。"
            },
            "ru": {
                "description": "Запускает снаряд во врага `target`, если он в пределах дальности `throwRange`."
            },
            "es-ES": {
                "name": "El tiro",
                "description": "Lanza un misil hacia el enemigo 'objetivo' en el rango 'rangoLanzamiento'. "
            },
            "de-DE": {
                "description": "Wirft ein Geschoß auf `target` wenn es innerhalb der `throwRange`ist."
            },
            "nb": {
                "description": "Kast et prosjektil på fienden `target` hvis innenfor `throwRange`."
            },
            "fr": {
                "description": "Lance un missile à une `target` (cible) ennemie si à portée de `throwRange`."
            },
            "-": {
                "-": "-"
            }
        },
        "description": "Throw a missile at a `target` enemy if within `throwRange`.",
        "type": "function",
        "name": "throw"
    },
    {
        "i18n": {
            "da": {
                "description": "Hvor langt #{spriteName}'s kast er i meter."
            },
            "el": {
                "description": "Πόσο μακριά η ρίψη του #{spriteName} φτάνει σε μέτρα."
            },
            "nl-NL": {
                "description": "Hoe ver de #{spriteName}'s worp bereikt, in meters."
            },
            "pl": {
                "description": "Jak duży jest zasięg rzutu #{spriteName}', w metrach."
            },
            "zh-HANT": {
                "description": " #{spriteName} 投擲的距離（單位為公尺）"
            },
            "uk": {
                "description": "Як далеко сягне кидок #{spriteName}, у метрах."
            },
            "it": {
                "description": "Quanto lontano può arrivare un lancio di #{spriteName}, in metri."
            },
            "sk": {
                "description": "Ako ďaleko v metroch hrdina dohodí."
            },
            "es-419": {
                "description": "¿Hasta qué punto el # {spriteName} tiro alcanza, en metros."
            },
            "zh-HANS": {
                "description": " #{spriteName}能扔多远，以米为单位。"
            },
            "es-ES": {
                "name": "Rango de tiro",
                "description": "Distancia maxima hasta donde el lanzmaiento del #{nombreSprite} llega, en metros."
            },
            "ru": {
                "description": "Дальность броска #{spriteName}я в метрах."
            },
            "de-DE": {
                "description": "Wie weit #{spriteName} werfen kann, in Metern."
            },
            "nb": {
                "description": "Hvor langt #{spriteName} kan kaste i meter."
            },
            "fr": {
                "description": "Portée de l'attaque de #{spriteName}, en mètres."
            },
            "pt-BR": {
                "description": "O quão longe o ataque de #{spriteName} alcança, em metros."
            },
            "sv": {
                "description": "Hur långt #{spriteName}'s throw når, i meter."
            },
            "cs": {
                "description": "Na jakou vzdálenost dokáže #{spriteName} útočit, v metrech."
            },
            "tr": {
                "description": "Metre cinsinden #{spriteName} saldırısının ulaşma uzaklığı"
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "throwRange",
                "code": "throwRange"
            },
            "lua": {
                "tab": "throwRange",
                "code": "self.throwRange"
            },
            "clojure": {
                "tab": "throwRange",
                "code": "(.throwRange this)"
            },
            "python": {
                "tab": "throwRange",
                "code": "self.throwRange"
            },
            "coffeescript": {
                "tab": "throwRange",
                "code": "@throwRange"
            },
            "javascript": {
                "tab": "throwRange",
                "code": "this.throwRange"
            }
        },
        "description": "How far the #{spriteName}'s throw reaches, in meters.",
        "type": "number",
        "name": "throwRange"
    },
    {
        "i18n": {
            "tr": {
                "description": "#{spriteName}'in her atışta ne kadar zarar verdiği"
            },
            "da": {
                "description": "Hvor megen skade #{spriteName} kan give per kast."
            },
            "cs": {
                "description": "Jaké poškození #{spriteName} způsobí každým útokem"
            },
            "el": {
                "description": "Πόση ζημιά προκαλεί ο #{spriteName} με κάθε ρίψη."
            },
            "sv": {
                "description": "hur mycket skada #{spriteName} gör vid varje kast."
            },
            "nl-NL": {
                "description": "Hoeveel schade de #{spriteName} doet met elke worp."
            },
            "pl": {
                "description": "Jakie obrażenia zada #{spriteName} każdym rzutem."
            },
            "zh-HANT": {
                "description": " #{spriteName} 每次投出所造成的傷害"
            },
            "pt-BR": {
                "description": "A quantidade de dano o #{spriteName} faz com cada lançamento."
            },
            "uk": {
                "description": "Скільки шкоди завдасть #{spriteName} з кожним кидком."
            },
            "it": {
                "description": "Quanti danni #{spriteName} infligge con ogni lancio."
            },
            "sk": {
                "description": "Akú veľkú újmu spôsobí hrdina každým hodom."
            },
            "es-419": {
                "description": "¿Cuánto daño el # {spriteName} hace con cada ataque."
            },
            "zh-HANS": {
                "description": " #{spriteName}每扔一次能产生的伤害。"
            },
            "es-ES": {
                "name": "Daño del tiro",
                "description": "Cuanto daño el #{nombreSprite} hace con cada lanzmaiento."
            },
            "ru": {
                "description": "Сколько урона наносит #{spriteName} каждый бросок."
            },
            "de-DE": {
                "description": "Wieviel Schaden #{spriteName} mit jedem Wurf macht."
            },
            "nb": {
                "description": "Hvor mye skade #{spriteName} gjør med hvert kast."
            },
            "fr": {
                "description": "Combien de dommages le #{spriteName} fait à chaque lancer."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "throwDamage",
                "code": "throwDamage"
            },
            "lua": {
                "tab": "throwDamage",
                "code": "self.throwDamage"
            },
            "clojure": {
                "tab": "throwDamage",
                "code": "(.throwDamage this)"
            },
            "python": {
                "tab": "throwDamage",
                "code": "self.throwDamage"
            },
            "coffeescript": {
                "tab": "throwDamage",
                "code": "@throwDamage"
            },
            "javascript": {
                "tab": "throwDamage",
                "code": "this.throwDamage"
            }
        },
        "description": "How much damage the #{spriteName} does with each throw.",
        "type": "number",
        "name": "throwDamage"
    },
    {
        "snippets": {
            "io": {
                "code": "throwPos(${1:targetPos})",
                "tab": "throwPos"
            },
            "lua": {
                "tab": "throwPos",
                "code": "self:throwPos(${1:targetPos})"
            },
            "clojure": {
                "tab": "throwPos",
                "code": "(.throwPos this ${1:targetPos})"
            },
            "python": {
                "tab": "throwPos",
                "code": "self.throwPos(${1:targetPos})"
            },
            "coffeescript": {
                "tab": "throwPos",
                "code": "@throwPos ${1:targetPos}"
            },
            "javascript": {
                "tab": "throwPos",
                "code": "this.throwPos(${1:targetPos})"
            }
        },
        "example": {
            "io": "enemy := findNearestEnemy\nif(isReady(\"throw\") and distanceTo(enemy) < attackRange,\n    throw(enemy pos))",
            "lua": "local enemy = self:findNearestEnemy()\nif self:isReady(\"throw\") and self:distanceTo(enemy) < self.attackRange then\n    self.throw(enemy.pos)\nend",
            "clojure": "(let [enemy (.findNearestEnemy this)\n    (if (and (.isReady this \"throw\") (< (.distanceTo this (.pos enemy)) (.throwRange this)))\n        (.throw this (.pos enemy))))",
            "python": "enemy = self.findNearestEnemy()\nif self.isReady(\"throw\") and self.distanceTo(enemy.pos) < self.throwRange:\n    self.throw(enemy.pos)",
            "coffeescript": "enemy = @findNearestEnemy()\nif @isReady(\"throw\") and @distanceTo(enemy) < @throwRange\n    @throw enemy.pos",
            "javascript": "var enemy = this.findNearestEnemy();\nif (this.isReady(\"throw\") && this.distanceTo(enemy) < this.throwRange) {\n    this.throw(enemy.pos);\n}"
        },
        "args": [
            {
                "i18n": {
                    "tr": {
                        "description": "Fırlatılacak mesafe"
                    },
                    "da": {
                        "description": "Position at kaste til måls efter."
                    },
                    "cs": {
                        "description": "Pozice nepřítele, kam chceš střílet."
                    },
                    "el": {
                        "description": "Η θέση του στόχου στο οποίο θα ρίξουμε."
                    },
                    "sv": {
                        "description": "Målets position att kasta mot."
                    },
                    "nl-NL": {
                        "description": "De doelwit positie om naar te gooien."
                    },
                    "pl": {
                        "description": "Pozycja celu w którą rzucić."
                    },
                    "zh-HANT": {
                        "description": "欲投擲的座標"
                    },
                    "pt-BR": {
                        "description": "A posição do alvo a lançar."
                    },
                    "uk": {
                        "description": "Позиція цілі для запуску ракети."
                    },
                    "it": {
                        "description": "Il bersaglio a cui lanciare."
                    },
                    "sk": {
                        "description": "Cieľ vrhu."
                    },
                    "es-419": {
                        "description": "El objetivo es por lanzarlo."
                    },
                    "zh-HANS": {
                        "description": "投掷目标的位置"
                    },
                    "es-ES": {
                        "description": "El objetivo al que se lanza."
                    },
                    "ru": {
                        "description": "Мишень для метания."
                    },
                    "de-DE": {
                        "description": "Das Ziel auf das geworfen wird."
                    },
                    "nb": {
                        "description": "Målet for kastet."
                    },
                    "fr": {
                        "description": "La cible sur qui lancer."
                    },
                    "-": {
                        "-": "-"
                    }
                },
                "description": "The target position to throw at.",
                "example": {
                    "io": "findNearest(findEnemies) pos",
                    "lua": "{x=40, y=40}",
                    "clojure": "(clj->js { :x 40, :y 40 })",
                    "coffeescript": "{x: 40, y: 40}",
                    "python": "{\"x\": 40, \"y\": 40}",
                    "javascript": "{x: 40, y: 40}"
                },
                "type": "object",
                "name": "target"
            }
        ],
        "i18n": {
            "es-ES": {
                "name": "Posición del tiro",
                "description": "El tiro de un misil en la posición `targetPos` si`esta dentro de `throwRange`"
            },
            "da": {
                "description": "Kaster noget efter position `targetPos` hvis dette mål er indenfor `throwRange`."
            },
            "cs": {
                "description": "Vystřelí na nepřítele na pozici `targetPos` pokud je blíž než `throwRange`."
            },
            "el": {
                "description": "Ρίψη αντικείμενου στη θέση `targetpos`εάν ο στόχος είναι σε απόσταση εως `throwrange` m"
            },
            "sv": {
                "description": "Kasta en projectil mot \"targetPos\" postion om inom kastavstånd \"throwRange\""
            },
            "nl-NL": {
                "description": "Gooi een raket naar de 'targetPos' positie, als hij binnen de werpafstand is."
            },
            "pl": {
                "description": "Rzuca posickiem w pozycje 'celu' jeśli pozycja jest w 'zasięguRzutu'."
            },
            "zh-HANT": {
                "description": "若`tarPos`座標位於`throwRange`內，則對此座標投擲一飛彈"
            },
            "zh-HANS": {
                "description": "如果目标位置在攻击范围内，则进行投掷"
            },
            "es-419": {
                "description": "Lanza un misil en la posición `targetPos` si dentro` throwRange`."
            },
            "pt-BR": {
                "description": "Lança um míssil na `targetPos` posição se dentro da `throwRange`."
            },
            "uk": {
                "description": "Запустити ракету у позицію `targetPos`, якщо вона на відстані до `throwRange`. "
            },
            "sk": {
                "description": "Hodí vrhaciu zbraň na pozíciu cieľa `targetPos`, ak je cieľ v dosahu `throwRange`."
            },
            "fr": {
                "description": "Lance un missile à la position `targetPos` si à portée de `throwRange`."
            },
            "it": {
                "description": "Lancia un proiettile alla posizione `targetPos`, se è entro `throwRange`."
            },
            "ru": {
                "description": "Запускает снаряд в позицию `targetPos`, если она в пределах дальности `throwRange`."
            },
            "de-DE": {
                "description": "Wirft ein Geschoß auf die `targetPos` Position wenn diese innerhalb der `throwRange`ist."
            },
            "-": {
                "-": "-"
            }
        },
        "description": "Throw a missile at the `targetPos` position if within `throwRange`.",
        "type": "function",
        "name": "throwPos"
    }
]