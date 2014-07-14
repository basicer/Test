{
    "default": {
        "lifespan": 0
    },
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "lifespan": {
            "format": "seconds",
            "minimum": 0,
            "exclusiveMinimum": true,
            "description": "How many seconds this Thang will exist.",
            "type": "number"
        }
    }
}