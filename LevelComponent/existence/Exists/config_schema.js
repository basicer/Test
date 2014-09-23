{
    "default": {
        "exists": true,
        "stateless": false
    },
    "type": "object",
    "additionalProperties": false,
    "id": "__base__",
    "properties": {
        "exists": {
            "default": true,
            "type": "boolean"
        },
        "stateless": {
            "description": "Whether this Thang is static and can be exempt from costly state tracking",
            "default": false,
            "type": "boolean"
        }
    }
}