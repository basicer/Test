{
    "type": "object",
    "additionalProperties": false,
    "id": "__base__",
    "default": {
        "significantProperty": "isAttackable",
        "superteam": "",
        "team": "humans"
    },
    "properties": {
        "significantProperty": {
            "default": "isAttackable",
            "description": "Which property to use to filter getFriends/getEnemies/getCombatants with, like 'isAttackable' or 'isSelectable'.",
            "type": "string"
        },
        "superteam": {
            "default": "",
            "format": "superteam",
            "description": "Which superteam this Thang is on (or defaults to team).",
            "type": "string"
        },
        "team": {
            "format": "team",
            "description": "Which team this Thang is on. Teams must not change after the level starts.",
            "type": "string"
        }
    }
}