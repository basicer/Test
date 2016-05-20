{
    "type": "object",
    "additionalProperties": false,
    "default": {
        "devourRange": 3,
        "devourDamage": 200,
        "specificCooldown": 5,
        "cooldown": 0.5
    },
    "properties": {
        "specificCooldown": {
            "format": "seconds",
            "minimum": 0,
            "description": "How many seconds before this specific devour can be done again, if longer than normal cooldown.",
            "type": "number"
        },
        "devourRange": {
            "description": "How far away the Thang needs to be to devour a target, in meters.",
            "exclusiveMinimum": true,
            "minimum": 0,
            "format": "meters",
            "default": 3,
            "type": "number"
        },
        "devourDamage": {
            "description": "How much damage a devour does. If the target has less health, the devourer will gain its remaining health, om nom nom.",
            "default": 200,
            "type": "number"
        },
        "cooldown": {
            "format": "seconds",
            "minimum": 0,
            "default": 0.5,
            "description": "How many seconds each devour takes.",
            "type": "number"
        }
    }
}