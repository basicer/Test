{
    "properties": {
        "colors": {
            "additionalProperties": {
                "description": "Tints the Thang with this color name to this color config, if set up in the ThangType.",
                "properties": {
                    "lightness": {
                        "maximum": 1,
                        "minimum": 0,
                        "type": "number"
                    },
                    "saturation": {
                        "maximum": 1,
                        "minimum": 0,
                        "type": "number"
                    },
                    "hue": {
                        "maximum": 1,
                        "minimum": 0,
                        "type": "number"
                    }
                },
                "format": "color-config",
                "additionalProperties": false,
                "type": "object"
            }
        }
    }
}