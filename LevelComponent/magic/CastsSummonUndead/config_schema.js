{
    "default": {
        "requiredThangTypes": [
            "54c83b8ae2829db30d0310e0"
        ],
        "count": 2,
        "specificCooldown": 7.5,
        "cooldown": 0.75
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
                "type": "string",
                "format": "thang-type",
                "description": "The ThangType to use as a template for this Thang's skeleton."
            },
            "additionalProperties": true,
            "description": "Contains a single element: the ThangType to use as a template for this Thang's skeletons.",
            "type": "array"
        },
        "count": {
            "minimum": 1,
            "description": "Number of undead spawned.",
            "type": "number"
        },
        "cooldown": {
            "format": "seconds",
            "minimum": 0,
            "type": "number"
        }
    }
}