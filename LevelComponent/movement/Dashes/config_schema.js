{
    "properties": {
        "specificCooldown": {
            "type": "number",
            "minimum": 0,
            "format": "seconds"
        },
        "cooldown": {
            "type": "number",
            "minimum": 0,
            "format": "seconds"
        },
        "turnToDirection": {
            "type": "boolean"
        },
        "dashSpeedMultiplier": {
            "minimum": 0,
            "type": "number"
        }
    },
    "default": {
        "specificCooldown": 10,
        "cooldown": 0.25,
        "turnToDirection": false,
        "dashSpeedMultiplier": 1.25
    }
}