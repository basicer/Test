{
    "type": "object",
    "additionalProperties": false,
    "default": {
        "aggroResponses": []
    },
    "properties": {
        "aggroResponses": {
            "description": "List of responses to say when getting angry (aggro happens on the last one).",
            "items": {
                "type": "string"
            },
            "type": "array"
        }
    }
}