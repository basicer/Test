{
    "default": {
        "health": 200,
        "specificCooldown": 7.5,
        "cooldown": 0.75,
        "range": 30
    },
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "health": {
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