{
    "type": "object",
    "additionalProperties": false,
    "default": {
        "specificCooldown": 0,
        "flapRadius": "30",
        "flapWindMass": "20",
        "cooldown": 0.1
    },
    "properties": {
        "flapRadius": {
            "format": "meters",
            "description": "How far away the flap can affect Thangs, in meters.",
            "default": 30,
            "type": "number"
        },
        "flapWindMass": {
            "default": 20,
            "format": "kilograms",
            "description": "How much mass the wind from the flap imparts to Thangs at the center of the radius, in kilograms.",
            "minimum": 0,
            "type": "number"
        },
        "specificCooldown": {
            "description": "How long before this specific flap can be used again, in seconds.",
            "minimum": 0,
            "format": "seconds",
            "type": "number"
        },
        "cooldown": {
            "description": "How long the flap takes, in seconds.",
            "default": 0.3,
            "format": "seconds",
            "minimum": 0,
            "type": "number"
        }
    }
}