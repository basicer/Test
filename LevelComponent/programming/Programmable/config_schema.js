{
    "type": "object",
    "additionalProperties": false,
    "id": "__base__",
    "default": {
        "apiUserProperties": [],
        "moreProgrammableProperties": [],
        "programmableProperties": [
            "say"
        ]
    },
    "properties": {
        "programmableProperties": {
            "uniqueItems": true,
            "items": {
                "minLength": 1,
                "description": "Names of properties which should be accessible to programmable methods.",
                "type": "string"
            },
            "type": "array"
        },
        "programmableMethods": {
            "type": "object",
            "additionalProperties": {
                "properties": {
                    "solutions": {
                        "description": "The first solution for each language will be the primary solution (shown to teachers).",
                        "format": "solutions",
                        "items": {
                            "type": "object",
                            "properties": {
                                "goals": {
                                    "type": "object"
                                },
                                "frameCount": {
                                    "description": "Count of frames.",
                                    "type": "integer"
                                },
                                "lastHash": {
                                    "description": "Actually the second to last frame hash.",
                                    "type": "number"
                                },
                                "flagHistory": {
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "pos": {
                                                "type": "object",
                                                "properties": {
                                                    "y": {
                                                        "type": "number"
                                                    },
                                                    "x": {
                                                        "type": "number"
                                                    }
                                                },
                                                "required": [
                                                    "x",
                                                    "y"
                                                ]
                                            },
                                            "active": {
                                                "type": "boolean"
                                            },
                                            "time": {
                                                "minimum": 0,
                                                "type": "number"
                                            },
                                            "color": {
                                                "default": "green",
                                                "enum": [
                                                    "green",
                                                    "black",
                                                    "violet"
                                                ],
                                                "type": "string"
                                            },
                                            "team": {
                                                "type": "string"
                                            },
                                            "player": {
                                                "type": "string"
                                            }
                                        },
                                        "required": [
                                            "player",
                                            "color",
                                            "time",
                                            "active"
                                        ]
                                    },
                                    "description": "The history of flag events during the last real-time playback submission.",
                                    "type": "array"
                                },
                                "heroConfig": {
                                    "description": "Which hero the player is using, equipped with what inventory.",
                                    "properties": {
                                        "thangType": {
                                            "format": "thang-type",
                                            "description": "The ThangType of the hero.",
                                            "title": "Thang Type",
                                            "links": [
                                                {
                                                    "href": "/db/thang.type/{($)}/version",
                                                    "rel": "db"
                                                }
                                            ],
                                            "type": [
                                                "object",
                                                "string"
                                            ]
                                        },
                                        "inventory": {
                                            "additionalProperties": {
                                                "links": [
                                                    {
                                                        "href": "/db/thang.type/{($)}/version",
                                                        "rel": "db"
                                                    }
                                                ],
                                                "format": "thang-type",
                                                "description": "An item ThangType.",
                                                "type": [
                                                    "object",
                                                    "string"
                                                ]
                                            },
                                            "description": "The inventory of the hero: slots to item ThangTypes.",
                                            "type": "object"
                                        }
                                    },
                                    "additionalProperties": false,
                                    "type": "object"
                                },
                                "difficulty": {
                                    "description": "Difficulty level for replayable levels (or 0, the default).",
                                    "type": "number"
                                },
                                "seed": {
                                    "oneOf": [
                                        {
                                            "description": "A fixed seed to use",
                                            "type": "number"
                                        },
                                        {
                                            "description": "Variables that might go into the seed.",
                                            "type": "object"
                                        }
                                    ]
                                },
                                "succeeds": {
                                    "default": true,
                                    "type": "boolean"
                                },
                                "language": {
                                    "enum": [
                                        "javascript",
                                        "python",
                                        "coffeescript",
                                        "clojure",
                                        "lua",
                                        "io",
                                        "java"
                                    ],
                                    "type": "string"
                                },
                                "source": {
                                    "format": "code",
                                    "type": "string"
                                }
                            }
                        },
                        "type": "array"
                    },
                    "context": {
                        "title": "Comments",
                        "type": "object",
                        "additionalProperties": {
                            "type": "string"
                        }
                    },
                    "i18n": {
                        "description": "Help translate the example code comments.",
                        "props": [
                            "context"
                        ],
                        "format": "i18n",
                        "type": "object",
                        "additionalProperties": true
                    },
                    "aiSource": {
                        "description": "The default source the Thang will run if it's an AI-controlled player in multiplayer.",
                        "format": "javascript",
                        "type": "string"
                    },
                    "executionLimit": {
                        "minimum": 0,
                        "description": "How many execution units (~statements) allowed per method call. 0 for unlimited. Just works on chooseAction so far.",
                        "type": "integer"
                    },
                    "permissions": {
                        "required": [
                            "read",
                            "readwrite"
                        ],
                        "properties": {
                            "readwrite": {
                                "maxItems": 1,
                                "default": [
                                    "humans"
                                ],
                                "items": {
                                    "description": "A team which should be allowed to read and write this spell.",
                                    "type": "string"
                                },
                                "description": "Array of teams which should be allowed to read and write this spell. This will migrate to a single team in a future update, as multiple teams can't share a spell in multiplayer.",
                                "type": "array"
                            },
                            "read": {
                                "default": [],
                                "items": {
                                    "description": "A team which should be allowed to read (but not write) this spell.",
                                    "type": "string"
                                },
                                "description": "Array of teams which should be allowed to read (but not write) this spell.",
                                "type": "array"
                            }
                        },
                        "additionalProperties": false,
                        "type": "object"
                    },
                    "parameters": {
                        "description": "Names of parameters to the method.",
                        "items": {
                            "type": "string"
                        },
                        "type": "array"
                    },
                    "source": {
                        "description": "Initial source code the user can edit.",
                        "format": "javascript",
                        "type": "string"
                    },
                    "name": {
                        "description": "Name of the method.",
                        "type": "string"
                    },
                    "languages": {
                        "skipJavaScript": true,
                        "type": "object",
                        "additionalProperties": {
                            "type": "string",
                            "format": "code",
                            "description": "Initial source code for another language besides JavaScript."
                        },
                        "description": "Initial source code in languages other than JavaScript",
                        "format": "code-languages-object"
                    }
                },
                "description": "Configuration for a single programmable method.",
                "minProperties": 1,
                "additionalProperties": false,
                "type": "object",
                "default": {
                    "name": "methodName"
                }
            },
            "description": "Methods which should be programmable: {name: string, source: string, type: instance|class, parameters: array of strings}."
        },
        "moreProgrammableProperties": {
            "default": [],
            "uniqueItems": true,
            "items": {
                "minLength": 1,
                "description": "Names of more properties which should be accessible to programmable methods in the \"More\" tab.",
                "type": "string"
            },
            "type": "array"
        },
        "apiUserProperties": {
            "default": [],
            "items": {
                "description": "Names of properties which should be writable by programmable methods.",
                "type": "string"
            },
            "type": "array"
        }
    }
}