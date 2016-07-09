{
    "default": {
        "hudName": "",
        "inThangList": true,
        "excludedHUDProperties": [],
        "extraHUDProperties": []
    },
    "type": "object",
    "additionalProperties": false,
    "id": "__base__",
    "properties": {
        "hudName": {
            "type": "string"
        },
        "inThangList": {
            "description": "Whether this Thang will show up in the Thang list on the right for quick selection.",
            "default": true,
            "type": "boolean"
        },
        "extraHUDProperties": {
            "description": "Names of properties to display in the HUD when this Thang is selected.",
            "default": [],
            "items": {
                "type": "string"
            },
            "type": "array"
        },
        "excludedHUDProperties": {
            "description": "To exclude \"health\", \"pos\", or \"target\", pass them in this array.",
            "default": [],
            "items": {
                "type": "string"
            },
            "type": "array"
        }
    }
}