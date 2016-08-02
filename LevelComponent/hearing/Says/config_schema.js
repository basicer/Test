{
    "type": "object",
    "additionalProperties": false,
    "id": "__base__",
    "default": {
        "labelStyle": "say",
        "silent": false,
        "cooldown": 0,
        "voiceRange": 20
    },
    "properties": {
        "labelStyle": {
            "default": "say",
            "enum": [
                "say",
                "dialogue"
            ],
            "type": "string",
            "additionalProperties": false,
            "description": "The type of speech bubble used when saying something"
        },
        "voiceRange": {
            "format": "meters",
            "default": 20,
            "minimum": 0,
            "description": "How far this Thang can speak, in meters.",
            "type": "number"
        },
        "silent": {
            "default": false,
            "description": "Whether to ignore say() messages from this Thang when playing audio.",
            "type": "boolean"
        },
        "cooldown": {
            "default": 0,
            "format": "seconds",
            "minimum": 0,
            "description": "How many seconds each say takes. If 0, then saying is not a blocking action.",
            "type": "number"
        }
    }
}