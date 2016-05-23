{
    "default": {
        "warcryMinimumMass": 400,
        "warcryMassFactor": 1.3,
        "warcryRange": 10,
        "warcryDuration": 5,
        "specificCooldown": 0,
        "cooldown": 1
    },
    "properties": {
        "warcryRange": {
            "format": "meters",
            "description": "How far the warcry reaches, in meters.",
            "default": 10,
            "type": "number"
        },
        "warcryMinimumMass": {
            "default": "400",
            "description": "Increase attackMass to this value if the unit's attackMass is less"
        },
        "warcryMassFactor": {
            "default": 1.2,
            "description": "By how much to increase the attackMass of allied units.",
            "type": "number"
        },
        "warcryDuration": {
            "default": 5,
            "format": "seconds",
            "description": "How long the warcry lasts, in seconds.",
            "type": "number"
        },
        "specificCooldown": {
            "minimum": 0,
            "description": "Cooldown before this Thang can warcry again.",
            "type": "number"
        },
        "cooldown": {
            "description": "Cooldown before this Thang can act again after warcry.",
            "minimum": 0,
            "type": "number"
        }
    }
}