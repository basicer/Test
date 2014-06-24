{
    "type": "object",
    "additionalProperties": false,
    "id": "__base__",
    "default": {
        "waypoints": []
    },
    "properties": {
        "waypoints": {
            "description": "Array of {x, y} points to visit in order.",
            "items": {
                "description": "An {x, y} position in meters from the left and bottom edges of the map.",
                "properties": {
                    "y": {
                        "type": "number"
                    },
                    "x": {
                        "type": "number"
                    }
                },
                "additionalProperties": false,
                "type": "object"
            },
            "type": "array"
        }
    }
}