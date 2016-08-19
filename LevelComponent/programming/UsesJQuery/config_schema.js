{
    "type": "object",
    "properties": {
        "programmableJQueryProperties": {
            "type": "array",
            "items": {
                "description": "Name of jQuery functions which should be documented",
                "enum": [
                    "$",
                    "$(this)",
                    "css",
                    "on",
                    "hide",
                    "show",
                    "addClass",
                    "removeClass",
                    "siblings",
                    "toggleClass"
                ],
                "type": "string"
            }
        },
        "programmableEventsProperties": {
            "type": "array",
            "items": {
                "description": "Name of jQuery events to be documented.",
                "enum": [
                    "click",
                    "mousemove"
                ],
                "type": "string"
            }
        }
    },
    "additionalProperties": false,
    "default": {
        "programmableEventsProperties": [
            "click",
            "mousemove"
        ],
        "programmableJQueryProperties": [
            "$",
            "$(this)",
            "css",
            "on",
            "hide",
            "show",
            "addClass",
            "removeClass",
            "siblings",
            "toggleClass"
        ]
    }
}