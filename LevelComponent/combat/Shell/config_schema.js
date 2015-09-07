{
    "type": "object",
    "additionalProperties": false,
    "default": {
        "stunDuration": 0,
        "friendlyFire": true,
        "blastRadius": 15,
        "flightTime": 3.4
    },
    "properties": {
        "stunDuration": {
            "description": "Duration of stun effect for targets caught at center of blast.",
            "minimum": 0,
            "format": "seconds",
            "type": "number"
        },
        "friendlyFire": {
            "description": "Whether the explosion hurts/affects allied Thangs.",
            "default": true,
            "type": "boolean"
        },
        "flightTime": {
            "format": "seconds",
            "exclusiveMinimum": true,
            "minimum": 0,
            "description": "How long the Shell takes to land, in seconds.",
            "type": "number"
        },
        "blastRadius": {
            "format": "meters",
            "exclusiveMinimum": true,
            "minimum": 0,
            "description": "The radius of the blast explosion, in meters.",
            "type": "number"
        }
    }
}