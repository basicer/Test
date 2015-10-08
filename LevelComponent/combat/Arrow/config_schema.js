{
    "default": {
        "maximizesArc": false,
        "diesOnHit": false
    },
    "type": "object",
    "additionalProperties": false,
    "id": "__base__",
    "properties": {
        "maximizesArc": {
            "description": "Whether to try to use a 45-degree angle to hit the target, if possible. Leads to much slower missiles.",
            "type": "boolean"
        },
        "diesOnHit": {
            "description": "Whether this missile dies when it hits something instead of bouncing.",
            "type": "boolean"
        }
    }
}