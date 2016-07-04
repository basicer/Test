{
    "default": {
        "duration": 5,
        "healthFactor": 0.5,
        "speedFactor": 2,
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
        "healthFactor": {
            "maximum": 1,
            "minimum": 0,
            "type": "number"
        },
        "speedFactor": {
            "type": "number",
            "minimum": 0
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