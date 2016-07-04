{
    "default": {
        "duration": 4,
        "radius": 20,
        "factor": 0.25,
        "specificCooldown": 7.5,
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
            "default": 20,
            "description": "How far the time warp reaches around the caster, in meters.",
            "type": "number"
        },
        "factor": {
            "minimum": 0,
            "default": "0.25",
            "additionalProperties": false,
            "description": "The multiple of normal speed at which time passes for Thangs caught inside the time warp.",
            "type": "number"
        },
        "duration": {
            "format": "seconds",
            "description": "How long the time warp lasts.",
            "default": 5,
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