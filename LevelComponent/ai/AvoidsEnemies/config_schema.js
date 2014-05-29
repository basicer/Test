{
    "type": "object",
    "additionalProperties": false,
    "default": {
        "mainTarget": {},
        "skirtDistance": 12
    },
    "properties": {
        "skirtDistance": {
            "minimum": 0,
            "description": "How far away an enemy can be before this Thang will not start to avoid it.",
            "type": "number"
        },
        "mainTarget": {
            "description": "The Thang or {x, y} targetPos this Thang is ultimately targeting.",
            "type": "object"
        }
    }
}