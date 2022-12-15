class Nodo{
    constructor(_cartas){
        this.cartas=_cartas
        this.abajo= null
    }
}

class Pila{
    constructor(){
        this.cima = null
    }
    //metodos especiales
    //metodos de insertar

    push(_carta){
        let temporal = new Nodo(_carta)
        temporal.abajo = this.cima
        this.cima = temporal

    }

    //metodo para eliminar

    pop(){
        let temporal = this.cima
        this.cima= null
        this.cima= temporal.abajo
        temporal = null

    }

    peek(){
        console.log(this.cima.cartas)
    }

    graficar(){
        var codigodot = "digraph Pila{\n[rankdir = LR];\nnode [shape=Mrecord];\n";
        var nodos = "Nodo [xlabel = Pila label = \""
        var temporal = this.cima
        while (temporal!= null){
            if(temporal.abajo == null){
                nodos+= temporal.cartas
            }
             else{
                nodos+= temporal.cartas +" | "
             }
            temporal = temporal.abajo
            }
        nodos+= "\"];\n"
        codigodot += nodos
        codigodot != "\n}"
        
        d3.select("#lienzo").graphiz()
            .widht(900)
            .height(600)
            .renderDot(codigodot)
    }
}

let pila = new Pila()
pila.push("carta 1")

pila.push("carta2")
pila.peek()