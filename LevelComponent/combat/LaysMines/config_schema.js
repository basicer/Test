{
    "type": "object",
    "additionalProperties": false,
    "default": {
        "specificCooldown": 0,
        "cooldown": 0.5,
        "mineLayingRange": 8,
        "mineThangID": "Mine"
    },
    "properties": {
        "specificCooldown": {
            "minimum": 0,
            "format": "seconds",
            "type": "number"
        },
        "cooldown": {
            "default": 0.5,
            "format": "seconds",
            "minimum": 0,
            "type": "number"
        },
        "mineLayingRange": {
            "default": "8",
            "format": "meters",
            "minimum": 0,
            "type": "number"
        },
        "mineThangID": {
            "default": "Mine",
            "description": "ID of the template Mine Thang to lay.",
            "type": "string"
        }
    }
}