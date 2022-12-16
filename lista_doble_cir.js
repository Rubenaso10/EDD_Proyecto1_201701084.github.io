class Nodo{
    constructor(_playlist){
        this.playlist = _playlist
        this.siguiente = null
        this.anterior =null
    }
}

export class Listadoble{
    constructor(){
        this.cabecera = null
        this.ultimo= null
        this.tamanio=0
    }

    agregarPlaylist(_objetoPlaylist){
        var temporal = new Nodo(_objetoPlaylist)
        // lista vacia

        if(this.cabecera == null){
            this.cabecera = temporal
            this.ultimo = this.cabecera
            this.cabecera.siguiente = this.ultimo
            this.cabecera.anterior =this.ultimo

            this.ultimo.siguiente = this.cabecera
            this.ultimo.anterior =this.caebecera

            this.tamanio++

        }
        else{
            this.ultimo.siguiente =temporal
            temporal.anterior = this.ultimo
            this.ultimo = temporal
            this.cabecera.anterior = this.ultimo
            this.ultimo.siguiente = this.cabecera
            this.tamanio++


        }
    }
    /*
    mostrarEquipos(){
        let temporal = this.cabecera
        let count =0
        while (count<this.tamanio){
            console.log(temporal.equipo.nombre)
            console.log(temporal.equipo.cantjugadores)
            console.log(temporal.equipo.copas)
            
            console.log("-------------------------------")
            temporal = temporal.siguiente
            count++
        }
    }
    */
    
    graficarlistaPlaylist(){
        var codigodot = "digraph G{\nlabel=\" Playlist \";\nnode [shape=box];\n graph [rankdir = LR];";
        var temporal = this.cabecera
    //    var temporal2 = this.ultimo
        var conexiones ="";
        var nodos ="";
        var numnodo= 0; // sirve de identificador
        while (numnodo < this.tamanio) {
            nodos+=  "N" + numnodo + "[label=\"" + temporal.playlist.name +"\" ];\n"
            if(temporal.siguiente != this.cabecera){
                var auxnum = numnodo+1
                conexiones += "N" + numnodo + " -> N" + auxnum + ";\n"
                conexiones += "N" + auxnum + " -> N" + numnodo + ";\n"
            }
            else{
                conexiones += "N" + numnodo + " -> N" + 0 + ";\n"
                conexiones += "N" + 0 + " -> N" + numnodo + ";\n"
            }
            temporal = temporal.siguiente
            numnodo++;            
        }
        codigodot += "//agregando nodos\n"
        codigodot += nodos+"\n"
        codigodot += "//agregando conexiones o flechas\n"
        codigodot += "{\n"+conexiones+"\n}\n}"
        console.log(codigodot)
        d3.select("#lienzo").graphviz()
            .width(900)
           .height(500)
            .renderDot(codigodot)
    }

}

export class Reproductor{
    constructor(_nombre,_age,_country){
        this.name = _nombre
        this.age =_age
        this.country =_country
    }
}
/*
function render() {  
   Listadoble.graficarlistaEquipo()   
}  


let champions = new Listadoble()
let equipo_champions = new Equipo("Real Madrid","32","14")
champions.agregarEquipo(equipo_champions)


let equipo2 = new Equipo ("PSG", "0","14")
champions.agregarEquipo(equipo2)

let equipo3 = new Equipo ("MS", "0","14")
champions.agregarEquipo(equipo3)

let equipo4 = new Equipo ("ME", "0","14")
champions.agregarEquipo(equipo4)

champions.mostrarEquipos()
champions.graficarlistaEquipo()
*/