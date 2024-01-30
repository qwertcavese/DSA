class node{
    constructor(v){
        this.value=v;
        this.next=0;
    }
}

class doublylinklist{
    constructor(){
        this.head=null
    }
    pushe(a){
        var n=new node(a);
        this.head=n.value;
        this.next++
        this.next=this.head;
        console.log(this.head);
    }
}

var obj=new doublylinklist();
obj.pushe(100)
obj.pushe(200)
obj.pushe(300)
obj.pushe(400)