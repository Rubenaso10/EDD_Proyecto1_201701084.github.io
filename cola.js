class Cola{
    constructor(){
        this.items={}
        this.front=0
        this.end =0
    }

    encolar(data){
        this.items[this.end]= data
        this.end++
    }

    desencolar(){
        if (this.front == this.end){
            return null
        }
        const data= this.items[this.front]
        this.front++
        return data
        
    }
}



