{
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "cleaveRange": {
            "format": "meters",
            "default": 7,
            "exclusiveMinimum": true,
            "minimum": 0,
            "description": "The number of meters that the attack reaches.",
            "type": "number"
        },
        "cleaveZAngle": {
            "default": 0.785,
            "description": "At what angle from the horizontal to apply cleaveMass to cloven enemies.",
            "format": "radians",
            "type": "number"
        },
        "cleaveMass": {
            "description": "How much knockback mass to impart to cloven enemies.",
            "format": "kilograms",
            "type": "number"
        },
        "cleaveFriendlyFire": {
            "type": "boolean"
        },
        "cleaveAngle": {
            "format": "radians",
            "description": "The angle that the attack affects.",
            "minimum": 0,
            "default": 6.28,
            "type": "number"
        },
        "cleaveDamage": {
            "default": 15,
            "minimum": 0,
            "exclusiveMinimum": true,
            "description": "The amount of damage the cleave attack does.",
            "type": "number"
        },
        "specificCooldown": {
            "description": "The number of seconds before cleave can be performed again.",
            "format": "seconds",
            "default": 15,
            "minimum": 0,
            "type": "number"
        },
        "cooldown": {
            "format": "seconds",
            "minimum": 0,
            "description": "The number of seconds it takes to perform the cleave.",
            "default": 1,
            "type": "number"
        }
    },
    "default": {
        "cleaveZAngle": 0.785,
        "cleaveMass": 0,
        "cleaveFriendlyFire": false,
        "cleaveAngle": 6.28,
        "cleaveDamage": 15,
        "cleaveRange": 15,
        "specificCooldown": 15,
        "cooldown": 1
    },
    "id": "__base__"
}