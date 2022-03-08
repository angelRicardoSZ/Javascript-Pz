class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
        } else {
            let currentNode = this.root;  
            while(true) {
                if(value < currentNode.value) {
                    // DEBE IR AL LADO IZQUIERDO
                    if(!currentNode.left){
                        // SI NO EXISTE, LO COLOCA
                        currentNode.left = newNode;
                        return this;
                    }
                    // SI YA EXISTE UN NODO, ENTONCES ESE SE VUELVE EN 
                    // EL NODO ACTUAL Y VOLVEMOS AL IF PRINCIPAL
                    currentNode = currentNode.left;
                } else {
                    // DEBE IR AL LADO DERECHO
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
        

    }
    search(value, tree = this.root){
        if(!value){
            return "Ingresar un valor"
        }
        else if(!tree){
            return"El elemento no se encuentra."
        }
        else if(value > tree.value) {
            return this.search(value, tree.right);
        }
        else if(value < tree.value) {
            return this.search(value, tree.left);
        }
        else {
            return tree;
        }
    }
}

const tree = new BinarySearchTree();