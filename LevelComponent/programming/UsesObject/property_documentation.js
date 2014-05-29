[
    {
        "args": [
            {
                "description": "Required. The object to use as a prototype. May be null.",
                "example": "this.getNearestEnemy()",
                "type": "prototype",
                "name": "car"
            },
            {
                "description": "Required. The object to use as a prototype. May be null.",
                "example": "size:{value: \"large\",enumerable: true",
                "type": "object",
                "name": "descriptor"
            }
        ],
        "returns": {
            "description": "A new object that has the specified internal prototype and contains the specified properties, if any.",
            "type": "Object"
        },
        "owner": "Object",
        "example": "var firstLine = { x: undefined, y: undefined };\n\nvar secondLine = Object.create(Object.prototype, {\n        x: {\n                value: undefined, \n                writable: true, \n                configurable: true, \n                enumerable: true\n            },\n            y: {\n                value: undefined, \n                writable: true, \n                configurable: true, \n                enumerable: true\n            }\n});",
        "description": "Creates a new object with the specified prototype object and properties.",
        "type": "function",
        "name": "create"
    },
    {
        "returns": {
            "description": "The modified object.",
            "type": "object"
        },
        "example": "// Create a user-defined object.\nvar obj = {};\n\n// Add a data property to the object.\nObject.defineProperty(obj, \"newDataProperty\", {\n    value: 101,\n    writable: true,\n    enumerable: true,\n    configurable: true\n});",
        "owner": "Object",
        "args": [
            {
                "description": "Required. The object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.",
                "example": "obj",
                "type": "object",
                "name": "object"
            },
            {
                "description": "Required. A string that contains the property name.",
                "example": "\"newDataProperty\"",
                "type": "object",
                "name": "target"
            },
            {
                "description": "Required. A descriptor for the property. It can be for a data property or an accessor property.",
                "example": "{value: 101}",
                "type": "object",
                "name": "descriptor"
            }
        ],
        "description": "Adds the named property described by a given descriptor to an object. ",
        "type": "function",
        "name": "defineProperty"
    },
    {
        "returns": {
            "description": "The object that is passed to the function.",
            "type": "object"
        },
        "owner": "Object",
        "example": "var obj = { pasta: \"spaghetti\", length: 10 };\n\n// Freeze the object.\nObject.freeze(obj);\n\n// Try to add a new property, and it is not added. \nobj.newProp = 50;",
        "args": [
            {
                "description": "Required. The object on which to lock the attributes.",
                "example": "obj",
                "type": "object",
                "name": "object"
            }
        ],
        "description": "Freezes an object: other code can't delete or change any properties.",
        "type": "function",
        "name": "freeze"
    },
    {
        "returns": {
            "type": "descriptor"
        },
        "owner": "Object",
        "example": "// Create a user-defined object.\nvar obj = {};\n\n// Add a data property.\nobj.newDataProperty = \"abc\";\n\n// Get the property descriptor.\nvar descriptor = Object.getOwnPropertyDescriptor(obj, \"newDataProperty\");\n\n// Change a property attribute.\ndescriptor.writable = false;",
        "args": [
            {
                "description": "Required. The object that contains the property.",
                "example": "obj",
                "type": "object",
                "name": "object"
            },
            {
                "description": "Required. The name of the property.",
                "example": "newDataProperty",
                "type": "string",
                "name": "property"
            }
        ],
        "description": "Returns a property descriptor for a named property on an object.",
        "type": "function",
        "name": "getOwnPropertyDescriptor"
    },
    {
        "returns": {
            "description": "An array that contains the names of the own properties of the object.",
            "type": "array"
        },
        "owner": "Object",
        "example": "function Pasta(grain, width, shape) {\n    // Define properties.\n    this.grain = grain;\n    this.width = width;\n    this.shape = shape;\n    this.toString = function () {\n        return (this.grain + \", \" + this.width + \", \" + this.shape);\n    }\n}\n\n// Create an object.\nvar spaghetti = new Pasta(\"wheat\", 0.2, \"circle\");\n\n// Get the own property names.\nvar arr = Object.getOwnPropertyNames(spaghetti);",
        "args": [
            {
                "description": "Required. The object that contains the own properties.",
                "example": "obj",
                "type": "object",
                "name": "object"
            }
        ],
        "description": "Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties.",
        "type": "function",
        "name": "getOwnPropertyNames"
    },
    {
        "returns": {
            "description": "The prototype of the object argument. The prototype is also an object.",
            "type": "object"
        },
        "owner": "Object",
        "example": "// Create a constructor function.\nfunction Pasta(grain, width) {\n    this.grain = grain;\n    this.width = width;\n}\n// Create an object from the pasta constructor.\nvar spaghetti = new Pasta(\"wheat\", 0.2);\n\n// Obtain the prototype from the object.\nvar proto = Object.getPrototypeOf(spaghetti);\n\n",
        "args": [
            {
                "description": "Required. The object that references the prototype.",
                "example": "obj",
                "type": "object",
                "name": "object"
            }
        ],
        "description": "Returns the prototype of the specified object.",
        "type": "function",
        "name": "getPrototypeOf()"
    },
    {
        "returns": {
            "type": "boolean"
        },
        "owner": "Object",
        "example": "Object.is(\"foo\", \"foo\");     // true\nObject.is(window, window);   // true\n\nObject.is(\"foo\", \"bar\");     // false\nObject.is([], []);           // false\n\nvar test = {a: 1};\nObject.is(test, test);       // true\n\nObject.is(null, null);       // true\n\n// Special Cases\nObject.is(0, -0);            // false\nObject.is(-0, -0);           // true\nObject.is(NaN, 0/0);         // true\n",
        "args": [
            {
                "description": "The first value to compare.",
                "example": "obj1",
                "type": "object",
                "name": "value1"
            },
            {
                "description": "The second value to compare.",
                "example": "obj2",
                "type": "object",
                "name": "value2"
            }
        ],
        "description": "Compares if two values are distinguishable (ie. the same).",
        "type": "function",
        "name": "is"
    },
    {
        "returns": {
            "description": " true if the object is extensible, which indicates that new properties can be added to the object; otherwise, false. ",
            "type": "boolean"
        },
        "owner": "Object",
        "example": "// New objects are extensible.\nvar empty = {};\nassert(Object.isExtensible(empty) === true);\n\n// ...but that can be changed.\nObject.preventExtensions(empty);\nassert(Object.isExtensible(empty) === false);\n\n// Sealed objects are by definition non-extensible.\nvar sealed = Object.seal({});\nassert(Object.isExtensible(sealed) === false);\n\n// Frozen objects are also by definition non-extensible.\nvar frozen = Object.freeze({});\nassert(Object.isExtensible(frozen) === false);",
        "args": [
            {
                "description": "Required. The object to test.",
                "example": "obj",
                "type": "object",
                "name": "object"
            }
        ],
        "description": "Determines if extending of an object is allowed.",
        "type": "function",
        "name": "isExtensible"
    },
    {
        "returns": {
            "type": "array"
        },
        "owner": "Object",
        "example": "// Create a constructor function.\nfunction Pasta(grain, width, shape) {\n    this.grain = grain;\n    this.width = width;\n    this.shape = shape;\n\n    // Define a method.\n    this.toString = function () {\n        return (this.grain + \", \" + this.width + \", \" + this.shape);\n    };\n}\n\n// Create an object.\nvar spaghetti = new Pasta(\"wheat\", 0.2, \"circle\");\n\n// Put the enumerable properties and methods of the object in an array.\nvar arr = Object.keys(spaghetti);",
        "args": [
            {
                "description": "Required. The object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.",
                "example": "obj",
                "type": "object",
                "name": "object"
            }
        ],
        "description": "Returns an array containing the names of all of the given object's own enumerable properties.",
        "type": "function",
        "name": "keys"
    },
    {
        "returns": {
            "description": " true if all of the following are true: 1)The object is non-extensible, which indicates that new properties cannot be added to the object.     2) The configurable attribute is false for all existing properties.      3) The writable attribute is false for all existing data properties.  If the object has no existing properties, the function returns true if the object is non-extensible.",
            "type": "boolean"
        },
        "owner": "Object",
        "example": "/ A new object is extensible, so it is not frozen.\nassert(Object.isFrozen({}) === false);\n// An empty object which is not extensible is vacuously frozen.\nvar vacuouslyFrozen = Object.preventExtensions({});\nassert(Object.isFrozen(vacuouslyFrozen) === true);\n\n// A new object with one property is also extensible, ergo not frozen.\nvar oneProp = { p: 42 };\nassert(Object.isFrozen(oneProp) === false);\n\n// Preventing extensions to the object still doesn't make it frozen,\n// because the property is still configurable (and writable).\nObject.preventExtensions(oneProp);\nassert(Object.isFrozen(oneProp) === false);\n\n// ...but then deleting that property makes the object vacuously frozen.\ndelete oneProp.p;\nassert(Object.isFrozen(oneProp) === true);\n\n// A non-extensible object with a non-writable but still configurable property is not frozen.\nvar nonWritable = { e: \"plep\" };\nObject.preventExtensions(nonWritable);\nObject.defineProperty(nonWritable, \"e\", { writable: false }); // make non-writable\nassert(Object.isFrozen(nonWritable) === false);\n\n// Changing that property to non-configurable then makes the object frozen.\nObject.defineProperty(nonWritable, \"e\", { configurable: false }); // make non-configurable\nassert(Object.isFrozen(nonWritable) === true);\n\n// A non-extensible object with a non-configurable but still writable property also isn't frozen.\nvar nonConfigurable = { release: \"the kraken!\" };\nObject.preventExtensions(nonConfigurable);\nObject.defineProperty(nonConfigurable, \"release\", { configurable: false });\nassert(Object.isFrozen(nonConfigurable) === false);\n\n// Changing that property to non-writable then makes the object frozen.\nObject.defineProperty(nonConfigurable, \"release\", { writable: false });\nassert(Object.isFrozen(nonConfigurable) === true);\n\n// A non-extensible object with a configurable accessor property isn't frozen.\nvar accessor = { get food() { return \"yum\"; } };\nObject.preventExtensions(accessor);\nassert(Object.isFrozen(accessor) === false);\n\n// ...but make that property non-configurable and it becomes frozen.\nObject.defineProperty(accessor, \"food\", { configurable: false });\nassert(Object.isFrozen(accessor) === true);\n\n// But the easiest way for an object to be frozen is if Object.freeze has been called on it.\nvar frozen = { 1: 81 };\nassert(Object.isFrozen(frozen) === false);\nObject.freeze(frozen);\nassert(Object.isFrozen(frozen) === true);\n\n// By definition, a frozen object is non-extensible.\nassert(Object.isExtensible(frozen) === false);\n\n// Also by definition, a frozen object is sealed.\nassert(Object.isSealed(frozen) === true);",
        "args": [
            {
                "description": "Required. The object to test. ",
                "example": "obj",
                "type": "object",
                "name": "object"
            }
        ],
        "description": "Determines if an object was frozen.",
        "type": "function",
        "name": "isFrozen"
    },
    {
        "returns": {
            "description": "The object that is passed to the function.",
            "type": "boolean"
        },
        "owner": "Object",
        "example": "// Create an object that has two properties.\nvar obj = { pasta: \"spaghetti\", length: 10 };\n\n// Makes the object non-extensible.\nObject.preventExtensions(obj);\n",
        "args": [
            {
                "description": "Required. The object to make non-extensible. ",
                "example": "obj",
                "type": "object",
                "name": "object"
            }
        ],
        "description": "    Prevents any extensions of an object.\n",
        "type": "function",
        "name": "preventExtensions"
    },
    {
        "returns": {
            "description": " true if both of the following are true: 1) The object is non-extensible, which indicates that new properties cannot be added to the object. 2) The configurable attribute is false for all existing properties.  If the object does not have any properties, the function returns true if the object is non-extensible.",
            "type": "boolean"
        },
        "owner": "Object",
        "example": "// Objects aren't sealed by default.\nvar empty = {};\nassert(Object.isSealed(empty) === false);\n\n// If you make an empty object non-extensible, it is vacuously sealed.\nObject.preventExtensions(empty);\nassert(Object.isSealed(empty) === true);\n\n// The same is not true of a non-empty object, unless its properties are all non-configurable.\nvar hasProp = { fee: \"fie foe fum\" };\nObject.preventExtensions(hasProp);\nassert(Object.isSealed(hasProp) === false);\n\n// But make them all non-configurable and the object becomes sealed.\nObject.defineProperty(hasProp, \"fee\", { configurable: false });\nassert(Object.isSealed(hasProp) === true);\n\n// The easiest way to seal an object, of course, is Object.seal.\nvar sealed = {};\nObject.seal(sealed);\nassert(Object.isSealed(sealed) === true);\n\n// A sealed object is, by definition, non-extensible.\nassert(Object.isExtensible(sealed) === false);\n\n// A sealed object might be frozen, but it doesn't have to be.\nassert(Object.isFrozen(sealed) === true); // all properties also non-writable\n\nvar s2 = Object.seal({ p: 3 });\nassert(Object.isFrozen(s2) === false); // \"p\" is still writable\n\nvar s3 = Object.seal({ get p() { return 0; } });\nassert(Object.isFrozen(s3) === true); // only configurability matters for accessor properties",
        "args": [
            {
                "description": "Required. The object to test.  of this function.",
                "example": "obj",
                "type": "object",
                "name": "object"
            }
        ],
        "description": "Determines if an object is sealed.",
        "type": "function",
        "name": "isSealed"
    },
    {
        "returns": {
            "description": "The object that is passed to the function.",
            "type": "object"
        },
        "owner": "Object",
        "example": "// Create an object that has two properties.\nvar obj = { pasta: \"spaghetti\", length: 10 };\n// Seal the object.\nObject.seal(obj);\n\n// Try to add a new property, still it won't be added. \nobj.newProp = 50;\n",
        "args": [
            {
                "description": "Required. The object on which to lock the attributes. ",
                "example": "obj",
                "type": "object",
                "name": "object"
            }
        ],
        "description": "Prevents other code from deleting properties of an object.",
        "type": "function",
        "name": "seal"
    },
    {
        "returns": {
            "description": "Modified Object with new prototype",
            "type": "object"
        },
        "owner": "Object",
        "example": "var dict = Object.setPrototypeOf({}, null);",
        "args": [
            {
                "description": "The object which is to have its prototype set.",
                "example": "obj",
                "type": "object",
                "name": "object"
            },
            {
                "description": "The object's new prototype (an object or null).",
                "example": "this.getNearestEnemy()",
                "type": "object",
                "name": "prototype"
            }
        ],
        "description": "Sets the prototype (i.e., the internal `prototype` property).",
        "type": "function",
        "name": "setPrototypeOf"
    }
]