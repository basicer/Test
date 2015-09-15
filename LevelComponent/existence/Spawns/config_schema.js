{
    "default": {
        "requiredThangTypes": []
    },
    "properties": {
        "requiredThangTypes": {
            "description": "Additional ThangTypes upon which this Spawner depends.",
            "items": {
                "description": "Additional ThangType upon which this Spawner depends.",
                "format": "thang-type",
                "type": "string"
            },
            "type": "array"
        }
    },
    "type": "object",
    "additionalProperties": false,
    "id": "__base__"
}