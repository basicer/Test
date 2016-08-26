{
    "default": {
        "damage": 30,
        "duration": 5,
        "repeatsEvery": 1,
        "radius": 10,
        "specificCooldown": 10,
        "cooldown": 0.75,
        "range": 30
    },
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "damage": {
            "minimum": 0,
            "type": "number"
        },
        "duration": {
            "format": "seconds",
            "minimum": 0,
            "type": "number"
        },
        "radius": {
            "minimum": 0,
            "format": "meters",
            "type": "number"
        },
        "repeatsEvery": {
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