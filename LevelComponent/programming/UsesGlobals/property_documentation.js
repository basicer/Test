[
    {
        "codeLanguages": [
            "javascript",
            "coffeescript",
            "clojure",
            "lua",
            "io"
        ],
        "description": "The `foo` property can satisfy all the #{spriteName}'s foobar needs. Use it wisely.",
        "type": "function",
        "name": "isFinite"
    },
    {
        "codeLanguages": [
            "javascript",
            "coffeescript",
            "clojure",
            "lua",
            "io"
        ],
        "description": "The `foo` property can satisfy all the #{spriteName}'s foobar needs. Use it wisely.",
        "type": "function",
        "name": "isNaN"
    },
    {
        "codeLanguages": [
            "javascript",
            "coffeescript",
            "clojure",
            "lua",
            "io"
        ],
        "description": "The `foo` property can satisfy all the #{spriteName}'s foobar needs. Use it wisely.",
        "type": "function",
        "name": "parseFloat"
    },
    {
        "codeLanguages": [
            "javascript",
            "coffeescript",
            "clojure",
            "lua",
            "io"
        ],
        "description": "The `foo` property can satisfy all the #{spriteName}'s foobar needs. Use it wisely.",
        "type": "object",
        "name": "parseInt"
    },
    {
        "codeLanguages": [
            "javascript",
            "coffeescript",
            "clojure",
            "lua",
            "io"
        ],
        "description": "The `foo` property can satisfy all the #{spriteName}'s foobar needs. Use it wisely.",
        "type": "function",
        "name": "decodeURI"
    },
    {
        "codeLanguages": [
            "javascript",
            "coffeescript",
            "lua",
            "clojure",
            "io"
        ],
        "description": "The `foo` property can satisfy all the #{spriteName}'s foobar needs. Use it wisely.",
        "type": "function",
        "name": "decodeURIComponent"
    },
    {
        "codeLanguages": [
            "javascript",
            "coffeescript",
            "clojure",
            "lua",
            "io"
        ],
        "description": "The `foo` property can satisfy all the #{spriteName}'s foobar needs. Use it wisely.",
        "type": "object",
        "name": "encodeURI"
    },
    {
        "codeLanguages": [
            "javascript",
            "coffeescript",
            "lua",
            "clojure",
            "io"
        ],
        "description": "The `foo` property can satisfy all the #{spriteName}'s foobar needs. Use it wisely.",
        "type": "function",
        "name": "encodeURIComponent"
    },
    {
        "codeLanguages": [
            "javascript",
            "coffeescript",
            "clojure",
            "lua",
            "io"
        ],
        "description": "The `foo` property can satisfy all the #{spriteName}'s foobar needs. Use it wisely.",
        "type": "function",
        "name": "escape"
    },
    {
        "codeLanguages": [
            "javascript",
            "coffeescript",
            "clojure",
            "lua",
            "io"
        ],
        "description": "The `foo` property can satisfy all the #{spriteName}'s foobar needs. Use it wisely.",
        "type": "function",
        "name": "unescape"
    },
    {
        "codeLanguages": [
            "javascript",
            "coffeescript",
            "clojure",
            "lua",
            "io"
        ],
        "description": "The `foo` property can satisfy all the #{spriteName}'s foobar needs. Use it wisely.",
        "type": "number",
        "name": "Infinity"
    },
    {
        "codeLanguages": [
            "javascript",
            "coffeescript",
            "clojure",
            "lua",
            "io"
        ],
        "description": "The `foo` property can satisfy all the #{spriteName}'s foobar needs. Use it wisely.",
        "type": "number",
        "name": "NaN"
    },
    {
        "codeLanguages": [
            "javascript",
            "coffeescript",
            "clojure",
            "lua",
            "io"
        ],
        "description": "The `foo` property can satisfy all the #{spriteName}'s foobar needs. Use it wisely.",
        "type": "undefined",
        "name": "undefined"
    },
    {
        "codeLanguages": [
            "javascript",
            "coffeescript",
            "clojure",
            "lua",
            "io"
        ],
        "description": "The `foo` property can satisfy all the #{spriteName}'s foobar needs. Use it wisely.",
        "type": "null",
        "name": "null"
    },
    {
        "codeLanguages": [
            "javascript",
            "coffeescript",
            "clojure",
            "lua",
            "io"
        ],
        "description": "The `foo` property can satisfy all the #{spriteName}'s foobar needs. Use it wisely.",
        "type": "object",
        "name": "Boolean"
    },
    {
        "codeLanguages": [
            "javascript",
            "coffeescript",
            "clojure",
            "lua",
            "io"
        ],
        "description": "The `foo` property can satisfy all the #{spriteName}'s foobar needs. Use it wisely.\n\nShould also cover:\n\n* EvalError\n* RangeError\n* ReferenceError\n* StopIteration\n* SyntaxError\n* TypeError\n* URIError\n",
        "type": "object",
        "name": "Error"
    },
    {
        "codeLanguages": [
            "javascript",
            "coffeescript",
            "clojure",
            "lua",
            "io"
        ],
        "description": "The `foo` property can satisfy all the #{spriteName}'s foobar needs. Use it wisely.",
        "type": "object",
        "name": "arguments"
    },
    {
        "codeLanguages": [
            "python"
        ],
        "snippets": {
            "python": {
                "tab": "abs",
                "code": "abs(${1:num})"
            }
        },
        "description": "\nThe `abs` function calculates the absolute value of a number.",
        "type": "function",
        "name": "abs"
    },
    {
        "returns": {
            "type": "boolean"
        },
        "snippets": {
            "python": {
                "tab": "all",
                "code": "all(${1:list})"
            }
        },
        "example": {
            "python": "nums = [6,3,5,9]\nif all([i>2 for i in nums]):\n    self.say('All the numbers are bigger than 2')\nelse:\n    self.say('There is at least one number that is 2 or smaller')"
        },
        "description": "The `all` function returns True if all elements are True.\n\nEquivalent to:\n\n    for element in iterable:\n        if not element:\n            return False\n    return True",
        "type": "function",
        "name": "all"
    },
    {
        "returns": {
            "type": "boolean"
        },
        "snippets": {
            "python": {
                "tab": "any",
                "code": "any(${1:list})"
            }
        },
        "example": {
            "python": "nums = [6,3,5,9]\nif any([i>2 for i in nums]):\n    self.say('At least one of the numbers is more than 2.')\nelse:\n    self.say('All the numbers are less than or equal to 2.')"
        },
        "description": "The `any` function returns True if any element is True.\n\nEquivalent to:\n\n    for element in iterable:\n        if element:\n            return True\n    return False",
        "type": "function",
        "name": "any"
    },
    {
        "returns": {
            "type": "string"
        },
        "snippets": {
            "python": {
                "tab": "chr",
                "code": "chr(${1:integer})"
            }
        },
        "example": {
            "python": "chr(97) # returns the string 'a' \n\nletter = 'r'\nnextLetter = chr(ord(letter)+1) # This is the inverse of ord(). \n\n"
        },
        "codeLanguages": [
            "python"
        ],
        "description": "\nThe `chr` function converts an integer to the character whose Unicode codepoint is the integer.\n\nThe valid range for the argument is from 0 through 1,114,111.",
        "type": "function",
        "name": "chr"
    },
    {
        "snippets": {
            "python": {
                "tab": "complex",
                "code": "complex(${1:real},${2:imag})"
            }
        },
        "example": {
            "python": "a=complex(4,7)          # 4 + 7j\nb=complex('3-5j')       # 3 - 5j\nc=complex(9)            # 9 + 0j\n\nd=a+b                   # 7 + 2j\n"
        },
        "codeLanguages": [
            "python"
        ],
        "description": "\nThe `complex([real[,imag]])` function creates a complex number with the value `real + imag*j` or converts a string to a complex number.",
        "type": "function",
        "name": "complex"
    },
    {
        "snippets": {
            "python": {
                "tab": "dict",
                "code": "dict(${1:pairs})"
            }
        },
        "example": {
            "python": "# Here are 5 differnt ways to create the same dictionary\na= {}\na['one'] = 1\na['two'] = 2\na['three'] = 3\n\nb = {'one': 1, 'two': 2, 'three': 3}\nc = dict(zip(['one', 'two', 'three'], [1, 2, 3]))\nd = dict([('two', 2), ('one', 1), ('three', 3)])\ne = dict({'three': 3, 'one': 1, 'two': 2})\na == b == c == d == e  # this is True\n"
        },
        "codeLanguages": [
            "python"
        ],
        "description": "\nThe `dict` function creates a new dictionary mapping object.  For more help, check this site: \nhttps://docs.python.org/3/library/stdtypes.html#dict",
        "type": "function",
        "name": "dict"
    },
    {
        "snippets": {
            "python": {
                "tab": "dir",
                "code": "dir(${1:object})"
            }
        },
        "codeLanguages": [
            "python"
        ],
        "description": "\nThe `dir` function attempts to return a list of valid attributes for the given object.",
        "type": "function",
        "name": "dir"
    },
    {
        "snippets": {
            "python": {
                "tab": "divmod",
                "code": "divmod(${1:a},${2:b})"
            }
        },
        "example": {
            "python": "seconds = 8392\nminutes,seconds = divmod(seconds,60)\nhours,minutes = divmod(minutes,60)\nself.say(hours + ':' + minutes + ':' + seconds)  # 2:16:32"
        },
        "codeLanguages": [
            "python"
        ],
        "description": "\nThe `divmod(a,b)` function returns two values, the integer quotient and the remainder.",
        "type": "function",
        "name": "divmod"
    },
    {
        "example": {
            "python": "seasons = ['Spring', 'Summer', 'Fall', 'Winter']\n\na = list(enumerate(seasons))\n# a is [(0, 'Spring'), (1, 'Summer'), (2, 'Fall'), (3, 'Winter')]\n\nb = list(enumerate(seasons, start=1))\n# b is [(1, 'Spring'), (2, 'Summer'), (3, 'Fall'), (4, 'Winter')]"
        },
        "snippets": {
            "python": {
                "tab": "enumerate",
                "code": "enumerate(${1:iterable})"
            }
        },
        "codeLanguages": [
            "python"
        ],
        "description": "\nThe `enumerate` function returns an iterator of tuples pairing index numbers to values.",
        "type": "function",
        "name": "enumerate"
    },
    {
        "snippets": {
            "python": {
                "tab": "filter",
                "code": "filter(${1:function},${2:list})"
            }
        },
        "example": {
            "python": "def isEven(n):\n    return n%2 == 0\n\nnums = [5,2,6,7,4,3]\n\na = filter(isEven,nums)\n# a is [2,6,4]\n\n# equivalent to\na = [n for n in nums if isEven(n)]"
        },
        "codeLanguages": [
            "python"
        ],
        "description": "\nThe `filter(function, list)` function filters a list based on the given function.\n\n`filter` can be done using list comprehension as well.  Equivalent to [item for item in iterable if function(item)].",
        "type": "function",
        "name": "filter"
    },
    {
        "snippets": {
            "python": {
                "tab": "float",
                "code": "float(${1:num})"
            }
        },
        "example": {
            "python": "a = float(4)\nb = float(\"7.3\")"
        },
        "codeLanguages": [
            "python"
        ],
        "description": "\nThe `float` function converts a string or a number to floating point.",
        "type": "function",
        "name": "float"
    },
    {
        "snippets": {
            "python": {
                "tab": "format",
                "code": "format(${1:value},${2:format})"
            }
        },
        "codeLanguages": [
            "python"
        ],
        "description": "\nThe `format(value, [format_spec])` function converts a value to a formatted string representation based on format_spec.\n\nhttps://docs.python.org/3/library/string.html#formatspec",
        "type": "function",
        "name": "format"
    },
    {
        "snippets": {
            "python": {
                "tab": "int",
                "code": "int(${1:num})"
            }
        },
        "example": {
            "python": "a = int(5.7)    # a is 5\nb = int(-3.2)   # b is -3\nc = int('45')   # c is 45"
        },
        "codeLanguages": [
            "python"
        ],
        "description": "\nThe `int` function converts a value to an integer.",
        "type": "function",
        "name": "int"
    },
    {
        "snippets": {
            "python": {
                "tab": "len",
                "code": "len(${1:object})"
            }
        },
        "example": {
            "python": "nums = [4,2,6,4,23,5,3]\na = len(nums)   # a is 7\n\nages = {'bob':56,'frank':23,'phil':15}\nb = len(ages)   # b is 3"
        },
        "codeLanguages": [
            "python"
        ],
        "description": "\nThe `len` function returns the length (the number of items) of an object. The argument may be a sequence (such as a string, bytes, tuple, list, or range) or a collection.",
        "type": "function",
        "name": "len"
    },
    {
        "example": {
            "python": "a = list(range(5))\n\n# a is [0,1,2,3,4]"
        },
        "snippets": {
            "python": {
                "tab": "list",
                "code": "list(${1:iterable})"
            }
        },
        "codeLanguages": [
            "python"
        ],
        "description": "\nThe `list` function creates a list from an iterable.",
        "type": "function",
        "name": "list"
    },
    {
        "snippets": {
            "python": {
                "tab": "map",
                "code": "map(${1:function},${2:list})"
            }
        },
        "example": {
            "python": "def square(n):\n    return n*n\n\nnums = [5,2,6,7,4,3]\n\na = map(square,nums)\n# a is [25,4,36,49,16,9]\n\n# equivalent to\na = [square(n) for n in nums]"
        },
        "codeLanguages": [
            "python"
        ],
        "description": "\nThe `map(function, list)` function returns a list based on calling the given function with each element of the list.\n\n`map` can be done using list comprehension as well.  Equivalent to [function(item) for item in iterable].",
        "type": "function",
        "name": "map"
    },
    {
        "snippets": {
            "python": {
                "tab": "max",
                "code": "max(${1:a},${2:b})"
            }
        },
        "example": {
            "python": "def square(n):\n    return n*n\n\nnums = [5,2,6,4,22,5,3]\na = max(nums)                   # a is 22\nb = max(4,6,23,5,2,4)           # b is 23\nc = max([-4,2,-7,5],key=square) # c is -7"
        },
        "codeLanguages": [
            "python"
        ],
        "description": "\nThe `max` function returns the maximum value from a list or from a set of inputs.  Can include a `key` function to be run on each element before comparison.",
        "type": "function",
        "name": "max"
    },
    {
        "snippets": {
            "python": {
                "tab": "min",
                "code": "min(${1:a},${2:b})"
            }
        },
        "example": {
            "python": "def square(n):\n    return n*n\n\nnums = [5,2,6,4,22,5,3]\na = min(nums)                   # a is 2\nb = min(4,6,23,5,2,4)           # b is 2\nc = min([-4,2,-7,5],key=square) # c is 2"
        },
        "codeLanguages": [
            "python"
        ],
        "description": "\nThe `min` function returns the minimum value from a list or from a set of inputs.  Can include a `key` function to be run on each element before comparison.",
        "type": "function",
        "name": "min"
    },
    {
        "snippets": {
            "python": {
                "tab": "ord",
                "code": "ord(${1:char})"
            }
        },
        "example": {
            "python": "ord('a') # returns 97\n\nletter = 'T'\nnextLetter = chr(ord(letter)+1) # nextLetter = 'U'\n"
        },
        "codeLanguages": [
            "python"
        ],
        "description": "\nThe `ord` function converts a character to its Unicode codepoint.",
        "type": "function",
        "name": "ord"
    },
    {
        "snippets": {
            "python": {
                "tab": "pow",
                "code": "pow(${1:a},${2:b})"
            }
        },
        "example": {
            "python": "a = pow(3,4)    # a is 81\nb = pow(2,4,9)  # b is 7\n"
        },
        "codeLanguages": [
            "python"
        ],
        "description": "\nThe `pow(x,y,[,z])` function calculates x to the power of y.  If z is present, efficiently calculates (x**y)%z\n\npow(x,y) is equivalent to x**y",
        "type": "function",
        "name": "pow"
    },
    {
        "snippets": {
            "python": {
                "tab": "range",
                "code": "range(${1:n})"
            }
        },
        "example": {
            "python": "a = range(5)        # a is [0,1,2,3,4]\nb = range(3,6)      # b is [3,4,5]\nc = range(2,15,3)   # c is [2,5,8,11,14]\n\nfor i in range(10):\n    self.say(i)\n    \n# self counts from 0 to 9"
        },
        "codeLanguages": [
            "python"
        ],
        "description": "\nThe `range` function returns an iterator of integers from a to b, including a but not b.\n",
        "type": "function",
        "name": "range"
    },
    {
        "snippets": {
            "python": {
                "tab": "reversed",
                "code": "reversed(${1:list})"
            }
        },
        "example": {
            "python": "nums = [3,5,2,3,9,4]\nr = reversed(nums)      # r in [4,9,3,2,5,3]\n# nums is still [3,5,2,3,9,4]\n\n"
        },
        "codeLanguages": [
            "python"
        ],
        "description": "\nThe `reversed` function returns a new list in reverse order.",
        "type": "function",
        "name": "reversed"
    },
    {
        "snippets": {
            "python": {
                "tab": "round",
                "code": "round(${1:num},${2:digits})"
            }
        },
        "example": {
            "python": "a = round(4.8)      # a is 5\nb = round(3.8732,2) # b is 3.87"
        },
        "codeLanguages": [
            "python"
        ],
        "description": "\nThe `round(number[,ndigits])` function returns the floating point number rounded to ndigits after the decimal, ndigits defaults to zero.",
        "type": "function",
        "name": "round"
    },
    {
        "snippets": {
            "python": {
                "tab": "set",
                "code": "set(${1:list})"
            }
        },
        "example": {
            "python": "nums = [3,6,4,87,4,3,5]\na = set(nums)           # a is {6,3,4,87,5} \nb = set([6,3,4,9])      # b is {4,3,6,9}\n\na >= b                  # checks if all of b is in a\nc = a.union(b)          # c is {6,3,9,4,87,5} (anything from either set)\nd = a.intersection(b)   # d is {3,4,6} (anything that is in both sets)"
        },
        "codeLanguages": [
            "python"
        ],
        "description": "\nThe `set` function creates a new `set` object using an optional iterable.  \n\nSets do not allow repeated values, so this is a great way to remove duplicates from an array.\n\nSets are not ordered.\n\nSee https://docs.python.org/3/library/stdtypes.html#set for documentation of sets.",
        "type": "function",
        "name": "set"
    },
    {
        "snippets": {
            "python": {
                "tab": "slice",
                "code": "slice(${1:num})"
            }
        },
        "example": {
            "python": "s = \"ABCDEFGHIJKL\"\nsl = slice(0,4)\na = s[sl]       # a is 'ABCD'\n\n\nsl = slice(2,9,4)\nb = s[sl]       # b is 'BF'\n\n# this can also be done with expanded indexing\n\n# these are equivalent to the methods above:\na = s[:4]\nb = s[2:9:4]\n\n# other good uses:\nc = s[::-1]     # reverses the iterable\nd = s[:]        # creates a new copy of the iterable (useful for mutable data types)\n"
        },
        "codeLanguages": [
            "python"
        ],
        "description": "\nThe `slice([start,]stop[,step])` function returns a slice object that can be used to access a portion of a list",
        "type": "function",
        "name": "slice"
    },
    {
        "snippets": {
            "python": {
                "tab": "sorted",
                "code": "sorted(${1:list})"
            }
        },
        "example": {
            "python": "nums = [3,5,2,3,9,4]\nr = sorted(nums)      # r in [2,3,3,4,5,9]\n# nums is still [3,5,2,3,9,4]\n\n"
        },
        "codeLanguages": [
            "python"
        ],
        "description": "\nThe `sorted` function returns a new list in sorted order.\n\nThe sort is stable. \nThe default sort order is ascending, but can be modified with the optional boolean argument `reverse`.\nCan also add an optional `key` argument which is a function to be called on each element before sorting.",
        "type": "function",
        "name": "sorted"
    },
    {
        "snippets": {
            "python": {
                "tab": "str",
                "code": "str(${1:value})"
            }
        },
        "codeLanguages": [
            "python"
        ],
        "description": "\nThe `str` function turns the argument into a string.",
        "type": "function",
        "name": "str"
    },
    {
        "snippets": {
            "python": {
                "tab": "sum",
                "code": "sum(${1:list})"
            }
        },
        "example": {
            "python": "a = sum(4,6,3)      # a is 13\nb = sum(range(10))  # b is 45"
        },
        "codeLanguages": [
            "python"
        ],
        "description": "\nThe `sum` function returns the sum of an iterable.",
        "type": "function",
        "name": "sum"
    },
    {
        "snippets": {
            "python": {
                "tab": "tuple",
                "code": "tuple(${1:list})"
            }
        },
        "codeLanguages": [
            "python"
        ],
        "description": "\nThe `tuple` function creates a new tuple from an iterable.",
        "type": "function",
        "name": "tuple"
    },
    {
        "snippets": {
            "python": {
                "tab": "type",
                "code": "type(${1:object})"
            }
        },
        "example": {
            "python": "a = type('hello')       # a is <class 'str'>\nb = type(3)             # b is <class 'int'>\n\n# For the three argument version, these two statements create identical objects\n\nclass X:\n    a = 1\n    \nX = type('X', (object,), dict(a=1))"
        },
        "codeLanguages": [
            "python"
        ],
        "description": "`type(object)`\n    With one argument, returns the type of the object.\n    \n`type(name, bases, dict)`\n    With three arguments, return a new type object.",
        "type": "function",
        "name": "type"
    },
    {
        "snippets": {
            "python": {
                "tab": "zip",
                "code": "zip(${1:iterables})"
            }
        },
        "example": {
            "python": "x = [1, 2, 3]\ny = [4, 5, 6]\nzipped = zip(x, y)\nlist(zipped)            # is [(1, 4), (2, 5), (3, 6)]\nz = [7, 9]\n\nzipped = zip(x,y,z)\nlist(zipped)            # is [(1, 4, 7), (2, 5, 9)]\n"
        },
        "codeLanguages": [
            "python"
        ],
        "description": "zip(*iterables)\nMakes an iterator that aggregates elements from each of the iterables.\n\nReturns an iterator of tuples, where the i-th tuple contains the i-th element from each of the argument sequences or iterables. The iterator stops when the shortest input iterable is exhausted.",
        "type": "function",
        "name": "zip"
    },
    {
        "codeLanguages": [
            "python"
        ],
        "snippets": {
            "python": {
                "tab": "bool",
                "code": "bool(${1:value})"
            }
        },
        "description": "`bool([x])`\n\nConverts a value to a Boolean, using the standard truth testing procedure. If x is false or omitted, this returns False; otherwise it returns True.",
        "type": "function",
        "name": "bool"
    },
    {
        "codeLanguages": [
            "python"
        ],
        "snippets": {
            "python": {
                "tab": "print",
                "code": "print(${1:data})"
            }
        },
        "description": "\nThe `print` function prints information to the console.",
        "type": "function",
        "name": "print"
    }
]