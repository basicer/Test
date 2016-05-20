{
	"_id": "573fa0ad3e910f115e5e4643",
	"searchStrings": "story referee s st sto stor story storyr storyre storyref storyrefe storyrefer",
	"name": "StoryReferee",
	"js": "var EXTRA, HEX_CHARS, SHIFT, StoryReferee, blocks, sha1, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  __slice = [].slice;\n\nHEX_CHARS = '0123456789abcdef'.split('');\n\nEXTRA = [-2147483648, 8388608, 32768, 128];\n\nSHIFT = [24, 16, 8, 0];\n\nblocks = [];\n\nsha1 = function(message) {\n  var a, b, block, bytes, c, code, d, e, end, f, h0, h1, h2, h3, h4, i, index, j, length, notString, start, t;\n  notString = typeof message !== 'string';\n  if (notString && message.constructor === ArrayBuffer) {\n    message = new Uint8Array(message);\n  }\n  h0 = void 0;\n  h1 = void 0;\n  h2 = void 0;\n  h3 = void 0;\n  h4 = void 0;\n  block = 0;\n  code = void 0;\n  end = false;\n  t = void 0;\n  f = void 0;\n  i = void 0;\n  j = void 0;\n  index = 0;\n  start = 0;\n  bytes = 0;\n  length = message.length;\n  h0 = 0x67452301;\n  h1 = 0xEFCDAB89;\n  h2 = 0x98BADCFE;\n  h3 = 0x10325476;\n  h4 = 0xC3D2E1F0;\n  while (true) {\n    blocks[0] = block;\n    blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;\n    if (notString) {\n      i = start;\n      while (index < length && i < 64) {\n        blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];\n        ++index;\n      }\n    } else {\n      i = start;\n      while (index < length && i < 64) {\n        code = message.charCodeAt(index);\n        if (code < 0x80) {\n          blocks[i >> 2] |= code << SHIFT[i++ & 3];\n        } else if (code < 0x800) {\n          blocks[i >> 2] |= (0xc0 | code >> 6) << SHIFT[i++ & 3];\n          blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];\n        } else if (code < 0xd800 || code >= 0xe000) {\n          blocks[i >> 2] |= (0xe0 | code >> 12) << SHIFT[i++ & 3];\n          blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];\n          blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];\n        } else {\n          code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);\n          blocks[i >> 2] |= (0xf0 | code >> 18) << SHIFT[i++ & 3];\n          blocks[i >> 2] |= (0x80 | code >> 12 & 0x3f) << SHIFT[i++ & 3];\n          blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];\n          blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];\n        }\n        ++index;\n      }\n    }\n    bytes += i - start;\n    start = i - 64;\n    if (index === length) {\n      blocks[i >> 2] |= EXTRA[i & 3];\n      ++index;\n    }\n    block = blocks[16];\n    if (index > length && i < 56) {\n      blocks[15] = bytes << 3;\n      end = true;\n    }\n    j = 16;\n    while (j < 80) {\n      t = blocks[j - 3] ^ blocks[j - 8] ^ blocks[j - 14] ^ blocks[j - 16];\n      blocks[j] = t << 1 | t >>> 31;\n      ++j;\n    }\n    a = h0;\n    b = h1;\n    c = h2;\n    d = h3;\n    e = h4;\n    j = 0;\n    while (j < 20) {\n      f = b & c | ~b & d;\n      t = a << 5 | a >>> 27;\n      e = t + f + e + 1518500249 + blocks[j] << 0;\n      b = b << 30 | b >>> 2;\n      f = a & b | ~a & c;\n      t = e << 5 | e >>> 27;\n      d = t + f + d + 1518500249 + blocks[j + 1] << 0;\n      a = a << 30 | a >>> 2;\n      f = e & a | ~e & b;\n      t = d << 5 | d >>> 27;\n      c = t + f + c + 1518500249 + blocks[j + 2] << 0;\n      e = e << 30 | e >>> 2;\n      f = d & e | ~d & a;\n      t = c << 5 | c >>> 27;\n      b = t + f + b + 1518500249 + blocks[j + 3] << 0;\n      d = d << 30 | d >>> 2;\n      f = c & d | ~c & e;\n      t = b << 5 | b >>> 27;\n      a = t + f + a + 1518500249 + blocks[j + 4] << 0;\n      c = c << 30 | c >>> 2;\n      j += 5;\n    }\n    while (j < 40) {\n      f = b ^ c ^ d;\n      t = a << 5 | a >>> 27;\n      e = t + f + e + 1859775393 + blocks[j] << 0;\n      b = b << 30 | b >>> 2;\n      f = a ^ b ^ c;\n      t = e << 5 | e >>> 27;\n      d = t + f + d + 1859775393 + blocks[j + 1] << 0;\n      a = a << 30 | a >>> 2;\n      f = e ^ a ^ b;\n      t = d << 5 | d >>> 27;\n      c = t + f + c + 1859775393 + blocks[j + 2] << 0;\n      e = e << 30 | e >>> 2;\n      f = d ^ e ^ a;\n      t = c << 5 | c >>> 27;\n      b = t + f + b + 1859775393 + blocks[j + 3] << 0;\n      d = d << 30 | d >>> 2;\n      f = c ^ d ^ e;\n      t = b << 5 | b >>> 27;\n      a = t + f + a + 1859775393 + blocks[j + 4] << 0;\n      c = c << 30 | c >>> 2;\n      j += 5;\n    }\n    while (j < 60) {\n      f = b & c | b & d | c & d;\n      t = a << 5 | a >>> 27;\n      e = t + f + e - 1894007588 + blocks[j] << 0;\n      b = b << 30 | b >>> 2;\n      f = a & b | a & c | b & c;\n      t = e << 5 | e >>> 27;\n      d = t + f + d - 1894007588 + blocks[j + 1] << 0;\n      a = a << 30 | a >>> 2;\n      f = e & a | e & b | a & b;\n      t = d << 5 | d >>> 27;\n      c = t + f + c - 1894007588 + blocks[j + 2] << 0;\n      e = e << 30 | e >>> 2;\n      f = d & e | d & a | e & a;\n      t = c << 5 | c >>> 27;\n      b = t + f + b - 1894007588 + blocks[j + 3] << 0;\n      d = d << 30 | d >>> 2;\n      f = c & d | c & e | d & e;\n      t = b << 5 | b >>> 27;\n      a = t + f + a - 1894007588 + blocks[j + 4] << 0;\n      c = c << 30 | c >>> 2;\n      j += 5;\n    }\n    while (j < 80) {\n      f = b ^ c ^ d;\n      t = a << 5 | a >>> 27;\n      e = t + f + e - 899497514 + blocks[j] << 0;\n      b = b << 30 | b >>> 2;\n      f = a ^ b ^ c;\n      t = e << 5 | e >>> 27;\n      d = t + f + d - 899497514 + blocks[j + 1] << 0;\n      a = a << 30 | a >>> 2;\n      f = e ^ a ^ b;\n      t = d << 5 | d >>> 27;\n      c = t + f + c - 899497514 + blocks[j + 2] << 0;\n      e = e << 30 | e >>> 2;\n      f = d ^ e ^ a;\n      t = c << 5 | c >>> 27;\n      b = t + f + b - 899497514 + blocks[j + 3] << 0;\n      d = d << 30 | d >>> 2;\n      f = c ^ d ^ e;\n      t = b << 5 | b >>> 27;\n      a = t + f + a - 899497514 + blocks[j + 4] << 0;\n      c = c << 30 | c >>> 2;\n      j += 5;\n    }\n    h0 = h0 + a << 0;\n    h1 = h1 + b << 0;\n    h2 = h2 + c << 0;\n    h3 = h3 + d << 0;\n    h4 = h4 + e << 0;\n    if (!!end) {\n      break;\n    }\n  }\n  return HEX_CHARS[h0 >> 28 & 0x0F] + HEX_CHARS[h0 >> 24 & 0x0F] + HEX_CHARS[h0 >> 20 & 0x0F] + HEX_CHARS[h0 >> 16 & 0x0F] + HEX_CHARS[h0 >> 12 & 0x0F] + HEX_CHARS[h0 >> 8 & 0x0F] + HEX_CHARS[h0 >> 4 & 0x0F] + HEX_CHARS[h0 & 0x0F] + HEX_CHARS[h1 >> 28 & 0x0F] + HEX_CHARS[h1 >> 24 & 0x0F] + HEX_CHARS[h1 >> 20 & 0x0F] + HEX_CHARS[h1 >> 16 & 0x0F] + HEX_CHARS[h1 >> 12 & 0x0F] + HEX_CHARS[h1 >> 8 & 0x0F] + HEX_CHARS[h1 >> 4 & 0x0F] + HEX_CHARS[h1 & 0x0F] + HEX_CHARS[h2 >> 28 & 0x0F] + HEX_CHARS[h2 >> 24 & 0x0F] + HEX_CHARS[h2 >> 20 & 0x0F] + HEX_CHARS[h2 >> 16 & 0x0F] + HEX_CHARS[h2 >> 12 & 0x0F] + HEX_CHARS[h2 >> 8 & 0x0F] + HEX_CHARS[h2 >> 4 & 0x0F] + HEX_CHARS[h2 & 0x0F] + HEX_CHARS[h3 >> 28 & 0x0F] + HEX_CHARS[h3 >> 24 & 0x0F] + HEX_CHARS[h3 >> 20 & 0x0F] + HEX_CHARS[h3 >> 16 & 0x0F] + HEX_CHARS[h3 >> 12 & 0x0F] + HEX_CHARS[h3 >> 8 & 0x0F] + HEX_CHARS[h3 >> 4 & 0x0F] + HEX_CHARS[h3 & 0x0F] + HEX_CHARS[h4 >> 28 & 0x0F] + HEX_CHARS[h4 >> 24 & 0x0F] + HEX_CHARS[h4 >> 20 & 0x0F] + HEX_CHARS[h4 >> 16 & 0x0F] + HEX_CHARS[h4 >> 12 & 0x0F] + HEX_CHARS[h4 >> 8 & 0x0F] + HEX_CHARS[h4 >> 4 & 0x0F] + HEX_CHARS[h4 & 0x0F];\n};\n\nStoryReferee = (function(_super) {\n  __extends(StoryReferee, _super);\n\n  function StoryReferee() {\n    _ref = StoryReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  StoryReferee.className = 'StoryReferee';\n\n  StoryReferee.prototype.sha1 = function(s) {\n    return sha1(s);\n  };\n\n  StoryReferee.prototype.pctfCheckAnswer = function(answer) {\n    var backDoor, correctAnswerHash, playerAnswerHash, _ref1;\n    if (!answer) {\n      return;\n    }\n    playerAnswerHash = this.sha1(answer);\n    correctAnswerHash = (_ref1 = this.world.picoCTFProblem) != null ? _ref1.flag_sha1 : void 0;\n    backDoor = \"cf968486e7a41247ce27b2cb2bbcec8e46ae9bc4\";\n    if ((playerAnswerHash === correctAnswerHash) || (playerAnswerHash === backDoor)) {\n      this.world.picoCTFFlag = answer;\n      return true;\n    } else {\n      return false;\n    }\n  };\n\n  StoryReferee.prototype.chooseAction = function() {\n    return this.playStoryScript();\n  };\n\n  StoryReferee.prototype.attach = function(thang) {\n    StoryReferee.__super__.attach.call(this, thang);\n    return thang.storyContinueAt = this.storyStart || 0;\n  };\n\n  StoryReferee.prototype.playStoryScript = function() {\n    var actor, args, name, time, type;\n    if (!(this.currentStoryData && this.currentStoryData.length > 0)) {\n      return;\n    }\n    if (this.world.age < this.storyContinueAt) {\n      return;\n    }\n    args = this.currentStoryData.shift();\n    time = args.shift();\n    name = args.shift();\n    type = typeof name;\n    if (type === \"string\") {\n      actor = this.world.getThangByID(name || 'Hero Placeholder');\n      if (!(actor != null ? actor.sayWithDuration : void 0)) {\n        return;\n      }\n      actor.preventSayBlocking = true;\n      actor.sayWithDuration(time, args[0]);\n      actor.preventSayBlocking = false;\n    } else if (type === \"function\") {\n      name.call.apply(name, [this].concat(__slice.call(args)));\n    }\n    return this.storyContinueAt = this.world.age + time + this.storyDelay;\n  };\n\n  StoryReferee.prototype.storyEnd = function(state, goalID) {\n    var gid;\n    gid = goalID || 'win';\n    return this.world.setGoalState(gid, state);\n  };\n\n  StoryReferee.prototype.storyMove = function(a, x, y) {\n    var actor, c, target;\n    actor = this.world.getThangByID(a || 'Hero Placeholder');\n    if (!actor) {\n      return;\n    }\n    if (typeof x === 'string') {\n      c = x.trim().toUpperCase();\n      if (c in this.storyCompassToAngle) {\n        a = this.storyCompassToAngle[c];\n        x = actor.pos.x + y * Math.cos(a);\n        y = actor.pos.y + y * Math.sin(a);\n      } else {\n        target = this.world.getThangByID(x.trim() || 'Hero Placeholder');\n        if (!target) {\n          return;\n        }\n        a = Vector.subtract(actor.pos, target.pos).heading();\n        x = target.pos.x + y * Math.cos(a);\n        y = target.pos.y + y * Math.sin(a);\n      }\n    }\n    if (!(typeof x === 'number' && typeof y === 'number')) {\n      return;\n    }\n    return actor.moveXY(x, y);\n  };\n\n  StoryReferee.prototype.storyLook = function(a, x, y) {\n    var actor, angle, c, target;\n    actor = this.world.getThangByID(a || 'Hero Placeholder');\n    if (!actor) {\n      return;\n    }\n    angle = 0;\n    if (typeof x === 'string') {\n      c = x.trim().toUpperCase();\n      if (c in this.storyCompassToAngle) {\n        angle = this.storyCompassToAngle[c];\n      } else {\n        target = this.world.getThangByID(x.trim() || 'Hero Placeholder');\n        if (!target) {\n          return;\n        }\n        angle = Vector.subtract(target.pos, actor.pos).heading();\n      }\n    } else if (typeof x === 'number') {\n      if (typeof y === 'number') {\n        angle = Vector.subtract(new Vector(x, y), actor.pos).heading();\n      } else {\n        angle = x;\n      }\n    }\n    actor.setAction('idle');\n    return actor.rotation = angle;\n  };\n\n  StoryReferee.prototype.storyCompassToAngle = {\n    W: Math.PI,\n    WNW: Math.PI * .875,\n    NW: Math.PI * .75,\n    NNW: Math.PI * .625,\n    N: Math.PI * .50,\n    NNE: Math.PI * .375,\n    NE: Math.PI * .25,\n    ENE: Math.PI * .125,\n    E: 0,\n    ESE: -Math.PI * .125,\n    SE: -Math.PI * .25,\n    SSE: -Math.PI * .375,\n    S: -Math.PI * .50,\n    SSW: -Math.PI * .625,\n    SW: -Math.PI * .75,\n    WSW: -Math.PI * .875\n  };\n\n  StoryReferee.prototype.storyAct = function(who, act, dir) {\n    var actor, _ref1;\n    actor = this.world.getThangByID(who || 'Hero Placeholder');\n    if (!actor) {\n      return;\n    }\n    act = act || 'idle';\n    if (!((_ref1 = actor.actions) != null ? _ref1[act] : void 0)) {\n      return;\n    }\n    if (dir) {\n      this.storyLook(who, dir);\n    }\n    return actor.setAction(act);\n  };\n\n  return StoryReferee;\n\n})(Component);\n",
	"system": "misc",
	"creator": "512ef4805a67a8c507000001",
	"original": "56a7c626de6ad62600203b4a",
	"watchers": [
		"54b1773a75e3055205e5a449",
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"description": "This Component handles Story scripting",
	"codeLanguage": "coffeescript",
	"dependencies": [
		{
			"original": "54977ce657e90bd1903dea72",
			"majorVersion": 0
		}
	],
	"commitMessage": "sayWithoutBlocking",
	"parent": "56d9f38fbade242900a556ac",
	"configSchema": {
		"properties": {
			"storyDelay": {
				"type": "number",
				"description": "Time between story actions.",
				"default": "0.5"
			},
			"storyStart": {
				"description": "Time the story starts.",
				"type": "number",
				"minimum": 0,
				"additionalProperties": true,
				"default": 1
			}
		},
		"default": {
			"storyStart": 1,
			"storyDelay": 0.5
		}
	},
	"slug": "storyreferee",
	"index": true,
	"patches": [],
	"created": "2016-05-20T23:41:33.148Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 9,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "54b1773a75e3055205e5a449"
		},
		{
			"access": "read",
			"target": "public"
		}
	]
}