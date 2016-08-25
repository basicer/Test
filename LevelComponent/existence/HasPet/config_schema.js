{
    "default": {
        "requiredThangTypes": []
    },
    "properties": {
        "requiredThangTypes": {
            "items": {
                "maxItems": 1,
                "type": "string",
                "format": "thang-type",
                "description": "The ThangType to use as a template for this Thang's pet."
            },
            "additionalProperties": true,
            "description": "Contains a single element: the ThangType to use as a template for this Thang's pet.",
            "type": "array"
        }
    }
}