[
    {
        "snippets": {
            "html": {
                "code": "$(${1:\"div\"})",
                "tab": "$"
            }
        },
        "example": {
            "html": "<button id=\"theButton\">Click me!</button>\n<div class=\"blogPost\">\n    <h3>Today</h3>\n    <p>\n        I went to the beach.\n    </p>\n</div>\n<script>\n    var button = $(\"#theButton\"); // Set \"button\" to the element with the id \"theButton\".\n    var blogPosts = $(\".blogPost\"); // Set \"blogPosts\" to an array of all elements with class \"blogPost\".\n    var paragraphs = $(\"p\"); // Set \"paragraphs\" to an array of all \"p\" elements.\n</script>"
        },
        "owner": "jQuery",
        "args": [
            {
                "description": "This is a CSS selector.",
                "example": "\".selected\"",
                "type": "string",
                "name": "queryString"
            }
        ],
        "description": "`$` is the `jQuery` function. It returns a jQuery object baesd on the `queryString` used.",
        "type": "function",
        "name": "$"
    },
    {
        "snippets": {
            "html": {
                "code": "$(this)",
                "tab": "$(this)"
            }
        },
        "example": {
            "html": "<button>A</button>\n<button>B</button>\n<button>C</button>\n<script>\n    var button = $(\"button\");\n    button.on(\"click\", hideClicked);\n    function hideClicked() {\n        var target = $(this); // This sets 'target' to the clicked button.\n        target.hide(); // This hides that specific button, not all the buttons.\n    }\n</script>"
        },
        "owner": "jQuery",
        "args": [
            {
                "description": "This is the context for the function.",
                "example": "this",
                "type": "keyword",
                "name": "this"
            }
        ],
        "description": "`$(this)` returns a callback function's current target.\n\nUse it to find which specific element was selected when applying the same event listener to multiple elements.",
        "type": "jQuery Object",
        "name": "$(this)"
    },
    {
        "snippets": {
            "html": {
                "code": ".css(${1:\"background-color\"}, ${2:\"red\"})",
                "tab": "css"
            }
        },
        "example": {
            "html": "<div id=\"header\">\n    <h1>Welcome!</h1>\n</div>\n<script>\n    // Get the element #header's current background-color.\n    color = $(\"#header\").css(\"background-color\")\n    \n    // Set the element #header's background-color to \"red\".\n    $(\"#header\").css(\"background-color\", \"red\")\n</script>"
        },
        "owner": "jQuery",
        "args": [
            {
                "description": "This is a CSS property name.",
                "example": "\"background-color\"",
                "type": "string",
                "name": "propertyName"
            },
            {
                "optional": true,
                "description": "If included, this is what to set the CSS property to.",
                "example": "\"red\"",
                "type": "string",
                "name": "value"
            }
        ],
        "description": "`css` is used to get and set the CSS rules of a jQuery object.",
        "type": "function",
        "name": "css"
    },
    {
        "snippets": {
            "html": {
                "code": ".on(${1:\"click\"}, ${2:\"functionName\"})",
                "tab": "on"
            }
        },
        "example": {
            "html": "<button id=\"theButton\">Click me to hide me!</button>\n<script>\n    var button = $(\"#theButton\");\n    function hideOnClick() {\n        // This only happens when the button is clicked.\n        button.hide();\n    }\n    // This is what calls the function above.\n    button.on(\"click\", hideOnClick);\n</script>"
        },
        "owner": "jQuery",
        "args": [
            {
                "description": "This is the event name.",
                "example": "\"click\"",
                "type": "string",
                "name": "eventName"
            },
            {
                "description": "This is the function that is performed when the event is fulfilled.",
                "example": "hideOnClick",
                "type": "function",
                "name": "callback"
            }
        ],
        "description": "`on` takes two arguments. A string of an event to monitor, and a function to call when the event occurs.",
        "type": "function",
        "name": "on"
    },
    {
        "snippets": {
            "html": {
                "code": ".hide();",
                "tab": "hide"
            }
        },
        "example": {
            "html": "<div>\n    <h3>Information of Valuability</h3>\n    <div class=\"info\">\n        Valued information goes here.\n    </div>\n</div>\n<script>\n    // Hide all infoDivs at the start of the script.\n    $(\".infoDiv\").hide();\n    function showInfoChild() {\n        // Show the clicked target's infoDiv.\n        $(\".infoDiv\", this).show()\n    }\n    $(\".infoDiv\").parent().on('click', showInfoChild)\n</script>\n"
        },
        "owner": "jQuery",
        "description": "`hide` makes an element invisible.",
        "type": "function",
        "name": "hide"
    },
    {
        "snippets": {
            "html": {
                "code": ".show();",
                "tab": "show"
            }
        },
        "example": {
            "html": "<div>\n    <h3>Information of Valuability</h3>\n    <div class=\"info\">\n        Valued information goes here.\n    </div>\n</div>\n<script>\n    // Hide all infoDivs at the start of the script.\n    $(\".infoDiv\").hide();\n    function showInfoChild() {\n        // Show the clicked target's infoDiv.\n        $(\".infoDiv\", this).show()\n    }\n    $(\".infoDiv\").parent().on('click', showInfoChild)\n</script>\n"
        },
        "owner": "jQuery",
        "description": "`show` makes an element visible.",
        "type": "function",
        "name": "show"
    },
    {
        "example": {
            "html": "<script>\n    function clickAction() {\n        $(\"div\").css(\"height\",(Math.random() * 256)+\"px\");\n    }\n    $(\"theButton\").on(\"click\", clickAction);\n</script>"
        },
        "owner": "jQuery",
        "description": "The `\"click\"` event is when the user clicks on an element.",
        "type": "event",
        "name": "\"click\""
    },
    {
        "example": {
            "html": "<script>\n    function clickAction() {\n        $(\"div\").css(\"background-color\",\"rgb(\"+(Math.floor(Math.random() * 256)) + \",\" + (Math.floor(Math.random() * 256)) + \",\" + (Math.floor(Math.random() * 256)) +\")\");\n    }\n    $(\"div\").on(\"mousemove\", clickAction);\n</script>"
        },
        "owner": "jQuery",
        "description": "The `\"mousemove\"` event happens every frame the user moves their mouse across the element.",
        "type": "event",
        "name": "\"mousemove\""
    },
    {
        "args": [
            {
                "optional": true,
                "description": "A string to only select elements matching the CSS selector.",
                "example": "\".className\"",
                "type": "string",
                "name": "selector"
            }
        ],
        "snippets": {
            "html": {
                "code": ".siblings(${1:\"selector\"});",
                "tab": "siblings"
            }
        },
        "example": {
            "html": "<ul>\n    <li id=\"firstElement\">One</li>\n    <li>Dos</li>\n    <li>Drei</li>\n</ul>\n<script>\n    // Hide all elements but One.\n    var target = $(\"#firstElement\");\n    target.siblings().hide();\n</script>"
        },
        "owner": "jQuery",
        "description": "`siblings` returns a jQuery object of all neighboring elements. An element is a sibling if it is nested at the same level as the selected element.",
        "type": "function",
        "name": "siblings"
    },
    {
        "args": [
            {
                "description": "A string of a CSS class name.",
                "example": "\"selected\"",
                "type": "string",
                "name": "className"
            }
        ],
        "snippets": {
            "html": {
                "code": ".siblings(${1:\"selector\"});",
                "tab": "siblings"
            }
        },
        "example": {
            "html": "<div id=\"mainElement\">\n    I contain information!\n</div>\n<style>\n    .strike {\n        text-decoration: line-through;\n    }\n</style>\n<script>\n    // Add the \"strike\" class to the mainElement div.\n    var target = $(\"#mainElement\");\n    target.addClass(\"strike\");\n</script>"
        },
        "owner": "jQuery",
        "description": "`addClass` adds a specific CSS class to an element.",
        "type": "function",
        "name": "addClass"
    },
    {
        "args": [
            {
                "description": "A string of a CSS class name.",
                "example": "\"selected\"",
                "type": "string",
                "name": "className"
            }
        ],
        "snippets": {
            "html": {
                "code": ".removeClass(${1:\"className\"});",
                "tab": "removeClass"
            }
        },
        "example": {
            "html": "<div id=\"mainElement\" class=\"strike\">\n    I contain information!\n</div>\n<style>\n    .strike {\n        text-decoration: line-through;\n    }\n</style>\n<script>\n    // Remove the \"strike\" class to the mainElement div.\n    var target = $(\"#mainElement\");\n    target.removeClass(\"strike\");\n</script>"
        },
        "owner": "jQuery",
        "description": "`removeClass` removes a specific CSS class to an element.",
        "type": "function",
        "name": "removeClass"
    },
    {
        "args": [
            {
                "description": "A string of a CSS class name.",
                "example": "\"selected\"",
                "type": "string",
                "name": "className"
            }
        ],
        "snippets": {
            "html": {
                "code": ".toggleClass(${1:\"className\"});",
                "tab": "toggleClass"
            }
        },
        "example": {
            "html": "<div id=\"mainElement\" class=\"strike\">\n    I contain information!\n</div>\n<style>\n    .strike {\n        text-decoration: line-through;\n    }\n</style>\n<script>\n    // Remove the \"strike\" class to the mainElement div.\n    var target = $(\"#mainElement\");\n    target.toggleClass(\"strike\");\n</script>"
        },
        "owner": "jQuery",
        "description": "`toggleClass` will add or remove a class depending if an element already has that class on it.\n\nIf it has the class on it, it will remove it.\n\nif it doesn't have the class on it, it will add it.",
        "type": "function",
        "name": "toggleClass"
    }
]