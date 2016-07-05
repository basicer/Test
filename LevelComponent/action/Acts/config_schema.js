{
    "type": "object",
    "additionalProperties": false,
    "default": {
        "resetsToIdle": false
    },
    "properties": {
        "resetsToIdle": {
            "default": false,
            "description": "Whether this Thang resets action to 'idle' each time before chooseAction is called.",
            "type": "boolean"
        }
    },
    "id": "__base__"
}