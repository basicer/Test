{
    "type": "object",
    "additionalProperties": false,
    "default": {
        "superteam": "",
        "playable": true,
        "team": "humans"
    },
    "properties": {
        "playable": {
            "description": "Whether this team is playable by Wizards.",
            "type": "boolean"
        },
        "superteam": {
            "description": "Which superteam this Team Thang represents (or defaults to team).",
            "type": "string"
        },
        "team": {
            "description": "Which team this Team Thang represents.",
            "type": "string"
        }
    }
}