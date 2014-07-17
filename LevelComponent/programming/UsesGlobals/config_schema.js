{
    "default": {
        "programmableGlobalProperties": [
            "isFinite",
            "isNaN",
            "parseFloat",
            "parseInt",
            "decodeURI",
            "decodeURIComponent",
            "encodeURI",
            "encodeURIComponent",
            "escape",
            "unescape",
            "Infinity",
            "NaN",
            "undefined",
            "null",
            "Boolean",
            "Error",
            "arguments"
        ]
    },
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "programmableGlobalProperties": {
            "items": {
                "description": "Name of Array functions/properties which should be documented for Programmable methods",
                "enum": [
                    "isFinite",
                    "isNaN",
                    "parseFloat",
                    "parseInt",
                    "decodeURI",
                    "decodeURIComponent",
                    "encodeURI",
                    "encodeURIComponent",
                    "escape",
                    "unescape",
                    "Infinity",
                    "NaN",
                    "undefined",
                    "null",
                    "Boolean",
                    "Error",
                    "arguments"
                ],
                "type": "string"
            },
            "default": [
                "isFinite",
                "isNaN",
                "parseFloat",
                "parseInt",
                "decodeURI",
                "decodeURIComponent",
                "encodeURI",
                "encodeURIComponent",
                "escape",
                "unescape",
                "Infinity",
                "NaN",
                "undefined",
                "null",
                "Boolean",
                "Error",
                "arguments"
            ],
            "type": [
                "array"
            ]
        }
    }
}