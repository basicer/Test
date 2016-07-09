{
    "type": "object",
    "additionalProperties": true,
    "default": {
        "damageReflectionRange": 5,
        "damageReflection": 0,
        "health": 0,
        "healthReplenishRate": 0,
        "maxHealth": 10
    },
    "properties": {
        "maxHealth": {
            "description": "The maximum health value for this Thang.",
            "exclusiveMinimum": true,
            "minimum": 0,
            "type": "number"
        },
        "healthReplenishRate": {
            "default": 0,
            "description": "How much health this Thang regenerates per second.",
            "type": "number"
        },
        "health": {
            "description": "Deprecated: all Thangs start at maxHealth.",
            "type": "number"
        },
        "damageReflectionRange": {
            "minimum": 0,
            "format": "meters",
            "type": "number"
        },
        "damageReflection": {
            "description": "Amount of damage reflected to attackers within damageReflectionRange meters with each attack.",
            "type": "number"
        }
    }
}