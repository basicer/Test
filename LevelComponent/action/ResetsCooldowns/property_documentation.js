[
    {
        "i18n": {
            "es-ES": {
                "description": "Reinicia el enfriamiento de la acción dada, preparándola para usarla de nuevo si la habilidad \"Reiniciar Enfriamiento\" está lista. También puede resetear el enfriamiento de los hechizos.",
                "name": "Reiniciar enfriamiento"
            },
            "da": {
                "description": "Nulstiller pausetid for `action`, hvilket gør det klar til brug igen, hvis `reset-cooldown` er klar til brug. Kan også nulstille besværgelser."
            },
            "nl-NL": {
                "description": "Reset de afkoeltijd van een bepaalde 'action', waardoor deze meteen weer gebruikt kan worden, mits de 'reset-cooldown' mogelijkheid klaar is. Kan ook de afkoeltijd van spreuken resetten."
            },
            "el": {
                "description": "Μηδενίζει το χρόνο αχρησίας της συγκεκριμένης ενέργειας, γεγονός που τη καθιστά έτοιμη να χρησιμοποιηθεί ξανά, αν η 'reset-cooldown` ικανότητα είναι διαθέσιμη. Μπορεί επίσης να μηδενίσετε τους χρόνους αχρησίας από ξόρκια."
            },
            "es-419": {
                "description": "Reinicia el tiempo de recarga de la acción, haciendo que esté lista para ser usada de vuelta, si la habilidad \"reset-cooldown\" está lista. Puede reducir también el tiempo de recarga de un hechizo."
            },
            "pt-BR": {
                "description": "Reseta o tempo de recarga da `action` dada, tornando-a pronta para ser usada novamente, se a habilidade de `reset-cooldown` estiver pronta. Também pode resetar o tempo de recarga de magias."
            },
            "uk": {
                "description": "Скидає таймер готовності заданої дії `action`, роблячи її готовою до використання, якщо здатність `reset-cooldown` готова. Також може скинути таймер готовності заклинання."
            },
            "it": {
                "description": "Azzera il tempo di attesa di `action`, rendendola subito pronta all'uso, se l'abilità `reset-cooldown` è pronta. Può azzerare i tempi di attesa anche per gli incantesimi."
            },
            "sk": {
                "description": "Vynuluje pre danú akciu uspokojenie, čím umožňuje jej opätovné použitie, ak je schopnosť `reset-cooldown` pripravená. Dokáže vynulovať aj uspokojenie pre kúzlo."
            },
            "zh-HANS": {
                "description": "重置给出`action`使之可以被再次使用，如果`reset-cooldown`能力已准备就绪。"
            },
            "ru": {
                "description": "Делает `action` снова доступным для использования, если можно использовать способность `reset-cooldown`."
            },
            "de-DE": {
                "description": "Setzt den aktuellen `action` cooldown zurück, wodurch die Aktion wieder nutzbar wird. Natürlich nur wenn die `reset-cooldown` Aktion selber ready ist."
            },
            "nb": {
                "description": "Tilbakestiller gjenoppladingen til angitt `action`, slik at den kan brukes igjen, hvis `reset-cooldown` ferdigheten er klar."
            },
            "fr": {
                "description": "Réinitialise le cooldown de l'`action` donnée, la rendant de nouveau disponible, si la technique `reset-cooldown` est disponible."
            },
            "gl": {
                "description": "Reinicia ata enfiarse a `action` dada, conseguindo que se poida usar outra vez, se a habilidade `reset-cooldown`está lista. "
            },
            "-": {
                "-": "-"
            }
        },
        "args": [
            {
                "i18n": {
                    "es-ES": {
                        "description": "La acción a resetear"
                    },
                    "da": {
                        "description": "Handling der skal nulstilles."
                    },
                    "nl-NL": {
                        "description": "De actie om te resetten."
                    },
                    "el": {
                        "description": "Η ικανότητα της οποίας ο χρόνος αχρησίας μηδενίζεται."
                    },
                    "es-419": {
                        "description": "La acción a recargar."
                    },
                    "pt-BR": {
                        "description": "A ação a ser resetada."
                    },
                    "uk": {
                        "description": "Дія, таймер готовності якої потрібно скинути.  "
                    },
                    "it": {
                        "description": "L'azione da resettare."
                    },
                    "sk": {
                        "description": "Akcia, ktorú chceš vynulovať."
                    },
                    "zh-HANS": {
                        "description": "该动作被重置。"
                    },
                    "ru": {
                        "description": "Способность, которую нужно восстановить."
                    },
                    "de-DE": {
                        "description": "Die Aktion zum zurücksetzen."
                    },
                    "nb": {
                        "description": "Handlingen som skal tilbakestilles."
                    },
                    "fr": {
                        "description": "L'action à réinitialiser."
                    },
                    "gl": {
                        "description": "A acción para reiniciar."
                    },
                    "-": {
                        "-": "-"
                    }
                },
                "description": "The action to reset.",
                "example": "\"raise-dead\"",
                "type": "string",
                "name": "action"
            }
        ],
        "snippets": {
            "io": {
                "tab": "resetCooldown",
                "code": "resetCooldown(\"${1:mana-blast}\")"
            },
            "lua": {
                "tab": "resetCooldown",
                "code": "self:resetCooldown(\"${1:mana-blast}\")"
            },
            "coffeescript": {
                "tab": "resetCooldown",
                "code": "@resetCooldown \"${1:mana-blast}\""
            },
            "clojure": {
                "tab": "resetCooldown",
                "code": "(.resetCooldown this \"${1:mana-blast}\")"
            },
            "python": {
                "tab": "resetCooldown",
                "code": "self.resetCooldown(\"${1:mana-blast}\")"
            },
            "javascript": {
                "tab": "resetCooldown",
                "code": "this.resetCooldown(\"${1:mana-blast}\")"
            }
        },
        "description": "Resets the given `action` cooldown, making it ready to be used again, if the `reset-cooldown` ability is ready. Can also reset spell cooldowns.",
        "type": "function",
        "name": "resetCooldown"
    }
]