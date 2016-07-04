{
    "properties": {
        "specificCooldown": {
            "description": "The cooldown, in seconds.",
            "type": "number",
            "format": "seconds"
        },
        "range": {
            "description": "The distance the spell can be cast over. Both targets must be within this range.",
            "minimum": 0,
            "type": "number",
            "format": "meters"
        },
        "cooldown": {
            "description": "The cast time, in seconds.",
            "format": "seconds",
            "type": "number"
        }
    },
    "default": {
        "range": 25,
        "specificCooldown": 10,
        "cooldown": 0.25
    }
}