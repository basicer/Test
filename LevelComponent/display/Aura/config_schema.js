{
    "default": {
        "auraFlicker": 0.75,
        "auraOffsetX": 0,
        "auraOffsetY": 0.9,
        "auraColor": "rgba(255,255,128,0.11)",
        "showAura": true,
        "auraRadius": 5
    },
    "properties": {
        "auraFlicker": {
            "description": "Flicker rate of the aura. Should be between 1 (no flicker) and 0 (no aura)",
            "default": 0.75,
            "type": "number"
        },
        "showAura": {
            "description": "Whether or not the aura is active",
            "default": true,
            "type": "boolean"
        },
        "auraRadius": {
            "description": "The aura's radius",
            "additionalProperties": false,
            "type": "number",
            "default": 5
        },
        "auraOffsetY": {
            "description": "Y offset for the aura effect",
            "default": 0.9,
            "type": "number"
        },
        "auraOffsetX": {
            "description": "X offset for the aura",
            "default": 0,
            "type": "number"
        },
        "auraColor": {
            "description": "The aura's color",
            "default": "rgba(255,255,128,0.11)",
            "type": "string"
        }
    }
}