class Nodo{
    constructor(_equipo){
        this.equipo = _equipo
        this.siguiente = null
        this.anterior = null
    }


}

class Listadoble{
    constructor(){
        this.cabecera =null
        this.ultimo = null
        this.tam =0
    }

    agregarEquipo(_objetoequipo){
        let temporal = new Nodo(_objetoequipo)
        //listavacia
        if(this.cabecera==null){
            this.cabecera = temporal
            this.ultimo = this.cabecera
            this.cabecera.siguiente = this.ultimo
            this.cabecera.anterior = this.ultimo
            this.ultimo.siguiente = this.cabecera
            this.ultimo.anterior = this.cabecera
            this.tam++


        }
        else{
            this.ultimo.siguiente = temporal
            temporal.anterior = this.ultimo
            this.ultimo= temporal
            this.cabecera.anterior = this.ultimo
            this.ultimo.siguiente= this.cabecera
            this.tam++
        }
    }

    mostrarEquipo(){
        let temporal = this.cabecera
        let cont =0
        while(cont<this.tam){
            console.log(temporal.equipo.nombre)
            console.log(temporal.equipo.cantjugadores)
            console.log(temporal.equipo.copas)
            console.log("--------------------------------")
            temporal= temporal.siguiente
            cont++
        }
    }

}


class Equipo{
    constructor(_nombre,_cantjugadores,_copas){
        this.nombre =_nombre
        this.cantjugadores =_cantjugadores
        this.copas =_copas
    }
}

let champions = new Listadoble()
let equipochampions = new Equipo("Real madrid",32, 14)
champions.agregarEquipo(equipochampions)

champions.mostrarEquipo()
