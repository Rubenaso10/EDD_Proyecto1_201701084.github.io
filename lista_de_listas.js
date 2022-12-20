class Nodo{
    constructor(_nombrealbum){
        this.nombrealbum = _nombrealbum
        this.siguiente = null
        this.abajo = null
    }

}

class Nodo2{
    constructor(_nombrecancion){
        this.nombrecancion = _nombrecancion
        this.siguiente =null
    }
}

export class Listadelistas{
    constructor(){
        this.cabecera = null
    }
    //metodos de insertar

    InsertarAlbum(_nombrealbum){
        let aux = this.cabecera
        while(aux!= null){
            if(aux.nombrealbum != _nombrealbum){
                console.log(aux.nombrealbum,_nombrealbum)
                return
            }
            aux = aux.siguiente
            
        }
        let temporal = new Nodo(_nombrealbum)
        temporal.siguiente = this.cabecera
        this.cabecera = temporal
    }

    InsertarCancion(_nombrealbum,_nombrecancion){
        let temporalalbum = this.cabecera
        //recorrer toda la lista de albums
        while(temporalalbum!=null){
            if(temporalalbum.nombrealbum == _nombrealbum){
                console.log("Si se encontró el album" + "  " +_nombrealbum)
                let nuevacancion = new Nodo2(_nombrecancion)
                let iniciocanciones = temporalalbum.abajo
                temporalalbum.abajo = nuevacancion
                nuevacancion.siguiente = iniciocanciones  
                return
            }
            temporalalbum = temporalalbum.siguiente
        }

        if(temporalalbum == null){
            console.log("No se encontró el album")
        }
    }
    MostrarAlbum(){
        let temporal = this.cabecera
        console.log("******ALBUMS********")
        while(temporal!=null){
            
            console.log(temporal.nombrealbum)
            temporal = temporal.siguiente
        }
    }

    MostrarCanciones(_nombrealbum){
        let temporal = this.cabecera
        while(temporal!=null){
            if(temporal.nombrealbum == _nombrealbum){
                console.log("***** Album  " +  _nombrealbum + " *****")
                let temporalcanciones = temporal.abajo
                while(temporalcanciones != null){
                    console.log(temporalcanciones.nombrecancion)
                    temporalcanciones =temporalcanciones.siguiente
                }
                return
            }
            temporal = temporal.siguiente
        

        }
        if (temporal == null){
            console.log("No se pudo encontrar el album solicitado"+_nombrealbum)
        }
    }

    graficarlistaArtista(){

        var codigodot = `digraph G{
            label=" Artista-Cancion ";
            node [shape=box];
             graph [rankdir = "both"];\n`

        var temporal_artista = this.cabecera
      
    //    var temporal2 = this.ultimo
        var conexiones ="";
        var nodos ="";
        var numartista= 0; // sirve de identificador
        var rank ="{ rank = same;"
        while (temporal_artista!=null) {
            var numcanciones= 0
            nodos+= "A"  + numartista + "[label=\"" + temporal_artista.nombrealbum + " \" group="+numartista+" ];\n"
            rank+= "A"+numartista+";"
            var temporal_canciones = temporal_artista.abajo
            if(temporal_canciones!=null){
                conexiones += "C" + 0 + "A" + numartista+" -> " +"A" + numartista+ ";\n"
                conexiones += "A" + numartista+" -> " + "C"+0+"A" + numartista+ ";\n"
               
            }
            if (temporal_artista.siguiente!=null){
                var auxnum = numartista+1
                    conexiones +=  "A" + numartista+" -> A" + auxnum+ ";\n"
                    conexiones +=  "A" + auxnum+" -> A"+numartista+";\n"
            }
            while(temporal_canciones!=null){
                nodos+= "C"  + numcanciones + "A"+numartista+"[label=\"" + temporal_canciones.nombrecancion +"\" group="+numartista+"];\n"
                if (temporal_canciones.siguiente!= null){
                    var auxnum = numcanciones+1
                    conexiones += "C" + auxnum + "A" + numartista+" -> C" + numcanciones+"A" + numartista+ ";\n"
                    conexiones += "C" + numcanciones + "A" + numartista+" -> C" + auxnum + "A"+numartista+";\n"
                }
                temporal_canciones =temporal_canciones.siguiente
                numcanciones++;   
            }
            temporal_artista = temporal_artista.siguiente
            numartista++;            
        }

        rank += "}\n"
        codigodot += "//agregando nodos\n"
        codigodot += nodos+"\n"
        codigodot += "//agregando conexiones o flechas\n"
        codigodot += "{\n"+conexiones+"\n"+rank+"}\n}"
        console.log(codigodot)
        d3.select("#lienzo").graphviz()
            .width(900)
           .height(500)
            .renderDot(codigodot)
    }
}