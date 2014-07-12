{
	"_id": "53c0963066ee04aec711819a",
	"index": true,
	"slug": "kmeansreferee",
	"name": "KMeansReferee",
	"codeLanguage": "coffeescript",
	"js": "var KMeansReferee, _ref,\n  __hasProp = {}.hasOwnProperty,\n  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };\n\nKMeansReferee = (function(_super) {\n  __extends(KMeansReferee, _super);\n\n  function KMeansReferee() {\n    _ref = KMeansReferee.__super__.constructor.apply(this, arguments);\n    return _ref;\n  }\n\n  KMeansReferee.className = \"KMeansReferee\";\n\n  KMeansReferee.prototype.points = [];\n\n  KMeansReferee.prototype.getNearestCentroid = function(centroids, point) {\n    var centroid, d2, nearest, nearestDistance, _i, _len;\n    nearest = centroids[0];\n    nearestDistance = 90019001;\n    for (_i = 0, _len = centroids.length; _i < _len; _i++) {\n      centroid = centroids[_i];\n      d2 = (centroid.x - point.x) * (centroid.x - point.x) + (centroid.y - point.y) * (centroid.y - point.y);\n      if (d2 < nearestDistance) {\n        nearest = centroid;\n        nearestDistance = d2;\n      }\n    }\n    return nearest;\n  };\n\n  KMeansReferee.prototype.getIndexOf = function(points, p1) {\n    var i, p2, _i, _len;\n    for (i = _i = 0, _len = points.length; _i < _len; i = ++_i) {\n      p2 = points[i];\n      if (p2.x === p1.x && p2.y === p1.y && p2.clusterIndex === p1.clusterIndex) {\n        return i;\n      }\n    }\n    return -1;\n  };\n\n  KMeansReferee.prototype.setClusterIndex = function(point, newClusterIndex) {\n    return point.clusterIndex = newClusterIndex;\n  };\n\n  KMeansReferee.prototype.getDistance = function(pos1, pos2) {\n    return Math.sqrt(Math.pow(pos2.x - pos1.x, 2) + Math.pow(pos2.y - pos1.y, 2));\n  };\n\n  KMeansReferee.prototype.getWeightedIndex = function(probabilities) {\n    var i, j, probs, r, _i, _j, _ref1, _ref2, _ref3;\n    if (probabilities.length === !this.nrPoints) {\n      this.say(\"I feel a disturbance in the force! (\" + probabilities.length + \" points instead of \" + this.nrPoints + \")\");\n      this.world.endWorld(false, 2);\n    }\n    probs = [];\n    for (i = _i = 0, _ref1 = probabilities.length; 0 <= _ref1 ? _i < _ref1 : _i > _ref1; i = 0 <= _ref1 ? ++_i : --_i) {\n      for (j = _j = 0, _ref2 = probabilities[i] * 100; 0 <= _ref2 ? _j < _ref2 : _j > _ref2; j = 0 <= _ref2 ? ++_j : --_j) {\n        probs.push(i);\n      }\n    }\n    r = (_ref3 = this.randomPool.shift()) != null ? _ref3 : this.world.rand.randf();\n    return probs[Math.floor(r * probs.length)];\n  };\n\n  return KMeansReferee;\n\n})(Component);\n",
	"creator": "512ef4805a67a8c507000001",
	"original": "53a5068558e3233baadf865a",
	"watchers": [
		"512ef4805a67a8c507000001"
	],
	"__v": 0,
	"commitMessage": "Accepted Python snippets patch.",
	"parent": "53bd7947307ca58a91257a3a",
	"patches": [],
	"official": false,
	"configSchema": {
		"additionalProperties": false,
		"type": "object"
	},
	"dependencies": [],
	"description": "This Component is a one-off helper that adds methods for the k-means++ level.",
	"system": "misc",
	"searchStrings": "kmeans referee k km kme kmea kmean kmeans kmeansr kmeansre kmeansref kmeansrefe kmeansrefer",
	"created": "2014-07-12T01:58:08.191Z",
	"version": {
		"isLatestMinor": true,
		"isLatestMajor": true,
		"minor": 13,
		"major": 0
	},
	"permissions": [
		{
			"access": "owner",
			"target": "512ef4805a67a8c507000001"
		},
		{
			"access": "read",
			"target": "public"
		}
	]
}