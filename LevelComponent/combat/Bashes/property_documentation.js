[
    {
        "i18n": {
            "ar": {
                "description": "الـ #{spriteName} يجب أن يكون في 'مجال السيطرة على الخصم' بهدف السيطرة والفوز  ",
                "name": "  مجال السيطرة على الخصم "
            },
            "fi": {
                "description": "#{spriteName}n pitää olla `bashRange` metrin päässä kohteesta iskeäkseen sitä.",
                "name": "iskuEtaisyys"
            },
            "sr": {
                "description": " # {spriteName} mora biti u opsegu 'bashRange' mete da bi Tresnuo."
            },
            "es-419": {
                "description": "El #{spriteName} debe estar dentro de `bashRange` metros del objetivo a golpear."
            },
            "ca": {
                "description": "El #{spriteName} ha de trobar-se a `bashRange`metres de l'objectiu per colpejar.   "
            },
            "bg": {
                "description": "#{spriteName} трябва да бъде в обсег `bashRange` в метри от целта, за да я \"трясне\"."
            },
            "da": {
                "description": "For at kunne slå, skal #{spriteName} være indenfor `bashRange` meter fra målet."
            },
            "el": {
                "description": "Ο ήρωας πρέπει να είναι σε απόσταση #{bashrange} μέτρων από τον στόχο ώστε να επίτεθεί με αυτό τον τρόπο."
            },
            "ro": {
                "description": "#{spriteName} trebuie să fie la o distanță mai mică de `bashRange` metri de țintă pentru a o izbi."
            },
            "hu": {
                "description": "A #{spriteName} `bashRange` méteren belül kell legyen, hogy odaüthess."
            },
            "id": {
                "description": "#{bashRange}"
            },
            "uk": {
                "description": "#{spriteName} повинен знаходитись у радіусі `bashRange` від цілі, щоб дати їй штовхана."
            },
            "ja": {
                "description": "#{spriteName} はバッシュ対象から `bashRange` メートル以内でなければならない。"
            },
            "it": {
                "description": "#{spriteName} deve essere entro `bashRange` metri dal bersaglio per colpirlo."
            },
            "cs": {
                "description": "#{spriteName} musí být blíž než `bashRange` metrů od protivníka, aby ho mohl srazit."
            },
            "pl": {
                "description": "{spriteName} musi być w odległości `bashRange` metrów do celu by uderzyć."
            },
            "nl-NL": {
                "description": "De #{spriteName} moet binnen `bashRange` meter van het doelwit zijn om te beuken."
            },
            "sk": {
                "description": "Hrdina musí byť vzdialený od cieľa menej  ako  `bashRange` metrov, aby mohol zasadiť úder štítom."
            },
            "pt-BR": {
                "description": "O #{spriteName} deve estar `bashRange` metros próximo do alvo para batê-lo."
            },
            "tr": {
                "description": "Darbe uygulamak için #{spriteName} vurulacak hedefin `bashRange` metre dahilinde olmalı."
            },
            "nb": {
                "description": "#{spriteName} må være maksimalt `bashRange` meter fra målet for å slå."
            },
            "zh-HANS": {
                "description": "spriteName必须在‘bashrange ’米以内目标抨击。"
            },
            "ru": {
                "description": "Объект #{spriteName} должен быть в зоне `bashRange` метров от персонажа, чтобы его можно было ударить."
            },
            "es-ES": {
                "description": "El #{nombre del sprite} debe encontrarse dentro de los metros de 'bashrange' para golpear."
            },
            "lt": {
                "description": " #{spriteName} turi būti ne toliau nei `bashRange` iki taikinio, kad komanda galėtų būti panaudota."
            },
            "de-DE": {
                "description": "#{spriteName} muss sich innerhalb von `bashRange` (\"Schlagreichweite\") Metern zum Gegner befinden um `bash` (\"Schlag\") auszuführen."
            },
            "sv": {
                "description": "Magi #{spriteName} måste vara inom `bashRange` meter från målet."
            },
            "fr": {
                "description": "Le #{spriteName} doit être à portée de `bashRange` mètres de la cible pour cogner."
            },
            "gl": {
                "description": "O #{spriteName} debe estar dentro de `bashRange` metros do obxectivo para golpear."
            },
            "-": {
                "-": "-"
            }
        },
        "description": "The #{spriteName} must be within `bashRange` meters of the target to bash.",
        "type": "number",
        "name": "bashRange"
    },
    {
        "description": "Bashes deal `bashDamage` damage to their target.",
        "type": "number",
        "name": "bashDamage"
    },
    {
        "snippets": {
            "io": {
                "tab": "bash",
                "code": "bash ${1:enemy}"
            },
            "lua": {
                "tab": "bash",
                "code": "self:bash(${1:enemy})"
            },
            "coffeescript": {
                "tab": "bash",
                "code": "@bash ${1:enemy}"
            },
            "clojure": {
                "tab": "bash",
                "code": "(.bash this ${1:enemy})"
            },
            "python": {
                "tab": "bash",
                "code": "self.bash(${1:enemy})"
            },
            "javascript": {
                "tab": "bash",
                "code": "this.bash(${1:enemy})"
            }
        },
        "i18n": {
            "ar": {
                "description": "",
                "name": "يضرب بعنف "
            },
            "fi": {
                "description": "`bash`n toinen hyökkäys tekee #{bashDamage} vahinkoa ja iskee kohdetta poispäin.",
                "name": "isku"
            },
            "sr": {
                "description": "Sekundarni napad 'Tresnuti' dodeljuje #{bashDamage} stete i udarcev odguruje metu unazad."
            },
            "es-419": {
                "description": "El `bash` ataque secundario ocupa #{bashDamage} daño y derriba al objetivo por la espalda."
            },
            "ca": {
                "description": "L'atac secundari `bash` causa #{bashDamage} danys i fa retrocedir a l'objectiu."
            },
            "bg": {
                "description": "Второстепенната атака на \"трясването\" `bash` прави #{bashDamage} щети и отхвърля целта назад."
            },
            "da": {
                "description": "Det sekundære angreb `bash` påfører #{bashDamage} skade og slår målet bagud."
            },
            "el": {
                "description": "To `bash` είναι ένα είδος δευτερέουσας επίθεσης που επιτυγχάνει #{bashDamage} ζημιά και σπρώχνει τον στόχο πίσω."
            },
            "ro": {
                "description": "Atacul secundar `bash` (izbire) provoacă un efect în valoare de #{bashDamage} și împinge ținta înapoi."
            },
            "hu": {
                "description": "A `bash` másodlagos támadás #{bashDamage} pontot sebez és hátralöki a célpontot."
            },
            "id": {
                "description": "#{bashDamage}"
            },
            "uk": {
                "description": "Допоміжна атака `bash` завдає #{bashDamage} пошкоджень та відштовхує ціль."
            },
            "ja": {
                "description": "2回目の `bash` は対象に #{bashDamage} ダメージとノックバックを与える。"
            },
            "sv": {
                "description": "`bash` sekundära attack ger #{bashDamage} skada och slår bak målet."
            },
            "it": {
                "description": "L'attacco secondario `bash` infligge #{bashDamage} danni e respinge indietro il bersaglio."
            },
            "cs": {
                "description": "Sražení (`bash`) je doprovodný útok, který způsobí #{bashDamage} škodu a odhodí protivníka zpět."
            },
            "pl": {
                "description": "Podrzędny atak `Bash` zadaje #{bashDamage} obrażeń i odpycha cel."
            },
            "nl-NL": {
                "description": "De `beuk` secundaire aanval levert #{bashDamage} schade en damage and stoot het doelwit weg."
            },
            "sk": {
                "description": "Sekundárny úder štítom `bash` spôsobí   újmu #{bashDamage} a odhodí cieľ dozadu."
            },
            "pt-BR": {
                "description": "Um segundo ataque de `bash` retira #{bashDamage} de dano e bate no alvo novamente."
            },
            "tr": {
                "description": "`bash` ikincil saldırısı #{bashDamage} hasar verir ve hedefi geriye fırlatır."
            },
            "nb": {
                "description": "`bash` annen-angrepet gir #{bashDamage} skade og dytter målet bakover."
            },
            "zh-HANS": {
                "description": "bash两次攻击的重击造成伤害并击退目标"
            },
            "ru": {
                "description": "Вторичная аттака `bash` наносит #{bashDamage} единиц урона и отбрасывает цель назад."
            },
            "es-ES": {
                "description": "El ataque secundario 'bash' inflige #{bashDamage} de daño y hace retroceder al objetivo"
            },
            "lt": {
                "description": "Antrinis puolimas padaro #{bashDamage} -žalą ir atstumia priešą/taikinį atgal."
            },
            "fr": {
                "description": "L'attaque secondaire `bash` provoque #{bashDamage} dommages et repousse la cible."
            },
            "de-DE": {
                "description": "Der Zweitangriff `bash` (\"Schlag\") stößt das Ziel zurück und fügt diesem #{bashDamage} Schaden zu."
            },
            "-": {
                "-": "-"
            }
        },
        "args": [
            {
                "description": "The target to bash.",
                "example": {
                    "io": "findNearestEnemy",
                    "lua": "self:findNearestEnemy()",
                    "clojure": "(.findNearestEnemy this)",
                    "python": "self.findNearestEnemy()",
                    "coffeescript": "@findNearestEnemy()",
                    "javascript": "this.findNearestEnemy()"
                },
                "type": "object",
                "name": "target"
            }
        ],
        "description": "The `bash` secondary attack deals #{bashDamage} damage and knocks the target back.",
        "type": "function",
        "name": "bash"
    }
]