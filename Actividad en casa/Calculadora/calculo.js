const visor = document.getElementById("visor");
var a;
var b;
var operacion = 0;
var res = false;

function decimal() {
  if (visor.value === "0") {
    visor.value = "0.";
  } else {
    mostrar(".");
  }
}


function mostrar(numero) {
  if (visor.value === "0" || res) {
    visor.value = numero;
    res = false;
  } else {
    visor.value += numero;
  }
}


function operandos() {
    if (a === undefined) {
    a = Number(visor.value);
    }else b = Number(visor.value);
    visor.value = 0;
  }

function sumar() {
  operandos();
  if (b !== undefined) {
    a += b;
    visor.value = a;
    reset();
  } else operacion = 1;
}


function restar() {
  operandos();
  if (b !== undefined) {
    a -= b;
    visor.value = a;
    reset();
  } else operacion = 2;
}


function multiplicar() {
  operandos();
  if (b !== undefined) {
    a *= b;
    visor.value = a;
    reset();
  } else operacion = 3;
}


function dividir() {
  operandos();
  if (b !== undefined) {
    a /= b;
    visor.value = a;
    reset();
  } else operacion = 4;
}


function resultado() {
  operandos();
  switch (operacion) {
    case 1:
      a += b;
      break;
    case 2:
      a -= b;
      break;
    case 3:
      a *= b;
      break;
    case 4:
      a /= b;
      break;
    default:
      b = undefined;
      break;
  }
  visor.value = a;
  operacion = 0;
  a = undefined;
  reset();
}


function reset() {
  b = undefined;
  res = true;
}
