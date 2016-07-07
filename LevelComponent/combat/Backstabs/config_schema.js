{
    "type": "object",
    "additionalProperties": false,
    "default": {
        "backstabMass": 0,
        "backstabDamage": 60,
        "backstabRange": 3,
        "specificCooldown": 15,
        "cooldown": 0.5
    },
    "properties": {
        "specificCooldown": {
            "format": "seconds",
            "minimum": 0,
            "description": "How many seconds before this specific backstab can be done again, if longer than normal cooldown.",
            "type": "number"
        },
        "cooldown": {
            "format": "seconds",
            "minimum": 0,
            "description": "How many seconds each backstab takes.",
            "type": "number"
        },
        "backstabRange": {
            "description": "How close the Thang needs to be to backstab, in meters.",
            "exclusiveMinimum": true,
            "minimum": 0,
            "format": "meters",
            "type": "number"
        },
        "backstabMass": {
            "format": "kilograms",
            "type": "number"
        },
        "backstabDamage": {
            "description": "How much damage a successful backstab does.",
            "type": "number"
        }
    }
}