let usuarioRegister = document.getElementById("usuarioRegister");
let emailRegister = document.getElementById("emailRegister");
let passwordRegister = document.getElementById("passwordRegister");


function favTutorial() {  
    var mylist = document.getElementById("myList");  
    document.getElementById("perfil").value = mylist.options[mylist.selectedIndex].text;  
}  

const verificarVacio = ()=>{

    if(usuarioRegister.value == ""){
        usuarioRegister.style.border = "1px solid red";
    }

    if(emailRegister.value == ""){
        emailRegister.style.border = "1px solid red";
    }

    if(passwordRegister.value == ""){
        passwordRegister.style.border = "1px solid red";
    }

    if(document.getElementById("perfil").value == ""){
        document.getElementById("perfil").style.border = "1px solid red";
    }

}

const guardarInformacion = ()=>{

    let ide = 0;

    if(window.localStorage.getItem("id")){
        ide = parseInt(window.localStorage.getItem("id"));
    }else{
        ide = 1
        window.localStorage.setItem("id",ide);
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

const buscarInformacion = ()=>{
    let ide = 0;
    if(window.localStorage.getItem("id")){
        ide = parseInt(window.localStorage.getItem("id"));
    }else{
        ide = 1
    }
    for(let i = 1; i <= ide; i++){
        const persona = JSON.parse(window.localStorage.getItem("NewUser"+i));
        if(persona != null){
            if(persona.usuario == usuarioRegister.value && persona.password == passwordRegister.value){
                window.localStorage.setItem("id",i);
            }
        }
    }
}

function login(){

}

function registro(){

        verificarVacio();
        guardarInformacion();
        
}
