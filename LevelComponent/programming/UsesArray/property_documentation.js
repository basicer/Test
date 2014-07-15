[
    {
        "args": [
            {
                "default": "",
                "description": "",
                "example": "[1,2]",
                "type": "object",
                "name": "obj"
            }
        ],
        "owner": "Array",
        "returns": {
            "type": "boolean"
        },
        "example": "Array.isArray([]);      //returns true\nArray.isArray([1,2]);   //returns true\nArray.isArray();        //returns false\nArray.isArray(1);       //returns false",
        "description": "Determines whether the `Javascript object` is an `array` or not.",
        "type": "function",
        "name": "isArray"
    },
    {
        "returns": {
            "type": "array"
        },
        "owner": "Array",
        "example": "Array.of(1);         // [1]\nArray.of(1, 2, 3);   // [1, 2, 3]\nArray.of(undefined); // [undefined]",
        "description": "It creates a `new Array` instance with a variable number of arguments, regardless of number or type of the arguments.",
        "type": "function",
        "name": "of"
    },
    {
        "codeLanguages": [
            "javascript",
            "coffeescript",
            "lua",
            "io",
            "clojure"
        ],
        "returns": {
            "type": "array"
        },
        "owner": "Array",
        "example": "var array1 = [\"a\", \"b\", \"c\"];\nvar array2 = [1, 2, 3];\nvar array3 = [4, 5, 6, 7];\n\n // creates array [\"a\", \"b\", \"c\", 1, 2, 3]; array1 and array2 are unchanged.\nvar newarray1 = array1.concat(array2);  \n\n//creates array [\"a\", \"b\", \"c\", 1, 2, 3, 4, 5, 6, 7]; array1,array2,array3 are unchanged.\nvar newarray2 = array1.concat(array2,array3);  \n\n",
        "description": "The `concat()` method returns a `new array` comprised of the elements of the array on which it was called joined with other array(s) and/or value(s).",
        "type": "function",
        "name": "concat"
    },
    {
        "codeLanguages": [
            "javascript",
            "clojure",
            "io",
            "lua",
            "coffeescript"
        ],
        "owner": "Array",
        "example": "var arr = [\"a\", \"b\", \"c\"];\nvar eArr = arr.entries();\n\nthis.say(eArr.next().value); // [0, \"a\"]\nthis.say(eArr.next().value); // [1, \"b\"]\nthis.say(eArr.next().value); // [2, \"c\"]",
        "description": "The `entries()` method returns a new `Array Iterator` object that contains the key/value pairs for each index in the array.",
        "type": "function",
        "name": "entries"
    },
    {
        "codeLanguages": [
            "javascript",
            "clojure",
            "lua",
            "io",
            "coffeescript"
        ],
        "returns": {
            "type": "boolean"
        },
        "owner": "Array",
        "example": "function isBigEnough(element, index, array) {\n  return (element >= 10);\n}\nvar passed = [12, 5, 8, 130, 44].every(isBigEnough);  // passed is false\npassed = [12, 54, 18, 130, 44].every(isBigEnough);    // passed is true",
        "description": "The `every()` method tests whether `all elements` in the array pass the test implemented by the provided function.",
        "type": "function",
        "name": "every"
    },
    {
        "codeLanguages": [
            "javascript",
            "lua",
            "clojure",
            "coffeescript",
            "io"
        ],
        "owner": "Array",
        "example": "//function isBigEnough returns the elements greater than 10.\nfunction isBigEnough(element) {\n  return element >= 10;\n}\nvar filtered = [12, 5, 8, 130, 44].filter(isBigEnough); \n// filtered is [12, 130, 44]",
        "description": "The `filter()` method creates a `new array` with all elements that pass the test implemented by the provided function.",
        "type": "function",
        "name": "filter"
    },
    {
        "codeLanguages": [
            "javascript",
            "coffeescript",
            "lua",
            "io",
            "clojure"
        ],
        "example": "//function isPrime returns the element if any element in the array is prime, else undefined. \nfunction isPrime(element, index, array) {\n    var start = 2;\n    while (start <= Math.sqrt(element)) {\n        if (element % start++ < 1) return false;\n    }\n    return (element > 1);\n}\n\nthis.say( [4, 6, 8, 12].find(isPrime) ); // undefined, not found\nthis.say( [4, 5, 8, 12].find(isPrime) ); // 5",
        "owner": "Array",
        "description": "The `find()` method returns a value in the array, if an element in the array satisfies the provided testing function. Otherwise undefined is returned.",
        "type": "function",
        "name": "find"
    },
    {
        "codeLanguages": [
            "javascript",
            "clojure",
            "io",
            "coffeescript",
            "lua"
        ],
        "owner": "Array",
        "example": "//function isPrime returns the element if any element in the array is prime,else returns false.\nfunction isPrime(element, index, array) {\n    var start = 2;\n    while (start <= Math.sqrt(element)) {\n        if (element % start++ < 1) return false;\n    }\n    return (element > 1);\n}\n\n//console.log prints the values given to it.\nconsole.log( [4, 6, 8, 12].findIndex(isPrime) ); // -1, not found\nconsole.log( [4, 6, 7, 12].findIndex(isPrime) ); // 2",
        "description": "The `findIndex()` method returns an `index` in the array, if an element in the array satisfies the provided testing function. Otherwise `-1` is returned.",
        "type": "function",
        "name": "findIndex"
    },
    {
        "codeLanguages": [
            "javascript",
            "coffeescript",
            "clojure",
            "lua",
            "io"
        ],
        "owner": "Array",
        "example": "function logArrayElements(element, index, array) {\n    this.say(\"a[\" + index + \"] = \" + element);\n}\n[2, 5, 9].forEach(logArrayElements);\n// logs:\n// a[0] = 2\n// a[1] = 5\n// a[2] = 9",
        "description": "The `forEach()` method executes a provided function once per array element.",
        "type": "function",
        "name": "forEach"
    },
    {
        "codeLanguages": [
            "javascript",
            "coffeescript",
            "clojure",
            "lua",
            "io"
        ],
        "args": [
            {
                "default": "",
                "description": "Element to locate in the array.",
                "example": "\"sword\"",
                "type": "object",
                "name": "searchElements"
            },
            {
                "default": 0,
                "description": "The index to start the search at. If the index is greater than or equal to the array's length, -1 is returned, which means the array will not be searched. If the provided index value is a negative number, it is taken as the offset from the end of the array. Note: if the provided index is negative, the array is still searched from front to back. If the calculated index is less than 0, then the whole array will be searched.",
                "example": "1",
                "type": "number",
                "name": "fromIndex"
            }
        ],
        "owner": "Array",
        "example": "var array = [2, 5, 9];\nvar index = array.indexOf(2); // index is assigned 0\nindex = array.indexOf(7); // index is assigned -1",
        "description": "The `indexOf()` method returns the `first index` at which a given element can be found in the array, or `-1` if it is not present.",
        "type": "function",
        "name": "indexOf"
    },
    {
        "codeLanguages": [
            "javascript",
            "io",
            "lua",
            "clojure",
            "coffeescript"
        ],
        "owner": "Array",
        "example": "var a = new Array(\"Wind\",\"Rain\",\"Fire\");\nvar myVar1 = a.join();      // assigns \"Wind,Rain,Fire\" to myVar1\nvar myVar2 = a.join(\", \");  // assigns \"Wind, Rain, Fire\" to myVar2\nvar myVar3 = a.join(\" + \"); // assigns \"Wind + Rain + Fire\" to myVar3",
        "description": "The `join()` method joins all elements of an array into a `string`.",
        "type": "function",
        "name": "join"
    },
    {
        "codeLanguages": [
            "javascript",
            "coffeescript",
            "lua",
            "clojure",
            "io"
        ],
        "owner": "Array",
        "example": "var arr = [\"a\",\"b\",\"c\"];\nvar eArr = arr.keys();\n\nthis.say(eArr.next().value); // 0\nthis.say(eArr.next().value); // 1\nthis.say(eArr.next().value); // 2\n",
        "description": "The `keys()` method returns a new `Array Iterator` that contains the keys for each index in the array.",
        "type": "function",
        "name": "keys"
    },
    {
        "codeLanguages": [
            "javascript",
            "clojure",
            "coffeescript",
            "io",
            "lua"
        ],
        "args": [
            {
                "description": "Element to locate in the array.",
                "example": "\"sword\"",
                "type": "object",
                "name": "searchElement"
            },
            {
                "description": "The index at which to start searching backwards. Defaults to the array's length, i.e. the whole array will be searched. If the index is greater than or equal to the length of the array, the whole array will be searched. If negative, it is taken as the offset from the end of the array. Note that even when the index is negative, the array is still searched from back to front. If the calculated index is less than 0, -1 is returned, i.e. the array will not be searched.",
                "example": "1",
                "type": "number",
                "name": "fromIndex"
            }
        ],
        "owner": "Array",
        "example": "var array = [2, 5, 9, 2];\nvar index = array.lastIndexOf(2);\n// index is 3\nindex = array.lastIndexOf(7);\n// index is -1\nindex = array.lastIndexOf(2, 3);\n// index is 3\nindex = array.lastIndexOf(2, 2);\n// index is 0\nindex = array.lastIndexOf(2, -2);\n// index is 0\nindex = array.lastIndexOf(2, -1);\n// index is 3",
        "description": "The `lastIndexOf()` method returns the `last index` at which a given element can be found in the array, or `-1` if it is not present.\nThe array is searched backwards.",
        "type": "function",
        "name": "lastIndexOf"
    },
    {
        "codeLanguages": [
            "javascript",
            "coffeescript",
            "lua",
            "io",
            "clojure"
        ],
        "owner": "Array",
        "example": "var numbers = [1, 4, 9];\nvar roots = numbers.map(Math.sqrt);\n/* roots is now [1, 2, 3], numbers is still [1, 4, 9] */",
        "description": "The `map()` method creates a `new array` with the results of calling a provided function on every element in this array.",
        "type": "function",
        "name": "map"
    },
    {
        "snippets": {
            "python": {
                "tab": "pop",
                "code": "self.pop()"
            },
            "javascript": {
                "tab": "pop",
                "code": "pop()"
            }
        },
        "owner": "Array",
        "example": {
            "python": "myFish = [\"angel\", \"clown\", \"mandarin\", \"surgeon\"]\n\nself.say(\"myFish before: \" + myFish)\n# myFish before: angel,clown,mandarin,surgeon\n\npopped = myFish.pop()\n\nself.say(\"myFish after: \" + myFish);\n# myFish after: angel,clown,mandarin\n\nself.say(\"Removed this element: \" + popped);\n# Removed this element: surgeon\n\npopped = myFish.pop(1)\n\nself.say(\"myFish after: \" + myFish);\n# myFish after: angel,mandarin\n\nself.say(\"Removed this element: \" + popped);\n# Removed this element: clown\n\n",
            "javascript": "var myFish = [\"angel\", \"clown\", \"mandarin\", \"surgeon\"];\n\nthis.say(\"myFish before: \" + myFish);\n//myFish before: angel,clown,mandarin,surgeon\n\nvar popped = myFish.pop();\n\nthis.say(\"myFish after: \" + myFish);\n//myFish after: angel,clown,mandarin\n\nthis.say(\"Removed this element: \" + popped);\n//Removed this element: surgeon\n"
        },
        "description": {
            "python": "The `pop(index)` method removes and returns item at index (default last).",
            "javascript": "The `pop()` method removes the `last element` from an array and returns that element."
        },
        "type": "function",
        "name": "pop"
    },
    {
        "codeLanguages": [
            "javascript",
            "coffeescript",
            "clojure",
            "io",
            "lua"
        ],
        "args": [
            {
                "default": "",
                "description": "Can be any number of arguments",
                "example": "\"football\"",
                "type": "object",
                "name": "value"
            }
        ],
        "owner": "Array",
        "example": "var sports = [\"soccer\", \"baseball\"];\nvar total = sports.push(\"football\", \"swimming\");\n\nthis.say(sports); // [\"soccer\", \"baseball\", \"football\", \"swimming\"]\nthis.say(total);  // 4",
        "description": "The `push()` method mutates an array by appending the given elements and returning the new length of the array.",
        "type": "function",
        "name": "push"
    },
    {
        "codeLanguages": [
            "javascript",
            "coffeescript",
            "lua",
            "io",
            "clojure"
        ],
        "owner": "Array",
        "example": "var total = [0, 1, 2, 3].reduce(function(a, b) {\n    return a + b;\n});\n// total == 6(0+1+2+3)",
        "description": "The `reduce()` method applies a function against an accumulator and each value of the array (from left-to-right) has to reduce it to a `single value`.",
        "type": "function",
        "name": "reduce"
    },
    {
        "codeLanguages": [
            "javascript",
            "coffeescript",
            "clojure",
            "lua",
            "io"
        ],
        "owner": "Array",
        "example": "var total = [0, 1, 2, 3].reduceRight(function(a, b) {\n    return a + b;\n});\n// total == 6 (3+2+1+0)",
        "description": "The `reduceRight()` method applies a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a `single value`.",
        "type": "function",
        "name": "reduceRight"
    },
    {
        "snippets": {
            "python": {
                "tab": "reverse",
                "code": "reverse()"
            },
            "javascript": {
                "tab": "reverse",
                "code": "reverse()"
            }
        },
        "owner": "Array",
        "example": {
            "python": "myArray = [\"one\", \"two\", \"three\"]\nmyArray.reverse()\n\nself.say(myArray)   # [\"three\", \"two\", \"one\"]\n",
            "javascript": "var myArray = [\"one\", \"two\", \"three\"];\nmyArray.reverse(); \n\nthis.say(myArray); // [\"three\", \"two\", \"one\"]\n"
        },
        "description": "The `reverse()` method reverses an array in place. The first array element becomes the last and the last becomes the first.",
        "type": "function",
        "name": "reverse"
    },
    {
        "codeLanguages": [
            "javascript",
            "coffeescript",
            "lua",
            "io",
            "clojure"
        ],
        "owner": "Array",
        "example": "var myFish = [\"angel\", \"clown\", \"mandarin\", \"surgeon\"];\n\nthis.say(\"myFish before: \" + myFish);\n//myFish before: angel,clown,mandarin,surgeon\n\nvar shifted = myFish.shift();\n\nthis.say(\"myFish after: \" + myFish);\n//myFish after: clown,mandarin,surgeon\n\nthis.say(\"Removed this element: \" + shifted);\n//Removed this element: angel\n",
        "description": "The `shift()` method removes the first element from an array and returns that element.\nThis method changes the length of the array.",
        "type": "function",
        "name": "shift"
    },
    {
        "codeLanguages": [
            "javascript",
            "coffeescript",
            "clojure",
            "lua",
            "io"
        ],
        "args": [
            {
                "default": 0,
                "description": "Zero-based index at which to begin extraction. As a negative index, begin indicates an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence. If begin is omitted, slice begins from index 0.",
                "example": "1",
                "type": "number",
                "name": "begin"
            },
            {
                "default": null,
                "description": "Zero-based index at which to end extraction. slice extracts up to but not including end. slice(1,4) extracts the second element through the fourth element (elements indexed 1, 2, and 3). As a negative index, end indicates an offset from the end of the sequence. slice(2,-1) extracts the third element through the second-to-last element in the sequence. If end is omitted, slice extracts to the end of the sequence.",
                "example": "2",
                "type": "number",
                "name": "end"
            }
        ],
        "owner": "Array",
        "example": "var fruits = [\"Banana\", \"Orange\", \"Lemon\", \"Apple\", \"Mango\"];\nvar citrus = fruits.slice(1, 3);\n\n// puts --> [\"Orange\",\"Lemon\"]",
        "description": "The `slice()` method returns a shallow copy of a portion of an array into a new array object.",
        "type": "function",
        "name": "slice"
    },
    {
        "codeLanguages": [
            "javascript",
            "coffeescript",
            "lua",
            "io",
            "clojure"
        ],
        "owner": "Array",
        "example": "function isBigEnough(element, index, array) {\n  return (element >= 10);\n}\nvar passed = [2, 5, 8, 1, 4].some(isBigEnough);\n// passed is false\npassed = [12, 5, 8, 1, 4].some(isBigEnough);\n// passed is true",
        "description": "The `some()` method tests whether some element in the array passes the test implemented by the provided function.",
        "type": "function",
        "name": "some"
    },
    {
        "snippets": {
            "python": {
                "tab": "sort",
                "code": "sort()"
            },
            "javascript": {
                "tab": "sort",
                "code": "sort()"
            }
        },
        "owner": "Array",
        "example": {
            "python": "stringArray = [\"Blue\", \"Humpback\", \"Beluga\"]\nstringArray.sort()\nself.say(\"Sorted:\", stringArray)\n# Sorted: Beluga,Blue,Humpback\n\nnumericStringArray = [\"80\", \"91\", \"700\"];\nnumericStringArray.sort()\nself.say(\"Sorted:\", numericStringArray)\n# Sorted: 700,80,91\n\nnumbers = [45,83,67,15]\nnumbers.sort()              # numbers is now [15,45,67,83]\nnumbers.sort(reverse=True)  # numbers is now [83,67,45,15]\nnumbers.sort(key=lambda n:n%9)  # numbers is now [45,83,67,15] (sorted base on value mod 9)",
            "javascript": "var stringArray = [\"Blue\", \"Humpback\", \"Beluga\"];\nthis.say(\"Sorted:\", stringArray.sort());\n//Sorted: Beluga,Blue,Humpback\n\nvar numericStringArray = [\"80\", \"9\", \"700\"];\nthis.say(\"Sorted:\", numericStringArray.sort());\n//Sorted: 700,80,9"
        },
        "description": {
            "python": "The `sort()` method sorts the elements of an array in place and returns `none`.  (This is common for all python metheds that modify the list in place in order to avoid confusion.)\n\nThe sort is stable. \nThe default sort order is ascending, but can be modified with the optional boolean argument `reverse`.\nCan also add an optional `key` argument which is a function to be called on each element before sorting.",
            "javascript": "The `sort()` method sorts the elements of an array in place and returns the array. \nThe sort is not necessarily stable. \nThe default sort order is lexicographic (not numeric)."
        },
        "type": "function",
        "name": "sort"
    },
    {
        "codeLanguages": [
            "javascript",
            "coffeescript",
            "clojure",
            "lua",
            "io"
        ],
        "args": [
            {
                "default": "",
                "description": "Index at which to start changing the array. If greater than the length of the array, actual starting index will be set to the length of the array. If negative, will begin that many elements from the end",
                "example": "1",
                "type": "integer",
                "name": "index"
            },
            {
                "default": 0,
                "description": "An integer indicating the number of old array elements to remove. If howMany is 0, no elements are removed. In this case, you should specify at least one new element. If howMany is greater than the number of elements left in the array starting at index, then all of the elements through the end of the array will be deleted. If no howMany parameter is specified (second syntax above, which is a SpiderMonkey extension), all elements after index are removed.",
                "example": "2",
                "type": "integer",
                "name": "howMany"
            },
            {
                "default": "",
                "description": "The elements to add to the array–can be any number of arguments. If you don't specify any elements, splice simply removes elements from the array.",
                "example": " \"swimming\"",
                "type": "enum",
                "name": "newElements"
            }
        ],
        "owner": "Array",
        "example": "var myFish = [\"angel\", \"clown\", \"mandarin\", \"surgeon\"];\n\n//removes 0 elements from index 2, and inserts \"drum\"\nvar removed = myFish.splice(2, 0, \"drum\");\n//myFish is [\"angel\", \"clown\", \"drum\", \"mandarin\", \"surgeon\"]\n//removed is [], no elements removed\n",
        "description": "The `splice()` method changes the content of an array, adding new elements while removing old elements.",
        "type": "function",
        "name": "splice"
    },
    {
        "codeLanguages": [
            "javascript",
            "coffeescript",
            "clojure",
            "lua",
            "io"
        ],
        "owner": "Array",
        "example": "var number = 1337;\nvar date = new Date();\nvar myArr = [number, date, \"foo\"];\n\nvar str = myArr.toLocaleString(); \n\nconsole.log(str); \n// prints \"1.337,6.12.2013 19:37:35,foo\" \n",
        "description": "The `toLocaleString()` method returns a `string` representing the elements of the array. \nThe elements are converted to Strings using their toLocaleString methods.\nThese Strings are separated by a locale-specific String (such as a comma \",\").",
        "type": "function",
        "name": "toLocaleString"
    },
    {
        "codeLanguages": [
            "javascript",
            "coffeescript",
            "lua",
            "clojure",
            "io"
        ],
        "owner": "Array",
        "example": "var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];\nvar myVar = monthNames.toString(); // assigns \"Jan,Feb,Mar,Apr\" to myVar.\n",
        "description": "The `toString()` method returns a `string` representing the specified array and its elements.",
        "type": "function",
        "name": "toString"
    },
    {
        "codeLanguages": [
            "javascript",
            "coffeescript",
            "clojure",
            "lua",
            "io"
        ],
        "args": [
            {
                "default": "",
                "description": "Can be any number of arguments.",
                "example": "\"baseball\"",
                "type": "object",
                "name": "elements"
            }
        ],
        "owner": "Array",
        "example": "var arr = [1, 2];\n\narr.unshift(0); // result of call is 3, the new array length\n// arr is [0, 1, 2]\n\narr.unshift(-2, -1); // = 5\n// arr is [-2, -1, 0, 1, 2]\n\narr.unshift( [-3] );\n// arr is [[-3], -2, -1, 0, 1, 2]",
        "description": "\nThe `unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array.",
        "type": "function",
        "name": "unshift"
    },
    {
        "returns": {
            "type": "None"
        },
        "args": [
            {
                "description": "The item to add onto the end of the list.",
                "example": "this.getNearestEnemy()",
                "type": "object",
                "name": "item"
            }
        ],
        "snippets": {
            "python": {
                "tab": "append",
                "code": "append(${1:element})"
            }
        },
        "example": {
            "python": "nums = [4,7,3]\nnums.append(85)      # nums is now [4,7,3,85]\nnums.append([6,5])   # nums is now [4,7,3,85,[6,5]]  (You might want the extend method instead)"
        },
        "codeLanguages": [
            "python"
        ],
        "description": "\nThe `append` method adds an element to the end of the list.",
        "type": "function",
        "name": "append"
    },
    {
        "args": [
            {
                "description": "The value to add to the end of the list.",
                "example": "[4,8,23]",
                "type": "array",
                "name": "item"
            }
        ],
        "returns": {
            "type": "None"
        },
        "snippets": {
            "python": {
                "tab": "extend",
                "code": "extend(${1:list})"
            }
        },
        "example": {
            "python": "nums = [4,7,3]\n\nnums.extend([6,5])   # nums is now [4,7,3,85,6,5]"
        },
        "description": "\nThe `extend` method adds a list to the end of the list by appending each element of the list.",
        "type": "function",
        "name": "extend"
    },
    {
        "returns": {
            "type": "None"
        },
        "snippets": {
            "python": {
                "tab": "insert",
                "code": "insert(${1:0},${2:value})"
            }
        },
        "example": {
            "python": "nums = [4,7,3]\nnums.insert(2,85)      # nums is now [4,7,85,3]\nnums.insert(len(nums),17)   # nums is now [4,7,3,85,17]  (equivalent to nums.append(17)"
        },
        "args": [
            {
                "description": "The position in the list where the element will be inserted.",
                "example": "2",
                "type": "number",
                "name": "index"
            },
            {
                "description": "The value to be inserted into the list.",
                "example": "13",
                "type": "object",
                "name": "element"
            }
        ],
        "description": "\nThe `insert` method inserts an item at a given position.",
        "type": "function",
        "name": "insert"
    },
    {
        "returns": {
            "type": "None"
        },
        "codeLanguages": [
            "python"
        ],
        "example": {
            "python": "nums = [4,7,3,2,3,8,5,3,3]\nnums.remove(3)      # nums is now [4,7,2,3,8,5,3,3]\nnums.remove(6)      # throws an error because 6 isn't in the list"
        },
        "snippets": {
            "python": {
                "tab": "remove",
                "code": "remove(${1:13})"
            }
        },
        "args": [
            {
                "description": "The value to be removed from the list.",
                "example": "this.getNearestEnemy()",
                "type": "object",
                "name": "target"
            }
        ],
        "description": "\nThe `remove` method removes the first item from the list that matches the input.  Throws an error if the element doesn't appear in the list.",
        "type": "function",
        "name": "remove"
    },
    {
        "snippets": {
            "python": {
                "tab": "index",
                "code": "index(${1:value})"
            }
        },
        "codeLanguages": [
            "python"
        ],
        "returns": {
            "type": "Integer"
        },
        "example": {
            "python": "nums = [4,7,3,2,3,8,5,3,3]\ni = nums.index(3)      # i is now 2\ni = nums.index(6)      # throws an error because 6 isn't in the list"
        },
        "args": [
            {
                "description": "The value to search the list for.",
                "example": "13",
                "type": "object",
                "name": "value"
            }
        ],
        "description": "\nThe `index` method returns the index in the list of the first item with the given value.  Throws an error if value doesn't exist.",
        "type": "function",
        "name": "index"
    },
    {
        "example": {
            "python": "nums = [4,7,3,2,3,8,5,3,3]\nc = nums.count(3)      # c is now 4\nc = nums.count(6)      # c is now 0"
        },
        "snippets": {
            "python": {
                "tab": "count",
                "code": "count(${1:value})"
            }
        },
        "returns": {
            "type": "Integer"
        },
        "args": [
            {
                "description": "The value that should be counted.",
                "example": "13",
                "type": "object",
                "name": "value"
            }
        ],
        "codeLanguages": [
            "python"
        ],
        "description": "\nThe `count` method returns the number of times a value appears in the list.",
        "type": "function",
        "name": "count"
    }
]