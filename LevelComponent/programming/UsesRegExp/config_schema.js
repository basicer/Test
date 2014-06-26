{
    "default": {
        "programmableRegExpProperties": [
            "global",
            "ignoreCase",
            "etc"
        ]
    },
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "programmableRegExpProperties": {
            "items": {
                "description": "Names of RegExp functions/properties which should be documented for Programmable methods",
                "enum": [
                    "global",
                    "ignoreCase",
                    "etc"
                ],
                "type": "string"
            },
            "default": [
                "global",
                "ignoreCase",
                "etc"
            ],
            "type": [
                "array"
            ]
        }
    }
}