class Nodo{
    constructor(_usuario){
        this.usuario = _usuario
        this.siguiente= null
        
    }
}

//lista es una composicion de nodos

class ListaSimple{
    constructror(){
        this.cabeza=null

    }

    //metodos de la lista
    //insertar

    agregarUsuario(datosUsuario){
       let tempo = new Nodo(datosUsuario)
       tempo.siguiente = this.cabeza
       this.cabeza = tempo
      
    }

    // mostrarlistaPokemon

    mostrarUsuario(){
        let tempo = this.cabeza
        
        while(tempo!=null){
            console.log(tempo.usuario.user)
            console.log(tempo.usuario.nombre)
            console.log(tempo.usuario.dpi)
            console.log(tempo.usuario.telefono)
            console.log(tempo.usuario.password)
            console.log("----------------------")
            tempo = tempo.siguiente
        }
    }
    graficarlistaUsuarios(){
        var codigodot = "digraph G{\nlabel=\" Usuarios \";\nnode [shape=box];\n graph [rankdir = LR];";
        var temporal = this.cabecera
        var conexiones ="";
        var nodos ="";
        var numnodo= 0; // sirve de identificador
        while (temporal != null) {
            nodos+=  "N" + numnodo + "[label=\"" + temporal.usuario.user +"\" ];\n"
            if(temporal.siguiente != null){
                var auxnum = numnodo+1
                conexiones += "N" + numnodo + " -> N" + auxnum + ";\n"
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

class Usuario{
    constructor(_username,_nombre,_dpi,_telefono,_password){
        this.user = _username
        this.nombre=_nombre
        this.dpi =_dpi
        this.telefono =_telefono
        this.password = _password


    }
}


const lista = new ListaSimple()
usuario1 = new Usuario("HQ","Luis Ruben ",556565655,5699999,"controlx123")
lista.agregarUsuario(usuario1)



usuario1 = new Usuario("Armin","Oscar Armin",656333333,2465922,"generado2")
lista.agregarUsuario(usuario1)






