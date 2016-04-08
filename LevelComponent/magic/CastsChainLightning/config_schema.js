{
    "additionalProperties": false,
    "properties": {
        "specificCooldown": {
            "type": "number",
            "format": "seconds"
        },
        "requiredThangTypes": {
            "items": {
                "format": "thang-type",
                "type": "string",
                "description": "The ThangType to use as a template for this Thang's bolts."
            },
            "description": "Contains a single element: the ThangType to use as a template for this Thang's lightning Bolts.",
            "additionalProperties": true,
            "type": "array"
        },
        "range": {
            "minimum": 0,
            "format": "meters",
            "type": "number"
        },
        "forks": {
            "type": "boolean"
        },
        "forkCount": {
            "minimum": 2,
            "type": "integer"
        },
        "damageMultiplier": {
            "type": "number"
        },
        "damage": {
            "type": "number",
            "minimum": 0
        },
        "cooldown": {
            "minimum": 0,
            "format": "seconds",
            "type": "number"
        },
        "chainReturnMinimum": {
            "minimum": -1,
            "format": "bounces",
            "type": "integer"
        },
        "chainRandomnessBias": {
            "maximum": 1,
            "minimum": 0,
            "type": "number"
        },
        "chainLifeTime": {
            "minimum": 0.5,
            "type": "number",
            "format": "seconds"
        },
        "chainBirthTime": {
            "format": "seconds",
            "additionalProperties": false,
            "minimum": 0,
            "type": "number"
        },
        "bounceRange": {
            "minimum": 0,
            "format": "meters",
            "type": "number"
        },
        "bounceCount": {
            "minimum": 0,
            "type": "integer"
        }
    },
    "default": {
        "specificCooldown": 20,
        "range": 30,
        "requiredThangTypes": [
            "529ec2cec423d4e83b000011"
        ],
        "chainRandomnessBias": 0.25,
        "chainLifeTime": 0.5,
        "chainBirthTime": 0.25,
        "forks": false,
        "forkCount": 2,
        "damageMultiplier": 0.75,
        "damage": 120,
        "cooldown": 0.75,
        "chainReturnMinimum": -1,
        "bounceRange": 20,
        "bounceCount": 8
    }
}