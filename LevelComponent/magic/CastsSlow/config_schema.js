{
    "default": {
        "factor": 0.5,
        "duration": 5,
        "specificCooldown": 10,
        "cooldown": 0.75,
        "range": 30
    },
    "type": "object",
    "additionalProperties": false,
    "properties": {
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
        "factor": {
            "minimum": 0,
            "type": "number"
        },
        "duration": {
            "format": "seconds",
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