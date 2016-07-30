[
    {
        "snippets": {
            "io": {
                "tab": "build",
                "code": "build(${1:\"door\"})"
            },
            "lua": {
                "tab": "build",
                "code": "self:build(${1:\"door\"})"
            },
            "clojure": {
                "tab": "build",
                "code": "(.build this ${1:\"door\"})"
            },
            "python": {
                "tab": "build",
                "code": "self.build(${1:\"door\"})"
            },
            "coffeescript": {
                "tab": "build",
                "code": "@build ${1:\"door\"}"
            },
            "javascript": {
                "tab": "build",
                "code": "this.build(${1:\"door\"})"
            }
        },
        "owner": "this",
        "args": [
            {
                "default": "",
                "description": "The type of unit to build.",
                "example": "\"door\"",
                "type": "string",
                "name": "unitName"
            }
        ],
        "description": "Builds a unit of the type given. If you don't have enough gold, it will not build.",
        "type": "function",
        "name": "build"
    },
    {
        "snippets": {
            "clojure": {
                "tab": "unitNames",
                "code": "(.unitNames this)"
            },
            "python": {
                "tab": "unitNames",
                "code": "self.unitNames"
            },
            "javascript": {
                "tab": "unitNames",
                "code": "this.unitNames"
            }
        },
        "owner": "this",
        "description": "List of unit types this building may build.",
        "type": "array",
        "name": "unitNames"
    },
    {
        "autoCompletePriority": 0.5,
        "i18n": {
            "sr": {
                "description": "Lista jedinica koju je #{spriteName} izgradio ili prizvao. Mozes koristiti informacije o ovim jedinicama kao pomoc pri kreiranju strategije."
            },
            "es-419": {
                "description": "Una lista de unidades que #{spriteName} puede construir o invocar. Podes utilizar información de estas unidades para ayudar a decirte en una estrategia de contrucción."
            },
            "ca": {
                "description": "Llistat d'unitats que #{spritName} ha construït o invocat. Pots utilitzar la informació d'aquestes unitats per ajudar a decidir l'estratègia a utilitzar."
            },
            "bg": {
                "description": "Лист от единици, които #{spriteName} е построил или призовал. Може да използвате информация от тези единици, която да ви помогне да изберете правилна стратегия."
            },
            "el": {
                "description": "Λίστα με τις μονάδες τις οποίες ο ήρωας έχει χτίσει ή επιστρατεύσει στις διαταγές του. Μπορείς να χρησιμοποιήσεις πληροφορίες από τις μονάδες της λίστας για σχεδιάσεις την στρατηγική σου. "
            },
            "lt": {
                "description": "Sąrašas objektų, kuriuos #{spriteName} pastatė arba iškvietė. Gali naudoti šių objektų informaciją kad planuotum statymo stratėgiją."
            },
            "id": {
                "description": "sebuah daftar yang berisi jumlah unit #{spritename} yang telah di bangun atau di panggil. Anda dapat menggunakan informasi dari setiap unit untuk membantu dalam memilih strategi bangunan."
            },
            "ro": {
                "description": "O listă de inități pe care #{spriteName} le-a construit sau invocat. Poți folosi informații de aici să te decizi ce strategie de construcție să folosești."
            },
            "he": {
                "description": "רשימת היחידות שה-#{spriteName} בנה או זימן. אתה יכול להיעזר במידע מהיחידות הללו בכדי להחליט על אסטרטגיית הבניה שלך."
            },
            "da": {
                "description": "En liste over enheder #{spriteName} har bygget eller tilkaldt Du kan bruge information fra disse enheder til at hjælpe dig med at beslutte din egen bygningsstrategi."
            },
            "uk": {
                "description": "Список одиниць, які #{spriteName} збудував або викликав. Ви можете використовувати інформацію щодо цих одиниць для допомоги при обранні стратегії будування."
            },
            "ja": {
                "description": "#{spriteName}が造ったか、呼び出したユニットのリスト。 あなたは、建築戦略に決めるのを助けるために、これらのユニットの情報を使うことができます。"
            },
            "it": {
                "description": "Una lista delle unità costruite o evocate da #{spriteName}. Puoi usare informazioni ottenute da queste unità per aiutarti ad elaborare una strategia."
            },
            "cs": {
                "description": "Seznam jednotek, které #{spriteName} postavil. Mužeš použít informace od těchto jednotek jako pomoc při rozhodování o strategii budování."
            },
            "pl": {
                "description": "Wykaz jednostek które #{spriteName}m zbudował. Możesz używać informacji z tych jednostek, które pomogą podjąć decyzję w sprawie strategii budynku."
            },
            "fi": {
                "description": "Lista kutsutuista tai rakennetuista yksiköistä, jotka hahmo on jo rakentanut/kutsunut. Käytä tätä listaa apuna kun suunnittelete rakennelmiasi ja kutsuttavia yksiköitä."
            },
            "nl-NL": {
                "description": "Een lijst met eenheden die de #{spriteName} heeft gebouwd. Je kan informatie van deze eenheden gebruiken om een bouwstrategie te bepalen."
            },
            "sk": {
                "description": "Zoznam toho, čo tvoj hrdina postavil."
            },
            "pt-BR": {
                "description": "Uma lista de unidades que #{spriteName} já construiu ou sumonou. Você pode usar informações dessas unidades para ajudar a decidir uma estratégia de construção."
            },
            "zh-HANT": {
                "description": " #{spriteName}建過的物品的明細表。明細可以協助你造建築戰略。"
            },
            "hu": {
                "description": "Azon egységek listája amit  #{spriteName} épített vagy idézett. Az ebből nyert információ segíthet egy építési stratégia kialakításában."
            },
            "nb": {
                "description": "En liste av enheter denne enheten (#{spriteName}) har bygget. Du kan bruke informasjon fra disse enhetene til å velge en byggestrategi."
            },
            "de-DE": {
                "description": "Eine Liste von Einheiten, die #{spriteName} bereits gebaut hat. Du kannst die Informationen zu diesen Einheiten nutzen um deine Bau-Strategie verbessern."
            },
            "sv": {
                "description": "En lista av enheter som #{spriteName} har byggt. Du kan använda dig av den här informationen för att få hjälp att bestämma en byggnadsstrategi."
            },
            "zh-HANS": {
                "description": "#{spriteName}已经建造的建筑名称列表。你可以通过这些建筑的所提供的特点信息，来帮助你决定建造策略。"
            },
            "gl": {
                "description": "Unha relación das unidades construidas por #{spriteName}. Podes utilizar información destas unidades para decidir unha estratexia de construcción. "
            },
            "ru": {
                "description": "Список единиц, построенных #{spriteName}. Вы можете использовать эту информацию для дальнейшего планирования строительства."
            },
            "fr": {
                "description": "Une Liste des unités que #{spriteName} a construites. Les informations sur ces unités peuvent vous servir à établir une stratégie de construction."
            },
            "es-ES": {
                "description": "Una lista de unidades que el #{spriteName} ha contruido. Puedes utilizar informacion de estas unidades para ayudarte a decidir sobre una estrategia de construcción. "
            },
            "tr": {
                "name": "yapı",
                "description": "Karakterin (#{spriteName}), yaptığı birimlerin listesi. Bu bilgiyi inşa etme stratejisin kararında yardım almak üzere kullanabilirsin"
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "built",
                "code": "built"
            },
            "lua": {
                "tab": "built",
                "code": "self.built"
            },
            "coffeescript": {
                "tab": "built",
                "code": "@built"
            },
            "clojure": {
                "tab": "built",
                "code": "(.built this)"
            },
            "python": {
                "tab": "built",
                "code": "self.built"
            },
            "javascript": {
                "tab": "built",
                "code": "this.built"
            }
        },
        "owner": "this",
        "example": {
            "lua": "local summonTypes = {\"archer\", \"soldier\", \"griffin-rider\", \"archer\"}\nlocal summonType = summonTypes[(#self.built % #summonTypes) + 1]\nif self.gold >= self:costOf(summonType) then\n    self:summon(summonType)\nend",
            "clojure": "(def summonTypes [\"archer\" \"soldier\" \"griffin-rider\" \"archer\"])\n(def summonType (nth summonTypes (mod (count (.built this)) (count summonTypes))))\n(if (> (.gold this) (.costOf this summonType))\n    (.summon this summonType))",
            "coffeescript": "summonTypes = [\"archer\", \"soldier\", \"griffin-rider\", \"archer\"]\nsummonType = summonTypes[@built.length % summonTypes.length]\nif @gold >= @costOf summonType\n    @summon summonType",
            "python": "summonTypes = [\"archer\", \"soldier\", \"griffin-rider\", \"archer\"]\nsummonType = summonTypes[len(self.built) % len(summonTypes)]\nif self.gold >= self.costOf(summonType):\n    self.summon(summonType)",
            "javascript": "var summonTypes = [\"archer\", \"soldier\", \"griffin-rider\", \"archer\"];\nvar summonType = summonTypes[this.built.length % summonTypes.length];\nif this.gold >= this.costOf(summonType) {\n    this.summon(summonType);\n}"
        },
        "description": "A list of units the #{spriteName} has built or summoned. You can use information from these units to help decide on a building strategy.",
        "type": "array",
        "name": "built"
    },
    {
        "snippets": {
            "clojure": {
                "tab": "buildables",
                "code": "(.buildables this)"
            },
            "python": {
                "tab": "buildables",
                "code": "self.buildables"
            },
            "javascript": {
                "tab": "buildables",
                "code": "this.buildables"
            }
        },
        "example": {
            "python": "archerCost = self.buildables.archer.goldCost\nshamanTime = self.buildables.shaman.buildTime",
            "javascript": "var archerCost = this.buildables.archer.goldCost;\nvar shamanTime = this.buildables.shaman.buildTime;\n"
        },
        "description": "An object mapping the buildable `buildTypes` to their build times and costs.",
        "type": "object",
        "name": "buildables"
    },
    {
        "snippets": {
            "clojure": {
                "tab": "buildIndex",
                "code": "(.buildIndex this)"
            },
            "python": {
                "tab": "buildIndex",
                "code": "self.buildIndex"
            },
            "javascript": {
                "tab": "buildIndex",
                "code": "this.buildIndex"
            }
        },
        "description": "A 0-based integer index representing the order that this #{spriteName} was built by its builder. It matches this #{spriteName}'s position in the builder's `built` array.\n\nThe first unit the builder builds will have `buildIndex = 0`, the second `buildIndex = 1`, etc.",
        "type": "number",
        "name": "buildIndex"
    },
    {
        "autoCompletePriority": 0.1,
        "i18n": {
            "sr": {
                "description": "Lista tipova jedinica koju #{spriteName} moze da izgradi ili prizove: '#{buildType}'"
            },
            "es-419": {
                "description": "Lista de los tipos de unidad que #{spriteName} puede construir o invocar: {#buildTypes}"
            },
            "ca": {
                "description": "Llistat de tipus d'unitats que #{spriteName} pot construïr o invocar: `#{buildTypes}`."
            },
            "bg": {
                "description": "Лист от видовете единици, които #{spriteName} може да построи или призове: `#{buildTypes}`"
            },
            "el": {
                "description": "Λίστα με τις μονάδες που μπορείς να χτίσεις ή επιστρατεύψεις στις διαταγές σου:`#{buildTypes}`"
            },
            "lt": {
                "description": "Sąrašas objektų tipų, kuriuos #{spriteName} gali statyti arba iškviesti:`#{buildTypes}`"
            },
            "id": {
                "description": "Daftar tipe-tipe unit dari #{spritename} untuk membangun atau memanggil : '#{buildTypes}'"
            },
            "ro": {
                "description": "Lista tipurilor de unități pe care #{spriteName} le poate construi sau invoca: `#{buildTypes}`"
            },
            "he": {
                "description": "רשימת היחידות שה-#{spriteName} יכול לבנות או לזמן: `#{buildTypes}`"
            },
            "da": {
                "description": "Liste over enhedstyper #{spriteName} kan bygge eller tilkalde: `#{buildTypes}`"
            },
            "uk": {
                "description": "Список типів одиниць, які #{spriteName} може збудувати або викликати: `#{buildTypes}`"
            },
            "ja": {
                "description": "#{spriteName}が構築することができるか、召喚することができるユニットのリスト： 『#{buildTypes}』"
            },
            "cs": {
                "description": "Seznam typů jednotek, které #{spriteName} může stavět nebo přivolat: `#{buildTypes}`"
            },
            "pl": {
                "description": "Lista typów jednostek #{spriteName}m które można budować: `#{buildTypes}m`."
            },
            "fi": {
                "description": "Lista rakennelmista tai yksiköistä joita hahmo voi rakentaa/kutsua: #{buildTypes}."
            },
            "nl-NL": {
                "description": "Een lijst met eenheden die de #{spriteName} kan bouwen: #{buildTypes}."
            },
            "sk": {
                "description": "Zoznam možných typov, ktoré hrdina môže postaviť:  #{buildTypes}."
            },
            "pt-BR": {
                "description": "Lista de tipos de unidades que #{spriteName} pode construir: `#{buildTypes}`."
            },
            "zh-HANT": {
                "description": " #{spriteName}可以建的物品的明細表：#{buildTypes}。"
            },
            "hu": {
                "description": " #{spriteName} által építhető egységek listája: #{buildTypes}."
            },
            "it": {
                "description": "#{spriteName} può creare o evocare queste unità: `#{buildTypes}`"
            },
            "nb": {
                "description": "Liste av enhetstyper denne enheten (#{spriteName}) kan bygge: #{buildTypes}."
            },
            "de-DE": {
                "description": "Liste der Einheiten-Typen die #{spriteName} bauen kann: #{buildTypes}."
            },
            "sv": {
                "description": "En lista med enheter som #{spriteName} kan bygga eller tillkalla: `#{buildTypes}`."
            },
            "zh-HANS": {
                "description": "#{spriteName}可以建立的建筑名称列表: #{buildTypes}。"
            },
            "gl": {
                "description": "Relación de tipos de unidades que #{spriteName} pode construir: #{buildTypes}."
            },
            "ru": {
                "description": "Список типов единиц, которые может строить #{spriteName}: #{buildTypes}."
            },
            "fr": {
                "description": "Une liste des types d'unité que #{spriteName} peut construire: #{buildTypes}."
            },
            "es-ES": {
                "description": "Lista del tipo de unidades que el #{spriteName} puede construir: #{buildTypes}."
            },
            "tr": {
                "name": "yapıTipleri",
                "description": "Karakterin (#{spriteName}), inşa edebileceği birim türleri listesi: #{buildTypes}."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "buildTypes",
                "code": "buildTypes"
            },
            "lua": {
                "tab": "buildTypes",
                "code": "self.buildTypes"
            },
            "coffeescript": {
                "tab": "buildTypes",
                "code": "@buildTypes"
            },
            "clojure": {
                "tab": "buildTypes",
                "code": "(.buildTypes this)"
            },
            "python": {
                "tab": "buildTypes",
                "code": "self.buildTypes"
            },
            "javascript": {
                "tab": "buildTypes",
                "code": "this.buildTypes"
            }
        },
        "owner": "this",
        "description": "List of unit types the #{spriteName} can build or summon: `#{buildTypes}`",
        "type": "array",
        "name": "buildTypes"
    },
    {
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
                "name": "kurXY",
                "description": "Belirtilen x- ve y- koordinatlarında bir birim inşa eder. Yeterince altının yoksa, inşa etmeyecektir."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "buildXY",
                "code": "buildXY(${1:\"fence\"}, ${2:36}, ${3:30})"
            },
            "lua": {
                "tab": "buildXY",
                "code": "self:buildXY(${1:\"fence\"}, ${2:36}, ${3:30})"
            },
            "clojure": {
                "tab": "buildXY",
                "code": "(.buildXY this ${1:\"fence\"} ${2:36} ${3:30})"
            },
            "python": {
                "tab": "buildXY",
                "code": "self.buildXY(${1:\"fence\"}, ${2:36}, ${3:30})"
            },
            "coffeescript": {
                "tab": "buildXY",
                "code": "@buildXY ${1:\"fence\"}, ${2:36}, ${3:30}"
            },
            "javascript": {
                "tab": "buildXY",
                "code": "this.buildXY(${1:\"fence\"}, ${2:36}, ${3:30})"
            }
        },
        "owner": "this",
        "args": [
            {
                "default": "",
                "description": "The type of unit to build.",
                "example": "\"fence\"",
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
        "description": "Builds a unit at the given x- and y-coordinates.",
        "type": "function",
        "name": "buildXY"
    },
    {
        "userShouldCaptureReturn": {
            "variableName": "cost"
        },
        "snippets": {
            "io": {
                "tab": "costOf",
                "code": "costOf(${1:\"soldier\"})"
            },
            "lua": {
                "tab": "costOf",
                "code": "self:costOf(${1:\"soldier\"})"
            },
            "coffeescript": {
                "tab": "costOf",
                "code": "@costOf ${1:\"soldier\"}"
            },
            "clojure": {
                "tab": "costOf",
                "code": "(.costOf this ${1:\"soldier\"})"
            },
            "python": {
                "tab": "costOf",
                "code": "self.costOf(${1:\"soldier\"})"
            },
            "javascript": {
                "tab": "costOf",
                "code": "this.costOf(${1:\"soldier\"})"
            }
        },
        "args": [
            {
                "default": "",
                "description": "The type of unit to build.",
                "example": "\"soldier\"",
                "type": "string",
                "name": "buildType"
            }
        ],
        "i18n": {
            "tr": {
                "name": "değer"
            },
            "sr": {
                "description": "Vraca cenu (kolicinu zlata) za zadatu izgradnju ili zadato prizivanje."
            },
            "es-419": {
                "description": "Devuelve el costo en oro para la contrucción dada o el tipo de invocación."
            },
            "ca": {
                "description": "Retorna el cost en monedes d'or donant el tipus de construcció o invocació."
            },
            "bg": {
                "description": "Връща стойността в злато за дадена постройка или тип призоваване."
            },
            "el": {
                "description": "Επιστέφει πόσο χρυσός απαιτείται για να δημιουργήσεις το συγκεκριμένο είδος."
            },
            "id": {
                "description": "Mengembalikan biaya berupa emas untuk tipe bangunan atau panggilan yang merupakan pemberian."
            },
            "hu": {
                "description": "Megadja, hogy mennyi arany szükséges a választott idézéshez vagy építkezéshez."
            },
            "ro": {
                "description": "Înapoiază prețul în aur pentru tipul construcșiei sau invocației."
            },
            "lt": {
                "description": "Praneša nurodytų statybų arba iškvietimo kainą."
            },
            "he": {
                "description": "בודק את העלות של בניה או זימון ספציפיים במטבעות זהב."
            },
            "da": {
                "description": "Returnerer guldprisen for den givne bygnings- eller tilkaldelsestype."
            },
            "uk": {
                "description": "Повертає кількість золота, необхідну для побудови або виклику зазначеного типу."
            },
            "ja": {
                "description": "構築・召喚によるお金のコストの値を返します。"
            },
            "sv": {
                "description": "Returnerar guldkostnaden för den givna byggnaden eller tillkallningstypen."
            },
            "it": {
                "description": "Restituisce il costo in oro per costruire o evocare un'unità di un certo tipo."
            },
            "cs": {
                "description": "Vrací cenu ve zlatě, které je potřeba pro postavení nebo přivolání daného typu."
            },
            "pl": {
                "description": "Zwraca koszt złota dla danej budowy lub przywoła typ."
            },
            "fr": {
                "description": "Fournit le prix du type de construction ou d'invocation indiqués."
            },
            "zh-HANS": {
                "description": "返回指定建筑或召唤物的所需的金币数量。"
            },
            "zh-HANT": {
                "description": "召喚或是建築所需要繳交的金錢"
            },
            "pt-BR": {
                "description": "Retorna o ouro gasto para dado o tipo de construção ou conjuração."
            },
            "fi": {
                "description": "Palauttaa kultamäärän, jonka haluttu rakennelma tai kutsuttava yksikkö maksaa."
            },
            "nl-NL": {
                "description": "Specificeert het benodigde goud voor een gespecificeerd bouw of oproep type."
            },
            "ru": {
                "description": "Возвращает стоимость заданного типа постройки или призыва."
            },
            "es-ES": {
                "description": "Devuelve el costo de oro para la construcción dada o de él tipo convocado."
            },
            "sk": {
                "description": "Vráti cenu stavby. "
            },
            "de-DE": {
                "description": "Gibt die Kosten an Gold zurück, welche für die gewünschte Einheit oder den Typ benötigt wird."
            },
            "-": {
                "-": "-"
            }
        },
        "returns": {
            "type": "number"
        },
        "description": "Returns the gold cost for the given build or summon type.",
        "type": "function",
        "name": "costOf"
    },
    {
        "i18n": {
            "sr": {
                "description": "Priziva prijateljsku jedinicu koja je tebi na raspolaganju, ako imas dovoljno zlata. Mozes prizvati `buildTypes`: `#{buildTypes}`."
            },
            "es-419": {
                "description": "Invoca una unidad amiga para que puedas dirigirla, si tenes el oro suficiente. Puede invocar buildTypes: #{buildTypes}."
            },
            "ca": {
                "description": "Invoca una unitat amiga sota el teu ordre, si tens suficients monedes d'or. Pots invocar `buildTypes`: `#{buildTypes}`."
            },
            "bg": {
                "description": "Призовава приятелска единица, която може да управляваш, ако имаш достатъчно злато. Може да призоваваш `buildTypes`: `#{buildTypes}`."
            },
            "el": {
                "description": "Επιστρατεύει στις διαταγές σου, μια φιλική στρατιωτική μονάδα. Εάν έχεις αρκετό χρυσό μπορείς να επιστρατεύεις `#{buildTypes}`.  "
            },
            "lt": {
                "description": "Iškviečia draugiškajį vienetą (objektą) į tavo būrį, jei turi pakankamai aukso. Galima iškviesti`buildTypes`: `#{buildTypes}`."
            },
            "tr": {
                "name": "çağır",
                "description": "Eğer yeterince altının varsa, yönetmen için sana dost birimler çağırır. `buildTypes`: `#{buildTypes}`ı çağırabilir."
            },
            "id": {
                "description": "Memanggil unit yang bersahabat untuk diberi perintah oleh anda, jika anda memiliki cukup emas. Dapat memanggil 'buildTypes': '#{buildTypes}'."
            },
            "hu": {
                "description": "Megidéz egy baráti egységet - ha van elég aranyad - akinek parancsokat adhatsz ki. Megidézhet `buildTypes`: `#{buildTypes}`"
            },
            "ro": {
                "description": "Invocă o unitate prietenoasă pentru tine, dacă ai destul aur. Poți invoca `buildTypes`: `#{buildTypes}`."
            },
            "he": {
                "description": "מזמן יחידה ידידותית לפקודתך, אם יש ברשותך מספיק זהב. יכול לזמן `buildTypes`: `#{buildTypes}`."
            },
            "da": {
                "description": "Tilkalder en venlig enhed du kan kommandere, hvis du har guld nok. Kan tilkalde `buildTypes`: `#{buildTypes}`."
            },
            "uk": {
                "description": "Викликає дружню одиницю під ваше командування, якщо у вас достатньо золота. Можливо викликати `buildTypes`: `#{buildTypes}`."
            },
            "ja": {
                "description": "あなたには十分な金があるならば、命令にあなたのために使いやすいユニットに出頭を命じてください。 『buildTypes』を呼び出すことができます： 『#{buildTypes}』。"
            },
            "sv": {
                "description": "Tillkallar en vänlig enhet för dig att styra, om du har tillräckligt med guld. Kan tillkalla `buildTypes`: `#{buildTypes}`."
            },
            "it": {
                "description": "Evoca un'unità amica al tuo comando, se hai abbastanza oro. Puoi evocare `buildTypes`: `#{buildTypes}`."
            },
            "cs": {
                "description": "Přivolá přátelskou jednotku, které můžeš rozkazovat. Jenom pokud máš dost peněz. Mužeš přivolat `buildTypes`: `#{buildTypes}`."
            },
            "pl": {
                "description": "Jeśli masz wystarczająco dużo złota, przywołuje przyjazną jednostkę pod Twoją komendę. Możesz przywołać `buildTypes`: `#{buildTypes}m`."
            },
            "fr": {
                "description": "Si vous avez assez d'or, invoque une unité alliée que vous pourrez commander."
            },
            "sk": {
                "description": "Povolá priateľa, ktorého môžeš riadiť, ak máš dostatok financií."
            },
            "zh-HANS": {
                "description": "如果你拥有足够的金币的话，可以召唤一个友方单位任你操作。"
            },
            "zh-HANT": {
                "description": "如果你擁有足夠的金錢，你可以召喚一個友善的朋友來幫忙"
            },
            "pt-BR": {
                "description": "Conjura uma unidade aliada para você comandar, se você tiver ouro suficiente. Pode sumonar `buildTypes`: `#{buildTypes}`."
            },
            "fi": {
                "description": "Kutsuu ystävällisen yksikön joukkoihisi jos omistat tarpeeksi kultaa. Voit kutsua `buildTypes`: `#{buildTypes}`."
            },
            "de-DE": {
                "description": "Beschwört eine freundliche Einheit, wenn du genug Gold hast"
            },
            "nl-NL": {
                "description": "Roept een bevriende eenheid op om aan te sturen, mits je genoeg goud bezit."
            },
            "es-ES": {
                "description": "Invoca una unidad amiga para que puedas comandar, si tienes el oro suficiente."
            },
            "ru": {
                "description": "Призывает дружественный юнит под твоё командование, если хватает золота. Можно призвать `buildTypes`: `#{buildTypes}`."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "summon",
                "code": "summon(${1:\"soldier\"})"
            },
            "lua": {
                "tab": "summon",
                "code": "self:summon(${1:\"soldier\"})"
            },
            "clojure": {
                "tab": "summon",
                "code": "(.summon this ${1:\"soldier\"})"
            },
            "python": {
                "tab": "summon",
                "code": "self.summon(${1:\"soldier\"})"
            },
            "coffeescript": {
                "tab": "summon",
                "code": "@summon ${1:\"soldier\"}"
            },
            "javascript": {
                "tab": "summon",
                "code": "this.summon(${1:\"soldier\"})"
            }
        },
        "owner": "this",
        "args": [
            {
                "default": "",
                "description": "The type of unit to summon.",
                "example": "\"soldier\"",
                "type": "string",
                "name": "summonType"
            }
        ],
        "description": "Summons a friendly unit for you to command, if you have enough gold. Can summon `buildTypes`: `#{buildTypes}`.",
        "type": "function",
        "name": "summon"
    }
]