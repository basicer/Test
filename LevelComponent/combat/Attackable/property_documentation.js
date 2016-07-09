[
    {
        "context": {
            "fight": "Health is fine. Fight!",
            "retreat": "Health is low–retreat!"
        },
        "example": {
            "io": "if(health < 200) then(\n    // <%= retreat %>\n    moveXY(61, 46)\n) else(\n    // <%= fight %>\n    attack(enemy)\n)",
            "lua": "if self.health < 200 then\n    -- <%= retreat %>\n    self:moveXY(61, 46)\nelse\n    -- <%= fight %>\n    self:attack(enemy)\nendif",
            "clojure": "(if (< (.health this) 200)\n    ;; <%= retreat %>\n    (.moveXY this 61 46)\n    \n    ;; <%= fight %>\n    (.attack this enemy))",
            "python": "if self.health < 200:\n    # <%= retreat %>\n    self.moveXY(61, 46)\nelse:\n    # <%= fight %>\n    self.attack(enemy)",
            "coffeescript": "if @health < 200\n    # <%= retreat %>\n    @moveXY 61, 46\nelse\n    # <%= fight %>\n    @attack enemy",
            "javascript": "if (this.health < 200) {\n    // <%= retreat %>\n    this.moveXY(61, 46);\n}\nelse {\n    // <%= fight %>\n    this.attack(enemy);\n}"
        },
        "i18n": {
            "fa": {
                "context": {
                    "fight": "خون کافیست. بجنگ!",
                    "retreat": "خون کم است!"
                },
                "description": "مقدار خونی که #{spriteName} از دست داد.",
                "name": "خون"
            },
            "fi": {
                "context": {
                    "fight": "Terveytesi on kelvollinen. Taistele!",
                    "retreat": "Terveytesi on huono, peräänny!"
                },
                "description": "Kuinka monta terveyspistettä #{spriteName}llä on jäljellä.",
                "name": "terveys"
            },
            "sr": {
                "context": {
                    "fight": "Zivotni bodovi su uredu. U borbu!",
                    "retreat": "Zivotni bodovi su na niskom nivou! Povlacenje"
                },
                "description": "Koliko zivotnih poena #{spriteName} je preostalo"
            },
            "es-419": {
                "context": {
                    "fight": "La salud está muy bien. ¡Lucha!",
                    "retreat": "La salud esta en baja!"
                },
                "description": "Cuántos puntos de salud de #{spriteName} ha dejado."
            },
            "he": {
                "context": {
                    "fight": "!הבריאות היא טובה, הילחם",
                    "retreat": "!הבריאות נמצאת ברמה נמוכה"
                },
                "description": "#{spriteName} - כמה נקודות בריאות נשארו לדמות"
            },
            "bg": {
                "context": {
                    "fight": "Здравето е на добро ниво. Бий се!",
                    "retreat": "Здравето е на ниско ниво - отстъпление!"
                },
                "description": "Колко точки здраве има #{spriteName} останали."
            },
            "ko": {
                "description": "얼마나 많은 체력 점수가  #{spriteName} 한테 남았는지 알려준다.",
                "context": {
                    "fight": "체력이 충분하다. 싸워라!",
                    "retreat": "체력이 낮다-도망쳐라!"
                }
            },
            "ca": {
                "context": {
                    "fight": "La teva salut és bona. Lluita!",
                    "retreat": "La teva salut és baixa-retira't!"
                },
                "description": "Quants punts de salut li queden a #{spritename}."
            },
            "el": {
                "context": {
                    "fight": "Η ζωτική σου ενεέργεια είναι εντάξει - Δώσε μάχη!",
                    "retreat": "Η ζωτική σου ενεέργεια είναι χαμηλή - Υποχώρηση!"
                },
                "description": "Πόσους πόντους ζωτικής ενέργειας, έχουν απομείνει στον ήρωα μας."
            },
            "da": {
                "context": {
                    "fight": "Godt med liv. Kæmp!",
                    "retreat": "Lavt liv. Træk tilbage!"
                },
                "description": "Hvor mange livspoint den givne #{spriteName} har tilbage."
            },
            "ja": {
                "description": "#{spriteName}はどのくらいHPが残っているか。"
            },
            "it": {
                "description": "Quanti punti salute sono rimasti a #{spriteName}."
            },
            "ro": {
                "description": "Câte puncte de sănătate #{spriteName} mai are."
            },
            "hu": {
                "description": "Mennyi életpontja maradt a #{spriteName}."
            },
            "nl-NL": {
                "description": "Hoeveel levens de #{spriteName} over heeft."
            },
            "pl": {
                "description": "Jak dużo punktów życia zostało #{spriteName}"
            },
            "sk": {
                "description": "Koľko zdravia  zostáva hrdinovi."
            },
            "zh-HANT": {
                "context": {
                    "fight": "生命值是滿的，攻擊！",
                    "retreat": "生命值低下-撤退！"
                },
                "name": "生命",
                "description": " #{spriteName}剩下生命值"
            },
            "lt": {
                "context": {
                    "fight": "Sveikata tvarkoje. Kaukis!",
                    "retreat": "Mažai gyvybės taškų - traukis!"
                },
                "description": "Likęs #{spriteName} gyvybių skaičius"
            },
            "uk": {
                "description": "Скільки життя залишилось у #{spriteName}"
            },
            "id": {
                "description": "Banyaknya poin kesehatan milik #{spriteName} yang tersisa"
            },
            "ar": {
                "description": "كم عدد نقاط الصحة المتبقية ل #{spriteName}"
            },
            "cs": {
                "context": {
                    "fight": "Plno životů. Bojuj!",
                    "retreat": "Málo životů - uteč!"
                },
                "description": "Kolik bodů životů zbývá danému #{spriteName}."
            },
            "nb": {
                "context": {
                    "fight": "Helsen er bra. Kjemp!",
                    "retreat": "Helsen er dårlig - gjør retrett!"
                },
                "description": "Hvor mange helsepoeng #{spriteName} har igjen."
            },
            "de-DE": {
                "context": {
                    "fight": "Deine Gesundheit ist in Ordnung. Kämpfe!",
                    "retreat": "Deine Gesundheit ist gering. Rückzug!"
                },
                "description": "Wieviele Gesundheitspunkte #{spriteName} noch übrig hat."
            },
            "pt-BR": {
                "context": {
                    "fight": "Sua vida está boa. Lute!",
                    "retreat": "Pontos de vida baixo-recuar!"
                },
                "description": "A quantidade de pontos de vida que #{spriteName} ainda possui."
            },
            "gl": {
                "description": "Cantos puntos de vida lle quedan a #{spriteName}."
            },
            "zh-HANS": {
                "description": "#{spriteName} 剩余体力"
            },
            "ru": {
                "context": {
                    "fight": "Со здоровьем всё в порядке. Дерись!",
                    "retreat": "Здоровья мало -- отступай!"
                },
                "description": "Оставшееся количество очков жизни #{spriteName}"
            },
            "vi": {
                "description": "Lượng sức khoẻ còn lại"
            },
            "fr": {
                "context": {
                    "fight": "Votre vie est revenue. A l'attaque !",
                    "retreat": "Votre vie est faible - Retraite !!!"
                },
                "description": "Nombre de points de vie que le #{spriteName} à perdus."
            },
            "sv": {
                "description": "Hur mycket hälsa #{spriteName} har kvar."
            },
            "es-ES": {
                "description": "Cuántos puntos de salud ha dejado #{spriteName}"
            },
            "tr": {
                "context": {
                    "retreat": "Sağlık az-geri çekil!",
                    "fight": "Sağlık normal. Savaş!"
                },
                "description": "Karakterin (#{spriteName}) ne kadar sağlığı kaldığı"
            },
            "pt-PT": {
                "name": "vida",
                "description": "Quantos pontos de vida #{spriteName} ainda tem."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "health",
                "code": "health"
            },
            "lua": {
                "tab": "health",
                "code": "self.health"
            },
            "clojure": {
                "tab": "health",
                "code": "(.health this)"
            },
            "python": {
                "tab": "health",
                "code": "self.health"
            },
            "coffeescript": {
                "tab": "health",
                "code": "@health"
            },
            "javascript": {
                "tab": "health",
                "code": "this.health"
            }
        },
        "description": "How many health points the #{spriteName} has left.",
        "type": "number",
        "name": "health"
    },
    {
        "example": {
            "io": "if(health < maxHealth / 3) then(\n    // <%= retreat %>\n    moveXY(61, 46)\n) else(\n    // <%= fight %>\n    attack(enemy)\n)",
            "lua": "if self.health < self.maxHealth / 3 then\n    -- <%= retreat %>\n    self:moveXY(61, 46)\nelse\n    -- <%= fight %>\n    self:attack(enemy)\nendif",
            "clojure": "(if (< (.health this) (/ (.maxHealth this) 3))\n    ;; <%= retreat %>\n    (.moveXY this 61 46)\n    \n    ;; <%= fight %>\n    (.attack this enemy))",
            "python": "if self.health < self.maxHealth / 3:\n    # <%= retreat %>\n    self.moveXY(61, 46)\nelse:\n    # <%= fight %>\n    self.attack(enemy)",
            "coffeescript": "if @health < @maxHealth / 3\n    # <%= retreat %>\n    @moveXY 61, 46\nelse\n    # <%= fight %>\n    @attack enemy",
            "javascript": "if (this.health < this.maxHealth / 3) {\n    // <%= retreat %>\n    this.moveXY(61, 46);\n}\nelse {\n    // <%= fight %>\n    this.attack(enemy);\n}"
        },
        "context": {
            "fight": "Health is fine. Fight!",
            "retreat": "Health is low–retreat!"
        },
        "i18n": {
            "fa": {
                "context": {
                    "fight": "خون کافیست. بجنگ!",
                    "retreat": "خون کم است!"
                },
                "description": "مقدار خونی که #{spriteName} با آن شروع کرده",
                "name": "خون پر است."
            },
            "fi": {
                "context": {
                    "fight": "Terveytesi on kelvollinen. Taistele!",
                    "retreat": "Terveytesi on huono, peräänny!"
                },
                "description": "Kuinka monta terveyspisteellä #{spriteName} aloittaa.",
                "name": "maksimiTerveys"
            },
            "sr": {
                "context": {
                    "fight": "Zivotni bodovi su uredu. U borbu!",
                    "retreat": "Zivotni bodovi su na niskom nivou! Povlacenje"
                },
                "description": "Sa koliko zivotnih bodova #{spriteName} pocinje?"
            },
            "es-419": {
                "context": {
                    "fight": "La salud está muy bien. ¡Lucha!",
                    "retreat": "La salud esta en baja!"
                },
                "description": "Cuántos puntos de salud del #{spriteName} comienza con."
            },
            "he": {
                "context": {
                    "fight": "!הבריאות היא טובה, הילחם",
                    "retreat": "!הבריאות נמצאת ברמה נמוכה"
                },
                "description": "#{spriteName}-כמה נקודות בריאות יש ל "
            },
            "bg": {
                "context": {
                    "fight": "Здравето е на добро ниво. Бий се!",
                    "retreat": "Здравето е на ниско ниво - отстъпление!"
                },
                "description": "С колко точки здраве започва #{spriteName}."
            },
            "ko": {
                "context": {
                    "fight": "체력이 충분하다. 싸워라!",
                    "retreat": "체력이 낮다-도망쳐라!"
                },
                "description": "얼마나 많은 체력 점수로 #{spriteName} 이 시작되는지를 알려준다."
            },
            "ca": {
                "context": {
                    "fight": "La teva salut és bona. Lluita!",
                    "retreat": "La teva salut és baixa-retira`t!"
                },
                "description": "Amb quants punts de vida comença el #{spriteName}"
            },
            "el": {
                "context": {
                    "fight": "Η ζωτική σου ενεέργεια είναι εντάξει - Δώσε μάχη!",
                    "retreat": "Η ζωτική σου ενεέργεια είναι χαμηλή - Υποχώρηση!"
                },
                "description": "Πόσους πόντους ζωτικής ενέργειας, έχει ο ήρωας μας όταν ξεκινά."
            },
            "da": {
                "context": {
                    "retreat": "Lavt liv. Træk tilbage!",
                    "fight": "Godt med liv. Kæmp!"
                },
                "description": "Hvor mange livspoint den givne #{spriteName} starter med."
            },
            "ja": {
                "description": "#{spriteName}のHPはいくつから始まるか。"
            },
            "it": {
                "description": "Qual'è il valore iniziale di punti salute di #{spriteName} (salute massima)."
            },
            "ro": {
                "description": "Cu câte puncte de sănătate #{spriteName} începe."
            },
            "hu": {
                "description": "Mennyi életponttal kezd a #{spriteName}."
            },
            "nl-NL": {
                "description": "Hoeveel levens de #{spriteName} mee start."
            },
            "pl": {
                "description": "Z jaką liczba punktów rozpocząłeś #{spriteName}"
            },
            "sk": {
                "description": "S akým zdravím hrdina začínal."
            },
            "lt": {
                "context": {
                    "fight": "Sveikata tvarkoje. Kaukis!",
                    "retreat": "Mažai gyvybės taškų - traukis!"
                },
                "description": "Pradinis #{spriteName} gyvybių skaičius"
            },
            "uk": {
                "description": "Кількість життя, з якою #{spriteName} розпочинає"
            },
            "id": {
                "description": "Banyaknya poin kesehatan maksimal milik #{spriteName} "
            },
            "zh-HANT": {
                "context": {
                    "fight": "生命值是滿的，攻擊！",
                    "retreat": "生命值低下-撤退！"
                },
                "name": "最大生命值",
                "description": " #{spriteName}初始生命值"
            },
            "ar": {
                "description": "كم عدد نقاط الصحة التى سيبدأ بها #{spriteName}"
            },
            "cs": {
                "context": {
                    "retreat": "Málo životů - uteč!",
                    "fight": "Plno životů. Bojuj!"
                },
                "description": "S kolika body životů daný #{spriteName} začíná."
            },
            "nb": {
                "context": {
                    "fight": "Helsen er bra. Kjemp!",
                    "retreat": "Helsen er dårlig - gjør retrett!"
                },
                "description": "Hvor mange helsepoeng #{spriteName} begynner med."
            },
            "de-DE": {
                "context": {
                    "fight": "Deine Gesundheit ist in Ordnung. Kämpfe!",
                    "retreat": "Deine Gesundheit ist gering. Rückzug!"
                },
                "description": "Wieviele Gesundheitspunkte #{spriteName} am Anfang hat."
            },
            "pt-BR": {
                "context": {
                    "fight": "Sua vida está boa. Lute!",
                    "retreat": "Pontos de vida baixo-recuar!"
                },
                "description": "A quantidade de pontos de vida que #{spriteName} começa."
            },
            "gl": {
                "description": "Con cantos puntos de vida principia #{spriteName}."
            },
            "zh-HANS": {
                "description": "#{spriteName} 初始体力"
            },
            "ru": {
                "context": {
                    "fight": "Со здоровьем всё в порядке. Дерись!",
                    "retreat": "Здоровья мало -- отступай!"
                },
                "description": "Количество очков жизни #{spriteName} в начале игры."
            },
            "vi": {
                "description": "Lượng sức khoẻ ban đầu"
            },
            "fr": {
                "context": {
                    "fight": "Votre vie est revenue. A l'attaque !",
                    "retreat": "Votre vie est faible - Retraite !!!"
                },
                "description": "Nombre de points de vie avec lesquels le #{spriteName} commence."
            },
            "sv": {
                "description": "Hur mycket hälsa #{spriteName} startar med."
            },
            "es-ES": {
                "description": "Con cuántos puntos de salud comienza #{spriteName}"
            },
            "tr": {
                "context": {
                    "fight": "Sağlık normal. Savaş!",
                    "retreat": "Sağlık az-geri çekil!"
                },
                "description": "Karakterin (#{spriteName}) ne kadar sağlık ile başlayacağı"
            },
            "pt-PT": {
                "name": "máximaVida",
                "description": "Com quantos pontos de vida #{spriteName} começa."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "maxHealth",
                "code": "maxHealth"
            },
            "lua": {
                "tab": "maxHealth",
                "code": "self.maxHealth"
            },
            "clojure": {
                "tab": "maxHealth",
                "code": "(.maxHealth this)"
            },
            "python": {
                "tab": "maxHealth",
                "code": "self.maxHealth"
            },
            "coffeescript": {
                "tab": "maxHealth",
                "code": "@maxHealth"
            },
            "javascript": {
                "tab": "maxHealth",
                "code": "this.maxHealth"
            }
        },
        "description": "How many health points the #{spriteName} starts with.",
        "type": "number",
        "name": "maxHealth"
    }
]