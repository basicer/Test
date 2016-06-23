{
    "type": "object",
    "additionalProperties": false,
    "id": "__base__",
    "default": {
        "seesThroughWalls": false,
        "visualRange": 9001
    },
    "properties": {
        "visualRange": {
            "format": "meters",
            "default": 9001,
            "minimum": 0,
            "description": "How far this Thang can see, in meters.",
            "type": "number"
        },
        "seesThroughWalls": {
            "default": false,
            "description": "Whether this Thang can see through walls (and doesn't have to perform line-of-sight checks).",
            "type": "boolean"
        }
    }
}