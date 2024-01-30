class node{
    constructor(v){
        this.value=v;
        // next stores address of next element in current variable
        // which means here one variable stores two values one is value itself and another is address of next Element
        this.next=null;
    }
}

class linklist{
    constructor(){
        this.head=null;
        this.size=0;
    }
    isempty(){
        return this.size==0 ? true:false;
    }
    pushEnd(a){
        var n=new node(a)
        // here as first time if condition will be true because list is empty so "c" will be null
        // and from second time else will be true so now "this.head" will store new node so as new 
        // node is created  "c" will store first node and node which is created will be second 
        var c=this.head
        if(this.isempty()){
            this.head=n;
            this.size++;
            console.log("c of if:",c);
        }
        else{
            while(c.next!=null){
                c=c.next;
            }
            c.next=n;
            this.size++;
            console.log("c of else:",c);
        }
    }
    print(){
        var c=this.head;
        while(c.next!=null){
            console.log(c.value);
            c=c.next;
        }
        console.log(c.value);
        console.log(this.head);
    }
   
}

var list=new linklist()
list.pushEnd(100)
list.pushEnd(200)
list.pushEnd(300)
list.pushEnd(400)
list.pushEnd(500)
list.pushEnd(600)
list.print()
