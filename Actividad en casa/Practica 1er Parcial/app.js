let usuarioRegister = document.getElementById("usuarioRegister");
let emailRegister = document.getElementById("emailRegister");
let passwordRegister = document.getElementById("passwordRegister");
let perfil = document.getElementById("perfil");
let formularioRegistro = document.getElementsByName("formularioRegistro");
let formularioLogin = document.getElementsByName("formularioRegistro");

let usuarioLogin = document.getElementById("usuarioLogin");
let emailLogin = document.getElementById("emailLogin");
let passwordLogin = document.getElementById("passwordLogin");

let tablaUsuarios = document.getElementById("tablaUsuarios");

function favTutorial() {  
    var mylist = document.getElementById("myList");  
    document.getElementById("perfil").value = mylist.options[mylist.selectedIndex].text;  
} 

document.formularioRegistro.addEventListener('submit', validarFormulario);

function validarFormulario(formularioRegistro) {

    formularioRegistro.preventDefault(); //Evita el envío del formulario hasta comprobar
    
}

document.formularioLogin.addEventListener('submit', validarFormulario);
function validarFormularioLogin(formularioLogin) {

    formularioLogin.preventDefault(); //Evita el envío del formulario hasta comprobar
    
}
const verificarVacioRegister = ()=>{
        let flag=false;

        if(usuarioRegister.value == "" | emailRegister.value == "" | passwordRegister.value == ""){
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
    
            validarFormulario(formularioRegistro);
            return flag
        }else{
            usuarioRegister.style.border = "1px solid green";
            emailRegister.style.border = "1px solid green";
            passwordRegister.style.border = "1px solid green";
        }
}

const verificarVacioLogin = ()=>{
    let flag=false;

    if(usuarioLogin.value == "" | emailLogin.value == "" | passwordLogin.value == ""){
        if(usuarioRegister.value == ""){
            flag = true;
            usuarioLogin.style.border = "1px solid red";
        }
    
        if(emailLogin.value == ""){
            flag = true;
            emailLogin.style.border = "1px solid red";
        }
    
        if(passwordLogin.value == ""){
            flag = true;
            passwordLogin.style.border = "1px solid red";
        }

        validarFormularioLogin(formularioLogin);
        return flag
    }else{
        usuarioRegister.style.border = "1px solid green";
        emailRegister.style.border = "1px solid green";
        passwordRegister.style.border = "1px solid green";
    }
}

let ocultarPerfilRegistro = document.getElementById("perfilRegistro").style.display = "none";
const desplegarPerfilRegistro = ()=>{
    document.getElementById("perfilRegistro").style.display = "block";
}
const guardarInformacion = () => {
    let ide = 1;

    if(window.localStorage.getItem("id")){
        ide = parseInt(window.localStorage.getItem("id"));
    }

    const persona = {
        usuario: usuarioRegister.value,
        email: emailRegister.value,
        password: passwordRegister.value,
        perfil: "Estandar",
        id: ide
    }

    window.localStorage.setItem("NewUser"+ide, JSON.stringify(persona));
    window.localStorage.setItem("id",ide+1);
    
}


const guardarInformacionAdministrador = ()=>{
    
    let ide = 1;
    desplegarPerfilRegistro();
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
    let ide = 1;

    if(window.localStorage.getItem("id")){
        ide = parseInt(window.localStorage.getItem("id"));
    }else{
        window.localStorage.setItem("id",ide);
    }
    
    for(let i = 1; i <= ide; i++){
        
        let persona = JSON.parse(window.localStorage.getItem("NewUser"+i));
        
            if(persona.usuario === usuarioLogin.value && persona.password === passwordLogin.value && persona.perfil === "Estandar"){
                alert(`Bienvenido estandar: ${persona.usuario}`);
                window.location.href = "./index.html";
            }
           
            if(persona.usuario === usuarioLogin.value && persona.password === passwordLogin.value && persona.perfil === "Avanzado"){
                alert(`Bienvenido avanzado: ${persona.usuario}`);
                window.location.href = "./index.html";
            }
        
            if(persona.usuario === usuarioLogin.value && persona.password === passwordLogin.value && persona.perfil === "Administrador"){
                alert(`Bienvenido admin: ${persona.usuario}`);
                desplegarPerfilRegistro();
                desplegarMostrarTabla();
                formularioLogin.preventDefault();
                window.location.href = "./index.html";
                //Falta hacer que una vez desplegado el admin, se le muestre la tabla de todos los usuarios
            }
        
        
    }
    console.log(perfil.value)
}

let ocultarFormularioRegistro = document.getElementById("opcionRegistro").style.display = "none";
const desplegarFormularioRegistro = ()=>{
    document.getElementById("opcionRegistro").style.display = "block";
}

const eliminarUsuario = ()=>{
    
    let ide;

    if(window.localStorage.getItem("id")){
        ide = parseInt(window.localStorage.getItem("id"));
    }
    for(let i = 1; i < ide; i++){
        window.localStorage.removeItem("NewUser"+ide);
    }
    
}

const generarTabla = ()=>{
    eliminarUsuario();
    let ide;
    if(window.localStorage.getItem("id")){
        ide = parseInt(window.localStorage.getItem("id"));
    }else{
        ide = 1
        window.localStorage.setItem("id",ide);
    }

    for(let i = 1; i <= ide; i++){
        let persona = JSON.parse(window.localStorage.getItem("NewUser"+i));
        let tabla = document.getElementById("tablaUsuarios");
        let tr = document.createElement("tr");
        let tdUsuario = document.createElement("td");
        let tdEmail = document.createElement("td");
        let tdPerfil = document.createElement("td");
        let tdEliminar = document.createElement("td");
        let btnEliminar = document.createElement("button");
        

        btnEliminar.innerHTML = "Eliminar";
        btnEliminar.setAttribute("class","btn btn-danger");
        btnEliminar.setAttribute("id","botonEliminar");
        
        btnEliminar.setAttribute("onclick","eliminarUsuario()");

        tdUsuario.innerHTML = persona.usuario;
        tdUsuario.setAttribute("id","usuarioTabla");
        tdEmail.setAttribute("id","emailTabla");
        tdPerfil.setAttribute("id","perfilTabla");

        tdEmail.innerHTML = persona.email;
        tdPerfil.innerHTML = persona.perfil;
        tdEliminar.appendChild(btnEliminar);
        tr.appendChild(tdUsuario);
        tr.appendChild(tdEmail);
        tr.appendChild(tdPerfil);
        tr.appendChild(tdEliminar);
        tabla.appendChild(tr);
    }

}
tablaUsuarios = document.getElementById("tablaUsuarios").style.display = "none";
const tabla = ()=>{
    document.getElementById("tablaUsuarios").style.display = "block";
    tablaUsuarios.innerHTML = "";
    generarTabla();
}

const loguearse = ()=>{
    if(verificarVacioLogin()){
        return
    }else{
        buscarInformacion();
    }
}

function registro(){

        if(verificarVacioRegister()){
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

let mostrarTabla = document.getElementById("mostrarTabla").style.display = "none";
const desplegarMostrarTabla = ()=>{
    document.getElementById("mostrarTabla").style.display = "block";
}

