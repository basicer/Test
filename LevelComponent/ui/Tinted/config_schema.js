{
    "default": {
        "tints": []
    },
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "tints": {
            "items": {
                "default": {
                    "lightnessMax": 50,
                    "lightnessMin": 50,
                    "saturationMax": 50,
                    "saturationMin": 50,
                    "hueMax": 180,
                    "hueMin": 180,
                    "name": "team"
                },
                "required": [
                    "name",
                    "hueMin",
                    "hueMax",
                    "saturationMin",
                    "saturationMax",
                    "lightnessMin",
                    "lightnessMax"
                ],
                "properties": {
                    "lightnessMax": {
                        "maximum": 100,
                        "minimum": 0,
                        "type": "integer"
                    },
                    "lightnessMin": {
                        "maximum": 100,
                        "minimum": 0,
                        "type": "integer"
                    },
                    "saturationMax": {
                        "maximum": 100,
                        "minimum": 0,
                        "type": "integer"
                    },
                    "saturationMin": {
                        "maximum": 100,
                        "minimum": 0,
                        "type": "integer"
                    },
                    "hueMax": {
                        "maximum": 360,
                        "minimum": 0,
                        "type": "integer"
                    },
                    "hueMin": {
                        "maximum": 360,
                        "minimum": 0,
                        "type": "integer"
                    },
                    "name": {
                        "type": "string"
                    }
                },
                "additionalProperties": false,
                "type": "object"
            },
            "type": "array"
        }
    }
}