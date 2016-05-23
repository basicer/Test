[
    {
        "i18n": {
            "da": {
                "description": "Kaster en `\"dispel\"` besværgelse på `target`. Hvis målet er indenfor #{spells.dispel.range}m fjernes alle virkninger."
            },
            "es-419": {
                "description": "Arroja un `\"dispel\"` hechizo sobre `target` si dentro de #{spells.dispel.range}m, disipa todos los efectos."
            },
            "bg": {
                "description": "Прави магия `\"dispel\"` върху мишената, ако тя е между #{spells.dispel.range}m,  премахвайки всякакви ефекти."
            },
            "cs": {
                "description": "Sešli kouzlo `\"dispel\"` na `target` pokud je blíž než #{spells.dispel.range}m, abys zrušil všechna jeho očarování."
            },
            "ro": {
                "description": "pune o vraja de \"risipire\" pe \"tinta\" daca cu #{vraja.risipire.raza}m, anuleaza toate efectele."
            },
            "sr": {
                "description": "Baci \"dispel\" magiju na 'metu' ako #{spells.dispel.range}m, dispeluje sve efekte"
            },
            "el": {
                "description": "Ρίχνει ένα ξόρκι `διάλυσης` στον στόχο, εάν βρίσκεται σε ακτίνα εώς #{spells.dispel.range}m διώχνει τις κάκες επιδράσεις από ξόρκια που του έχουν κάνει."
            },
            "hu": {
                "description": "Kivet egy `\"dispel\"` varázslatot a `target` célpontra, ha az #{spells.dispel.range}m-en belül van, semlegesítve minden hatást."
            },
            "ja": {
                "description": "もし「target」の位置は #{spells.dispel.range}メトールの範囲以内、「\"dispel\"」の呪文をキャスト、「target」のすばてのエフェクト無効果にする。"
            },
            "zh-HANS": {
                "description": "“驱散”的法术了如果在目标# { spells.dispel.range}米范围,消除全部影响。"
            },
            "pl": {
                "description": "Rzuca czar `\"dispel\"` na `target`. Jeżeli cel jest w zasięgu #{spells.dispel.range}m, usuwa skutki wszystkich innych czarów."
            },
            "uk": {
                "description": "Накладає заклинання `\"dispel\"` на ціль `target`, якщо вона в радіусі #{spells.dispel.range} метрів, розсіюючи всі ефекти."
            },
            "de-DE": {
                "description": "Zaubert einen `\"dispel\"` (Entzuauberungs) Spruch auf `target`(Ziel), wenn dieses innerhalb #{spells.dispel.range}m ist. Entzaubert alle Effekte."
            },
            "it": {
                "description": "Lancia una magia `\"dispel\"` su un `target` (il bersaglio) se si trova entro #{spells.dispel.range}m, rimuovendo tutti gli effetti.   "
            },
            "fr": {
                "description": "Lance un sort `\"dispel\"` sur `target` si à moins de #{spells.dispel.range}m, dissipant tous les effets."
            },
            "sv": {
                "description": "Kasta en `\"dispel\"`-besvärjelse på `target` inom #{spells.dispel.range}m, skingrar alla effekter."
            },
            "nl-NL": {
                "description": "Spreek een `\"dispel\"` spreuk uit over `target` als deze binnen #{spells.dispel.range}m, wat er voor zorgt dat alle effecten worden opgeheven."
            },
            "es-ES": {
                "description": "Conjura un hechizo \"disipar\" en el \"objetivo\" si dentro de #{spells.dispel.range}m, disipando todos los efectos."
            },
            "ru": {
                "description": "Наколдовать `\"снять заклинание\"` на `цель, если цель ближе #{spells.dispel.range}м. Снимает все эфекты."
            },
            "sk": {
                "description": "Čaruje kúzlo `\"dispel\"` na cieľ `target` v dosahu #{spells.dispel.range}m. Toto kúzlo ruší všetky prechádzajúce efekty."
            },
            "pt-BR": {
                "description": "Lança um feitiço `\"dispel\"` no `target` se estiver dentro de #{spells.dispel.range}m, removento todos os efeitos."
            },
            "-": {
                "-": "-"
            }
        },
        "example": {
            "io": "if(canCast(\"dispel\", enemy) and enemy hasEffect(\"grow\")) then(\n    cast(\"dispel\", enemy)\n)",
            "lua": "if self:canCast(\"dispel\", enemy) and enemy.hasEffect(\"grow\") then\n    self:cast(\"dispel\", enemy)\nend",
            "clojure": "(if (and (.canCast this \"dispel\" enemy) (.hasEffect enemy \"grow\"))\n    (.cast this \"dispel\" enemy))",
            "python": "if self.canCast(\"dispel\", enemy) and enemy.hasEffect(\"grow\"):\n    self.cast(\"dispel\", enemy)",
            "coffeescript": "if @canCast(\"dispel\", enemy) and enemy.hasEffect \"grow\"\n    @cast \"dispel\", enemy",
            "javascript": "if (this.canCast(\"dispel\", enemy) && enemy.hasEffect(\"grow\")) {\n    this.cast(\"dispel\", enemy);\n}"
        },
        "snippets": {
            "io": {
                "tab": "dispel",
                "code": "cast(\"dispel\", ${1:target})"
            },
            "lua": {
                "tab": "dispel",
                "code": "self:cast(\"dispel\", ${1:target})"
            },
            "clojure": {
                "tab": "dispel",
                "code": "(.cast this \"dispel\" ${1:target})"
            },
            "python": {
                "tab": "dispel",
                "code": "self.cast(\"dispel\", ${1:target})"
            },
            "javascript": {
                "tab": "dispel",
                "code": "this.cast(\"dispel\", ${1:target})"
            },
            "coffeescript": {
                "tab": "dispel",
                "code": "@cast \"dispel\", ${1:target}"
            }
        },
        "args": [
            {
                "default": "",
                "description": "The target on which to cast \"dispel\".",
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
        "description": "Casts a `\"dispel\"` spell on `target` if within #{spells.dispel.range}m, dispeling all effects.",
        "type": "function",
        "name": "castDispel"
    }
]