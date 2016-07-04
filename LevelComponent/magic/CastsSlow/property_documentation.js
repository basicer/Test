[
    {
        "i18n": {
            "bg": {
                "description": "Прави магия `\"slow\"` на мишена `target`, ако тя е на разстояние до #{spells.slow.range} метра. Магията забавя движението и атаките на целта, както и изобщо протичането на времето, #{spells.slow.factor} пъти за #{spells.slow.duration} секунди."
            },
            "sr": {
                "description": "Izvodi 'usporavanje' caroliju na metu ako je u opsegu #{spells.slow.range}, usporavajuci kretanje u napad (i kompletno trajanje vremena) za faktor od #{spells.slow.factor} u trajanju od #{spells.slow.duration} sekundi."
            },
            "es-419": {
                "description": "Lanza un `\"slow\"` hechizo sobre `target` si dentro de #{spells.slow.range}m , lo que frena su movimiento y ataque (y todo paso del tiempo) por un factor de #{spells.slow.factor} para #{spells.slow.duration} segundos."
            },
            "nl-NL": {
                "description": "Voert een \"slow\" (traag) spreuk uit op het \"target\" (doelwit), indien binnen #{spells.slow.range}m, waardoor deze langzamer loopt en aanvalt, met een factor #{spells.slow.factor} voor #{spells.slow.duration} seconden."
            },
            "el": {
                "description": "Ρίχνει ένα ξόρκι `Επιβράδυνσης` σε στόχο που βρίσκεται σε ακτίνα ως #{spells.shrink.range}m, προκαλώντας την επιβράδυνση της κίνησης και την εξασθένηση των επιθέσεων του κατά συντελεστή #{spells.slow.factor} για #{spells.slow.duration} δευτερόλεπτα."
            },
            "pl": {
                "description": "Rzuć `\"slow\"` czar na `target` jeśli jest w zasięgu #{spells.slow.range}m, spowalniając jego ruchy i ataki (oraz całkowity upływ czasu) #{spells.slow.factor} razy przez #{spells.slow.duration} sekund."
            },
            "it": {
                "description": "Lancia un incantesimo `\"slow\"` su `target` se entro #{spells.slow.range}m, rallentando il suo movimento e attacco (e l'avanzamento del tempo) di un fattore di #{spells.slow.factor} per #{spells.slow.duration} second."
            },
            "es-ES": {
                "description": "Invoca un echizo \"lento\" sobre \"objetivo\" si en #(hechizo.lento.rango)m, disminuyendo la velocidad del movimiento y ataque (y el paso del tiempo) en un factor de #(hechizo.lento.factor) durante #(hechizo.lento.duracion) segundos."
            },
            "sv": {
                "description": "Lägger en `\"slow\"`-besvärjelse på `target` om inom #{spells.slow.range}m, saktar ner målets förflyttning och attacker (och all förfluten tid) med en faktor av #{spells.slow.factor} under #{spells.slow.duration} sekunder."
            },
            "uk": {
                "description": "Накладає заклинання `\"slow\"` на ціль `target`, якщо вона в радіусі #{spells.slow.range} метрів, сповільнюючи її швидкість руху та атаки з коефіцієнтом #{spells.slow.factor} на #{spells.slow.duration} секунд."
            },
            "pt-BR": {
                "description": "Lança um feitiço de `\"slow\"` (lentidão) no `target` se dentro de #{spells.slow.range}m, tornando seus movimentos e ataques (e toda a passagem do tempo) lentos em um fator de #{spells.slow.factor} por #{spells.slow.duration} segundos."
            },
            "sk": {
                "description": "Kúzli `\"slow\"` na `target`, ak je v dosahu #{spells.slow.range}m. Spomaľuje pohyb a útok s faktorom  #{spells.slow.factor} počas #{spells.slow.duration} sekúnd."
            },
            "zh-HANS": {
                "description": "如果`目标单位`在 #{spells.slow.range}米内，在`目标单位`上执行 `”降速”`法术，目标会降低移动速度，并且以#{spells.slow.factor}倍的攻击力攻击，持续#{spells.slow.duration}秒。"
            },
            "ru": {
                "description": "Применить навык `\"slow\"` (замедление) к `target` (цели) замедляя в течении #{spells.slow.range}m, все его перемещения и действия на коефициент #{spells.slow.factor} в течении #{spells.slow.duration} секунд."
            },
            "fr": {
                "description": "Lance un sort `\"slow\"` sur `target` si située à moins de #{spells.slow.range}m, ralentissant ses mouvements et ses attaques (et tout passage de temps) via un facteur de #{slowFactor} pour #{slowDuration} secondes."
            },
            "de-DE": {
                "description": "Wirkt einen `\"slow\"` Spruch auf `target` innerhalb von #{spells.slow.range}m. Dabei wird es langsamer in Angriff und Bewegung, um einen Faktor von #{slowFactor} für #{slowDuration} Sekunden."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "slow",
                "code": "cast(\"slow\", ${1:target})"
            },
            "lua": {
                "tab": "slow",
                "code": "self:cast(\"slow\", ${1:target})"
            },
            "clojure": {
                "tab": "slow",
                "code": "(.cast this \"slow\" ${1:target})"
            },
            "python": {
                "tab": "slow",
                "code": "self.cast(\"slow\", ${1:target})"
            },
            "javascript": {
                "tab": "slow",
                "code": "this.cast(\"slow\", ${1:target})"
            },
            "coffeescript": {
                "tab": "slow",
                "code": "@cast \"slow\", ${1:target}"
            }
        },
        "args": [
            {
                "default": "",
                "description": "The target on which to cast \"slow\".",
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
        "description": "Casts a `\"slow\"` spell on `target` if within #{spells.slow.range}m, slowing down its movement and attack (and all passage of time) by a factor of #{spells.slow.factor} for #{spells.slow.duration} seconds.",
        "type": "function",
        "name": "castSlow"
    }
]