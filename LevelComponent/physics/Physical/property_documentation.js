[
    {
        "context": {
            "right": "Move 10 meters to the right."
        },
        "example": {
            "io": "// <%= right %>\nnewX := pos x + 10\nnewY := pos y\nmoveXY(newX, newY)",
            "lua": "# <%= right %>\nlocal newX = self.pos.x + 10\nlocal newY = self.pos.y\nself:moveXY(newX, newY)",
            "clojure": "# <%= right %>\n(let [newX (+ (.x (.pos this)) 10)\n      newY (.y (.pos this))]\n    (.moveXY this newX newY))",
            "python": "# <%= right %>\nnewX = self.pos.x + 10\nnewY = self.pos.y\nself.moveXY(newX, newY)",
            "coffeescript": "# <%= right %>\nnewX = @pos.x + 10\nnewY = @pos.y\n@moveXY newX, newY",
            "javascript": "// <%= right %>\nvar newX = this.pos.x + 10;\nvar newY = this.pos.y;\nthis.moveXY(newX, newY);"
        },
        "i18n": {
            "sr": {
                "context": {
                    "right": "Иди 10 метара десно"
                }
            },
            "da": {
                "context": {
                    "right": "Flyt 10 meter til højre."
                },
                "description": "Koordinaterne `x` (vandret) og `y` (lodret) af #{spriteName}'s centrum."
            },
            "el": {
                "context": {
                    "right": "Μετακίνηση 10 μέτρα προς τα δεξιά."
                },
                "description": "Οι `x` (οριζόντιες) και` y` (κάθετες) συντεταγμένες του κέντρου του #{spriteName}."
            },
            "nl-NL": {
                "context": {
                    "right": "Loop 10 meter naar rechts."
                },
                "description": "De 'x' (horizontaal) en 'y' (verticaal) coördinaten van de #{spriteName}'s middelpunt."
            },
            "zh-HANT": {
                "description": "#{spriteName} 的 `x` (水平)和 `y` (垂直)方向座標。",
                "context": {
                    "right": "向右移動 10 公尺。"
                }
            },
            "lt": {
                "context": {
                    "right": "Pajudėti 10 metrų į dešinę"
                },
                "description": " #{spriteName} centro koordinatės - `x` (horizontali) ir `y` (vertikali)"
            },
            "hu": {
                "description": "A #{spriteName} közepének `x` (vízszintes) és `y` (függőleges) koordinátái.",
                "context": {
                    "right": "Mozogj 10 métert jobb felé."
                }
            },
            "pl": {
                "context": {
                    "right": "Przesuń 10 metrów w prawo."
                },
                "description": "Współrzędne `x` (pozioma) i `y` (pionowa) środka obiektu: #{spriteName}."
            },
            "ro": {
                "context": {
                    "right": "Deplaseaza 10 metri spre dreapta."
                }
            },
            "sv": {
                "context": {
                    "right": "Flytta 10 meter till höger."
                },
                "description": "`x` (horisontala) och `y` (vertikala) koordinater för #{spriteName}s centrum."
            },
            "uk": {
                "context": {
                    "right": "Рухайтесь на 10 метрів праворуч."
                },
                "description": "`x` (горизонтальна) and `y` (вертикальна) координати центру #{spriteName}."
            },
            "it": {
                "context": {
                    "right": "Muovi a destra di 10 metri."
                },
                "description": "Le coordinate `x` (orizzontale) e `y` (verticale) del centro di #{spriteName}."
            },
            "es-419": {
                "context": {
                    "right": "Mueva 10 metros a la derecha."
                },
                "description": "Las coordenadas `x` (horizontal) & ` y` (vertical) del # {spriteName } del centro."
            },
            "sk": {
                "context": {
                    "right": "Pohyb 10 metrov doprava."
                },
                "description": "`x` (vodorovná) a `y` (zvislá) súradnica centra hrdinu."
            },
            "zh-HANS": {
                "context": {
                    "right": "向右移动10米。"
                },
                "description": "`x` (水平方位) 和 `y`(竖直方位)坐标系统表示#{spriteName}的中心。"
            },
            "pt-BR": {
                "context": {
                    "right": "Mova-se 10 metros para a direita."
                },
                "description": "As coordenadas 'x' (horizontal) e 'y' (vertical) do centro de #{spriteName}."
            },
            "es-ES": {
                "context": {
                    "right": "Muevete 10 metros hacia la derecha."
                },
                "description": "Las coordenadas en 'x' (horizontal) e 'y' (vertical) marcan el centro del #{spriteName}."
            },
            "de-DE": {
                "description": "Die `x` (horizontale) und `y` (vertikale) Koordinaten von #{spriteName}'s Position."
            },
            "nb": {
                "description": "Inneholder `x` (horisontalt) og `y` (vertikalt) koordinatene til #{spriteName}s senterpunktet."
            },
            "fr": {
                "context": {
                    "right": "Déplace toi 10 mètres à la droite."
                },
                "description": "Les coordonnées `x` (horizontale) et `y` (verticale) du centre du #{spriteName}."
            },
            "gl": {
                "description": "As coordenadas `x` (horizontal) e `y` (vertical) do centro de #{spriteName}."
            },
            "ru": {
                "description": "(`x`-горизонтальные,`y`-вертикальные) координаты центра #{spriteName}."
            },
            "tr": {
                "context": {
                    "right": "Sağa 10 metre hareket et."
                },
                "description": "#{spriteName} konumunun  `x` (yatay) ve `y` (dikey) koordinatları."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "pos",
                "code": "pos"
            },
            "lua": {
                "tab": "pos",
                "code": "self.pos"
            },
            "clojure": {
                "code": "(.pos this)",
                "tab": "pos"
            },
            "coffeescript": {
                "tab": "pos",
                "code": "@pos"
            },
            "python": {
                "tab": "pos",
                "code": "self.pos"
            },
            "javascript": {
                "tab": "pos",
                "code": "this.pos"
            }
        },
        "description": "The `x` (horizontal) and `y` (vertical) coordinates of the #{spriteName}'s center.",
        "type": "object",
        "name": "pos"
    },
    {
        "snippets": {
            "python": {
                "tab": "rotation",
                "code": "self.rotation"
            },
            "javascript": {
                "tab": "rotation",
                "code": "this.rotation"
            }
        },
        "description": "The #{spriteName}'s rotation in radians (`0` to `2 * Math.PI`).\n",
        "type": "number",
        "name": "rotation"
    },
    {
        "snippets": {
            "python": {
                "tab": "shape",
                "code": "self.shape"
            },
            "javascript": {
                "tab": "shape",
                "code": "this.shape"
            }
        },
        "description": "The shape of the #{spriteName}; one of `[\"box\", \"sheet\", \"ellipsoid\", \"disc\"]`.",
        "type": "string",
        "name": "shape"
    },
    {
        "snippets": {
            "python": {
                "tab": "width",
                "code": "self.width"
            },
            "javascript": {
                "tab": "width",
                "code": "this.width"
            }
        },
        "description": "The width (x) of the #{spriteName}, in meters.",
        "type": "number",
        "name": "width"
    },
    {
        "snippets": {
            "python": {
                "tab": "height",
                "code": "self.height"
            },
            "javascript": {
                "tab": "height",
                "code": "this.height"
            }
        },
        "description": "The height (y) of the #{spriteName}, in meters.",
        "type": "number",
        "name": "height"
    },
    {
        "snippets": {
            "python": {
                "tab": "depth",
                "code": "self.depth"
            },
            "javascript": {
                "tab": "depth",
                "code": "this.depth"
            }
        },
        "description": "The depth (z) of the #{spriteName}, in meters.",
        "type": "number",
        "name": "depth"
    },
    {
        "userShouldCaptureReturn": {
            "variableName": "distance"
        },
        "context": {
            "check_exists": "Use if to make sure enemy exists before checking its distance."
        },
        "example": {
            "io": "enemy := findNearestEnemy\nif(enemy) then(\n    // <%= check_exists %>\n    distance := distanceTo(enemy)\n    if(distance < 10) then(\n        attack(enemy)\n    ) else(\n        say(\"Come closer!\")\n    )\n)",
            "lua": "local enemy = self:findNearestEnemy()\nif enemy then\n    # <%= check_exists %>\n    local distance = self:distanceTo(enemy)\n    if distance < 10 then\n        self:attack(enemy)\n    else\n        self:say(\"Come closer!\")\n    end\nend",
            "clojure": "(def enemy (.findNearestEnemy this))\n(when enemy\n    # <%= check_exists %>\n    (def distance (.distanceTo this enemy))\n    (if (< distance 10)\n        (.attack this enemy)\n        (.say this \"Come closer!\")\n    )\n)",
            "coffeescript": "enemy = @findNearestEnemy()\nif enemy\n    # <%= check_exists %>\n    distance = @distanceTo enemy\n    if distance < 10\n        @attack enemy\n    else\n        @say \"Come closer!\"",
            "javascript": "var enemy = this.findNearestEnemy();\nif (enemy) {\n    // <%= check_exists %>\n    var distance = this.distanceTo(enemy);\n    if (distance < 10) {\n        this.attack(enemy);\n    } else {\n        this.say(\"Come closer!\");\n    }\n}",
            "python": "enemy = self.findNearestEnemy()\nif enemy:\n    # <%= check_exists %>\n    distance = self.distanceTo(enemy)\n    if distance < 10:\n        self.attack(enemy)\n    else:\n        self.say(\"Come closer!\")"
        },
        "i18n": {
            "da": {
                "context": {
                    "check_exists": "Kan bruges til at sikre at en fjende findes før dens afstand checkes."
                },
                "description": "Returnérer afstand i meter til `target`-enheden fra centrum af #{spriteName}."
            },
            "el": {
                "context": {
                    "check_exists": "Χρησιμοποιήστε `if ` για να βεβαιωθείτε ότι υπάρχει εχθρός πριν από τον έλεγχο της απόστασης."
                },
                "description": "Επιστρέφει την απόσταση σε μέτρα για τον  στόχο από το κέντρο του #{spriteName}."
            },
            "nl-NL": {
                "context": {
                    "check_exists": "Gebruik een \"if-statement\" om te controleren of er een vijand is, voordat je de afstand naar de vijand checkt."
                },
                "description": "Geeft de afstand in meters tot het 'doelwit' vanaf het middelpunt van de #{spriteName}."
            },
            "zh-HANT": {
                "context": {
                    "check_exists": "在檢查距離之前，使用 if 來確定敵人存在。"
                },
                "description": "回傳 `target` 單位和 #{spriteName} 的距離，以公尺表示。"
            },
            "lt": {
                "context": {
                    "check_exists": "Naudokite if tam kad įsitikintumėte, kad priešas egzistuoja prieš tikrindami atstumą iki jo."
                },
                "description": "Grąžina atstumą (metrais) nuo #{spriteName} centro iki `target`objekto."
            },
            "hu": {
                "context": {
                    "check_exists": "Ellenőrizd if-fel, hogy létezik-e ellenség, mielőtt megnézed a távolságát."
                }
            },
            "pl": {
                "context": {
                    "check_exists": "Sprawdź za pomocą `if` czy obiekt istnieje, zanim będziesz sprawdzać odległość do niego."
                },
                "description": "Zwraca odległość w metrach do obiektu `target` od środka obiektu #{spriteName}."
            },
            "sv": {
                "context": {
                    "check_exists": "Använd 'if' för att vara säker på att fienden finns innan du kollar avståndet."
                },
                "description": "Returnerar avståndet i meter till målenheten från centrum av #{spriteName}."
            },
            "uk": {
                "description": "Повертає відстань у метрах до об'єкту `target` від центру #{spriteName}.",
                "context": {
                    "check_exists": "Використовуйте if, щоб пересвідчитися, що ворог існує, перш ніж визначати відстань до нього."
                }
            },
            "it": {
                "context": {
                    "check_exists": "Usa 'if' per assicurarti che il nemico esista, prima di calcolarne la distanza."
                },
                "description": "Restituisce la distanza in metri dall'unità `target` a partire dal centro di #{spriteName}."
            },
            "es-419": {
                "description": "Devuelve la distancia en metros de `target` desde el centro de la # {spriteName}."
            },
            "sk": {
                "description": "Vráti vzdialenosť v metroch k cieľu od centra hrdinu."
            },
            "zh-HANS": {
                "context": {
                    "check_exists": "在检查与敌人的距离前要用`if`确认敌人是否存在."
                },
                "description": "返回`target`单元 与#{spriteName}中心的距离，以米为单位。"
            },
            "pt-BR": {
                "context": {
                    "check_exists": "Use if  para ter certeza que o inimigo existe antes de checar a distância."
                },
                "description": "Retorna a distância em metros da unidade 'alvo' até o centro de #{spriteName}."
            },
            "es-ES": {
                "context": {
                    "check_exists": "Use if para asegurarse de que existe un enemigo antes de comprobar su distancia."
                },
                "description": "Devuelve la distancia en metros hacia el 'target' desde el centro del #{spriteName}."
            },
            "de-DE": {
                "description": "Gibt die Distanz in Metern zwischen `target` Einheit und #{spriteName} an."
            },
            "nb": {
                "description": "Returnerer avstanden i meter til `target` enheten fra senterpunktet til #{spriteName}."
            },
            "fr": {
                "context": {
                    "check_exists": "Utuliser \"si\" pour vérifier si un énemi existe avant de trouver sa distance"
                },
                "description": "Affiche la distance en mètres jusqu'à l'unité `target` depuis le centre du #{spriteName}."
            },
            "gl": {
                "description": "Devolve a distancia en metros á unidade `target`dende o centro de #{spriteName}."
            },
            "ru": {
                "description": "Возвращает дистанцию в метрах до `target` от центра #{spriteName}."
            },
            "tr": {
                "context": {
                    "check_exists": "Mesafesini ölçmeden önce düşman olduğuna emin olmak için if kullan."
                },
                "description": "#{spriteName} merkezinin `hedef` birimine metre cinsinden uzaklığını getirir."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "distanceTo",
                "code": "distanceTo(${1:target})"
            },
            "lua": {
                "tab": "distanceTo",
                "code": "self:distanceTo(${1:target})"
            },
            "clojure": {
                "tab": "distanceTo",
                "code": "(.distanceTo this ${1:target})"
            },
            "coffeescript": {
                "tab": "distanceTo",
                "code": "@distanceTo(${1:target})"
            },
            "python": {
                "tab": "distanceTo",
                "code": "self.distanceTo(${1:target})"
            },
            "javascript": {
                "tab": "distanceTo",
                "code": "this.distanceTo(${1:target})"
            }
        },
        "args": [
            {
                "default": "",
                "description": "The target unit whose distance you want to measure.",
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
        "description": "Returns the distance in meters to the `target` unit from the center of the #{spriteName}.",
        "type": "function",
        "name": "distanceTo"
    },
    {
        "snippets": {
            "python": {
                "tab": "distance",
                "code": "self.distance(${1:target})"
            },
            "javascript": {
                "tab": "distance",
                "code": "this.distance(${1:target})"
            }
        },
        "returns": {
            "description": "The distance.",
            "example": "7.25",
            "type": "number"
        },
        "args": [
            {
                "description": "The target unit or position to which you want to measure distance.",
                "example": "this.getNearestEnemy()",
                "type": "object",
                "name": "target"
            }
        ],
        "description": "Return the distance in meters to the `target` unit or position.",
        "type": "function",
        "name": "distance"
    }
]