class myArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }
    get(index) {
        return this.data[index];
        
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    pop(){
        const lastitem = this.data[this.length-1];
        delete this.data[this.length - 1];
        this.length--;
        return lastitem;
    }
    mydelete(index){
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }
    shiftIndex(index){
        for(let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1]
        this.length--;
    }
    addstart(item){
        let i = this.length
        for(i; i > 0; i--){
            this.data[i] = this.data[i-1];
        }
        this.data[0] = item;
        this.length++
        return this.data;

    }

}

const myarray = new myArray();