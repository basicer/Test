{
    "type": "object",
    "additionalProperties": false,
    "id": "__base__",
    "default": {
        "cooldown": 0,
        "currentSpeedRatio": 1,
        "rollingResistance": 0.3,
        "dragCoefficient": 1,
        "maxAcceleration": 100,
        "maxSpeed": 3.6,
        "locomotionType": "running"
    },
    "properties": {
        "velocity": {
            "required": [
                "x",
                "y",
                "z"
            ],
            "description": "Initial velocity the Thang will have.",
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
            "additionalProperties": false,
            "type": "object"
        },
        "cooldown": {
            "default": 0,
            "description": "How long each movement takes. 0 for max responsiveness, higher for faster simulation performance.",
            "minimum": 0,
            "format": "seconds",
            "type": "number"
        },
        "currentSpeedRatio": {
            "default": 1,
            "maximum": 1,
            "minimum": 0,
            "description": "Initial 0-1 ratio of normal speed to max speed.",
            "type": "number"
        },
        "rollingResistance": {
            "default": 0.3,
            "description": "F = Crr * N -- http://en.wikipedia.org/wiki/Rolling_resistance; we'll use this for all units which slow internally, including (inaccurately) runners, but not missiles.",
            "type": "number"
        },
        "dragCoefficient": {
            "default": 1,
            "description": "Usually between 0.001 and 2.1. http://en.wikipedia.org/wiki/Drag_coefficient",
            "type": "number"
        },
        "maxAcceleration": {
            "format": "acceleration",
            "default": 100,
            "description": "Max acceleration/decceleration in m/s^2 that this Thang will use to try to achieve its maxSpeed, or 0 if it doesn't self-propel.",
            "type": "number"
        },
        "maxSpeed": {
            "format": "speed",
            "default": 3.6,
            "description": "Max self-propelled speed in m/s.",
            "type": "number"
        },
        "locomotionType": {
            "default": "running",
            "enum": [
                "running",
                "rolling",
                "flying",
                "swimming"
            ],
            "description": "How this Thang propels itself.",
            "type": "string"
        }
    }
}