{
    "default": {
        "collectableExclamation": "",
        "collectableProperties": []
    },
    "type": "object",
    "additionalProperties": false,
    "id": "__base__",
    "properties": {
        "collectableExclamation": {
            "description": "What whoever collects this Thang might say.",
            "type": "string"
        },
        "collectableProperties": {
            "description": "Like [\"pos\", \"x\", 30] to set pos.x = 30 when collected.",
            "items": {
                "type": "array"
            },
            "type": "array"
        }
    }
}