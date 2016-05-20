{
    "type": "object",
    "additionalProperties": false,
    "default": {
        "specificCooldown": 0,
        "impaleDamage": 35,
        "impaleMissileThangID": "Impaling Spear",
        "impaleRecoilMass": 500,
        "cooldown": 1
    },
    "properties": {
        "impaleDamage": {
            "description": "How much damage the impaling missile does.",
            "default": 35,
            "type": "number"
        },
        "impaleMissileThangID": {
            "default": "Impaling Spear",
            "description": "ID of the template missile Thang to fire. It should not have normal missile Components or collide with anything.",
            "type": "string"
        },
        "impaleRecoilMass": {
            "default": 500,
            "format": "kilograms",
            "description": "How much mass to impart as recoil to the impaler, in kilograms.",
            "minimum": 0,
            "type": "number"
        },
        "specificCooldown": {
            "description": "How long before this specific impale can be used again, in seconds.",
            "minimum": 0,
            "format": "seconds",
            "type": "number"
        },
        "cooldown": {
            "description": "How long the impale takes, in seconds.",
            "default": 1,
            "format": "seconds",
            "minimum": 0,
            "type": "number"
        }
    }
}