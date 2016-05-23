{
    "default": {
        "programmableVectorProperties": [
            "x",
            "y",
            "z",
            "magnitude",
            "distance",
            "heading",
            "dot",
            "equals",
            "copy",
            "add",
            "subtract",
            "divide",
            "multiply",
            "limit",
            "normalize",
            "rotate"
        ]
    },
    "type": "object",
    "additionalProperties": false,
    "id": "__base__",
    "properties": {
        "programmableVectorProperties": {
            "default": [
                "x",
                "y",
                "z",
                "magnitude",
                "distance",
                "heading",
                "dot",
                "equals",
                "copy",
                "add",
                "subtract",
                "divide",
                "multiply",
                "limit",
                "normalize",
                "rotate"
            ],
            "items": {
                "description": "Names of Vector functions/properties which should be documented for Programmable methods.",
                "enum": [
                    "x",
                    "y",
                    "z",
                    "magnitude",
                    "heading",
                    "distance",
                    "dot",
                    "equals",
                    "copy",
                    "add",
                    "subtract",
                    "multiply",
                    "divide",
                    "limit",
                    "normalize",
                    "rotate"
                ],
                "type": "string"
            },
            "type": "array"
        }
    }
}