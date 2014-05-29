[
    {
        "owner": "String",
        "example": "String.fromCharCode(65,66,67);\n//returns \"ABC\"",
        "description": "The static `String.fromCharCode()` method returns a string created by using the specified sequence of Unicode values.",
        "type": "function",
        "name": "fromCharCode"
    },
    {
        "owner": "String",
        "example": "String.fromCodePoint(42)        // \"*\"\nString.fromCodePoint(65, 90)    // \"AZ\"\nString.fromCodePoint(0x404)     // \"\\u0404\"\nString.fromCodePoint(0x2F804)  // \"\\uD87E\\uDC04\"\nString.fromCodePoint(194564)   // \"\\uD87E\\uDC04\"\nString.fromCodePoint(0x1D306, 0x61, 0x1D307) // \"\\uD834\\uDF06a\\uD834\\uDF07\"\n\nString.fromCodePoint('_')       // RangeError\nString.fromCodePoint(Infinity); // RangeError\nString.fromCodePoint(-1);       // RangeError\nString.fromCodePoint(3.14);     // RangeError\nString.fromCodePoint(3e-2);     // RangeError\nString.fromCodePoint(NaN);      // RangeError",
        "description": "The static `String.fromCodePoint()` method returns a string created by using the specified sequence of code points.",
        "type": "function",
        "name": "fromCodePoint"
    },
    {
        "owner": "String",
        "example": "var hotText = \"MDN\";\nvar URL = \"https://developer.mozilla.org/\";\n\nconsole.log(\"Click to return to \" + hotText.link(URL));\n//Click to return to <a href=\"https://developer.mozilla.org/\">MDN</a>",
        "description": "The `link()` method creates an `<a>` HTML element that causes a string to be displayed as a hypertext link to another URL.",
        "type": "function",
        "name": "link"
    },
    {
        "owner": "String",
        "example": "var myString = \"Table of Contents\";\n\ndocument.body.innerHTML = myString.anchor(\"contents_anchor\");\n//<a name=\"contents_anchor\">Table of Contents</a>",
        "description": "The `anchor()` method creates an `<a>` HTML anchor element that is used as a hypertext target.",
        "type": "function",
        "name": "anchor"
    },
    {
        "owner": "String",
        "example": "var worldString = \"Hello, world\";\n\nconsole.log( worldString.big() ); // <big>Hello, world</big>",
        "description": "The `big()` method creates a `<big>` HTML element that causes a string to be displayed in a big font.",
        "type": "function",
        "name": "big"
    },
    {
        "owner": "String",
        "example": "var worldString = \"Hello, world\";\n\nconsole.log( worldString.bold() );\n//<b>Hello, world</b>",
        "description": "The `bold()` method creates a `<b>` HTML element that causes a string to be displayed as bold.",
        "type": "function",
        "name": "bold"
    },
    {
        "owner": "String",
        "example": "var anyString = \"Brave new world\";\n\nconsole.log(\"The character at index 3   is '\" + anyString.charAt(3)   + \"'\");\n//The character at index 3 is 'v'",
        "description": "The `charAt()` method returns the specified character from a string.",
        "type": "function",
        "name": "charAt"
    },
    {
        "owner": "String",
        "example": "\"ABC\".charCodeAt(0); // returns 65",
        "description": "The `charCodeAt()` method returns the numeric `Unicode value` of the character at the given index (except for unicode codepoints > 0x10000).",
        "type": "function",
        "name": "charCodeAt"
    },
    {
        "owner": "String",
        "example": "'ABC'.codePointAt(1);          // 66\n'\\uD800\\uDC00'.codePointAt(0); // 65536\n\n'XYZ'.codePointAt(42); // undefined",
        "description": "The `codePointAt()` method returns a non-negative integer that is the UTF-16 encoded code point value.",
        "type": "function",
        "name": "charPointAt"
    },
    {
        "owner": "String",
        "example": "var hello = \"Hello, \";\nconsole.log(hello.concat(\"Kevin\", \" have a nice day.\")); \n\n/* Hello, Kevin have a nice day. */",
        "description": "The `concat()` method combines the text of two or more strings and returns a new string.",
        "type": "function",
        "name": "concat"
    },
    {
        "owner": "String",
        "example": "var str = \"To be, or not to be, that is the question.\";\n\nconsole.log(str.contains(\"To be\"));       // true\nconsole.log(str.contains(\"question\"));    // true\nconsole.log(str.contains(\"nonexistent\")); // false\nconsole.log(str.contains(\"To be\", 1));    // false\nconsole.log(str.contains(\"TO BE\"));       // false",
        "description": "The `contains()` method determines whether one string may be found within another string, returning true or false as appropriate.",
        "type": "function",
        "name": "contains"
    },
    {
        "owner": "String",
        "example": "var str = \"To be, or not to be, that is the question.\";\n\nalert( str.endsWith(\"question.\") );  // true\nalert( str.endsWith(\"to be\") );      // false\nalert( str.endsWith(\"to be\", 19) );  // true",
        "description": "The `endsWith()` method determines whether a string ends with the characters of another string, returning true or false as appropriate.",
        "type": "function",
        "name": "endsWith"
    },
    {
        "owner": "String",
        "example": "var worldString = \"Hello, world\";\n\nconsole.log( worldString.fixed() );\n//<tt>Hello, world</tt>",
        "description": "The `fixed()` method creates a `<tt>` HTML element that causes a string to be displayed in fixed-pitch font.",
        "type": "function",
        "name": "fixed"
    },
    {
        "owner": "String",
        "example": "var worldString = \"Hello, world\";\n\nconsole.log(worldString.fontcolor(\"red\") +  \" is red in this line\");\n// '<font color=\"red\">Hello, world</font> is red in this line'",
        "description": "The `fontcolor(color)` method creates a `<font>` HTML element that causes a string to be displayed in the specified font color.",
        "type": "function",
        "name": "fontcolor"
    },
    {
        "owner": "String",
        "example": "var worldString = \"Hello, world\";\n\nconsole.log( worldString.fontsize(7) ); // <font size=\"7\">Hello, world</fontsize>",
        "description": "The `fontsize()` method creates a `<font>` HTML element that causes a string to be displayed in the specified font size.",
        "type": "function",
        "name": "fontsize"
    },
    {
        "owner": "String",
        "example": "\"Blue Whale\".indexOf(\"Blue\");     // returns  0\n\"Blue Whale\".indexOf(\"Blute\");    // returns -1\n\"Blue Whale\".indexOf(\"Whale\", 0); // returns  5\n\"Blue Whale\".indexOf(\"Whale\", 5); // returns  5\n\"Blue Whale\".indexOf(\"\", 9);      // returns  9\n\"Blue Whale\".indexOf(\"\", 10);     // returns 10\n\"Blue Whale\".indexOf(\"\", 11);     // returns 10",
        "description": "The `indexOf()` method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex,\nreturns `-1` if the value is not found.",
        "type": "function",
        "name": "indexOf"
    },
    {
        "owner": "String",
        "example": "var worldString = \"Hello, world\";\n\nconsole.log( worldString.italics() );\n//<i>Hello, world</i>",
        "description": "The `italics()` method creates an `<i>` HTML element that causes a string to be italic.",
        "type": "function",
        "name": "italics"
    },
    {
        "owner": "String",
        "example": "\"canal\".lastIndexOf(\"a\");   // returns 3\n\"canal\".lastIndexOf(\"a\",2); // returns 1\n\"canal\".lastIndexOf(\"a\",0); // returns -1\n\"canal\".lastIndexOf(\"x\");   // returns -1",
        "description": "The `lastIndexOf()` method returns the index within the calling String object of the last occurrence of the specified value, or `-1` if not found. The calling string is searched backward, starting at fromIndex.",
        "type": "function",
        "name": "lastIndexOf"
    },
    {
        "owner": "String",
        "example": "alert('a'.localeCompare('c')); // -2, or -1, or some other negative value\nalert('c'.localeCompare('a')); // 2, or 1, or some other positive value\nalert('a'.localeCompare('a')); // 0",
        "description": "The `localeCompare()` method returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.",
        "type": "function",
        "name": "localeCompare"
    },
    {
        "owner": "String",
        "example": "var str = \"For more information, see Chapter 3.4.5.1\";\nvar re = /(chapter \\d+(\\.\\d)*)/i;\nvar found = str.match(re);\n\nconsole.log(found);\n\n// logs [\"Chapter 3.4.5.1\", \"Chapter 3.4.5.1\", \".1\"]\n\n// \"Chapter 3.4.5.1\" is the first match and the first value \n//  remembered from (Chapter \\d+(\\.\\d)*).\n\n// \".1\" is the second value remembered from (\\.\\d).",
        "description": "The `match()` method retrieves the matches when matching a string against a regular expression.",
        "type": "function",
        "name": "match"
    },
    {
        "owner": "String",
        "example": "\"abc\".repeat(-1)     // RangeError\n\"abc\".repeat(0)      // \"\"\n\"abc\".repeat(1)      // \"abc\"\n\"abc\".repeat(2)      // \"abcabc\"\n\"abc\".repeat(3.5)    // \"abcabcabc\" (count will be converted to integer)\n\"abc\".repeat(1/0)    // RangeError",
        "description": "The `repeat()` method copies the current string a given times and returns the new string.",
        "type": "function",
        "name": "repeat"
    },
    {
        "owner": "String",
        "example": "var re = /apples/gi;\nvar str = \"Apples are round, and apples are juicy.\";\nvar newstr = str.replace(re, \"oranges\");\nprint(newstr);\n//\"oranges are round, and oranges are juicy.\"",
        "description": "The `replace()` method returns a new string with some or all matches of a pattern replaced by a replacement.  The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.\n",
        "type": "function",
        "name": "replace"
    },
    {
        "owner": "String",
        "example": "function testinput(re, str){\n  var midstring;\n  if (str.search(re) != -1){\n    midstring = \" contains \";\n  } else {\n    midstring = \" does not contain \";\n  }\n  console.log (str + midstring + re);\n}",
        "description": "The `search()` method executes a search for a match between a regular expression and this String object.",
        "type": "function",
        "name": "search"
    },
    {
        "owner": "String",
        "example": "// assumes a print function is defined\nvar str1 = \"The morning is upon us.\";\nvar str2 = str1.slice(4, -2);\n\nalert(str2); // OUTPUT: morning is upon u",
        "description": "The `slice()` method extracts a section of a string and returns a new string.",
        "type": "function",
        "name": "slice"
    },
    {
        "owner": "String",
        "example": "var worldString = \"Hello, world\";\n\nconsole.log( worldString.small() ); // <small>Hello, world</small>",
        "description": "The `small()` method creates a `<small>` HTML element that causes a string to be displayed in a small font.",
        "type": "function",
        "name": "small"
    },
    {
        "owner": "String",
        "example": "var names = \"Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand \";\n\nprint(names);\n//Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand\n\nvar re = /\\s*;\\s*/;\nvar nameList = names.split(re);\n\nprint(nameList);\n//Harry Trump,Fred Barney,Helen Rigby,Bill Abel,Chris Hand",
        "description": "The `split()` method splits a String object into an array of strings by separating the string into substrings.",
        "type": "function",
        "name": "split"
    },
    {
        "owner": "String",
        "example": "var str = \"To be, or not to be, that is the question.\";\n\nalert(str.startsWith(\"To be\"));         // true\nalert(str.startsWith(\"not to be\"));     // false\nalert(str.startsWith(\"not to be\", 10)); // true",
        "description": "The `startsWith()` method determines whether a string begins with the characters of another string, returning true or false as appropriate.",
        "type": "function",
        "name": "startsWith"
    },
    {
        "owner": "String",
        "example": "var worldString = \"Hello, world\";\n\nconsole.log( worldString.strike()  );\n//<strike>Hello, world</strike>",
        "description": "The `strike()` method creates a `<strike>` HTML element that causes a string to be displayed as struck-out text.",
        "type": "function",
        "name": "strike"
    },
    {
        "owner": "String",
        "example": "var subText = \"subscript\";\n\nconsole.log(\"This is what a \" + subText.sub() + \" looks like.\");\n//This is what a <sub>subscript</sub> looks like.",
        "description": "The `sub()` method creates a `<sub>` HTML element that causes a string to be displayed as subscript.",
        "type": "function",
        "name": "sub"
    },
    {
        "owner": "String",
        "example": "var str = \"abcdefghij\";\n\nconsole.log(\"(1,2): \"    + str.substr(1,2));   // (1,2): bc\nconsole.log(\"(-3,2): \"   + str.substr(-3,2));  // (-3,2): hi\nconsole.log(\"(-3): \"     + str.substr(-3));    // (-3): hij\nconsole.log(\"(1): \"      + str.substr(1));     // (1): bcdefghij\nconsole.log(\"(-20, 2): \" + str.substr(-20,2)); // (-20, 2): ab\nconsole.log(\"(20, 2): \"  + str.substr(20,2));  // (20, 2):",
        "description": "The `substr()` method returns the characters in a string beginning at the specified location through the specified number of characters.",
        "type": "function",
        "name": "substr"
    },
    {
        "owner": "String",
        "example": "console.log( \"ALPHABET\".toLocaleLowerCase() ); // \"alphabet\"",
        "description": "The `toLocaleLowerCase()` method returns the calling string value converted to lower case, according to any locale-specific case mappings.",
        "type": "function",
        "name": "toLocaleLowerCase"
    },
    {
        "owner": "String",
        "example": "console.log( \"alphabet\".toLocaleUpperCase() ); // \"ALPHABET\"",
        "description": "The `toLocaleUpperCase()` method returns the calling string value converted to upper case, according to any locale-specific case mappings.",
        "type": "function",
        "name": "toLocaleUpperCase"
    },
    {
        "owner": "String",
        "example": "console.log( \"ALPHABET\".toLowerCase() ); // \"alphabet\"",
        "description": "The `toLowerCase()` method returns the calling string value converted to lowercase.",
        "type": "function",
        "name": "toLowerCase"
    },
    {
        "owner": "String",
        "example": "var x = new String(\"Hello world\");\n\nalert(x.toString());      // Displays \"Hello world\"",
        "description": "The `toString()` method returns a string representing the specified object.",
        "type": "function",
        "name": "toString"
    },
    {
        "owner": "String",
        "example": "console.log( \"alphabet\".toUpperCase() ); // \"ALPHABET\"",
        "description": "The `toUpperCase()` method returns the calling string value converted to uppercase.",
        "type": "function",
        "name": "toUpperCase"
    },
    {
        "owner": "String",
        "example": "var orig = \"   foo  \";\n\nconsole.log( orig.trim() ); // \"foo\"",
        "description": "The `trim()` method removes whitespace from both ends of the string.",
        "type": "function",
        "name": "trim"
    },
    {
        "owner": "String",
        "example": "var x = new String(\"Hello world\");\nalert(x.valueOf());          // Displays \"Hello world\"",
        "description": "The `valueOf()` method returns the primitive value of a String object.",
        "type": "function",
        "name": "valueOf"
    },
    {
        "owner": "String",
        "example": "var str = \"abcdefghij\";\n\nconsole.log(\"(1,2): \"    + str.substring(1,2));   // (1,2): b\nconsole.log(\"(-3,2): \"   + str.substring(-3,2));  // (-3,2): ab\nconsole.log(\"(-3): \"     + str.substring(-3));    // (-3): abcdefghij\nconsole.log(\"(1): \"      + str.substring(1));     // (1): bcdefghij\nconsole.log(\"(-20, 2): \" + str.substring(-20,2)); // (-20, 2): ab\nconsole.log(\"(20, 2): \"  + str.substring(20,2));  // (20, 2): cdefghij",
        "description": "The `substring()` method returns the characters in a string beginning at the specified start location and ending before the specified end location.",
        "type": "function",
        "name": "substring"
    }
]