{
    "type": "object",
    "additionalProperties": false,
    "id": "__base__",
    "default": {
        "obeyResponses": []
    },
    "properties": {
        "obeyResponses": {
            "description": "Responses to randomly say when obeying a command.",
            "items": {
                "type": "string"
            },
            "type": "array"
        }
    }
}