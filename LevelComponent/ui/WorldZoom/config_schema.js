{
    "type": "object",
    "additionalProperties": false,
    "default": {
        "defaultSurfaceFocusTarget": null,
        "defaultSurfaceFocusZoom": 1
    },
    "properties": {
        "defaultSurfaceFocusTarget": {
            "default": null,
            "description": "The default target to which the Surface will return when no scripts are running, or the center if null.",
            "anyOf": [
                {
                    "type": "null"
                },
                {
                    "type": "object",
                    "format": "point2d",
                    "additionalProperties": false,
                    "properties": {
                        "x": {
                            "type": "number"
                        },
                        "y": {
                            "type": "number"
                        }
                    },
                    "required": [
                        "x",
                        "y"
                    ],
                    "default": {
                        "x": 46.2,
                        "y": "39.2666666667"
                    }
                }
            ]
        },
        "defaultSurfaceFocusZoom": {
            "maximum": 64,
            "exclusiveMinimum": true,
            "minimum": 0,
            "description": "The default zoom level to which the Surface will return when no scripts are running.",
            "default": 1,
            "type": "number"
        }
    }
}