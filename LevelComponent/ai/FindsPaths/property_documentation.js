[
    {
        "snippets": {
            "clojure": {
                "tab": "getNavGrid",
                "code": ""
            },
            "python": {
                "tab": "getNavGrid",
                "code": "self.getNavGrid()$1{1:grid}"
            },
            "coffeescript": {
                "tab": "getNavGrid",
                "code": "@getNavGrid()${1:.grid}"
            },
            "javascript": {
                "code": "this.getNavGrid()${1:.grid}",
                "tab": "getNavGrid"
            }
        },
        "example": {
            "python": "# Just use its `grid` property, which is a two-dimensional array with one-meter resolution indicating where the walls are:\n\ngrid = self.getNavGrid().grid\ny = 12\nx = 30\noccupied = grid[y][x].length > 0",
            "javascript": "// Just use its `grid` property, which is a two-dimensional array with one-meter resolution indicating where the walls are:\n\nvar grid = this.getNavGrid().grid;\nvar y = 12;\nvar x = 30;\nvar occupied = grid[y][x].length > 0;"
        },
        "description": "The `getNavGrid` method returns an undocumented data structure CodeCombat uses in its pathfinding system. Sorry.",
        "type": "function",
        "name": "getNavGrid"
    },
    {
        "snippets": {
            "io": {
                "code": "isPathClear(${1:start}, ${2:end})",
                "tab": "isPathClear"
            },
            "lua": {
                "tab": "isPathClear",
                "code": "self:isPathClear(${1:start}, ${2:end})"
            },
            "clojure": {
                "tab": "isPathClear",
                "code": "(.isPathClear this ${1:start} ${2:end})"
            },
            "python": {
                "tab": "isPathClear",
                "code": "self.isPathClear(${1:start}, ${2:end})"
            },
            "coffeescript": {
                "tab": "isPathClear",
                "code": "@isPathClear ${1:start}, ${2:end}"
            },
            "javascript": {
                "tab": "isPathClear",
                "code": "this.isPathClear(${1:start}, ${2:end})"
            }
        },
        "i18n": {
            "-": {
                "-": "-"
            }
        },
        "example": {
            "io": "item := findNearest(findItems)\nif(item and isPathClear(pos, item pos)) then(\n    move(item pos)\n) else(\n    to := Object clone\n    to x := pos x\n    to y := pos y + 5\n    move(to)\n)",
            "clojure": "(let [item (.findNearest this (.findItems this))]\n    (if (and item (.isPathClear this (.pos this) (.pos item)))\n        (.move this (.pos item))\n        (.move (clj->js { :x (.x (.pos this)), :y (+ (.y (.pos this)) 5) }))))",
            "lua": "local item = self:findNearest(self:findItems())\nif item and self:isPathClear(self.pos, item.pos) then\n    self:move(item.pos)\nelse\n    self:move({x=self.pos.x, y=self.pos.y + 5})\nend",
            "coffeescript": "item = @findNearest @findItems()\nif item and @isPathClear @pos, item.pos\n    @move item.pos\nelse\n    @move {x: @pos.x, y: @pos.y + 5}",
            "python": "item = self.findNearest(self.findItems())\nif item and self.isPathClear(self.pos, item.pos):\n    self.move(item.pos)\nelse:\n    self.move({\"x\": self.pos.x, \"y\": self.pos.y + 5})",
            "javascript": "var item = this.findNearest(this.findItems());\nif (item && this.isPathClear(this.pos, item.pos)) {\n    this.move(item.pos);\n}\nelse {\n    this.move({x: this.pos.x, y: this.pos.y + 5});\n}"
        },
        "args": [
            {
                "i18n": {
                    "-": {
                        "-": "-"
                    }
                },
                "description": "",
                "example": {
                    "io": "findNearest(findFriends) pos",
                    "clojure": "(clj->js { :x 24, :y 35 })",
                    "lua": "{x=24, y=35}",
                    "coffeescript": "{x: 24, y: 35}",
                    "python": "{\"x\": 24, \"y\": 35}",
                    "javascript": "{x: 24, y: 35}"
                },
                "type": "object",
                "name": "start"
            },
            {
                "i18n": {
                    "-": {
                        "-": "-"
                    }
                },
                "description": "",
                "example": {
                    "io": "findNearest(findItems) pos",
                    "clojure": "(clj->js { :x 24, :y 35 })",
                    "lua": "{x=24, y=35}",
                    "coffeescript": "{x: 24, y: 35}",
                    "python": "{\"x\": 24, \"y\": 35}",
                    "javascript": "{x: 24, y: 35}"
                },
                "type": "object",
                "name": "end"
            }
        ],
        "returns": {
            "type": "boolean"
        },
        "description": "Returns whether there are any obstacles (walls, cliffs, etc.) or hazards (traps, pits, etc.) in the straight line between `start` and `end` positions.",
        "type": "function",
        "name": "isPathClear"
    }
]