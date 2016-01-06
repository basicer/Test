[
    {
        "returns": {
            "example": "pink",
            "description": "One of the following Strings: \"red\",\"yellow\",\"orange\",\"blue\",\"purple\",\"pink\"",
            "type": "String"
        },
        "args": [
            {
                "description": "The x coordinate of the tile",
                "example": "0",
                "type": "Number",
                "name": "x"
            },
            {
                "description": "The y coordinate of the tile",
                "example": "0",
                "type": "Number",
                "name": "y"
            }
        ],
        "description": "Accessor function for getting the type of a tile, given x and y.",
        "type": "function",
        "name": "getTile"
    },
    {
        "args": [],
        "returns": {
            "description": "Your character",
            "type": "object"
        },
        "description": "Accessor function for getting your character(Vyjj). Your character has the same functions as yourself.",
        "type": "function",
        "name": "getCharacter"
    },
    {
        "returns": {
            "example": {
                "javascript": "\"{x:16,y:9}\""
            },
            "description": "The size of the maze",
            "type": "object"
        },
        "args": [],
        "description": "Accessor function for the size of the maze",
        "type": "function",
        "name": "getMazeSize"
    },
    {
        "returns": {
            "example": "\"none\"",
            "description": "One of the following Strings: \"none\",\"lemon\",\"orange\"",
            "type": "String"
        },
        "args": [],
        "description": "Accessor function for getting the current smell of your character.",
        "type": "function",
        "name": "getSmell"
    },
    {
        "returns": {
            "example": {
                "javascript": "\"{x: 0, y:4}\""
            },
            "description": "the current location of your character",
            "type": "object"
        },
        "args": [],
        "description": "Accessor function for getting the current location of your character",
        "type": "function",
        "name": "getLocationInMaze"
    }
]