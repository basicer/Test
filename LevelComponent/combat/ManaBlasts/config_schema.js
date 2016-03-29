{
    "type": "object",
    "additionalProperties": false,
    "default": {
        "manaBlastMass": 5000,
        "manaBlastDamage": 100,
        "manaBlastRadius": 20,
        "specificCooldown": 15,
        "cooldown": 0.75
    },
    "properties": {
        "specificCooldown": {
            "format": "seconds",
            "minimum": 0,
            "description": "How many seconds before this specific mana blast can be done again, if longer than normal cooldown.",
            "type": "number"
        },
        "manaBlastRadius": {
            "format": "meters",
            "exclusiveMinimum": true,
            "minimum": 0,
            "description": "How many meters this mana blast can reach.",
            "type": "number"
        },
        "manaBlastMass": {
            "format": "kilograms",
            "description": "How much mass to impart to the momentum of the mana blast.",
            "type": "number"
        },
        "manaBlastDamage": {
            "minimum": 0,
            "description": "How much damage the mana blast does at the center point, proportional to the distance from that centerpoint.",
            "type": "number"
        },
        "cooldown": {
            "format": "seconds",
            "minimum": 0,
            "default": 0.75,
            "description": "How many seconds each mana blast takes.",
            "type": "number"
        }
    }
}