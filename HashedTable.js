// algor for hashed table
// constructor for hased function
class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size);
    }
    // hash function
    _hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i)*23) % this.dataMap.length
        }
        return hash
    }
    // set function
    set(key, value) {
        let index = this._hash(key)
       if(!this.dataMap[index]) {
        this.dataMap[index] = []
       }
       this.dataMap[index].push([key,value])
       return this
    }
    
}

let myHashTable = new HashTable()
myHashTable
