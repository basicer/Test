{
    "default": {
        "requiredThangTypes": [],
        "missileThangID": ""
    },
    "type": "object",
    "additionalProperties": false,
    "id": "__base__",
    "properties": {
        "requiredThangTypes": {
            "items": {
                "type": "string",
                "format": "thang-type",
                "description": "The ThangType to use as a template for this Thang's missiles."
            },
            "additionalProperties": true,
            "description": "Contains a single element: the ThangType to use as a template for this Thang's missiles.",
            "type": "array"
        },
        "missileThangID": {
            "format": "thang",
            "description": "Old way of loading missiles. The specific ID of a Thang to use as a template for this Thang's missiles, like \"Arrow\", that already exists in the level.",
            "type": "string"
        }
    }
}