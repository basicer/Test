[
    {
        "i18n": {
            "sl": {
                "name": "team",
                "description": "V kateri skupini je #{spriteName}."
            },
            "uk": {
                "name": "команда",
                "description": "В якій команді #{spriteName}."
            },
            "vi": {
                "name": "đội"
            },
            "es-ES": {
                "description": "En que equipo está #{spriteName}",
                "name": "equipo"
            },
            "fi": {
                "description": "Missä tiimissä #{spriteName} on.",
                "name": "tiimi"
            },
            "ar": {
                "description": "#{spriteName} الى اي مجموعة ينتمي "
            },
            "id": {
                "description": "Tim apa # { spriteName } aktif."
            },
            "sk": {
                "description": "Ku ktorému tímu #{spriteName} patrí."
            },
            "sr": {
                "description": "Koji je tim #{spriteName} na redu."
            },
            "cs": {
                "description": "Do kterého týmu patří #{spriteName}."
            },
            "lt": {
                "description": ""
            },
            "he": {
                "description": "לאיזה קבוצה #{spriteName} שייך "
            },
            "bg": {
                "description": "В кой отбор е #{spriteName}."
            },
            "sv": {
                "description": "Vilken sida #{spriteName} är på"
            },
            "zh-HANS": {
                "description": "#{spriteName}属于哪支队伍。"
            },
            "el": {
                "description": "Σε ποιά ομάδα ο ήρωας ανήκει."
            },
            "ca": {
                "description": "A quin equip està el #{spriteName}."
            },
            "it": {
                "description": "Su quale gruppo #{spriteName} è attivo."
            },
            "tr": {
                "description": "#{spriteName}'ın olduğu takım."
            },
            "de-DE": {
                "description": "In welchem Team #{spriteName} ist."
            },
            "ro": {
                "description": "Echipa din care face parte #{spriteName}."
            },
            "da": {
                "description": "Hvilket hold #{spriteName} er på."
            },
            "ru": {
                "description": "Эта команда #{spriteName} включена."
            },
            "nl-NL": {
                "description": "Het team waar #{spriteName} bij zit."
            },
            "pl": {
                "description": "Drużyna w której jest #{spriteName}."
            },
            "hu": {
                "description": "Kinek a csapatában van a(z) #{spriteName}."
            },
            "pt-BR": {
                "description": "Em qual time #{spriteName} está?\n"
            },
            "es-419": {
                "description": "¿Qué equipo de la #{spriteName} está encendida?"
            },
            "fr": {
                "description": "Equipe dans laquelle est #{spriteName}"
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "team",
                "code": "team"
            },
            "lua": {
                "tab": "team",
                "code": "self.team"
            },
            "coffeescript": {
                "tab": "team",
                "code": "@team"
            },
            "clojure": {
                "tab": "team",
                "code": "(.team this)"
            },
            "python": {
                "tab": "team",
                "code": "self.team"
            },
            "javascript": {
                "tab": "team",
                "code": "this.team"
            }
        },
        "description": "What team the #{spriteName} is on.",
        "type": "string",
        "name": "team"
    },
    {
        "snippets": {
            "clojure": {
                "code": "(.superteam this)"
            },
            "python": {
                "tab": "superteam",
                "code": "self.superteam"
            },
            "javascript": {
                "tab": "superteam",
                "code": "this.superteam"
            }
        },
        "description": "What superteam the #{spriteName} is on. There can be multiple teams making up a superteam alliance.",
        "type": "string",
        "name": "superteam"
    },
    {
        "snippets": {
            "clojure": {
                "tab": "getEnemies",
                "code": ""
            },
            "python": {
                "tab": "getEnemies",
                "code": "self.getEnemies()"
            },
            "javascript": {
                "tab": "getEnemies",
                "code": "this.getEnemies()"
            },
            "coffeescript": {
                "tab": "getEnemies",
                "code": "@getEnemies()"
            }
        },
        "example": {
            "python": "enemies = self.getEnemies()\nfor enemy in enemies:\n  # Do something with each enemy here\n  self.attack(enemy)  # Example",
            "coffeescript": "enemies = @getEnemies()\nfor enemy in enemies\n  # Do something with each enemy here\n  @attack enemy  # Example\n",
            "javascript": "var enemies = this.getEnemies();\nfor(var i = 0; i < enemies.length; ++i) {\n  var enemy = enemies[i];\n  // Do something with each enemy here\n  this.attack(enemy);  // Example\n}"
        },
        "description": "Returns an array of all living enemies within eyesight (#{visualRange}m and line-of-sight).",
        "type": "function",
        "name": "getEnemies"
    },
    {
        "snippets": {
            "clojure": {
                "tab": "getFriends",
                "code": ""
            },
            "python": {
                "tab": "getFriends",
                "code": "self.getFriends()"
            },
            "coffeescript": {
                "tab": "getFriends",
                "code": "@getFriends()"
            },
            "javascript": {
                "tab": "getFriends",
                "code": "this.getFriends()"
            }
        },
        "example": {
            "python": "friends = self.getFriends()\nfor friend in friends:\n  # Do something with each friend here\n  self.follow(friend)  # Example\n",
            "coffeescript": "friends = @getFriends()\nfor friend in friends\n  # Do something with each friend here\n  @follow friend  # Example",
            "javascript": "var friends = this.getFriends();\nfor(var i = 0; i < friends.length; ++i) {\n  var friend = friends[i];\n  // Do something with each friend here\n  this.follow(friend);  // Example\n}"
        },
        "description": "Returns an array of all living friends within eyesight (#{visualRange}m).",
        "type": "function",
        "name": "getFriends"
    },
    {
        "snippets": {
            "clojure": {
                "tab": "getItems",
                "code": "(.getItems this)"
            },
            "python": {
                "tab": "getItems",
                "code": "self.getItems()"
            },
            "coffeescript": {
                "tab": "getItems",
                "code": "@getItems()"
            },
            "javascript": {
                "tab": "getItems",
                "code": "this.getItems()"
            }
        },
        "example": {
            "python": "items = self.getItems()\nfor item in items:\n  # Do something with each item here\n  self.move(item.pos)  # Example",
            "coffeescript": "items = @getItems()\nfor item in items\n  # Do something with each item here\n  @move item.pos  # Example",
            "javascript": "var items = this.getItems();\nfor(var i = 0; i < items.length; ++i) {\n  var item = items[i];\n  // Do something with each item here\n  this.move(item.pos);  // Example\n}"
        },
        "description": "Returns an array of all items (example types 'coin', 'gem', 'health-potion') within eyesight (#{visualRange}m and line-of-sight).",
        "type": "function",
        "name": "getItems"
    },
    {
        "snippets": {
            "io": {
                "tab": "getNearestEnemy",
                "code": "getNearestEnemy"
            },
            "lua": {
                "tab": "getNearestEnemy",
                "code": "self:getNearestEnemy()"
            },
            "clojure": {
                "tab": "getNearestEnemy",
                "code": "(.getNearestEnemy this)"
            },
            "python": {
                "tab": "getNearestEnemy",
                "code": "self.getNearestEnemy()"
            },
            "coffeescript": {
                "tab": "getNearestEnemy",
                "code": "@getNearestEnemy()"
            },
            "javascript": {
                "tab": "getNearestEnemy",
                "code": "this.getNearestEnemy()"
            }
        },
        "owner": "this",
        "description": "Returns the closest living enemy within eyesight (#{visualRange}m and line-of-sight), or null if there aren't any.",
        "type": "function",
        "name": "getNearestEnemy"
    },
    {
        "snippets": {
            "clojure": {
                "tab": "getNearestFriend",
                "code": "(.getNearestFriend this)"
            },
            "python": {
                "tab": "getNearestFriend",
                "code": "self.getNearestFriend()"
            },
            "coffeescript": {
                "tab": "getNearestFriend",
                "code": "@getNearestFriend()"
            },
            "javascript": {
                "tab": "getNearestFriend",
                "code": "this.getNearestFriend()"
            }
        },
        "description": "Returns the closest living friend within eyesight (#{visualRange}m), or null if there aren't any.",
        "type": "function",
        "name": "getNearestFriend"
    },
    {
        "snippets": {
            "clojure": {
                "tab": "getNearestCombatant",
                "code": "(.getNearestFriend this)"
            },
            "python": {
                "tab": "getNearestCombatant",
                "code": "self.getNearestCombatant()"
            },
            "coffeescript": {
                "tab": "getNearestCombatant",
                "code": "@getNearestCombatant()"
            },
            "javascript": {
                "tab": "getNearestCombatant",
                "code": "this.getNearestCombatant()"
            }
        },
        "description": "Returns the closest living friend or foe within eyesight (#{visualRange}m and line-of-sight), or null if there aren't any.",
        "type": "function",
        "name": "getNearestCombatant"
    },
    {
        "snippets": {
            "clojure": {
                "tab": "getEnemyMissiles",
                "code": ""
            },
            "python": {
                "tab": "getEnemyMissiles",
                "code": "self.getEnemyMissiles()"
            },
            "coffeescript": {
                "tab": "getEnemyMissiles",
                "code": "@getEnemyMissiles()"
            },
            "javascript": {
                "tab": "getEnemyMissiles",
                "code": "this.getEnemyMissiles()"
            }
        },
        "description": "Returns an array of all enemy missiles (example types: 'arrow', 'shell', 'beam', 'spear', 'energy-ball'). Limited to missiles within eyesight (#{visualRange}m and line-of-sight).",
        "type": "function",
        "name": "getEnemyMissiles"
    },
    {
        "snippets": {
            "clojure": {
                "tab": "getNearest",
                "code": ""
            },
            "python": {
                "tab": "getNearest",
                "code": "self.getNearest(${1:enemies})"
            },
            "javascript": {
                "tab": "getNearest",
                "code": "this.getNearest(${1:enemies})"
            },
            "coffeescript": {
                "tab": "getNearest",
                "code": "@getNearest ${1:enemies}"
            }
        },
        "args": [
            {
                "description": "",
                "example": {
                    "python": "self.getItems()",
                    "coffeescript": "@getItems()",
                    "javascript": "this.getItems()"
                },
                "type": "array",
                "name": "units"
            }
        ],
        "description": "Returns the closest unit out of an array of units, or null if the array is empty.",
        "type": "function",
        "name": "getNearest"
    },
    {
        "snippets": {
            "clojure": {
                "tab": "getCombatants",
                "code": "(.getCombatants this)"
            },
            "python": {
                "tab": "getCombatants",
                "code": "self.getCombatants()"
            },
            "coffeescript": {
                "tab": "getCombatants",
                "code": "@getCombatants()"
            },
            "javascript": {
                "tab": "getCombatants",
                "code": "this.getCombatants()"
            }
        },
        "description": "Returns an array of all living units (friend and foe alike) within eyesight (#{visualRange}m and line-of-sight).",
        "type": "function",
        "name": "getCombatants"
    },
    {
        "userShouldCaptureReturn": {
            "variableName": "enemies"
        },
        "i18n": {
            "sl": {
                "context": {
                    "example": "Primer",
                    "each_enemy": "Za vsakega sovražnika naredite neko dejanje"
                },
                "description": "Vrne polje vseh vidnih živih sovražnikov (#{visualRange}m in vidno polje).",
                "name": "findEnemies"
            },
            "vi": {
                "context": {
                    "example": "Ví dụ",
                    "each_enemy": "Hãy làm gì đó với mỗi kẻ thù ở đây"
                }
            },
            "fi": {
                "context": {
                    "example": "Esimerkki",
                    "each_enemy": "Tee jotain jokaiselle viholliselle tässä"
                },
                "description": "Palauttaa taulukon kaikista elävistä vihollisista, jotka ovat näkökentässä (#{visualRange}m ja näkölinjassa)",
                "name": "etsiViholliset"
            },
            "sr": {
                "context": {
                    "example": "Primer",
                    "each_enemy": "Uradi nesto sa svakim neprijateljem ovde"
                },
                "description": "Daje niz(array) svih zivih neprijatelja u vidokrugu (#{visualRange}m i liniju vidokruga)."
            },
            "he": {
                "context": {
                    "example": "דוגמא",
                    "each_enemy": "עשה משהו עם האויב כאן"
                },
                "description": "(#{visualRange}m and line-of-sight) מחזיר מערך של כל האויבים החיים הנמצאים בקו הראיה"
            },
            "el": {
                "context": {
                    "example": "Παράδειγμα",
                    "each_enemy": "Κάνε κάτι με τον κάθε εχθρό."
                },
                "description": "Επιστρέφει μία λίστα με όλους τους ζωντανούς εχθρούς που βρίσκονται στo οπτικό πεδίο του ήρωα (#{visualRange}m"
            },
            "da": {
                "context": {
                    "example": "Eksempel",
                    "each_enemy": "Gør noget ved hver fjende her"
                },
                "description": "Returnerer et array med alle levende fjender inden for synsvidde (#{visualRange}m og direkte udsyn)"
            },
            "ja": {
                "context": {
                    "example": "例",
                    "each_enemy": "ここで、それぞれの敵に対して、何かしなさい"
                },
                "description": "視界中の生存している全ての敵の配列をReturnしなさい (#{visualRange}m and line-of-sight)。"
            },
            "th": {
                "context": {
                    "example": "ตัวอย่าง",
                    "each_enemy": "ทำอะไรสักอย่างกับศัตรูพวกนี้"
                },
                "description": "ส่งกลับอาเรย์ของศัตรูที่มีชีวิตทั้งหมดในระยะสายตา (#{visualRange}m และ line-of-sight)"
            },
            "pl": {
                "context": {
                    "example": "Przykład",
                    "each_enemy": "Zrób coś z każdym wrogiem tutaj."
                },
                "description": "Zwraca tablicę wszystkich żywych wrogów w zasięgu wzroku (#{visualRange}m i line-of-sight)."
            },
            "ar": {
                "description": "اصنع مجموعة من كل الأعداء الأحياء في مدى بصرك مع  (#{visualRange}m و line-of-sight).",
                "context": {
                    "each_enemy": "افعل شيئًا تجاه كل عدو هنا.",
                    "example": "أمثلة"
                }
            },
            "ro": {
                "context": {
                    "example": "Exemplu",
                    "each_enemy": "Fă ceva cu fiecare inamic ."
                },
                "description": "Întoarce un șir ce conține toți inamicii din câmpul vizual al protagonistului (#{visualRange}m and line-of-sight)."
            },
            "pt-PT": {
                "name": "encontrarInimigos"
            },
            "sk": {
                "context": {
                    "example": "Príklad",
                    "each_enemy": "Urob niečo  s každým nepriateľom."
                },
                "description": "Vracia pole všetkých žijúcich nepriateľov na dohľad (#{visualRange}m a v línii pohľadu)."
            },
            "lt": {
                "context": {
                    "example": "Pavyzdys",
                    "each_enemy": "Padaryk ką nors su kiekvienu priešininku čia"
                },
                "description": "Grąžinamas rezultatas - masyvas visų gyvų priešų, kurie yra regėjimo zonoje (#{visualRange}m ir line-of-sight)."
            },
            "bg": {
                "context": {
                    "each_enemy": "Направи нещо с всеки противник тук",
                    "example": "Пример"
                },
                "description": "Връща масив, състоящ се от всички живи противници в обзоримото поле."
            },
            "ca": {
                "context": {
                    "example": "Exemple",
                    "each_enemy": "Fes alguna cosa amb cada enemic aquí"
                },
                "description": "Retorna un array the tots els enemics vius a la vista (#{visualRange}m i en línea de visió)."
            },
            "zh-HANT": {
                "context": {
                    "example": "例",
                    "each_enemy": "對每一個敵人做事"
                },
                "description": "回傳視野（#{visualRange}公尺＋前方）內所有敵人的陣列。"
            },
            "hu": {
                "description": "Megad egy tömböt, ami tartalmazza az összes látótávolságban lévő ellenséget (#{visualRange}m és rálátás).",
                "context": {
                    "each_enemy": "Csinálj itt valamit minden ellenséggel",
                    "example": "Példa"
                }
            },
            "nl-NL": {
                "description": "Geeft een verzameling van levende vijanden binnen een zichtveld van (#{visualRange}m en recht vooruit.",
                "context": {
                    "example": "Voorbeeld",
                    "each_enemy": "Doe iets met elke vijand hier"
                }
            },
            "id": {
                "description": "Mengembalikan array dari semua musuh yang masih hidup dalam jarak pandang (#{visualRange}m and line-of-sight).",
                "context": {
                    "example": " Contoh",
                    "each_enemy": "Lakukan sesuatu terhadap setiap musuh di sini"
                }
            },
            "cs": {
                "context": {
                    "example": "Příklad",
                    "each_enemy": "Udělej něco s každým zdejším nepřítelem"
                },
                "description": "Vrátí pole obsahující všechny žijící nepřátele v dohledu (#{dohled}m a směr-pohledu)."
            },
            "pt-BR": {
                "context": {
                    "example": "Exemplo",
                    "each_enemy": "Faça algo com cada inimigo aqui"
                },
                "description": "Retorna um vetor de todos os inimigos vivos no campo de visão (#{visualRange}m e linha de visão)."
            },
            "uk": {
                "description": "Повертає масив усіх живих ворогів, що знаходяться у полі зору (#{visualRange}м та у прямій видимості).",
                "context": {
                    "example": "Приклад",
                    "each_enemy": "Зробіть щось з кожним ворогом"
                }
            },
            "nb": {
                "description": "Returnerer en matrise (array) av alle levende fiender innenfor synsrekkevidde (#{visualRange}m og med siktlinje).",
                "context": {
                    "each_enemy": "Gjør noe med hver fiende her",
                    "example": "Eksempel"
                }
            },
            "de-DE": {
                "description": "Gibt eine Liste mit allen lebenden feindlichen Einheiten innerhalb der Sichtweite (#{visualRange}m und Sichtlinie) zurück",
                "context": {
                    "example": "Beispiel",
                    "each_enemy": "Mach hier etwas mit jedem Feind"
                }
            },
            "zh-HANS": {
                "description": "[返回数组]获取视线范围#{visualRange}米内存活的所有敌方单位",
                "context": {
                    "each_enemy": "在这里可以对每个敌方单位采取一些应对措施",
                    "example": "例如："
                }
            },
            "es-419": {
                "description": "Devuelve un arreglo de todos los enemigos que viven dentro del campo de vision (#{visualRange}m y la linea-de-vision).",
                "context": {
                    "example": "Ejemplo",
                    "each_enemy": "Haz algo con cada enemigo aquí."
                }
            },
            "it": {
                "context": {
                    "example": "Esempio",
                    "each_enemy": "Fai qualcosa con ogni nemico qui"
                },
                "description": "Restituisce un array che contiene tutti i nemici vivi all'interno del raggio visivo (#{visualRange}m e nella direzione dello sguardo)."
            },
            "ru": {
                "context": {
                    "example": "Пример",
                    "each_enemy": "Нужно сдлеать что-нибудь с каждым врагом"
                },
                "description": "Возвращает массив всех живых врагов в радиусе видимости (#{visualRange}м и линии обзора)"
            },
            "gl": {
                "context": {
                    "example": "Exemplo",
                    "each_enemy": "Fai algo cos enemigos deste nivel"
                },
                "description": "Devolve unha matriz de todos os enemigos vivos á vista (#{visualRange}m e liña-de-visión)."
            },
            "sv": {
                "context": {
                    "example": "Exempel",
                    "each_enemy": "Gör någonting med varje fiende här"
                },
                "description": "Returnerar en lista med alla levande fiender inom synhåll (#{visualRange}m och line-of-sight)."
            },
            "fr": {
                "context": {
                    "example": "Exemple",
                    "each_enemy": "Interagir ici avec chaque ennemi"
                },
                "description": "Fournit une liste de tous les ennemis vivants dans le champs de vision (#{visualRange}m et visible)."
            },
            "es-ES": {
                "name": "encontrarEnemigos",
                "description": "Devuelve una matriz de todos los enemigos que viven dentro del campo de vision (#{visualRange}m y la linea-de-vision).",
                "context": {
                    "example": "Ejemplo",
                    "each_enemy": "Hacer algo con cada enemigo aqui"
                }
            },
            "tr": {
                "context": {
                    "example": "Örnek",
                    "each_enemy": "Her düşmanla burada bir şeyler yapın"
                },
                "description": "Görüş alanındaki (#{visualRange}m ve görüş açısındaki) yaşayan tüm düşmanların dizisini getirir."
            },
            "-": {
                "-": "-"
            }
        },
        "context": {
            "example": "Example",
            "each_enemy": "Do something with each enemy here"
        },
        "snippets": {
            "io": {
                "tab": "findEnemies",
                "code": "findEnemies"
            },
            "lua": {
                "tab": "findEnemies",
                "code": "self:findEnemies()"
            },
            "clojure": {
                "tab": "findEnemies",
                "code": "(.findEnemies this)"
            },
            "python": {
                "tab": "findEnemies",
                "code": "self.findEnemies()"
            },
            "javascript": {
                "tab": "findEnemies",
                "code": "this.findEnemies()"
            },
            "coffeescript": {
                "tab": "findEnemies",
                "code": "@findEnemies()"
            }
        },
        "example": {
            "python": "enemies = self.findEnemies()\nfor enemy in enemies:\n  # <%= each_enemy %>\n  self.attack(enemy)  # <%= example %>",
            "coffeescript": "enemies = @findEnemies()\nfor enemy in enemies\n  # <%= each_enemy %>\n  @attack enemy  # <%= example %>\n",
            "javascript": "var enemies = this.findEnemies();\nfor(var i = 0; i < enemies.length; ++i) {\n  var enemy = enemies[i];\n  // <%= each_enemy %>\n  this.attack(enemy);  // <%= example %>\n}"
        },
        "description": "Returns an array of all living enemies within eyesight (#{visualRange}m and line-of-sight).",
        "type": "function",
        "name": "findEnemies"
    },
    {
        "userShouldCaptureReturn": {
            "variableName": "friends"
        },
        "i18n": {
            "sl": {
                "context": {
                    "each_friend": "Za vsakega prijatelja naredite neko dejanje"
                },
                "description": "Vrne polje vseh vidnih živih prijateljev (#{visualRange}m).",
                "name": "findFriends"
            },
            "vi": {
                "context": {
                    "each_friend": "Hãy làm gì đó với mỗi người bạn ở đây"
                }
            },
            "fi": {
                "context": {
                    "each_friend": "Tee jotain jokaiselle ystävälle tässä"
                },
                "description": "Palauttaa taulukon kaikista elävistä vihollisista, jotka ovat näkökentässä (#{visualRange}m)",
                "name": "etsiYstavat"
            },
            "sr": {
                "context": {
                    "each_friend": "Uradi nesto sa svakim prijateljem ovde"
                },
                "description": "Daje niz(array) svih zivih prijatelja u vidokrugu (#{visualRange}m)."
            },
            "he": {
                "context": {
                    "each_friend": "עשה משהו עם הידיד כאן"
                },
                "description": "(#{visualRange}m) מחזיר מערך של כל הידידים החיים בקו ראיה"
            },
            "el": {
                "context": {
                    "each_friend": "Κάνε κάτι με τον κάθε φίλο εδώ"
                },
                "description": "Επιστρέφει μία λίστα με όλους τους ζωντανούς φίλους που βρίσκονται στo οπτικό πεδίο του ήρωα (#{visualRange}m"
            },
            "da": {
                "context": {
                    "each_friend": "Gør noget ved hver ven her"
                },
                "description": "Returnerer et array med alle levende venner inden for synsvidde (#{visualRange}m)."
            },
            "ja": {
                "context": {
                    "each_friend": "ここで、それぞれの仲間に対して、何かしなさい"
                },
                "description": "視界中の生存している全ての仲間の配列をReturnしなさい (#{visualRange}m)。"
            },
            "th": {
                "context": {
                    "each_friend": "ทำอะไรสักอย่างกับเพื่อนพวกนี้"
                },
                "description": "ส่งกลับอาเรย์ของเพื่อนที่มีชีวิตทั้งหมดในระยะสายตา (#{visualRange}m)"
            },
            "pl": {
                "context": {
                    "each_friend": "Zrób coś z każdym przyjacielem tutaj"
                },
                "description": "Zwraca tablicę wszystkich przyjaciół mieszkających w zasięgu wzroku (# {visualRange} m)."
            },
            "ar": {
                "description": "يرجع مجموعة من كل الأصدقاء في مدى بصرك  (#{visualRange}m).",
                "context": {
                    "each_friend": "افعل شيئًا مع كل صديق هنا"
                }
            },
            "sk": {
                "description": "Vracia pole všetkých žijúcich priateľov na dohľad (#{visualRange}m).",
                "context": {
                    "each_friend": "Urob niečo  s každým priateľom."
                }
            },
            "ro": {
                "context": {
                    "each_friend": "Fă ceva cu fiecare prieten."
                },
                "description": "Întoarce un șir cu toți prietenii vii din câmpul vizual (#{visualRange}m)."
            },
            "lt": {
                "context": {
                    "each_friend": "Padaryk ką nors su kiekvienu draugu atskirai"
                },
                "description": "Gražinamas rezultatas - masyvas visų gyvų draugų, kurie yra regėjimo zonoje (#{visualRange}m)."
            },
            "bg": {
                "context": {
                    "each_friend": "Направи нещо с всеки приятел тук"
                },
                "description": "Връща масив, състоящ се от всички живи съюзници в обзоримото поле."
            },
            "ca": {
                "context": {
                    "each_friend": "Fes alguna cosa amb cada enemic aquí"
                },
                "description": "Retorna un array de tots els amics vius a la vista (#{visualRange}m)."
            },
            "zh-HANT": {
                "context": {
                    "each_friend": "對每一個朋友做事"
                },
                "description": "回傳視野（#{visualRange}公尺）內所有活著的朋友的陣列。"
            },
            "hu": {
                "description": "Megad egy tömböt, ami tartalmazza az összes látótávolságban lévő élő barátot (#{visualRange}m).",
                "context": {
                    "each_friend": "Csinálj itt valamit minden baráttal"
                }
            },
            "nl-NL": {
                "description": "Geeft een verzameling van vrienden binnen een zichtveld van (#{visualRange}m).",
                "context": {
                    "each_friend": "Doe iets met elke vriend hier"
                }
            },
            "id": {
                "description": "Mengembalikan array dari semua teman yang masih hidup dalam jarak pandang (#{visualRange}m).",
                "context": {
                    "each_friend": "Lakukan sesuatu terhadap setiap teman di sini"
                }
            },
            "cs": {
                "context": {
                    "each_friend": "Udělej něco s každým zdejším přítelem"
                },
                "description": "Vrátí pole obsahující všechny žijící přátele v dohledu (#{dohled}m)."
            },
            "pt-BR": {
                "context": {
                    "each_friend": "Faça algo com cada amigo aqui"
                },
                "description": "Retorna um vetor de todos os amigos vivos no campo de visão (#{visualRange}m)."
            },
            "uk": {
                "description": "Повертає масив усіх живих союзників, що знаходяться у полі зору (#{visualRange}м).",
                "context": {
                    "each_friend": "Зробіть щось з кожним другом"
                }
            },
            "nb": {
                "description": "Returnerer en matrise (array) av alle levende venner innenfor synsrekkevidde (#{visualRange}m).",
                "context": {
                    "each_friend": "Gjør noe med hver venn her"
                }
            },
            "de-DE": {
                "context": {
                    "each_friend": "Mach hier etwas mit jedem Freund"
                },
                "description": "Gibt eine Liste mit allen lebenden befreundeten Einheiten innerhalb der Sichtweite (#{visualRange}m und Sichtlinie) zurück"
            },
            "zh-HANS": {
                "context": {
                    "each_friend": "在这里可以对每个友方单位采取一些对应措施"
                },
                "description": "[返回数组]获取视线范围#{visualRange}米内存活的所有友方单位"
            },
            "es-419": {
                "context": {
                    "each_friend": "Haz algo con cada amigo aquí"
                },
                "description": "Devuelve un grupo de todos los amigos vivos dentro del rango de visión (#{visualRange}m)"
            },
            "it": {
                "description": "Restituisce un array che contiene tutti gli amici vivi all'interno del raggio visivo (#{visualRange}m).",
                "context": {
                    "each_friend": "Fai qualcosa con ogni amico qui"
                }
            },
            "ru": {
                "context": {
                    "each_friend": "Нужно сделать что-нибудь с каждым другом"
                },
                "description": "Возвращает массив всех живых друзей в радиусе видимости (#{visualRange}м)"
            },
            "gl": {
                "context": {
                    "each_friend": "Fai algo cos amigos deste nivel"
                },
                "description": "Devolve unha matriz con todos os amigos vivos á vista (#{visualRange}m)."
            },
            "sv": {
                "context": {
                    "each_friend": "Gör någonting med varje vän här"
                },
                "description": "Returnerar en lista med alla levande vänner inom synhåll (#{visualRange}m)."
            },
            "fr": {
                "context": {
                    "each_friend": "Interagir avec chaque allié"
                },
                "description": "Fournit une liste de tous les amis vivants dans le champs de vision (#{visualRange}m)."
            },
            "es-ES": {
                "name": "encontrarAliados",
                "description": "Devuelve una matriz de todos los amigos vivos en el campo de vision (#{visualRange}m).",
                "context": {
                    "each_friend": "Hacer algo con cada amigo aqui"
                }
            },
            "tr": {
                "context": {
                    "each_friend": "Her dostla burada bir şeyler yapın"
                },
                "description": "Görüş alanındaki (#{visualRange}m) yaşayan tüm dostların bir dizisini getirir."
            },
            "-": {
                "-": "-"
            }
        },
        "context": {
            "each_friend": "Do something with each friend here"
        },
        "snippets": {
            "io": {
                "tab": "findFriends",
                "code": "findFriends"
            },
            "lua": {
                "tab": "findFriends",
                "code": "self:findFriends()"
            },
            "clojure": {
                "tab": "findFriends",
                "code": "(.findFriends this)"
            },
            "python": {
                "tab": "findFriends",
                "code": "self.findFriends()"
            },
            "coffeescript": {
                "tab": "findFriends",
                "code": "@findFriends()"
            },
            "javascript": {
                "tab": "findFriends",
                "code": "this.findFriends()"
            }
        },
        "example": {
            "python": "friends = self.findFriends()\nfor friend in friends:\n  # <%= each_friend %>\n  self.follow(friend)",
            "coffeescript": "friends = @findFriends()\nfor friend in friends\n  # <%= each_friend %>\n  @follow friend",
            "javascript": "var friends = this.findFriends();\nfor(var i = 0; i < friends.length; ++i) {\n  var friend = friends[i];\n  // <%= each_friend %>\n  this.follow(friend);\n}"
        },
        "description": "Returns an array of all living friends within eyesight (#{visualRange}m).",
        "type": "function",
        "name": "findFriends"
    },
    {
        "userShouldCaptureReturn": {
            "variableName": "enemy"
        },
        "i18n": {
            "sl": {
                "description": "Vrne najbližjega vidnega živega sovražnika (#{visualRange}m in vidno polje) ali null, če ni sovražnikov.",
                "name": "findNearestEnemy"
            },
            "fi": {
                "description": "Palauttaa lähimmäisen elävän vihollisen joka on näkökentässä (#{visualRange}m ja näkökentässä) tai null jos vihollisia ei ole.",
                "name": "etsiLaheisinVihollinen"
            },
            "sr": {
                "description": "Vraca najblizeg neprijatelja u vidokrugu, koji je jos u zivotu(#{visualRange}m and line-of-sight), ili null ako ga nema."
            },
            "he": {
                "description": "(#{visualRange}m and line-of-sight) מחזיר את האויב החי הקרוב ביותר הנמצא בקו הראיה או null אם אין אויב שכזה"
            },
            "el": {
                "description": "Επιστρέφει τον κοντινότερο ζωντανό εχθρό που βρίσκεται στo οπτικό πεδίο του ήρωα #{visualRange}m ή κενό εάν δεν υπάρχει εχθρός."
            },
            "ca": {
                "description": "Retorna l'enemic més proper en el camp de visió (#{visualRange}m i en línea de visió), o bé null si no n'hi ha cap."
            },
            "da": {
                "description": "Returnerer den nærmeste levende fjende inden for synsvidde (#{visualRange}m og direkte udsyn), eller `null` hvis ikke der er nogle."
            },
            "ja": {
                "description": "視界中の一番近い生存している敵をReturnしなさい  (#{visualRange}m and line-of-sight)、または 敵がいない場合は、\"null\"をReturnしなさい。"
            },
            "th": {
                "description": "ส่งกลับค่าศัตรูที่มีชีวิตที่ใกล้ที่สุดในระยะสายตา (#{visualRange}m และ line-of-sight) หรือ `null` ถ้าไม่มี"
            },
            "pl": {
                "description": "Zwraca najbliższego żyjącego wroga w zasięgu wzroku (# {visualRange} m i line-of-sight), lub `null` (nic), jeśli nie ma żadnych."
            },
            "ar": {
                "description": "ارجاع كل الأعداء الأحياء على مدى البصر (#{visualRange}m), أو \"null\" إذا لم يكن هناك أعداء أحياء."
            },
            "sk": {
                "description": "Vráti najbližšieho žijúceho nepriateľa na dohľad (#{visualRange}m a v línii pohľadu) alebo `null`, ak tento nepriateľ neexistuje."
            },
            "ro": {
                "description": "Întoarce cel mai apropiat inamic în viață din câmpul vizual (#{visualRange}m and line-of-sight), sau 'null' dacă nu este nici unul."
            },
            "nl-NL": {
                "description": "Geeft de dichtsbijzijnde levende vijand in het gezichtsveld (#{visualRange}m and line-of-sight), of `null` als er geen zijn."
            },
            "pt-PT": {
                "name": "encontrarInimigoMaisPróximo",
                "description": "Devolve o inimigo mais próximo dentro do campo visual (#{visualRange}m e 'line-of-sight' (campo de visão)) ou `null` se não ouver nenhum."
            },
            "uk": {
                "description": "Повертає найближчого живого ворога у полі зору (#{visualRange}м та у прямій видимості), або `null`, якщо нікого немає."
            },
            "lt": {
                "description": "Grąžina artimiausia gyvą priešą, kuris yra regėjimo zonoje"
            },
            "bg": {
                "description": "Връща най-близкия жив противник в обзоримото поле или 'null' ако няма такъв."
            },
            "zh-HANT": {
                "description": "回傳視野（#{visualRange}公尺＋前方）內最近活著的敵人的陣列。沒有的話回`null`。"
            },
            "hu": {
                "description": "Megadja a legközelebbi látótávolságon belüli, életben lévő ellenség nevét (#{visualRange}m és rálátás), vagy null-t, ha nincs egy sem."
            },
            "es-419": {
                "description": "Devuelve el enemigo vivo más cercano a la vista (#{visualRange}m and line-of-sigh), o nulo si no hay ninguno."
            },
            "id": {
                "description": "Mengembalikan musuh yang hidup yang terdekat dalam jarak pandang (#{visualRange}m and line-of-sight), atau `null` jika tidak terdapat satu pun."
            },
            "cs": {
                "description": "Vrátí nejbližšího žijícího nepřítele v dohledu (#{dohled}m a směr-pohledu)."
            },
            "pt-BR": {
                "description": "Retorna o inimigo vivo mais próximo no campo de visão (#{visualRange}m and line-of-sight), ou nulo se não houver nenhum."
            },
            "nb": {
                "description": "Returnerer den nærmeste levende fienden innenfor synsrekkevidde (#{visualRange}m og med siktlinje), eller `null` hvis det ikke finnes noen."
            },
            "de-DE": {
                "description": "Gibt die nächste lebende feindliche Einheit innerhalb der Sichtweite (#{visualRange}m und Sichtlinie) zurück, bzw. `null` wenn keine in der Nähe sind."
            },
            "zh-HANS": {
                "description": "[返回单位]获取视线范围#{visualRange}米内存活的距离最近敌方单位，如果不存在，返回空值。"
            },
            "it": {
                "description": "Restituisce il nemico vivo più vicino all'interno del raggio visivo (#{visualRange}m e nella direzione dello sguardo), oppure `null` se non ce ne sono."
            },
            "ru": {
                "description": "Возвращает ближайшего живого врага в радиусе видимости (#{visualRange}м и линии обзора) или `null` если его нет."
            },
            "es-ES": {
                "name": "encontrarEnemigoMásCercano",
                "description": "Devuelve el enemigo vivo más cercano a la vista (#{visualRange}m y campo visual), o `null` si no hay ninguno."
            },
            "gl": {
                "description": "Devolve o inimigo vivo máis próximo á vista (#{visualRange}m e liña-de-visión), ou  `null`  si non hai."
            },
            "sv": {
                "description": "Returnerar den närmsta levande fienden inom synhåll (#{visualRange}m and line-of-sight), eller `null` om det inte finns några."
            },
            "fr": {
                "description": "Fournit l'ennemi vivant le plus proche dans le champs de vision (#{visualRange}m et visible), ou `null` s'il n'y en a aucun."
            },
            "tr": {
                "description": "Görüş alanındaki (#{visualRange}m ve görüş açısındaki) yaşayan en yakın düşmanı getirir; böyle bir düşman yoksa 'null' döner."
            },
            "-": {
                "-": "-"
            }
        },
        "example": {
            "io": "enemy := findNearestEnemy\nattack(enemy)\nattack(enemy)",
            "lua": "enemy = self:findNearestEnemy()\nself:attack(enemy)\nself:attack(enemy)",
            "clojure": "(let [enemy (.findNearestEnemy this)]\n    (.attack this enemy)\n    (.attack this enemy))",
            "coffeescript": "enemy = @findNearestEnemy()\n@attack enemy\n@attack enemy",
            "python": "enemy = self.findNearestEnemy()\nself.attack(enemy)\nself.attack(enemy)",
            "javascript": "var enemy = this.findNearestEnemy();\nthis.attack(enemy);\nthis.attack(enemy);"
        },
        "snippets": {
            "io": {
                "tab": "findNearestEnemy",
                "code": "findNearestEnemy"
            },
            "lua": {
                "tab": "findNearestEnemy",
                "code": "self:findNearestEnemy()"
            },
            "clojure": {
                "tab": "findNearestEnemy",
                "code": "(.findNearestEnemy this)"
            },
            "python": {
                "tab": "findNearestEnemy",
                "code": "self.findNearestEnemy()"
            },
            "coffeescript": {
                "tab": "findNearestEnemy",
                "code": "@findNearestEnemy()"
            },
            "javascript": {
                "tab": "findNearestEnemy",
                "code": "this.findNearestEnemy()"
            }
        },
        "owner": "this",
        "description": "Returns the closest living enemy within eyesight (#{visualRange}m and line-of-sight), or null if there aren't any.",
        "type": "function",
        "name": "findNearestEnemy"
    },
    {
        "userShouldCaptureReturn": {
            "variableName": "friend"
        },
        "i18n": {
            "sl": {
                "description": "Vrne najbližjega vidnega živega prijatelja (#{visualRange}m in vidno polje) ali null, če ni prijateljev.",
                "name": "findNearestFriend"
            },
            "fi": {
                "description": "Palauttaa lähimmäisen elävän ystävän joka on näkökentässä (#{visualRange}m ja näkökentässä) tai null jos ystäviä ei ole.",
                "name": "etsiLaheisinYstava"
            },
            "sr": {
                "description": "Vraca najblizeg prijatelja u vidokrugu, koji je ziv (#{visualRange}m), ili null ako ga nema"
            },
            "he": {
                "description": "(#{visualRange}m)- אם לא נמצא כזה null  מחזיר את הידיד החי הקרוב ביותר הנמצא בקו ראיה או"
            },
            "el": {
                "description": "Επιστρέφει τον κοντινότερο ζωντανό φίλο που βρίσκεται στo οπτικό πεδίο του ήρωα #{visualRange}m ή κενό εάν δεν υπάρχει φίλος."
            },
            "ca": {
                "description": "Retorna l'amic més proper en el camp de visió (#{visualRange}m), o bé null si no n'hi ha cap."
            },
            "da": {
                "description": "Returnerer den nærmeste levende ven inden for synsvidde (#{visualRange}m), eller `null` hvis ikke der er nogle."
            },
            "ja": {
                "description": "視界にいる一番近い生存している敵仲間をReturnしなさい  (#{visualRange}m)、または 仲間がいない場合は、'null'をReturnしなさい。"
            },
            "sv": {
                "description": "Returnerar den närmsta levande vännen inom synhåll (#{visualRange}m), eller `null` om det inte finns någon."
            },
            "th": {
                "description": "ส่งกลับค่าเพื่อนที่มีชีวิตที่ใกล้ที่สุดในระยะสายตา (#{visualRange}m) หรือ `null` ถ้าไม่มี"
            },
            "pl": {
                "description": "Zwraca najbliższego przyjacila mieszkającego w obrębie wzroku (# {visualRange} m), lub `null` (nic), jeśli nie ma żadnego."
            },
            "ar": {
                "description": "ارجاع كل الأصدقاء الأحياء على مدى البصر (#{visualRange}m), أو \"null\" إذا لم يكن هناك أصدقاء أحياء."
            },
            "sk": {
                "description": "Vráti najbližšieho žijúceho priateľa na dohľad (#{visualRange}m ) alebo `null`, ak tento priateľ neexistuje."
            },
            "ro": {
                "description": "Întoarce cel mai apropiat prieten în viață din câmpul vizual (#{visualRange}m), sau 'null' dacă nu este nici unul."
            },
            "nl-NL": {
                "description": "Geeft de dichtsbijzijnde levende vriend in het gezichtsveld (#{visualRange}m and line-of-sight), of `null` als er geen zijn."
            },
            "tr": {
                "description": "Görüş alanındaki (#{visualRange}m ve görüş açısındaki) yaşayan en yakın dostu getirir; böyle bir dost yoksa 'null' döner."
            },
            "gl": {
                "description": "Devolve o amigo vivo máis próximo á vista (#{visualRange}m), ou `null` se non hai ningún."
            },
            "uk": {
                "description": "Повертає найближчого живого союзника у полі зору (#{visualRange}м), або `null`, якщо нікого немає."
            },
            "lt": {
                "description": "Grąžina artimiausią gyvą draugą, kuris yra regėjimo zonoje (#{visualRange}m), arba `null` jei ten nėra nei vieno."
            },
            "bg": {
                "description": "Връща най-близкият жив съюзник в обзоримото поле или 'null' ако няма такъв."
            },
            "ru": {
                "description": "Возвращает имя ближайшего живого друга в радиусе видимости (#{visualRange}m) или null, если его нет"
            },
            "zh-HANT": {
                "description": "回傳視野（#{visualRange}公尺）內最近活著的朋友的陣列。沒有的話回`null`。"
            },
            "hu": {
                "description": "Megadja a legközelebbi látótávolságon belüli, életben lévő barát nevét (#{visualRange}m és line-of-sight), vagy null-t, ha nincs egy sem."
            },
            "zh-HANS": {
                "description": "返回视野(视线范围#{visualRange}米)内最近的存活朋友，如果无则返回'null'"
            },
            "it": {
                "description": "Restituisce l'amico vivo più vicino all'interno del raggio visivo (#{visualRange}m) o `null` se non ce ne sono."
            },
            "es-419": {
                "description": "Devuelve el amigo vivo mas cercano del campo de vision (#{visualRange}m), o nulo si no hay ninguno."
            },
            "id": {
                "description": "Mengembalikan teman yang hidup yang terdekat dalam jarak pandang (#{visualRange}m), atau `null` jika tidak terdapat satu pun."
            },
            "fr": {
                "description": "Fournit l'ami vivant le plus proche dans le champs de vision (#{visualRange}m), ou `null` s'il n'y en a aucun."
            },
            "de-DE": {
                "description": "Gibt die nächste lebende befreundete Einheit innerhalb der Sichtweite (#{visualRange}m und Sichtlinie) zurück, bzw. `null` wenn keine in der Nähe sind."
            },
            "cs": {
                "description": "Vrátí nejbližšího žijícího přítele v dohledu (#{dohled}m), nebo 'null', pokud tam není žádný."
            },
            "pt-BR": {
                "description": "Retorna o amigo vivo mais próximo no campo de visão (#{visualRange}m), ou nulo se não houver nenhum."
            },
            "nb": {
                "description": "Returnerer den nærmeste levende vennen innenfor synsrekkevidde (#{visualRange}m), eller `null` hvis det ikke finnes noen."
            },
            "es-ES": {
                "name": "encontrarAmigoMasCercano",
                "description": "Devuelve el amigo vivo mas cercano del campo de vision (#{visualRange}m), o `null` si no hay ninguno."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "findNearestFriend",
                "code": "findNearestFriend"
            },
            "lua": {
                "tab": "findNearestFriend",
                "code": "self:findNearestFriend()"
            },
            "clojure": {
                "tab": "findNearestFriend",
                "code": "(.findNearestFriend this)"
            },
            "python": {
                "tab": "findNearestFriend",
                "code": "self.findNearestFriend()"
            },
            "coffeescript": {
                "tab": "findNearestFriend",
                "code": "@findNearestFriend()"
            },
            "javascript": {
                "tab": "findNearestFriend",
                "code": "this.findNearestFriend()"
            }
        },
        "description": "Returns the closest living friend within eyesight (#{visualRange}m), or null if there aren't any.",
        "type": "function",
        "name": "findNearestFriend"
    },
    {
        "snippets": {
            "io": {
                "tab": "findNearestCombatant",
                "code": "findNearestCombatant"
            },
            "lua": {
                "tab": "findNearestCombatant",
                "code": "self:findNearestCombatant()"
            },
            "clojure": {
                "tab": "findNearestCombatant",
                "code": "(.findNearestCombatant this)"
            },
            "python": {
                "tab": "findNearestCombatant",
                "code": "self.findNearestCombatant()"
            },
            "coffeescript": {
                "tab": "findNearestCombatant",
                "code": "@findNearestCombatant()"
            },
            "javascript": {
                "tab": "findNearestCombatant",
                "code": "this.findNearestCombatant()"
            }
        },
        "description": "Returns the closest living friend or foe within eyesight (#{visualRange}m and line-of-sight), or null if there aren't any.",
        "type": "function",
        "name": "findNearestCombatant"
    },
    {
        "userShouldCaptureReturn": {
            "variableName": "enemyMissiles"
        },
        "i18n": {
            "sl": {
                "description": "Vrne polje vseh sovražnikovih izstrelkov (primeri vrst: 'puščica', 'granata', 'žarek', 'kopje', 'energijska krogla'). Omejeno na vidne istrelke  (#{visualRange}m in vidno polje).",
                "name": "findEnemyMissiles"
            },
            "fi": {
                "description": "Palauttaa taulukon kaikista vihollisen ammuksista (esimerkiksi: 'arrow', 'shell', 'beam', 'spear', 'energy-ball') . Vain näkökentässä olevat ammukset palautetaan (#{visualRange}m ja näkökentässä).",
                "name": "etsiVihollisenAmmukset"
            },
            "sr": {
                "description": "Vraca niz svih neprijateljevih projektila (example types: 'arrow', 'shell', 'beam', 'spear', 'energy-ball'). Ograniceno na projektile u vidokrugu  (#{visualRange}m and line-of-sight)."
            },
            "he": {
                "description": "(#{visualRange}m and line-of-sight) - (example types: 'arrow', 'shell', 'beam', 'spear', 'energy-ball') מחזיר מערך של טילי האויב, מוגבל לטילים שנמצאים בקו ראיה"
            },
            "el": {
                "description": "Επιστρέφει μία λίστα με όλους τους εχθρικούς πύραυλους ('βέλη','ακτίνες','ακόντια΄ κ.α) που βρίσκονται στo οπτικό πεδίο του ήρωα (#{visualRange}m"
            },
            "ca": {
                "description": "Retorna un array de tots els missils enemics (exemple dels tipus: 'arrow', 'shell', 'beam', 'spear', 'energy-ball'). Limitat a missils de dins el camp de visió (#{visualRange}m i en línea de visió)."
            },
            "da": {
                "description": "Returnerer et array med alle fjendtlige projektiler (f.eks. 'pil', 'granat', 'stråle', 'spyd', 'energi-kugle'). Begrænset til projektiler inden for synsvidde (#{visualRange}m og direkte udsyn)."
            },
            "ja": {
                "description": "全ての敵のミサイルの配列（例: 'arrow', 'shell', 'beam', 'spear', 'energy-ball') をReturnしなさい。視界中のミサイルに限る (#{visualRange}m and line-of-sight)。"
            },
            "sv": {
                "description": "Returnerar en lista av fiendens alla projektiler (till exempel: 'pil', 'stråle', 'spjut', 'energi-klot'). Begränsad till projektiler inom synhåll (#{visualRange}m and line-of-sight)."
            },
            "th": {
                "description": "ส่งกลับอาเรย์ของจรวดศัตรูทั้งหมด (ตัวอย่างชนิด: 'arrow', 'shell', 'beam', 'spear', 'energy-ball') จำกัดเพียงจรวดที่อยู่ในระยะสายตา (#{visualRange}m และ line-of-sight)"
            },
            "pl": {
                "description": "Zwraca tablicę wszystkich pocisków wroga (przykładowe typy: \"strzałki\", \"muszla\", \"belka\", \"włócznia\", \"energetyczna piłka\"). Ogranicza się do pocisków w zasięgu wzroku (# {visualRange} m i line-of-sight)."
            },
            "ar": {
                "description": "ارجاع كل مجموعة من الصواريخ المعادية ( أمثلة: 'arrow', 'shell', 'beam', 'spear', 'energy-ball') محدود بالصواريخ على مدى البصر   (#{visualRange}m و line-of-sight)\r\n"
            },
            "sk": {
                "description": "Vráti pole všetkých nepriateľských striel (príklady typov: 'arrow', 'shell', 'beam', 'spear', 'energy-ball'). Limitované na strely na dohľad (#{visualRange}m a v línii pohľadu)."
            },
            "ro": {
                "description": "Întoarce un șir cu toate proiectilele inamicilor (examplu :'arrow', 'shell', 'beam', 'spear', 'energy-ball'). Limitată la proiectilele din câmpul vizual (#{visualRange}m and line-of-sight)."
            },
            "nl-NL": {
                "description": "Geeft een reeks met alle vijandelijke projectielen (voorbeeltypen: 'arrow', 'shell', 'beam', 'spear', 'energy-ball'). Beperkt tot projectielen binnen gezichtsveld (#{visualRange}m and line-of-sight)."
            },
            "tr": {
                "description": "Görüş alanıyla (#{visualRange}m ve görüş açısındaki) sınırlı olmak üzere, tüm uzak mesafe düşman saldırıların (örnek:'ok','top','ışın','mızrak','enerji topu') dizisini getirir."
            },
            "gl": {
                "description": "Devolve unha matriz de tódolos misís inimigos (tipos de exemplo: 'frecha', 'proxectil', 'raio', 'lanza', 'bola-de-enerxía').Limitado ós misís que estén á vista (#{visualRange}m e liña-de-visión)."
            },
            "zh-HANS": {
                "description": "[返回数组]获取视线范围#{visualRange}米内所有敌人的子弹（弓箭，炮弹，激光，标枪，能量球）。"
            },
            "uk": {
                "description": "Повертає масив усіх снарядів від ворогів (приклад типів:  'arrow', 'shell', 'beam', 'spear', 'energy-ball'). Масив обмежений полем зору (#{visualRange}м та у прямій видимості)."
            },
            "lt": {
                "description": "Grąžina masyvą visų priešo raketų (pavyzdiniai tipai: 'arrow', 'shell', 'beam', 'spear', 'energy-ball'). Nepasiekiama raketų, kurios yra regėjimo zonoje (#{visualRange}m ir line-of-sight)."
            },
            "ru": {
                "description": "Возвращает массив всех вражеских снарядов (примеры типов: 'arrow', 'shell', 'beam', 'spear', 'energy-ball'). Ограничено для снарядов в поле видимости(#{visualRange}m and line-of-sight). "
            },
            "bg": {
                "description": "Връща масив, състоящ се от всички противникови метателни предмети (например типовете: 'стрела', 'патрон', 'лъч', 'копие', 'енергийна топка'). Връща единствено метателните предмети в обзоримото поле."
            },
            "zh-HANT": {
                "description": "回傳視野（#{visualRange}公尺＋前方）內所有敵方發射物的陣列（例：`箭`，`砲彈`，`雷射`，`矛`，`能量球`）。"
            },
            "hu": {
                "description": "Visszaad egy tömböt, ami tartalmazza az ellenség összes lőszerét (példa típusok: 'arrow', 'shell', 'beam', 'spear', 'energy-ball'). A látótávolságon belüli lőszerekre korlátozva. (#{visualRange}m és rálátás)."
            },
            "it": {
                "description": "Restituisce un array contenente tutti i proiettili nemici (es. 'arrow', 'shell', 'beam', 'spear', 'energy-ball'). Limitato a quelli entro il raggio visivo (#{visualRange}m e nella direzione dello sguardo)."
            },
            "es-419": {
                "description": "Devuelve un arreglo de todos los misiles enemigos dentro del campo de vision (#{visualRange}m and line-of-sight)."
            },
            "id": {
                "description": "Mengembalikan sebuah array dari semua missil musuh (example types: 'arrow', 'shell', 'beam', 'spear', 'energy-ball'). Terbatas pada missil dalam jarak pandang (#{visualRange}m and line-of-sight)."
            },
            "fr": {
                "description": "Fournit une liste de tous les projectiles enmemis (exemple : 'flêche', 'coquillage', 'rayon', 'lance', 'boule d'énergie'). Limité aux projectiles dans le champs de vision (#{visualRange}m et visible)."
            },
            "de-DE": {
                "description": "Gibt eine Liste (Array) aller feindlicher Projektile zurück (Beispieltypen: 'arrow' (\"Pfeil\"), 'shell' (\"Granate\"), 'beam' (\"Strahl\"), 'spear' (\"Speer\"), 'energy-ball' (\"Energie-Ball\")). Beschränkt auf Projektile innerhalb der Sichtweite (#{visualRange}m und Blickrichtung)."
            },
            "cs": {
                "description": "Vrátí pole obsahující všechny střely nepřátel (přiklady typů: 'arrow', 'shell', 'beam', 'spear', 'energy-ball'). Omezeno na střely v dohledu (#{dohled}m a směr-pohledu)."
            },
            "pt-BR": {
                "description": "Retorna um vetor de todos os mísseis inimigos (exemplos: 'flecha', 'casca', 'raio', 'lança', 'bola de energia'). Limitado a mísseis dentro do campo de visão (#{visualRange}m e linha de visão)."
            },
            "nb": {
                "description": "Returnerer en array av alle fiendens prosjektiler (f.eks. 'arrow', 'shell', 'beam', 'spear', 'energy-ball'). Begrenset til prosjektiler innenfor synsrekkevidde (#{visualRange}m og med siktlinje)."
            },
            "es-ES": {
                "description": "Devuelve una matriz de todos los missiles enemigos dentro del campo de vision (#{visualRange}m and line-of-sight)."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "findEnemyMissiles",
                "code": "findEnemyMissiles"
            },
            "lua": {
                "tab": "findEnemyMissiles",
                "code": "self:findEnemyMissiles()"
            },
            "clojure": {
                "tab": "findEnemyMissiles",
                "code": "(.findEnemyMissiles this)"
            },
            "python": {
                "tab": "findEnemyMissiles",
                "code": "self.findEnemyMissiles()"
            },
            "coffeescript": {
                "tab": "findEnemyMissiles",
                "code": "@findEnemyMissiles()"
            },
            "javascript": {
                "tab": "findEnemyMissiles",
                "code": "this.findEnemyMissiles()"
            }
        },
        "description": "Returns an array of all enemy missiles (example types: 'arrow', 'shell', 'beam', 'spear', 'energy-ball'). Limited to missiles within eyesight (#{visualRange}m and line-of-sight).",
        "type": "function",
        "name": "findEnemyMissiles"
    },
    {
        "userShouldCaptureReturn": {
            "variableName": "friendlyMissiles"
        },
        "i18n": {
            "sl": {
                "description": "Vrne polje vseh izstrelkov prijateljev (primeri vrst: 'puščica', 'granata', 'žarek', 'kopje', 'energijska krogla'). Omejeno na vidne istrelke  (#{visualRange}m in vidno polje).",
                "name": "findFriendlyMissiles"
            },
            "fi": {
                "name": "etsiVihollisenAmmukset",
                "description": "Palauttaa taulukon kaikista ystävien ammuksista (esimerkiksi: 'arrow', 'shell', 'beam', 'spear', 'energy-ball') . Vain näkökentässä olevat ammukset palautetaan (#{visualRange}m ja näkökentässä)."
            },
            "sr": {
                "description": "Vraca niz svih prijateljskih projektila (example types: 'arrow', 'shell', 'beam', 'spear', 'energy-ball'). Ograniceno na projektile u vidokrugu  (#{visualRange}m and line-of-sight)."
            },
            "he": {
                "description": "(#{visualRange}m and line-of-sight) - (example types: 'arrow', 'shell', 'beam', 'spear', 'energy-ball') מחזיר מערך של טילי האויב, מוגבל לטילים שנמצאים בקו ראיה"
            },
            "el": {
                "description": "Επιστρέφει μία λίστα με όλους τους φιλικούς πύραυλους ('βέλη','ακτίνες','ακόντια΄ κ.α) που βρίσκονται στo οπτικό πεδίο του ήρωα (#{visualRange}m"
            },
            "ca": {
                "description": "Retorna un array de tots els missils \"amics\" (exemple dels tipus: 'arrow', 'shell', 'beam', 'spear', 'energy-ball'). Limitat a missils de dins el camp de visió (#{visualRange}m i en línea de visió)."
            },
            "da": {
                "description": "Returnerer et array med alle venlige projektiler (f.eks. 'pil', 'granat', 'stråle', 'spyd', 'energi-kugle'). Begrænset til projektiler inden for synsvidde (#{visualRange}m og direkte udsyn)."
            },
            "ja": {
                "description": "全ての仲間のミサイルの配列（例: 'arrow', 'shell', 'beam', 'spear', 'energy-ball') をReturnしなさい。視界中のミサイルに限る (#{visualRange}m and line-of-sight)。"
            },
            "sv": {
                "description": "Returnerar en lista av allierades alla projektiler (till exempel: 'pil', 'stråle', 'spjut', 'energi-klot'). Begränsad till projektiler inom synhåll (#{visualRange}m and line-of-sight)."
            },
            "th": {
                "description": "ส่งกลับอาเรย์ของจรวดของเพื่อนทั้งหมด (ตัวอย่างชนิด: 'arrow', 'shell', 'beam', 'spear', 'energy-ball') จำกัดเพียงจรวดที่อยู่ในระยะสายตา (#{visualRange}m และ line-of-sight)"
            },
            "pl": {
                "description": "Zwraca tablicę wszystkich pocisków wroga (przykładowe typy: \"strzałki\", \"muszla\", \"belka\", \"włócznia\", \"energetyczna piłka\"). Ogranicza się do pocisków w zasięgu wzroku (# {visualRange} m i line-of-sight)."
            },
            "ar": {
                "description": "ارجاع كل مجموعة من الصواريخ الصديقة ( أمثلة: 'arrow', 'shell', 'beam', 'spear', 'energy-ball') محدود بالصواريخ على مدى البصر   (#{visualRange}m و line-of-sight)\r\n"
            },
            "sk": {
                "description": "Vráti pole všetkých priateľských striel (príklady typov: 'arrow', 'shell', 'beam', 'spear', 'energy-ball'). Limitované na strely na dohľad (#{visualRange}m a v línii pohľadu)."
            },
            "ro": {
                "description": "Întoarce un șir cu toate proiectilele prietenilor (exemplu de tipuri:'arrow', 'shell', 'beam', 'spear', 'energy-ball'). Limitată la proiectilele din câmpul vizual (#{visualRange}m and line-of-sight)."
            },
            "nl-NL": {
                "description": "Geeft een reeks met alle vriendschappelijke projectielen (voorbeeltypen: 'arrow', 'shell', 'beam', 'spear', 'energy-ball'). Beperkt tot projectielen binnen gezichtsveld (#{visualRange}m and line-of-sight)."
            },
            "tr": {
                "description": "Görüş alanıyla (#{visualRange}m ve görüş açısındaki) sınırlı olmak üzere, tüm uzak mesafe dost saldırıların (örnek:'ok','top','ışın','mızrak','enerji topu') dizisini getirir."
            },
            "gl": {
                "description": "Devolve unha matriz de tódolos misís aliados (tipos de exemplo:'frecha', 'proxectil', 'raio', 'lanza', 'bola-de-enerxía'). Limitad ós misís que estén á vista (#{visualRange}m e liña-de-visión)."
            },
            "zh-HANS": {
                "description": "[返回数组]获取视线范围#{visualRange}米内所有友方的子弹（弓箭，炮弹，激光，标枪，能量球）。"
            },
            "uk": {
                "description": "Повертає масив усіх снарядів від союзників (приклад типів:  'arrow', 'shell', 'beam', 'spear', 'energy-ball'). Масив обмежений полем зору (#{visualRange}м та у прямій видимості)."
            },
            "lt": {
                "description": "Grąžina masyvą visų draugiškų raketų (pavyzdiniai tipai: 'arrow', 'shell', 'beam', 'spear', 'energy-ball'). Nepasiekiama raketų, kurios yra regėjimo zonoje (#{visualRange}m ir line-of-sight)."
            },
            "ru": {
                "description": "Возвращает массив всех союзных снарядов (примеры типов: 'arrow', 'shell', 'beam', 'spear', 'energy-ball'). Ограничено для снарядов в поле видимости(#{visualRange}m and line-of-sight)."
            },
            "bg": {
                "description": "Връща масив, състоящ се от всички съюзнически метателни предмети (например типовете: 'стрела', 'патрон', 'лъч', 'копие', 'енергийна топка'). Връща единствено метателните предмети в обзоримото поле."
            },
            "zh-HANT": {
                "description": "回傳視野（#{visualRange}公尺＋前方）內所有朋友發射物的陣列（例：`箭`，`砲彈`，`雷射`，`矛`，`能量球`）。"
            },
            "hu": {
                "description": "Visszaad egy tömböt a barátok lőszerének listájával (példa típusok: 'arrow', 'shell', 'beam', 'spear', 'energy-ball'). A látótávolságon belüli lőszerekre korlátozva. (#{visualRange}m és rálátás)."
            },
            "it": {
                "description": "Restituisce un array contenente tutti i proiettili amici (es. 'arrow', 'shell', 'beam', 'spear', 'energy-ball'). Limitato a quelli entro il raggio visivo (#{visualRange}m e nella direzione dello sguardo)."
            },
            "es-419": {
                "description": "Devuelve un arreglo de todos los misiles amigos dentro del campo de vision (#{visualRange}m and line-of-sight)."
            },
            "cs": {
                "description": "Vrátí pole obsahující všechny střely přátel (přiklady typů: 'arrow', 'shell', 'beam', 'spear', 'energy-ball'). Omezeno na střely v dohledu (#{dohled}m a směr-pohledu)."
            },
            "id": {
                "description": "Mengembalikan sebuah array dari semua missil teman (example types: 'arrow', 'shell', 'beam', 'spear', 'energy-ball'). Terbatas pada missil dalam jarak pandang (#{visualRange}m and line-of-sight)."
            },
            "fr": {
                "description": "Fournit une liste de tous les projectiles enmemis (exemple : 'flêche', 'coquillage', 'rayon', 'lance', 'boule d'énergie'). Limité aux projectiles dans le champs de vision (#{visualRange}m et visible)."
            },
            "de-DE": {
                "description": "Gibt eine Liste (Array) aller befreundeter Projektile zurück (Beispieltypen: 'arrow' (\"Pfeil\"), 'shell' (\"Granate\"), 'beam' (\"Strahl\"), 'spear' (\"Speer\"), 'energy-ball' (\"Energie-Ball\")). Beschränkt auf Projektile innerhalb der Sichtweite (#{visualRange}m und Blickrichtung)."
            },
            "pt-BR": {
                "description": "Retorna um vetor de todos os mísseis amigos (exemplos: 'flecha', 'casca', 'raio', 'lança', 'bola de energia'). Limitado a mísseis dentro do campo de visão (#{visualRange}m e linha de visão)."
            },
            "nb": {
                "description": "Returnerer en array av alle vennlige prosjektiler (f.eks. 'arrow', 'shell', 'beam', 'spear', 'energy-ball'). Begrenset til prosjektiler innenfor synsrekkevidde (#{visualRange}m og med siktlinje)."
            },
            "es-ES": {
                "description": "Devuelve una matriz de todos los missiles amigos dentro del campo de vision (#{visualRange}m and line-of-sight)."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "findFriendlyMissiles",
                "code": "findFriendlyMissiles"
            },
            "lua": {
                "tab": "findFriendlyMissiles",
                "code": "self:findFriendlyMissiles()"
            },
            "clojure": {
                "tab": "findFriendlyMissiles",
                "code": "(.findFriendlyMissiles this)"
            },
            "python": {
                "tab": "findFriendlyMissiles",
                "code": "self.findFriendlyMissiles()"
            },
            "coffeescript": {
                "tab": "findFriendlyMissiles",
                "code": "@findFriendlyMissiles()"
            },
            "javascript": {
                "tab": "findFriendlyMissiles",
                "code": "this.findFriendlyMissiles()"
            }
        },
        "description": "Returns an array of all friendly missiles (example types: 'arrow', 'shell', 'beam', 'spear', 'energy-ball'). Limited to missiles within eyesight (#{visualRange}m and line-of-sight).",
        "type": "function",
        "name": "findFriendlyMissiles"
    },
    {
        "userShouldCaptureReturn": {
            "variableName": "nearest"
        },
        "i18n": {
            "sl": {
                "description": "Vrne najbližjo enoto iz polja enot ali null, če je polje prazno.",
                "name": "findNearest"
            },
            "vi": {
                "description": "Trả lại đơn vị gần nhất ra khỏi một mảng của các đơn vị, hoặc không cần nếu mảng trống."
            },
            "fi": {
                "description": "Palauttaa läheisimmän joukon annetusta joukko-taulukosta tai null jos annettu taulukko on tyhjä.",
                "name": "etsiLaheisin"
            },
            "sr": {
                "description": "Vraca najblizi odred iz niza odred, ili null ako je niz prazan"
            },
            "he": {
                "description": "במקרה שהמערך ריק  NULL מחזיר את היחידה הקרובה ביותר מתוך מערך של יחידות או "
            },
            "el": {
                "description": "Επιστρέφει το κοντινότερη μονάδα (αντικείμενο-φίλο ή εχθρό) που βρίσκεται στo οπτικό πεδίο του ήρωα (#{visualRange}m ή κενό εάν δεν υπάρχει φίλος."
            },
            "ca": {
                "description": "Retorna la unitat més propera de un array d'unitats, o bé null si l'array està buit."
            },
            "da": {
                "description": "Returnerer den nærmeste enhed ud af at array med enheder, eller null hvis arrayet er tomt."
            },
            "ja": {
                "description": "ユニットの配列の中から一番近いユニットをReturnしなさい。または配列が空の場合は、nullをReturnしなさい。"
            },
            "th": {
                "description": "ส่งกลับหน่วยที่ใกล้ที่สุดในอาเรย์ของหน่วย หรือ null ถ้าอาเรย์เปล่า"
            },
            "pl": {
                "description": "Zwraca najbliższą jednostkę z tablicy jednostek, lub 'null', jeśli tablica jest pusta."
            },
            "ar": {
                "description": "يعيد أقرب وحدة من مجموعة الوحدات، أو null إن كانت المجموعة فارغة"
            },
            "sk": {
                "description": "Vráti najbližší prvok z poľa alebo null, ak je pole prázdne."
            },
            "ro": {
                "description": "Întoarce cea mai aproape unitate dintr-un șir de unități, sau 'null' dacă șirul este vid."
            },
            "nl-NL": {
                "description": "Geeft de dichtstbijzijnde eenheid uit een reeks van eenheden of 'null' als er geen eenheden zijn."
            },
            "uk": {
                "description": "Повертає найближчу одиницю з масиву одиниць, або null, якщо масив порожній."
            },
            "lt": {
                "description": "Grąžina artimiausią vienetą iš vienetų masyvo arba nieko, jei masyvas yra tuščias"
            },
            "bg": {
                "description": "Връща най-близката единица от масив с единици. Връща 'null' ако масива е празен."
            },
            "zh-HANT": {
                "description": "回傳陣列內最近的人物，陣列是空的話回`null`。"
            },
            "hu": {
                "description": "Megadja a legközelebbi egységet egy egységekből álló tömbből, vagy null-t, ha a tömb üres."
            },
            "cs": {
                "description": "Vrátí nejbližší jednotku z pole jednotek, nebo null pokud je pole prázdné."
            },
            "id": {
                "description": "Mengembalikan unit terdekat dari sebuah array suatu unit, atau null jika array kosong."
            },
            "pt-BR": {
                "description": "Retorna a unidade mais próxima de um vetor de unidades, ou nulo se o vetor for vazio."
            },
            "es-ES": {
                "description": "Devuelve la unidad mas cercana de una matriz de unidades, o null si la matriz esta vacia."
            },
            "nb": {
                "description": "Returnerer den nærmeste enheten fra en matrise (array) av enheter, eller null hvis matrisen er tom."
            },
            "de-DE": {
                "description": "Gibt die nächste Einheit aus einer Liste von Einheiten zurück, bzw. `null` wenn die Liste leer ist."
            },
            "zh-HANS": {
                "description": "[返回单位]获取一个单位数组中最近的单位，如果不存在，返回空值。"
            },
            "es-419": {
                "description": "Devuelve la unidad más cercana de un grupo de unidades, de lo contraro, devuelve nulo si el grupo está vacío."
            },
            "it": {
                "description": "Trova e restituisce l'unità più vicina in un array di unità, oppure `null` se l'array è vuoto."
            },
            "ru": {
                "description": "Возвращает ближайший элемент из массива элементов или null если массив пуст."
            },
            "gl": {
                "description": "Devolve a unidade que está máis próxima dunha matriz de unidades, ou `null` se a matriz está baleira."
            },
            "sv": {
                "description": "Returnerar den närmsta enheten ur en lista med enheter, eller null om listan är tom."
            },
            "fr": {
                "description": "Fournit l'unité la plus proche parmi la liste d'unités, ou `null` si la liste est vide."
            },
            "tr": {
                "description": "Birim dizisinden en yakın birimi getirir. Dizi boşsa 'null' döner."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "findNearest",
                "code": "findNearest(${1:enemies})"
            },
            "lua": {
                "tab": "findNearest",
                "code": "self:findNearest(${1:enemies})"
            },
            "clojure": {
                "tab": "findNearest",
                "code": "(.findNearest this ${1:enemies})"
            },
            "python": {
                "tab": "findNearest",
                "code": "self.findNearest(${1:enemies})"
            },
            "javascript": {
                "tab": "findNearest",
                "code": "this.findNearest(${1:enemies})"
            },
            "coffeescript": {
                "tab": "findNearest",
                "code": "@findNearest ${1:enemies}"
            }
        },
        "args": [
            {
                "description": "",
                "example": {
                    "io": "findItems",
                    "lua": "self:findItems()",
                    "clojure": "(.findItems this)",
                    "python": "self.findItems()",
                    "coffeescript": "@findItems()",
                    "javascript": "this.findItems()"
                },
                "type": "array",
                "name": "units"
            }
        ],
        "description": "Returns the closest unit out of an array of units, or null if the array is empty.",
        "type": "function",
        "name": "findNearest"
    },
    {
        "snippets": {
            "io": {
                "tab": "findCombatants",
                "code": "findCombatants"
            },
            "lua": {
                "tab": "findCombatants",
                "code": "self:findCombatants()"
            },
            "clojure": {
                "tab": "findCombatants",
                "code": "(.findCombatants this)"
            },
            "python": {
                "tab": "findCombatants",
                "code": "self.findCombatants()"
            },
            "coffeescript": {
                "tab": "findCombatants",
                "code": "@findCombatants()"
            },
            "javascript": {
                "tab": "findCombatants",
                "code": "this.findCombatants()"
            }
        },
        "description": "Returns an array of all living units (friend and foe alike) within eyesight (#{visualRange}m and line-of-sight).",
        "type": "function",
        "name": "findCombatants"
    },
    {
        "userShouldCaptureReturn": {
            "variableName": "corpses"
        },
        "i18n": {
            "sl": {
                "description": "Vrne polje vseh mrtvih enot (prijateljskih in sovražnih).",
                "name": "findCorpses"
            },
            "vi": {
                "description": "Trả về một mảng của tất cả các đơn vị đã chết (bạn và thù như nhau).\r\n"
            },
            "fi": {
                "description": "Palauttaa taulukon kaikista kuolleista joukoista (Ystävistä ja myös vihollisista)",
                "name": "etsiRuumiit"
            },
            "sr": {
                "description": "Vraca niz svih mrtvih jedinica ( prijatelji i neprijatelji )."
            },
            "he": {
                "description": "מחזיר מערך של כל היחידות שנהרגו - אויב או ידיד"
            },
            "bg": {
                "description": "Връща масив с всички мъртви единици(приятелски и противници)."
            },
            "el": {
                "description": "Επιστρέφει μία λίστα με όλους τους νεκρούς (εχθρούς και φίλους)"
            },
            "zh-HANT": {
                "description": "回傳所有死去單位（朋友和敵人）的陣列。"
            },
            "ca": {
                "description": "Retorna un array de totes les unitats mortes (tan si són amigues com enemigues)"
            },
            "tr": {
                "description": "Tüm ölü birimlerin (dost yada düşman) bir dizisini döndürür."
            },
            "es-419": {
                "description": "Devuelve un arreglo de todas las unidades muertas (amigos y enemigos por igual)."
            },
            "hu": {
                "description": "Visszaad egy tömböt a halott egységek listájával (baráti és ellenséges is)"
            },
            "lt": {
                "description": "Grąžina masyvą visų nukautų padarų."
            },
            "da": {
                "description": "Returnerer et array med alle døde enheder (både venner og fjender)."
            },
            "ja": {
                "description": "死亡した全てのユニット（仲間と敵）の配列をReturnしなさい。"
            },
            "nl-NL": {
                "description": "Geeft een \"array\" terug van alle dode eenheden (vrienden en vijanden)."
            },
            "it": {
                "description": "Restituisce un array contenente tutte le unità morte (amiche e nemiche)."
            },
            "uk": {
                "description": "Повертає масив усіх мертвих юнітів (союзників та ворогів)."
            },
            "pt-BR": {
                "description": "Retorna um vetor de todas as unidades mortas (amigas e inimigas)."
            },
            "id": {
                "description": "Mengembalikan sebuah array dari semua unit yang mati (teman dan musuh sama)."
            },
            "es-ES": {
                "description": "Devuelve una matriz de todas las unidades muertas (tanto amigos como enemigos)."
            },
            "sv": {
                "description": "Returnerar en lista av alla döda (både vänner och fiender)."
            },
            "de-DE": {
                "description": "Gibt eine Lister aller toten Einhieten (befreundete sowie feindliche) zuruck."
            },
            "cs": {
                "description": "Vrací pole všech mrtvých jednotek (přáteli i nepřáteli)."
            },
            "th": {
                "description": "ส่วกลับอาเรย์ของหน่วยที่ตายแล้วทั้งหมด (เพื่อนและศัตรู)"
            },
            "pl": {
                "description": "Zwraca tablicę wszystkich martwych jednostek (przyjaciel jak i wrogów)."
            },
            "zh-HANS": {
                "description": "返回所有的死亡单位（包括敌人和朋友）"
            },
            "fr": {
                "description": "Fournit une liste des unités mortes (amies comme ennemies)"
            },
            "ar": {
                "description": "يعيد مجموعة من كل الموتي (الأصدقاء والأعداء منهم)"
            },
            "ru": {
                "description": "Возвращает массив всех мертвых друзей и врагов"
            },
            "ro": {
                "description": "Întoarce un șir cu toate unitățile moarte (atât prieteni cât și dușmani)."
            },
            "sk": {
                "description": "Vráti pole mŕtvych (priateľov aj nepriateľov)."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "findCorpses",
                "code": "findCorpses"
            },
            "lua": {
                "tab": "findCorpses",
                "code": "self:findCorpses()"
            },
            "clojure": {
                "tab": "findCorpses",
                "code": "(.findCorpses this)"
            },
            "python": {
                "tab": "findCorpses",
                "code": "self.findCorpses()"
            },
            "coffeescript": {
                "tab": "findCorpses",
                "code": "@findCorpses()"
            },
            "javascript": {
                "tab": "findCorpses",
                "code": "this.findCorpses()"
            }
        },
        "description": "Returns an array of all dead units (friend and foe alike).",
        "type": "function",
        "name": "findCorpses"
    }
]