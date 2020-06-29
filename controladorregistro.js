
let CLIENTE= document.getElementById("NOMBRECLIENTE");
let ayuda= document.getElementById("ayudausuario");

let valido= function(e){
    

    if(CLIENTE.value == ""){
        e.preventDefault();

        CLIENTE.classList.add("is-invalid");
        ayuda.textContent= "Campo Obligatorio";
        ayuda.classList.add("parrafo");
        
    }else{

        CLIENTE.classList.remove("is-invalid");
        ayuda.textContent= "";
        ayuda.classList.remove;
    }

    };


let confirmar= document.getElementById('pedirdomicilio');
confirmar.addEventListener("click", valido );


let apellido= document.getElementById("APELLIDOUSUARIO");
let ayuda2= document.getElementById("usuarioapellido");

let valido2= function(e){
    

    if(apellido.value == ""){
        e.preventDefault();

        apellido.classList.add("is-invalid");
        ayuda2.textContent= "Campo Obligatorio";
        ayuda2.classList.add("parrafo");
        
    }else{

        apellido.classList.remove("is-invalid");
        ayuda.textContent= "";
        ayuda.classList.remove;
    }

    };

let confirmar2= document.getElementById('pedirdomicilio');
confirmar2.addEventListener("click", valido2 );






let direcion= document.getElementById("ubicacionusuario");
let ayuda3= document.getElementById("ubicacion");

let valido3= function(e){
    

    if(direcion.value == ""){
        e.preventDefault();

        direcion.classList.add("is-invalid");
        ayuda3.textContent= "Campo Obligatorio";
        ayuda3.classList.add("parrafo");
        
    }else{

        direcion.classList.remove("is-invalid");
        ayuda3.textContent= "";
        ayuda3.classList.remove;
    }

    };

let confirmar3= document.getElementById('pedirdomicilio');
confirmar3.addEventListener("click", valido3 );