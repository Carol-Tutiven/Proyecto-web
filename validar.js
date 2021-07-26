/*function validar(){
    console.log("EJECUTANDO...");
    return false;
}*/

function validar(){
    var nombre, apellido, email, cedula, celular, direccion, fechas, estado, provincia, terminos;
	var letras, numeros, alfanumerico, correo;

    letras= /^[a-z ,.'-]+$/i;
    numeros= /^[0-9]{10}$/g;
    n=/^[0-9]{10}$/g;
    correo=  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    alfanumerico= /^[a-zA-Z0-9 ]+$/;

	nombre= document.getElementById("nombre").value;
	apellido= document.getElementById("apellido").value;
	email=document.getElementById("email").value;
	cedula= document.getElementById("cedula").value;
	celular=document.getElementById("celular").value;
	direccion=document.getElementById("direccion").value;
	fechas=document.getElementById("fecha").value;
	estado=document.getElementById("estado").value;
	provincia= document.getElementById("provincia").value;
	terminos=document.getElementById("terminos");

  if(nombre==="" || apellido==="" || email==="" || cedula==="" || celular==="" || direccion==="" || fechas==="" || estado==='0' ||
    provincia==='0' ){
        alert("Todos los campos son obligatorios");
        return false;
   }

    if(nombre.length >30){
		alert("El campo nombre es muy largo");
		return false;
	}else if (!letras.test(nombre)){
        alert("El nombre es invalido");
		return false;

    }

    if(apellido.length >30){
		alert("El campo apellido es muy largo");
		return false;
	}else if (!letras.test(apellido)){
        alert("El apellido es invalido");
		return false;

    }

    if(email.length > 100){
		alert("El campo email es muy largo");
		return false;
	}else if (!correo.test(email)){
        alert("El correo es invalido");
		return false;

    }

    if(cedula.length > 10){
		alert("El campo cédula es muy largo");
		return false;
	}else if (!numeros.test(cedula)){
        alert("El número de cédula es invalido");
		return false;
    }

    if(celular.length > 10){
		alert("El campo celular es muy largo");
		return false;
	}else if (!n.test(celular)){
        alert("El número de celular es invalido");
        return false;
    }

    if(direccion.length > 100){
		alert("El campo dirección es muy largo");
		return false;
	}else if (!alfanumerico.test(direccion)){
        alert("La dirección es invalida");
		return false;
    }
    
    if(!terminos.checked){
        alert("Debe aceptar la subcripción", terminos);
       
        return false;
    }
    

    var fecha = fechas.value;
    var anio = fecha.substring(0,4);
     
     if(anio > 2003){
             alert("Feha nacimiento no valida", fecha);
      
          return false;
     }

    


    
    


}