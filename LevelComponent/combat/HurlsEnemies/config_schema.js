{
    "type": "object",
    "additionalProperties": false,
    "default": {
        "hurlDamage": 10,
        "hurlZAngle": 0.785,
        "hurlMass": 500,
        "specificCooldown": 2,
        "hurlRange": 3,
        "cooldown": 1
    },
    "properties": {
        "specificCooldown": {
            "format": "seconds",
            "minimum": 0,
            "description": "How many seconds before this specific hurl can be done again, if longer than normal cooldown.",
            "type": "number"
        },
        "hurlZAngle": {
            "default": 0.785,
            "format": "radians",
            "description": "What angle from horizontal to apply the hurlMass momentum at.",
            "type": "number"
        },
        "hurlRange": {
            "format": "meters",
            "default": 3,
            "exclusiveMinimum": true,
            "minimum": 0,
            "description": "How many meters this hurl can reach.",
            "type": "number"
        },
        "hurlMass": {
            "default": 5000,
            "format": "kilograms",
            "description": "How much mass to impart to the momentum of the hurl.",
            "type": "number"
        },
        "hurlDamage": {
            "description": "The damage done to the enemy that is hurled",
            "type": "number"
        },
        "cooldown": {
            "format": "seconds",
            "minimum": 0,
            "default": 1,
            "description": "How many seconds each hurl takes.",
            "type": "number"
        }
    }
}