// let sinlgyLinkedList = {
//     head: {
//         value: 1
//         next: {
//             value: 2
//             next: {
//                 value: 3
//                 next: {
//                     value: 4
//                     next: null
//                 }
//             }
//         }
//     }
// }

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class MySinglyLinkedList {
    constructor(value){
        this.head = {
            value: value,
            next:null,
        }
        this.tail = this.head; // Son el mismo objeto, lo que le sucede al head también al tail
        this.length = 1;        
    }
    append(value){
        const newnode = new Node(value);   // Creamos un nodo nuevo
        this.tail.next = newnode; // tanto al tail.next como al head.next apuntan a newnode, es decir cualquier cambio en newnode afecta a tail.next y head.next
        this.tail = newnode;      // cambia la dirección de memoria a la que esta apuntando this.tail, ahora no apunta al head sino a newnode
        this.length++;
        return this;
    }
    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    insert(index,value){
        if(index >= this.length){
            return this.append(value)
        }
        const newNode = new Node(value);
        const firstPointer  = this.getTheIndex(index-1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = holdingPointer;


        this.length++;
        return this;

    }
    getTheIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index) {
            currentNode =currentNode.next;
            counter++;
        }
        return currentNode;
    }
    remove(index){
        if (index === 0){
            this.head = this.head.next
            this.length-- 
            return this
        }
        const firstPointer = this.getTheIndex(index-1);
        const holdingPointer = this.getTheIndex(index + 1);
        firstPointer.next = holdingPointer;
        this.length--;
        return this;


    }
}


let myLinkedList = new MySinglyLinkedList(1);