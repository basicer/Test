[
    {
        "i18n": {
            "da": {
                "description": "Hvor langt #{spriteName} kan se i meter."
            },
            "vi": {
                "description": "Khoảng cách #{spriteName} có thể nhìn (tính bằng mét)"
            },
            "el": {
                "description": "Πόσο μακριά το #{spriteName} μπορεί να δεί, σε μέτρα."
            },
            "nl-NL": {
                "description": "Hoe ver de #{spriteName} kan zien, in meters."
            },
            "ro": {
                "description": "Cât de departe #{spriteName} poate vedea, în metri."
            },
            "sv": {
                "description": "Hur långt #{spriteName} kan se i meter."
            },
            "ja": {
                "description": "メートルでの#{spriteName}の視界の範囲"
            },
            "pt-BR": {
                "description": "O quão longe #{spriteName} pode ver, em metros."
            },
            "uk": {
                "description": "Як далеко #{spriteName} може бачити, у метрах."
            },
            "pl": {
                "description": "Jak daleko #{spriteName} widzi, w metrach."
            },
            "it": {
                "description": "Quanto lontano #{spriteName} può vedere, in metri."
            },
            "es-ES": {
                "description": "Cuán lejos puede el #{spriteName} ver, en metros."
            },
            "es-419": {
                "description": "¿Hasta qué punto el # {spriteName} puede verse en metros."
            },
            "sk": {
                "description": "Ako ďaleko v metroch vidí hrdina."
            },
            "zh-HANT": {
                "description": " #{spriteName} 可以看到的最遠距離，以公尺計算"
            },
            "lt": {
                "description": "Kaip toli #{spriteName} gali matyti metrais"
            },
            "de-DE": {
                "description": "Wie weit #{spriteName} sehen kann, in Metern."
            },
            "nb": {
                "description": "Hvor langt #{spriteName} kan se, i meter."
            },
            "fr": {
                "description": "Distance à laquelle #{spriteName} peut voir, en mètres."
            },
            "zh-HANS": {
                "description": "#{spriteName}能看多远，用米为单位。"
            },
            "ru": {
                "description": "Насколько далеко #{spriteName} может видеть, в метрах."
            },
            "cs": {
                "description": "Jak daleko #{spriteName} dohlédne, v metrech."
            },
            "en-GB": {
                "description": ""
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "visualRange",
                "code": "visualRange"
            },
            "lua": {
                "tab": "visualRange",
                "code": "self.visualRange"
            },
            "clojure": {
                "tab": "visualRange",
                "code": "(.visualRange this)"
            },
            "coffeescript": {
                "tab": "visualRange",
                "code": "@visualRange"
            },
            "python": {
                "tab": "visualRange",
                "code": "self.visualRange"
            },
            "javascript": {
                "tab": "visualRange",
                "code": "this.visualRange"
            }
        },
        "description": "How far the #{spriteName} can see, in meters.",
        "type": "number",
        "name": "visualRange"
    },
    {
        "snippets": {
            "python": {
                "tab": "canSee",
                "code": "self.canSee(${1:target},${2:False})"
            },
            "javascript": {
                "tab": "canSee",
                "code": "this.canSee(${1:target},${2:false})"
            }
        },
        "args": [
            {
                "default": "",
                "description": "",
                "example": "",
                "type": "object",
                "name": "thang"
            },
            {
                "default": false,
                "description": "Whether to take obstacles into account.",
                "example": "false",
                "type": "boolean",
                "name": "ignoreLineOfSight"
            }
        ],
        "description": "Whether the #{spriteName} can see the given Thang (limited by `visualRange #{visualRange}` meters). If the `ignoreLineOfSight` argument is `true`, then it will take obstacles into account.",
        "type": "function",
        "name": "canSee"
    },
    {
        "snippets": {
            "python": {
                "tab": "getByType",
                "code": "self.getByType(${1:type})"
            },
            "javascript": {
                "tab": "getByType",
                "code": "this.getByType(${1:type})"
            }
        },
        "returns": {
            "description": "An array of visible units.",
            "type": "array"
        },
        "args": [
            {
                "description": "The type of unit to filter for.",
                "example": "\"peasant\"",
                "type": "string",
                "name": "type"
            }
        ],
        "description": "Return an array of all the units with the given `type` that the #{spriteName} can see, even non-combatants.",
        "type": "function",
        "name": "getByType"
    },
    {
        "returns": {
            "description": "An array of visible flags.",
            "type": "array"
        },
        "description": "Returns all flags that have currently been placed during real-time playback.",
        "type": "function",
        "name": "getFlags"
    },
    {
        "userShouldCaptureReturn": {
            "variableName": "targets"
        },
        "i18n": {
            "da": {
                "description": "Returnérer et array alle enheder af den givne `type` som #{spriteName} kan se, selv hvis de ikke kæmper. Valgfrit: Medsend et array af enhedstyper, der skal filtreres væk, som andet argument."
            },
            "el": {
                "description": "Επιστροφή μια λίστα με όλες τις μονάδες του συγκεκριμένου τύπου που το #{spriteName} μπορεί να δεί, ακόμη και αμάχους. Προαιρετικά: περάστε ένα δεύτερο όρισμα ως μια λίστα από μονάδες για να φιλτράρει με βάση τον τύπο."
            },
            "nl-NL": {
                "description": "Geeft een array van alle eenheden van een bepaald 'type' dat de #{spriteName} kan zien, zelfs niet-strijders. Optioneel: lever een tweede argument als een array van eenheden om per type te filteren."
            },
            "sv": {
                "description": "Returnerar en lista med alla enheter av typen `type` som #{spriteName} kan se, även fredliga enheter. Valfritt: skicka med ett andra argument i form av en lista av enheter att filtera efter typ."
            },
            "pt-BR": {
                "description": "Retorna um vetor de todas as unidades com o dado `type` que o #{spriteName} pode ver, mesmo não-combatentes. Opcional: passe um segundo argumento como um vetor de unidades para filtrar por tipo."
            },
            "uk": {
                "description": "Повертає масив усіх об'єктів заданого типу `type`, які може побачити #{spriteName}, навіть не бойові одиниці. Опція: передати другим аргументом масив об'єктів для фільтрування за типом."
            },
            "pl": {
                "description": "Zwraca tablicę wszystkich jednostek danego \"typu\", które #{spriteName} może zobaczyć, nawet nie-przeciwników. Opcjonalnie: przekazuje drugi argument jako tablicę jednostek do przefiltrowania po typie."
            },
            "it": {
                "description": "Restituisce un array con tutte le unità di tipo `type` che #{spriteName} può vedere, anche se non combattono. Opzionale: passa come secondo argomento un array di unità per filtrarlo per tipo."
            },
            "es-ES": {
                "description": "Devuelve una matriz de todas las unidades con el `type` introducido que el #{spriteName} puede ver, hasta no combatientes. Opcional: pasa un segundo argumento cómo matriz de unidades para filtrar por su type."
            },
            "es-419": {
                "description": "Devuelve una matriz de todas las unidades con las pares no combatientes dado `type` que el # {spriteName} puede ver,. Opcional: aprobar un segundo argumento como un conjunto de unidades para filtrar por tipo."
            },
            "sk": {
                "description": "Vráti pole obsahujúce jednotky daného typu, ktoré hrdina vidí. Môžu to byť aj nebojovníci. Voliteľné: druhým argumentom môže byť aj pole jednotiek."
            },
            "zh-HANT": {
                "description": "在指定 類型`type` 下，回傳一組指定 #{spriteName}可看見的物品，甚至可以是非戰鬥類型。自選的：輸入第二個參數當作一組 `指定類型` 的陣列。"
            },
            "zh-HANS": {
                "description": " #{spriteName}返回一个数组中包含所有符合给定 `type`的单位，甚至非战斗单位。"
            },
            "lt": {
                "description": "Gąžinamas rezultatas - nurodyto tipo `type` objektų masyvas, kuriuos mato  #{spriteName}, netgi nekariaujančius (non-combatabts)"
            },
            "de-DE": {
                "description": "Gibt ein Array zurück, mit allen Einheiten des Typus `type`die #{spriteName} sehen kann, inklusive Nicht-Kämpfern."
            },
            "nb": {
                "description": "Returnerer en array (en matrise) av alle enheter av angitt `type` som #{spriteName} kan se, også enheter som ikke slåss."
            },
            "fr": {
                "description": "Fournit une liste de toutes les unités du `type` indiqué que #{spriteName} peut voir, même non-combattantes. Optionnel: Donner  un second  argument pour filtrer la liste des unités."
            },
            "ru": {
                "description": "Возвращает массив всех юнитов определенного типа ('type'), которых может видеть #{spriteName}, в том числе не соперников."
            },
            "cs": {
                "description": "Vrátí pole všech položek s daným `type`, na které #{spriteName} dohlédne, včetně nebojových jednotek."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "findByType",
                "code": "findByType(\"${1:thrower}\")"
            },
            "lua": {
                "tab": "findByType",
                "code": "self:findByType(\"${1:thrower}\")"
            },
            "clojure": {
                "tab": "findByType",
                "code": "(.findByType this \"${1:thrower}\")"
            },
            "coffeescript": {
                "tab": "findByType",
                "code": "@findByType \"${1:thrower}\""
            },
            "python": {
                "tab": "findByType",
                "code": "self.findByType(\"${1:thrower}\")"
            },
            "javascript": {
                "tab": "findByType",
                "code": "this.findByType(\"${1:thrower}\")"
            }
        },
        "returns": {
            "description": "An array of visible units.",
            "type": "array"
        },
        "args": [
            {
                "description": "The type of unit to filter for.",
                "example": "\"thrower\"",
                "type": "string",
                "name": "type"
            },
            {
                "description": "Optional: an array of units to find within.",
                "example": {
                    "io": "findFriends",
                    "lua": "self:findFriends()",
                    "clojure": "(.findFriends this)",
                    "coffeescript": "@findFriends()",
                    "python": "self.findFriends()",
                    "javascript": "this.findFriends()"
                },
                "type": "array",
                "name": "units"
            }
        ],
        "description": "Return an array of all the units with the given `type` that the #{spriteName} can see, even non-combatants. Optional: pass a second argument as an array of units to filter by type.",
        "type": "function",
        "name": "findByType"
    },
    {
        "userShouldCaptureReturn": {
            "variableName": "flags"
        },
        "i18n": {
            "da": {
                "description": "Returnérer alle flag som ligenu er blevet placeret under realtids-afspilning af dit team."
            },
            "el": {
                "description": "Επιστρέφει όλες τις σημαίες που έχουν τοποθετηθεί από την ομάδα σας κατά τη εκτέλεση  του κώδικα σε πραγματικό χρόνο."
            },
            "nl-NL": {
                "description": "Geeft alle vlaggen die op dit moment door jouw team zijn geplaatst, tijdens de live-weergave (interactie-modus)."
            },
            "sv": {
                "description": "Returnerar alla flaggor som just nu finns placerade av ditt lag vid realtidsuppspelningst."
            },
            "pt-BR": {
                "description": "Retorna todas as bandeiras que já foram postas durante uma reprodução em tempo real na sua equipe."
            },
            "uk": {
                "description": "Повертає всі прапорці, розміщені на даний час у режимі відтворення в реальному часі для вашої команди."
            },
            "pl": {
                "description": "Zwraca wszystkie flagi aktualnie ustawione przez Twój zespół podczas rozgrywki w czasie rzeczywistym."
            },
            "it": {
                "description": "Restituisce tutte le bandiere che sono state piazzate dalla tua squadra durante l'esecuzione in tempo reale."
            },
            "es-ES": {
                "description": "Devuelve todos los marcadores que han sido situados durante juego en tiempo real en tu equipo."
            },
            "zh-HANT": {
                "description": "回傳所有現在被放置在遊戲上的旗幟"
            },
            "es-419": {
                "description": "Devuelve todas las banderas que ahora se han colocado durante la reproducción en tiempo real de su equipo."
            },
            "sk": {
                "description": "Vráti všetky vlajky, ktoré si umiestnil v reálnom čase."
            },
            "zh-HANS": {
                "description": "返回当前所有为你的队伍实时放置的所有旗子。"
            },
            "lt": {
                "description": "Grąžinamas rezultatas - masyvas vėliavų, kurios buvo padėtos tavo komandos realaus laiko žaidimo metu."
            },
            "de-DE": {
                "description": "Gibt alle Flaggen zurück, die momentan im Realzeit playback für dein Team gesetzt wurden."
            },
            "nb": {
                "description": "Returnerer alle flagg som er utplassert av ditt lag for øyeblikket."
            },
            "fr": {
                "description": "Fournit tous les drapeaux qui ont été actuellement placés durant l'éxécution en temps réel par votre équipe."
            },
            "ru": {
                "description": "Возвращает все флаги установленные на текущий момент в ходе real-time игры в команде."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "findFlags",
                "code": "findFlags"
            },
            "lua": {
                "tab": "findFlags",
                "code": "self:findFlags()"
            },
            "clojure": {
                "tab": "findFlags",
                "code": "(.findFlags this)"
            },
            "python": {
                "tab": "findFlags",
                "code": "self.findFlags()"
            },
            "coffeescript": {
                "tab": "findFlags",
                "code": "@findFlags()"
            },
            "javascript": {
                "tab": "findFlags",
                "code": "this.findFlags()"
            }
        },
        "returns": {
            "i18n": {
                "da": {
                    "description": "Array med synlige flag."
                },
                "el": {
                    "description": "Λίστα των ορατών σημαιών."
                },
                "nl-NL": {
                    "description": "Een array van zichtbare vlaggen."
                },
                "sv": {
                    "description": "En lsita med synliga flaggor."
                },
                "ja": {
                    "description": "今見えている旗の配列"
                },
                "pt-BR": {
                    "description": "Um vetor de bandeiras visíveis."
                },
                "uk": {
                    "description": "Масив видимих прапорців."
                },
                "pl": {
                    "description": "Tablica widocznych flag."
                },
                "it": {
                    "description": "Un array delle bandiere visibili."
                },
                "es-ES": {
                    "description": "Una matriz de marcadores visibles."
                },
                "zh-HANT": {
                    "description": "一組 `可看見的旗幟` 的陣列"
                },
                "es-419": {
                    "description": "Una matriz de banderas visibles."
                },
                "sk": {
                    "description": "Pole viditeľných vlajok."
                },
                "zh-HANS": {
                    "description": "一个可见旗子的数组。"
                },
                "lt": {
                    "description": "Matomų vėliavų masyvas."
                },
                "de-DE": {
                    "description": "Ein Array der sichtbaren Flaggen."
                },
                "nb": {
                    "description": "An array av synlige flagg."
                },
                "fr": {
                    "description": "Une liste des drapeaux visibles."
                },
                "ru": {
                    "description": "Массив видимых флагов."
                },
                "-": {
                    "-": "-"
                }
            },
            "description": "An array of visible flags.",
            "type": "array"
        },
        "description": "Returns all flags that have currently been placed during real-time playback on your team.",
        "type": "function",
        "name": "findFlags"
    },
    {
        "args": [
            {
                "i18n": {
                    "da": {
                        "description": "Mål for denne metode."
                    },
                    "el": {
                        "description": "Ο στόχος αυτής της συνάρτησης."
                    },
                    "nl-NL": {
                        "description": "Het doelwit van deze functie."
                    },
                    "lt": {
                        "description": "šios funkcijos tikslas"
                    },
                    "sv": {
                        "description": "Målet för den här funktionen."
                    },
                    "ja": {
                        "description": "この関数のターゲット"
                    },
                    "pt-BR": {
                        "description": "O alvo desta função."
                    },
                    "pl": {
                        "description": "Flaga do usunięcia."
                    },
                    "uk": {
                        "description": "Ціль цієї функції."
                    },
                    "it": {
                        "description": "Il \"bersaglio\" di questa funzione."
                    },
                    "es-ES": {
                        "description": "El objetivo de esta función."
                    },
                    "zh-HANT": {
                        "description": "這個函數的目標"
                    },
                    "es-419": {
                        "description": "El objetivo de esta función."
                    },
                    "sk": {
                        "description": "Cieľ tejto funkcie."
                    },
                    "zh-HANS": {
                        "description": "该方法的目标。"
                    },
                    "ru": {
                        "description": "Цель этой функции."
                    },
                    "de-DE": {
                        "description": "Das Ziel dieser Funktion."
                    },
                    "nb": {
                        "description": "Flagget som skal fjernes."
                    },
                    "fr": {
                        "description": "La cible de cette fonction."
                    },
                    "-": {
                        "-": "-"
                    }
                },
                "description": "The target of this function.",
                "example": {
                    "io": "findFlag(\"green\")",
                    "lua": "self:findFlag(\"green\")",
                    "clojure": "(.findFlag this \"green\")",
                    "coffeescript": "@findFlag(\"green\")",
                    "python": "self.findFlag(\"green\")",
                    "javascript": "this.findFlag(\"green\")"
                },
                "type": "flag",
                "name": "flag"
            }
        ],
        "i18n": {
            "da": {
                "description": "Fjerner et flag, som blev placeret under realtids-afspilning. Fejler hvis flager ikke tilhører dit team."
            },
            "el": {
                "description": "Αφαιρεί μία σημαία που είχε τοποθετηθεί κατά την εκτέλεση του κώδικα σε πραγματικό χρόνο. Αποτυγχάνει εάν η σημαία δεν είναι στην ομάδα σας."
            },
            "nl-NL": {
                "description": "Verwijdert een vlag die tijdens live-weergave (interactie-modus) was geplaatst. "
            },
            "sv": {
                "description": "Tar bort en flagga som placerats under realtidsuppspelning. Misslyckas om flaggan inte är ditt lags."
            },
            "pt-BR": {
                "description": "Remove uma bandeira que foi colocada durante uma reprodução em tempo real. Falha se a bandeira não estiver na sua equipe."
            },
            "pl": {
                "description": "Usuwa flagę postawioną przez Twój zespół podczas rozgrywki w czasie rzeczywistym. Funkcja nie usuwa flag innych zespołów."
            },
            "uk": {
                "description": "Прибирає прапорець, що був розміщений у режимі відтворення в реальному часі. Виникає збій, якщо цей праворець не для вашої команди."
            },
            "it": {
                "description": "Rimuove una bandiera che è stata piazzata durante l'esecuzione in tempo reale. Fallisce se la bandiera non è della tua squadra."
            },
            "es-ES": {
                "description": "Elimina un marcador que ha sido colocado durante el juego en tiempo real. No funciona si el marcador no es de tu equipo."
            },
            "zh-HANT": {
                "description": "移除現在被放置在遊戲上的旗幟。如果旗幟不是由您的隊伍放置，此函數將會失敗。"
            },
            "es-419": {
                "description": "Elimina una bandera que fue colocada durante la reproducción en tiempo real. Falla si la bandera no está en su equipo."
            },
            "sk": {
                "description": "Odoberie vlajku umiestnenú v reálnom čase. Musí to byť vlajka tvojho tímu."
            },
            "zh-HANS": {
                "description": "移除一面实时放置的旗子。如果旗子不是你的队伍放置的将会失败。"
            },
            "lt": {
                "description": "Paima vėliavą realaus žaidimo metu, nepavyksta jei tai priešininkų komandos  vėliava."
            },
            "de-DE": {
                "description": "Entfernt eine Flagge die im Realzeit playback für dein Team gesetzt wurde."
            },
            "nb": {
                "description": "Fjerner et flagg som var utplassert.Feiler hvis flagget ikke tilhører ditt lag."
            },
            "fr": {
                "description": "Retire un drapeaux qui a été placé durant l'éxécution en temps réel. Ne fonctionne que si le drapeau appartient à votre équipe."
            },
            "ru": {
                "description": "Удаляет флаг установленный в ходе real-time игры. Попытка проваливается если флаг не принадлежит вашей команде."
            },
            "-": {
                "-": "-"
            }
        },
        "example": {
            "io": "greenFlag := findFlag(\"green\")\nif(greenFlag and self.distanceTo(greenFlag) < 5,\n    removeFlag(greenFlag)\n)",
            "lua": "greenFlag = self:findFlag(\"green\")\nif greenFlag and self:distanceTo(greenFlag) < 5 then\n    self:removeFlag(greenFlag)\nend",
            "clojure": "(let [greenFlag (.findFlag this \"green\")]\n    (if (and greenFlag (< (.distanceTo this greenFlag) 5))\n        (.removeFlag this greenFlag)))",
            "python": "greenFlag = self.findFlag(\"green\")\nif greenFlag and @distanceTo(greenFlag) < 5:\n    self.removeFlag(greenFlag)",
            "coffeescript": "greenFlag = @findFlag \"green\"\nif greenFlag and @distanceTo(greenFlag) < 5\n    @removeFlag greenFlag",
            "javascript": "var greenFlag = this.findFlag(\"green\");\nif (greenFlag && this.distanceTo(greenFlag) < 5) {\n    this.removeFlag(greenFlag);\n}"
        },
        "snippets": {
            "io": {
                "tab": "removeFlag",
                "code": "removeFlag(${1:flag})"
            },
            "lua": {
                "tab": "removeFlag",
                "code": "self:removeFlag(${1:flag})"
            },
            "clojure": {
                "tab": "removeFlag",
                "code": "(.removeFlag this ${1:flag})"
            },
            "python": {
                "tab": "removeFlag",
                "code": "self.removeFlag(${1:flag})"
            },
            "coffeescript": {
                "tab": "removeFlag",
                "code": "@removeFlag(${1:flag})"
            },
            "javascript": {
                "tab": "removeFlag",
                "code": "this.removeFlag(${1:flag})"
            }
        },
        "description": "Removes a flag that was placed during real-time playback. Fails if the flag isn't on your team.",
        "type": "function",
        "name": "removeFlag"
    },
    {
        "userShouldCaptureReturn": {
            "variableName": "flag"
        },
        "example": {
            "io": "flag := findFlag()\nif(flag,\n    if(flag color == \"black\") then(\n        buildXY(\"fire-trap\", flag pos x, flag pos y)\n    )\n    pickUpFlag(flag)\n)",
            "lua": "local flag = self:findFlag()\nif flag then\n    if flag.color == \"black\" then\n        self:buildXY(\"fire-trap\", flag.pos.x, flag.pos.y)\n    end\n    self:pickUpFlag(flag)\nend",
            "clojure": "(let [flag (.findFlag this)]\n    (if flag (do\n        (if (= (.color flag) \"black\")\n            (.buildXY this (.x (.pos flag)) (.y (.pos flag))))\n        (.pickUpFlag this flag))))",
            "python": "flag = self.findFlag()\nif flag:\n    if flag.color is \"black\":\n        self.buildXY(\"fire-trap\", flag.pos.x, flag.pos.y)\n    self.pickUpFlag(flag)",
            "coffeescript": "flag = @findFlag()\nif flag\n    if flag.color is \"black\"\n        @buildXY \"fire-trap\", flag.pos.x, flag.pos.y\n    @pickUpFlag flag",
            "javascript": "var flag = this.findFlag();\nif (flag) {\n    if (flag.color == \"black\") {\n        this.buildXY(\"fire-trap\", flag.pos.x, flag.pos.y);\n    }\n    this.pickUpFlag(flag);\n}"
        },
        "i18n": {
            "da": {
                "description": "Returnérer dit flag med den givne farve, hvis det findes. Hvis color er udeladt, returneres et af dine flag med vilkårlig farve. De 3 flagfarver er `\"green\"`, `\"black\"`, and `\"violet\"`."
            },
            "el": {
                "description": "Επιστρέφει μία σημαία σας από το συγκεκριμένο χρώμα, αν υπάρχει. Αν το χρώμα είναι απροσδιόριστο, επιστρέφει μία από τις σημαίες σας, ανεξάρτητα από το χρώμα. Τα τρία χρώματα της σημαίας είναι `\"πράσινο\"`, `\"μαύρο\"` και `\"βιολετί\"`."
            },
            "nl-NL": {
                "description": "Geeft jouw vlag van een bepaalde kleur, als die bestaat. Als \"kleur' niet gespecificeerd is geeft het een van jouw vlaggen, ongeacht de kleur. De drie vlagkleuren zijn \"groen\", \"zwart\" en \"violet\". "
            },
            "sv": {
                "description": "Returnerar din flagga i den givna färgen om den existerar. Utan någon färg specificerad så returneras en av dina flaggor oavsett färg. De färger som finns är `\"green\"`, `\"black\"`, och `\"violet\"`."
            },
            "pt-BR": {
                "description": "Retorna uma bandeira da cor dada, se ela existir. Se a cor não for especificada, retorna uma das suas bandeiras independentemente da cor. As três cores das bandeiras são `\"green\"`, `\"black\"` e `\"violet\"`."
            },
            "pl": {
                "description": "Zwraca flagę o podanym kolorze, o ile taka istnieje. Gdy nie określimy koloru zwraca jakąkolwiek flagę. Flagi mogą być koloru zielonego `\"green\"`,  czarnego `\"black\"` lub fioletowego `\"violet\"`."
            },
            "uk": {
                "description": "Повертає ваш прапорець заданого кольору, якщо він існує. Якщо кольор не вказано, повердає один из ваших прапорців незалежно від кольору. Існує три кольори прапорців: `\"green\"`, `\"black\"` та `\"violet\"`."
            },
            "it": {
                "description": "Restituisce la tua bandiera di un certo colore, se esiste. Se il colore non è specificato, restituisce una delle tue bandiere, senza badare al colore. I tre colori possibili sono `\"green\"`, `\"black\"`, e `\"violet\"`."
            },
            "es-ES": {
                "description": "Devuelve tu marcador del color dado, si existe. Si el color no está especificado, devuelve uno de tus marcadores independientemente de su color. Los tres colores de marcadores son `\"green\"`, `\"black\"`, y `\"violet\"`."
            },
            "zh-HANT": {
                "description": "如果它存在，回傳您指定顏色的旗幟。如果沒指定顏色，隨機回傳其中一隻旗幟。旗幟顏色分別為 綠色`green`，黑色`black`，紫色`violet`。"
            },
            "es-419": {
                "description": "Devuelve su bandera del color dado, si existe. Si el color no se especifica, devuelve una de sus banderas, independientemente del color. Los tres colores de la bandera son `\" green \"`, `\" black \"` y `\" violet \"`."
            },
            "sk": {
                "description": "Vráti tvoju vlajku zadanej farby, ak existuje. Ak je farba nešpecifikovaná, vráti jednu z tvojích vlajok bez ohľadu na farbu. Tri farby vlajok sú : `\"green\"`, `\"black\"` a `\"violet\"`."
            },
            "zh-HANS": {
                "description": "如果颜色存在，返回给定的颜色的旗子。如果未指定颜色，返回任何一种颜色的一面旗子。旗子的颜色是`绿色(\"green\")`，`黑色(\"black\")`和`紫色(\"violet\")`。"
            },
            "lt": {
                "description": "Grąžinamas rezultatas - nurodytos spalvos vėliavos objektas. Jei spalva nenurodyta, grąžina betkurios spalvos vėliavą."
            },
            "de-DE": {
                "description": "Gibt die Flagge der gewählten Farbe zurück, falls sie existiert. Wenn keine Farbe benannt wird, wird irgendeine Flagge ausgegeben."
            },
            "nb": {
                "description": "Returnerer flagget ditt med den angitte fargen, hvis det finnes. Hvis fargen ikke er angitt returneres et av dine flagg uansett farge."
            },
            "fr": {
                "description": "Fournit votre drapeau de la couleur indiqué, s'il existe. Si la couleur n'est pas spécifiée, fournit l'un de vos drapeaux peu importe sa couleur. Les trois couleurs de drapeaux sont `\"green\"` (vert), `\"black\"` (noir), et `\"violet\"` (violet)."
            },
            "ru": {
                "description": "Возвращает ваш флаг заданного цвета, если он есть. Если цвет не указан, то возвращает один из ваших флагов независимо от цвета."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "removeFlag",
                "code": "findFlag(\"${1:green}\")"
            },
            "lua": {
                "tab": "findFlag",
                "code": "self:findFlag(\"${1:green}\")"
            },
            "clojure": {
                "tab": "findFlag",
                "code": "(.findFlag this \"${1:green}\")"
            },
            "python": {
                "tab": "findFlag",
                "code": "self.findFlag(\"${1:green}\")"
            },
            "coffeescript": {
                "tab": "findFlag",
                "code": "@findFlag \"${1:green}\""
            },
            "javascript": {
                "tab": "findFlag",
                "code": "this.findFlag(\"${1:green}\")"
            }
        },
        "args": [
            {
                "i18n": {
                    "da": {
                        "description": "Farve på flag, der skal returneres."
                    },
                    "el": {
                        "description": "Το χρώμα της σημαίας που επιστρέφει."
                    },
                    "nl-NL": {
                        "description": "De kleur van de vlag om terug te geven (als uitkomst van de functie)."
                    },
                    "sv": {
                        "description": "Färg på flaggan som ska returneras."
                    },
                    "ja": {
                        "description": "返して欲しい旗の色"
                    },
                    "pt-BR": {
                        "description": "A cor da bandeira a ser retornada."
                    },
                    "pl": {
                        "description": "Kolor szukanej flagi."
                    },
                    "uk": {
                        "description": "Колір прапорця, який потрібно знайти."
                    },
                    "it": {
                        "description": "Il colore della bandiera da restituire."
                    },
                    "es-ES": {
                        "description": "El color de marcador que devolverá."
                    },
                    "zh-HANT": {
                        "description": "要撿取的旗幟的顏色"
                    },
                    "es-419": {
                        "description": "dEl color de la bandera a retornar."
                    },
                    "sk": {
                        "description": "Farba vlajky."
                    },
                    "zh-HANS": {
                        "description": "待返回的旗子颜色。"
                    },
                    "lt": {
                        "description": "Grąžinamas rezultatas - vėliavos spalva"
                    },
                    "de-DE": {
                        "description": "Die Farbe der zurückzugebenen Flagge."
                    },
                    "nb": {
                        "description": "Fargen på flagget som skal returneres."
                    },
                    "fr": {
                        "description": "La couleur du drapeau à fournir."
                    },
                    "ru": {
                        "description": "Цвет возвращаемого флага."
                    },
                    "-": {
                        "-": "-"
                    }
                },
                "description": "The color of flag to return.",
                "example": "\"green\"",
                "type": "string",
                "name": "color"
            }
        ],
        "returns": {
            "i18n": {
                "da": {
                    "description": "Flag-objektet, hvis det findes."
                },
                "el": {
                    "description": "Το αντίκειμενο σημαία, εάν όντως υπάρχει."
                },
                "nl-NL": {
                    "description": "Het vlag object, als deze bestaat."
                },
                "sv": {
                    "description": "Flaggobjektet, om det finns."
                },
                "ja": {
                    "description": "存在するなら、旗のオブジェクト"
                },
                "pt-BR": {
                    "description": "O objeto bandeira, se ele existir."
                },
                "pl": {
                    "description": "Zwraca flagę jako obiekt, o ile taka istnieje."
                },
                "uk": {
                    "description": "Об'єкт прапорець, якщо він існує."
                },
                "it": {
                    "description": "L'oggetto bandiera, se esiste."
                },
                "es-ES": {
                    "description": "El objeto marcador, si existe."
                },
                "zh-HANT": {
                    "description": "要撿取的旗幟的物件，如果它存在"
                },
                "es-419": {
                    "description": "El objeto de la bandera, si es que existe."
                },
                "sk": {
                    "description": "Objekt vlajka, ak existuje."
                },
                "zh-HANS": {
                    "description": "如果旗子存在，返回一个旗子对象。"
                },
                "lt": {
                    "description": "Grąžinamas rezultatas - vėliavos objektas, jeigu toksai egzistuoja."
                },
                "de-DE": {
                    "description": "Das Flaggen Objekt, falls es existiert."
                },
                "nb": {
                    "description": "Flaggobjektet, hvis det finnes."
                },
                "fr": {
                    "description": "L'objet drapeau, s'il existe."
                },
                "ru": {
                    "description": "Объект 'флаг', если существует."
                },
                "-": {
                    "-": "-"
                }
            },
            "description": "The flag object, if it exists.",
            "type": "object"
        },
        "description": "Returns your flag of the given color, if it exists. If color is unspecified, returns one of your flags regardless of color. The three flag colors are `\"green\"`, `\"black\"`, and `\"violet\"`.",
        "type": "function",
        "name": "findFlag"
    },
    {
        "args": [
            {
                "i18n": {
                    "da": {
                        "description": "Flag som skal samles op."
                    },
                    "el": {
                        "description": "Η σημαία που θα μάζεψετε."
                    },
                    "nl-NL": {
                        "description": "De vlag die moet worden opgepakt."
                    },
                    "sv": {
                        "description": "Flagga att plocka upp."
                    },
                    "ja": {
                        "description": "拾って欲しい旗"
                    },
                    "pt-BR": {
                        "description": "A bandeira a ser pega.   "
                    },
                    "pl": {
                        "description": "Flaga do podniesienia."
                    },
                    "uk": {
                        "description": "Прапорець, який потрібно підібрати."
                    },
                    "it": {
                        "description": "La bandiera da raccogliere."
                    },
                    "es-ES": {
                        "description": "El marcador a recoger."
                    },
                    "zh-HANT": {
                        "description": "要撿取的旗幟"
                    },
                    "es-419": {
                        "description": "La bandera a recoger."
                    },
                    "sk": {
                        "description": "Vlajka, ktorú treba zdvihnúť."
                    },
                    "zh-HANS": {
                        "description": "要被拿起的旗子。"
                    },
                    "ru": {
                        "description": "Флаг, который будет поднят."
                    },
                    "lt": {
                        "description": "Paimti vėliavą"
                    },
                    "de-DE": {
                        "description": "Die zu bewegende Flagge."
                    },
                    "nb": {
                        "description": "Flagget som skal plukkes opp."
                    },
                    "fr": {
                        "description": "Le drapeau à ramasser."
                    },
                    "-": {
                        "-": "-"
                    }
                },
                "description": "The flag to pick up.",
                "example": {
                    "io": "findFlag(\"green\")",
                    "lua": "self:findFlag(\"green\")",
                    "clojure": "(.findFlag this \"green\")",
                    "coffeescript": "@findFlag(\"green\")",
                    "python": "self.findFlag(\"green\")",
                    "javascript": "this.findFlag(\"green\")"
                },
                "type": "flag",
                "name": "flag"
            }
        ],
        "i18n": {
            "da": {
                "description": "Går hen til og fjerner et flag som blev placeret under realtids-afspilning. Find først flaget med `findFlag`. De 3 flagfarver er `\"green\"`, `\"black\"`, and `\"violet\"`."
            },
            "el": {
                "description": "Μετακινείστε για να αφαιρέσετε μια σημαία που είχε τοποθετηθεί κατά την εκτέλεση σε πραγματικό χρόνο. Πρώτα Βρείτε τη σημαία με το `findFlag`. Τα τρία χρώματα της σημαίας είναι `\"πράσινο\"`, `\"μαύρο\"` και `\"βιολετί\"`."
            },
            "nl-NL": {
                "description": "Loopt naar- en verwijdert een vlag die was geplaatst tijdens live-weergave (interactie-modus). Vind eerst de vlag met 'findFlag'. De drie vlagkleuren zijn \"groen\", \"zwart\" en \"violet\"."
            },
            "sv": {
                "description": "Förflyttar dig till och tar bort en flagga som blivit placerad under realtidsuppspelning. Hitta först flaggan med `findFlag`. Färgerna är `\"green\"`, `\"black\"`, och `\"violet\"`."
            },
            "pt-BR": {
                "description": "Move-se e remove a bandeira que foi posta durante a reprodução em tempo real. Encontre a bandeira com `findFlag` primeiro. As três cores das bandeiras são `\"green\"`, `\"black\"` e `\"violet\"`."
            },
            "pl": {
                "description": "Idź do i usuń flagę postawiona w podczas rozgrywki w czasie rzeczywistym. Flagę należy najpierw zlokalizować poleceniem `findFlag`. Flagi mogą być koloru zielonego `\"green\"`,  czarnego `\"black\"` lub fioletowego `\"violet\"`."
            },
            "uk": {
                "description": "Пересувається та прибирає прапорець, що був розміщений у режимі відтворення в реальному часі. Спершу знайдіть прапорець за допомогою `findFlag`. Існує три кольори прапорців: `\"green\"`, `\"black\"` та `\"violet\"`."
            },
            "it": {
                "description": "Avvicina a (e rimuove) una bandiera piazzata durante l'esecuzione in tempo reale. Trova la bandiera con `findFlag`, prima. I tre colori possibili sono `\"green\"`, `\"black\"`, e `\"violet\"`."
            },
            "es-ES": {
                "description": "Se mueve a y recoge un marcador que haya sido colocado en juego en tiempo real. Encuentra el marcador con `findFlag` primero. Los tres colores son `\"green\"`, `\"black\"`, y `\"violet\"`."
            },
            "zh-HANT": {
                "description": "移動到旗幟位置並且撿起它。從 `findFlage` 先開始撿起。旗幟顏色分別為 綠色`green`，黑色`black`，紫色`violet`。"
            },
            "es-419": {
                "description": "Mueve y remueve a una bandera que fue colocada durante la reproducción en tiempo real. Primero encuentra la bandera con `findFlag`. Los tres colores de la bandera son `\" green \"`, `\" black \"` y `\" violet \"`."
            },
            "sk": {
                "description": "Hrdina sa presunie k vlajke a odstráni ju. Vlajku musíš najskôr nájsť pomocou `findFlag`. Tri farby vlajok sú : `\"green\"`, `\"black\"` a `\"violet\"`."
            },
            "zh-HANS": {
                "description": "移动到并移除在实时游戏中被放置的旗子。先要使用`findFlag`找到旗子。旗子的颜色是`绿色(\"green\")`，`黑色(\"black\")`和`紫色(\"violet\")`。"
            },
            "lt": {
                "description": "Nueina ir paima vėliavą, kuri buvo padėtą žaidžiant realiu laiku."
            },
            "de-DE": {
                "description": "Bewegt sich zu, und entfernt eine Flagge die im Realzeit playback gesetzt wurde."
            },
            "nb": {
                "description": "Går til et flagg og fjerner det."
            },
            "fr": {
                "description": "Se déplace et retire un drapeau qui a été placé durant l'éxécution en temps réel. trouvez d'abord le drapeau avec `findFlag` . Les trois couleurs de drapeaux sont `\"green\"` (vert), `\"black\"` (noir), et `\"violet\"` (violet)."
            },
            "ru": {
                "description": "Передвигается к флагу и удаляет установленный во время real-time игры."
            },
            "-": {
                "-": "-"
            }
        },
        "example": {
            "io": "greenFlag := findFlag(\"green\")\nif(greenFlag,\n    pickUpFlag(greenFlag)\n)",
            "lua": "local greenFlag = self:findFlag(\"green\")\nif greenFlag then\n    self:pickUpFlag(greenFlag)\nend",
            "clojure": "(let [greenFlag (.findFlag this \"green\")]\n    (if greenFlag\n        (.pickUpFlag this greenFlag)))",
            "python": "greenFlag = self.findFlag(\"green\")\nif greenFlag:\n    self.pickUpFlag(greenFlag)",
            "coffeescript": "greenFlag = @findFlag \"green\"\nif greenFlag\n    @pickUpFlag greenFlag",
            "javascript": "var greenFlag = this.findFlag(\"green\");\nif (greenFlag) {\n    this.pickUpFlag(greenFlag);\n}"
        },
        "snippets": {
            "io": {
                "tab": "pickUpFlag",
                "code": "pickUpFlagFlag(${1:flag})"
            },
            "lua": {
                "tab": "removeFlag",
                "code": "self:pickUpFlag(${1:flag})"
            },
            "clojure": {
                "tab": "removeFlag",
                "code": "(.pickUpFlag this ${1:flag})"
            },
            "python": {
                "tab": "removeFlag",
                "code": "self.pickUpFlag(${1:flag})"
            },
            "coffeescript": {
                "tab": "removeFlag",
                "code": "@pickUpFlag(${1:flag})"
            },
            "javascript": {
                "tab": "pickUpFlag",
                "code": "this.pickUpFlag(${1:flag})"
            }
        },
        "description": "Moves to and removes a flag that was placed during real-time playback. Find the flag with `findFlag` first. The three flag colors are `\"green\"`, `\"black\"`, and `\"violet\"`.",
        "type": "function",
        "name": "pickUpFlag"
    },
    {
        "userShouldCaptureReturn": {
            "variableName": "hazards"
        },
        "i18n": {
            "da": {
                "description": "Returnérer farlige ting (fælder, huller, osv.) på denne bane."
            },
            "el": {
                "description": "Επιστρέφει τους κινδύνους (παγίδες, λάκκουβες, κλπ) στο επίπεδο."
            },
            "nl-NL": {
                "description": "Geeft de gevaren (vallen, kuilen, etc.) in het level."
            },
            "lt": {
                "description": "Grąžinamas rezultatas - kliūtys (spastai, duobės ir t.t.) esančios šiame lygyje."
            },
            "sv": {
                "description": "Returnerar farorna (fällor, hålor etc) på nivån."
            },
            "pt-BR": {
                "description": "Retorna os perigos (armadilhas, poços, etc.) no nível."
            },
            "pl": {
                "description": "Zwraca tablicę niebezpiecznych obiektów na planszy (pułapki, doły, itp.)."
            },
            "uk": {
                "description": "Повертає небезпеки (пастки, ями, тощо), що знаходяться на рівні."
            },
            "it": {
                "description": "Restituisce i pericoli (trappole, buchi, ecc.) presenti nel livello."
            },
            "es-ES": {
                "description": "Devuelve las amenazas (trampas, fosos, etc.) del nivel."
            },
            "zh-HANT": {
                "description": "回傳此關卡的所有的危害(陷阱，坑...等)"
            },
            "fr": {
                "description": "Fournit  les dangers (pièges, gouffres, etc.) dans le niveau."
            },
            "es-419": {
                "description": "Devuelve los peligros (traps, pits, etc.) en el nivel."
            },
            "sk": {
                "description": "Vráti úskalia (pasce,jamy, atď.) v úrovni."
            },
            "zh-HANS": {
                "description": "返回本关卡中所有的危害建筑（例如陷阱，坑，等等）。"
            },
            "de-DE": {
                "description": "Gibt die Gefahren (Fallen, Gruben, usw.) in einem Level aus."
            },
            "ru": {
                "description": "Массив опасных объектов на уровне (ловушки, шипы, и.т.д)."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "findHazards",
                "code": "findHazards"
            },
            "lua": {
                "tab": "findHazards",
                "code": "self:findHazards()"
            },
            "clojure": {
                "tab": "findHazards",
                "code": "(.findHazards this)"
            },
            "coffeescript": {
                "tab": "findHazards",
                "code": "@findHazards()"
            },
            "python": {
                "tab": "findHazards",
                "code": "self.findHazards()"
            },
            "javascript": {
                "tab": "findHazards",
                "code": "this.findHazards()"
            }
        },
        "returns": {
            "description": "An array of hazards.",
            "type": "array"
        },
        "description": "Returns the hazards (traps, pits, etc.) in the level.",
        "type": "function",
        "name": "findHazards"
    }
]