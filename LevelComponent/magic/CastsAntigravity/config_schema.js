{
    "default": {
        "duration": 2.5,
        "radius": 20,
        "specificCooldown": 10,
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
        "radius": {
            "format": "meters",
            "minimum": 0,
            "description": "Radius of the region effected by the antigravity.",
            "type": "number"
        },
        "duration": {
            "additionalProperties": true,
            "description": "Number of seconds the antigravity lasts",
            "format": "seconds",
            "type": "number"
        },
        "cooldown": {
            "format": "seconds",
            "minimum": 0,
            "type": "number"
        }
    }
}