{
    "type": "object",
    "additionalProperties": false,
    "id": "__base__",
    "properties": {
        "bobTime": {
            "default": 1,
            "format": "seconds",
            "description": "The Thang's bob interval, in seconds.",
            "type": "number"
        },
        "bobHeight": {
            "format": "meters",
            "default": 0.5,
            "description": "How high the Thang bobs, in meters.",
            "type": "number"
        }
    },
    "default": {
        "bobTime": 1,
        "bobHeight": 0.5
    }
}