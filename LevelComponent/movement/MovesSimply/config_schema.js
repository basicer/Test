{
    "type": "object",
    "additionalProperties": false,
    "default": {
        "allowsSimpleMoveArguments": false,
        "snapPoints": [],
        "snapThreshold": 2.5,
        "simpleMoveDistance": 12
    },
    "properties": {
        "snapThreshold": {
            "type": "number",
            "description": "Deprecated–Movement System configures instead. When snapPoints are set, any simple move which would have ended within snapThreshold of a snap point will go there instead.",
            "default": 2.5
        },
        "snapPoints": {
            "items": {
                "format": "point2d",
                "additionalProperties": false,
                "properties": {
                    "y": {
                        "type": "number"
                    },
                    "x": {
                        "type": "number"
                    }
                },
                "description": "An {x, y} coordinate for simple move snapping.",
                "type": "object"
            },
            "description": "Deprecated–Movement System configures instead. Array of {x, y} coordinates to which a simple move will snap if within snapThreshold.",
            "type": "array"
        },
        "simpleMoveDistance": {
            "exclusiveMinimum": true,
            "minimum": 0,
            "default": 20,
            "description": "Deprecated–Movement System configures instead. Distance to move by default in meters.",
            "type": "number"
        },
        "allowsSimpleMoveArguments": {
            "description": "Whether the simple move commands allow arguments (like moveRight(24) to go 24 meters) or throws a default no-parameter error.",
            "type": "boolean"
        },
        "allowsArguments": {
            "description": "Whether the simple move commands allow arguments (like moveRight(24) to go 24 meters) or throws a default no-parameter error.",
            "type": "boolean"
        }
    }
}