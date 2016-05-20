{
    "default": {
        "storyDelay": 0.5,
        "storyStart": 1
    },
    "properties": {
        "storyStart": {
            "default": 1,
            "additionalProperties": true,
            "minimum": 0,
            "type": "number",
            "description": "Time the story starts."
        },
        "storyDelay": {
            "default": "0.5",
            "description": "Time between story actions.",
            "type": "number"
        }
    }
}