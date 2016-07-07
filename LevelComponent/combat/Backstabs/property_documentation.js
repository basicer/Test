[
    {
        "i18n": {
            "he": {
                "description": "הדמות #{spriteName} צריכה להיות במרחק 'backstabRange' כדי שאפשר יהיה לדקור אותה בגב",
                "name": "טווח סכין בגב"
            },
            "fi": {
                "description": "#{spriteName}n pitää olla `backstabRange` metrin etäisyydellä jotta kohde voi tehdä häneen yllätyshyökkäyksen.",
                "name": "yllatyshyokkaysEtaisyys"
            },
            "ar": {
                "description": "الـ #{spriteName} يجب أن يكون في 'مجال الطعن من الخلف' الخاص بالهدف المراد طعنه",
                "name": "مجال الطعن من الخلف"
            },
            "sr": {
                "description": " #{spiriteName} mora biti u dometu 'backstabRange' metara od mete da bi noz u ledja bio moguc "
            },
            "es-419": {
                "description": "El #{spriteName} debe estar dentro de `backstabRange` metros del objetivo para apuñalar."
            },
            "ca": {
                "description": "El #{spriteName} ha d'estar a `backstabRange` metres de l'objectiu a apunyalar."
            },
            "bg": {
                "description": "#{spriteName} трябва да бъде в обсега `backstabRange` в метри от мишената, за да нападне в гръб."
            },
            "el": {
                "description": "Ο ήρωας μας πρέπει να είναι σε απόσταση `backstabRange` μέτρων από το στόχο για να μαχαιρώσει."
            },
            "hu": {
                "description": " #{spriteName}-nek `backstabRange` méteren belül kell lennie a hátbaszúráshoz."
            },
            "uk": {
                "description": "#{spriteName} повинен бути у радіусі `backstabRange` метрів від цілі, щоб нанести удар у спину."
            },
            "da": {
                "description": " #{spriteName} skal være indenfor `backstabRange` meter for at lave bagholdsangreb."
            },
            "ja": {
                "description": "＃{spriteName}はバックスタブするターゲットの`backstabRange`メートル以内でなければなりません。"
            },
            "id": {
                "description": " # {spriteName}  harus berada dalam meter `backstabRange` dari target untuk membokong."
            },
            "sv": {
                "description": "Magi #{spriteName} måste vara inom `backstabRange` meter från målet för att använda bakhugg."
            },
            "it": {
                "description": "#{spriteName} deve essere entro `backstabRange` metri dal bersaglio per attaccarlo alle spalle."
            },
            "ro": {
                "description": "Personajul #{spriteName} trebuie sa fie la mai puțin de `backstabRange` metri de țintă pentru a înjunghia pe la spate."
            },
            "pl": {
                "description": "{SpriteName} musi być w `backstabRange` metrów od celu, aby móc zadać cios w plecy."
            },
            "sk": {
                "description": "Hrdina musí byť vo vzdialenosti `backstabRange` metrov od cieľa, aby mohol pichnúť do chrbta."
            },
            "nl-NL": {
                "description": "De #{spriteName} moet binnen `backstabRange` meter van het doelwit zijn om een ruggesteek uit te delen."
            },
            "pt-BR": {
                "description": "O #{spriteName} precisa estar dentro de `backstabRange` metros do alvo para apunhalá-lo pelas costas.  "
            },
            "lt": {
                "description": " #{spriteName} turi būti sulyg `backstabRange` metrais nuo taikinio jog nudurti iš nugaros."
            },
            "tr": {
                "description": "#{spriteName}'in arkadan bıçaklayabilmesi için, hedefin `backstabRange` metreden daha uzak olmaması gerekir."
            },
            "nb": {
                "description": "#{spriteName} må være innenfor `backstabRange` meter fra målet for å dolke i ryggen."
            },
            "ru": {
                "description": " #{spriteName} должно быть в пределах `backstabRange`метров к цели чтобы произвести backstab."
            },
            "zh-HANT": {
                "description": " #{spriteName}必須離目標`backstabRange`公尺以內才能暗殺。"
            },
            "update": {
                "description": "u"
            },
            "zh-HANS": {
                "description": "当#{spriteName}使用背刺时目标必须在背刺范围(`backstabRange`)内"
            },
            "cs": {
                "description": " #{spriteName} musí být v dosahu `backstabRange` metrů od cíle pro útok zezadu."
            },
            "fr": {
                "description": "Le #{spriteName} doit être dans les `backstabRange` mètres de la cible pour poignarder dans le dos."
            },
            "de-DE": {
                "description": "Der #{spriteName} muss `backstabRange` Meter innerhalb des Ziels liegen, um den hinterhältigen Angriff auszuführen (backstab)."
            },
            "es-ES": {
                "description": "El #{spriteName} debe estar en `backstabRange` metros del objetivo al que apuñalar."
            },
            "-": {
                "-": "-"
            }
        },
        "description": "The #{spriteName} must be within `backstabRange` meters of the target to backstab.",
        "type": "number",
        "name": "backstabRange"
    },
    {
        "snippets": {
            "io": {
                "tab": "backstab",
                "code": "backstab ${1:enemy}"
            },
            "lua": {
                "tab": "backstab",
                "code": "self:backstab(${1:enemy})"
            },
            "coffeescript": {
                "tab": "backstab",
                "code": "@backstab ${1:enemy}"
            },
            "clojure": {
                "tab": "backstab",
                "code": "(.backstab this ${1:enemy})"
            },
            "python": {
                "tab": "backstab",
                "code": "self.backstab(${1:enemy})"
            },
            "javascript": {
                "tab": "backstab",
                "code": "this.backstab(${1:enemy})"
            }
        },
        "i18n": {
            "fi": {
                "name": "yllatyshyokkays"
            },
            "ar": {
                "name": "طعنة من الخلف"
            },
            "sr": {
                "description": "'backstab' ili ti noz u ledja je mocna napadna naredba koja dodeljuje #{backstabDamage} stete ako je meta okrenuta suprotno od #{spriteName}, ali samo 10% ako to nije slucaj.\n\nJurice metu ako je van domasaja #{backstabRange}"
            },
            "es-419": {
                "description": "La acción `backstab` es un poderoso ataque que trata #{backstabDamage} daño si el objetivo está de espaldas desde # {spriteName}, pero sólo el 10% de otra manera.\n\nPerseguirá si el objetivo está más allá de #{backstabRange}m."
            },
            "ca": {
                "description": "L'acció `backstab` és un potent atac que provoca #{backstabDamage} mal si l'objectiu està donant l'esquena a #{spriteName}, però només un 10% d'aquesta quantitat altrament.\n\nEs perseguirà si l'objectiu està més lluny de #{backstabRange}m."
            },
            "bg": {
                "description": "Действието `backstab` е мощна атака, която прави #{backstabDamage} щети, ако мишената е с гръб към #{spriteName}, а ако е с лице към #{spriteName} - само 10%."
            },
            "el": {
                "description": "Η πισώπλατη μαχαιριά `backstab` είναι μια επίθεση που επιτυγχάνει #{backstabDamage} ζημιά, εάν ο στόχος μας δεν μας κοιτά, άλλα εάν μας κοιτά η ζημιά είναι μόνο το 10%. "
            },
            "ro": {
                "description": "Acțiunea `backstab` (înjunghiere pe la spate) e un atac puternic ce produce un efect cu valoarea #{backstabDamage} dacă ținta stă cu spatele la atacator, în caz contar efectul fiind de doar 10% din această valoare.\n\nGonește ținta, dacă aceasta e mai departe de #{backstabRange}m."
            },
            "hu": {
                "description": "A `backstab`(hátbaszúrás) egy hatékony támadás amely #{backstabDamage} sérülést okoz a célpontnak, ha az háttal van #{spriteName}nek, különben csak 10%-át."
            },
            "uk": {
                "description": "Дія `backstab` є потужною атакою, що завдає #{backstabDamage} ушкодження, якщо ціль відвертається від #{spriteName}, але лише 10% від зазначеної кількості в іншому випадку.\n\nБуде переслідувати, якщо відстань до цілі більше, ніж #{backstabRange} м."
            },
            "da": {
                "description": "`backstab`-handlingen er et kraftfuldt angreb der giver #{backstabDamage} skade hvis målet vender væk fra #{spriteName}, men kun 10% af det ellers.\n\nVil jage målet hvis det er længere væk end #{backstabRange}m."
            },
            "ja": {
                "description": "`backstab`アクションは、強力な攻撃対処＃{backstabDamage}ターゲットが離れて＃{spriteName}から直面している場合はダメージが、それ以外のわずか10％です。\n\nターゲットは＃{} backstabRangeメートルより遠い場合追いかけるでしょう。"
            },
            "id": {
                "description": "Action `backstab` adalah serangan berurusan # {backstabDamage}  kerusakan kuat jika target menghadap jauh dari # {spriteName}, tetapi hanya 10% dari yang lain.\r\n\r\nAkan mengejar jika target adalah lebih dari # {backstabRange}m."
            },
            "sv": {
                "description": "`backstab`-funktionen är en kraftfull attack som gör #{backstabDamage} skada om målet har ryggen mot #{spriteName}, men bara 10% i annat fall.\n\nKommer att närma sig om målet är bortom #{backstabRange}m."
            },
            "it": {
                "description": "L'azione `backstab` è un potente attacco che infligge #{backstabDamage} danni se il bersaglio è girato rispetto a #{spriteName}, in caso contrario infligge solo il 10% del danno.\n\nIl bersaglio sarà inseguito se più lontano di #{backstabRange}m."
            },
            "pl": {
                "description": "Działanie / akcja  `backstab` czyni potężny atak #{backstabDamage} zadający obrażenia jeśli cel jest odwrócony od # {spriteName}, wale tylko 10% w innym przypadku.\nBędzie ścigać, jeśli cel jest dalej niż # {backstabRange}m."
            },
            "sk": {
                "description": "Pichnutie do chrbta je mocný útok spôsobujúci újmu #{backstabDamage}, ak sa cieľ nepozerá na hrdinu, inak je újma len 10%."
            },
            "nl-NL": {
                "description": "De `ruggesteek` actie is een krachtige aanval en levert #{backstabDamage} schade wanneer het doelwit is afgewend van de #{spriteName}, maar slechts 10% of that otherwise.\n\nZal achtervolgen als het doel verder is dan #{backstabRange}m."
            },
            "pt-BR": {
                "description": "O golpe `backstab` é um ataque poderoso tirando #{backstabDamage} de dano se o alvo estiver de costas do #{spriteName}, caso contrário, somente 10% deste dano.\n\nPerseguirá se o alvo estiver no alcance de #{backstabRange}m."
            },
            "zh-HANS": {
                "description": "当目标背对#{spriteName}时，`backstab`可造成#{backstabDamage}点的强力伤害，但在其他情况只有10%攻击力。\n\n如果目标距离在#{backstabRange}米之外，则会追赶。"
            },
            "lt": {
                "description": "`backstab` veiksmas labai pajėgus darant #{backstabDamage} žalą jei taikinys stovi nugara prieš #{spriteName}, bet tik 10% jeigu priekiu\n\nSeks iš paskos jei taikinys toliau nei #{backstabRange}m."
            },
            "tr": {
                "description": "`backstab`, eğer hedefin arkası dönükse #{backstabDamage} hasar veren güçlü bir saldırıdır; hedefin yüzü dönükse bu hasarın %10'unu yapar.\n\nHedef menzil dışındaysa girene kadar takip eder."
            },
            "nb": {
                "description": "`backstab`-kommandoen (å dolke i ryggen) er et kraftfullt angrep som gir #{backstabDamage} skade hvis målet ser en annen vei enn mot #{spriteName}, men kun 10% av dette ellers.\n"
            },
            "ru": {
                "description": " `backstab` действие это мощная атака производящая #{backstabDamage} урон если противник отвернулся от #{spriteName},но только 10% от этого в противном случае \n \n Будет приследовать если противник дальше чем #{backstabRange}м."
            },
            "zh-HANT": {
                "description": "`暗殺`是很強的攻擊。若目標不面對著#{spriteName}，目標會喪失#{backstabDamage}命，但若目標面對著#{spriteName}，目標只會喪失10%命。\n\n若目標超出#{backstabRange}公尺#{spriteName}會追殺。"
            },
            "cs": {
                "description": "`backstab` akce je silný útok, který uštědří #{backstabDamage} poškození, ale pouze pokud je cíl otočen k #{spriteName} zády, jinak jenom 10%.\n\nPokud je cíl dál než #{backstabRange}m bude ho pronásledovat."
            },
            "fr": {
                "description": "L'action `backstab` est une puissante attaque provoquant #{backstabDamage} dommages si la cible tourne le dos à #{spriteName}, mais seulement 10% dans le cas contraire.\n\nEntrainera une poursuite si la cible est à plus de #{backstabRange}m."
            },
            "de-DE": {
                "description": "Die `backstab` Aktion ist ein schlagkräftiger Angriff, der #{backstabDamage} an Schaden zufügt, wenn die Zielfigur mit dem Rücken zu #{spriteName} steht, aber nur 10% davon, andernfalls\n\nDie Zielfigur wird verfolgt, wenn sie weiter als #{backstabRange}m entfernt ist."
            },
            "es-ES": {
                "description": "La acción `backstab` es un potente ataque que provoca #{backstabDamage} daño si el objetivo está dando la espalda a #{spriteName}, pero sólo un 10% de esa cantidad si no.\n\nIrá a su caza si el objetivo está más lejos de #{backstabRange}m."
            },
            "-": {
                "-": "-"
            }
        },
        "args": [
            {
                "description": "The target to backstab.",
                "example": {
                    "io": "findNearestEnemy",
                    "lua": "self:findNearestEnemy()",
                    "clojure": "(.findNearestEnemy this)",
                    "python": "self.findNearestEnemy()",
                    "coffeescript": "@findNearestEnemy()",
                    "javascript": "this.findNearestEnemy()"
                },
                "type": "object",
                "name": "target"
            }
        ],
        "description": "The `backstab` action is a powerful attack dealing #{backstabDamage} damage if the target is facing away from the #{spriteName}, but only 10% of that otherwise.\n\nWill chase if the target is further than #{backstabRange}m.",
        "type": "function",
        "name": "backstab"
    },
    {
        "i18n": {
            "fi": {
                "description": "Onnistunut yllätyshyökkäys (Missä uhri on poispäin kääntynyt #{spriteName}stä/sta) tekee `backstabDamage` vahinkoa.",
                "name": "yllatyshyokkaysVahinko"
            },
            "sr": {
                "description": "Uspesan noz u ledja ( kada je meta okrenuta suprotno od #{spriteName}) dodeljuje 'backstabDamage' stetu."
            },
            "es-419": {
                "description": "Una puñalada con éxito (donde el objetivo está de espaldas #{spriteName}) se ocupa de `backstabDamage` daños."
            },
            "ca": {
                "description": "Una punyalada per l'esquena exitosa (quan l'objectiu està d'esquena respecte a #{spriteName}) provoca mal `backstabDamage`. "
            },
            "bg": {
                "description": "Успешна атака в гръб( такава, при която мишената е с гръб към #{spriteName} ) прави `backstabDamage` щети."
            },
            "el": {
                "description": "Μια επιτυχημένη πισώπλατη μαχαιριά (όταν ο στόχος δεν μας κοιτά) επιτυγχάνει `backstabDamage` ζημιά"
            },
            "ro": {
                "description": "O înjunghiere reușită (în care ținta e cu spatele la #{spriteName}) produce un efect cu vloarea `backstabDamage`."
            },
            "hu": {
                "description": "Egy sikeres hátbaszúrás (amikor a célpont háttal áll #{spriteName}nek) által okozott sebzés mértéke."
            },
            "uk": {
                "description": "Успішний удар у спину (якщо ціль відвертається від #{spriteName}) завдає `backstabDamage` ушкодження."
            },
            "da": {
                "description": "Et succesfuldt bagholdsangreb (hvor målet vender væk fra #{spriteName}) giver `backstabDamage` skade."
            },
            "ja": {
                "description": "成功したバックスタブ（つまり、ターゲットが＃{spriteName}に向けていない場合のバックスタブ）は `backstabDamage`ダメージを与えます。"
            },
            "id": {
                "description": "Sebuah backstab sukses (di mana target menghadap jauh dari yang # {spriteName} ) Penawaran dikerusakan `backstabDamage`."
            },
            "sv": {
                "description": "Ett lyckat bakhugg (där målet visar ryggen mot #{spriteName}) ger `backstabDamage` skada."
            },
            "it": {
                "description": "Un attacco alle spalle valido (il bersaglio è girato rispetto a #{spriteName}) infligge `backstabDamage` danni."
            },
            "cs": {
                "description": "Úspěšný útok zezadu (kde je cíl, odvrácené od #{spritename}) uděluje `backstabDamage` poškození."
            },
            "pl": {
                "description": "Sukces backstab (gdzie cel jest odwrócony od # {spriteName}) obejmuje uszkodzenia `backstabDamage`."
            },
            "sk": {
                "description": "Úspešné pichnutie do chrbta (keď sa cieľ nepozerá na hrdinu) spôsobuje `backstabDamage` újmu."
            },
            "nl-NL": {
                "description": "Een successvolle ruggesteek (wanneer het doelwit is afgewend van de #{spriteName}) levert `backstabDamage` schade."
            },
            "pt-BR": {
                "description": "Um golpe backstap feito com sucesso (onde o alvo está de costas de #{spriteName}) retira `backstabDamage` de dano."
            },
            "zh-HANS": {
                "description": "一次成功的背刺（即目标背对#{spriteName}）可造成`backstabDamage`点伤害。"
            },
            "lt": {
                "description": "Sėkmingas dūris į nugarą (kai taikinys stovi veidu į priešingą pusę nei #{spriteName}) padarys `backstabDamage` žalą."
            },
            "tr": {
                "description": "Başarılı bir arkadan bıçaklama hamlesi (#{spriteName} hedefin arkasındaysa),`backstabDamage`hasar verir. "
            },
            "nb": {
                "description": "Et vellykket ryggdolk (hvor målet snur seg bort fra #{spriteName}) gir `backstabDamage` i skade."
            },
            "ru": {
                "description": "Удачный backstab (когда цель отвернута от #{spriteName}) наносит `backstabDamage` урон."
            },
            "zh-HANT": {
                "description": "成功暗殺會殺掉`backstabDamage`命。"
            },
            "fr": {
                "description": "Un backstab réussi (Où la cible tourne le dos à #{spriteName}) provoque `backstabDamage` dommages."
            },
            "de-DE": {
                "description": "Ein erfolgreicher backstab (wenn die Zielfigur mit dem Rücken zu #{spriteName} steht) fügt `backstabDamage` an Schaden zu. "
            },
            "es-ES": {
                "description": "Un apuñalamiento por la espalda con éxito (cuando el objetivo está de espaldas a #{spriteName}) provoca `backstabDamage` de daño."
            },
            "-": {
                "-": "-"
            }
        },
        "description": "A successful backstab (where the target is facing away from the #{spriteName}) deals `backstabDamage` damage.",
        "type": "number",
        "name": "backstabDamage"
    }
]