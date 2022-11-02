// Adjacency Matrix is a way to store Graph => TIME complexity O(v^2) => Big O(1)
// Adjacency List  => Time complexity O(1) => Big O(1)
// add a vertext

class Graph {
    constructor() {
        this.adjacenyList = {}
    }
    addVertex(vertex) {
        if(!this.adjacenyList[vertex]) {
            this.adjacenyList[vertex] = []
            return true
        }
        return false;
    }
}