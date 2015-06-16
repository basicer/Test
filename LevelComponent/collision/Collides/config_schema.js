{
    "type": "object",
    "additionalProperties": false,
    "id": "__base__",
    "default": {
        "restitution": 0.5,
        "isBullet": false,
        "fixedRotation": false,
        "mass": 70,
        "collisionCategory": "ground",
        "collisionType": "dynamic"
    },
    "properties": {
        "restitution": {
            "default": 0.5,
            "description": "Bounciness--ratio of speed after a collision to speed before the collision. http://en.wikipedia.org/wiki/Coefficient_of_restitution",
            "exclusiveMinimum": true,
            "minimum": 0,
            "type": "number"
        },
        "isBullet": {
            "default": false,
            "description": "Whether this Thang collides like a bullet (long, small, fast).",
            "type": "boolean"
        },
        "fixedRotation": {
            "description": "Whether this Thang can rotate freely when physics forces act upon it.",
            "default": false,
            "type": "boolean"
        },
        "mass": {
            "format": "kilograms",
            "default": 70,
            "description": "Mass in kilograms.",
            "type": "number"
        },
        "collisionCategory": {
            "description": "What type of collisions this Thang partakes in.",
            "default": "ground",
            "enum": [
                "ground",
                "air",
                "ground_and_air",
                "none",
                "obstacles",
                "dead"
            ],
            "type": "string"
        },
        "collisionType": {
            "enum": [
                "static",
                "kinematic",
                "dynamic"
            ],
            "type": "string",
            "default": "dynamic",
            "description": "Explanations: http://www.box2d.org/manual.html#_Toc258082973"
        }
    }
}