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

class Listadelistas{
    constructor(){
        this.cabecera = null
    }
    //metodos de insertar

    InsertarAlbum(_nombrealbum){
        let temporal = new Nodo(_nombrealbum)
        temporal.siguiente = this.cabecera
        this.cabecera = temporal
    }

    InsertarCancion(_nombrealbum,_nombrecancion){
        let temporalalbum = this.cabecera
        //recorrer toda la lista de albums
        while(temporalalbum!=null){
            if(temporalalbum.nombrealbum== _nombrealbum){
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
}

let listadelistas = new Listadelistas()
//album
listadelistas.InsertarAlbum("Verano sin Ti")
listadelistas.InsertarAlbum("Demon days")
listadelistas.InsertarAlbum("The Wall")
listadelistas.MostrarAlbum()
// album Verano sin ti
listadelistas.InsertarCancion("Verano sin Ti","Moscow Mule")
listadelistas.InsertarCancion("Verano sin Ti","Party")
listadelistas.InsertarCancion("Verano sin Ti","Titi me pregunto")
listadelistas.InsertarCancion("Verano sin Ti","Me porto bonito")
//album Demon days
listadelistas.InsertarCancion("Demon days","Dare")
listadelistas.InsertarCancion("Demon days","Dirty Harry")
listadelistas.InsertarCancion("Demon days","El mañana")
//album The Wall
listadelistas.InsertarCancion("The Wall","Hey you")
listadelistas.InsertarCancion("The Wall","Comfortably Numb")
listadelistas.InsertarCancion("The Wall","Feel good Inc")

listadelistas.MostrarCanciones("Demon days")
listadelistas.MostrarCanciones("Verano sin Ti")
listadelistas.MostrarCanciones("The Wall")
