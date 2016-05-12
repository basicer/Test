{
    "type": "object",
    "additionalProperties": false,
    "id": "__base__",
    "default": {
        "specificCooldown": 0,
        "cooldown": 0,
        "jumpHeight": 0
    },
    "properties": {
        "specificCooldown": {
            "minimum": 0,
            "description": "Cooldown before this Thang can jump again.",
            "type": "number"
        },
        "jumpHeight": {
            "minimum": 0,
            "description": "How high the Thang jumps when it jumps, in meters.",
            "type": "number"
        },
        "cooldown": {
            "description": "Cooldown before this Thang can act again after jumping.",
            "minimum": 0,
            "type": "number"
        }
    }
}