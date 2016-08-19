[
    {
        "example": {
            "html": "<script>\n    var header = $(\"#header\");\n    if(header.css(\"background-color\") == \"rgb(255, 0, 0)\") {\n        header.css(\"background-color\", \"blue\");\n    }\n</script>\n<style>\n    #header {\n        background-color: rgb(255, 0, 0);\n    }\n</style>\n<div id=\"header\">\n    <h1>Welcome!</h1>\n</div>"
        },
        "owner": "WebJavaScript",
        "description": "`if` statements are used to control the flow of your program.\n\n`if` statements are used to ask a question (called a `conditional`), and performs an action if the answer is `true`.\n\nTo help understand `if` statements, read them out loud:\n\n```javascript\nif(element.hasClass(\"selected\")) {\n    element.css(\"background-color\", \"blue\");\n}\n```\nor, in normal language:\n`if element has the \"selected\" class, set the element's background-color to blue.`",
        "type": "keyword",
        "name": "if"
    },
    {
        "example": {
            "html": "<script>\n    var elements = $(\".helper\");\n    function hideNope() {\n        var target = $(this);\n        if(target.text() == \"Yep.\") {\n            target.show();\n        } else if (target.text() == \"Nope.\") {\n            target.hide();\n        }\n    }\n    elements.on(\"click\",)\n</script>\n<style>\n    .helper {\n        width:64px;\n        height:64px;\n        background-color:blue;\n    }\n</style>\n<div class=\"helper\">\n    Nope.\n</div>\n<div class=\"helper\">\n    Yep.\n</div>"
        },
        "owner": "WebJavaScript",
        "description": "`else if` statements perform an action only if the previous `if` and `else if` statements were `false` and their own `conditional` is `true`.\n\n`else if` statements have their own question/`conditional` that they ask.\n\n```javascript\nif(element.hasClass(\"muted\")) {\n    // Code in here only runs if the element has the class \"muted\".\n}\nelse if (element.hasClass(\"selected\")) {\n    // Code in here only runs if:\n        // element DOESN'T have the class \"muted\".\n        // The element DOES have the class \"selected\".\n}\n```",
        "type": "keyword",
        "name": "else if"
    },
    {
        "example": {
            "html": "<script>\n    var elements = $(\".helper\");\n    function hideNope() {\n        var target = $(this);\n        if(target.text() == \"Yep.\") {\n            target.show();\n        } else if (target.text() == \"Nope.\") {\n            target.hide();\n        } else {\n            target.addClass(\"nahFound\")\n        }\n    }\n    elements.on(\"click\",)\n</script>\n<style>\n    .helper {\n        width:64px;\n        height:64px;\n        background-color:blue;\n    }\n    .nahFound {\n        font-size:large;\n    }\n</style>\n<div class=\"helper\">\n    Nope.\n</div>\n<div class=\"helper\">\n    Yep.\n</div>\n<div class=\"helper\">\n    Nah.\n</div>"
        },
        "owner": "WebJavaScript",
        "description": "`else` statements perform an action only if **all** previous `if` and `else if` statements were `false`. \n\nThey do **not** have their own `conditional`.\n\n```javascript\nif(element.hasClass(\"muted\")) {\n    // This code only runs if element has the class \"muted\".\n}\nelse if (element.hasClass(\"selected\")) {\n    // This code only runs if:\n        // The element doesn't have the class \"muted\".\n        // The element has the class \"selected\".\n}\nelse {\n    //This code only runs if:\n        // The element doesn't have the class \"muted\".\n        // The element has the class \"selected\".\n}\n```",
        "type": "keyword",
        "name": "else"
    },
    {
        "example": {
            "html": "<script>\n    function hideElement() {\n        $(this).hide();\n    }\n    $(\".hideMe\").on(\"click\", hideElement);\n</script>\n<div class=\"hideMe\">\n    <img src=\"http://direct.codecombat.com/file/db/thang.type/566a2202e132c81f00f38c81/portrait.png\"/>\n</div>\n<div class=\"hideMe\">\n    <img src=\"http://direct.codecombat.com/file/db/thang.type/5432f9d18364d30000d1f943/portrait.png\"/>\n</div>\n<div class=\"hideMe\">\n    <img src=\"http://direct.codecombat.com/file/db/thang.type/5744e3683af6bf590cd27371/portrait.png\"/>\n</div>"
        },
        "owner": "WebJavaScript",
        "description": "The `function` keyword is for defining custom user-functions. `functions` are important in web development, as most events require a `callback` function, or, a `function` that is called back-to when the event occurs.\n\n`function`s don't run on their own and must be called first!",
        "type": "keyword",
        "name": "function"
    }
]