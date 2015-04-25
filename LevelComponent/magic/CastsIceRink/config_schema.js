{
    "default": {
        "duration": 5,
        "radius": 30,
        "specificCooldown": 10,
        "cooldown": 0.5,
        "range": 50
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
            "description": "Radius of the region effected by the ice-rink.",
            "type": "number"
        },
        "duration": {
            "additionalProperties": true,
            "description": "Number of seconds the ice-rink lasts",
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