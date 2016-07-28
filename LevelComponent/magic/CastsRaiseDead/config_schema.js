{
    "default": {
        "power": 100,
        "radius": 20,
        "duration": 10,
        "specificCooldown": 10,
        "cooldown": 0.5
    },
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "specificCooldown": {
            "format": "seconds",
            "minimum": 0,
            "type": "number"
        },
        "radius": {
            "format": "meters",
            "minimum": 0,
            "additionalProperties": false,
            "default": 20,
            "description": "How far the dead can be raised around the caster, in meters.",
            "type": "number"
        },
        "power": {
            "exclusiveMinimum": true,
            "minimum": 0,
            "default": 100,
            "additionalProperties": false,
            "description": "Minimum total power of raised corpses.",
            "type": "number"
        },
        "duration": {
            "format": "seconds",
            "minimum": 0,
            "type": "number"
        },
        "cooldown": {
            "default": 0.5,
            "format": "seconds",
            "minimum": 0,
            "type": "number"
        }
    }
}