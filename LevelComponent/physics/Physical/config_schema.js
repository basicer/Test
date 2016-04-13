{
    "type": "object",
    "additionalProperties": false,
    "id": "__base__",
    "properties": {
        "shape": {
            "enum": [
                "box",
                "sheet",
                "ellipsoid",
                "disc"
            ],
            "default": "box",
            "description": "A physical shape to use for physics and size calculations.",
            "type": "string"
        },
        "rotation": {
            "format": "radians",
            "default": 0,
            "type": "number",
            "description": "Rotation in radians (0 = facing right, PI/2 = facing up)."
        },
        "depth": {
            "default": 1,
            "format": "meters",
            "exclusiveMinimum": true,
            "minimum": 0,
            "type": "number",
            "description": "How tall (z distance) this Thang is in meters."
        },
        "height": {
            "format": "meters",
            "default": 1,
            "exclusiveMinimum": true,
            "minimum": 0,
            "description": "How tall (y distance) this Thang is in meters.",
            "type": "number"
        },
        "width": {
            "format": "meters",
            "default": 1,
            "exclusiveMinimum": true,
            "minimum": 0,
            "description": "How wide (x distance) this Thang is in meters.",
            "type": "number"
        },
        "pos": {
            "default": {
                "z": 0,
                "y": 0,
                "x": 0
            },
            "additionalProperties": false,
            "properties": {
                "z": {
                    "default": 0,
                    "type": "number"
                },
                "y": {
                    "default": 0,
                    "type": "number"
                },
                "x": {
                    "default": 0,
                    "type": "number"
                }
            },
            "format": "point3d",
            "required": [
                "x",
                "y"
            ],
            "description": "An {x, y} position in meters from left and bottom edges of the map.",
            "type": "object"
        }
    },
    "default": {
        "rotation": "0",
        "depth": 1,
        "shape": "ellipsoid",
        "height": 1,
        "width": 1,
        "pos": {
            "z": 0.5,
            "y": 0,
            "x": 0
        }
    }
}