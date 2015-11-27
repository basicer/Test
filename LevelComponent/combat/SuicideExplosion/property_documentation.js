[
    {
        "description": "The explosion does at most #{explosionDamage} to targets caught in the blast.",
        "type": "number",
        "name": "damage"
    },
    {
        "description": "How the damage is allocated, either 'full' equally across the circle, or 'linear'ly spread out decreasing in distance to a minimum of 0 damage at 'explosionRadius'.",
        "type": "string",
        "name": "damageDistribution"
    },
    {
        "description": "The range of the explosion, as a radius, in meters.",
        "type": "number",
        "name": "explosionRadius"
    },
    {
        "description": "The color of the indication graphic, as a string of hexcode. (e.g. #FF000 for red, or #FF8800 for an orange.)",
        "type": "string",
        "name": "explosionColor"
    },
    {
        "description": "How much mass momentum to impart on targets caught in the explosion.",
        "type": "number",
        "name": "explosionMass"
    },
    {
        "description": "Whether or not explosions hit enemies of the same team.",
        "type": "boolean",
        "name": "friendlyFire"
    },
    {
        "description": "How close an enemy needs to get before exploding prematurely.",
        "type": "number",
        "name": "triggerRadius"
    }
]