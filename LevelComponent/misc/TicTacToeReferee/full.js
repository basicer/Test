{
	"_id": "53fa59485cfd700d099ac1ad",
	"index": true,
	"slug": "tictactoereferee",
	"name": "TicTacToeReferee",
	"codeLanguage": "coffeescript",
	"js": "var TicTacToeReferee,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nTicTacToeReferee = (function(_super) {\n  __extends(TicTacToeReferee, _super);\n\n  TicTacToeReferee.className = 'TicTacToeReferee';\n\n  function TicTacToeReferee(config) {\n    TicTacToeReferee.__super__.constructor.call(this, config);\n    this.gridSize = 3;\n    this.tileWidth = 9;\n    this.tileHeight = 7.5;\n    this.X = 31;\n    this.Y = 44;\n    this.board = {};\n    this.board.grid = [];\n    this.board.moveCount = 0;\n    this.board.hasEnded = false;\n    this.moveCount = 0;\n    this.winningCombo = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];\n    this.heuristicArray = [[0, -10, -100, -10000], [10, 0, 0, 0], [100, 0, 0, 0], [10000, 0, 0, 0]];\n  }\n\n  TicTacToeReferee.prototype.attach = function(thang) {\n    return TicTacToeReferee.__super__.attach.call(this, thang);\n  };\n\n  /*  \n  initBoard: ->\n    for i in [0 ... @gridSize-1]\n      for j in [0 ... @gridSize-1]\n        @addRect(@X + (i * @squareSize),@Y + (j * @squareSize), @squareSize , @squareSize)\n        @board[i][j] = 0\n  */\n\n\n  TicTacToeReferee.prototype.getPossibleMoves = function() {\n    return console.log(\"calling original version of getPossibleMoves\");\n  };\n\n  TicTacToeReferee.prototype.minimax_alphaBeta = function() {\n    return console.log(\"hacky fix for error\");\n  };\n\n  TicTacToeReferee.prototype.evaluateBoard = function() {\n    return console.log(\"hacky fix for error\");\n  };\n\n  TicTacToeReferee.prototype.AI_minimax_alphaBeta = function(board, player, depth, alpha, beta) {\n    var copy, move, moves, p, p2, _i, _len;\n    if (depth === 0 || board.hasEnded === true) {\n      return {\n        Move: {\n          i: -1,\n          j: -1\n        },\n        score: this.evalBoard(board, player)\n      };\n    }\n    moves = this.getMoves(board);\n    p = {\n      Move: {\n        i: -1,\n        j: -1\n      },\n      score: -10000\n    };\n    for (_i = 0, _len = moves.length; _i < _len; _i++) {\n      move = moves[_i];\n      copy = _.cloneDeep(board);\n      copy = this.applyMove(copy, move.x, move.y, player);\n      if (copy === false) {\n        continue;\n      }\n      if (player === 'X') {\n        player = 'O';\n      } else {\n        player = 'X';\n      }\n      p2 = this.AI_minimax_alphaBeta(copy, player, depth - 1, -beta, -alpha);\n      p2.score *= -1;\n      if (p2.score >= p.score) {\n        p.Move.i = move.x;\n        p.Move.j = move.y;\n        p.score = p2.score;\n      }\n      if (p2.score > alpha) {\n        alpha = p2.score;\n      }\n      if (alpha >= beta) {\n        break;\n      }\n      if (player === 'X') {\n        player = 'O';\n      } else {\n        player = 'X';\n      }\n    }\n    return p;\n  };\n\n  TicTacToeReferee.prototype.initBoard = function() {\n    var i, j, _i, _j, _ref, _ref1;\n    for (i = _i = 0, _ref = this.gridSize; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {\n      this.board.grid[i] = [];\n      for (j = _j = 0, _ref1 = this.gridSize; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; j = 0 <= _ref1 ? ++_j : --_j) {\n        this.board.grid[i][j] = 0;\n      }\n    }\n    return console.log('init board=', this.board);\n  };\n\n  TicTacToeReferee.prototype.getMoves = function(board) {\n    var i, j, moves, _i, _j, _ref, _ref1;\n    moves = [];\n    for (i = _i = 0, _ref = this.gridSize; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {\n      for (j = _j = 0, _ref1 = this.gridSize; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; j = 0 <= _ref1 ? ++_j : --_j) {\n        if (board.grid[i][j] === 0) {\n          moves.push({\n            x: i,\n            y: j\n          });\n        }\n      }\n    }\n    return moves;\n  };\n\n  TicTacToeReferee.prototype.evalBoard = function(board, player) {\n    var i, j, opponent, others, piece, players, value, _i, _j;\n    if (player === 'X') {\n      opponent = 'O';\n    } else {\n      opponent = 'X';\n    }\n    value = 0;\n    for (i = _i = 0; _i < 8; i = ++_i) {\n      players = 0;\n      others = 0;\n      for (j = _j = 0; _j < 3; j = ++_j) {\n        piece = board.grid[Math.floor(this.winningCombo[i][j] / 3)][this.winningCombo[i][j] % 3];\n        if (piece === player) {\n          players++;\n        } else if (piece === opponent) {\n          others++;\n        }\n      }\n      value += this.heuristicArray[players][others];\n    }\n    return value;\n  };\n\n  TicTacToeReferee.prototype.spawnThang = function(x, y, type) {\n    var thang;\n    if (type === 'X') {\n      this.toBuild = this.buildables.X;\n    } else {\n      this.toBuild = this.buildables.O;\n    }\n    thang = this.performBuild();\n    thang.pos.x = x;\n    thang.pos.y = y;\n    return thang.hasMoved = true;\n  };\n\n  TicTacToeReferee.prototype.addX = function(i, j) {\n    var check;\n    if (i < 3 && j < 3 && this.board.grid[i][j] === 0) {\n      this.board.grid[i][j] = 'X';\n      this.spawnThang(this.X + j * this.tileWidth, this.Y - i * this.tileHeight, 'X');\n      this.board.moveCount++;\n      console.log('added an X, board=', this.board);\n      check = this.checkWinner(this.board, i, j, 'X');\n      if (check !== 0) {\n        this.board.hasEnded = true;\n        if (check === 1) {\n          console.log('OMG you won!');\n          this.setGoalState('goal', 'success');\n        } else {\n          console.log('draw from move', i, j, 'by X');\n          this.setGoalState('goal', 'success');\n        }\n        this.world.endWorld(false, 2);\n        return console.log('game over');\n      }\n    }\n  };\n\n  TicTacToeReferee.prototype.addO = function(i, j) {\n    var check;\n    if (i < 3 && j < 3 && this.board.grid[i][j] === 0) {\n      this.board.grid[i][j] = 'O';\n      this.spawnThang(this.X + j * this.tileWidth, this.Y - i * this.tileHeight, 'O');\n      this.board.moveCount++;\n      console.log('added an O, board=', this.board);\n      check = this.checkWinner(this.board, i, j, 'O');\n      if (check !== 0) {\n        this.board.hasEnded = true;\n        if (check === 2) {\n          this.setGoalState('goal', 'failure');\n        } else {\n          console.log('draw from move', i, j, 'by O');\n          this.setGoalState('goal', 'success');\n        }\n        this.world.endWorld(false, 2);\n        return console.log('game over');\n      }\n    }\n  };\n\n  TicTacToeReferee.prototype.applyMove = function(board, i, j, player) {\n    if (i < 3 && j < 3 && board.grid[i][j] === 0) {\n      board.grid[i][j] = player;\n      board.moveCount++;\n      if (this.checkWinner(board, i, j, player) !== 0) {\n        board.hasEnded = true;\n      }\n      return board;\n    } else {\n      return false;\n    }\n  };\n\n  TicTacToeReferee.prototype.checkWinner = function(board, x, y, player) {\n    var i, _i, _j, _k, _l, _ref, _ref1, _ref2, _ref3;\n    for (i = _i = 0, _ref = this.gridSize; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {\n      if (board.grid[x][i] !== player) {\n        break;\n      }\n      if (i === this.gridSize - 1) {\n        return {\n          X: 1,\n          O: 2\n        }[player];\n      }\n    }\n    for (i = _j = 0, _ref1 = this.gridSize; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; i = 0 <= _ref1 ? ++_j : --_j) {\n      if (board.grid[i][y] !== player) {\n        break;\n      }\n      if (i === this.gridSize - 1) {\n        return {\n          X: 1,\n          O: 2\n        }[player];\n      }\n    }\n    if (x === y) {\n      for (i = _k = 0, _ref2 = this.gridSize; 0 <= _ref2 ? _k < _ref2 : _k > _ref2; i = 0 <= _ref2 ? ++_k : --_k) {\n        if (board.grid[i][i] !== player) {\n          break;\n        }\n        if (i === this.gridSize - 1) {\n          return {\n            X: 1,\n            O: 2\n          }[player];\n        }\n      }\n    }\n    for (i = _l = 0, _ref3 = this.gridSize; 0 <= _ref3 ? _l < _ref3 : _l > _ref3; i = 0 <= _ref3 ? ++_l : --_l) {\n      if (board.grid[i][this.gridSize - 1 - i] !== player) {\n        break;\n      }\n      if (i === this.gridSize - 1) {\n        return {\n          X: 1,\n          O: 2\n        }[player];\n      }\n    }\n    if (board.moveCount === 9) {\n      return 3;\n    }\n    return 0;\n  };\n\n  return TicTacToeReferee;\n\n})(Component);\n",
	"creator": "530df0cbc06854403ba67c15",
	"original": "53ebbb89ea79fa3405bc6f8f",
	"watchers": [
		"530df0cbc06854403ba67c15"
	],
	"__v": 0,
	"commitMessage": "",
	"parent": "53f28bf890f62c3505134e52",
	"official": false,
	"configSchema": {
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [],
	"description": "This Component makes the Thang attack itself.",
	"system": "misc",
	"searchStrings": "tic tac toe referee t ti tic tict ticta tictac tictact tictacto tictactoe tictactoer tictactoere tictactoeref tictactoerefe tictactoerefer",
	"created": "2014-08-24T21:29:44.071Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 23,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "530df0cbc06854403ba67c15"
		},
		{
			"access": "read",
			"target": "public"
		}
	]
}