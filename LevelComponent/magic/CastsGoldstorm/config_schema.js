{
    "default": {
        "requiredThangTypes": [
            "550b4b9d8a7d3c197a824d5e"
        ],
        "amount": 105,
        "specificCooldown": 15,
        "cooldown": 0.75
    },
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "requiredThangTypes": {
            "items": {
                "type": "string",
                "format": "thang-type",
                "description": "The ThangType to use as a template for this Thang's gold cloud."
            },
            "additionalProperties": true,
            "description": "Contains a single element: the ThangType to use as a template for this Thang's force bolts.",
            "type": "array"
        },
        "specificCooldown": {
            "format": "seconds",
            "minimum": 0,
            "type": "number"
        },
        "cooldown": {
            "format": "seconds",
            "minimum": 0,
            "type": "number"
        },
        "amount": {
            "description": "Total value of coins spawned.",
            "type": "number"
        }
    }
}