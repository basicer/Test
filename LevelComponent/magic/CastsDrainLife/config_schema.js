{
    "default": {
        "damage": 6,
        "specificCooldown": 0,
        "cooldown": 0.75,
        "range": 15
    },
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "damage": {
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