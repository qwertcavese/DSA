// class node{
//     constructor(v){
//         this.value=v;
//         this.next=null;
//     }
// }

// class linklist{
//     constructor(){
//         this.head=null;
//         this.size=0;
//     }
//     isempty(){
//         if(this.size==0){
//             return true;
//         }
//     }
//     pushb(a){
//         var n=new node(a)
//             if(this.isempty()){
//                 this.head=n;
//                 this.size++
//             }
//             else{
//                 n.next=this.head
//                 this.head=n;
//                 this.size++;
//             }
//         }
        
//     pushSpl(a,pos){
//         var n=new node(a,pos)
//         var e=this.head;
//         var i=0;
//         if(this.isempty()){
//             this.pushb(a)
//         }
//         else{
//             while(i<pos-2){
//                 e=e.next
//                 i++;
//             }
//             n.next=e.next
//             e.next=n
//         }
//     }

//     print(){
//         var c=this.head;
//         while(c.next!=null){
//             console.log(c.value);
//             c=c.next;
//         }
//         console.log(c.value);
//         console.log(this.head);
//     }
// }

// var z=new linklist();
// z.pushb(100) 
// z.pushb(200) 
// z.pushb(300) 
// z.pushb(400) 
// z.pushb(500) 
// z.pushb(600) 
// z.pushSpl(1000,3)

// var btn=document.querySelector("#btn1")
// btn.addEventListener("click",()=>{
//     z.print();
// })
