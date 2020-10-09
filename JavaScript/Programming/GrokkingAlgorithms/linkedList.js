class Node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.size = 0;
        this.head = null;
    }

    addElement(element){
        let node = new Node(element);
        let current;
        if(this.head == null){
            this.head = node;   // if list is empty
        }
        else{
            current = this.head; // points to a node
            while(current.next){
                current = current.next // while != null, traverse the list to the last node
            }
            current.next = node;
            
        }
        this.size++;
        return node;
    }

    insertElement(element, index){
        
        if(index>this.size || index<0){
            return null;    // wrong index
        }
        else{
            let node = new Node(element);
            let current, previous;
            let counter = 0;
            if(index===0){
                if(this.head == null){
                    this.head = node;   //empty list insertion in beginning
                }
                else{
                    current = this.head;
                    this.head = node;   // non empty list insertion in beginning
                    node.next = current;
                }
            }
            else if(index === this.size){
                current = this.head;
                while(current.next){
                    current = current.next; // insertion at the end of list
                }
                current.next = node;
            }
            else{
                previous = null;
                current = this.head;
                while(counter<index){
                    previous = current; //insertion inbetween elements
                    current = current.next;
                    counter++;
                }
                previous.next = node;
                node.next = current;
            }
            this.size++; 
            return node;
        }
    }

    deleteFromIndex(index){
        let current,previous;
        current = this.head;
        if(index<0 || index>=this.size || index == null){
            return null;    // index given is outside range of size
        }
        if(index === 0){
            if(current.next){
                current = current.next;
                this.head = current;    //we are deleting head
            }
            else{
                current = null;
                this.head = current;   // only 1 element and we are deleting it
            }
        }
        else if(index === this.size-1){
            while(current.next){
                previous = current; // deleting the last item
                current = current.next;
            }
            previous.next = null;
        }
        else{
            let counter = 0;
            while(counter<index){
                previous = current;
                current = current.next; // deleting item at index
                counter++;
            }
            previous.next = current.next;

        }
        this.size --;
        return current;
    }

    deleteElement(element){
        if(this.head == null || element == null){
            return null;    // if list is empty or null element
        }
        else{
            let index = 0;
            let current = this.head;
            while(current !== null){
                if(current.element === element){
                    return this.deleteFromIndex(index); // delete at the given index
                }
                current = current.next;
                index ++;
            }
            return null;
        }
    }

    indexOf(element){
        if(this.head == null || element == null){
            return null;    // if list is empty or null element
        }
        else{
            let index = 0;
            let current = this.head;
            while(current !== null){
                if(current.element === element){
                    return index;
                }
                current = current.next;
                index ++;
            }
        }
        return null;
    }

    isEmpty(){
        return this.size === 0;
    }

    size_ofList(){
        return this.size;
    }

    printList(){
        let current = this.head;
        let Str = "";

        while(current){
            Str = Str + current.element + " ";
            current = current.next;
        }
        console.log(Str);
    }

}


let linkList = new LinkedList();
console.log(linkList.addElement(1));
console.log(linkList.addElement(2));
console.log(linkList.addElement(3));
console.log(linkList.addElement(4));
console.log(linkList.addElement(5));
linkList.printList();
console.log(linkList.insertElement(6,3));
linkList.printList();
console.log(linkList.insertElement(7,3));
linkList.printList();
console.log(linkList.insertElement(0,0));
linkList.printList();
console.log(linkList.deleteFromIndex(3));
linkList.printList();
console.log(linkList.deleteElement(4));
linkList.printList();
console.log(linkList.indexOf(5));
console.log(linkList.size_ofList());
console.log(linkList.isEmpty());