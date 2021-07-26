
function validarFormulario() {
  limpiar();

  /*variables de conexion */

  var resultado = true;
  var nombre = document.getElementById("nombres");
  var apellidos = document.getElementById("apellidos");
  var cedula = document.getElementById("cedula");
  var estadoCI = document.getElementById("estado");
  var email = document.getElementById("Email");

  /*Validacion con expresion regulares*/
  var letra = /^[a-z ,.'-]+$/i;
  var correo = /^(([^()[\]\.,;:\s@\"]+(\.[^()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^()[\]\.,;:\s@\"]+\.)+[^()[\]\.,;:\s@\"]{2,})$/i;
  var numeros = /^[0-9]{10}$/g;

  /*Condicion para los input e ingresos de texto*/

  if (nombre.value === "") {
    mensajeError("Ingrese un Nombre ", nombre);
    resultado = false;
  } else if (letra.test(nombre.value) === false) {
    mensajeError("El campo Nombres debe contener solo letras ", nombre);
    resultado = false;
  }

  if (apellidos.value === "") {
    mensajeError("Ingrese un apellido ", apellidos);
    resultado = false;
  } else if (letra.test(apellidos.value) === false) {
    mensajeError("El campo Apellidos debe contener solo letras ", apellidos);
    resultado = false;
  }

  if (cedula.value === "") {
    mensajeError(" Ingrese un número de cédula", cedula);
    resultado = false;
  } else if (!numeros.test(cedula.value)) {
    mensajeError(" El campo cédula solo permite números", cedula);

    resultado = false;
  }

  if (estadoCI.value === null && estadoCI.value === "0") {
    console.log("estado", estadoCI);
    mensajeError("Debe seleccionar un Tipo de identificación", estadoCI);
    resultado = false;
  }

  if (email.value === "") {
    mensajeError("Ingrese un Email ", email);
    resultado = false;
  } else if (!correo.test(email.value)) {
    mensajeError("El email ingresado no es correcto ", email);

    resultado = false;
  }

  return resultado;
}

/*Validacion de los mensajes de error*/

function mensajeError(mensaje, elemento) {
  elemento.focus();
  var nodoPadre = elemento.parentNode;
  var nodoMensaje = document.createElement("h6");
  nodoMensaje.style.color = "red";
  nodoMensaje.style.fontSize = "12px";
  nodoMensaje.style.marginTop = "4px";
  nodoMensaje.style.marginBottom = "15px";
  nodoMensaje.innerHTML = mensaje;
  nodoMensaje.setAttribute("class", "error");
  var clase = nodoMensaje.getAttribute("class");
  nodoPadre.appendChild(nodoMensaje);
}

function limpiar() {
  var mensajesDeError = document.querySelectorAll(".error");
  for (let i = 0; i < mensajesDeError.length; i++) {
    mensajesDeError[i].remove();
  }
}
