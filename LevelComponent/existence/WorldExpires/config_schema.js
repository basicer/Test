{
    "type": "object",
    "additionalProperties": false,
    "default": {
        "lifespan": 30
    },
    "properties": {
        "lifespan": {
            "exclusiveMinimum": true,
            "minimum": 0,
            "description": "How many seconds this level will run, max, before ending in defeat.",
            "type": "number"
        }
    }
}