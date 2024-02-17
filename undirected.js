class tree{
    constructor(){
        // we can make object in both the way
        
        // this.node=new Object();
        this.node={};
    }
    addVertex(vertexName){
        if(!this.node[vertexName]){
             // we can make Array in both the way
            
            //  this.node[vertexName]=[];
            this.node[vertexName]=new Array();
        }

    }
    addEdge(vertex1,vertex2){
        if(!this.node[vertex1]) this.addVertex(vertex1)
        if(!this.node[vertex2]) this.addVertex(vertex2)
        
        // we have add "vertex2" which is our value to "object" "this.node" whose "key" is "vertex1", i.e "a" 
        this.node[vertex1]=[...vertex2,vertex2]
        this.node[vertex2].push(vertex1)
        console.log(this.node);
    }
}

var treeObj=new tree()
treeObj.addVertex("a")
treeObj.addVertex("b")
treeObj.addVertex("c")
treeObj.addEdge("a","b")
treeObj.addEdge("a","d")
