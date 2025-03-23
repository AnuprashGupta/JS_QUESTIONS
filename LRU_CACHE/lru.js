/* 
Node {
next: Node | null
prev: Node | null
value: value
}
*/


class LRUCache {
    constructor(capacity){
        this.capacity = Number(capacity);
        this.length = 0;
        this.map = new Map();
        this.head = null;
        this.tail = null; // LRU node
    }

    #removeNode(node){ // * private fn using #
        if(!node) return;
        
        if(node.prev){
            node.prev.next = node.next;
        }

        if(node.next){
            node.next.prev = node.prev;
        }

        if(node === this.head){
            this.head = this.next;
        }

        if(node === this.tail){
            this.tail = this.prev;
        }

    }

    get(key){

    }

    put(key, value){
        // check if we have the storage
        if(this.length === this.capacity){
            if(!this.map.has(key)){
                this.#removeNode(this.tail)
            }
        }
        // if key already is there
        if(this.map.has(key)){
            //remove the older node
            this.#removeNode(this.map.get(key));
        }

        const node = {
            next: this.head,
            prev: null,
            key,
            value,
        }

        this.map.set(key, node);
        if(this.head !== null){
         this.head.prev = node;   
        }
        this.head = node;

        if(this.tail === null){
            this.tail = node;
        }
        this.length += 1;

    }
    debug() {
        let current = this.head;
        const arr = [];
        while(current !== null){
         arr.push(current);
         current = current.next;   
        }
     return arr.reduce((acc, curr) =>acc.concat(`-->[ [${curr.key}]:[${curr.value}] ]-->`), '')
    }
}

const cache = new LRUCache(3);
cache.put(1, 10);
cache.put(2, 20);
cache.put(3, 30);
cache.put(4, 40);

console.log(cache.debug())