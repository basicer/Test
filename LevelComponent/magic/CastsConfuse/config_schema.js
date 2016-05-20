{
    "default": {
        "duration": 5,
        "specificCooldown": 10,
        "cooldown": 0.75,
        "range": 25
    },
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "duration": {
            "format": "seconds",
            "minimum": 0,
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