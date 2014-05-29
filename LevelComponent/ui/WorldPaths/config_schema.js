{
    "type": "object",
    "additionalProperties": false,
    "default": {
        "showPaths": "paused"
    },
    "properties": {
        "showPaths": {
            "description": "When to show past/future paths for Thangs in the World.",
            "enum": [
                "never",
                "paused",
                "selected",
                "always"
            ],
            "type": "string"
        }
    }
}