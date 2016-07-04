{
    "default": {
        "radius": 20,
        "mass": 350,
        "damage": 50,
        "specificCooldown": 15,
        "cooldown": 0.75,
        "range": 20
    },
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "damage": {
            "minimum": 0,
            "description": "How much damage the shockwave does to targets at the center of its blast.",
            "type": "number"
        },
        "mass": {
            "minimum": 0,
            "format": "\"kilograms\"",
            "type": "number",
            "description": "How much mass the shockwave imparts to Thangs at the center of the radius, in kilograms."
        },
        "radius": {
            "format": "meters",
            "type": "number",
            "description": "How far away the shockwave can affect Thangs, in meters."
        },
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
        "cooldown": {
            "format": "seconds",
            "minimum": 0,
            "type": "number"
        }
    }
}