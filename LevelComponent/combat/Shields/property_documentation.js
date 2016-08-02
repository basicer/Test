[
    {
        "example": {
            "io": "if(findFriends length > 5) then(\n    shield\n) else(\n    attack(enemy)\n)",
            "lua": "if #self:findFriends() > 5 then\n    self:shield()\nelse\n    self:attack(enemy)\nend",
            "clojure": "(if (> (.length (.findFriends this)) 5)\n    (.shield this)\n    (.attack enemy))",
            "python": "if len(self.findFriends()) > 5:\n    self.shield()\nelse:\n    self.attack(enemy)",
            "coffeescript": "if @findFriends().length > 5\n    @shield()\nelse\n    @attack enemy",
            "javascript": "if (this.findFriends().length > 5) {\n    this.shield();\n} else {\n    this.attack(enemy);\n}"
        },
        "i18n": {
            "vi": {
                "name": "đỡ"
            },
            "sr": {
                "description": "Док користиш `shield` акцију, штит блокира #{shieldDefensePercent}% регуларне штете."
            },
            "id": {
                "description": "Saat menggunakan aksi 'shield', perisaimu menghalang #{shieldDefensePercent}% dari kerusakan yang normal."
            },
            "da": {
                "description": "Når du anvender `shield` handlingen, vil skjoldet blokere #{shieldDefensePercent}% af normal skade."
            },
            "nl-NL": {
                "description": "Wanneer je de 'shield' actie gebruikt, blokkeert het schild #{shieldDefensePercent}% van de normale schade."
            },
            "el": {
                "description": "Εφόσον χρησιμοποιείται η `ασπίδα` μπλοκάρει σε ποσοστό #{shieldDefensePercent}% το χτύπημα που δεχόμαστε."
            },
            "tr": {
                "description": "Kalkan aksiyonunu kullanırken , kalkan normal hasarın #{kalkanKorumaYüzdesi}% bloklar."
            },
            "fi": {
                "description": "Kun käytät `shield` toimintaa, kilpi torjuu #{shieldDefensePercent}% prosenttia tavallisesta vahingosta."
            },
            "uk": {
                "description": "При використанні дії `shield`, щит блокує #{shieldDefensePercent}% отриманих пошкоджень."
            },
            "pl": {
                "description": "Podczas korzystania z akcji 'shield', Twoja tarcza blokuje #{shieldDefensePercent}% zadanych obrażeń."
            },
            "ja": {
                "description": "`shield` コマンド中は、盾が普段のダメージの #{shieldDefensePercent}% を防いでくれる"
            },
            "it": {
                "description": "Mentre usi l'azione `shield`, lo scudo blocca il #{shieldDefensePercent}% del danno normale."
            },
            "hu": {
                "description": "A `shield` akciót használva a pajzsod blokkol #{shieldDefensePercent}% normál sebzést. "
            },
            "sk": {
                "description": "Pri použití akcie `shield` ( štít ), štít blokuje #{shieldDefensePercent}% normálnej újmy."
            },
            "pt-BR": {
                "description": "Durante o uso da ação `shield`, o escudo bloqueia #{shieldDefensePercent}% do dano normal."
            },
            "ro": {
                "description": "Cât timp este folosită acțiunea `scut`, scutul blochează #{shieldDefensePercent}% din daune."
            },
            "zh-HANT": {
                "description": "使用`盾牌`時會擋掉#{shieldDefensePercent}％的普通攻擊。"
            },
            "es-419": {
                "name": "escudo",
                "description": "Mientras estás usando la acción `escudo`, el #{spriteName} absorberá un #{shieldDefensePercent}% del daño normal."
            },
            "lt": {
                "description": "Naudojant `shield` metodą blokuoja puolimo veiksmą ir sumažina jo padaromą žalą  #{shieldDefensePercent}% nuo normalios žalos."
            },
            "de-DE": {
                "description": "Während die  `shield` Aktion genutzt wird, absorbiert #{spriteName} #{shieldDefensePercent}% des normalen Schadens."
            },
            "nb": {
                "description": "Mens `shield` handlingen brukes absorberer #{spriteName} #{shieldDefensePercent}% av vanlig skade."
            },
            "fr": {
                "description": "Quand vous utilisez l'action `shield`, le #{spriteName} absorbe #{shieldDefensePercent}% des dommages normaux."
            },
            "zh-HANS": {
                "description": "使用‘盾牌’时，#{spriteName}吸收#{shieldDefensePercent}%正常伤害。"
            },
            "ru": {
                "description": "Пока используется действие `shield`, щит поглощает #{shieldDefensePercent}% от нормального урона."
            },
            "cs": {
                "description": "Použitím akce `shield` #{spriteName} absorbuje #{shieldDefensePercent}% útočné síly."
            },
            "es-ES": {
                "description": "Mientras estás usando la acción `escudo`, el #{spriteName} absorberá un #{shieldDefensePercent}% del daño base."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "shield",
                "code": "shield"
            },
            "lua": {
                "tab": "shield",
                "code": "self:shield()"
            },
            "clojure": {
                "tab": "shield",
                "code": "(.shield this)"
            },
            "coffeescript": {
                "tab": "shield",
                "code": "@shield()"
            },
            "python": {
                "tab": "shield",
                "code": "self.shield()"
            },
            "javascript": {
                "tab": "shield",
                "code": "this.shield()"
            }
        },
        "owner": "this",
        "description": "While using the `shield` action, the shield blocks #{shieldDefensePercent}% of normal damage.",
        "type": "function",
        "name": "shield"
    }
]