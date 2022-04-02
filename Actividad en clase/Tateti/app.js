var a1;
var a2;
var a3;

var b1;
var b2;
var b3;

var c1;
var c2;
var c3;

var jugador1;
var jugador2;

var celda;

a1 = document.getElementById("a1");
a2 = document.getElementById("a2")
a3 = document.getElementById("a3")

b1 = document.getElementById("b1")
b2 = document.getElementById("b2")
b3 = document.getElementById("b3")

c1 = document.getElementById("c1")
c2 =  document.getElementById("c2")
c3 = document.getElementById("c3")

celda = document.getElementsByName("celda");

//Todas las funciones de la fila a
function cambiarA1(){
    turnos();
}
function cambiarA2(){
    
}
function cambiarA3(){
    
}

//Todas las funciones de la fila b
function cambiarB1(){
    
}
function cambiarB2(){
   
}
function cambiarB3(){
    
}

//Todas las funciones de la fila c
function cambiarC1(){
   
}
function cambiarC2(){
    
}
function cambiarC3(){
    
}

function turnos(){
    jugador1=1;
    jugador2=0;
    if(a1.value=="-" && a2.value=="-" && a3.value=="-" && b1.value=="-" && b2.value=="-" && b3.value=="-" && c1.value=="-" && c2.value=="-" && c3.value=="-" && jugador1==1){
        
        switch(document.addEventListener("click")){
            case a1:
                a1.value = "X";
                jugador1 = 0;
                jugador2 = 1;
                break;
            case a2:
                a2.value = "X";
                jugador1 = 0;
                jugador2 = 1;
                break;
        }
    }
}