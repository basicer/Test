[
    {
        "description": "What boundaries the flock should attempt to stay inside of",
        "type": "object",
        "name": "flockBounds"
    },
    {
        "description": "How much weight is given to steering towards the center of mass of the flock. Helps keep the flock together, but if this is too high they will bunch up.\n",
        "type": "number",
        "name": "centerOfMassWeight"
    },
    {
        "description": "How much weight is given to steering towards the average heading of the flock. Keeps the flock moving in the same direction.",
        "type": "number",
        "name": "commonHeadingWeight"
    },
    {
        "description": "The flock will get uncomfortable being any closer than this distance from any thang not part of the flock\n",
        "type": "number",
        "name": "avoidDistance"
    }
]