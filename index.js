

import {ListaSimple,Datos_usuario} from "./lista_simple.js"
//import {Usuario} from "./lista_simple"

import {Listadoble,Reproductor}from "./lista_doble_cir.js"

var miLista = new ListaSimple()
var miListaDoble = new Listadoble()
var navUsuario = document.getElementById("login")
var navUsuario2 = document.getElementById("contenedor")


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
      var archivito = JSON.parse(reader.result)
      //console.log(archivito)
      for(window.e of archivito ){
        window.usuario2= new Reproductor(window.e.name,window.e.age,window.e.country)
        console.log(window.usuario2)
     }
     //miLista.mostrarUsuario()
     miListaDoble.graficarlistaPlaylist()
    }


}
)
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

