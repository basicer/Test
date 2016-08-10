{
    "type": "object",
    "additionalProperties": false,
    "default": {
        "attackMovesIncrementally": false,
        "attackZAngle": 0,
        "attackMass": 0,
        "chasesWhenAttackingOutOfRange": true,
        "complainsWhenAttackingOutOfRange": false,
        "attacksWhenOutOfRange": false,
        "specificCooldown": 0,
        "cooldown": 1,
        "attackRange": 3,
        "attackDamage": 3
    },
    "properties": {
        "attackMovesIncrementally": {
            "default": false,
            "type": "boolean"
        },
        "specificCooldown": {
            "default": 0,
            "format": "seconds",
            "minimum": 0,
            "description": "How many seconds before this specific attack can be done again, if longer than normal cooldown.",
            "type": "number"
        },
        "cooldown": {
            "format": "seconds",
            "minimum": 0,
            "default": 1,
            "description": "How many seconds each attack takes.",
            "type": "number"
        },
        "complainsWhenAttackingOutOfRange": {
            "description": "Whether this Thang says a warning when not attacking because target is too far away.",
            "default": false,
            "type": "boolean"
        },
        "chasesWhenAttackingOutOfRange": {
            "description": "Whether this Thang actually does chaseAndAttack when attacking instead.",
            "default": true,
            "type": "boolean"
        },
        "attacksWhenOutOfRange": {
            "description": "Whether this Thang performs an ineffectual attack when out of range.",
            "default": false,
            "type": "boolean"
        },
        "attackZAngle": {
            "default": 0,
            "format": "radians",
            "description": "What angle from horizontal to apply the attackMass momentum at.",
            "type": "number"
        },
        "attackRange": {
            "format": "meters",
            "default": 3,
            "exclusiveMinimum": true,
            "minimum": 0,
            "description": "How many meters this attack can reach.",
            "type": "number"
        },
        "attackMass": {
            "default": 0,
            "format": "kilograms",
            "description": "How much mass to impart to the momentum of the attack.",
            "type": "number"
        },
        "attackDamage": {
            "default": 3,
            "description": "How much damage each attack does.",
            "type": "number"
        }
    }
}