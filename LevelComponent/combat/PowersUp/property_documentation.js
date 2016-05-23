[
    {
        "example": {
            "io": "if(isReady(\"power-up\")) then(\n    powerUp\n) else(\n    attack(enemy)\n)",
            "lua": "if self:isReady(\"power-up\") then\n    self:powerUp()\nelse\n    self:attack(enemy)\nend",
            "clojure": "(if (.isReady this \"power-up\")\n    (.powerUp this)\n    (.attack enemy))",
            "python": "if self.isReady(\"power-up\"):\n    self.powerUp()\nelse:\n    self.attack(enemy)",
            "coffeescript": "if @isReady \"power-up\"\n    @powerUp()\nelse\n    @attack enemy",
            "javascript": "if (self.isReady(\"power-up\")) {\n    this.powerUp();\n} else {\n    this.attack(enemy);\n}"
        },
        "snippets": {
            "io": {
                "tab": "powerUp",
                "code": "powerUp"
            },
            "lua": {
                "tab": "powerUp",
                "code": "self:powerUp()"
            },
            "clojure": {
                "tab": "powerUp",
                "code": "(.powerUp this)"
            },
            "python": {
                "tab": "powerUp",
                "code": "self.powerUp()"
            },
            "coffeescript": {
                "tab": "powerUp",
                "code": "@powerUp()"
            },
            "javascript": {
                "tab": "powerUp",
                "code": "this.powerUp()"
            }
        },
        "i18n": {
            "pl": {
                "description": "Zmocnienie następnego ataku o wartość specyficzną dla danej broni."
            },
            "da": {
                "description": "#{spriteName} tilføjer ekstra kraft - givet af våben - til det eller de næste angreb."
            },
            "nl-NL": {
                "description": "De #{spriteName} versterkt de volgende aanval(len). De versterking verschilt per wapen."
            },
            "el": {
                "description": "Ο #{spriteName} ενισχύει τις επόμενες επίθεσεις του με ειδικά όπλα που μπορούν να χρησιμοποιούν τη μέθοδο powerup."
            },
            "ja": {
                "description": "#{spriteName}の次の攻撃のパワーを武器ごとのパワーアップ分だけ上げる "
            },
            "es-419": {
                "description": "El #{spriteName} ve aumentado su(s) poder(es) de ataque(s) con un poder específico del arma."
            },
            "sv": {
                "description": "#{spriteName} förstärker nästa attack(er) med en vapenspecifik förstärkning."
            },
            "uk": {
                "description": "#{spriteName} збільшує силу наступної атаки (атак) на величину, специфічну для зброї."
            },
            "pt-BR": {
                "description": "O #{spriteName} aumenta o poder do(s) próximo(s) ataque(s) com uma arma-especifica de fortalecimento. "
            },
            "it": {
                "description": "Usandolo, #{spriteName} potenzia il prossimo attacco (ed eventualmente i successivi) con un potenziamento specifico."
            },
            "sk": {
                "description": "Hrdinove ďalšíe útoky budú ničivejšie."
            },
            "zh-HANS": {
                "description": "#{spriteName}的攻击力会在下一次攻击中以特定武器的火力增强方式来增强攻击力。"
            },
            "ru": {
                "description": "#{spriteName} улучшает следующую атаку(и) благодаря специальному усилению этой вещи"
            },
            "de-DE": {
                "description": "Verstärkt #{spriteName} nächste(n) Angriff(e) mit einem waffenspezifischen powerup."
            },
            "nb": {
                "description": "Det neste angrepet til #{spriteName} blir oppgradert med en våpenspesifikk oppgradering."
            },
            "fr": {
                "description": "Le #{spriteName} augmente la puissance de(s) prochaine(s) attaque(s) avec un power up spécifique à une arme."
            },
            "gl": {
                "description": "O #{spriteName} encende o seguinte(s) ataque(s) cunha arma específica de encendido."
            },
            "-": {
                "-": "-"
            }
        },
        "description": "The #{spriteName} powers up the next attack(s) with a weapon-specific powerup.",
        "type": "function",
        "name": "powerUp"
    }
]