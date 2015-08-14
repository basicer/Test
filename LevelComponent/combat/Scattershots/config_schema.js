{
    "type": "object",
    "additionalProperties": false,
    "default": {
        "scattershotCount": 10,
        "scattershotArcLength": 1.5708,
        "specificCooldown": 15,
        "cooldown": 1
    },
    "properties": {
        "scattershotCount": {
            "default": 10,
            "exclusiveMinimum": true,
            "minimum": 0,
            "description": "How many projectiles should be fired?",
            "type": "integer"
        },
        "scattershotArcLength": {
            "default": 1.5708,
            "format": "radians",
            "description": "From 0 to 2 PI, how wide should the arc be in which to fire the projectiles?",
            "type": "number"
        },
        "specificCooldown": {
            "format": "seconds",
            "minimum": 0,
            "description": "How many seconds before this specific scattershot can be done again, if longer than normal cooldown.",
            "type": "number"
        },
        "cooldown": {
            "format": "seconds",
            "minimum": 0,
            "default": 2,
            "description": "How many seconds each scattershot takes.",
            "type": "number"
        }
    }
}