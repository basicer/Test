[
    {
        "snippets": {
            "clojure": {
                "code": "(.actions this)"
            },
            "lua": {
                "tab": "actions",
                "code": "self:actions"
            },
            "python": {
                "tab": "actions",
                "code": "self.actions"
            },
            "coffeescript": {
                "tab": "actions",
                "code": "@actions"
            },
            "javascript": {
                "tab": "actions",
                "code": "this.actions"
            }
        },
        "description": "The #{spriteName}'s available actions.",
        "type": "object",
        "name": "actions"
    },
    {
        "snippets": {
            "clojure": {
                "tab": "action",
                "code": ""
            },
            "lua": {
                "tab": "action",
                "code": "self:action"
            },
            "coffeescript": {
                "tab": "action",
                "code": "@action"
            },
            "python": {
                "tab": "action",
                "code": "this.action"
            },
            "javascript": {
                "tab": "action",
                "code": "this.action"
            }
        },
        "owner": "this",
        "description": "The current action the #{spriteName} is running.",
        "type": "string",
        "name": "action"
    },
    {
        "snippets": {
            "clojure": {
                "tab": "setAction",
                "code": ""
            },
            "python": {
                "tab": "setAction",
                "code": "self.setAction(${1:'move'})"
            },
            "coffeescript": {
                "tab": "setAction",
                "code": "@setAction ${1:'move'}"
            },
            "javascript": {
                "code": "this.setAction(${1:'move'})",
                "tab": "setAction"
            }
        },
        "args": [
            {
                "default": "",
                "description": "The action to perform.",
                "example": "\"move\"",
                "type": "string",
                "name": "action"
            }
        ],
        "description": {
            "coffeescript": "Sets the action that the #{spriteName} is running. Only action names in `@actions` are valid.\n",
            "javascript": "Sets the action that the #{spriteName} is running. Only action names in `this.actions` are valid.\n",
            "python": "Sets the action that the #{spriteName} is running. Only action names in `self.actions` are valid."
        },
        "type": "function",
        "name": "setAction"
    },
    {
        "owner": "this",
        "description": {
            "clojure": "The `chooseAction` method is run every frame, allowing the #{spriteName} a chance to look at the world and decide what action to pursue this frame.\n\nTo see available actions, hover over the `actions` property below. To choose an action, say `attack`, you can write: `(.setAction this \"attack\")`",
            "python": "The `chooseAction` method is run every frame, allowing the #{spriteName} a chance to look at the world and decide what action to pursue this frame.\n\nTo see available actions, hover over the `actions` property below. To choose an action, say `attack`, you can write: `self.setAction('attack')`",
            "javascript": "\nThe `chooseAction` method is run every frame, allowing the #{spriteName} a chance to look at the world and decide what action to pursue this frame.\n\nTo see available actions, hover over the `actions` property below. To choose an action, say `attack`, you can write: `this.setAction('attack');`"
        },
        "type": "function",
        "name": "chooseAction"
    },
    {
        "snippets": {
            "io": {
                "tab": "findCooldown",
                "code": "findCooldown(\"${1:action}\")"
            },
            "lua": {
                "tab": "findCooldown",
                "code": "self:findCooldown(\"${1:action}\")"
            },
            "coffeescript": {
                "tab": "findCooldown",
                "code": "@findCooldown \"${1:action}\""
            },
            "clojure": {
                "tab": "findCooldown",
                "code": "(.findCooldown this \"${1:action}\")"
            },
            "python": {
                "tab": "findCooldown",
                "code": "self.findCooldown(\"${1:action}\")"
            },
            "javascript": {
                "tab": "findCooldown",
                "code": "this.findCooldown(\"${1:action}\")"
            }
        },
        "returns": {
            "type": "number"
        },
        "args": [
            {
                "description": "The action for which to check the cooldown.",
                "example": "\"warcry\"",
                "type": "string",
                "name": "action"
            }
        ],
        "description": "Returns the time in seconds until the given `action` can be used again.",
        "type": "function",
        "name": "findCooldown"
    },
    {
        "userShouldCaptureReturn": {
            "variableName": "ready"
        },
        "example": {
            "io": "if(isReady(\"cleave\")) then(\n    cleave(enemy)\n) else(\n    attack(enemy)\n)",
            "lua": "if self:isReady(\"cleave\") then\n    self:cleave(enemy)\nelse\n    self:attack(enemy)\nend",
            "clojure": "(if (.isReady this \"cleave\")\n    (.cleave this enemy)\n    (.attack this enemy))",
            "coffeescript": "if @isReady \"cleave\"\n    @cleave enemy\nelse\n    @attack enemy",
            "python": "if self.isReady(\"cleave\"):\n    self.cleave(enemy)\nelse:\n    self.attack(enemy)",
            "javascript": "if (this.isReady(\"cleave\")) {\n    this.cleave(enemy);\n} else {\n    this.attack(enemy);\n}"
        },
        "i18n": {
            "sr": {
                "description": "Vraća vrednost kada je zadata \"akcija\" ponovo spremna za upotrebu"
            },
            "el": {
                "description": "Επιστρέφει ως τιμή εάν η ζητουμένη `ενέργεια` μπορεί να χρησιμοποιηθεί ξανά"
            },
            "he": {
                "description": "בודקת האם 'action' מוכנה שוב לשימוש."
            },
            "da": {
                "description": "Returnerer om en given 'handling' er klar til at blive brugt igen."
            },
            "ja": {
                "description": "指定された`action`が再び使用できる準備がととのっているかどうかを返します。"
            },
            "fa": {
                "description": "اینکه عمل مورد نظر آیا آماده استفاده مجدد است را بررسی می کند"
            },
            "es-419": {
                "description": "Devuelve si la `action` esta listo para usarse de nuevo."
            },
            "th": {
                "name": "isReady",
                "description": "ส่งคืนค่าว่า `action` พร้อมที่จะใช้งานแล้วหรือไม่"
            },
            "pl": {
                "description": "Zwraca czy podana akcja `action` jest gotowa do ponownego użycia."
            },
            "ro": {
                "description": "Returneaza chiar daca 'action' e pregatita sa fie folosita din nou."
            },
            "fi": {
                "name": "onValmis",
                "description": "Palauttaa tiedon onko annettu 'action' käytettävissä uudelleen."
            },
            "de-CH": {
                "description": "Git zrugg, ob ä bstimmti Aktion wieder bereit isch zum gstartet werdä."
            },
            "bg": {
                "description": "Връща дали даденото \"действие\" е готово да бъде използвано отново."
            },
            "ca": {
                "description": "Retorna si la 'acció' està llesta per utilitzar-la de nou."
            },
            "ko": {
                "description": "주어진 'action'을 사용할 수 있는지에 대한 상태를 반환합니다. "
            },
            "zh-HANT": {
                "description": "回目標`動作`能不能使用。"
            },
            "nl-NL": {
                "description": "Geeft aan of de betreffende 'actie' weer kan worden gebruikt."
            },
            "it": {
                "description": "Riporta se l'azione `action` è pronta per essere usata di nuovo."
            },
            "nl-BE": {
                "description": "Toont of de opgegeven 'actie' al terug gebruikt kan worden."
            },
            "id": {
                "description": "Mengembalikan jika `action` yang telah diberikan siap untuk digunakan lagi."
            },
            "ar": {
                "description": "يؤكد على امكانية استخدام الخطوة المختارة سابقا مرة أخرى"
            },
            "lt": {
                "description": "Komanda parodo ar nurodytas veiksmas `action` gali būti naudojamas."
            },
            "nb": {
                "name": "erKlar",
                "description": "Returnerer sant hvis den oppgitte `action` (handling) er klar til å brukes igjen."
            },
            "de-DE": {
                "description": "Gibt an ob die jeweilige `action` (\"Aktion\") wieder bereit zur Nutzung ist."
            },
            "uk": {
                "description": "Повертає, чи готова певна дія (`action`) бути виконана знову."
            },
            "sk": {
                "description": "Vracia informáciu o tom či môže byť daná \"akcia\" použitá znova."
            },
            "zh-HANS": {
                "description": "返回 ‘动作’是否冷却可以再次使用。"
            },
            "pt-PT": {
                "name": "estáPronto",
                "description": "Devolve quando uma dada `action` está pronta para ser usada novamente."
            },
            "ru": {
                "description": "Возвращает, готово ли определенное действие (`action`) к очередному использованию."
            },
            "gl": {
                "description": "Indica si a `acción` dada está dispoñible para ser usada outra vez."
            },
            "pt-BR": {
                "description": "Retorna se a dada `action` está ou não pronta para ser utilizada novamente."
            },
            "sv": {
                "description": "Returnerar huruvida den givna `handlingen` är redo att användas igen."
            },
            "fr": {
                "description": "Indique si l'`action` donnée est prête à être à nouveau utilisée."
            },
            "hu": {
                "description": "Visszaad ha az adott akció `action` újra használható."
            },
            "es-ES": {
                "description": "Devuelve si la \"accion\" dada está lista para ser utilizada de nuevo."
            },
            "cs": {
                "description": "Vrací true, pokud je daná `action` připravena k opětovnému použití."
            },
            "tr": {
                "description": "Belirtilen 'action' tekrar kullanıma hazır olup olmadığını döndürür."
            },
            "-": {
                "-": "-"
            }
        },
        "args": [
            {
                "i18n": {
                    "th": {
                        "description": "Return whether the gave \"action\" is ready to be used again.   "
                    },
                    "fi": {
                        "description": "'action' joka tarkistaa valmiuden."
                    },
                    "es-419": {
                        "description": "La acción para comprobar la preparación."
                    },
                    "ar": {
                        "description": "النشاط الخاص بالتحقق من الاستعداد"
                    },
                    "nb": {
                        "description": "Handlingen som skal sjekkes om er klar."
                    },
                    "cs": {
                        "description": "Akce, kterou chceš zkontrolovat."
                    },
                    "sr": {
                        "description": "Akcija za koju treba proveriti spremnost."
                    },
                    "bg": {
                        "description": "Действието, за което да се провери готовност."
                    },
                    "el": {
                        "description": "Η ενέργεια για την οποία ελέγχεται η διαθεσιμότητα της."
                    },
                    "ko": {
                        "description": "준비 되었나를 반환할 'action'."
                    },
                    "ro": {
                        "description": "Actiunea pentru care sa se verifice daca poate fi folosita."
                    },
                    "tr": {
                        "description": "Hazır olma durumunu ölçen eylem"
                    },
                    "zh-HANS": {
                        "description": "检查是否准备完成。"
                    },
                    "hu": {
                        "description": "Az akció `action` amelyik ellenőrzi valaminek a készséget."
                    },
                    "he": {
                        "description": "הפעולה שצריך לבדוק אם היא מוכנה."
                    },
                    "pl": {
                        "description": "Akcja, której gotowość chcemy sprawdzić."
                    },
                    "de-DE": {
                        "description": "Die Aktion, deren Bereitschaft überprüft werden soll."
                    },
                    "lt": {
                        "description": "komanda patikrinimui dėl pasiruošmo"
                    },
                    "sk": {
                        "description": "Akcia, ktorej pripravenosť sa zisťuje."
                    },
                    "id": {
                        "description": "Tindakan di mana untuk memeriksa kesiapan."
                    },
                    "uk": {
                        "description": "Дія, для якої перевірити готовність."
                    },
                    "fr": {
                        "description": "L'action dont on veut tester la disponibilité"
                    },
                    "da": {
                        "description": "Handling til at kontrollere parathed."
                    },
                    "sv": {
                        "description": "Handling att kontrollera om den är redo."
                    },
                    "it": {
                        "description": "L'azione di cui testare la disponibilità."
                    },
                    "ja": {
                        "description": "準備状況を確認するためのアクション。"
                    },
                    "nl-NL": {
                        "description": "De actie waarvoor moet worden gecontroleerd of deze 'ready' is."
                    },
                    "es-ES": {
                        "description": "La acción para comprobar si se está listo."
                    },
                    "ru": {
                        "description": "Действие, готовность которого нужно проверять "
                    },
                    "ca": {
                        "description": "La acció que s'ha de comprovar si està llegida."
                    },
                    "pt-BR": {
                        "description": "A ação que verifica a prontidão"
                    },
                    "-": {
                        "-": "-"
                    }
                },
                "description": "The action for which to check readiness.",
                "example": "\"cleave\"",
                "type": "string",
                "name": "action"
            }
        ],
        "snippets": {
            "io": {
                "tab": "isReady",
                "code": "isReady(\"${1:cleave}\")"
            },
            "lua": {
                "tab": "isReady",
                "code": "self:isReady(\"${1:cleave}\")"
            },
            "coffeescript": {
                "tab": "isReady",
                "code": "@isReady \"${1:cleave}\""
            },
            "clojure": {
                "tab": "isReady",
                "code": "(.isReady this \"${1:cleave}\")"
            },
            "python": {
                "tab": "isReady",
                "code": "self.isReady(\"${1:cleave}\")"
            },
            "javascript": {
                "tab": "isReady",
                "code": "this.isReady(\"${1:cleave}\")"
            }
        },
        "returns": {
            "type": "boolean"
        },
        "description": "Returns whether the given `action` is ready to be used again.",
        "type": "function",
        "name": "isReady"
    },
    {
        "userShouldCaptureReturn": {
            "variableName": "cooldown"
        },
        "i18n": {
            "sr": {
                "description": "Daje vreme u sekundama do trenutka kada odredjena akcija moze biti ponovo koriscena."
            },
            "el": {
                "description": "Επιστρέφει το χρόνο σε δευτερόλεπτα ως ότου η συγκεκριμένη `ενέργεια` μπορεί να χρησιμοποιηθεί ξανά"
            },
            "he": {
                "description": "בודקת בשניות את הזמן שנותר לטעינת הפעולה."
            },
            "da": {
                "description": "Returnerer antal sekunder før en given 'handling' kan bruges igen."
            },
            "ja": {
                "description": "指定された`action`が再び使用できるまでの秒数を返します。"
            },
            "fa": {
                "description": "زمان را با واحد ثانیه بازگشت می دهد تا زمانی که عمل مورد نظر دوباره قابل استفاده شود"
            },
            "es-419": {
                "description": "Devuelve el tiempo en segundos hasta que el dado `action` puede ser utilizado de nuevo."
            },
            "th": {
                "name": "getcooldown",
                "description": "ส่งคืนค่าเวลาในหน่วยวินาทีจนกระทั่ง `action` จะสามารถใช้ได้อีกครั้ง"
            },
            "pl": {
                "description": "Zwraca w sekundach czas, po którym będzie można ponownie użyć akcji `action`."
            },
            "ro": {
                "description": "Returneaza timpul in secunde pana cand 'action' se poate folosi din nou."
            },
            "fi": {
                "name": "haeJaahyAika",
                "description": "Palauttaa ajan sekunneissa kunnes 'action' voidaan suorittaa uudelleen."
            },
            "de-CH": {
                "description": "Git d'Ziit in Sekundä zrugg bis ä bstimmti Aktion wieder chan gstartet werdä."
            },
            "bg": {
                "description": "Връща времето в секунди, необходимо докато даденото \"действие\" може да се използва отново."
            },
            "ca": {
                "description": "Retorna el temps en segons fins que la 'acció' pugui ser utilitzada de nou."
            },
            "ko": {
                "description": "주어진 'action'을 다시 사용할 수 있을 때 까지의 초 단위의 시간을 반환합니다."
            },
            "vi": {
                "description": "Trả về thời gian tính bằng giây cho tới khi `action` được sử dụng lại"
            },
            "zh-HANT": {
                "description": "回目標`動作`幾秒鐘後能再次使用。"
            },
            "nl-NL": {
                "description": "Geeft aan hoeveel seconden het duurt voordat de betreffende 'actie' weer kan worden gebruikt."
            },
            "it": {
                "description": "Restituisce il tempo in secondi prima che l'azione `action` possa essere usata di nuovo."
            },
            "nl-BE": {
                "description": "Toont de tijd in seconden tot het moment dat de opgegeven 'actie' weer gebruikt kan worden."
            },
            "id": {
                "description": "Mengembalikan waktu dalam beberapa detik hingga `action` yang telah diberikan dapat digunakan lagi."
            },
            "ar": {
                "description": "يحسب الوقت بالثوانى اللازمة لامكانية اعادة استخدام الخطوة المختارة سابقا مرة أخرى"
            },
            "lt": {
                "description": "Komanda parodo laiką sekundėmis, kada  nurodytas veiksmas `action` vėl galės būti panaudotas."
            },
            "nb": {
                "description": "Returnerer tid i sekunder til oppgitte `action` (handling) kan brukes igjen."
            },
            "de-DE": {
                "description": "Gibt die Zeit in Sekunden an bis die jeweilige `action` (\"Aktion\") wieder benutzt werden kann."
            },
            "uk": {
                "description": "Повертає час у секундах, когда певна дія (`action`) може бути виконана знову."
            },
            "sk": {
                "description": "Vracia čas, v sekundách, za ktorý môže byť daná \"akcia\" použitá znova."
            },
            "zh-HANS": {
                "description": "返回时间值（秒），直到命令‘动作’冷却 可以再次使用。"
            },
            "pt-PT": {
                "description": "Devolve o tempo, em segundos, até que uma dada `action` possa ser usada novamente."
            },
            "ru": {
                "description": "Возвращает время в секундах до момента, когда определенное действие (`action`) снова может быть использовано."
            },
            "gl": {
                "description": "Devolve o tempo en segundos ata que a `acción` dada poida usarse outra vez."
            },
            "pt-BR": {
                "description": "Retorna o tempo em segundos até que a dada `action` possa ser utilizada novamente."
            },
            "sv": {
                "description": "Returnerar antalet sekunder innan den angivna `handlingen` kan användas igen."
            },
            "fr": {
                "description": "Donne la durée en secondes avant que l'`action` donnée puisse être utilisée à nouveau."
            },
            "hu": {
                "description": "Visszaadja az időt másodpercben, amíg az adott `action` ismét felhasználható."
            },
            "es-ES": {
                "description": "Devuelve el tiempo en segundos hasta que la \"accion\" dada puede ser utilizada de nuevo."
            },
            "cs": {
                "description": "Vrací čas ve vteřinách vyjadřující dobu, za kterou může být daná `action` znovu použita."
            },
            "tr": {
                "description": "Belirtilen 'action' tekrar kullanılabilmesi için gereken süreyi sn olarak döndürür"
            },
            "-": {
                "-": "-"
            }
        },
        "returns": {
            "type": "number"
        },
        "snippets": {
            "io": {
                "code": "getCooldown(\"${1:action}\")",
                "tab": "getCooldown"
            },
            "lua": {
                "code": "self:getCooldown(\"${1:action}\")",
                "tab": "getCooldown"
            },
            "clojure": {
                "code": "(.getCooldown this \"${1:action}\")",
                "tab": "getCooldown"
            },
            "coffeescript": {
                "code": "@getCooldown \"${1:action}\"",
                "tab": "getCooldown"
            },
            "javascript": {
                "tab": "getCooldown",
                "code": "this.getCooldown(\"${1:action}\")"
            },
            "python": {
                "code": "self.getCooldown(\"${1:action}\")",
                "tab": "getCooldown"
            }
        },
        "args": [
            {
                "i18n": {
                    "th": {
                        "description": "The action for which to check the cooldown."
                    },
                    "fi": {
                        "description": "'action' jolla voi tarkistaa toiminnon jäähy-ajan."
                    },
                    "es-419": {
                        "description": "La acción para comprobar el tiempo de reutilización."
                    },
                    "ar": {
                        "description": "النشاط الخاص بالتحقق من انه قد أصبح باردا"
                    },
                    "cs": {
                        "description": "Akce, pro kterou chceš zkontrolovat znovupoužití."
                    },
                    "sr": {
                        "description": "Akcija za koju je potrebno proveriti cooldown."
                    },
                    "bg": {
                        "description": "Действието, за което да се провери оставащото време за презареждане."
                    },
                    "el": {
                        "description": "Η ενέργεια για την οποία ελέγχεται ο χρόνος που απαιτείται για να ξαναχρησιμοποιηθεί"
                    },
                    "ko": {
                        "description": "다시 사용할 수 있을 때 까지의 초 단위를 반환할 'action'"
                    },
                    "ro": {
                        "description": "Actiunea careia sa i se verifice cooldown-ul"
                    },
                    "tr": {
                        "description": "Sakinleşmeyi kontrol eden eylem"
                    },
                    "zh-HANS": {
                        "description": "检查冷却时间。"
                    },
                    "hu": {
                        "description": "Az akció `action` amelyik ellenőrzi valaminek az ujratöltését."
                    },
                    "he": {
                        "description": "הפעולה שצריך לבדוק אם נטענה."
                    },
                    "pl": {
                        "description": "Akcja, dla której chcemy sprawdzić czas do uzyskania gotowości."
                    },
                    "de-DE": {
                        "description": "Die Aktion für die das Abklingen überprüft werden soll."
                    },
                    "lt": {
                        "description": "Komanda su kuria tikrinama galimybė kažkuo pasinaudoti"
                    },
                    "sk": {
                        "description": "Akcia, pre ktorú sa zisťuje uspokojenie."
                    },
                    "id": {
                        "description": "Tindakan di mana untuk memeriksa pendinginan."
                    },
                    "fr": {
                        "description": "L'action dont on veut connaitre le temps avant disponibilité."
                    },
                    "uk": {
                        "description": "Дія, для якої перевірити відкат."
                    },
                    "da": {
                        "description": "Handling til at kontrollere nedkøling."
                    },
                    "sv": {
                        "description": "Vilken handling som ska undersökas."
                    },
                    "it": {
                        "description": "L'azione di cui testare il tempo di attesa."
                    },
                    "ja": {
                        "description": "クールダウンを確認するためのアクション。"
                    },
                    "nl-NL": {
                        "description": "De actie waarvoor de 'cooldown' moet worden gecontroleerd."
                    },
                    "ru": {
                        "description": "Действие, время готовности которого нужно проверить."
                    },
                    "es-ES": {
                        "description": "La accion para comprobar el enfriamiento "
                    },
                    "ca": {
                        "description": "La acció de la que s'ha de comprovar el refredament."
                    },
                    "pt-BR": {
                        "description": "A ação que verifica o tempo de espera."
                    },
                    "-": {
                        "-": "-"
                    }
                },
                "description": "The action for which to check the cooldown.",
                "example": "\"warcry\"",
                "type": "string",
                "name": "action"
            }
        ],
        "description": "Returns the time in seconds until the given `action` can be used again.",
        "type": "function",
        "name": "getCooldown"
    }
]