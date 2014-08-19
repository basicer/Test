{
    "default": {
        "programmableArrayProperties": [
            "isArray",
            "concat",
            "entries",
            "every",
            "filter",
            "find",
            "findIndex",
            "forEach",
            "indexOf",
            "join",
            "keys",
            "lastIndexOf",
            "map",
            "pop",
            "push",
            "reduce",
            "reduceRight",
            "reverse",
            "shift",
            "slice",
            "some",
            "sort",
            "splice",
            "toLocaleString",
            "toString",
            "unshift"
        ]
    },
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "programmableArrayProperties": {
            "items": {
                "description": "Name of Array functions/properties which should be documented for Programmable methods",
                "enum": [
                    "isArray",
                    "concat",
                    "entries",
                    "every",
                    "filter",
                    "find",
                    "findIndex",
                    "forEach",
                    "indexOf",
                    "join",
                    "keys",
                    "lastIndexOf",
                    "map",
                    "pop",
                    "push",
                    "reduce",
                    "reduceRight",
                    "reverse",
                    "shift",
                    "slice",
                    "some",
                    "sort",
                    "splice",
                    "toLocaleString",
                    "toString",
                    "unshift"
                ],
                "type": "string"
            },
            "default": [
                "isArray",
                "concat",
                "entries",
                "every",
                "filter",
                "find",
                "findIndex",
                "forEach",
                "indexOf",
                "join",
                "keys",
                "lastIndexOf",
                "map",
                "pop",
                "push",
                "reduce",
                "reduceRight",
                "reverse",
                "shift",
                "slice",
                "some",
                "sort",
                "splice",
                "toLocaleString",
                "toString",
                "unshift"
            ],
            "type": [
                "array"
            ]
        }
    }
}