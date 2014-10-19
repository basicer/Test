{
    "default": {
        "teleportsInitially": false,
        "cooldown": 0.75,
        "teleportBoundary": {
            "y2": 30,
            "x2": 30,
            "y": 15,
            "x": 15
        }
    },
    "type": "object",
    "additionalProperties": false,
    "id": "__base__",
    "properties": {
        "teleportsInitially": {
            "description": "Whether this Thang teleports once initially when it spawns (to randomize its location within teleportBoundary).",
            "default": false,
            "type": "boolean"
        },
        "cooldown": {
            "default": 0.75,
            "description": "Cooldown in seconds that the teleport will take. Requires action.Acts for teleportation to take time.",
            "minimum": 0,
            "format": "seconds",
            "type": "number"
        },
        "teleportBoundary": {
            "required": [
                "x",
                "y",
                "x2",
                "y2"
            ],
            "properties": {
                "y2": {
                    "format": "meters",
                    "default": 30,
                    "description": "The second Y coordinate.",
                    "title": "y2",
                    "type": "number"
                },
                "x2": {
                    "format": "meters",
                    "default": 30,
                    "description": "The second X coordinate.",
                    "title": "x2",
                    "type": "number"
                },
                "y": {
                    "format": "meters",
                    "default": 15,
                    "description": "The first Y coordinate.",
                    "title": "y1",
                    "type": "number"
                },
                "x": {
                    "format": "meters",
                    "default": 15,
                    "description": "The first X coordinate.",
                    "title": "x1",
                    "type": "number"
                }
            },
            "additionalProperties": false,
            "type": "object"
        }
    }
}