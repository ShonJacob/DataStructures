class MyArray {
    constructor(){
        this.length = 0;
        this.data = {}; // because key-value pair can store index:value
    }

    get(index){
        return this.data[index];
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop(){
        const lastItem = this.data[this.length -1];
        delete lastItem;
        this.length--;
        return lastItem;
    }

    delete(index){
        const item= this.data[index];
        this.shiftingItems(index);
        this.pop();
        return item;
    }

    shiftingItems(index){
        for(let i=index;i<this.length-1;i++){
            this.data[i]= this.data[i+1]
        }
    }
}

const newArray = new MyArray();
console.log(newArray);
console.log(newArray.push(1));
console.log(newArray.push(2));
console.log(newArray.push(3));
console.log(newArray);
// console.log(newArray.pop());
newArray.delete(0);
console.log(newArray);