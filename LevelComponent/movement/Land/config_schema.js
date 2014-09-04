{
    "type": "object",
    "additionalProperties": false,
    "default": {
        "airDensity": 1.225,
        "groundDensity": 0,
        "friction": 0.7
    },
    "id": "__base__",
    "properties": {
        "airDensity": {
            "default": 1.225,
            "minimum": 0,
            "description": "kg / m^3. For drag of air on ground and air units.",
            "type": "number"
        },
        "groundDensity": {
            "default": 0,
            "minimum": 0,
            "description": "kg / m^3. For lands like swamps with their own ground drag. Water is 1000.",
            "type": "number"
        },
        "friction": {
            "default": 0.7,
            "minimum": 0,
            "description": "Coefficients of friction or drag used for traction force; 0.7 =~ shoe on floor.",
            "type": "number"
        }
    }
}