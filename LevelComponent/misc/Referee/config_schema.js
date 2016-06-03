{
    "properties": {
        "waves": {
            "items": {
                "description": "Configuration for a single wave.",
                "properties": {
                    "name": {
                        "description": "Optional name of wave, for use in programmatically triggering waves or just eyeballing things.",
                        "type": "string"
                    },
                    "scalesWithDifficulty": {
                        "description": "Whether this wave will scale up its power to match the increased difficulty setting on replayable levels.",
                        "type": "boolean"
                    },
                    "sharesSpawnPoint": {
                        "description": "Whether each spawn in this wave will spawn in the same spawn point, or whether they'll each choose a fresh spawn point.",
                        "type": "boolean"
                    },
                    "power": {
                        "description": "How much total power to spawn in a wave, where one power unit is roughly calculated as the strength of one munchkin.",
                        "minimum": 0,
                        "type": "number"
                    },
                    "triggerLocations": {
                        "items": {
                            "properties": {
                                "triggerDistance": {
                                    "description": "How far away from a trigger point (not rectangle) the hero can get before the wave will spawn.",
                                    "type": "number"
                                },
                                "type": {
                                    "description": "Whether it's the name of a rectangle or point trigger.",
                                    "enum": [
                                        "rectangle",
                                        "point"
                                    ],
                                    "type": "string"
                                },
                                "name": {
                                    "description": "Name of trigger rectangle or point.",
                                    "type": "string"
                                }
                            },
                            "type": "object"
                        },
                        "description": "Locations (names of rectangles or points) that will trigger this spawn if the hero touches them.",
                        "type": "array"
                    },
                    "regions": {
                        "items": {
                            "description": "Name of a rectangle that Thangs can spawn in.",
                            "type": "string"
                        },
                        "description": "Names of rectangles that Thangs can spawn in.",
                        "type": "array"
                    },
                    "points": {
                        "items": {
                            "items": {
                                "description": "Waypoints for this path (just one for a spawn location with no waypoints).",
                                "type": "string"
                            },
                            "type": "array"
                        },
                        "description": "Names of points that Thangs can spawn at, possibly including waypoints.",
                        "type": "array"
                    },
                    "endTime": {
                        "format": "seconds",
                        "minimum": 0,
                        "description": "When this wave can stop spawning. Omit for instant spawn of entire wave at startTime.",
                        "type": "number"
                    },
                    "startTime": {
                        "format": "seconds",
                        "minimum": 0,
                        "description": "When this wave can start spawning. Omit for no auto-spawn.",
                        "type": "number"
                    },
                    "spawnChances": {
                        "description": "Chance of spawning each type of Thang.",
                        "items": {
                            "type": "object",
                            "properties": {
                                "spawnChance": {
                                    "description": "Relative likelihood of spawning this type, when any Thang is spawned.",
                                    "minimum": 0,
                                    "type": "number"
                                },
                                "buildType": {
                                    "description": "Like 'ogre-scout-m' or 'ogre-m'; must match Builds config.",
                                    "type": "string"
                                }
                            }
                        },
                        "type": "array"
                    },
                    "seedBuckets": {
                        "items": {
                            "minimum": 0,
                            "type": "integer"
                        },
                        "description": "Which seed buckets (0, 1, 2, etc.) this wave can spawn in.",
                        "type": "array"
                    }
                },
                "type": "object"
            },
            "description": "Configuration for automatically spawning waves.",
            "type": "array"
        },
        "rectangles": {
            "additionalProperties": {
                "format": "bounds",
                "default": [
                    {
                        "y": 0,
                        "x": 0
                    },
                    {
                        "y": 39,
                        "x": 46
                    }
                ],
                "minItems": 2,
                "maxItems": 2,
                "items": {
                    "default": {
                        "y": 20,
                        "x": 15
                    },
                    "format": "point2d",
                    "description": "An {x, y} coordinate point.",
                    "title": "Point",
                    "properties": {
                        "y": {
                            "type": "number",
                            "description": "The y coordinate.",
                            "title": "y"
                        },
                        "x": {
                            "type": "number",
                            "description": "The x coordinate.",
                            "title": "x"
                        }
                    },
                    "additionalProperties": false,
                    "type": "object"
                },
                "type": "array"
            },
            "type": "object"
        },
        "points": {
            "additionalProperties": {
                "default": {
                    "y": 20,
                    "x": 15
                },
                "format": "point2d",
                "description": "An {x, y} coordinate point.",
                "properties": {
                    "y": {
                        "type": "number",
                        "description": "The y coordinate.",
                        "title": "y"
                    },
                    "x": {
                        "type": "number",
                        "description": "The x coordinate.",
                        "title": "x"
                    }
                },
                "additionalProperties": false,
                "type": "object"
            },
            "type": "object"
        },
        "extraCode": {
            "default": "{\n  #setUpLevel: ->\n    \n  #onFirstFrame: ->\n    \n  #chooseAction: ->\n    \n  #checkVictory: ->\n    \n}",
            "description": "Define an object containing more methods and properties, which will be attached to this Thang so you don't need a custom Referee.",
            "format": "coffee",
            "type": "string"
        },
        "ellipses": {
            "additionalProperties": {
                "format": "bounds",
                "default": [
                    {
                        "y": 0,
                        "x": 0
                    },
                    {
                        "y": 39,
                        "x": 46
                    }
                ],
                "minItems": 2,
                "maxItems": 2,
                "items": {
                    "default": {
                        "y": 20,
                        "x": 15
                    },
                    "format": "point2d",
                    "description": "An {x, y} coordinate point.",
                    "title": "Point",
                    "properties": {
                        "y": {
                            "type": "number",
                            "description": "The y coordinate.",
                            "title": "y"
                        },
                        "x": {
                            "type": "number",
                            "description": "The x coordinate.",
                            "title": "x"
                        }
                    },
                    "additionalProperties": false,
                    "type": "object"
                },
                "type": "array"
            },
            "type": "object"
        },
        "coinSpawn": {
            "default": {
                "spawnChances": [
                    {
                        "spawnChance": 65,
                        "buildType": "bronze-coin"
                    },
                    {
                        "spawnChance": 30,
                        "buildType": "silver-coin"
                    },
                    {
                        "spawnChance": 15,
                        "buildType": "gold-coin"
                    }
                ]
            },
            "properties": {
                "regions": {
                    "items": {
                        "description": "Name of a rectangle that coins can spawn in.",
                        "type": "string"
                    },
                    "description": "Names of rectangles that coins can spawn in.",
                    "type": "array"
                },
                "spawnChances": {
                    "description": "Chance of spawning each type of coin.",
                    "items": {
                        "type": "object",
                        "properties": {
                            "spawnChance": {
                                "description": "Relative likelihood of spawning this type, when any coin is spawned.",
                                "minimum": 0,
                                "type": "number"
                            },
                            "buildType": {
                                "description": "Like 'gold-coin' or 'silver-coin'; must match Builds config.",
                                "type": "string"
                            }
                        }
                    },
                    "default": [
                        {
                            "spawnChance": 65,
                            "buildType": "bronze-coin"
                        },
                        {
                            "spawnChance": 30,
                            "buildType": "silver-coin"
                        },
                        {
                            "spawnChance": 15,
                            "buildType": "gold-coin"
                        }
                    ],
                    "type": "array"
                },
                "startingGold": {
                    "minimum": 0,
                    "description": "The amount of gold that starts in the coin spawn rectangles.",
                    "type": "number"
                },
                "goldPerSecond": {
                    "description": "The amount of gold value to spawn per second, on average.",
                    "minimum": 0,
                    "type": "number"
                },
                "endTime": {
                    "format": "seconds",
                    "minimum": 0,
                    "description": "When coins stop spawning.",
                    "type": "number"
                },
                "startTime": {
                    "format": "seconds",
                    "minimum": 0,
                    "description": "When coins start spawning.",
                    "type": "number"
                }
            }
        }
    }
}