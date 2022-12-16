



class Nodo{
    constructor(_usuario){
        this.usuario=_usuario
        this.siguiente =null
    }
}

export class ListaSimple{

    constructor(){
        this.cabecera =null
    }

    agregarUsuario(objeto_usuario){
        let temporal = new Nodo(objeto_usuario)
        temporal.siguiente = this.cabecera
        this.cabecera = temporal

    }

    mostrarUsuario(){
        let temporal = this.cabecera
        while(temporal!= null){
            console.log(temporal.usuario.username)
            console.log(temporal.usuario.nombre)
            console.log(temporal.usuario.dpi)
            console.log(temporal.usuario.telefono)
            console.log(temporal.usuario.password)
            console.log("----------------------")
            temporal = temporal.siguiente
        }
    }

    graficarlistaUsuario(){
        var codigodot = "digraph G{\nlabel=\" Usuario \";\nnode [shape=box];\n graph [rankdir = LR];";
        var temporal = this.cabecera
        var conexiones ="";
        var nodos ="";
        var numnodo= 0; // sirve de identificador
        while (temporal != null) {
            nodos+=  "N" + numnodo + "[label=\"" + temporal.usuario.dpi+"\n" + temporal.usuario.nombre+"\n"+ temporal.usuario.username+"\n"+temporal.usuario.password+"\n"+ temporal.usuario.telefono+"\n"+ temporal.usuario.admin+"\" ];\n"
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



export class Datos_usuario{
    constructor(_username,_nombre,_dpi,_telefono,_password,_admin){
        this.username = _username
        this.nombre =_nombre
        this.dpi = _dpi
        this.telefono = _telefono
        this.password = _password
        this.admin = _admin

    }
    
}

/*
const lista = new ListaSimple()
usuario1 = new Usuario("HQ","Luis Ruben ",556565655,5699999,"controlx123",false)
lista.agregarUsuario(usuario1)



usuario1 = new Usuario("Armin","Oscar Armin",656333333,2465922,"generado2",true)
lista.agregarUsuario(usuario1)
*/









