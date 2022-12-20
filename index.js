

import {ListaSimple,Datos_usuario} from "./lista_simple.js"
//import {Usuario} from "./lista_simple"

import {Listadoble,ReproductorMusica}from "./lista_doble_cir.js"

import { Listadelistas } from "./lista_de_listas.js"

import {Matriz,DatosMatriz} from "./matriz_dispersa.js"


var miLista = new ListaSimple()
var miListaDoble = new Listadoble()
var listas = new Listadelistas ()
//var lista_cancion = []
var matrizDispersa = new Matriz()



var navUsuario = document.getElementById("login")
var navUsuario2 = document.getElementById("contenedor")
var navUsuario3 = document.getElementById("Usuario")


//navUsuario.style.display="none"

window.validarLogin=function(){
  
  let user = document.getElementById("user1").value
  let password= document.getElementById("pass").value
  let cheque = document.getElementById("admin")
  if (user=="EDD"&& password =="123"&& cheque.checked){
    navUsuario2.style.display ="block"
    navUsuario.style.display = "none"
  }

  else{
    alert("Error en los datos")
  }
    
    

}

window.saveUser=function(){
  let reader = new FileReader()
  document.getElementById('archivo_usuario').click()
  const fileSelector = document.getElementById('archivo_usuario');
  fileSelector.addEventListener("change", (event) => {
    const fileList = event.target.files;
    //console.log(fileList[0]);
    reader.readAsText(fileList[0])
    reader.onload = function (){
      //console.log(reader.result)
      var archivito = JSON.parse(reader.result)
      //console.log(archivito)
      for(window.e of archivito ){
        window.usuario1= new Datos_usuario(window.e.username,window.e.name,window.e.dpi,window.e.phone,window.e.password,window.e.admin )
        miLista.agregarUsuario(window.usuario1)
        console.log(window.usuario1)
     }
     miLista.mostrarUsuario()
     miLista.graficarlistaUsuario()
    }


}
)
  //console.log("-----")
  

}

window.saveArtist = function(){
  let reader = new FileReader()
  document.getElementById('archivo_artista').click()
  const fileSelector = document.getElementById('archivo_artista');
  fileSelector.addEventListener("change", (event) => {
    const fileList = event.target.files;
    //console.log(fileList[0]);
    reader.readAsText(fileList[0])
    reader.onload = function (){
      //console.log(reader.result)
      var arch = JSON.parse(reader.result)
      //console.log(archivito)
      for(window.e of arch ){
        window.usuario2= new ReproductorMusica(window.e.name,window.e.age,window.e.country)
        miListaDoble.agregarPlaylist(usuario2)
        console.log(window.usuario2.name)
        console.log(window.usuario2.age)
        console.log(window.usuario2.country)
     }
     //miLista.mostrarUsuario()
     miListaDoble.graficarlistaPlaylist()
    }


}
)
}


window.saveSongs = function(){
  let reader = new FileReader()
  document.getElementById('archivo_canciones').click()
  const fileSelector = document.getElementById('archivo_canciones');
  fileSelector.addEventListener("change", (event) => {
    const fileList = event.target.files;
    //console.log(fileList[0]);
    reader.readAsText(fileList[0])
    reader.onload = function (){
      //console.log(reader.result)
      var arc = JSON.parse(reader.result)
      //console.log(archivito)
      for(window.e of arc){
        //window.usuario3= new ReproductorMusica(window.e.name,window.e.age,window.e.country)
        //miListaDoble.agregarPlaylist(usuario3)
        //console.log(window.usuario2.name)
        //console.log(window.usuario2.age)
        //console.log(window.usuario2.country)
        listas.InsertarAlbum(window.e.artist)
        listas.InsertarCancion(window.e.artist,window.e.name)
      }
  
        
        

       //listas.InsertarCancion(window.e.artist,window.e.name)
       // listas.InsertarCancion(window.e.artist,window.e.name)
       // listas.InsertarCancion(window.artist,window.e.name)
      
     //miLista.mostrarUsuario()
     listas.graficarlistaArtista()
    }


}
)
}

window.saveCalendar = function(){
  let reader = new FileReader()
  document.getElementById('archivo_musicaprog').click()
  const fileSelector = document.getElementById('archivo_musicaprog');
  fileSelector.addEventListener("change", (event) => {
    const fileList = event.target.files;
    //console.log(fileList[0]);
    reader.readAsText(fileList[0])
    reader.onload = function (){
      //console.log(reader.result)
      var arch = JSON.parse(reader.result)
      //console.log(archivito)
      for(window.e of arch ){
        window.mat_dispersa = new DatosMatriz(window.e.month,window.e.day,window.e.song,window.e.artist)
        matrizDispersa.insertar(window.e.day, window.e.month, mat_dispersa)
      }
     //miLista.mostrarUsuario()
    // miListaDoble.graficarlistaPlaylist()
    matrizDispersa.exportRender()
    }


}
)
}
window.validarusuario=function(){
  navUsuario3.style.display="block"
  navUsuario.style.display="none"
}

window.ingresar=function(){
  let username = document.getElementById("usern").value
  let nombre= document.getElementById("nomb").value
  let dpi = document.getElementById("dpi").value
  let telefono = document.getElementById("phone").value
  let password = document.getElementById("pass").value
  let admin = document.getElementById("admin").value
  window.usuarios= new Datos_usuario(username,nombre,dpi,telefono,password,admin )
  miLista.agregarUsuario(window.usuarios)

  alert("Datos ingresados")

}
window.cancelar=function(){
  navUsuario3.style.display ="none"
  navUsuario.style.display ="block"
}
function ingresar1(){
    //ocultar
    navUsuario.style.display="none"
    //lista.mostrarUsuario()
}

function ingresar(){
     //muestra
    navUsuario.style.display="block"
    lista.mostrarUsuario()
    lista.graficarlistaUsuarios()
   
}


// --------------------------lista simple--------------------------------------

