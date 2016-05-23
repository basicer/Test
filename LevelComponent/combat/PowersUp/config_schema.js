{
    "default": {
        "specificCooldown": 0,
        "powerUpEndsOnAttack": false,
        "cooldown": 1,
        "powerUpEffects": [
            {
                "duration": 10,
                "reverts": true,
                "targetProperty": "attackDamage",
                "name": "power-up"
            }
        ]
    },
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "specificCooldown": {
            "format": "seconds",
            "minimum": 0,
            "description": "How many seconds before this specific power-up can be done again, if longer than normal cooldown.",
            "type": "number"
        },
        "powerUpEndsOnAttack": {
            "description": "Whether the power up applies to a single attack.",
            "type": "boolean"
        },
        "powerUpEffects": {
            "default": [
                {
                    "duration": 10,
                    "reverts": true,
                    "targetProperty": "attackDamage",
                    "name": "power-up"
                }
            ],
            "items": {
                "default": {
                    "duration": 10,
                    "reverts": true,
                    "targetProperty": "attackDamage",
                    "name": "power-up"
                },
                "properties": {
                    "factor": {
                        "description": "Multiplies the property by the value (after setTo and any addends).",
                        "type": "number"
                    },
                    "addend": {
                        "description": "Adds to the property value (after setTo).",
                        "type": "number"
                    },
                    "setTo": {
                        "description": "Sets the property to this value."
                    },
                    "targetProperty": {
                        "description": "Property being affected.",
                        "type": "string"
                    },
                    "revertsProportionally": {
                        "description": "Property may change over time by outside forces.          Recalculate when effect is over, reversing the calculation.          So if factor is 0.5, initial value is 100, value goes to 50,          then decreases by outside forces to 40, revert goes to 80          instead of 100. This is mainly for health effects.",
                        "type": "boolean"
                    },
                    "reverts": {
                        "description": "Property change goes back once the effect ends.",
                        "type": "boolean"
                    },
                    "repeatsEvery": {
                        "description": "Repeats the effect every x seconds.",
                        "type": "number"
                    },
                    "duration": {
                        "description": "Time in seconds that the effect lasts.",
                        "type": "number"
                    },
                    "name": {
                        "description": "Human readable name of the effect.",
                        "type": "string"
                    }
                },
                "additionalProperties": false,
                "type": "object"
            },
            "type": "array"
        },
        "cooldown": {
            "format": "seconds",
            "minimum": 0,
            "default": 1,
            "description": "How many seconds each power-up takes.",
            "type": "number"
        }
    }
}