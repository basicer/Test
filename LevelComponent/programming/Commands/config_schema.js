{
    "default": {
        "commandableTypes": [],
        "commandableMethods": [
            "move",
            "attack"
        ]
    },
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "commandableTypes": {
            "description": "Which types of minion should be commandable.",
            "type": "array"
        },
        "commandableMethods": {
            "description": "Which methods should be callable on minions.",
            "minItems": 1,
            "default": [
                "move",
                "attack"
            ],
            "type": "array"
        }
    }
}