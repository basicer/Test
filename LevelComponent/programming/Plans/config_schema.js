{
    "type": "object",
    "additionalProperties": false,
    "id": "__base__",
    "default": {
        "planLoops": false,
        "worldEndsAfter": 0
    },
    "properties": {
        "worldEndsAfter": {
            "oneOf": [
                {
                    "type": "null"
                },
                {
                    "format": "seconds",
                    "default": 5,
                    "maximum": 3000,
                    "exclusiveMinimum": false,
                    "minimum": 0,
                    "type": "number"
                }
            ],
            "default": 5,
            "description": "When not null (or zero), ends the world this many seconds after this Thang finishes its plans."
        },
        "planLoops": {
            "description": "Whether the plan() method loops and is called again and again after it finishes each time.",
            "type": "boolean"
        }
    }
}