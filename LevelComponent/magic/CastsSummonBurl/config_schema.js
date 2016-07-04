{
    "default": {
        "requiredThangTypes": [
            "530e5926c06854403ba68693"
        ],
        "count": 1,
        "specificCooldown": 12,
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
                "description": "The ThangType to use as a template for this Thang's burl."
            },
            "additionalProperties": true,
            "description": "Contains a single element: the ThangType to use as a template for this Thang's burl.",
            "type": "array"
        },
        "count": {
            "minimum": 1,
            "description": "Number of burls spawned.",
            "type": "number"
        },
        "cooldown": {
            "format": "seconds",
            "minimum": 0,
            "type": "number"
        }
    }
}