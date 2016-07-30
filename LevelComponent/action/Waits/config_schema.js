{
    "default": {
        "defaultDuration": 1
    },
    "type": "object",
    "additionalProperties": false,
    "id": "__base__",
    "properties": {
        "defaultDuration": {
            "minimum": 0,
            "exclusiveMinimum": true,
            "description": "Default wait duration when wait() is called with no arguments, in seconds.",
            "default": 1,
            "type": "number"
        }
    }
}