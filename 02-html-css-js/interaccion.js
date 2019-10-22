var nombre = "Sin Nombre"
var apellido = "Sin Apellido"
var mensaje = "Sin mensaje"

function escribirNombre() {
    
    var input = document.querySelector("#entrada input[name=nombre]");

    var texto = input.value;

    nombre = texto;            
    
}

function escribirApellido() {
    
    var input = document.querySelector("#entrada input[name=apellido]");

    var texto = input.value;

    apellido = texto;            
    
}


function escribirMensaje() {
    
    var textarea = document.querySelector("#entrada textarea[name=mensaje]");

    var texto = textarea.value;

    mensaje = texto;     

}



function enviarNuevoComentario() {

    var nuevoComentario = document.createElement("li")
    nuevoComentario.setAttribute("class", "comentario")

    var nombre = document.createElement("h1")
    nombre.setAttribute("class", "nombre")
    nombre.innerHTML = nombre
    
    var mensaje = document.createElement("p")
    mensaje.setAttribute("class", "mensaje")
    mensaje.innerHTML = mensaje


    nuevoComentario.appendChild(nombre)
    nuevoComentario.appendChild(mensaje)
    

    var lista = document.querySelector("#mensajes ul")

    lista.appendChild(nuevoComentario)



}

function enviarCopia() {
    // alert( nombre + apellido + " dice: " + mensaje )

    var modelo = document.querySelector("#mensajes .modelo")

    var copia = modelo.cloneNode(true);


    var t = document.createTextNode(nombre + " " + apellido);
    copia.querySelector(".nombre").appendChild(t)

    t = document.createTextNode(mensaje);
    copia.querySelector(".mensaje").appendChild(t) 
    
    
    var lista = document.querySelector("#mensajes ul")


    lista.appendChild( copia )

    copia.setAttribute("class", "comentario");
    


}


