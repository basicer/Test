{
    "default": {
        "mass": 2000,
        "requiredThangTypes": [
            "531a6a2f1ddc910545d5e944"
        ],
        "damage": 150,
        "radius": 15,
        "specificCooldown": 10,
        "cooldown": 0.75,
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
        "requiredThangTypes": {
            "items": {
                "format": "thang-type",
                "type": "string",
                "description": "The ThangType to use as a template for this Thang's fireballs."
            },
            "description": "Contains a single element: the ThangType to use as a template for this Thang's fireballs.",
            "type": "array"
        },
        "range": {
            "format": "meters",
            "minimum": 0,
            "type": "number"
        },
        "radius": {
            "minimum": 0,
            "description": "Radius of the splash damage.",
            "format": "meters",
            "type": "number"
        },
        "mass": {
            "description": "How much explosive force to apply to thangs hit at the center of the fireball.",
            "format": "kilograms",
            "type": "number"
        },
        "damage": {
            "minimum": 0,
            "description": "Damage to target.",
            "type": "number"
        },
        "cooldown": {
            "format": "seconds",
            "minimum": 0,
            "type": "number"
        }
    }
}