class Graph {
    constructor() {
        this.node =0;
        this.adjecentList = {};
    }
    addVertex(node){
        this.adjecentList[node] =[];
        this.node++;
    }
    addEdge(node1,node2){
        this.adjecentList[node1].push(node2);
        this.adjecentList[node2].push(node1);
    }
}

const myGraph = new Graph();