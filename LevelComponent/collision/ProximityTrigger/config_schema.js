{
    "default": {
        "groundOnly": false,
        "triggerRange": 2
    },
    "properties": {
        "triggerRange": {
            "default": 2,
            "additionalProperties": false,
            "description": "The distance at which this will trigger.",
            "type": "number"
        },
        "groundOnly": {
            "description": "Only triggered by thangs on the ground?",
            "default": false,
            "type": "boolean"
        },
        "dud": {
            "type": "boolean",
            "default": false,
            "additionalProperties": false,
            "description": "Is this proximity trigger a dud?"
        }
    }
}