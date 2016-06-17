{
    "type": "object",
    "additionalProperties": false,
    "id": "__base__",
    "default": {
        "hearingDelayMaximum": 2,
        "hearingDelayMinimum": 0.5,
        "hearingRange": 9001
    },
    "properties": {
        "hearingDelayMaximum": {
            "format": "seconds",
            "default": 2,
            "minimum": 0,
            "type": "number",
            "description": "How long it takes this Thang to react to something it hears, maximum."
        },
        "hearingDelayMinimum": {
            "format": "seconds",
            "default": 0.5,
            "minimum": 0,
            "description": "How long it takes this Thang to react to something it hears, minimum.",
            "type": "number"
        },
        "hearingRange": {
            "format": "meters",
            "default": 9001,
            "minimum": 0,
            "description": "How far this Thang can hear, in meters.",
            "type": "number"
        }
    }
}