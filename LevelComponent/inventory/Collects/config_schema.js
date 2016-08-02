{
    "type": "object",
    "additionalProperties": true,
    "id": "__base__",
    "default": {
        "autoCollects": true,
        "collectRange": 5
    },
    "properties": {
        "income": {
            "description": "How much gold per second this Thang adds to its team's gold income.",
            "type": "number"
        },
        "startingGold": {
            "description": "How much gold this Thang adds to its team's starting gold.",
            "type": "integer"
        },
        "collectRange": {
            "default": 5,
            "minimum": 0,
            "description": "How far away this Thang can collect Collectables, in meters.",
            "type": "number"
        },
        "autoCollects": {
            "description": "Whether this Thang automatically collects Collectables it walks over.",
            "default": true,
            "type": "boolean"
        }
    }
}