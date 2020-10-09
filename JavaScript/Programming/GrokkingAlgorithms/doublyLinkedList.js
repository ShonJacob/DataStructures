class Node{
    constructor(element){
        this.element = element;
        this.next = null;
        this.previous = null;
    }
}

class doublyLinkedList{
    constructor(){
        this.size = 0;
        this.head = null;
    }

    addElement(element){
        if(element == null){// checks both null and undefined
            return null;
        }
        let node  = new Node(element);
        if(this.size === 0){
            this.head = node; //insert in empty list
            this.size++;
            return this.head;
        }
        else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
            node.previous = current;
            this.size++;
            return  node;
        }
    }

    addElementAtIndex(element, index){
        if(element == null || index == null){
            return null;
        }
        if(index<0 || index>this.size){
            return null;
        }
        if(this.head == null){
            
        }
    }
}

let doubly = new doublyLinkedList();
console.log(doubly.addElement(1));
console.log(doubly.addElement(2));
console.log(doubly.addElement(3));
console.log(doubly.addElement(4));
