{
    "default": {
        "programmableDateProperties": [
            "now",
            "parse",
            "etc"
        ]
    },
    "properties": {
        "programmableDateProperties": {
            "items": {
                "description": "Names of Date functions/properties which should be documented for Programmable methods",
                "enum": [
                    "now",
                    "parse",
                    "etc"
                ],
                "type": "string"
            },
            "default": [
                "now",
                "parse",
                "etc"
            ],
            "type": [
                "array"
            ]
        }
    },
    "type": "object",
    "additionalProperties": false
}