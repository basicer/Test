{
    "type": "object",
    "additionalProperties": false,
    "id": "__base__",
    "default": {
        "shootsAtGround": false,
        "leadsShots": true
    },
    "properties": {
        "shootsAtGround": {
            "default": false,
            "description": "Whether the missile aims at the ground under its target or at the z-center of its target.",
            "type": "boolean"
        },
        "leadsShots": {
            "default": true,
            "description": "Whether the missile aims at where its target is going, as opposed to where it is.",
            "type": "boolean"
        }
    }
}