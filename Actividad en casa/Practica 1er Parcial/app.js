let usuarioRegister = document.getElementById("usuarioRegister");
let emailRegister = document.getElementById("emailRegister");
let passwordRegister = document.getElementById("passwordRegister");
let perfil = document.getElementById("perfil");
let formularioRegistro = document.getElementsByName("formularioRegistro");




function favTutorial() {  
    var mylist = document.getElementById("myList");  
    document.getElementById("perfil").value = mylist.options[mylist.selectedIndex].text;  
} 

document.formularioRegistro.addEventListener('submit', validarFormulario);

function validarFormulario(formularioRegistro) {

    formularioRegistro.preventDefault(); //Evita el envío del formulario hasta comprobar
    
}

const verificarVacio = ()=>{
        let flag=false;

        if(usuarioRegister.value == "" | emailRegister.value == "" | passwordRegister.value == "" | perfil.value == ""){
            if(usuarioRegister.value == ""){
                flag = true;
                usuarioRegister.style.border = "1px solid red";
            }
        
            if(emailRegister.value == ""){
                flag = true;
                emailRegister.style.border = "1px solid red";
            }
        
            if(passwordRegister.value == ""){
                flag = true;
                passwordRegister.style.border = "1px solid red";
            }
        
            if(perfil.value == ""){
                flag = true;
                perfil.style.border = "1px solid red";
            }
            validarFormulario(formularioRegistro);
            return flag
        }else{
            usuarioRegister.style.border = "1px solid green";
            emailRegister.style.border = "1px solid green";
            passwordRegister.style.border = "1px solid green";
            perfil.style.border = "1px solid green";
        }
}


const guardarInformacion = ()=>{
    
    let ide = 1;

    if(window.localStorage.getItem("id")){
        ide = parseInt(window.localStorage.getItem("id"));
    }

    const persona = {
        usuario: usuarioRegister.value,
        email: emailRegister.value,
        password: passwordRegister.value,
        perfil: document.getElementById("perfil").value,
        id: ide
    }

    window.localStorage.setItem("NewUser"+ide, JSON.stringify(persona));
    window.localStorage.setItem("id",ide+1);
}

const verificarRegistroDuplicado = ()=>{
    let flag = false;
    if(window.localStorage.getItem("id")){
        let ide = parseInt(window.localStorage.getItem("id"));
        for(let i = 1; i < ide; i++){
            let persona = JSON.parse(window.localStorage.getItem("NewUser"+i));
            console.log(persona);
            if(persona.usuario == usuarioRegister.value){
                alert("El usuario ya existe");
                flag = true;
            }if(persona.email == emailRegister.value){
                alert("El email ya existe");
                flag = true;
            }else{
                flag = false;
            }
        }
    }

    return flag
}

const buscarInformacion = ()=>{
    let ide = 0;

    if(window.localStorage.getItem("id")){
        ide = parseInt(window.localStorage.getItem("id"));
    }else{
        ide = 1
        window.localStorage.setItem("id",ide);
    }

    for(let i = 1; i <= ide; i++){
        
        let persona = JSON.parse(window.localStorage.getItem("NewUser"+i));
        if(perfil.value == "Estandar"){
            if(persona.usuario == usuarioRegister.value && persona.password == passwordRegister.value){
                alert(`Bienvenido ${persona.usuario}`);
                window.location.href = "./index.html";
            }
        }if(perfil.value == "Avanzado"){
            if(persona.usuario == usuarioRegister.value && persona.password == passwordRegister.value){
                alert(`Bienvenido ${persona.usuario}`);
                window.location.href = "./index.html";
            }
        }
        if(perfil.value == "Administrador"){
            if(persona.usuario == usuarioRegister.value && persona.password == passwordRegister.value){
                alert(`Bienvenido admin: ${persona.usuario}`);
                window.location.href = "./index.html";
                //Falta hacer que una vez desplegado el admin, se le muestre la tabla de todos los usuarios
                //Falta hacer que el admin solo el pueda registrar con nivel de perfil
                //Por otra parte solo los estandar y avanzados pueden registrarse pero no cambiar el nivel de perfil
            }
        }
        
    }
    console.log(perfil.value)
}

let ocultarFormularioRegistro = document.getElementById("opcionRegistro").style.display = "none";
const desplegarFormularioRegistro = ()=>{
    document.getElementById("opcionRegistro").style.display = "block";
}

const loguearse = ()=>{
    if(verificarVacio()){
        return
    }else{
        buscarInformacion();
    }
}

function registro(){

        if(verificarVacio()){
            return
        }
        if(verificarRegistroDuplicado()){
            return
        }else{
            guardarInformacion();
        } 
}

function login(){
    loguearse();
}