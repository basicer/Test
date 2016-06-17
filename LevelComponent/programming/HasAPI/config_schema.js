{
    "type": "object",
    "additionalProperties": true,
    "default": {
        "type": "",
        "apiMethods": [
            "findNearest",
            "hasEffect",
            "distanceTo",
            "findNearestEnemy",
            "findEnemies"
        ],
        "apiProperties": [
            "id",
            "health",
            "pos",
            "target",
            "team",
            "type",
            "maxHealth"
        ]
    },
    "properties": {
        "type": {
            "description": "What's the player-visible type of this Thang, like 'soldier', 'thrower', 'arrow', or 'beam-tower'.",
            "type": "string"
        },
        "apiProperties": {
            "default": [
                "id",
                "health",
                "pos",
                "target",
                "team",
                "type",
                "maxHealth"
            ],
            "items": {
                "name": "Name of a property in this Thang's API.",
                "type": "string"
            },
            "description": "Names of properties in this Thang's API.",
            "type": "array"
        },
        "apiMethods": {
            "default": [
                "findNearest",
                "hasEffect",
                "distanceTo",
                "findNearestEnemy",
                "findEnemies"
            ],
            "items": {
                "name": "Name of a method in this Thang's API.",
                "type": "string"
            },
            "description": "Names of methods in this Thang's API. These methods operate on the original Thang and are accessible to any team.",
            "type": "array"
        }
    }
}