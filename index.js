
var navUsuario = document.getElementById("login")
var navUsuario2 = document.getElementById("contenedor")


//navUsuario.style.display="none"

function validarlogin(){
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

function saveUser(){
    console.log("hola mundo ")


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