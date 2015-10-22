{
    "default": {
        "programmableJSONProperties": [
            "parse",
            "stringify"
        ]
    },
    "properties": {
        "programmableJSONProperties": {
            "items": {
                "description": "Names of JSON functions/properties which should be documented for Programmable methods",
                "enum": [
                    "parse",
                    "stringify"
                ],
                "type": "string"
            },
            "default": [
                "parse",
                "stringify"
            ],
            "type": [
                "array"
            ]
        }
    },
    "type": "object",
    "additionalProperties": false
}