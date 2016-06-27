{
    "type": "object",
    "additionalProperties": false,
    "default": {
        "bashRange": 3,
        "bashMass": 100,
        "bashDamage": 10,
        "specificCooldown": 6,
        "cooldown": 0.25
    },
    "properties": {
        "bashMass": {
            "minimum": 0,
            "format": "kilograms",
            "type": "number"
        },
        "bashDamage": {
            "type": "number"
        },
        "bashRange": {
            "description": "How close the Thang needs to be to bash, in meters.",
            "exclusiveMinimum": true,
            "minimum": 0,
            "format": "meters",
            "default": 3,
            "type": "number"
        },
        "specificCooldown": {
            "format": "seconds",
            "minimum": 0,
            "description": "How many seconds before this specific bash can be done again, if longer than normal cooldown.",
            "type": "number"
        },
        "cooldown": {
            "format": "seconds",
            "minimum": 0,
            "description": "How many seconds each bash takes.",
            "type": "number"
        }
    }
}