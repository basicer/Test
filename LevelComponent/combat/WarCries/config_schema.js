{
    "default": {
        "warcryRange": 10,
        "warcryDuration": 5,
        "warcryHasteFactor": 1.3,
        "specificCooldown": 0,
        "cooldown": 1
    },
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "warcryRange": {
            "format": "meters",
            "description": "How far the warcry reaches, in meters.",
            "default": 10,
            "type": "number"
        },
        "warcryHasteFactor": {
            "default": 1.3,
            "description": "By how much to increase the speed of allied units.",
            "type": "number"
        },
        "warcryDuration": {
            "default": 5,
            "format": "seconds",
            "description": "How long the warcry lasts, in seconds.",
            "type": "number"
        },
        "specificCooldown": {
            "minimum": 0,
            "description": "Cooldown before this Thang can jump again.",
            "type": "number"
        },
        "cooldown": {
            "description": "Cooldown before this Thang can act again after jumping.",
            "minimum": 0,
            "type": "number"
        }
    },
    "id": "__base__"
}