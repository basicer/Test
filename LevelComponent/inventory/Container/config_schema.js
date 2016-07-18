{
    "properties": {
        "sizeLimit": {
            "description": "Checks the Size property of the items being funneled in and prevents anything being placed which is large than the top of the stack",
            "default": false,
            "type": "boolean"
        },
        "stackSize": {
            "description": "The maximum amount of items the stack can hold",
            "default": 8,
            "format": "items",
            "additionalProperties": false,
            "minimum": 1,
            "type": "integer"
        }
    },
    "default": {
        "sizeLimit": false,
        "stackSize": 8
    }
}