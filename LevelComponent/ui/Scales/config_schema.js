{
    "type": "object",
    "additionalProperties": false,
    "default": {
        "scaleFactorY": 0,
        "scaleFactorX": 0,
        "scaleFactor": 1
    },
    "id": "__base__",
    "properties": {
        "scaleFactorY": {
            "description": "Multiply the initial visual height of the Thang by this much.",
            "type": "number"
        },
        "scaleFactorX": {
            "description": "Multiply the initial visual width of the Thang by this much.",
            "type": "number"
        },
        "scaleFactor": {
            "description": "Multiply the initial visual size of the Thang by this much.",
            "type": "number"
        }
    }
}