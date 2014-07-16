{
    "type": "object",
    "additionalProperties": false,
    "default": {
        "patrolChaseRange": 20,
        "patrolPoints": []
    },
    "properties": {
        "patrolChaseRange": {
            "format": "meters",
            "minimum": 0,
            "description": "How far away an enemy can be before this Thang will not chase it.",
            "type": "number"
        },
        "patrolPoints": {
            "items": {
                "format": "point2d",
                "properties": {
                    "y": {
                        "type": "number"
                    },
                    "x": {
                        "type": "number"
                    }
                },
                "description": "An {x, y} position in meters from the left and bottom edges of the map.",
                "additionalProperties": false,
                "type": "object"
            },
            "description": "Array of {x, y} points to cycle between.",
            "type": "array"
        }
    }
}