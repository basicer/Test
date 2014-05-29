{
    "default": {
        "programmableObjectProperties": [
            "create",
            "defineProperty",
            "defineProperties",
            "freeze",
            "getOwnPropertyDescriptor",
            "getOwnPropertyNames",
            "getPrototypeOf",
            "is",
            "isExtensible",
            "isFrozen",
            "isSealed",
            "keys",
            "preventExtensions",
            "seal",
            "setPrototypeOf"
        ]
    },
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "programmableObjectProperties": {
            "default": [
                "create",
                "defineProperty",
                "defineProperties",
                "freeze",
                "getOwnPropertyDescriptor",
                "getOwnPropertyNames",
                "getPrototypeOf",
                "is",
                "isExtensible",
                "isFrozen",
                "isSealed",
                "keys",
                "preventExtensions",
                "seal",
                "setPrototypeOf"
            ],
            "items": {
                "description": "Name of Object Methods/Properties which should be documented for Programmable methods.",
                "enum": [
                    "create",
                    "defineProperty",
                    "defineProperties",
                    "freeze",
                    "getOwnPropertyDescriptor",
                    "getOwnPropertyNames",
                    "getPrototypeOf",
                    "is",
                    "isExtensible",
                    "isFrozen",
                    "isSealed",
                    "keys",
                    "preventExtensions",
                    "seal",
                    "setPrototypeOf"
                ],
                "type": [
                    "string"
                ]
            },
            "type": [
                "array"
            ]
        }
    }
}