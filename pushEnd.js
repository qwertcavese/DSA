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
    pushE(a){
        var n=new node(a)
        var c=this.head;
        if(this.isEmpty()){
            this.head=n;
        }
        else{
            while(c.next!=null){
                c=c.next;
            }
            this.head.next=n;
            n.previous=this.head;
            this.head=n;
        }
        this.size++;
    }
    print(){
        var c=this.head;
        while(c.next!=null){
            console.log(c.value);
            c=c.next
        }
        console.log(c.value);
        console.log(this.head);
    }
}


var list=new linklist();
list.pushE(10)
list.pushE(20)
list.pushE(30)
list.pushE(40)
list.pushE(50)
list.print();