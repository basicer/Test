[
    {
        "snippets": {
            "clojure": {
                "tab": "map",
                "code": "(.map this)"
            },
            "python": {
                "tab": "map",
                "code": "self.map"
            },
            "javascript": {
                "tab": "map",
                "code": "this.map"
            }
        },
        "description": "A complete map of tiles on the map. Keys are tile ids, such as `\"0.0\"` for the\nlower left corner tile and `\"6.0\"` for the lower right corner tile. Values\nare tile objects.",
        "type": "object",
        "name": "map"
    },
    {
        "snippets": {
            "clojure": {
                "tab": "tileGroups",
                "code": "(.tileGroups this)"
            },
            "python": {
                "tab": "tileGroups",
                "code": "self.tileGroups"
            },
            "javascript": {
                "tab": "tileGroups",
                "code": "this.tileGroups"
            }
        },
        "example": {
            "lua": "local firstGroup = self.tileGroups['A']\nlocal secondGroup = self.tileGroups['B']\n-- ...\nlocal seventhGroup = self.tileGroups['G']\n\nlocal firstTileInFirstGroup = firstGroup[0]",
            "io": "firstGroup := tileGroups A\nsecondGroup := tileGroups B\n// ...\nseventhGroup := tileGroups G\n\nfirstTileInFirstGroup = firstGroup at(0)",
            "coffeescript": "firstGroup = @tileGroups['A']\nsecondGroup = @tileGroups['B']\n# ...\nseventhGroup = @tileGroups['G']\n\nfirstTileInFirstGroup = firstGroup[0]",
            "python": "firstGroup = self.tileGroups['A']\nsecondGroup = self.tileGroups['B']\n# ...\nseventhGroup = self.tileGroups['G']\n\nfirstTileInFirstGroup = firstGroup[0]",
            "javascript": "var firstGroup = this.tileGroups['A'];\nvar secondGroup = this.tileGroups['B'];\n// ...\nvar seventhGroup = this.tileGroups['G'];\n\nvar firstTileInFirstGroup = firstGroup[0];"
        },
        "description": "Each turn you're bidding for a single tile out of a 'group' of tiles.\nThe whole grid is divided into seven groups (randomly distributed)\nand the game cycles through them turn by turn.\n\n* On the **first** turn, group **A** is bid on.\n* On the **second** turn, group **B** is bid on.\n* ...\n* On the **seventh** turn, group **G** is bid on.\n* On the **eighth** turn, group **A** is bid on again.\n* On the **ninth** turn, group **B** is bid on again.\n\nAnd so on. `tileGroups` is an object mapping tileGroupLetters to arrays\nof tiles in their groups.",
        "type": "object",
        "name": "tileGroups"
    },
    {
        "description": "* **x**: the x position of the tile\n* **y**: the y position of the tile\n* **neighbors**: an array of tiles that are adjacent to this tile.\n* **owner**: `'humans'`, `'ogres'` or `null`\n* **tileGroupLetter**: the tile group this tile belongs to (for example, `'A'`)",
        "type": "object",
        "name": "Tile"
    },
    {
        "snippets": {
            "clojure": {
                "tab": "tilesOwned",
                "code": "(.tilesOwned this)"
            },
            "python": {
                "tab": "tilesOwned",
                "code": "self.tilesOwned"
            },
            "javascript": {
                "tab": "tilesOwned",
                "code": "this.tilesOwned"
            }
        },
        "description": "This is a list of all tiles that have been won by **any** team,\nsorted by the turn they were acquired, from earliest to latest.  These are tile objects, not strings.",
        "type": "array",
        "name": "tilesOwned"
    },
    {
        "snippets": {
            "clojure": {
                "tab": "myTiles",
                "code": "(.myTiles this)"
            },
            "python": {
                "tab": "myTiles",
                "code": "self.myTiles"
            },
            "javascript": {
                "tab": "myTiles",
                "code": "this.myTiles"
            }
        },
        "description": "This is a list of all tiles that have been won by **your** team, sorted by\nthe turn they were acquired, from earliest to latest.  These are tile objects, not strings.",
        "type": "array",
        "name": "myTiles"
    },
    {
        "snippets": {
            "clojure": {
                "tab": "opponentTiles",
                "code": "(.opponentTiles this)"
            },
            "python": {
                "tab": "opponentTiles",
                "code": "self.opponentTiles"
            },
            "javascript": {
                "tab": "opponentTiles",
                "code": "this.opponentTiles"
            }
        },
        "description": "This is a list of all tiles that have been won by **your opponent's** team,\nsorted by the turn they were acquired, from earliest to latest. These are tile objects, not strings.",
        "type": "array",
        "name": "opponentTiles"
    },
    {
        "snippets": {
            "clojure": {
                "tab": "tileGrid",
                "code": "(.tileGrid this)"
            },
            "python": {
                "tab": "tileGrid",
                "code": "self.tileGrid"
            },
            "javascript": {
                "tab": "tileGrid",
                "code": "this.tileGrid"
            }
        },
        "example": {
            "io": "lowerLeftTile := tileGrid at(0) at(0)\nupperRightTile := tileGrid at(6) at(6)\nupperLeftTile := tileGrid at(0) at(6)\nlowerRightTile := tileGrid at(6) at(0)\n\nallTiles := List clon\n\nfor(x, 0, tileGrid length,\n    for(y, 0, tileGrid at(x) length,\n        allTiles append(tileGrid at(x) at(y))\n\nsay('Iterated through ' .. allTiles length .. ' tiles!')",
            "lua": "local lowerLeftTile = self.tileGrid[0][0]\nlocal upperRightTile = self.tileGrid[6][6]\nlocal upperLeftTile = self.tileGrid[0][6]\nlocal lowerRightTile = self.tileGrid[6][0]\n\nlocal allTiles = {}\n\nfor x, column in ipairs(self.tileGrid) do\n    for y, tile in ipairs(col) do\n        table.insert(allTiles, tile)\n    end\nend\n\nself:say('Iterated through ' .. #allTiles .. ' tiles!')",
            "coffeescript": "lowerLeftTile = @tileGrid[0][0]\nupperRightTile = @tileGrid[6][6]\nupperLeftTile = @tileGrid[0][6]\nlowerRightTile = @tileGrid[6][0]\n\nallTiles = []\n\nfor x in [0 ... @tileGrid.length]\n  for y in [0 ... @tileGrid[x].length]\n    allTiles.push @tileGrid[x][y]\n\n@say \"Iterated through #{allTiles.length} tiles!\"",
            "python": "lowerLeftTile = self.tileGrid[0][0]\nupperRightTile = self.tileGrid[6][6]\nupperLeftTile = self.tileGrid[0][6]\nlowerRightTile = self.tileGrid[6][0]\n\nallTiles = []\n\nfor x in range(len(self.tileGrid)):\n    for y in range(len(self.tileGrid[x])):\n        allTiles.append(self.tileGrid[x][y])\n\nself.say('Iterated through ' + len(allTiles) + ' tiles!')",
            "javascript": "var lowerLeftTile = this.tileGrid[0][0];\nvar upperRightTile = this.tileGrid[6][6];\nvar upperLeftTile = this.tileGrid[0][6];\nvar lowerRightTile = this.tileGrid[6][0];\n\nvar allTiles = [];\n\nfor (var x = 0; x < this.tileGrid.length; x++) {\n    for (var y = 0; y < this.tileGrid[x].length; y++) {\n        allTiles.push(this.tileGrid[x][y]);\n    }\n}\n\nthis.say('Iterated through ' + allTiles.length + ' tiles!');"
        },
        "description": "All the tiles on the board, stored in an array of arrays. The outer array, indexed by `x`, represents the columns. Each column, indexed by `y`, contains the tiles by row.",
        "type": "array",
        "name": "tileGrid"
    },
    {
        "snippets": {
            "clojure": {
                "tab": "getTile",
                "code": "(.getTile this ${1:x} ${2:y})"
            },
            "python": {
                "tab": "getTile",
                "code": "self.getTile(${1:x},${2:y})"
            },
            "javascript": {
                "tab": "getTile",
                "code": "this.getTile(${1:x},${2:y})"
            }
        },
        "args": [
            {
                "description": "The x coordinate of the tile you want",
                "example": "0",
                "type": "Number",
                "name": "x"
            },
            {
                "description": "The y coordinate of the tile you want",
                "example": "0",
                "type": "Number",
                "name": "y"
            }
        ],
        "description": "Accessor function for getting a tile, given x and y.",
        "type": "function",
        "name": "getTile"
    },
    {
        "example": {
            "io": "// You don't call makeBid; the referee calls it each turn.",
            "lua": "-- You don't call makeBid(); the referee calls it each turn.",
            "clojure": ";; You don't call makeBid; the referee calls it each turn.",
            "python": "# You don't call makeBid(); the referee calls it each turn.",
            "coffeescript": "# You don't call makeBid(); the referee calls it each turn.",
            "javascript": "// You don't call makeBid(); the referee calls it each turn."
        },
        "args": [
            {
                "description": "Each turn, you're bidding for your choice of tiles within the tile group represented by the given `tileGroupLetter`.",
                "example": "\"A\"",
                "type": "string",
                "name": "tileGroupLetter"
            }
        ],
        "description": "This is called once per turn. Return an object with properties:\n\n* **desiredTile**: the tile you want, and\n* **bid**: the number of gold you're willing to pay for it.",
        "type": "function",
        "name": "makeBid"
    },
    {
        "snippets": {
            "clojure": {
                "tab": "round",
                "code": "(.round this)"
            },
            "python": {
                "tab": "round",
                "code": "self.round"
            },
            "javascript": {
                "tab": "round",
                "code": "this.round"
            }
        },
        "description": "Which round the game is on, out of 5 rounds.",
        "type": "number",
        "name": "round"
    },
    {
        "snippets": {
            "clojure": {
                "tab": "turns",
                "code": "(.turns this)"
            },
            "python": {
                "tab": "turns",
                "code": "self.turns"
            },
            "javascript": {
                "tab": "turns",
                "code": "this.turns"
            }
        },
        "description": "Array of turns so far. A turn object has the properties:\n\n* number: the turn number (same as the array index)\n* tileGroup: the key for the tileGroup this turn (`'A'`, `'B'`, etc)\n* humanGold: how much money the humans had at the end of the turn\n* ogreGold: how much money the ogres had at the end of the turn\n* humanBid: the human bid this turn\n* ogreBid: the ogre bid for this turn\n\nA bid object has the properties:\n\n* bid (integer)\n* team (string, `'ogres'` or `'humans'`)\n* desiredTile (object)\n* invalidBid (boolean)\n* invalidTile (boolean)\n* won (boolean)",
        "type": "array",
        "name": "turns"
    },
    {
        "snippets": {
            "clojure": {
                "tab": "highlightTile",
                "code": "(.highlightTile this ${1:tile})"
            }
        },
        "args": [
            {
                "description": "The tile to highlight.",
                "example": "tile",
                "type": "object",
                "name": "tile"
            }
        ],
        "description": "Temporarily highlight the given tile visually (perhaps for debugging purposes).",
        "type": "function",
        "name": "highlightTile"
    }
]