{
    "type": "object",
    "additionalProperties": false,
    "id": "__base__",
    "default": {
        "throwDamage": 10,
        "throwZAngle": 0.785,
        "throwMass": 500,
        "specificCooldown": 2,
        "throwRange": 3,
        "cooldown": 1
    },
    "properties": {
        "throwZAngle": {
            "default": 0.785,
            "format": "radians",
            "description": "What angle from horizontal to apply the throwMass momentum at.",
            "type": "number"
        },
        "throwRange": {
            "format": "meters",
            "default": 3,
            "exclusiveMinimum": true,
            "minimum": 0,
            "description": "How many meters this throw can reach.",
            "type": "number"
        },
        "throwMass": {
            "default": 5000,
            "format": "kilograms",
            "description": "How much mass to impart to the momentum of the throw.",
            "type": "number"
        },
        "throwDamage": {
            "description": "The damage done to the enemy that is thrown",
            "type": "number"
        },
        "specificCooldown": {
            "format": "seconds",
            "minimum": 0,
            "description": "How many seconds before this specific throw can be done again, if longer than normal cooldown.",
            "type": "number"
        },
        "cooldown": {
            "format": "seconds",
            "minimum": 0,
            "default": 1,
            "description": "How many seconds each throw takes.",
            "type": "number"
        }
    }
}