{
    "default": {
        "envenomDuration": 10,
        "specificCooldown": 10,
        "cooldown": 0.75
    },
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "envenomDuration": {
            "format": "seconds",
            "exclusiveMinimum": true,
            "minimum": 0,
            "type": "number"
        },
        "specificCooldown": {
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