[
    {
        "description": "Names to be used by the function as formal argument names. Each must be a string that corresponds to a valid JavaScript identifier or a list of such strings separated with a comma; for example \"x\", \"theValue\", or \"a,b\".",
        "type": "parameter",
        "name": "argN"
    },
    {
        "description": "A string containing the JavaScript statements comprising the function definition.",
        "type": "parameter",
        "name": "functionBody"
    },
    {
        "description": "An array corresponding to the arguments passed to a function. This is deprecated as property of Function, use the arguments object available within the function instead.",
        "type": "property",
        "name": "function.arguments"
    },
    {
        "description": "Specifies the function that invoked the currently executing function.",
        "type": "property",
        "name": "function.caller"
    },
    {
        "description": "Specifies the number of arguments expected by the function.",
        "type": "property",
        "name": "function.length"
    },
    {
        "description": "The name of the function.",
        "type": "property",
        "name": "function.name"
    },
    {
        "description": "The display name of the function.",
        "type": "property",
        "name": "function.displayName"
    },
    {
        "description": "Specifies the function that creates an object's prototype.",
        "type": "property",
        "name": "function.prototype.constructor"
    },
    {
        "description": "Applies the method of another object in the context of a different object (the calling object); arguments can be passed as an Array object.",
        "type": "method",
        "name": "function.prototype.apply()"
    },
    {
        "description": "Creates a new function which, when called, itself calls this function in the context of the provided value, with a given sequence of arguments preceding any provided when the new function was called.\n",
        "type": "method",
        "name": "function.prototype.bind()"
    },
    {
        "description": "Calls (executes) a method of another object in the context of a different object (the calling object); arguments can be passed as they are.",
        "type": "method",
        "name": "function.prototype.call()"
    },
    {
        "description": "Returns true if the function is a generator; otherwise returns false.",
        "type": "method",
        "name": "function.prototype.isGenerator()"
    },
    {
        "description": "Returns a string representing the source code of the function. Overrides the Object.prototype.toSource method.",
        "type": "method",
        "name": "function.prototype.toSource()"
    },
    {
        "description": "Returns a string representing the source code of the function. Overrides the Object.prototype.toString method.",
        "type": "method",
        "name": "function.prototype.toString()"
    }
]