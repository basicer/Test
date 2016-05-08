{
    "default": {
        "manager": false,
        "income": 3,
        "captureRadius": 10
    },
    "properties": {
        "manager": {
            "description": "Whether this Thang should manage the Control Points.",
            "default": false,
            "type": "boolean"
        },
        "income": {
            "description": "Income earned per Control Point captured.",
            "default": 3,
            "additionalProperties": false,
            "minimum": 0,
            "type": "number"
        },
        "captureRadius": {
            "description": "Capture radius of a Control Point.",
            "minimum": 0,
            "default": 10,
            "type": "number"
        }
    }
}