{
    "type": "object",
    "additionalProperties": false,
    "default": {
        "specificCooldown": 0,
        "hatchType": "munchkin",
        "devourToHatchRatio": 3,
        "cooldown": 0.5
    },
    "properties": {
        "hatchType": {
            "default": "munchkin",
            "description": "The buildable template id to hatch.",
            "type": "string"
        },
        "devourToHatchRatio": {
            "description": "How many Thangs to hatch per devoured Thang.",
            "exclusiveMinimum": true,
            "minimum": 0,
            "default": 3,
            "type": "integer"
        },
        "specificCooldown": {
            "format": "seconds",
            "minimum": 0,
            "description": "How many seconds before this specific hatch can be done again, if longer than normal cooldown.",
            "type": "number"
        },
        "cooldown": {
            "format": "seconds",
            "minimum": 0,
            "default": 0.5,
            "description": "How many seconds each hatch takes.",
            "type": "number"
        }
    }
}