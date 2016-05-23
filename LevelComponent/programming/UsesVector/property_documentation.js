[
    {
        "owner": "Vector",
        "description": "The x-coordinate of the Vector (usually in meters).",
        "type": "number",
        "name": "x"
    },
    {
        "owner": "Vector",
        "description": "The y-coordinate of the Vector (usually in meters).",
        "type": "number",
        "name": "y"
    },
    {
        "owner": "Vector",
        "description": "The z-coordinate of the Vector (usually in meters).",
        "type": "number",
        "name": "z"
    },
    {
        "owner": "Vector",
        "description": "Returns the length of the Vector (usually in meters).",
        "type": "function",
        "name": "magnitude"
    },
    {
        "owner": "Vector",
        "description": "Returns the rotation of the Vector in radians. A Vector pointing to the right would return 0, whereas one pointing up would return Math.PI / 2.",
        "type": "function",
        "name": "heading"
    },
    {
        "owner": "Vector",
        "args": [
            {
                "description": "",
                "example": "new Vector(20, 25)",
                "type": "Vector",
                "name": "other"
            }
        ],
        "description": "Returns the distance (usually in meters) to another Vector.",
        "type": "function",
        "name": "distance"
    },
    {
        "owner": "Vector",
        "args": [
            {
                "description": "",
                "example": "new Vector(20, 25)",
                "type": "Vector",
                "name": "other"
            }
        ],
        "description": "Returns the dot product of this Vector with another Vector: `this.x * other.x + this.y * other.y`.",
        "type": "function",
        "name": "dot"
    },
    {
        "owner": "Vector",
        "args": [
            {
                "description": "",
                "example": "new Vector(20, 25)",
                "type": "Vector",
                "name": "other"
            }
        ],
        "description": "Returns whether this Vector is equal to the given Vector.",
        "type": "function",
        "name": "equals"
    },
    {
        "owner": "Vector",
        "description": "Returns a copy of this Vector.",
        "type": "function",
        "name": "copy"
    },
    {
        "owner": "Vector",
        "example": "var targetPos = this.getNearestEnemy().pos;\nvar diff = new Vector(5, 5);\nvar res = Vector.add(targetPos, diff);",
        "args": [
            {
                "description": "",
                "example": "new Vector(10, 0)",
                "type": "Vector",
                "name": "a"
            },
            {
                "description": "",
                "example": "new Vector(0, 10)",
                "type": "Vector",
                "name": "b"
            }
        ],
        "description": "**Class Method**. Adds two Vectors together and returns a new Vector as the result.",
        "type": "function",
        "name": "add"
    },
    {
        "owner": "Vector",
        "example": "var targetPos = this.getNearestEnemy().pos;\nvar diff = Vector.subtract(targetPos, this.pos);",
        "args": [
            {
                "description": "",
                "example": "new Vector(10, 0)",
                "type": "Vector",
                "name": "a"
            },
            {
                "description": "",
                "example": "new Vector(0, 10)",
                "type": "Vector",
                "name": "b"
            }
        ],
        "description": "**Class Method**. Subtracts one Vector from another and returns a new Vector as the result.",
        "type": "function",
        "name": "subtract"
    },
    {
        "owner": "Vector",
        "example": "var targetPos = this.getNearestEnemy().pos;\nvar diff = Vector.subtract(targetPos, this.pos);\nvar away = Vector.multiply(diff, -2.5);",
        "args": [
            {
                "description": "The amount by which to multiply this Vector.",
                "example": "-2.5",
                "type": "number",
                "name": "n"
            }
        ],
        "description": "**Class Method**. Multiplies the given Vector by the given scalar and returns a new Vector as the result.",
        "type": "function",
        "name": "multiply"
    },
    {
        "owner": "Vector",
        "example": "var targetPos = this.getNearestEnemy().pos;\nvar diff = Vector.subtract(targetPos, this.pos);\nvar half = Vector.divide(diff, 2);",
        "args": [
            {
                "description": "The amount by which to divide this Vector.",
                "example": "2",
                "type": "number",
                "name": "n"
            }
        ],
        "description": "**Class Method**. Divides the given Vector by the given scalar and returns a new Vector as the result.",
        "type": "function",
        "name": "divide"
    },
    {
        "owner": "Vector",
        "example": "var targetPos = this.getNearestEnemy().pos;\nvar diff = Vector.subtract(targetPos, this.pos);\nvar limited = Vector.limit(diff, 20);",
        "args": [
            {
                "description": "The max length of the Vector.",
                "example": "20",
                "type": "number",
                "name": "max"
            }
        ],
        "description": "**Class Method**. Limits the given Vector to the given length–no effect if it's already shorter. Returns a new Vector as the result.",
        "type": "function",
        "name": "limit"
    },
    {
        "owner": "Vector",
        "example": "var targetPos = this.getNearestEnemy().pos;\nvar diff = Vector.subtract(targetPos, this.pos);\nvar dir = Vector.normalize(diff);",
        "description": "**Class Method**. Normalizes the Vector to length 1 (unless it's length 0). Returns a new Vector as the result.",
        "type": "function",
        "name": "normalize"
    },
    {
        "owner": "Vector",
        "example": {
            "coffeescript": "targetPos = @getNearestEnemy().pos\ndiff = Vector.subtract targetPos, @pos\ntangent = Vector.rotate diff, Math.PI / 2",
            "python": "targetPos = self.getNearestEnemy().pos\ndiff = Vector.subtract(targetPos, self.pos)\ntangent = Vector.rotate(diff, Math.PI / 2)",
            "javascript": "var targetPos = this.getNearestEnemy().pos;\nvar diff = Vector.subtract(targetPos, this.pos);\nvar tangent = Vector.rotate(diff, Math.PI / 2);"
        },
        "args": [
            {
                "description": "",
                "example": "Vector(3, 4) or self.pos",
                "type": "vector",
                "name": "vector"
            },
            {
                "description": "The amount (in radians) to rotate the Vector.",
                "example": "Math.PI / 4",
                "type": "number",
                "name": "angle"
            }
        ],
        "description": "**Class Method**. Rotates the given Vector around the origin by the given angle. Returns a new Vector as the result.",
        "type": "function",
        "name": "rotate"
    }
]