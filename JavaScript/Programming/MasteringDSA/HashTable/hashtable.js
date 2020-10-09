class HashTable{
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for(let i=0;i<key.length;i++){
            hash = (hash+ key.charCodeAt(i)* i)% this.data.length;
        }
        return hash;
    }
}

const myHashtable = new HashTable(20);
myHashtable.set('grapes', 200);
myHashtable.get('grapes');