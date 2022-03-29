var a1 = document.getElementById("a1")
var a2 = document.getElementById("a2")
var a3 = document.getElementById("a3")

var b1 = document.getElementById("b1")
var b2 = document.getElementById("b2")
var b3 = document.getElementById("b3")

var c1 = document.getElementById("c1")
var c2 = document.getElementById("c2")
var c3 = document.getElementById("c3")

var jugador1=1;
var jugador2=0;

function cambiarCelda(){
   
   /* BOLEANO true -> x
              false -> o
    si es true value = x
    contrario 0
    BOOLEANo = !BOOLEAN
    */
   if(a1.value == "-"){
    verificarJugador();
    a1.value = jugador1;
   }
    
}

function verificarJugador(){
    if(jugador1==1){
        jugador1="X";
        jugador2="O";
    }
}
