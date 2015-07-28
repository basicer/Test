{
    "default": {
        "rootImmunityDuration": 10,
        "rootDuration": 5
    },
    "properties": {
        "rootImmunityDuration": {
            "additionalProperties": true,
            "default": 10,
            "description": "Time in seconds the target is immune from further root effects after escaping the trap",
            "type": "number"
        },
        "rootDuration": {
            "description": "Duration in seconds of the root effect.",
            "default": 5,
            "type": "number"
        },
        "dud": {
            "type": "boolean",
            "default": false,
            "description": "Whether the trap will trigger or not."
        }
    }
}