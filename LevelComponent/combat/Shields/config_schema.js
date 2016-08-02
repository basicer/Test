{
    "default": {
        "shieldDefenseFactor": 0.75,
        "specificCooldown": 0,
        "cooldown": 0.5
    },
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "specificCooldown": {
            "format": "seconds",
            "minimum": 0,
            "description": "How many seconds before this specific shield can be done again, if longer than normal cooldown.",
            "type": "number"
        },
        "shieldDefenseFactor": {
            "default": 0.75,
            "description": "How much damage is absorbed while in shield mode.",
            "maximum": 1,
            "minimum": 0,
            "type": "number"
        },
        "cooldown": {
            "format": "seconds",
            "minimum": 0,
            "default": 0.5,
            "description": "How many seconds each shield takes.",
            "type": "number"
        }
    },
    "id": "__base__"
}