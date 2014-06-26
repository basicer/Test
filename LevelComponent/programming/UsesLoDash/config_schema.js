{
    "default": {
        "programmableLoDashProperties": [
            "filter",
            "without",
            "etc"
        ]
    },
    "properties": {
        "programmableLoDashProperties": {
            "items": {
                "description": "Names of Lo-Dash functions/properties which should be documented for Programmable methods",
                "enum": [
                    "filter",
                    "without",
                    "etc"
                ],
                "type": "string"
            },
            "default": [
                "filter",
                "without",
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