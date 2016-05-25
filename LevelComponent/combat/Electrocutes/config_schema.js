{
    "properties": {
        "specificCooldown": {
            "format": "seconds",
            "type": "number",
            "minimum": 0
        },
        "electrocuteRange": {
            "minimum": 0,
            "format": "meters",
            "type": "number"
        },
        "electrocuteFactor": {
            "type": "number",
            "minimum": 0
        },
        "electrocuteDuration": {
            "format": "seconds",
            "type": "number",
            "minimum": 0
        },
        "cooldown": {
            "format": "seconds",
            "type": "number",
            "minimum": 0
        }
    },
    "default": {
        "electrocuteRange": 32,
        "electrocuteFactor": 0.6,
        "electrocuteDuration": 9,
        "specificCooldown": 10,
        "cooldown": 0.75
    }
}