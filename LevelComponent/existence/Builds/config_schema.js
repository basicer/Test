{
    "default": {
        "buildRange": 5
    },
    "type": "object",
    "additionalProperties": false,
    "id": "__base__",
    "properties": {
        "buildables": {
            "additionalProperties": {
                "required": [
                    "thangType",
                    "buildCooldown"
                ],
                "properties": {
                    "thangType": {
                        "description": "The ThangType to use as a template for what this can build.",
                        "format": "thang-type",
                        "type": "string"
                    },
                    "offset": {
                        "required": [
                            "x",
                            "y",
                            "z"
                        ],
                        "properties": {
                            "z": {
                                "additionalProperties": false,
                                "type": "number"
                            },
                            "y": {
                                "additionalProperties": false,
                                "type": "number"
                            },
                            "x": {
                                "additionalProperties": false,
                                "type": "number"
                            }
                        },
                        "description": "The offset by which the thang is created in relation with the Builder. Should spawn at template location if not specified.",
                        "type": "object"
                    },
                    "ids": {
                        "uniqueItems": true,
                        "items": {
                            "type": "string"
                        },
                        "description": "IDs to use, in order, for the built Thangs.",
                        "type": "array"
                    },
                    "goldCost": {
                        "minimum": 0,
                        "description": "How much gold this Thang costs to build.",
                        "type": "integer"
                    },
                    "buildCooldown": {
                        "description": "Time in seconds to build this unit",
                        "type": "number"
                    },
                    "thangTemplate": {
                        "format": "thang",
                        "description": "The ID of a Thang to use as a template for what this can build.",
                        "type": "string"
                    }
                },
                "additionalProperties": false,
                "type": "object"
            },
            "type": "object"
        },
        "buildRange": {
            "format": "meters",
            "type": "number"
        }
    }
}