class node{
    constructor(v){
        // node stores three Element one is "value" second is address of next Element and third is 
        // address of previous Element
        this.value=v;
        this.next=null;
        this.previous=null;
    }
}
class linklist{
    constructor(){
        this.head=null;
        this.size=0;
    }
    isEmpty(){
        return this.size==0 ?true:false;
    }
    

    pushb(a){
        var n=new node(a)
        if(this.isEmpty()){
            this.head=n;
        }
        else{
            n.next=this.head;
            this.head.previous=n;
            this.head=n;
        }
        this.size++;
        console.log(this.head);
        
    }

}

var list=new linklist();
list.pushb(10)
list.pushb(20)
list.pushb(30)
list.pushb(40)
list.pushb(50)