[
    {
        "example": {
            "javascript": "array = this.swapItems(array,3,4);"
        },
        "args": [
            {
                "description": "The array of units.",
                "example": "var array = this.getFriends();",
                "type": "object",
                "name": "array"
            },
            {
                "description": "The index of the first unit to be swapped.",
                "example": "3",
                "type": "number",
                "name": "index1"
            },
            {
                "description": "The index of the second unit to be swapped.",
                "example": "4",
                "type": "number",
                "name": "index2"
            }
        ],
        "description": "\nThe `swapItems` function is used to swap two units from an array.",
        "type": "function",
        "name": "swapItems"
    },
    {
        "example": {
            "javascript": "if (this.isBigger(items[2],items[3]))\n    this.say(\"We got a big one here!\");"
        },
        "args": [
            {
                "description": "The first unit to be compared.",
                "example": "this.getNearestFriend()",
                "type": "object",
                "name": "firstUnit"
            },
            {
                "description": "The second unit to be compared.",
                "example": "this.getNearestFriend()",
                "type": "object",
                "name": "secondUnit"
            }
        ],
        "description": "\n`isBigger` returns true if the first argument (unit) has a bigger `scaleFactor` than the second, false otherwise.\n",
        "type": "function",
        "name": "isBigger"
    },
    {
        "example": {
            "javascript": "if (this.isSmaller(items[2],items[3]))\n    this.say(\"We got a small one here!\");"
        },
        "args": [
            {
                "description": "The first unit to be compared.",
                "example": "this.getNearestEnemy()",
                "type": "object",
                "name": "firstUnit"
            },
            {
                "description": "The second unit to be compared.",
                "example": "this.getNearestFriend()",
                "type": "object",
                "name": "secondUnit"
            }
        ],
        "description": "\n`isSmaller` returns true if the first argument (unit) has a smaller `scaleFactor` than the second, false otherwise.\n",
        "type": "function",
        "name": "isSmaller"
    }
]