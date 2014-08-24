[
    {
        "description": "The `board` object stores the current state of the game.\nIt has 3 properties : `grid` , `moveCount` and `hasEnded`.\n`board.grid` is a 3 x 3 matrix that stores the game board , it contains `'X'` , `'O'` or `0` if empty.\n`board.moveCount` stores how many moves have been made on the board.\n`board.hasEnded` shows if the game has ended or not.\n",
        "type": "object",
        "name": "board"
    },
    {
        "example": {
            "javascript": "var copy = this.applyMove(this.board,2,3,'X');"
        },
        "args": [
            {
                "description": "The board on which to apply the move",
                "example": "this.board",
                "type": "object",
                "name": "board"
            },
            {
                "description": "The index of the row.",
                "example": "2",
                "type": "number",
                "name": "i"
            },
            {
                "description": "The index of the column.",
                "example": "1",
                "type": "number",
                "name": "j"
            },
            {
                "description": "The player for which to apply the move.",
                "example": "'X' or 'O'",
                "type": "object",
                "name": "player"
            }
        ],
        "description": "The `applyMove` function is used to simulate a move on the board.\nThe function mutates the board argument so you should use a copy instead.",
        "type": "function",
        "name": "applyMove"
    },
    {
        "example": {
            "javascript": "var value = this.evaluateBoard(this.board,'X');"
        },
        "args": [
            {
                "description": "The board state for which to calculate the value",
                "example": "this.board",
                "type": "object",
                "name": "board"
            },
            {
                "description": "The player for which to calculate the value",
                "example": "'X' or 'O'",
                "type": "object",
                "name": "player"
            }
        ],
        "description": "The `evaluateBoard` is the heuristic function used to calculate the value of each board state.",
        "type": "function",
        "name": "evaluateBoard"
    },
    {
        "example": {
            "javascript": "var moves = this.getPossibleMoves(this.board);"
        },
        "args": [
            {
                "description": "The board for which to find the possible moves.",
                "example": "this.board",
                "type": "object",
                "name": "board"
            }
        ],
        "description": "The `getPossibleMoves` function returns all possible future moves that can be done given a board state.",
        "type": "function",
        "name": "getPossibleMoves"
    },
    {
        "args": [
            {
                "description": "The board state for which to find the next move",
                "example": "this.board",
                "type": "object",
                "name": "board"
            },
            {
                "description": "The player who moves",
                "example": "'X' or 'O'",
                "type": "object",
                "name": "player"
            },
            {
                "description": "The search depth of the algorithm. ",
                "example": "3",
                "type": "number",
                "name": "depth"
            },
            {
                "description": "Represents the lower bound.",
                "example": "-Infinity",
                "type": "number",
                "name": "alpha"
            },
            {
                "description": "Represents the upper bound.",
                "example": "+Infinity",
                "type": "number",
                "name": "beta"
            }
        ],
        "description": "`minimax_alphaBeta` is a function that returns the best next move based on the minimax algorithm with alpha-beta enhancement.\n",
        "type": "function",
        "name": "minimax_alphaBeta"
    }
]