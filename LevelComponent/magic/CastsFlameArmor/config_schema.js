{
    "default": {
        "healthFactor": 1.4,
        "damage": 30,
        "duration": 10,
        "specificCooldown": 5,
        "cooldown": 0.5,
        "range": 40
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
        "health": {
            "description": "Health added to target.",
            "type": "number"
        },
        "duration": {
            "format": "seconds",
            "type": "number"
        },
        "damage": {
            "additionalProperties": true,
            "description": "Damage caused to melee enemies that attack target.",
            "type": "number"
        },
        "cooldown": {
            "format": "seconds",
            "minimum": 0,
            "type": "number"
        }
    }
}