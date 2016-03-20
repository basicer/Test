{
    "type": "object",
    "additionalProperties": false,
    "id": "__base__",
    "default": {
        "stompDamage": 15,
        "stompZAngle": 1,
        "stompMass": 5000,
        "stompRadius": 15,
        "specificCooldown": 15,
        "cooldown": 2
    },
    "properties": {
        "stompZAngle": {
            "format": "radians",
            "description": "What angle from horizontal to apply the stompMass momentum at.",
            "type": "number"
        },
        "stompRadius": {
            "format": "meters",
            "default": 15,
            "exclusiveMinimum": true,
            "minimum": 0,
            "description": "How many meters this stomp can reach.",
            "type": "number"
        },
        "stompMass": {
            "default": 3000,
            "format": "kilograms",
            "description": "How much mass to impart to the momentum of the stomp.",
            "type": "number"
        },
        "stompDamage": {
            "default": 15,
            "exclusiveMinimum": true,
            "minimum": 0,
            "description": "How much damage stomp does at the center point, proportional to the distance from that centerpoint.",
            "type": "number"
        },
        "specificCooldown": {
            "format": "seconds",
            "minimum": 0,
            "description": "How many seconds before this specific stomp can be done again, if longer than normal cooldown.",
            "type": "number"
        },
        "cooldown": {
            "format": "seconds",
            "minimum": 0,
            "default": 2,
            "description": "How many seconds each stomp takes.",
            "type": "number"
        }
    }
}