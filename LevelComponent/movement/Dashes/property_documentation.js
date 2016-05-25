[
    {
        "description": "The multiplier of #{spiteName}'s movement speed.",
        "type": "number",
        "name": "dashSpeedMultiplier"
    },
    {
        "description": "Whether or not #{spriteName} turns to face which way they are dashing.",
        "type": "boolean",
        "name": "turnToDirection"
    },
    {
        "args": [
            {
                "description": "The target of this function.",
                "example": "target",
                "type": "object",
                "name": "target"
            }
        ],
        "description": "The 'dash' ability allows combatants to quickly leap towards any target or position.",
        "type": "function",
        "name": "dash"
    },
    {
        "description": "The cooldown is the amount of time after dashing, until the next action can be performed. You need to wait 'x' seconds until you can walk after dashing.",
        "type": "number",
        "name": "cooldown"
    },
    {
        "description": "The specific cooldown property is the amount of time until the ability/action can be used again. You can only dash once per 'specificCooldown'.",
        "type": "number",
        "name": "specificCooldown"
    }
]