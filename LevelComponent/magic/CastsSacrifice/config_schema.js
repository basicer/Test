{
    "default": {
        "efficiency": 0.9,
        "specificCooldown": 2,
        "cooldown": 0.25,
        "range": 20
    },
    "properties": {
        "efficiency": {
            "description": "How much of the health and damage are transferred?",
            "minimum": 0,
            "maximum": 1,
            "type": "number"
        },
        "specificCooldown": {
            "format": "seconds",
            "type": "number"
        },
        "range": {
            "minimum": 0,
            "format": "meters",
            "description": "The distance the spell can be cast over.  Both victim and recipient must be within range.",
            "type": "number"
        },
        "cooldown": {
            "format": "seconds",
            "type": "number"
        }
    }
}