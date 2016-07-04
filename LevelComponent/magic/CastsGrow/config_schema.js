{
    "default": {
        "duration": 5,
        "healthFactor": 2,
        "speedFactor": 0.5,
        "specificCooldown": 3.7,
        "cooldown": 0.75,
        "range": 30
    },
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "duration": {
            "format": "seconds",
            "additionalProperties": false,
            "minimum": 0,
            "type": "number"
        },
        "healthFactor": {
            "minimum": 1,
            "type": "number"
        },
        "speedFactor": {
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