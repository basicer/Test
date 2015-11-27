{
    "default": {
        "explosionDelay": 0,
        "explosionMass": 1000,
        "triggerRadius": 3.5,
        "friendlyFire": false,
        "explosionRadius": 10,
        "explosionColor": "#00FF00",
        "damageDistribution": "full",
        "damage": 1000
    },
    "properties": {
        "explosionDelay": {
            "description": "Time in seconds to explode after death.",
            "format": "seconds",
            "type": "number"
        },
        "triggerRadius": {
            "minimum": 0,
            "format": "meters",
            "type": "number",
            "description": "How close a target needs to be, before exploding early."
        },
        "friendlyFire": {
            "type": "boolean",
            "description": "Whether or not the explosion damages friendly units."
        },
        "explosionRadius": {
            "minimum": 0,
            "format": "meters",
            "type": "number",
            "description": "How far the explosion reaches."
        },
        "explosionMass": {
            "format": "kilograms",
            "type": "number"
        },
        "explosionColor": {
            "format": "as hex",
            "type": "string"
        },
        "damageDistribution": {
            "enum": [
                "full",
                "linear"
            ],
            "type": "string",
            "description": "How the damage is distributed."
        },
        "damage": {
            "type": "number",
            "description": "How much damage the explosion does."
        }
    }
}