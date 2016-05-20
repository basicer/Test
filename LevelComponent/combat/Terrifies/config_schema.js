{
    "default": {
        "terrifyRange": 20,
        "terrifyDuration": 3,
        "specificCooldown": 30,
        "cooldown": 0
    },
    "type": "object",
    "additionalProperties": false,
    "id": "__base__",
    "properties": {
        "terrifyRange": {
            "format": "meters",
            "description": "How far the terrifying howl reaches, in meters.",
            "default": 20,
            "type": "number"
        },
        "terrifyDuration": {
            "default": 3,
            "format": "seconds",
            "description": "How long the enemies remain feared, in seconds.",
            "type": "number"
        },
        "specificCooldown": {
            "format": "seconds",
            "default": "30",
            "minimum": 0,
            "description": "Cooldown before this Thang can terrify again.",
            "type": "number"
        },
        "cooldown": {
            "format": "seconds",
            "description": "Cooldown before this Thang can act again after terrifying.",
            "minimum": 0,
            "type": "number"
        }
    }
}