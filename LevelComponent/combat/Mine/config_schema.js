{
    "type": "object",
    "additionalProperties": true,
    "properties": {
        "friendlyFire": {
            "default": true,
            "description": "Whether the explosion hurts/affects allied Thangs.",
            "type": "boolean"
        },
        "dud": {
            "description": "Whether the mine is a dud or not.(Duds do not explode)",
            "default": false,
            "type": "boolean"
        },
        "chainReacts": {
            "description": "Whether the mine will chain react and detonate other mines around that also have chainReacts set to true",
            "default": false,
            "type": "boolean"
        },
        "blastRadius": {
            "description": "The radius of the blast explosion, in meters.",
            "minimum": 0,
            "format": "meters",
            "exclusiveMinimum": true,
            "additionalProperties": false,
            "type": "number"
        }
    },
    "default": {
        "chainReacts": false,
        "dud": false,
        "friendlyFire": true,
        "blastRadius": 15
    },
    "id": "__base__"
}