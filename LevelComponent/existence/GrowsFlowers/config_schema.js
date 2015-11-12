{
    "default": {
        "requiredThangTypes": [
            "54e951c8f54ef5794f354ed1",
            "54e9525ff54ef5794f354ed5",
            "54e95293f54ef5794f354ed9",
            "54e952b7f54ef5794f354edd",
            "54e952daf54ef5794f354ee1",
            "54e95308f54ef5794f354ee5",
            "54e9532ff54ef5794f354ee9",
            "54e9534ef54ef5794f354eed"
        ],
        "flowerDistance": 0.2,
        "flowerCooldown": 0
    },
    "properties": {
        "requiredThangTypes": {
            "items": {
                "format": "thang-type",
                "type": "string"
            },
            "description": "The flower types this Thang grows.",
            "type": "array"
        },
        "flowerDistance": {
            "additionalProperties": false,
            "default": 0.2,
            "description": "Minimum distance between flowers.",
            "type": "number"
        },
        "flowerCooldown": {
            "default": 0,
            "description": "Minimum time between flowers.",
            "type": "number"
        }
    }
}