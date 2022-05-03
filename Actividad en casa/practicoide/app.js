let usuario = document.getElementById('usuario');
let apellido = document.getElementById('apellido');
let verUsuarios = document.getElementById("verUsuarios");
let lista = [];

verUsuarios.style.display = "none";






function agregar() {

    let usuarioValue = usuario.value;
    let apellidoValue = apellido.value;

    let personas = {
        usuario: usuarioValue,
        apellido: apellidoValue
    }

    lista.push(personas);
    localStorage.setItem('lista', JSON.stringify(lista));
    

    if(lista.length > 2){
        verUsuarios.style.display = "block";
    }
}



function verUsers() {
    let persona = JSON.parse(window.localStorage.getItem("lista"));
    console.log(persona);



    
    for(let i=0; i<lista.length; i++){
        
        let tabla = document.getElementById("tabla");
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");

        td1.innerHTML = persona[i].usuario;
        td2.innerHTML = persona[i].apellido;

        tr.appendChild(td1);
        tr.appendChild(td2);

        tabla.appendChild(tr);

    
    }
}
