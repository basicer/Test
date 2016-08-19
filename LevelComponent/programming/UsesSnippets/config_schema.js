{
    "default": {
        "programmableSnippets": [
            "if/else",
            "for-loop",
            "while-loop",
            "for-in-loop",
            "objects",
            "arrays",
            "functions",
            "list comprehensions",
            "loop",
            "else",
            "break",
            "continue",
            "while-true loop"
        ]
    },
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "programmableSnippets": {
            "default": [
                "if/else",
                "for-loop",
                "while-loop",
                "for-in-loop",
                "objects",
                "arrays",
                "functions",
                "list comprehensions",
                "loop",
                "else",
                "break",
                "continue",
                "while-true loop"
            ],
            "items": {
                "description": "Names of code snippets which should be documented for Programmable methods (if/else, for-loop, while-loop, etc.).",
                "enum": [
                    "if/else",
                    "for-loop",
                    "while-loop",
                    "for-in-loop",
                    "objects",
                    "arrays",
                    "functions",
                    "list comprehensions",
                    "loop",
                    "else",
                    "break",
                    "continue",
                    "while-true loop"
                ],
                "type": "string"
            },
            "type": "array"
        }
    }
}