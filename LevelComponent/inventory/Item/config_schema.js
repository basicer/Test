{
    "default": {
        "extraHUDProperties": [],
        "ownerID": "",
        "moreProgrammableProperties": [],
        "programmableProperties": [],
        "slots": [
            "right-hand"
        ]
    },
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "stats": {
            "properties": {
                "attackDamage": {
                    "description": "Assign in extraHUDProperties and Attacks Component, not here. (Unless a non-primary-weapon item is increasing the attack damage.)",
                    "properties": {
                        "factor": {
                            "default": 1,
                            "description": "What number to multiply this property by (after setTo and addend).",
                            "type": "number"
                        },
                        "addend": {
                            "default": 0,
                            "description": "What number to add to this property (after setTo).",
                            "type": "number"
                        }
                    },
                    "type": "object"
                },
                "shieldDefenseFactor": {
                    "type": "object",
                    "properties": {
                        "factor": {
                            "default": 1,
                            "description": "What number to multiply this property by (after setTo and addend).",
                            "type": "number"
                        },
                        "addend": {
                            "default": 0,
                            "description": "What number to add to this property (after setTo).",
                            "type": "number"
                        },
                        "setTo": {
                            "description": "What value to set this property to."
                        }
                    },
                    "description": "Assign in extraHUDProperties and Shields Component, not here."
                },
                "healthReplenishRate": {
                    "type": "object",
                    "description": "Add any health regen here.",
                    "properties": {
                        "addend": {
                            "default": 0,
                            "description": "What number to add to this property (after setTo).",
                            "type": "number"
                        }
                    }
                },
                "maxSpeed": {
                    "type": "object",
                    "description": "Main boots stat, and can be used for certain other items encumbering you.",
                    "properties": {
                        "addend": {
                            "default": 0,
                            "description": "What number to add to this property (after setTo).",
                            "type": "number"
                        }
                    }
                },
                "maxHealth": {
                    "additionalProperties": false,
                    "default": {
                        "addend": 10
                    },
                    "type": "object",
                    "description": "Main armor stat.",
                    "properties": {
                        "addend": {
                            "default": 0,
                            "description": "What number to add to this property (after setTo).",
                            "type": "number"
                        }
                    }
                }
            },
            "additionalProperties": {
                "properties": {
                    "factor": {
                        "default": 1,
                        "description": "What number to multiply this property by (after setTo and addend).",
                        "type": "number"
                    },
                    "addend": {
                        "default": 0,
                        "description": "What number to add to this property (after setTo).",
                        "type": "number"
                    },
                    "setTo": {
                        "description": "What value to set this property to."
                    }
                },
                "additionalProperties": false,
                "type": "object"
            },
            "description": "Which stat modifiers this Item confers. You can add additional properties besides those listed, but consider adding them in their Components and the extraHUDProperties instead.",
            "type": "object"
        },
        "slots": {
            "uniqueItems": true,
            "default": [
                "right-hand"
            ],
            "minItems": 1,
            "description": "Which slots this Item might be equipped in.",
            "items": {
                "default": "right-hand",
                "enum": [
                    "head",
                    "eyes",
                    "neck",
                    "torso",
                    "wrists",
                    "gloves",
                    "left-ring",
                    "right-ring",
                    "right-hand",
                    "left-hand",
                    "waist",
                    "feet",
                    "programming-book",
                    "pet",
                    "minion",
                    "flag",
                    "misc-0",
                    "misc-1"
                ],
                "type": "string"
            },
            "type": "array"
        },
        "programmableProperties": {
            "uniqueItems": true,
            "default": [],
            "description": "Which programmable properties this Item adds to its hero.",
            "items": {
                "minLength": 1,
                "default": "attack",
                "type": "string"
            },
            "type": "array"
        },
        "ownerID": {
            "default": "",
            "description": "The ID of the Thang which will equip this item.",
            "format": "thang",
            "type": "string"
        },
        "moreProgrammableProperties": {
            "description": "Which non-important programmable properties this item adds to its hero.",
            "default": [],
            "uniqueItems": true,
            "items": {
                "minLength": 1,
                "type": "string"
            },
            "type": "array"
        },
        "extraHUDProperties": {
            "description": "Names of properties to display in the HUD when this Thang is selected.",
            "default": [],
            "items": {
                "type": "string"
            },
            "type": "array"
        }
    }
}