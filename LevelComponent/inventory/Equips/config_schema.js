{
    "default": {
        "maxHealthFactor": 1,
        "attackDamageFactor": 1
    },
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "maxHealthFactor": {
            "description": "How much health this hero will gain from armor relative to its listed health.",
            "exclusiveMinimum": true,
            "minimum": 0,
            "type": "number",
            "default": 1
        },
        "inventory": {
            "properties": {
                "flag": {
                    "description": "An equipped Item in this slot.",
                    "format": "item-thang-type",
                    "type": "string"
                },
                "misc-4": {
                    "description": "An equipped Item in this slot.",
                    "format": "item-thang-type",
                    "type": "string"
                },
                "misc-3": {
                    "description": "An equipped Item in this slot.",
                    "format": "item-thang-type",
                    "type": "string"
                },
                "misc-2": {
                    "description": "An equipped Item in this slot.",
                    "format": "item-thang-type",
                    "type": "string"
                },
                "misc-1": {
                    "description": "An equipped Item in this slot.",
                    "format": "item-thang-type",
                    "type": "string"
                },
                "misc-0": {
                    "description": "An equipped Item in this slot.",
                    "format": "item-thang-type",
                    "type": "string"
                },
                "minion": {
                    "description": "An equipped Item in this slot.",
                    "format": "item-thang-type",
                    "type": "string"
                },
                "pet": {
                    "description": "An equipped Item in this slot.",
                    "format": "item-thang-type",
                    "type": "string"
                },
                "programming-book": {
                    "description": "An equipped Item in this slot.",
                    "format": "item-thang-type",
                    "type": "string"
                },
                "spellbook": {
                    "description": "An equipped Item in this slot.",
                    "format": "item-thang-type",
                    "type": "string"
                },
                "feet": {
                    "description": "An equipped Item in this slot.",
                    "format": "item-thang-type",
                    "type": "string"
                },
                "waist": {
                    "description": "An equipped Item in this slot.",
                    "format": "item-thang-type",
                    "type": "string"
                },
                "right-hand": {
                    "description": "An equipped Item in this slot.",
                    "format": "item-thang-type",
                    "type": "string"
                },
                "left-hand": {
                    "description": "An equipped Item in this slot.",
                    "format": "item-thang-type",
                    "type": "string"
                },
                "right-ring": {
                    "description": "An equipped Item in this slot.",
                    "format": "item-thang-type",
                    "type": "string"
                },
                "left-ring": {
                    "description": "An equipped Item in this slot.",
                    "format": "item-thang-type",
                    "type": "string"
                },
                "gloves": {
                    "description": "An equipped Item in this slot.",
                    "format": "item-thang-type",
                    "type": "string"
                },
                "wrists": {
                    "description": "An equipped Item in this slot.",
                    "format": "item-thang-type",
                    "type": "string"
                },
                "torso": {
                    "description": "An equipped Item in this slot.",
                    "format": "item-thang-type",
                    "type": "string"
                },
                "neck": {
                    "description": "An equipped Item in this slot.",
                    "format": "item-thang-type",
                    "type": "string"
                },
                "eyes": {
                    "description": "An equipped Item in this slot.",
                    "format": "item-thang-type",
                    "type": "string"
                },
                "head": {
                    "description": "An equipped Item in this slot.",
                    "format": "item-thang-type",
                    "type": "string"
                }
            },
            "additionalProperties": false,
            "description": "Inventory Item ThangTypes this Thang has equipped.",
            "type": "object"
        },
        "attackDamageFactor": {
            "description": "How much damage this hero will do with a weapon relative to its listed damage.",
            "exclusiveMinimum": true,
            "minimum": 0,
            "additionalProperties": false,
            "default": 1,
            "type": "number"
        }
    }
}