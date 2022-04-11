var materias = document.getElementById("materia");

var value=0;

function controlMaterias(){
    for (var i = 0; i < materias.length; i++) {
        if (materias[i].type === 'checkbox' && radios[i].checked) {
            value = radios[i].value;       
        }else if(value===0){
            alert("Debes elegir por lo menos 1 materia")
        }
    }

}