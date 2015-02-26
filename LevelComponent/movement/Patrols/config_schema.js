{
    "type": "object",
    "additionalProperties": false,
    "id": "__base__",
    "default": {
        "shouldPatrol": false,
        "patrolPoints": [],
        "patrolSpeedRatio": 0.25
    },
    "properties": {
        "shouldPatrol": {
            "default": false,
            "description": "Should the thang patrol",
            "type": "boolean"
        },
        "patrolSpeedRatio": {
            "description": "0-1 ratio of patrol speed to max speed.",
            "maximum": 1,
            "minimum": 0,
            "type": "number"
        },
        "patrolPoints": {
            "additionalProperties": true,
            "items": {
                "additionalProperties": true,
                "format": "point2d",
                "properties": {
                    "y": {
                        "type": "number"
                    },
                    "x": {
                        "type": "number"
                    }
                },
                "description": "Am {x, y} position"
            },
            "description": "Array of {x, y} points to cycle between.",
            "type": "array"
        }
    }
}