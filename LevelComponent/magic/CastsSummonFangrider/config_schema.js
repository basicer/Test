{
    "default": {
        "requiredThangTypes": [
            "529e5f0c6febb9ca7e00000c"
        ],
        "count": 1,
        "specificCooldown": 7.5,
        "cooldown": 0.5
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
                "description": "The ThangType to use as a template for this Thang's fangrider."
            },
            "additionalProperties": true,
            "description": "Contains a single element: the ThangType to use as a template for this Thang's fangriders.",
            "type": "array"
        },
        "count": {
            "minimum": 1,
            "description": "Number of fangriders spawned.",
            "type": "number"
        },
        "cooldown": {
            "format": "seconds",
            "minimum": 0,
            "type": "number"
        }
    }
}