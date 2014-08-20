{
    "type": "object",
    "additionalProperties": false,
    "default": {
        "desireDistance": 30,
        "avoidDistance": 15,
        "commonHeadingWeight": 0.125,
        "centerOfMassWeight": 0.05,
        "flockBounds": {
            "yMin": 0,
            "yMax": 100,
            "xMin": 0,
            "xMax": 100
        },
        "desirePoints": []
    },
    "properties": {
        "desireDistance": {
            "description": "Max distance a desire point can be and still attract the flock",
            "default": 30,
            "additionalProperties": false,
            "type": "number"
        },
        "desirePoints": {
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
                "description": "An {x, y} position in meters from the left and bottom edges of the map",
                "additionalProperties": false,
                "type": "object"
            },
            "description": "Array of {x, y} points that the flock wants to go towards.",
            "type": "array"
        },
        "avoidDistance": {
            "description": "How far to stay away from outsiders",
            "default": 15,
            "additionalProperties": false,
            "type": "number"
        },
        "commonHeadingWeight": {
            "description": "How much weight is given to steering to match average heading of flock",
            "default": 0.125,
            "additionalProperties": false,
            "type": "number"
        },
        "centerOfMassWeight": {
            "description": "How much weight is given to steering towards the flock's center of mass",
            "default": 0.05,
            "additionalProperties": false,
            "type": "number"
        },
        "flockBounds": {
            "properties": {
                "yMin": {
                    "default": 0,
                    "additionalProperties": false,
                    "type": "number"
                },
                "yMax": {
                    "default": 100,
                    "additionalProperties": false,
                    "type": "number"
                },
                "xMin": {
                    "default": 0,
                    "additionalProperties": false,
                    "type": "number"
                },
                "xMax": {
                    "default": 100,
                    "additionalProperties": false,
                    "type": "number"
                }
            },
            "required": [
                "xMax",
                "xMin",
                "yMax",
                "yMin"
            ],
            "additionalProperties": false,
            "type": "object"
        }
    }
}