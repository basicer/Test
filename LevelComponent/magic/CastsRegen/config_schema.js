{
    "default": {
        "duration": 5,
        "health": 2.4,
        "repeatsEvery": 0.2,
        "specificCooldown": 7.5,
        "cooldown": 0.75,
        "range": 30
    },
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "duration": {
            "format": "seconds",
            "minimum": 0,
            "type": "number"
        },
        "repeatsEvery": {
            "format": "seconds",
            "description": "The frequency with which health is added.",
            "minimum": 0,
            "type": "number"
        },
        "health": {
            "minimum": 0,
            "description": "How many hp are gained for each repetition.",
            "type": "number"
        },
        "specificCooldown": {
            "format": "seconds",
            "minimum": 0,
            "type": "number"
        },
        "range": {
            "format": "meters",
            "minimum": 0,
            "type": "number"
        },
        "cooldown": {
            "format": "seconds",
            "minimum": 0,
            "type": "number"
        }
    }
}