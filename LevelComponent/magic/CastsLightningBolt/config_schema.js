{
    "default": {
        "splashRange": 6,
        "splashFactor": 0.1,
        "requiredThangTypes": [
            "529ec2cec423d4e83b000011"
        ],
        "damage": 300,
        "specificCooldown": 12.5,
        "cooldown": 0.75
    },
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "splashRange": {
            "format": "meters",
            "minimum": 0,
            "type": "number"
        },
        "splashFactor": {
            "maximum": 1,
            "type": "number"
        },
        "specificCooldown": {
            "format": "seconds",
            "minimum": 0,
            "type": "number"
        },
        "requiredThangTypes": {
            "items": {
                "format": "thang-type",
                "type": "string",
                "description": "The ThangType to use as a template for this Thang's bolts."
            },
            "description": "Contains a single element: the ThangType to use as a template for this Thang's lightning Bolts.",
            "additionalProperties": true,
            "type": "array"
        },
        "damage": {
            "type": "number"
        },
        "cooldown": {
            "format": "seconds",
            "minimum": 0,
            "type": "number"
        }
    }
}