[
    {
        "args": [
            {
                "description": "string to parse as JSON",
                "example": "{\"count\": 0}",
                "type": "string",
                "name": "text"
            },
            {
                "description": "Optional: if provided, instructs parse on how to alter the object before returning obj to caller",
                "example": {
                    "javascript": "function(obj) { return obj[\"count\"] + 1; }"
                },
                "type": "function",
                "name": "transform"
            }
        ],
        "description": "Parses a string as JSON, optionally transforming the value.",
        "type": "function",
        "name": "parse"
    },
    {
        "args": [
            {
                "description": "The value to be converted to a JSON string",
                "example": "{ count: 12 }",
                "type": "object",
                "name": "value"
            },
            {
                "description": "List of keys to allow through to stringified value.  ",
                "example": "[\"count\"]",
                "type": "function",
                "name": "replacer"
            }
        ],
        "description": "Converts a JavaScript value to a JSON string.\nFor more advanced usage, Google \"MDN JSON\".\n",
        "type": "function",
        "name": "stringify"
    }
]