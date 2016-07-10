{
    "default": {
        "throwMass": 0,
        "specificCooldown": 0,
        "cooldown": 0.5,
        "throwRange": 15,
        "throwDamage": 5,
        "requiredThangTypes": []
    },
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "throwRange": {
            "format": "meters",
            "default": 15,
            "exclusiveMinimum": true,
            "minimum": 0,
            "description": "How many meters this throw can reach.",
            "type": "number"
        },
        "throwMass": {
            "default": 0,
            "format": "kilograms",
            "description": "How much mass to impart to the momentum of the throw.",
            "type": "number"
        },
        "throwDamage": {
            "default": 5,
            "description": "How much damage each throw does.",
            "type": "number"
        },
        "specificCooldown": {
            "default": 0,
            "format": "seconds",
            "minimum": 0,
            "description": "How many seconds before this specific throw can be done again, if longer than normal cooldown.",
            "type": "number"
        },
        "requiredThangTypes": {
            "maxItems": 1,
            "items": {
                "type": "string",
                "format": "thang-type",
                "description": "The ThangType to use as a template for this Thang's thrown missiles."
            },
            "additionalProperties": true,
            "description": "Contains a single element: the ThangType to use as a template for this Thang's thrown missiles.",
            "type": "array"
        },
        "cooldown": {
            "format": "seconds",
            "minimum": 0,
            "default": 0.5,
            "description": "How many seconds each throw takes.",
            "type": "number"
        }
    }
}