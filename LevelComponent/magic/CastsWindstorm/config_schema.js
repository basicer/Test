{
    "default": {
        "mass": 40,
        "radius": 30,
        "specificCooldown": 0,
        "cooldown": 0.1,
        "range": 30
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
            "description": "How far away the windstorm can affect Thangs, in meters.",
            "type": "number"
        },
        "mass": {
            "format": "kilograms",
            "minimum": 0,
            "description": "How much mass the windstorm imparts to Thangs at the center of the radius, in kilograms.",
            "type": "number"
        },
        "cooldown": {
            "format": "seconds",
            "minimum": 0,
            "type": "number"
        }
    }
}