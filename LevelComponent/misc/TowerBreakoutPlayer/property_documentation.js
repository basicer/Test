[
    {
        "description": "Returns the factor that is used to calculate the new angle of the ball after hitting the paddle.",
        "type": "number",
        "name": "paddleFactor"
    },
    {
        "returns": {
            "description": "Returns true if y is a valid location where the paddle is moving towards",
            "type": "boolean"
        },
        "args": [
            {
                "description": "The y coordinate the paddle should move to",
                "example": "36",
                "type": "number",
                "name": "y"
            }
        ],
        "description": "Moves the paddle to the given y coordinate",
        "type": "function",
        "name": "movePaddle"
    }
]