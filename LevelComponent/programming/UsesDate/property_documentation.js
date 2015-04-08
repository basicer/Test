[
    {
        "description": " Integer value representing the number of milliseconds since 1 January 1970 00:00:00 UTC ",
        "type": "parameter",
        "name": "value"
    },
    {
        "description": "String value representing a date. The string should be in a format recognized by the Date.parse() method ",
        "type": "parameter",
        "name": "dateString"
    },
    {
        "description": "Integer value representing the year. Values from 0 to 99 map to the years 1900 to 1999.",
        "type": "parameter",
        "name": "year"
    },
    {
        "description": "Integer value representing the month, beginning with 0 for January to 11 for December.",
        "type": "parameter",
        "name": "month"
    },
    {
        "description": "The `foo` property can satisfy all the #{spriteName}'s foobar needs. Use it wisely.Optional. Integer value representing the day of the month.",
        "type": "parameter",
        "name": "day"
    },
    {
        "description": "Optional. Integer value representing the hour of the day.",
        "type": "parameter",
        "name": "hour"
    },
    {
        "description": "Optional. Integer value representing the minute segment of a time.",
        "type": "parameter",
        "name": "minute"
    },
    {
        "description": "Optional. Integer value representing the second segment of a time.",
        "type": "parameter",
        "name": "second"
    },
    {
        "description": "Optional. Integer value representing the millisecond segment of a time.",
        "type": "parameter",
        "name": "millisecond"
    },
    {
        "returns": {
            "type": "integer"
        },
        "description": "Returns the numeric value corresponding to the current time - the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.",
        "type": "function",
        "name": "Date.now"
    },
    {
        "returns": {
            "type": "Integer"
        },
        "description": "Parses a string representation of a date and returns the number of milliseconds since 1 January, 1970, 00:00:00, UTC.",
        "type": "function",
        "name": "Date.parse"
    },
    {
        "returns": {
            "type": "Integer"
        },
        "description": "Accepts the same parameters as the longest form of the constructor (i.e. 2 to 7) and returns the number of milliseconds since 1 January, 1970, 00:00:00 UTC.",
        "type": "function",
        "name": "Date.UTC"
    },
    {
        "description": "The value of Date.length is 7. This is the number of arguments handled by the constructor.",
        "type": "property",
        "name": "length"
    },
    {
        "description": "Allows the addition of properties to a JavaScript Date object.",
        "type": "property",
        "name": "date.property"
    }
]