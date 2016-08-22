[
    {
        "example": {
            "java": "game.spawnXY(\"fence\", 18, 15);\ngame.spawnXY(\"munchkin\", 20, 25);\ngame.spawnXY(\"munchkin\", 22, 25);\ngame.spawnXY(\"gem\", 30, 30);",
            "lua": "game:spawnXY(\"fence\", 18, 15)\ngame:spawnXY(\"munchkin\", 20, 25)\ngame:spawnXY(\"munchkin\", 22, 25)\ngame:spawnXY(\"gem\", 30, 30)",
            "python": "game.spawnXY(\"fence\", 18, 15)\ngame.spawnXY(\"munchkin\", 20, 25)\ngame.spawnXY(\"munchkin\", 22, 25)\ngame.spawnXY(\"gem\", 30, 30)",
            "coffeescript": "game.spawnXY \"fence\", 18, 15\ngame.spawnXY \"munchkin\", 20, 25\ngame.spawnXY \"munchkin\", 22, 25\ngame.spawnXY \"gem\", 30, 30",
            "javascript": "game.spawnXY(\"fence\", 18, 15);\ngame.spawnXY(\"munchkin\", 20, 25);\ngame.spawnXY(\"munchkin\", 22, 25);\ngame.spawnXY(\"gem\", 30, 30);"
        },
        "i18n": {
            "sr": {
                "description": "Izgradi jedinicu na datim x i y kordinatama."
            },
            "es-419": {
                "description": "Construye una unidad en las coordenadas `x` e `y` dadas."
            },
            "ca": {
                "description": "Construeix una unitat a les coordenades x i y."
            },
            "bg": {
                "description": "Строи единица на посочените координати x и y."
            },
            "el": {
                "description": "Δημιουργεί μια στρατιωτική μονάδα στις δοσμένες x- και y συντενταγμένες."
            },
            "id": {
                "description": "Membangun sebuah unit pada koordinat x- dan y- yang diberikan."
            },
            "ro": {
                "description": "Contruieste o unitate la coordonatele x- si y- mentionate."
            },
            "lt": {
                "description": "Pastato objektą nurodytose kordinatese (x,y)."
            },
            "he": {
                "description": "בונה יחידה בנקודות ציון X ו-Y נתונות."
            },
            "da": {
                "description": "Byg en enhed på de givne x- og y-koordinater."
            },
            "uk": {
                "description": "Будує споруду у точці із заданими x- та y-координатами."
            },
            "ja": {
                "description": "所定のx-とy-座標で、ユニットを構築します。"
            },
            "cs": {
                "description": "Staví jednotku na daných souřadnicích x a y ."
            },
            "pl": {
                "description": "Buduje jednostki na danych współrzędnych x - y. Jeśli nie masz wystarczająco dużo złota, nie zbuduje."
            },
            "fi": {
                "description": "Rakentaa rakennelman tai yksikön annettuihin x- ja y-koordinaatteihin. Jos sinulla ei ole tarpeeksi kultaa, yksikköä ei voi rakentaa."
            },
            "nl-NL": {
                "description": "Bouwt een eenheid op gegeven x- en y-coördinaten. Als je onvoldoende goud hebt wordt de eenheid niet gebouwd."
            },
            "sk": {
                "description": "Postaví vybraný typ na určených súradniciach x a y. Ak nemáš dostatok peňazí, nebude sa stavať."
            },
            "pt-BR": {
                "description": "Constrói uma unidade nas coordenadas x e y dadas. Se você não tem ouro suficiente, ela não será construída."
            },
            "zh-HANT": {
                "description": "在指定的x, y座標建物品。不過如果你沒有足夠的金錢的話，物品就沒辦法開始建造。"
            },
            "hu": {
                "description": "Épít egy egységet az adott x- és y- koordinátára. Ha nincs elegendő aranyad nem épül meg."
            },
            "it": {
                "description": "Crea un'unità alle coordinate x e y."
            },
            "nb": {
                "description": "Bygger en enhet på de angitte x- og y- koordinatene. Hvis du ikke har nok gull vil den ikke bli bygget."
            },
            "de-DE": {
                "description": "Erschafft eine Einheit an den gegebenen X- und Y-Koordinaten. Wenn du nicht genug Gold hast, wird diese Einheit nicht gebaut."
            },
            "sv": {
                "description": "Bygger en enhet vid de givna x- och y-koordinaterna."
            },
            "zh-HANS": {
                "description": "在给定的坐标 x,y 上建造一个单位的建筑。如果你没有足够的金币，将无法建造该建筑。"
            },
            "gl": {
                "description": "Constrúe unha unidade nunhas coordinadas x e y determinadas. Si non tes ouro suficiente, non se construirá."
            },
            "ru": {
                "description": "Возводит постройку на заданных (x,y) координатах."
            },
            "fr": {
                "description": "Construit une unité aux coordonnées x et y indiquées. Vous ne pouvez pas construire une unité si vous n'avez pas assez d'or."
            },
            "es-ES": {
                "description": "Contruye una unidad en las coordenadras x- e y- dadas. Si no tienes suficiente oro, no se contruirá"
            },
            "tr": {
                "description": "Belirtilen x- ve y- koordinatlarında bir birim inşa eder. Yeterince altının yoksa, inşa etmeyecektir."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "python": {
                "tab": "spawnXY",
                "code": "game.spawnXY(${1:\"fence\"}, ${2:36}, ${3:30})"
            },
            "javascript": {
                "tab": "spawnXY",
                "code": "game.spawnXY(${1:\"fence\"}, ${2:36}, ${3:30})"
            }
        },
        "owner": "this",
        "args": [
            {
                "default": "",
                "description": "The type of object to build.",
                "example": "\"munchkin\"",
                "type": "string",
                "name": "buildType"
            },
            {
                "description": "The x-coordinate to build at.",
                "example": "36",
                "type": "number",
                "name": "x"
            },
            {
                "description": "The y-coordinate to build at.",
                "example": "30",
                "type": "number",
                "name": "y"
            }
        ],
        "description": "Spawn something at the given x, y coordinates.\n\nSpawn types can be:\n\nObjects: \n`\"fence\"`\n`\"forest\"`\n`\"gem\"`\n`\"chest\"`\n`\"fire-trap\"`\n`\"potion-small\"`\n`\"potion-medium\"`\n`\"potion-large\"`\n\nUnits:\n`\"munchkin\"`\n`\"thrower\"`\n`\"soldier\"`\n`\"archer\"`\n",
        "type": "function",
        "name": "spawnXY"
    },
    {
        "snippets": {
            "python": {
                "tab": "spawnHeroXY",
                "code": "game.spawnHeroXY(${1:36}, ${2:30})"
            },
            "javascript": {
                "tab": "spawnHeroXY",
                "code": "game.spawnHeroXY(${1:36}, ${2:30})"
            }
        },
        "example": {
            "python": "game.spawnHeroXY(24, 37)",
            "javascript": "game.spawnHeroXY(24, 37);"
        },
        "args": [
            {
                "description": "The x coordinate to spawn a hero.",
                "example": "24",
                "type": "number",
                "name": "x"
            },
            {
                "description": "The y coordinate to spawn a hero.",
                "example": "37",
                "type": "number",
                "name": "y"
            }
        ],
        "description": "Spawn a hero for the player to control at the given x,y coordinates.",
        "type": "function",
        "name": "spawnHeroXY"
    },
    {
        "description": "Add a goal of a certain type.\n\nThe type can be: \"defeat\", \"collect\", or \"survive\"",
        "type": "function",
        "name": "addGoal"
    },
    {
        "example": {
            "python": "game.setActionFor(\"munchkin\", \"spawn\", runAway)\ngame.setActionFor(\"soldier\", \"spawn\", fightEnemies)\ngame.setActionFor(\"archer\", \"spawn\", fightEnemies)",
            "javascript": "game.setActionFor(\"munchkin\", \"spawn\", runAway);\ngame.setActionFor(\"soldier\", \"spawn\", fightEnemies);\ngame.setActionFor(\"archer\", \"spawn\", fightEnemies);"
        },
        "args": [
            {
                "description": "The type of unit to setActionFor",
                "example": "\"soldier\"",
                "type": "string",
                "name": "unitType"
            },
            {
                "description": "The type of event.",
                "example": "\"spawn\"",
                "type": "string",
                "name": "eventType"
            },
            {
                "description": "The function that is called when the event is triggered.",
                "example": "fightEnemies",
                "type": "function",
                "name": "handler"
            }
        ],
        "snippets": {
            "python": {
                "tab": "setActionFor",
                "code": "game.setActionFor(${1:\"soldier\"}, ${2:\"spawn\"}, ${3:fightEnemies})"
            },
            "javascript": {
                "tab": "setActionFor",
                "code": "game.setActionFor(${1:\"soldier\"}, ${2:\"spawn\"}, ${3:fightEnemies})"
            }
        },
        "description": "Sets an event handler to all units of a particular type.\n\nEvent Types:\n`\"spawn\"`\n`\"hear\"`\n\n",
        "type": "function",
        "name": "setActionFor"
    },
    {
        "example": {
            "python": "game.addMoveGoalXY(23, 47)",
            "javascript": "game.addMoveGoalXY(23, 47);"
        },
        "snippets": {
            "python": {
                "tab": "addMoveGoalXY",
                "code": "game.addMoveGoalXY(${1:36}, ${2:30})"
            },
            "javascript": {
                "tab": "addMoveGoalXY",
                "code": "game.addMoveGoalXY(${1:36}, ${2:30})"
            }
        },
        "args": [
            {
                "description": "The x coordinate to add a goal.",
                "example": "24",
                "type": "number",
                "name": "x"
            },
            {
                "description": "The y coordinate to add a goal..",
                "example": "37",
                "type": "number",
                "name": "y"
            }
        ],
        "description": "Add a movement goal at x,y coordinates.\n\nA movement goal is represented in the game by a red X mark. \n\nThe player will have to move to all the movement goals in order to win.",
        "type": "function",
        "name": "addMoveGoalXY"
    },
    {
        "snippets": {
            "python": {
                "tab": "addSurviveGoal",
                "code": "game.addSurviveGoal()"
            },
            "javascript": {
                "tab": "addSurviveGoal",
                "code": "game.addSurviveGoal()"
            }
        },
        "description": "Adds a goal to the game: \n\nThe player must survive until all other goals are completed!\n",
        "type": "function",
        "name": "addSurviveGoal"
    },
    {
        "snippets": {
            "python": {
                "tab": "addCollectGoal",
                "code": "game.addCollectGoal()"
            },
            "javascript": {
                "tab": "addCollectGoal",
                "code": "game.addCollectGoal()"
            }
        },
        "description": "Adds a goal to the game:\n\nThe player must collect all the gems!",
        "type": "function",
        "name": "addCollectGoal"
    },
    {
        "snippets": {
            "python": {
                "tab": "addDefeatGoal",
                "code": "game.addDefeatGoal()"
            },
            "javascript": {
                "tab": "addDefeatGoal",
                "code": "game.addDefeatGoal()"
            }
        },
        "description": "Adds a goal to the game:\n\nThe player must defeat all the ogres!",
        "type": "function",
        "name": "addDefeatGoal"
    }
]