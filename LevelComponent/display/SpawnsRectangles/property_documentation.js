[
    {
        "args": [
            {
                "default": "",
                "description": "x-coordinate of **center** of the rectangle.",
                "example": "30",
                "type": "number",
                "name": "x"
            },
            {
                "default": "",
                "description": "y-coordinate of **center** of the rectangle.",
                "example": "12",
                "type": "number",
                "name": "y"
            },
            {
                "default": "",
                "description": "Width of the rectangle, in meters.",
                "example": "4",
                "type": "number",
                "name": "width"
            },
            {
                "default": "",
                "description": "Height of the rectangle, in meters.",
                "example": "24",
                "type": "number",
                "name": "height"
            }
        ],
        "description": "The `addRect()` method adds a rectangle centered at the given `(x, y)` coordinate with the given `width` and `height`.",
        "type": "function",
        "name": "addRect"
    },
    {
        "args": [
            {
                "default": "",
                "description": "x-coordinate of center of the rectangle to remove.",
                "example": "30",
                "type": "number",
                "name": "x"
            },
            {
                "default": "",
                "description": "y-coordinate of center of the rectangle to remove.",
                "example": "12",
                "type": "number",
                "name": "y"
            }
        ],
        "description": "The `removeRectAt()` method removes a previously added rectangle centered at the given `(x, y)` coordinate.",
        "type": "function",
        "name": "removeRectAt"
    },
    {
        "snippets": {
            "python": {
                "tab": "spawnedRectangles",
                "code": "self.spawnedRectangles"
            },
            "javascript": {
                "tab": "spawnedRectangles",
                "code": "this.spawnedRectangles"
            }
        },
        "example": {
            "Python": "for rect in self.spawnedRectangles:\n    # rect.pos.x, rect.pos.y, rect.width, rect.height\n",
            "JavaScript": "for(var i = 0; i < this.spawnedRectangles.length; ++i) {\n    var rect = this.spawnedRectangles[i];\n    // rect.pos.x, rect.pos.y, rect.width, rect.height\n}"
        },
        "description": "An array of rectangle objects which have been added with the `addRect()` method.",
        "type": "array",
        "name": "spawnedRectangles"
    }
]