[
    {
        "snippets": {
            "python": {
                "tab": "getNearestCentroid",
                "code": "self.getNearestCentroid(${1:centroids},${2:point})"
            },
            "javascript": {
                "tab": "getNearestCentroid",
                "code": "this.getNearestCentroid(${1:centroids},${2:point})"
            }
        },
        "args": [
            {
                "description": "The array of centroids from which to select the nearest one",
                "example": {
                    "python": "self.centroids",
                    "javascript": "this.centroids"
                },
                "type": "array",
                "name": "centroids"
            },
            {
                "description": "The current point for which to select the nearest centroid",
                "example": "{ x : 3, y : 5, clusterIndex : 2 , team : 'humans'}",
                "type": "object",
                "name": "point"
            }
        ],
        "example": {
            "python": "self.getNearestCentroid(centroids,self.points[6])",
            "javascript": "this.getNearestCentroid(centroids,this.points[6]);"
        },
        "description": "\n\nReturns the nearest centroid point from a given 'centroids' array and a given point.",
        "type": "function",
        "name": "getNearestCentroid"
    },
    {
        "snippets": {
            "python": {
                "tab": "setClusterIndex",
                "code": "self.setClusterIndex(${1:point},${2:cluster})"
            },
            "javascript": {
                "tab": "setClusterIndex",
                "code": "this.setClusterIndex(${1:point},${2:cluster})"
            }
        },
        "args": [
            {
                "description": "The point you want to update",
                "example": "{ x : 12 , y : 6 , clusterIndex : 1 ,team : 'ogres' }",
                "type": "object",
                "name": "point"
            },
            {
                "description": "The new clusterIndex value",
                "example": "6",
                "type": "integer",
                "name": "newClusterIndex"
            }
        ],
        "example": {
            "python": "self.setClusterIndex(self.point[6],2)",
            "javascript": "this.setClusterIndex(this.point[6],2);"
        },
        "description": "\n\nWill set the clusterIndex for the given point to newIndex.",
        "type": "function",
        "name": "setClusterIndex"
    },
    {
        "snippets": {
            "python": {
                "tab": "getDistance",
                "code": "self.getDistance(${1:pointA},${2:pointB})"
            },
            "javascript": {
                "tab": "getDistance",
                "code": "this.getDistance(${1:pointA},${2:pointB})"
            }
        },
        "args": [
            {
                "description": "The first point",
                "example": {
                    "python": "self.points[5]",
                    "javascript": "this.points[5]"
                },
                "type": "object",
                "name": "point1"
            },
            {
                "description": "The second point",
                "example": {
                    "javascript": "this.points[6]"
                },
                "type": "object",
                "name": "point2"
            }
        ],
        "example": {
            "python": "self.getDistance(self.points[5],self.points[6])",
            "javascript": "this.getDistance(this.points[5],this.points[6]);"
        },
        "description": "\n\nReturns the Euclidian distance between the 2 points.",
        "type": "function",
        "name": "getDistance"
    },
    {
        "snippets": {
            "python": {
                "tab": "getIndexOf",
                "code": "self.getIndexOf(${1:points},${2:point})"
            },
            "javascript": {
                "tab": "getIndexOf",
                "code": "this.getIndexOf(${1:points},${2:point})"
            }
        },
        "args": [
            {
                "description": "The array of points in which to search for",
                "example": "[ { x : 12 , y : 6 , clusterIndex : 1 ,team : 'ogres' } , { x : 12 , y : 6 , clusterIndex : 1 ,t } ]",
                "type": "array",
                "name": "points"
            },
            {
                "description": "The point for which to search in the array",
                "example": {
                    "python": "self.getNearestEnemy()",
                    "javascript": "this.getNearestEnemy()"
                },
                "type": "object",
                "name": "point"
            }
        ],
        "example": {
            "python": "self.getIndexOf(self.points,self.points[5])",
            "javascript": "this.getIndexOf(this.points,this.points[5]);"
        },
        "description": "\nReturns the index of a given point within a given array of points. If not found returns -1.",
        "type": "function",
        "name": "getIndexOf"
    },
    {
        "snippets": {
            "python": {
                "tab": "getWeightedIndex",
                "code": "self.getWeightedIndex(${1:probabilities})"
            },
            "javascript": {
                "tab": "getWeightedIndex",
                "code": "this.getWeightedIndex(${1:probabilities})"
            }
        },
        "args": [
            {
                "description": "The probabilities of each point to be chosen",
                "example": "[ 0.2 ,0.3 , 0.1 , ...]",
                "type": "array",
                "name": "probabilities"
            }
        ],
        "description": "\nReturns randomly an index between 0 and nrPoints based on the probabilities given.",
        "type": "function",
        "name": "getWeightedIndex"
    },
    {
        "snippets": {
            "python": {
                "tab": "points",
                "code": "self.points"
            },
            "javascript": {
                "tab": "points",
                "code": "this.points"
            }
        },
        "description": "The points that form the clusters.",
        "type": "array",
        "name": "points"
    }
]