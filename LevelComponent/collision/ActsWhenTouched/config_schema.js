{
    "default": {
        "groundOnly": false,
        "touchAction": "fall",
        "touchRange": 5
    },
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "groundOnly": {
            "description": "Interact only with grounded thangs.",
            "default": false,
            "type": "boolean"
        },
        "touchRange": {
            "default": 5,
            "description": "How far away the center of a Thang can be from the center of this Thang before it will fall.",
            "minimum": 0,
            "type": "number"
        },
        "touchAction": {
            "description": "Which action to perform when touched.",
            "type": "string"
        }
    }
}