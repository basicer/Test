[
    {
        "i18n": {
            "vi": {
                "name": "Nói"
            },
            "fi": {
                "description": "Laittaa #{spriteName}n sanomaan annetun viestin. Kaikki jotka ovat #{voiceRange} metrin etäisyydellä kuulevat sen.",
                "name": "sano"
            },
            "sr": {
                "description": "Čini da #{spriteName} izgovori zadatu poruku. Sve u opsegu #{voiceRange} metara će čuti to."
            },
            "el": {
                "description": "Κάνει το #{spriteName} να λέει ένα μήνυμα. Οτιδήποτε μέσα σε #{voiceRange} μέτρα θα το ακούσει."
            },
            "da": {
                "description": "Får #{spriteName} til at sige den angivne besked. Alt indenfor #{voiceRange} meter vil kunne høre det."
            },
            "ro": {
                "description": "Îl face pe #{spriteName} să spună mesajul dat. Orice pe o rază de #{voiceRange} metri îl va auzi."
            },
            "sv": {
                "description": "Gör så att #{spriteName} säger det givna meddelandet. Allt inom #{voiceRange} meter kommer att höra det."
            },
            "uk": {
                "description": "Змушує #{spriteName} промовити задане повідомлення. Будь-хто у радіусі #{voiceRange} метрів почує його."
            },
            "nl-NL": {
                "description": "Laat de #{spriteName} de gegeven boodschap zeggen. Iedereen binnen #{voiceRange} meter zal het horen."
            },
            "ja": {
                "description": "#{spriteName} が与えられたセリフを話す。#{voiceRange} メーター以内なら誰でも聞こえる。"
            },
            "pl": {
                "description": "Rozkaż #{spriteName} żeby powiedział przekazaną mu wiadomość. Wiadomość będzie słyszana przez wszystkich w odległości #{voiceRange}. "
            },
            "it": {
                "description": "Fa dire a #{spriteName} il messaggio dato. Tutto ciò che è entro #{voiceRange} metri lo sentirà."
            },
            "hu": {
                "description": "A #{spriteName} kimondja a megadott üzenetet. Bárki #{voiceRange} méteren belül hallani fogja. "
            },
            "sk": {
                "description": "Umožňuje hrdinovi povedať danú správu. Všetci v dosahu #{voiceRange} metrov ju budú počuť."
            },
            "pt-BR": {
                "description": "Faz com que #{spriteName} diga a mensagem dada. Qualquer um dentro de #{voiceRange} metros irá ouvi-lo."
            },
            "es-419": {
                "description": "Hace que el #{nombreSprite} diga el mensaje indicado. Cualquier cosa dentro de #{rangoVoz} metros lo escuchara. "
            },
            "es-ES": {
                "description": "Hace que el #{spriteName} diga el mensaje indicado. Cualquiera dentro de #{voiceRange} metros podrá oírlo."
            },
            "zh-HANT": {
                "description": "使#{spriteName}講出輸入的訊息。在#{voiceRange}公尺內的人事物都會聽到訊息。"
            },
            "ar": {
                "description": "يجعل ال#{spriteName} يقول الرسالة المعطاة. أى شئ فى حدود #{voiceRange} متر سوف يسمعه"
            },
            "lt": {
                "description": "Veikėjui #{spriteName} leidžia pasakyti nurodytą žinią. Bet, kuris veikėjas esantis  #{voiceRange} spinduliu išgirs pasakytą komandą. "
            },
            "nb": {
                "description": "Gjør at #{spriteName} sier den oppgitte teksten. Alle innenfor #{voiceRange} meter vil høre det."
            },
            "de-DE": {
                "description": "Lässt #{spriteName} eine Nachricht sagen. Alles innerhalb von #{voiceRange}m kann diese Nachricht hören."
            },
            "fr": {
                "description": "Fait dire le message à #{spriteName}. Tout ce qui se trouve dans les #{voiceRange} mètres l'entendra."
            },
            "gl": {
                "description": "Fai que #{spriteName} diga a mensaxe dada. Todo dentro de #{voiceRange} metros oiraa."
            },
            "zh-HANS": {
                "description": "让#{spriteName}说出给定内容，#{voiceRange}米内所有单位都将听到此消息。"
            },
            "ru": {
                "description": "Заставляет #{spriteName} произнести указанное сообщение. Все в радиусе #{voiceRange} услышат его."
            },
            "cs": {
                "description": "Donutí #{spriteName} říci danou zprávu. Cokoliv v okruhu #{voiceRange} metrů zprávu uslyší."
            },
            "-": {
                "-": "-"
            }
        },
        "snippets": {
            "io": {
                "tab": "say",
                "code": "say(\"${1:message}\")"
            },
            "lua": {
                "tab": "say",
                "code": "self:say(\"${1:message}\")"
            },
            "clojure": {
                "tab": "say",
                "code": "(.say this \"${1:message}\")"
            },
            "python": {
                "tab": "say",
                "code": "self.say(\"${1:message}\")"
            },
            "coffeescript": {
                "tab": "say",
                "code": "@say \"${1:message}\""
            },
            "javascript": {
                "tab": "say",
                "code": "this.say(\"${1:message}\")"
            }
        },
        "args": [
            {
                "default": "",
                "description": "",
                "example": "\"Hi!\"",
                "type": "string",
                "name": "message"
            }
        ],
        "description": "Makes the #{spriteName} say the given message. Anything within #{voiceRange} meters will hear it.",
        "type": "function",
        "name": "say"
    }
]