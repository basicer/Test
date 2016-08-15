[
    {
        "userShouldCaptureReturn": {
            "variableName": "castable"
        },
        "i18n": {
            "fi": {
                "description": "Määrittää onko annettu taika valmis käytettäväksi uudelleen. Jos target on määritelty, katsotaan myös voiko target joutua taian uhriksi.",
                "name": "voiTaikoa"
            },
            "da": {
                "description": "Om den givne besværgelse er klar. Hvis et mål er angivet, checkes det også om målet kan påvirkes med besværgelsen."
            },
            "sr": {
                "description": "Da li je zadata carolija spremna. Ako je meta odredjena, proverama da li ce carolija imati uticaja."
            },
            "es-419": {
                "description": "Si el hechizo dado está listo. Si se especifica un destino, también comprueba si el objetivo se puede ver afectada."
            },
            "ca": {
                "description": "En qualsevol cas que l'encanteri estigui a punt. Si s'especifica un objectiu, també es comprova si l'objectiu pot veure's afectat."
            },
            "bg": {
                "description": "Проверява дали дадената магия е готова. Ако е посочена цел, също проверява дали целта може да бъде засегната."
            },
            "el": {
                "description": "Εξετάζει εάν το συγκεκριμένο ξόρκι μπορεί να χρησιμοποιηθεί. Εάν ο στόχος έχει προσδιορισθεί έλεγχει επίσης εάν θα επηρεαστεί από το ξόρκι."
            },
            "ro": {
                "description": "Dacă o anumită vrajă e pregătită sau nu. Dacă se specifică o țintă, verifică deasemenea dacă ținta poate fi afectată."
            },
            "id": {
                "description": "Meskipun mantera yang diberikan telah siap. Jika sebuah sasaran sudah jelas, juga tetap harus diperhatikan apakah berpengaruh pada sasaran."
            },
            "uk": {
                "description": "Визначає, чи готове заклинання до застосування. Якщо вказана ціль, також перевіряє, чи матиме заклинання вплив на ціль."
            },
            "ja": {
                "description": "選択された魔法を使えるかどうか。もしターゲットも入力したらそのターゲットに効果あるかどうか。"
            },
            "it": {
                "description": "Restituisce se l'incantesimo richiesto è pronto. Se un bersaglio è specificato, controlla anche se l'incantesimo ha effetto su di esso."
            },
            "hu": {
                "description": "Megmondja, készen áll-e a megadott varázslat. Ha célpont is meg van adva, azt is ellenőrzi, hat-e rá a varázslat. "
            },
            "cs": {
                "description": "Jesli je dané kouzlo připraveno. Pokud je zadaný cíl, kontroluje navíc, jestli mu kouzlo uškodí."
            },
            "pl": {
                "description": "Czy dany czar jest gotowy. Jeśli cel jest określony, sprawdza też, czy cel może być naruszony."
            },
            "sk": {
                "description": "Je dané kúzlo pripravené ? Ak je určený cieľ, zisťuje, či môže byť tento cieľ ovplyvnený."
            },
            "nl-NL": {
                "description": "Of de #{spriteName} de spreuk kan uitspreken over gekozen doelwit (of het doelwit wat kan worden aangedaan en binnen bereik is, en of de spreuk gereed is)."
            },
            "zh-HANS": {
                "description": " #{spriteName} 是否可以对特定的目标使用技能(当目标在技能范围内并且技能已准备就绪)."
            },
            "nb": {
                "description": "      Hvorvidt #{spriteName} kan kaste den gitte trylleformelen mot det gitte målet (om den kan bli påvirket, er innenfor rekkevidde, og at trylleformelen er klar)."
            },
            "lt": {
                "description": "Patikrian ar  #{spriteName} gali naudoti šiuos burtus priėš nurodytą objektą. (Ar pakankamas nuotolis , ar burtas paruoštas naudojimui \"ready\")."
            },
            "pt-BR": {
                "description": "Caso a magia dada esteja pronta. Se o alvo for especificado, também checa se o alvo pode ser afetado."
            },
            "es-ES": {
                "description": "Si el # {spriteName} puede lanzar el hechizo dado sobre el objetivo indicado  (si este puede ser afectado y está dentro del rango, y el hechizo está listo)."
            },
            "de-DE": {
                "description": "Ob #{spriteName} eine bestimmte Fähigkeit auf das gewählte Ziel anwenden kann (also ob die Fähigkeit Auswirkungen zeigt, das Ziel sich innerhalb der Reichweite befindet und ob die Fähigkeit bereit ist.)"
            },
            "sv": {
                "description": "Visar om #{spriteName} kan kasta den angivna besvärjelsen på angivna målet (om målet kan påverkas, är inom räckvidd och att besvärjelsen är redo)."
            },
            "fr": {
                "description": "Si le #{spriteName} peut lancer le sort donné sur la cible donnée (Si elle peut être affectée et se trouve à portée, et si le sort est prêts) ou non."
            },
            "nn": {
                "description": "Om #{spriteName} kan kasta den gitte magien på det gitte målet (om det kan bli påverka og er innan rekkevidde, og magien er klar). )"
            },
            "gl": {
                "description": "En calquera caso o #{spriteName} pode invocar o feitizo sobre o destinatario dado (independentemente de si pode ser afectado e está no rango de alcance, ou se o feitizo está preparado) "
            },
            "ru": {
                "description": "Определяет способность #{spriteName} наложить заклинание на указанную цель (Подействует ли оно и находится ли она в радиусе удара, а также готово ли заклинание)."
            },
            "tr": {
                "description": "Karakterin (#{spriteName}), belirtilen büyüyü belirtilen hedefte yapıp yapamayacağı (etkileyip etkileyemeyeceği, menzilde olup olmaması ve hazır olup olmadığı)."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "canCast",
                "code": "canCast(\"${1:drain-life}\", ${2:target})"
            },
            "lua": {
                "tab": "canCast",
                "code": "self:canCast(\"${1:drain-life}\", ${2:target})"
            },
            "clojure": {
                "tab": "canCast",
                "code": "(.canCast this \"${1:drain-life}\" ${2:target})"
            },
            "python": {
                "tab": "canCast",
                "code": "self.canCast(\"${1:drain-life}\", ${2:target})"
            },
            "javascript": {
                "tab": "canCast",
                "code": "this.canCast(\"${1:drain-life}\", ${2:target})"
            },
            "coffeescript": {
                "tab": "canCast",
                "code": "@canCast \"${1:drain-life}\", ${2:target}"
            }
        },
        "args": [
            {
                "i18n": {
                    "fi": {
                        "description": "Taian nimi joka tarkistetaan."
                    },
                    "da": {
                        "description": "Navn på besværgelse at checke."
                    },
                    "sr": {
                        "description": "Ime carolije za proveru."
                    },
                    "es-419": {
                        "description": "El nombre del hechizo para comprobar."
                    },
                    "ca": {
                        "description": "El nom de l'encanteri per comprovar."
                    },
                    "bg": {
                        "description": "Името на магията, която да се провери."
                    },
                    "el": {
                        "description": "Το όνομα του μαγικού που θα ελεγχθεί."
                    },
                    "ro": {
                        "description": "Numele vrăjii care este verificată."
                    },
                    "id": {
                        "description": "Merupakan sebutan mantera untuk di uji."
                    },
                    "uk": {
                        "description": "Назва заклинання, що перевіряється."
                    },
                    "ja": {
                        "description": "確認したい魔法の名前。"
                    },
                    "it": {
                        "description": "Il nome dell'incantesimo da testare."
                    },
                    "hu": {
                        "description": "Az ellenőrizendő varázslat neve. "
                    },
                    "cs": {
                        "description": "Jméno kouzla, které se má zkontrolovat."
                    },
                    "pl": {
                        "description": "Nazwa zaklęcia do sprawdzenia."
                    },
                    "sk": {
                        "description": "Meno kúzla, ktoré treba preskmať."
                    },
                    "nl-NL": {
                        "description": "De naam van de te controleren spreuk."
                    },
                    "nb": {
                        "description": "Navnet på trylleformelen som skal sjekkes."
                    },
                    "zh-HANS": {
                        "description": "检查技能的名字."
                    },
                    "lt": {
                        "description": "Butų pavadinimas, kurį reikia patikrinti."
                    },
                    "pt-BR": {
                        "description": "O nome do feitiço para checar."
                    },
                    "es-ES": {
                        "description": "El nombre del hechizo para comprobar."
                    },
                    "de-DE": {
                        "description": "Der Name der Fähigkeit, die geprüft werden soll."
                    },
                    "sv": {
                        "description": "Namnet på besvärjelsen som skall undersökas."
                    },
                    "fr": {
                        "description": "Le nom du sort à vérifier."
                    },
                    "nn": {
                        "description": "Namnet på magien som blir sjekka."
                    },
                    "gl": {
                        "description": "O nome do feitizo a comprobar."
                    },
                    "ru": {
                        "description": "Название проверяемого заклинания."
                    },
                    "tr": {
                        "description": "Denetlenecek büyü adı."
                    },
                    "-": {
                        "-": "-"
                    }
                },
                "description": "The name of the spell to check.",
                "example": "\"drain-life\"",
                "type": "string",
                "name": "spell"
            },
            {
                "i18n": {
                    "fi": {
                        "description": "Valinnainen: joukko johon testataan taian tehokkuutta."
                    },
                    "da": {
                        "description": "Valgfrit: Enheden som besværgelsen skal checkes imod."
                    },
                    "sr": {
                        "description": "Neobavezno: provera da li carolija deluje na jedinicu"
                    },
                    "es-419": {
                        "description": "Opcional: la unidad para comprobar la eficacia contra el hechizo."
                    },
                    "cs": {
                        "description": "Nepoviné: jednotka, pro kterou kontrolujeme zasažení kouzlem. "
                    },
                    "ca": {
                        "description": "Opcional: la unitat sobre la qual comprovar l'eficàcia de l'encanteri."
                    },
                    "bg": {
                        "description": "По избор: единицата, срещу която да се провери ефикасност на магията."
                    },
                    "el": {
                        "description": "Όχι υποχρεωτικό: έλεγχος αποτελεσματικότητας ξορκιού σε ομάδα εχθρών."
                    },
                    "ro": {
                        "description": "Opțional: unitatea împotriva căreia se verifică eficacitatea vrăjii."
                    },
                    "id": {
                        "description": "Optional: unit untuk cek keakuratan mantera."
                    },
                    "uk": {
                        "description": "Опційно: об'єкт, щодо якого перевіряється ефективність заклинання."
                    },
                    "ja": {
                        "description": "オプション：魔法のターゲット。そのターゲットに効果があるかどうかを確認する。"
                    },
                    "it": {
                        "description": "Opzionale: verifica l'efficacia dell'incantesimo su una unità."
                    },
                    "hu": {
                        "description": "Nem kötelező: a célpont, amin meg kell nézni, hat-e rá a varázslat."
                    },
                    "pl": {
                        "description": "Opcjonalnie: moduł do ponownego sprawdzenia skuteczności zaklęć."
                    },
                    "sk": {
                        "description": "Voliteľné: účinnosť vplyvu na cieľ."
                    },
                    "nl-NL": {
                        "description": "De eenheid waarvoor de doeltreffendheid van de spreuk wordt gecontroleerd."
                    },
                    "zh-HANS": {
                        "description": "检查技能对目标的有效性."
                    },
                    "nb": {
                        "description": "Hva eller hvem det skal sjekkes om trylleformelen virker på."
                    },
                    "lt": {
                        "description": "Patikrinti burtų poveikį objektui."
                    },
                    "pt-BR": {
                        "description": "Opcional: A unidade alvo para checar a eficiência do feitiço."
                    },
                    "es-ES": {
                        "description": "La unidad contra la que comprobar la eficacioa del hechizo"
                    },
                    "de-DE": {
                        "description": "Die Einheit gegen jene die Wirksamkeit der Fähigkeit geprüft werden soll."
                    },
                    "sv": {
                        "description": "Valfritt: Enhet att visa besvärjelsens effekt för."
                    },
                    "fr": {
                        "description": "L'unité sur laquelle tester l'efficacité du sort."
                    },
                    "gl": {
                        "description": "A unidade contra a que comprobar a eficacia do feitizo."
                    },
                    "ru": {
                        "description": "Единица на которую заклинание накладывается."
                    },
                    "tr": {
                        "description": "Büyü etkinliğinin karşılaştırılacağı birim"
                    },
                    "-": {
                        "-": "-"
                    }
                },
                "description": "Optional: the unit to check spell efficacy against.",
                "example": {
                    "io": "findNearestEnemy",
                    "lua": "self:findNearestEnemy()",
                    "clojure": "(.findNearestEnemy this)",
                    "coffeescript": "@findNearestEnemy()",
                    "python": "self.findNearestEnemy()",
                    "javascript": "this.getNearestEnemy()"
                },
                "type": "object",
                "name": "target"
            }
        ],
        "description": "Whether the given spell is ready. If a target is specified, also checks whether the target can be affected.",
        "type": "function",
        "name": "canCast"
    },
    {
        "i18n": {
            "fi": {
                "description": "Taikojen nimet, jotka #{spriteName} voi taikoa.",
                "name": "taikojenNimet"
            },
            "da": {
                "description": "Navne på besværgelser som #{spriteName} kan bruge."
            },
            "sr": {
                "description": "Imena carolija koje #{spriteName} moze da izvede."
            },
            "es-419": {
                "description": "Los nombres de los hechizos que este #{spriteName} puede lanzar."
            },
            "cs": {
                "description": "Jména kouzel, která může #{spriteName} seslat."
            },
            "ca": {
                "description": "Els noms dels encanteris que #{spriteName} pot llançar."
            },
            "bg": {
                "description": "Имената на магиите, които този #{spriteName} може да направи."
            },
            "el": {
                "description": "Τα όνοματα των ξορκιών που ο ήρωας μας μπορεί να χρησιμοποιήσει."
            },
            "ro": {
                "description": "Numele vrăjilor pe care #{spriteName} le poate invoca."
            },
            "hu": {
                "description": "A varázslatok nevei, amiket ez a #{spriteName} használhat."
            },
            "id": {
                "description": "nama dari mantera yang dapat #{spritename} tampilkan."
            },
            "uk": {
                "description": "Назви заклинань, котрі може творити #{spriteName}."
            },
            "ja": {
                "description": "#{spriteName}　が使える魔法の名前。"
            },
            "it": {
                "description": "I nomi degli incantesimi che #{spriteName} può lanciare."
            },
            "pl": {
                "description": "Nazwy czarów tego # {spriteName} można rzucać / użyć."
            },
            "sk": {
                "description": "Meno kúzla, ktoré tento hrdina dokáže urobiť."
            },
            "nl-NL": {
                "description": "De namen van de spreuken die deze #{spriteName} kan uitspreken."
            },
            "zh-HANS": {
                "description": "#{spriteName} 可以使用的技能."
            },
            "nb": {
                "description": "Navnene på trylleformelen som #{spriteName} kan kaste."
            },
            "lt": {
                "description": "Burtų pavadinimai, kuriuos gali kerėti  #{spriteName} ."
            },
            "pt-BR": {
                "description": "Os nomes dos feitiços que #{spriteName} pode lançar."
            },
            "es-ES": {
                "description": "Los nombres de los hechizos este # {spriteName} pueda emitir."
            },
            "de-DE": {
                "description": "Der Name der Fähigkeit die #{spriteName} anwenden kann."
            },
            "sv": {
                "description": "Namnen på de besvärjelser som den här #{spriteName} kan kasta."
            },
            "fr": {
                "description": "Les noms des sorts que ce #{spriteName} peut lancer."
            },
            "gl": {
                "description": "Os nomes dos feitizos que pode invocar este #{spriteName}."
            },
            "ru": {
                "description": "Названия заклинаний, которые может наложить #{spriteName}."
            },
            "tr": {
                "name": "Büyü Adları",
                "description": "Bu karaktlerin (#{spriteName}) yapabileceği büyü adları."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "spellNames",
                "code": "spellNames"
            },
            "lua": {
                "tab": "spellNames",
                "code": "self.spellNames"
            },
            "clojure": {
                "tab": "spellNames",
                "code": "(.spellNames this)"
            },
            "python": {
                "tab": "spellNames",
                "code": "self.spellNames"
            },
            "javascript": {
                "tab": "spellNames",
                "code": "this.spellNames"
            },
            "coffeescript": {
                "tab": "spellNames",
                "code": "@spellNames"
            }
        },
        "description": "The names of the spells this #{spriteName} can cast.",
        "type": "array",
        "name": "spellNames"
    },
    {
        "i18n": {
            "fi": {
                "description": "Taiat, jotka #{spriteName} voi taikoa.",
                "name": "taiat"
            },
            "da": {
                "description": "Hvilke besværgelser #{spriteName} kan bruge."
            },
            "sr": {
                "description": "Koje carolije #{spriteName} moze da izvede."
            },
            "es-419": {
                "description": "¿Qué explica este #{spriteName} puede lanzar."
            },
            "cs": {
                "description": "Která kouzla může tento #{spriteName} seslat."
            },
            "ca": {
                "description": "Quins encanteris que #{spriteName} pot llançar."
            },
            "bg": {
                "description": "Кои магии може да направи този #{spriteName}."
            },
            "el": {
                "description": "Ποιά ξόρκια ο ήρωας μας μπορεί να χρησιμοποιήσει."
            },
            "id": {
                "description": "Mantera yang dapat #{spritename} tampilkan."
            },
            "ro": {
                "description": "Ce vraji poate invoca acest #{spriteName}."
            },
            "uk": {
                "description": "Які заклинання може творити #{spriteName}."
            },
            "ja": {
                "description": "#{spriteName}　が使える魔法。"
            },
            "it": {
                "description": "Quali incantesimi #{spriteName} può lanciare."
            },
            "hu": {
                "description": "Melyik varázslatokat tudja ez a #{spriteName}. "
            },
            "pl": {
                "description": "Które czary tego #{spriteName} można rzucić."
            },
            "sk": {
                "description": "Aké kúzlo dokáže tento hrdina vykúzliť."
            },
            "nl-NL": {
                "description": "Welke spreuken deze #{spriteName} kan uitspreken."
            },
            "zh-HANS": {
                "description": "#{spriteName} 可以使用哪些技能."
            },
            "nb": {
                "description": "Hvilke trylleformeler som #{spriteName} kan kaste."
            },
            "lt": {
                "description": "Burtai, kuriuos gali panaudoti #{spriteName} ."
            },
            "pt-BR": {
                "description": "Quais feitiços #{spriteName} pode lançar."
            },
            "es-ES": {
                "description": "Que hechizos puede lanzar #{spriteName}"
            },
            "de-DE": {
                "description": "Welche Fähigkeiten #{spriteName} anwenden kann."
            },
            "sv": {
                "description": "Visar vilken besvärjelse som den här #{spriteName} kan kasta."
            },
            "fr": {
                "description": "Quels sorts ce #{spriteName} peut lancer."
            },
            "nn": {
                "description": "Dei magiane denne #{spriteName} kan kasta."
            },
            "gl": {
                "description": "Os feitizos que pode invocar este #{spriteName}."
            },
            "ru": {
                "description": "Заклинания, которые может наложить #{spriteName}"
            },
            "tr": {
                "name": "Büyüler",
                "description": "Bu karakterin (#{spriteName}) yapabileceği büyüler."
            },
            "-": {
                "-": "-"
            }
        },
        "description": "Which spells this #{spriteName} can cast.",
        "type": "object",
        "name": "spells"
    },
    {
        "snippets": {
            "io": {
                "tab": "cast",
                "code": "cast(\"${1:drain-life}\", ${2:target})"
            },
            "lua": {
                "tab": "canCast",
                "code": "self:cast(\"${1:drain-life}\", ${2:target})"
            },
            "clojure": {
                "tab": "canCast",
                "code": "(.cast this \"${1:drain-life}\" ${2:target})"
            },
            "python": {
                "tab": "canCast",
                "code": "self.cast(\"${1:drain-life}\", ${2:target})"
            },
            "javascript": {
                "tab": "canCast",
                "code": "this.cast(\"${1:drain-life}\", ${2:target})"
            },
            "coffeescript": {
                "tab": "canCast",
                "code": "@cast \"${1:drain-life}\", ${2:target}"
            }
        },
        "i18n": {
            "fi": {
                "description": "Taikoo taian joukkoon. Käytä `canCast` niin näet onko taika valmis käytettäväksi uudelleen ja katso `spellNames` niin näät mitkä taiat ovat käytettävissä.",
                "name": "taio"
            },
            "da": {
                "description": "Kast en besværgelse imod målet. Brug `canCast` til at checke om besværgelsen er klar og læs `spellNames` for at hvilke besværgelser der er mulige."
            },
            "sr": {
                "description": "Izvodi caroliju na zadatu jedinicu. Koristi 'canCast' da proveris da li je carolija spremna, i pogledaj u 'spellNames' da vidis da li je carolija dostupna."
            },
            "es-419": {
                "description": "Lanzar un hechizo a un objetivo. Use `canCast` para ver si el hechizo está listo, y `spellNames` para ver qué hechizos están disponibles."
            },
            "cs": {
                "description": "Sešli kouzlo na cíl. Použij `canCast`, abys věděl jestli je kouzlo připravené, a podívej se na `spellNames`, abys věděl jaká kouzla existují."
            },
            "ca": {
                "description": "Llançar un encanteri a un objectiu. Utilitza `canCast` per veure si l'encanteri està a punt, i mira `spellNames` per veure quins encanteris estan disponibles."
            },
            "bg": {
                "description": "Направи магия на дадена цел. Използвай `canCast`,за да видиш кои магии са готови и погледни `spellNames`, за да видиш, кои магии са на разположение."
            },
            "el": {
                "description": "Ρίχνει ένα ξόρκι στο στόχο. Χρησιμοποιήσε το `canCast` για να έλεγξετε αν το ξόρκι είναι έτοιμο προς χρήση και κοίταξε στο `spellNames` για ποιά ξόρκια έχεις διαθέσιμα."
            },
            "ro": {
                "description": "Invocă o vrajă asupra unei ținte. Folosește `canCast` ca să vezi dacă vraja e pregătită și uită-te la `spellNames` ca să vezi ce vrăji sunt disponibile."
            },
            "id": {
                "description": "Melemparkan mantera ke sebuah sasaran. Gunakan 'canCast' untuk melihat apakah mantera sudah siap, dan lihat pada 'spellNames' untuk melihat mantera-matera apa saja yang tersedia."
            },
            "uk": {
                "description": "Накласти заклинання на ціль. Використовуйте `canCast`, щоб перевірити, чи готове заклинання, і `spellNames`, щоб визначити, які заклинання доступні."
            },
            "ja": {
                "description": "魔法を使う。使える魔法を確認する為に`canCast`を使って`spellNames`を見て下さい。"
            },
            "it": {
                "description": "Lancia un incantesimo su un bersaglio. Usa `canCast` per vedere se l'incantesimo è pronto, e guarda in `spellNames` per vedere gli incantesimi disponibili."
            },
            "hu": {
                "description": "Varázsolj egy célpontra. Használd a `canCast` eljárást, hogy megnézd, a varázslat készen áll-e és nézd meg a `spellNames` között, hogy mely varázslatok elérhetőek. "
            },
            "pl": {
                "description": "Rzucić zaklęcie na cel. Aby sprawdzić, czy czar jest gotowy, i spojrzeć na `spellNames` aby zobaczyć które czary są dostępne, użyj `canCast`."
            },
            "sk": {
                "description": "Kúzlenie na cieľ. Použi `canCast` a zistíš, či je kúzlo pripravené. Pozri na `spellNames` a zistíš dostupné kúzla."
            },
            "nl-NL": {
                "description": "Spreek een spreuk uit over het doelwit. Gebruik `canCast` om te zien of de spreuk klaar is en kijk bij `spellNames` om te zien welke spreuken beschikbaar zijn."
            },
            "nb": {
                "description": "Kaster en trylleformel mot et mål. Bruk `canCast` (\"kan kaste?\") for å sjekke om n formel er klar, og bruk `spellNames` for å se hvilke formeler som er tilgjengelige."
            },
            "zh-HANS": {
                "description": "向目标施放技能.用`canCast`来确认技能是否可用, 然后通过`spellNames`来确认可以使用的技能."
            },
            "lt": {
                "description": "Panaudoti burtus prieš taikinį. Naudokite  `canCast` metodą, kad žinotumėte ar burtą galima naudoti, ir peržiūrėk  `spellNames` ,kad žintumei, kuriuos burtu galim naudoti.."
            },
            "pt-BR": {
                "description": "Lance um feitiço num alvo. Use `canCast` para ver se o feitiço está pronto e olhe em `spellNames` para ver quais feitiços estão disponíveis."
            },
            "es-ES": {
                "description": "Lanzar un hechizo a un objetivo. Usa `canCast` para ver si el hechizo está listo, y mira ` spellNames` para ver qué hechizos están disponibles."
            },
            "de-DE": {
                "description": "Wende eine Fähigkeit auf ein Ziel an. Benutze `canCast` um zu sehen, ob diese Fähigkeit bereit ist und siehe dir `spellNames` an um zu sehen welche Fähigkeiten verfügbar sind."
            },
            "sv": {
                "description": "Kasta en besvärjelse mot målet. Använd `canCast` för att se om besvärjelsen är redo, och titta på `spellNames` för att see vilka besvärjelser som är tillgängliga."
            },
            "fr": {
                "description": "Lance un sort sur une cible. Utilisez `canCast` pour voir si le sort est prêt et regardez les `spellNames` pour savoir quels sorts sont disponibles."
            },
            "nn": {
                "description": "Kast ein magi mot eit mål. Bruk `canCast` for å sjekka om magien er klar, og sjå på `spellNames`for å sjå kva magiar som er tilgjenelege. "
            },
            "gl": {
                "description": "Invocar un feitizo nun destinatario. Usar `canCast` para ver si o feitizo está preparado e mirar en `spellNames` para ver os feitizos dispoñibles."
            },
            "ru": {
                "description": "Накладывает заклинание на цель. Используйте `canCast` чтобы проверить готовность заклинания, и `spellNames` чтобы узнать доступные заклинания."
            },
            "tr": {
                "description": "Bir hedefe büyü yap. Büyünün hazır olup olmadığını görmek için `canCast` ve yapılacak büyüleri görmek için `spellNames`a bak."
            },
            "-": {
                "-": "-"
            }
        },
        "args": [
            {
                "i18n": {
                    "fi": {
                        "description": "Taian nimi jonka haluat taikoa."
                    },
                    "da": {
                        "description": "Navn på besværgelse at kaste."
                    },
                    "sr": {
                        "description": "Ime carolije za izvesti."
                    },
                    "es-419": {
                        "description": "El nombre del hechizo a lanzar."
                    },
                    "cs": {
                        "description": "Jméno kouzela, která chceš seslat."
                    },
                    "ca": {
                        "description": "El nom de l'encanteri a llançar."
                    },
                    "bg": {
                        "description": "Името на магията, която ще се прави."
                    },
                    "el": {
                        "description": "Το όνομα του ξορκιού που θα χρησιμοποιήσεις."
                    },
                    "ro": {
                        "description": "Numele vrăjii pe care o invoci."
                    },
                    "id": {
                        "description": "Nama mantera untuk digunakan."
                    },
                    "uk": {
                        "description": "Назва заклинання, що буде застосовуватись."
                    },
                    "ja": {
                        "description": "使う魔法の名前。"
                    },
                    "it": {
                        "description": "Il nome dell'incantesimo da lanciare."
                    },
                    "hu": {
                        "description": "A varázslat neve. "
                    },
                    "pl": {
                        "description": "Nazwa zaklęcia do użycia."
                    },
                    "sk": {
                        "description": "Meno kúzla."
                    },
                    "nl-NL": {
                        "description": "De naam van de uit te spreken spreuk."
                    },
                    "nb": {
                        "description": "Navnet på trylleformelen som skal kastes."
                    },
                    "zh-HANS": {
                        "description": "施放的技能的名字."
                    },
                    "lt": {
                        "description": "Burtų pavadinnimas, kurį naudosi."
                    },
                    "pt-BR": {
                        "description": "O nome do feitiço a ser lançado."
                    },
                    "es-ES": {
                        "description": "El nombre del hechizo a lanzar."
                    },
                    "de-DE": {
                        "description": "Der Name der anzuwendenden Fähigkeit."
                    },
                    "sv": {
                        "description": "Namnet på besvärjelsen att kasta."
                    },
                    "fr": {
                        "description": "Le nom du sort à lancer."
                    },
                    "gl": {
                        "description": "O nome do feitizo a invocar."
                    },
                    "ru": {
                        "description": "Название заклинания."
                    },
                    "tr": {
                        "description": "Yapılacak büyünün adı"
                    },
                    "-": {
                        "-": "-"
                    }
                },
                "description": "The name of the spell to cast.",
                "example": "\"drain-life\"",
                "type": "string",
                "name": "spell"
            },
            {
                "i18n": {
                    "fi": {
                        "description": "Joukko, johon haluat taikoa taian."
                    },
                    "da": {
                        "description": "Enhed at kaste besværgelse på."
                    },
                    "sr": {
                        "description": "Jedinica na kojoj se carolija izvodi."
                    },
                    "es-419": {
                        "description": "La unidad para lanzar el hechizo."
                    },
                    "cs": {
                        "description": "Jednotka, kterou chceš začarovat."
                    },
                    "ca": {
                        "description": "La unitat sobre la qual es llança l'encanteri."
                    },
                    "bg": {
                        "description": "Единицата, на която ще се прави магия."
                    },
                    "el": {
                        "description": "Το όνομα της ομάδας εχθρών που θα ρίξεις το ξόρκι."
                    },
                    "id": {
                        "description": "Unit untuk melemparkan mantera."
                    },
                    "ro": {
                        "description": "Unitatea asupra careia se invocă vraja."
                    },
                    "uk": {
                        "description": "Об'єкт, до якого застосовується заклинання."
                    },
                    "ja": {
                        "description": "魔法のターゲット。"
                    },
                    "it": {
                        "description": "L'unità su cui lanciare l'incantesimo."
                    },
                    "hu": {
                        "description": "A varázslat célpontjának neve. "
                    },
                    "pl": {
                        "description": "Jednostka do użcia czaru."
                    },
                    "sk": {
                        "description": "Cieľ kúzla."
                    },
                    "nl-NL": {
                        "description": "De eenheid waarover de spreuk wordt uitgesproken."
                    },
                    "nb": {
                        "description": "Hvem (eller hva) trylleformelen skal kastes på."
                    },
                    "zh-HANS": {
                        "description": "被施放技能的对象."
                    },
                    "lt": {
                        "description": "Objektas/viekėjas, kurį reikia užburti(apkerėti)"
                    },
                    "pt-BR": {
                        "description": "A unidade alvo para lançar o feitiço."
                    },
                    "es-ES": {
                        "description": "La unidad sobre la cual se lanzara el hechizo."
                    },
                    "de-DE": {
                        "description": "Die Einheit auf welche die Fähigkeit angwendet werden soll."
                    },
                    "sv": {
                        "description": "Målet som besvärjelsen skall kastas mot."
                    },
                    "fr": {
                        "description": "L'unité sur laquelle lancer le sort."
                    },
                    "nn": {
                        "description": ""
                    },
                    "gl": {
                        "description": "A unidades sobre a que invocar o feitizo."
                    },
                    "ru": {
                        "description": "Единица на которую накладывается заклинание."
                    },
                    "tr": {
                        "description": "Büyünün yapılacağı birim"
                    },
                    "-": {
                        "-": "-"
                    }
                },
                "description": "The unit to cast the spell on.",
                "example": {
                    "io": "findNearestEnemy",
                    "lua": "self:findNearestEnemy()",
                    "clojure": "(.findNearestEnemy this)",
                    "coffeescript": "@findNearestEnemy()",
                    "python": "self.findNearestEnemy()",
                    "javascript": "this.getNearestEnemy()"
                },
                "type": "object",
                "name": "target"
            }
        ],
        "description": "Cast a spell at a target. Use `canCast` to see whether the spell is ready, and look at `spellNames` to see which spells are available.",
        "type": "function",
        "name": "cast"
    }
]