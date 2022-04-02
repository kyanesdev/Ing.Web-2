var a1;
var a2;
var a3;

var b1;
var b2;
var b3;

var c1;
var c2;
var c3;

var jugador1 = true;
var jugador2 = false;

var buttons = document.querySelectorAll('.boton')

a1 = document.getElementById("a1");
a2 = document.getElementById("a2")
a3 = document.getElementById("a3")

b1 = document.getElementById("b1")
b2 = document.getElementById("b2")
b3 = document.getElementById("b3")

c1 = document.getElementById("c1")
c2 =  document.getElementById("c2")
c3 = document.getElementById("c3")


function manejadorCallback(evento) {

    switch(evento.target.id){
        case a1.id:
            if(a1.value == "-" && jugador1 == true && jugador2 == false){
                a1.value = "X";
                jugador1 = false;
                jugador2 = true;
            }if(a1.value == "-" && jugador1 == false && jugador2 == true){
                a1.value = "O";
                jugador1 = true;
                jugador2 = false;
            }
           
        break;

        case a2.id:
            if(a2.value == "-" && jugador1 == true && jugador2 == false){
                a2.value = "X";
                jugador1 = false;
                jugador2 = true;
            }if(a2.value == "-" && jugador1 == false && jugador2 == true){
                a2.value = "O";
                jugador1 = true;
                jugador2 = false;
            }

        break;

        case a3.id:
            if(a3.value == "-" && jugador1 == true && jugador2 == false){
                a3.value = "X";
                jugador1 = false;
                jugador2 = true;
            }if(a3.value == "-" && jugador1 == false && jugador2 == true){
                a3.value = "O";
                jugador1 = true;
                jugador2 = false;
            }
            
        break;

        case b1.id:
            if(b1.value == "-" && jugador1 == true && jugador2 == false){
                b1.value = "X";
                jugador1 = false;
                jugador2 = true;
            }if(b1.value == "-" && jugador1 == false && jugador2 == true){
                b1.value = "O";
                jugador1 = true;
                jugador2 = false;
            }
        break;

        case b2.id:
            if(b2.value == "-" && jugador1 == true && jugador2 == false){
                b2.value = "X";
                jugador1 = false;
                jugador2 = true;
            }if(b2.value == "-" && jugador1 == false && jugador2 == true){
                b2.value = "O";
                jugador1 = true;
                jugador2 = false;
            }
        break;

        case b3.id:
            if(b3.value == "-" && jugador1 == true && jugador2 == false){
                b3.value = "X";
                jugador1 = false;
                jugador2 = true;
            }if(b3.value == "-" && jugador1 == false && jugador2 == true){
                b3.value = "O";
                jugador1 = true;
                jugador2 = false;
            }
        break;

        case c1.id:
            if(c1.value == "-" && jugador1 == true && jugador2 == false){
                c1.value = "X";
                jugador1 = false;
                jugador2 = true;
            }if(c1.value == "-" && jugador1 == false && jugador2 == true){
                c1.value = "O";
                jugador1 = true;
                jugador2 = false;
            }
        break;

        case c2.id:
            if(c2.value == "-" && jugador1 == true && jugador2 == false){
                c2.value = "X";
                jugador1 = false;
                jugador2 = true;
            }if(c2.value == "-" && jugador1 == false && jugador2 == true){
                c2.value = "O";
                jugador1 = true;
                jugador2 = false;
            }
        break;

        case c3.id:
            if(c3.value == "-" && jugador1 == true && jugador2 == false){
                c3.value = "X";
                jugador1 = false;
                jugador2 = true;
            }if(c3.value == "-" && jugador1 == false && jugador2 == true){
                c3.value = "O";
                jugador1 = true;
                jugador2 = false;
            }
        break;
    }
    
    ganador();
}


for(var i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', manejadorCallback);
 }

 function ganador(){
    if(a1.value == "X" && a2.value == "X" && a3.value == "X"){
        alert("Ganador jugador 1");
    }else{
        if(a1.value == "O" && a2.value == "O" && a3.value == "O"){
            alert("Ganador jugador 2");
        }else{
            if(b1.value == "X" && b2.value == "X" && b3.value == "X"){
                alert("Ganador jugador 1");
            }else{
                if(b1.value == "O" && b2.value == "O" && b3.value == "O"){
                    alert("Ganador jugador 2");
                }else{
                    if(c1.value == "X" && c2.value == "X" && c3.value == "X"){
                        alert("Ganador jugador 1");
                    }else{
                        if(c1.value == "O" && c2.value == "O" && c3.value == "O"){
                            alert("Ganador jugador 2");
                        }else{
                            if(a1.value == "X" && b1.value == "X" && c1.value == "X"){
                                alert("Ganador jugador 1");
                            }else{
                                if(a1.value == "O" && b1.value == "O" && c1.value == "O"){
                                    alert("Ganador jugador 2");
                                }else{
                                    if(a2.value == "X" && b2.value == "X" && c2.value == "X"){
                                        alert("Ganador jugador 1");
                                    }else{
                                        if(a2.value == "O" && b2.value == "O" && c2.value == "O"){
                                            alert("Ganador jugador 2");
                                        }else{
                                            if(a3.value == "X" && b3.value == "X" && c3.value == "X"){
                                                alert("Ganador jugador 1");
                                            }else{
                                                if(a1.value == "X" && b2.value == "X" && c3.value == "X"){
                                                    alert("Ganador jugador 1");
                                                }else{
                                                    if(a1.value == "O" && b2.value == "O" && c3.value == "O"){
                                                        alert("Ganador jugador 2");
                                                    }else{
                                                        if(a3.value == "X" && b2.value == "X" && c1.value == "X"){
                                                            alert("Ganador jugador 1");
                                                        }else{
                                                            if(a3.value == "O" && b2.value == "O" && c1.value == "O"){
                                                                alert("Ganador jugador 2");
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }          
    }
}

function mensajeGanador(){
    
}
