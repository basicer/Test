{
    "default": {
        "defendPosOffset": {}
    },
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "defendPosOffset": {
            "properties": {
                "y": {
                    "format": "meters",
                    "type": "number"
                },
                "x": {
                    "format": "meters",
                    "type": "number"
                }
            },
            "format": "point2d",
            "additionalProperties": false,
            "type": "object"
        }
    },
    "id": "__base__"
}