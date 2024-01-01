class HashTable {
    constructor(size = 10) {
        this.size = size;
        this.table = new Array(size);
    }

    // generate address in table for store data

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = hash + key.charCodeAt(i);
        }

        return hash % this.size;
    }

    // insert key value pair in hashtable

    insertKeyValue(key, value) {
        let index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }

        this.table[index].push({ key, value });
    }
    
    // get value for a perticular key

    getValueForKey(key) {
        let index = this.hash(key);

        if (!this.table[index]) {
            return undefined;
        }

        for (let i = 0; i < this.table[index].length; i++) {
            if(this.table[index][i].key === key){
                return this.table[index][i].value;
            }
        }

        return undefined;
        
    }

    // display key value pair

    displaykeyValue() {
        for (let i = 0; i < this.size; i++) {
            if (this.table[i]) {
              this.table[i].forEach(element => {
                console.log(`${element.key} -> ${element.value}`)
              });
            }
        }
    }

}

let hashtable = new HashTable();
hashtable.insertKeyValue('name', 'mamun');
hashtable.insertKeyValue('versity', 'bubt');

console.log(hashtable.getValueForKey('name'));

hashtable.displaykeyValue();


console.log(hashtable);