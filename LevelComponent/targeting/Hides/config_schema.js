{
    "type": "object",
    "additionalProperties": false,
    "default": {
        "specificCooldown": 15,
        "hideDuration": 5,
        "cooldown": 0.5
    },
    "properties": {
        "specificCooldown": {
            "description": "How long, in seconds, before hide can be used again.",
            "format": "seconds",
            "minimum": 0,
            "type": "number"
        },
        "hideDuration": {
            "description": "How long the invisibility lasts when triggered.",
            "default": 5,
            "minimum": 0,
            "format": "seconds",
            "type": "number"
        },
        "cooldown": {
            "default": 0.5,
            "minimum": 0,
            "description": "How long it takes to start hiding, in seconds.",
            "format": "seconds",
            "type": "number"
        }
    }
}