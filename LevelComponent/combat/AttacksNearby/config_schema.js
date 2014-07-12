{
    "type": "object",
    "additionalProperties": false,
    "default": {
        "attackNearbyEnemyRange": 0,
        "attackNearbyEnemyWaitTime": 3
    },
    "properties": {
        "attackNearbyEnemyRange": {
            "minimum": 0,
            "description": "How far away an enemy can be before we will not chase and attack it as a nearby enemy, or 3X attackRange.",
            "type": "number"
        },
        "attackNearbyEnemyWaitTime": {
            "default": 3,
            "minimum": 0,
            "description": "How long to wait for a nearby enemy to show up before declaring there are no nearby enemies.",
            "type": "number"
        }
    }
}