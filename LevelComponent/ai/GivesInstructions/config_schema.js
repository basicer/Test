{
    "properties": {
        "range": {
            "description": "How close the hero must come before the message is spoken.",
            "default": 10,
            "minimum": 0,
            "type": "number"
        },
        "message": {
            "default": "I have nothing to say.",
            "description": "Message the thang will say.",
            "type": "string",
            "additionalProperties": false
        }
    }
}