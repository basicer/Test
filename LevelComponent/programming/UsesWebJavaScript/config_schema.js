{
    "type": "object",
    "default": {
        "programmableWebJavaScriptProperties": [
            "if",
            "else if",
            "else",
            "function"
        ]
    },
    "additionalProperties": false,
    "properties": {
        "programmableWebJavaScriptProperties": {
            "type": "array",
            "items": {
                "description": "Name of Web JavaScript keywords which should be documented",
                "enum": [
                    "if",
                    "else if",
                    "else",
                    "function"
                ],
                "type": "string"
            }
        }
    }
}